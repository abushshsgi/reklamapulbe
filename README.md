# AestheticHub

Interactive Bio & Aesthetic Generator Hub — a single-page Next.js utility for social creators.

## Features

- **Aesthetic Font & Symbol Converter** — gothic, bold, wide, and cursive Unicode styles with one-click copy
- **Custom QR Code Studio** — colored QR codes for profiles/links with PNG download
- **Social Media Mockup Previewer** — live glassmorphism card preview inside a mobile frame
- **Ad-ready slots** — standard `728x90`, `300x250`, and `320x50` containers with stable IDs for script injection

## Stack

- Next.js (App Router)
- Tailwind CSS v4
- Lucide React
- `qrcode` (client-side generation)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Ad injection

Placeholders live in the page with IDs:

- `#ad-leaderboard-top` / `#ad-leaderboard-bottom` — 728×90
- `#ad-sidebar-primary` / `#ad-sidebar-secondary` / `#ad-native-mid` — 300×250
- `#ad-mobile-banner` — 320×50

Inject scripts via `src/app/layout.tsx` `<head>` (or Next.js `Script`) targeting those IDs.
