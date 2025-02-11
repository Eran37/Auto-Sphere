/*
  # Simplify chat sessions structure
  
  1. Changes
    - Add new simplified chat_conversations table
    - Single row per conversation
    - All data in one JSON column
  
  2. Security
    - Enable RLS
    - Allow public access for conversations
*/

CREATE TABLE IF NOT EXISTS chat_conversations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  data jsonb NOT NULL DEFAULT '{
    "messages": [],
    "contact": {},
    "started_at": null,
    "last_message_at": null
  }'::jsonb,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE chat_conversations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert conversations"
  ON chat_conversations
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Anyone can update their conversation"
  ON chat_conversations
  FOR UPDATE
  TO public
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Anyone can view their conversation"
  ON chat_conversations
  FOR SELECT
  TO public
  USING (true);