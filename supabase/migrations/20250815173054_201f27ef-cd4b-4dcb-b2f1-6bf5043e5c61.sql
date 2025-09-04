-- Add cover_image_url column to publications table
ALTER TABLE public.publications 
ADD COLUMN cover_image_url text;