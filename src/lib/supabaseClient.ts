// src/lib/supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  'https://uykztomhawbtojtwbnlp.supabase.co',  // <-- paste Project URL
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV5a3p0b21oYXdidG9qdHdibmxwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ3NzU2ODYsImV4cCI6MjA3MDM1MTY4Nn0.yrHExS8n5LBHHoUIEUF85s9dk9x-mJfG6FKxIkLSzRE'                  // <-- paste anon public key (NOT service role)
);

// optional: prove it loaded
supabase.auth.getSession().then(() => console.log('Supabase ready'));