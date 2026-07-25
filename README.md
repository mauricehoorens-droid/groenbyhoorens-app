# Groen By Hoorens — Versie B (Next.js)

De herbouwde versie van de site in de moderne stack: **Next.js 15 + Tailwind v4 + Supabase**.
Zelfde ontwerp als de statische versie (dezelfde CSS en foto's), maar componentgebaseerd,
met een contactformulier dat aanvragen in een echte database (Supabase) opslaat.

## Belangrijk (waarom lokaal draaien)
`npm install` en `npm run dev` moeten op je **Mac** draaien (via Antigravity of Terminal),
**niet** in een online sandbox — anders krijg je een `lightningcss.darwin` fout.

## 1. Lokaal starten
```bash
cd site-nextjs
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
npm run dev          # draait op http://localhost:4000
```

## 2. Supabase koppelen (voor het contactformulier)
1. Maak een gratis project op https://supabase.com.
2. Voer de inhoud van `supabase-schema.sql` uit in de SQL-editor (maakt de tabel `aanvragen`).
3. Kopieer `.env.local.example` naar `.env.local` en vul in:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY` (Settings → API → service_role — geheim houden!)
4. Herstart `npm run dev`. Ingezonden formulieren verschijnen nu in de tabel `aanvragen`.

## 3. Google-reviews (optioneel)
De reviews laden automatisch zodra je een Google Maps API-sleutel invult in
`src/app/SiteScripts.tsx` bij `GBH.apiKey`. Zonder sleutel toont de site netjes een fallback.

## 4. Online zetten (Vercel)
```bash
npm install -g vercel
vercel            # koppel het project
vercel --prod     # productie-deploy
```
Zet daarna dezelfde variabelen uit `.env.local` in Vercel (Project → Settings → Environment Variables).

## Structuur
```
src/app/
  page.tsx            → de volledige startpagina (secties)
  SiteScripts.tsx     → menu, animaties, Google-reviews, formulier-verzending
  globals.css         → originele stijlen (pixel-getrouw) + Tailwind
  layout.tsx          → fonts, metadata
  api/contact/route.ts→ slaat aanvragen op in Supabase
  privacybeleid/, algemene-voorwaarden/, juridische-vermeldingen/  → juridische pagina's
src/lib/supabase.ts   → Supabase-client (server-side)
public/img, public/logo → foto's en logo
supabase-schema.sql   → database-tabel
```

## Verschil met Versie A (statisch)
| | Versie A (statisch) | Versie B (Next.js) |
|---|---|---|
| Hosting | Netlify (drag & drop of Git) | Vercel (of Netlify) |
| Bewerken | Decap CMS op /admin | In code / uit te breiden met CMS |
| Contactformulier | Netlify Forms | Supabase-database |
| Bouwstap | geen | `npm run build` |
| Snelheid opzetten | minuten | wat meer setup |
