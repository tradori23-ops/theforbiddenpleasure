create table if not exists reading_progress (
  user_id uuid not null references auth.users(id) on delete cascade,
  catalog_id text not null,
  last_read_at timestamptz not null default now(),
  primary key (user_id, catalog_id)
);

alter table reading_progress enable row level security;

drop policy if exists "reading progress select own" on reading_progress;
create policy "reading progress select own" on reading_progress
  for select using (auth.uid() = user_id);

drop policy if exists "reading progress upsert own" on reading_progress;
create policy "reading progress upsert own" on reading_progress
  for insert with check (auth.uid() = user_id);

drop policy if exists "reading progress update own" on reading_progress;
create policy "reading progress update own" on reading_progress
  for update using (auth.uid() = user_id);

notify pgrst, 'reload schema';
