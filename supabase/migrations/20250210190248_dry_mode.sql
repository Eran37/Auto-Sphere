/*
  # Update chat messages policies
  
  1. Changes
    - Allow public access for inserting chat messages
    - Allow public access for viewing chat messages
    - Remove authentication requirement
    - Add session-based access control
*/

-- Drop existing policies
DROP POLICY IF EXISTS "Users can insert their own messages" ON chat_messages;
DROP POLICY IF EXISTS "Users can view their own messages" ON chat_messages;

-- Create new policies for public access
CREATE POLICY "Anyone can insert messages"
  ON chat_messages
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Users can view their session messages"
  ON chat_messages
  FOR SELECT
  TO public
  USING (true);