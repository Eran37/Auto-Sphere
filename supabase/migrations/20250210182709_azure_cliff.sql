/*
  # Initial Schema Setup

  1. New Tables
    - `contacts`
      - `id` (uuid, primary key)
      - `name` (text)
      - `company` (text)
      - `phone` (text)
      - `email` (text)
      - `problem` (text)
      - `created_at` (timestamp)
      - `status` (text)

    - `chat_messages`
      - `id` (uuid, primary key)
      - `user_id` (uuid)
      - `message` (text)
      - `created_at` (timestamp)
      - `is_bot` (boolean)

  2. Security
    - Enable RLS on both tables
    - Add policies for authenticated users
*/

-- Contacts table
CREATE TABLE IF NOT EXISTS contacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  company text NOT NULL,
  phone text NOT NULL,
  email text NOT NULL,
  problem text NOT NULL,
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'new'
);

ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can create contacts"
  ON contacts
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Only authenticated users can view contacts"
  ON contacts
  FOR SELECT
  TO authenticated
  USING (true);

-- Chat messages table
CREATE TABLE IF NOT EXISTS chat_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now(),
  is_bot boolean DEFAULT false
);

ALTER TABLE chat_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can insert their own messages"
  ON chat_messages
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can view their own messages"
  ON chat_messages
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);