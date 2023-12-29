import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lyihdelvurzlacfthyik.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx5aWhkZWx2dXJ6bGFjZnRoeWlrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM3NjYzMjMsImV4cCI6MjAxOTM0MjMyM30.vXDkhQzVRk4jd_oEDgspY6WGvL_9DOdIkMQyLLrWQG8';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
