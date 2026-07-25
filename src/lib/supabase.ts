import { createClient } from "@supabase/supabase-js";

// Publieke client. RLS staat enkel INSERT toe voor de anon-rol (contactformulier),
// niemand kan de aanvragen uitlezen via deze sleutel.
const url = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

export const supabase = createClient(url, anonKey, {
  auth: { persistSession: false },
});
