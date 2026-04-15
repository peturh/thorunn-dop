# Þórunn Íris Pétursdóttir – Döpelse

Hemsida för döpelsen av Þórunn Íris Pétursdóttir, 15 augusti 2026, S:t Pauli kyrka, Malmö.

## Utveckling

```bash
npm install
npm run dev
```

## Bygg & förhandsgranska

```bash
npm run build
npm run preview
```

## OSA-svar

Svar sparas i `data/rsvps.json`. Läs av dem med:

```bash
cat data/rsvps.json
```

## Deployment

Projektet använder `@sveltejs/adapter-node` och körs som en Node.js-server:

```bash
npm run build
node build/index.js
```

Sätt miljövariabeln `PORT` för att ändra port (standard: 3000).
