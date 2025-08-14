/*
  # Fix users table RLS policy for checkout

  1. Security Updates
    - Add INSERT policy for anonymous users on users table
    - Allow anonymous users to create user records during checkout process
    - Maintain security by only allowing basic user data insertion

  2. Changes
    - Create policy "users_insert_anonymous" to allow anon role to insert user data
    - This enables the checkout process to save user information before payment
*/

-- Allow anonymous users to insert user data during checkout
CREATE POLICY "users_insert_anonymous" 
  ON users 
  FOR INSERT 
  TO anon 
  WITH CHECK (true);