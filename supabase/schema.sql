-- Run this once in your Supabase project's SQL editor.

create table if not exists public.wishing_notes (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  message text not null,
  attending boolean,
  created_at timestamptz not null default now()
);

alter table public.wishing_notes enable row level security;

create policy "Anyone can read wishes"
  on public.wishing_notes for select
  using (true);

create policy "Anyone can add a wish"
  on public.wishing_notes for insert
  with check (true);

-- Optional: turns on realtime so new wishes appear instantly for every guest
alter publication supabase_realtime add table public.wishing_notes;
