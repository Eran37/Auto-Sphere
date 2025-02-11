/*
  # Clean up unused tables
  
  1. Changes
    - Drop unused tables:
      - chat_contacts
      - chat_messages
    - Keep only the conversations table that serves both the chatbot and contact form
*/

-- Drop unused tables
DROP TABLE IF EXISTS chat_contacts CASCADE;
DROP TABLE IF EXISTS chat_messages CASCADE;