-- Create club_partners table
CREATE TABLE public.club_partners (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  organization TEXT,
  role_title TEXT,
  bio TEXT,
  image_url TEXT,
  email TEXT,
  website_url TEXT,
  facebook_url TEXT,
  instagram_url TEXT,
  linkedin_url TEXT,
  twitter_url TEXT,
  display_order INTEGER,
  active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create campus_ambassadors table  
CREATE TABLE public.campus_ambassadors (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  ca_number INTEGER NOT NULL,
  name TEXT NOT NULL,
  points INTEGER NOT NULL DEFAULT 0,
  email TEXT,
  phone TEXT,
  institution TEXT,
  department TEXT,
  image_url TEXT,
  active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(ca_number)
);

-- Enable Row Level Security
ALTER TABLE public.club_partners ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.campus_ambassadors ENABLE ROW LEVEL SECURITY;

-- RLS Policies for club_partners
CREATE POLICY "Public can view active club partners" 
ON public.club_partners 
FOR SELECT 
USING (active = true);

CREATE POLICY "Admins can read all club partners" 
ON public.club_partners 
FOR SELECT 
USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins manage club partners - insert" 
ON public.club_partners 
FOR INSERT 
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins manage club partners - update" 
ON public.club_partners 
FOR UPDATE 
USING (has_role(auth.uid(), 'admin'::app_role))
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins manage club partners - delete" 
ON public.club_partners 
FOR DELETE 
USING (has_role(auth.uid(), 'admin'::app_role));

-- RLS Policies for campus_ambassadors
CREATE POLICY "Public can view active campus ambassadors" 
ON public.campus_ambassadors 
FOR SELECT 
USING (active = true);

CREATE POLICY "Admins can read all campus ambassadors" 
ON public.campus_ambassadors 
FOR SELECT 
USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins manage campus ambassadors - insert" 
ON public.campus_ambassadors 
FOR INSERT 
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins manage campus ambassadors - update" 
ON public.campus_ambassadors 
FOR UPDATE 
USING (has_role(auth.uid(), 'admin'::app_role))
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins manage campus ambassadors - delete" 
ON public.campus_ambassadors 
FOR DELETE 
USING (has_role(auth.uid(), 'admin'::app_role));

-- Create updated_at triggers
CREATE TRIGGER update_club_partners_updated_at
  BEFORE UPDATE ON public.club_partners
  FOR EACH ROW
  EXECUTE FUNCTION public.set_updated_at();

CREATE TRIGGER update_campus_ambassadors_updated_at
  BEFORE UPDATE ON public.campus_ambassadors
  FOR EACH ROW
  EXECUTE FUNCTION public.set_updated_at();

-- Enable realtime for both tables
ALTER TABLE public.club_partners REPLICA IDENTITY FULL;
ALTER TABLE public.campus_ambassadors REPLICA IDENTITY FULL;