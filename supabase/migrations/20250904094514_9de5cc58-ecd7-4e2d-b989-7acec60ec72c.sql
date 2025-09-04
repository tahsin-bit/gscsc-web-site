-- Make payment fields nullable for cash payments
ALTER TABLE public.join_requests 
ALTER COLUMN account_name DROP NOT NULL,
ALTER COLUMN account_number DROP NOT NULL,
ALTER COLUMN transaction_id DROP NOT NULL;