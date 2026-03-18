# Ernest Windows - Window Cleaning Service Website

## Overview
A marketing website for Ernest Windows, a Chicagoland window cleaning and home services company. Built with React, Vite, TypeScript, Tailwind CSS, and shadcn/ui components.

## Architecture
- **Frontend only** — pure React SPA, no backend
- **Routing**: React Router v6
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State / Data fetching**: TanStack Query (React Query)

## Pages
- `/` — Home page (Index): Hero, Services, Why Us, About, Service Areas, CTA, Footer sections
- `*` — 404 Not Found

## Running the App
```
npm run dev
```
Runs on port 5000.

## Key Files
- `src/App.tsx` — Root app with routing
- `src/pages/Index.tsx` — Home page composition
- `src/components/` — All UI sections and shadcn/ui components
- `vite.config.ts` — Vite config (host `0.0.0.0`, port `5000`)

## Notes
- Migrated from Lovable to Replit. The `lovable-tagger` dev dependency is still listed in package.json but is no longer used in `vite.config.ts`.
