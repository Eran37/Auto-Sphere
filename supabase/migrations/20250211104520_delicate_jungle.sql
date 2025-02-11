/*
  # Add company logos table

  1. New Tables
    - `company_logos`
      - `id` (uuid, primary key)
      - `name` (text)
      - `logo_data` (text) - Base64 encoded image data
      - `alt` (text)
      - `class_name` (text)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on `company_logos` table
    - Add policy for public read access
*/

CREATE TABLE IF NOT EXISTS company_logos (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  logo_data text NOT NULL,
  alt text NOT NULL,
  class_name text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE company_logos ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view company logos"
  ON company_logos
  FOR SELECT
  TO public
  USING (true);