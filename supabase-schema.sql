-- Groen By Hoorens — database schema
-- Tabel voor contact-/offerteaanvragen vanaf het contactformulier.

create table if not exists public.aanvragen (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  naam        text not null,
  telefoon    text,
  email       text not null,
  dienst      text,
  bericht     text
);

-- Row Level Security aanzetten. Inserts gebeuren server-side met de service role key,
-- die RLS omzeilt. Er zijn dus GEEN publieke policies nodig; niemand kan de aanvragen
-- via de anon key lezen of schrijven.
alter table public.aanvragen enable row level security;
