-- Create enum for registration status
CREATE TYPE public.registration_status AS ENUM ('pending', 'approved', 'rejected');

-- Create event_categories table
CREATE TABLE public.event_categories (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  active BOOLEAN NOT NULL DEFAULT true,
  display_order INTEGER,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create event_registration_forms table
CREATE TABLE public.event_registration_forms (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  event_id UUID NOT NULL REFERENCES public.events(id) ON DELETE CASCADE,
  category_id UUID NOT NULL REFERENCES public.event_categories(id) ON DELETE CASCADE,
  form_fields JSONB NOT NULL DEFAULT '[]'::jsonb,
  active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(event_id, category_id)
);

-- Create event_registrations table
CREATE TABLE public.event_registrations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  event_id UUID NOT NULL REFERENCES public.events(id) ON DELETE CASCADE,
  category_id UUID NOT NULL REFERENCES public.event_categories(id) ON DELETE CASCADE,
  registration_data JSONB NOT NULL DEFAULT '{}'::jsonb,
  status registration_status NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on all tables
ALTER TABLE public.event_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.event_registration_forms ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.event_registrations ENABLE ROW LEVEL SECURITY;

-- RLS Policies for event_categories
CREATE POLICY "Public can view active categories" 
ON public.event_categories 
FOR SELECT 
USING (active = true);

CREATE POLICY "Admins manage categories - insert" 
ON public.event_categories 
FOR INSERT 
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins manage categories - update" 
ON public.event_categories 
FOR UPDATE 
USING (has_role(auth.uid(), 'admin'::app_role))
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins manage categories - delete" 
ON public.event_categories 
FOR DELETE 
USING (has_role(auth.uid(), 'admin'::app_role));

-- RLS Policies for event_registration_forms
CREATE POLICY "Public can view active forms" 
ON public.event_registration_forms 
FOR SELECT 
USING (active = true);

CREATE POLICY "Admins manage forms - insert" 
ON public.event_registration_forms 
FOR INSERT 
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins manage forms - update" 
ON public.event_registration_forms 
FOR UPDATE 
USING (has_role(auth.uid(), 'admin'::app_role))
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins manage forms - delete" 
ON public.event_registration_forms 
FOR DELETE 
USING (has_role(auth.uid(), 'admin'::app_role));

-- RLS Policies for event_registrations
CREATE POLICY "Anyone can create registrations" 
ON public.event_registrations 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Admins can read all registrations" 
ON public.event_registrations 
FOR SELECT 
USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can update registrations" 
ON public.event_registrations 
FOR UPDATE 
USING (has_role(auth.uid(), 'admin'::app_role))
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete registrations" 
ON public.event_registrations 
FOR DELETE 
USING (has_role(auth.uid(), 'admin'::app_role));

-- Create trigger for updated_at on event_categories
CREATE TRIGGER update_event_categories_updated_at
BEFORE UPDATE ON public.event_categories
FOR EACH ROW
EXECUTE FUNCTION public.set_updated_at();

-- Create trigger for updated_at on event_registration_forms
CREATE TRIGGER update_event_registration_forms_updated_at
BEFORE UPDATE ON public.event_registration_forms
FOR EACH ROW
EXECUTE FUNCTION public.set_updated_at();

-- Insert sample categories
INSERT INTO public.event_categories (name, description, display_order) VALUES
('Student', 'For current students of any institution', 1),
('Professional', 'For working professionals in the industry', 2),
('Researcher', 'For researchers and academics', 3),
('Alumni', 'For alumni of our institution', 4);