# North Carolina Society

An editorial, magazine-style journal covering life across the Tar Heel State —
business, beauty & wellness, style & fashion, travel & leisure, homes & design,
and society & culture. Inspired by the whitespace-rich, serif-driven aesthetic of
luxury lifestyle titles.

## Stack

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS v4**
- Content as **Markdown** files (`gray-matter` + `remark`) — no database or CMS
- Fonts: Cormorant Garamond (display), EB Garamond (body), Jost (labels)

## Getting started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Content

Articles live in `content/articles/*.md`. Each file's name **is** its slug.
Frontmatter schema:

```yaml
title: "…"
slug: "matches-the-filename"
excerpt: "…"
category: "business" # business | beauty-wellness | style-fashion | travel-leisure | homes-design | society-culture
date: "2026-01-01"
coverImage: "https://images.unsplash.com/…"
featured: false        # exactly one article is `true`; it becomes the homepage hero
imageCredit: "Photo: Unsplash/Name"
```

Cover images are served from Unsplash and every article uses a unique image.

### Regenerating sample content

The sample articles were produced from data modules in `scripts/`:

```bash
node scripts/data-business.mjs   # (and data-beauty, data-style, …)
```

`scripts/gen.mjs` assigns a verified, unique cover image to each article from
`scripts/valid_images.txt`.

## Structure

- `/` — hero cover story + six category sections (each a distinct editorial layout)
- `/category/[slug]` — paginated grid for a section
- `/article/[slug]` — full-bleed cover, article body, three related stories
- `/search` — client-side search over all articles

Publication dates appear **only** on article detail pages, by design.
