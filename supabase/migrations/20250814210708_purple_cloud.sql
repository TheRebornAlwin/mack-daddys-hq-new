/*
  # Fix users table RLS policy for anonymous inserts

  1. Security Changes
    - Update the existing "Allow anonymous insert" policy to properly allow anonymous users to insert data
    - Ensure anonymous users can create user records during checkout process

  2. Changes Made
    - Drop and recreate the "Allow anonymous insert" policy with correct permissions
    - Allow both anonymous and authenticated users to insert user data
*/

-- Drop the existing policy that's not working correctly
DROP POLICY IF EXISTS "Allow anonymous insert" ON users;

-- Create a new policy that allows anonymous users to insert user data
CREATE POLICY "users_insert_anonymous_and_auth"
  ON users
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);