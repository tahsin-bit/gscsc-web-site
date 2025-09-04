-- Add payment_type column to join_requests table
ALTER TABLE public.join_requests ADD COLUMN payment_type TEXT DEFAULT 'online';