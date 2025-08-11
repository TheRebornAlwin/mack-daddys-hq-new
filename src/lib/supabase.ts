// src/lib/supabase.ts
import { supabase as shared } from './supabaseClient'; // same folder

export const supabase = shared;

export type User = {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  created_at: string;
  updated_at: string;
};
