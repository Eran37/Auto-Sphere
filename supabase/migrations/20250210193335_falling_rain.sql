/*
  # Update chat system schema

  1. New Tables
    - `chat_contacts` - Stores contact information
      - `id` (uuid, primary key)
      - `name` (text)
      - `company` (text)
      - `phone` (text)
      - `email` (text)
      - `created_at` (timestamptz)

    - `chat_messages` - Stores chat messages
      - `id` (uuid, primary key)
      - `contact_id` (uuid, foreign key)
      - `message` (text)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on both tables
    - Add policies for public access
*/

-- Create contacts table if it doesn't exist
CREATE TABLE IF NOT EXISTS chat_contacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  company text,
  phone text,
  email text,
  created_at timestamptz DEFAULT now()
);

-- Create messages table if it doesn't exist
CREATE TABLE IF NOT EXISTS chat_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  contact_id uuid REFERENCES chat_contacts(id),
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE chat_contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE chat_messages ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DO $$ BEGIN
  DROP POLICY IF EXISTS "Anyone can insert contacts" ON chat_contacts;
  DROP POLICY IF EXISTS "Anyone can view contacts" ON chat_contacts;
  DROP POLICY IF EXISTS "Anyone can insert messages" ON chat_messages;
  DROP POLICY IF EXISTS "Anyone can view messages" ON chat_messages;
EXCEPTION
  WHEN undefined_object THEN
    NULL;
END $$;

-- Create new policies
CREATE POLICY "Anyone can insert contacts"
  ON chat_contacts
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Anyone can view contacts"
  ON chat_contacts
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Anyone can insert messages"
  ON chat_messages
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Anyone can view messages"
  ON chat_messages
  FOR SELECT
  TO public
  USING (true);