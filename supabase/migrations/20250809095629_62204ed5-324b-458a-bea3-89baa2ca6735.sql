
-- Enable UUID generation if not already enabled
create extension if not exists "pgcrypto";

-- 1) Roles and role helper
create type public.app_role as enum ('admin');

create table public.user_roles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  role public.app_role not null,
  unique (user_id, role)
);

alter table public.user_roles enable row level security;

create or replace function public.has_role(_user_id uuid, _role public.app_role)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.user_roles
    where user_id = _user_id
      and role = _role
  );
$$;

-- Allow users to see their own roles; admins can manage everything
create policy "Users can read their own roles"
  on public.user_roles
  for select
  to authenticated
  using (user_id = auth.uid());

create policy "Admins manage roles"
  on public.user_roles
  for all
  to authenticated
  using (public.has_role(auth.uid(), 'admin'))
  with check (public.has_role(auth.uid(), 'admin'));


-- 2) Enums for content
create type public.event_status as enum ('upcoming','past');
create type public.project_type as enum ('research','student','completed');
create type public.publication_type as enum ('journal','conference','research_paper');
create type public.team_group as enum ('faculty','advisory','general');

-- Departments for Join Us (codes are snake_case; labels handled in UI)
create type public.department_type as enum (
  'project_display_research_paper',
  'wall_magazine_scrapbook',
  'press_publications',
  'photography_media',
  'quizzing_circuit',
  'olympiad_circuit',
  'robotics_rocketry',
  'public_relations',
  'it',
  'gaming_affairs'
);

create type public.join_status as enum ('pending','verified','rejected');


-- 3) Helper trigger for updated_at
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;


-- 4) Public content tables (readable by everyone, writable by admins only)

