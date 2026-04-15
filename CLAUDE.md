# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (http://localhost:5173)
npm run build     # Build for production (outputs to build/)
npm run preview   # Preview production build locally
```

## Architecture

Single-route SvelteKit app built with `@sveltejs/adapter-node`.

- `src/routes/+page.svelte` — the entire baptism homepage (one page, all sections + styles inline)
- `src/routes/+page.server.js` — server-side form action; reads/writes `data/rsvps.json` to persist RSVPs
- `data/rsvps.json` — append-only JSON array of RSVP submissions `{ name, phone, timestamp }`

## Design notes

- Colors: `--pink` (#f4a7b4) and `--blue` (#89c4e1) as primary accents, defined as CSS custom properties on `:root`
- Fonts: Playfair Display (headings) + Quicksand (body), loaded from Google Fonts in `<svelte:head>`
- All SVG baby illustrations are inline in `+page.svelte`; no external image assets
- Wave dividers between sections use inline SVG `<path>` elements

## Reading RSVPs

```bash
cat data/rsvps.json
```

Note: file-based RSVP storage works on a Node.js server but not on serverless platforms (Vercel, Netlify). Switch to a database or external service if deploying serverlessly.
