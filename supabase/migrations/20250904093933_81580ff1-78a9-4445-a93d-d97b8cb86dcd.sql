-- Add section and blood_group columns to join_requests table
ALTER TABLE public.join_requests 
ADD COLUMN section text,
ADD COLUMN blood_group text;