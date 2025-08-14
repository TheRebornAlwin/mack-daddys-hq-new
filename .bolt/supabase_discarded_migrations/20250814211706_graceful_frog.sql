/*
  # Fix users table RLS policies

  1. Security Changes
    - Drop existing conflicting INSERT policies on users table
    - Add new INSERT policy for anonymous users to allow checkout data collection
    - Ensure authenticated users can still manage their own data

  2. Changes Made
    - Remove restrictive INSERT policies that prevent anonymous user creation
    - Add policy allowing anonymous users to insert user data during checkout
    - Maintain existing security for authenticated user operations
*/

-- Drop existing INSERT policies that might be conflicting
DROP POLICY IF EXISTS "users_insert_anonymous" ON users;
DROP POLICY IF EXISTS "users_insert_anonymous_and_auth" ON users;

-- Create a new policy that allows anonymous users to insert data
CREATE POLICY "users_insert_checkout" 
  ON users 
  FOR INSERT 
  TO anon, authenticated
  WITH CHECK (true);

-- Ensure authenticated users can still update their own data
CREATE POLICY "users_update_own" 
  ON users 
  FOR UPDATE 
  TO authenticated
  USING (id = auth.uid())
  WITH CHECK (id = auth.uid());

-- Ensure users can read their own data
CREATE POLICY "users_select_own" 
  ON users 
  FOR SELECT 
  TO authenticated
  USING (id = auth.uid());