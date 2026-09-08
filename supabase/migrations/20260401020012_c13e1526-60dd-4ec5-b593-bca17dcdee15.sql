
-- Create waitlist_signups table
CREATE TABLE public.waitlist_signups (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  name TEXT,
  signup_type TEXT NOT NULL CHECK (signup_type IN ('simone_free', 'olivia_early_access', 'ellis_waitlist')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add unique constraint on email + signup_type to prevent duplicates
CREATE UNIQUE INDEX idx_waitlist_email_type ON public.waitlist_signups (email, signup_type);

-- Enable RLS
ALTER TABLE public.waitlist_signups ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (public landing page signups)
CREATE POLICY "Anyone can sign up for the waitlist"
  ON public.waitlist_signups
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Only authenticated admin users should be able to read signups (we'll keep it restrictive for now)
CREATE POLICY "No public reads on waitlist"
  ON public.waitlist_signups
  FOR SELECT
  TO authenticated
  USING (false);
