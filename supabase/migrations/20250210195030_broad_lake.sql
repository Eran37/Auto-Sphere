/*
  # Chat Conversation Structure

  1. New Tables
    - `conversations`
      - `id` (uuid, primary key)
      - `customer_name` (text)
      - `customer_email` (text)
      - `customer_phone` (text)
      - `business_needs` (text)
      - `message_1` (text)
      - `message_2` (text)
      - `message_3` (text)
      - `message_4` (text)
      - `message_5` (text)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `conversations` table
    - Add policy for public access
*/

CREATE TABLE IF NOT EXISTS conversations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_name text,
  customer_email text,
  customer_phone text,
  business_needs text,
  message_1 text,
  message_2 text,
  message_3 text,
  message_4 text,
  message_5 text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE conversations ENABLE ROW LEVEL SECURITY;

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