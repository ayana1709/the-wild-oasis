import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://xpfdwijfffzqqravrhos.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9  .eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhwZmR3aWpmZmZ6cXFyYXZyaG9zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM5MDQxMTYsImV4cCI6MjAyOTQ4MDExNn0.DY28xtutALaZrsyFD9bBiDN7B - DTMMlSXQ8MdTu0Rk4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
