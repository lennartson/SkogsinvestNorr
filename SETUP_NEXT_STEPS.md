# Nästa steg — Setup

Fas 1 är nu gjort! Next.js-projektet är skapat med alla beroenden installerade.

## Vad som är gjort:
✓ Next.js 14 (App Router) med TypeScript  
✓ Tailwind CSS konfigurerad  
✓ Supabase SDK installerad  
✓ Lucide-react ikoner  
✓ .env.local skapad

## Nu behöver du:

### 1. Skapa Supabase-projekt
- Gå till [supabase.com](https://supabase.com) och skapa nytt projekt
- Kopiera `SUPABASE_URL` och `SUPABASE_ANON_KEY` 
- Klistra in i `.env.local`

### 2. Kör migrations (Fas 2)
När Supabase är klart, kör dessa SQL-kommandon i Supabase SQL-editor:

```sql
create table properties (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text unique not null,
  location text,
  hectares numeric,
  price integer,
  status text default 'active',
  description text,
  short_description text,
  volume_m3sk integer,
  created_at timestamptz default now()
);

create table property_images (
  id uuid primary key default gen_random_uuid(),
  property_id uuid references properties(id),
  url text not null,
  sort_order integer default 0,
  is_cover boolean default false
);

create table contact_leads (
  id uuid primary key default gen_random_uuid(),
  name text,
  email text,
  phone text,
  message text,
  created_at timestamptz default now()
);
```

### 3. Börja bygga sidor (Fas 3)
Se `IMPLEMENTATION_PLAN.md` för sidstruktur.

### 4. Testa lokalt
```bash
npm run dev
```
Öppna http://localhost:3000

---

**Status:** Ready to build components and pages!
