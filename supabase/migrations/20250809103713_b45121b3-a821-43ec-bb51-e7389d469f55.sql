-- Create sub_executive_members table
CREATE TABLE public.sub_executive_members (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  title TEXT,
  bio TEXT,
  image_url TEXT,
  email TEXT,
  facebook_url TEXT,
  instagram_url TEXT,
  linkedin_url TEXT,
  twitter_url TEXT,
  github_url TEXT,
  display_order INTEGER,
  active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create alumni_members table
CREATE TABLE public.alumni_members (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  job_title TEXT,
  company TEXT,
  bio TEXT,
  image_url TEXT,
  email TEXT,
  linkedin_url TEXT,
  twitter_url TEXT,
  github_url TEXT,
  graduation_year INTEGER,
  display_order INTEGER,
  active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS for sub_executive_members
ALTER TABLE public.sub_executive_members ENABLE ROW LEVEL SECURITY;

-- Create policies for sub_executive_members
CREATE POLICY "Public can view active sub-executive members" 
ON public.sub_executive_members 
FOR SELECT 
USING (active = true);

CREATE POLICY "Admins manage sub-executive members - insert" 
ON public.sub_executive_members 
FOR INSERT 
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins manage sub-executive members - update" 
ON public.sub_executive_members 
FOR UPDATE 
USING (has_role(auth.uid(), 'admin'::app_role))
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins manage sub-executive members - delete" 
ON public.sub_executive_members 
FOR DELETE 
USING (has_role(auth.uid(), 'admin'::app_role));

-- Enable RLS for alumni_members
ALTER TABLE public.alumni_members ENABLE ROW LEVEL SECURITY;

-- Create policies for alumni_members
CREATE POLICY "Public can view active alumni members" 
ON public.alumni_members 
FOR SELECT 
USING (active = true);

CREATE POLICY "Admins manage alumni members - insert" 
ON public.alumni_members 
FOR INSERT 
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins manage alumni members - update" 
ON public.alumni_members 
FOR UPDATE 
USING (has_role(auth.uid(), 'admin'::app_role))
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins manage alumni members - delete" 
ON public.alumni_members 
FOR DELETE 
USING (has_role(auth.uid(), 'admin'::app_role));

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_sub_executive_members_updated_at
BEFORE UPDATE ON public.sub_executive_members
FOR EACH ROW
EXECUTE FUNCTION public.set_updated_at();

CREATE TRIGGER update_alumni_members_updated_at
BEFORE UPDATE ON public.alumni_members
FOR EACH ROW
EXECUTE FUNCTION public.set_updated_at();