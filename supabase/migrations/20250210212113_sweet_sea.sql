/*
  # Clean slate and create new tables

  1. Changes
    - Drop all existing tables
    - Create new tables for chat and contact form

  2. New Tables
    - `chat_conversations`
      - For storing chatbot conversations
      - Includes user details and chat history
    - `contact_submissions`
      - For storing contact form submissions
      - Includes contact details and business needs

  3. Security
    - Enable RLS on both tables
    - Public insert policies
    - Public select policies for simplicity
*/

-- Drop all existing tables
DROP TABLE IF EXISTS conversations CASCADE;
DROP TABLE IF EXISTS chat_messages CASCADE;
DROP TABLE IF EXISTS chat_contacts CASCADE;
DROP TABLE IF EXISTS chat_sessions CASCADE;
DROP TABLE IF EXISTS chat_conversations CASCADE;
DROP TABLE IF EXISTS contacts CASCADE;

-- Create chat conversations table
CREATE TABLE IF NOT EXISTS chat_conversations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_name text NOT NULL,
  customer_email text NOT NULL,
  customer_phone text NOT NULL,
  business_needs text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create contact form submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  company text NOT NULL,
  phone text NOT NULL,
  email text NOT NULL,
  problem text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE chat_conversations ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policies for chat_conversations
CREATE POLICY "Anyone can insert chat conversations"
  ON chat_conversations
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Anyone can view chat conversations"
  ON chat_conversations
  FOR SELECT
  TO public
  USING (true);

-- Create policies for contact_submissions
CREATE POLICY "Anyone can insert contact submissions"
  ON contact_submissions
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Anyone can view contact submissions"
  ON contact_submissions
  FOR SELECT
  TO public
  USING (true);