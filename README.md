# Þórunn Íris Pétursdóttir – Baptism

Website for the baptism of Þórunn Íris Pétursdóttir, 15 August 2026, S:t Pauli kyrka, Malmö.

## Development

```bash
npm install
npm run dev
```

## Build & preview

```bash
npm run build
npm run preview
```

## RSVP responses

Responses are saved to `data/rsvps.json`. Read them with:

```bash
cat data/rsvps.json
```

## Deployment

The project uses `@sveltejs/adapter-node` and runs as a Node.js server:

```bash
npm run build
node build/index.js
```

Set the `PORT` environment variable to change the port (default: 3000).
