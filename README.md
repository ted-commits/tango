# React + Vercel Starter (Vite)

A minimal React (Vite) project pre-configured for Vercel deployments, including SPA routing via `vercel.json`.

## Local dev

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Build output goes to `dist/`.

## Deploy to Vercel (GitHub flow)

1. Create a new GitHub repository and push this project.
2. Go to https://vercel.com/import and **Import Git Repository**.
3. Framework preset: **Vite** (or "Other" with Build command `npm run build`, Output dir `dist`).
4. Click **Deploy**.

> SPA routing: `vercel.json` rewrites all routes to `/`, so React Router deep links will work.

## Direct CLI deploy (optional)

```bash
npm i -g vercel
vercel
vercel --prod
```

## Environment variables

If you need client-side env vars, add them in the Vercel Project Settings and prefix with `VITE_`.
