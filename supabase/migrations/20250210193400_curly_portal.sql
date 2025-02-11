/*
  # Clean up unnecessary tables

  This migration removes redundant tables while keeping only the essential ones
  for the chat system:
  - chat_contacts
  - chat_messages

  Tables to be dropped:
  - contacts
  - chat_sessions 
  - chat_conversations
*/

-- Drop unnecessary tables
DROP TABLE IF EXISTS contacts CASCADE;
DROP TABLE IF EXISTS chat_sessions CASCADE;
DROP TABLE IF EXISTS chat_conversations CASCADE;