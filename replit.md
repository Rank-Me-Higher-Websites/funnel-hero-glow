# Ernest Windows - Window Cleaning Service Website

## Overview
A marketing website for Ernest Windows, a Chicagoland window cleaning and home services company. Built with React, Vite, TypeScript, Tailwind CSS, and shadcn/ui components, with a small Express backend that captures leads to a PostgreSQL database.

## Architecture
- **Frontend**: React SPA built with Vite + TypeScript + Tailwind + shadcn/ui
- **Backend**: Express server (`server/index.ts`) that:
  - In dev, mounts Vite as middleware
  - In prod, serves static files from `dist/public`
  - Exposes `POST /api/leads` and `GET /api/leads`
- **Database**: Replit PostgreSQL (`leads` table) accessed via the `pg` driver
- **Routing**: React Router v6
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State / Data fetching**: TanStack Query

## Database Schema
Table `leads`:
- `id` SERIAL PRIMARY KEY
- `full_name`, `email`, `phone` (required)
- `service`, `address`, `details`, `source` (optional)
- `created_at` TIMESTAMP default NOW()

`source` is `"hero"` for the inline hero form, `"popup"` for the dialog form.

## Pages
- `/` — Home page (Index): Hero, Services, Why Us, About, Service Areas, CTA, Footer sections
- `*` — 404 Not Found

## Lead Submission Flow
Both the hero form (`HeroSection.tsx`) and the popup dialog (`QuoteFormDialog.tsx`) submit in parallel to:
1. The n8n webhook (existing CRM integration)
2. `POST /api/leads` (saves into Postgres)
They also fire the Meta Pixel `Lead` event.

## Running the App
```
npm run dev
```
Runs Express + Vite middleware on port 5000.

## Build / Production
- `npm run build` — Vite builds the SPA to `dist/public`, esbuild bundles `server/index.ts` to `dist/server.js`
- `npm run start` — runs the bundled server in production mode (serves static `dist/public` + API)
- Deployment target: `autoscale`

## Key Files
- `server/index.ts` — Express server, API routes, dev/prod mode switching
- `src/App.tsx` — Root app with routing
- `src/pages/Index.tsx` — Home page composition
- `src/components/HeroSection.tsx` — Inline hero quote form
- `src/components/QuoteFormDialog.tsx` — Popup quote form
- `vite.config.ts` — Vite config (output dir `dist/public`)
- `index.html` — Includes Meta Pixel script (id `535781058752307`)

## Notes
- Migrated from Lovable to Replit.
