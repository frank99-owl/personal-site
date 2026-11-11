# Frank — Personal Site

My personal website — projects, an about page, and a few experiments. Built with Next.js 16 and Tailwind v4, in a warm, Anthropic-inspired style. Bilingual (English / 中文).

🔗 **Live:** https://frank-ai.cc

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000 — it redirects to `/en` or `/zh` based on your browser's language.

## Tech stack

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · cobe (WebGL globe) · lucide-react

## Editing content

- Projects → `content/projects.ts`
- AI models list (About page) → `content/models.ts`
- Project screenshots → `public/projects/` (one per language when the screenshot shows UI text)
- All copy → `lib/dictionaries/{en,zh}.json`

Each file has inline comments explaining how to add or edit entries.

---

© 2026 Frank. Personal portfolio — please don't reuse without permission.
