import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://aojlsqmjbfyvirtochwp.supabase.co";
const supabaseKey =
   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFvamxzcW1qYmZ5dmlydG9jaHdwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU4MjUxMTUsImV4cCI6MjAxMTQwMTExNX0.A-mNNQCNvBO7bOU7yQajoq7rhlYQZp4nW1fPWa3Xlf4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
