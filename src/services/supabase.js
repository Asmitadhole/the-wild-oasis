import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://bjwnonwcslkuzdlhkmpz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJqd25vbndjc2xrdXpkbGhrbXB6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA5NDI2MTUsImV4cCI6MjA0NjUxODYxNX0.38U9Mkfy7mz9ruJN7TnSXfw--RrzKR8BKiL-A0hkTmc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
