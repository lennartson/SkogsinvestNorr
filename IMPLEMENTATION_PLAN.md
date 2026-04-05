# Implementationsplan — Skogsinvest Norr

**Projekt:** Ny webbplats för Skogsinvest Norr AB (skogsfastighetsmäklare i Vännäs, Västerbotten).

**Stack:** Next.js 14 (App Router), Tailwind CSS, Supabase, Vercel.

---

## Fas 1 — Projektsetup

1. Skapa nytt Next.js-projekt: `npx create-next-app@latest skogsinvest-norr --typescript --tailwind --app`
2. Koppla till Vercel via CLI: `vercel link`
3. Skapa nytt Supabase-projekt, spara `SUPABASE_URL` och `SUPABASE_ANON_KEY` som Vercel environment variables
4. Installera beroenden: `@supabase/supabase-js`, `@supabase/ssr`, `lucide-react`

---

## Fas 2 — Supabase-schema

Kör dessa migreringar:

```sql
create table properties (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text unique not null,
  location text,
  hectares numeric,
  price integer,
  status text default 'active', -- active | sold
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

Populera `properties` med befintliga objekt från nuvarande sajt:
- **Mjösjö 5:5** — 149 ha, 6 100 000 kr, Nordmaling vid Lögdeälven
- **Djupsjö 4:27** — 46 ha, 2 100 000 kr, 37 ha skog, ca 5 600 m3sk, älg- och småviltjakt

---

## Fas 3 — Sidor och komponenter

**Sidstruktur (App Router):**

```
app/
  page.tsx              ← Startsida
  till-salu/
    page.tsx            ← Fastighetslistning
    [slug]/page.tsx     ← Fastighetsdetalj
  salja/page.tsx
  kopa/page.tsx
  om/page.tsx
  kontakt/page.tsx
  tjänster/
    ekonomi/page.tsx
    juridik/page.tsx
    generationsskiften/page.tsx
    vardering/page.tsx
components/
  Navbar.tsx
  Footer.tsx
  PropertyCard.tsx
  ContactForm.tsx
  HeroSection.tsx
```

**Startsidan ska ha:**
- Stor hero med skogsbild och rubrik: *"En mäklare med känsla för skog"*
- Befintlig text från Anders bevaras i sin helhet — den är bra
- Statistikrad: t.ex. "Över 30 fastigheter förmedlade" / "Norrland, kust till inland"
- Kort om Anders med porträttfoto
- 2–3 aktuella fastigheter i kortvy
- Tydliga CTA-knappar: "Se till salu" och "Kontakta Anders"

**Fastighetslistning:**
- Grid med `PropertyCard` (bild, titel, ha, pris eller "Såld")
- Filtrera på status: visa aktiva överst, sålda nedan med tydlig "Såld"-badge

**Fastighetsdetalj (`[slug]`):**
- Genererad via ISR (`revalidate: 3600`)
- Bildgalleri, fullständig beskrivning, nyckeltal (ha, m3sk, jakt/fiske)
- Kontaktformulär i sidopanel

**Kontaktformulär:**
- Fält: namn, telefon, e-post, meddelande
- Vid submit: `INSERT` till `contact_leads` i Supabase
- Tacksida eller inline-bekräftelse

---

## Fas 4 — Design

**Färgpalett:**
- Primär: djup skogsgrönt `#1a3a2a` (header, knappar)
- Accent: varm sandbeige `#c9b48a` (hover-states, ikoner)
- Bakgrund: benvit `#f9f6f0`
- Text: `#1f1f1f`

**Typografi:** `Inter` (via `next/font/google`), serif-rubrik: `Lora`

**Ton:** Naturlig, varm, trovärdig. Inga flashiga animationer — subtil fade-in räcker.

---

## Fas 5 — Deploy

1. `vercel --prod` för första deploy
2. Lägg till custom domain i Vercel-dashboard
3. Uppdatera DNS hos domänregistraren: peka `skogsinvestnorr.se` till Vercels namnservrar
4. Aktivera HTTPS (automatiskt via Vercel)

---

## Befintligt innehål att återanvända

Se `CONTENT.md` för texter från sälja/köpa-sidorna — dessa är välskrivna och bör bevaras ordagrant.
