import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://raguprmztvhrlqriuzho.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJhZ3Vwcm16dHZocmxxcml1emhvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE4NDIwODMsImV4cCI6MTk5NzQxODA4M30.PGpPkTzJiqy8-4NbwxDx1RsxnXNNfO6LoYLLLNRbejk"
);
