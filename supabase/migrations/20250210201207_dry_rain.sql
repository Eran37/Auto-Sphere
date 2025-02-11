/*
  # Remove message columns from conversations table
  
  1. Changes
    - Remove message_1 through message_5 columns from conversations table
    - These columns are no longer needed as we only need to store the final contact information
*/

ALTER TABLE conversations 
DROP COLUMN IF EXISTS message_1,
DROP COLUMN IF EXISTS message_2,
DROP COLUMN IF EXISTS message_3,
DROP COLUMN IF EXISTS message_4,
DROP COLUMN IF EXISTS message_5;