-- Panel > Executive Members
create table public.executive_members (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  title text,
  bio text,
  image_url text,
  email text,
  facebook_url text,
  instagram_url text,
  display_order int,
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
alter table public.executive_members enable row level security;

create trigger set_updated_at_executive_members
before update on public.executive_members
for each row execute function public.set_updated_at();

create policy "Public can view active executive members"
  on public.executive_members
  for select
  to public
  using (active = true);

create policy "Admins manage executive members - insert"
  on public.executive_members
  for insert
  to authenticated
  with check (public.has_role(auth.uid(), 'admin'));

create policy "Admins manage executive members - update"
  on public.executive_members
  for update
  to authenticated
  using (public.has_role(auth.uid(), 'admin'))
  with check (public.has_role(auth.uid(), 'admin'));

create policy "Admins manage executive members - delete"
  on public.executive_members
  for delete
  to authenticated
  using (public.has_role(auth.uid(), 'admin'));


-- Events
create table public.events (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  starts_at timestamptz,
  ends_at timestamptz,
  location text,
  cover_image_url text,
  status public.event_status not null default 'upcoming',
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
alter table public.events enable row level security;

create trigger set_updated_at_events
before update on public.events
for each row execute function public.set_updated_at();

create index events_status_starts_at_idx on public.events (status, starts_at);

create policy "Public can view active events"
  on public.events
  for select
  to public
  using (active = true);

create policy "Admins manage events - insert"
  on public.events
  for insert
  to authenticated
  with check (public.has_role(auth.uid(), 'admin'));

create policy "Admins manage events - update"
  on public.events
  for update
  to authenticated
  using (public.has_role(auth.uid(), 'admin'))
  with check (public.has_role(auth.uid(), 'admin'));

create policy "Admins manage events - delete"
  on public.events
  for delete
  to authenticated
  using (public.has_role(auth.uid(), 'admin'));


-- Team Members (faculty, advisory, general)
create table public.team_members (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  "group" public.team_group not null,
  role_title text,
  bio text,
  image_url text,
  email text,
  facebook_url text,
  instagram_url text,
  display_order int,
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
alter table public.team_members enable row level security;

create trigger set_updated_at_team_members
before update on public.team_members
for each row execute function public.set_updated_at();

create policy "Public can view active team members"
  on public.team_members
  for select
  to public
  using (active = true);

create policy "Admins manage team members - insert"
  on public.team_members
  for insert
  to authenticated
  with check (public.has_role(auth.uid(), 'admin'));

create policy "Admins manage team members - update"
  on public.team_members
  for update
  to authenticated
  using (public.has_role(auth.uid(), 'admin'))
  with check (public.has_role(auth.uid(), 'admin'));

create policy "Admins manage team members - delete"
  on public.team_members
  for delete
  to authenticated
  using (public.has_role(auth.uid(), 'admin'));


-- Projects (research, student, completed)
create table public.projects (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  summary text,
  description text,
  type public.project_type not null,
  repo_url text,
  demo_url text,
  cover_image_url text,
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
alter table public.projects enable row level security;

create trigger set_updated_at_projects
before update on public.projects
for each row execute function public.set_updated_at();

create index projects_type_created_at_idx on public.projects (type, created_at);

create policy "Public can view active projects"
  on public.projects
  for select
  to public
  using (active = true);

create policy "Admins manage projects - insert"
  on public.projects
  for insert
  to authenticated
  with check (public.has_role(auth.uid(), 'admin'));

create policy "Admins manage projects - update"
  on public.projects
  for update
  to authenticated
  using (public.has_role(auth.uid(), 'admin'))
  with check (public.has_role(auth.uid(), 'admin'));

create policy "Admins manage projects - delete"
  on public.projects
  for delete
  to authenticated
  using (public.has_role(auth.uid(), 'admin'));


-- Publications (journal, conference, research_paper)
create table public.publications (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  authors text,
  published_in text,
  year int,
  doi_url text,
  pdf_url text,
  type public.publication_type not null,
  abstract text,
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
alter table public.publications enable row level security;

create trigger set_updated_at_publications
before update on public.publications
for each row execute function public.set_updated_at();

create index publications_type_year_idx on public.publications (type, year);

create policy "Public can view active publications"
  on public.publications
  for select
  to public
  using (active = true);

create policy "Admins manage publications - insert"
  on public.publications
  for insert
  to authenticated
  with check (public.has_role(auth.uid(), 'admin'));

create policy "Admins manage publications - update"
  on public.publications
  for update
  to authenticated
  using (public.has_role(auth.uid(), 'admin'))
  with check (public.has_role(auth.uid(), 'admin'));

create policy "Admins manage publications - delete"
  on public.publications
  for delete
  to authenticated
  using (public.has_role(auth.uid(), 'admin'));


-- 5) Forms submitted from the main website

-- Join Us submissions
create table public.join_requests (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  college_roll text not null,
  email text not null,
  departments public.department_type[] not null default '{}',
  -- Auto-calculated: 200 per selected department
  total_amount numeric(10,2) generated always as (cardinality(departments)::numeric * 200) stored,
  account_name text not null,
  account_number text not null,
  transaction_id text not null,
  status public.join_status not null default 'pending',
  created_at timestamptz not null default now()
);
alter table public.join_requests enable row level security;

create index join_requests_status_created_at_idx on public.join_requests (status, created_at);

-- Anyone can submit; only admins can read/manage
create policy "Anyone can create join requests"
  on public.join_requests
  for insert
  to public
  with check (true);

create policy "Admins can read join requests"
  on public.join_requests
  for select
  to authenticated
  using (public.has_role(auth.uid(), 'admin'));

create policy "Admins can update join requests"
  on public.join_requests
  for update
  to authenticated
  using (public.has_role(auth.uid(), 'admin'))
  with check (public.has_role(auth.uid(), 'admin'));

create policy "Admins can delete join requests"
  on public.join_requests
  for delete
  to authenticated
  using (public.has_role(auth.uid(), 'admin'));


-- Contact Us submissions
create table public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  subject text,
  message text not null,
  handled boolean not null default false,
  created_at timestamptz not null default now()
);
alter table public.contact_messages enable row level security;

create index contact_messages_handled_created_at_idx on public.contact_messages (handled, created_at);

create policy "Anyone can create contact messages"
  on public.contact_messages
  for insert
  to public
  with check (true);

create policy "Admins can read contact messages"
  on public.contact_messages
  for select
  to authenticated
  using (public.has_role(auth.uid(), 'admin'));

create policy "Admins can update contact messages"
  on public.contact_messages
  for update
  to authenticated
  using (public.has_role(auth.uid(), 'admin'))
  with check (public.has_role(auth.uid(), 'admin'));

create policy "Admins can delete contact messages"
  on public.contact_messages
  for delete
  to authenticated
  using (public.has_role(auth.uid(), 'admin'));


-- 6) Visitor analytics
create table public.page_views (
  id uuid primary key default gen_random_uuid(),
  path text not null,
  referrer text,
  user_agent text,
  ip_hash text,
  session_id uuid,
  occurred_at timestamptz not null default now()
);
alter table public.page_views enable row level security;

create index page_views_occurred_at_idx on public.page_views (occurred_at);
create index page_views_path_idx on public.page_views (path);

create policy "Anyone can insert page views"
  on public.page_views
  for insert
  to public
  with check (true);

create policy "Admins can read page views"
  on public.page_views
  for select
  to authenticated
  using (public.has_role(auth.uid(), 'admin'));

-- Optional: simple daily aggregation view for charts
create or replace view public.page_views_daily as
select
  date_trunc('day', occurred_at) as day,
  count(*)::bigint as views
from public.page_views
group by 1
order by 1;
