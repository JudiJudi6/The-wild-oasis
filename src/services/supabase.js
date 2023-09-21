import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://yhigofckesufgqvipuwu.supabase.co";
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InloaWdvZmNrZXN1ZmdxdmlwdXd1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQxODk3MjgsImV4cCI6MjAwOTc2NTcyOH0.agZx94XQH5D4mBvFEo2GwGWG1bOBTws5YoOyQDQ71M8';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
