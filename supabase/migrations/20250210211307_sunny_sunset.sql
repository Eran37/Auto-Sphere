/*
  # Update conversations table policies

  This migration ensures the conversations table exists and has the correct policies,
  checking for existing policies before creating new ones.
*/

-- Create table if it doesn't exist
CREATE TABLE IF NOT EXISTS conversations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_name text,
  customer_email text,
  customer_phone text,
  business_needs text,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS if not already enabled
ALTER TABLE conversations ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist and recreate them
DO $$ 
BEGIN
  -- Drop existing policies if they exist
  DROP POLICY IF EXISTS "Anyone can insert conversations" ON conversations;
  DROP POLICY IF EXISTS "Anyone can view conversations" ON conversations;
  
  -- Create new policies
  CREATE POLICY "Anyone can insert conversations"
    ON conversations
    FOR INSERT
    TO public
    WITH CHECK (true);

  CREATE POLICY "Anyone can view conversations"
    ON conversations
    FOR SELECT
    TO public
    USING (true);
EXCEPTION
  WHEN undefined_object THEN
    NULL;
END $$;