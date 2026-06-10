# Frank — Personal Site

A personal website built with Next.js 16 + Tailwind v4, inspired by Anthropic's visual style.

_[中文版本 →](README.zh.md)_

## Local Development

```bash
npm run dev
```

Open your browser:
- http://localhost:3000 → auto-redirects to English homepage `/en`
- http://localhost:3000/zh → Chinese version

## Common Customisation Guide

### Add a New Project (Projects Section)

1. Drop a screenshot into `public/projects/` (e.g. `my-app.png`)
2. Open `content/projects.ts` and append a new entry to the `projects` array:

```ts
{
  slug: "my-app",
  title: { en: "My App", zh: "我的应用" },
  description: { en: "One-line pitch.", zh: "一句话介绍。" },
  tags: ["React", "AI"],
  image: "/projects/my-app.png",
  github: "https://github.com/...",
  demo: "https://...",
  featured: true,           // whether to show on the homepage
  year: 2026,
}
```

Save and it takes effect immediately. Both the homepage and `/projects` page update automatically.

### Edit Copy

- Chinese: `lib/dictionaries/zh.json`
- English: `lib/dictionaries/en.json`

All text lives in these two JSON files. Refresh the page after editing.

### Change Theme Colours

Open `app/globals.css` and edit CSS variables inside the `@theme` block:
- `--color-cream` — background
- `--color-ink` — primary text
- `--color-orange` — accent
- `--color-line` — dividers

### Swap the Avatar

Put a photo (e.g. `avatar.jpg`) into `public/`. The About page already reads `/avatar.jpg` via `fill` mode — just replace the file and it works. If you need a different path, update `app/[lang]/about/page.tsx`:

```tsx
<Image src="/your-photo.jpg" alt="Frank" fill sizes="128px" className="object-cover" priority />
```

### Adjust Globe Markers

Open `components/effects/Globe.tsx` and edit the `markers` array. Each marker is `{ location: [latitude, longitude], size: size }`.

## Directory Overview

```
app/
  [lang]/
    layout.tsx           # root layout: nav, fonts, i18n, SEO metadata
    page.tsx             # homepage
    projects/page.tsx    # projects list
    about/page.tsx       # about page
    loading.tsx          # page loading skeleton
    not-found.tsx        # language-scoped 404
  globals.css            # theme + Tailwind
  manifest.ts            # PWA manifest
  robots.ts              # search-engine crawler rules
  sitemap.ts             # site map
  error.tsx              # global error boundary
  not-found.tsx          # global 404
components/
  layout/                # layout components
    Navbar.tsx           # top nav (with active-page highlight)
    Footer.tsx           # footer
    FooterNav.tsx        # footer navigation
    FooterSocial.tsx     # social links (click to copy)
  sections/              # page sections
    Hero.tsx             # homepage hero
    ProjectGrid.tsx      # project grid
    ProjectCard.tsx      # individual project card
  effects/               # visual effects
    Globe.tsx            # WebGL globe
  ui/                    # basic UI
    LanguageToggle.tsx   # language switcher
content/
  projects.ts            # project data source
  models.ts              # AI model vendor & model list (About page)
lib/
  constants.ts           # site constants (URL, SEO, etc.)
  clipboard.ts           # clipboard utility
  utils.ts               # general utilities (cn, etc.)
  locale.ts              # locale types and helpers
  dictionaries.ts        # dictionary loader
  dictionaries/
    en.json              # English copy
    zh.json              # Chinese copy
public/
  avatar.jpg             # profile photo (used as favicon + about page)
  og.png                 # Open Graph preview image
  logos/                 # AI vendor SVG logos (About page)
  projects/              # project screenshots
```

## Tech Stack

- Next.js 16 (App Router) + React 19
- TypeScript
- Tailwind CSS v4
- cobe — WebGL globe
- Framer Motion — animations
- lucide-react — icons
- clsx + tailwind-merge — className utility

---

© 2026 Frank. All rights reserved. This repository is a personal portfolio showcase; unauthorised reuse is prohibited.
