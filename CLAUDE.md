# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev # Start dev server (http://localhost:5173)
npm run build # Build for production
npm run preview # Preview production build locally
```

## Architecture

Single-route SvelteKit app deployed to Vercel via `@sveltejs/adapter-vercel`.

- `src/routes/+page.svelte` — the entire baptism homepage (one page, all sections + styles inline)
- `src/routes/+page.server.js` — server-side form action; appends RSVPs to a Google Sheet (and keeps a local JSON backup)
- `data/rsvps.json` — local fallback list of RSVPs `{ name, phone, timestamp }` (on Vercel this lives in `/tmp` and is ephemeral)

### Page section order

Hero → Info Cards (Ceremoni) → Family & Faddrar → **RSVP** → Map → Footer.
Sections are visually separated by inline SVG wave dividers; the wave fill color must match the next section's background.

## Design notes

- Colors: `--pink` (#f4a7b4) and `--blue` (#89c4e1) as primary accents, defined as CSS custom properties on `:root`
- Fonts: Playfair Display (headings) + Quicksand (body), loaded from Google Fonts in `<svelte:head>`
- All SVG baby illustrations are inline in `+page.svelte`; no external image assets

## RSVP storage — Google Sheets

RSVPs are appended to a Google Sheet via the Sheets API using a service account. If the env vars below are not set, the app still accepts submissions (saved to the local JSON backup only) and logs a warning.

### Required env vars (see `.env.example`)

- `GOOGLE_SHEET_ID` — the ID portion of the sheet URL
- `GOOGLE_SERVICE_ACCOUNT_EMAIL` — service account email
- `GOOGLE_PRIVATE_KEY` — service account private key (newlines may be `\n`-escaped on Vercel)
- `GOOGLE_SHEET_RANGE` — optional, defaults to `Sheet1!A:C` (columns: `timestamp, name, food`). One row is appended per household member.
- `RSVP_PASSWORD` — optional. If set, the RSVP form is gated behind a password prompt; once entered correctly, an `rsvp_unlocked` cookie (60 days, HttpOnly) lets the user submit. Unset = open form.

### One-time setup

1. Google Cloud Console → create / pick a project → **APIs & Services → Library** → enable **Google Sheets API**.
2. **IAM & Admin → Service Accounts** → create service account → **Keys → Add Key → JSON** → download.
3. Open the target Google Sheet and **Share** it with the service account email (Editor).
4. Copy `client_email` → `GOOGLE_SERVICE_ACCOUNT_EMAIL` and `private_key` → `GOOGLE_PRIVATE_KEY` from the JSON.
5. Locally: copy `.env.example` to `.env` and fill values. On Vercel: add the same vars in Project Settings → Environment Variables.

### Reading local backup

```bash
cat data/rsvps.json
```
