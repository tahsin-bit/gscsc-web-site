-- Add phone column to join_requests table
ALTER TABLE public.join_requests 
ADD COLUMN phone text;