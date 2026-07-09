# Graphix Mnandi

A boutique creative studio website built with Next.js, React, and Tailwind CSS.

## About

Graphix Mnandi is a Johannesburg-based design studio that crafts brand identities, motion graphics, 3D renderings, flyers, logos, and print collateral for ambitious teams around the world.

This site is deliberately small, opinionated, and built to load fast — just like the studio it represents.

## Tech Stack

- **Framework:** Next.js 16
- **UI Library:** React 19
- **Styling:** Tailwind CSS 3 with CSS custom properties
- **Animation:** Framer Motion 11
- **Icons:** Lucide React
- **Typography:** Fraunces (display), Inter (body), JetBrains Mono (code)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

```bash
npm run build
npm start
```

## Customisation

All editable business content lives in a single file:

```
data/site.ts
```

Change the studio name, tagline, contact details, services, portfolio items, testimonials, and more — everything routes from that one file.

### Brand colours

Set in two places:

| Where              | What to edit                          |
| ------------------ | ------------------------------------- |
| `data/site.ts`     | The `colors` export                   |
| `tailwind.config.ts`  | The `accent` colour object         |
| `app/globals.css`  | The `--accent` CSS custom properties  |

### Images

Replace the placeholder images in `public/` with your own:

- `public/logo.png` — site logo (28×28px)
- `public/placeholder.jpg` — fallback image used across sections
- `public/favicon.svg` — browser tab icon
- `public/og.svg` — social sharing card (1200×630px)

## Project structure

```
├── app/            Next.js routes and global styles
├── components/     Reusable UI components
│   └── sections/   Page sections (hero, services, portfolio, etc.)
├── data/           Single source of truth for all content
├── lib/            Utility functions and hooks
├── public/         Static assets (images, icons)
└── ...
```

## Deploy

The site is ready to deploy on [Vercel](https://vercel.com). Push the repo and Vercel will detect the Next.js configuration automatically.

```bash
npm install --legacy-peer-deps
```

(The `.npmrc` file at the project root handles this automatically.)