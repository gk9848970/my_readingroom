# My Reading Room 🌿

The personal website of **My Reading Room** — a book channel reviewing Hindi, English and Gujarati literature on [YouTube](https://www.youtube.com/@my_readingroom) and [Instagram](https://www.instagram.com/my_readingroom_).

The site is built around two libraries:

- **The Shelf** — every book reviewed on the channel, laid out as spines on a wooden bookcase. Tapping a spine opens the video review.
- **The Screening Room** — written film reviews presented as ticket-stub cards, each with its own full review page.

Plus **Beyond the Bookshelf**, a small polaroid wall of photos from the reading life — books, chai, and quiet corners.

## Design

Cozy, editorial, light. A locked palette of cream, espresso, clay, sage, rust and tan — no gradients, no template feel. Typography is Fraunces + Work Sans, with Noto serifs covering all three scripts (Latin, Devanagari, Gujarati) as a first-class requirement. The audience is ~90% mobile, so everything is designed phone-first.

Design tokens live in a single source of truth at `site/src/lib/design-tokens.ts`, which the Tailwind config imports.

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router) + TypeScript
- Tailwind CSS v3
- Framer Motion for in-page animation; native View Transitions for page navigation
- Open Graph images generated at build time (per-review ticket cards included)
- Deployed on [Vercel](https://vercel.com)

## Repository layout

```
site/                    The Next.js app
  src/content/           All editable content (books, films, photos)
  src/lib/               Design tokens and helpers
  src/app/               Pages: home, /shelf, /screening-room, reviews
  public/                Posters, photos, fonts
HOW-TO-ADD-CONTENT.md    Plain-language guide for editing content
```

## Running locally

Requires Node.js and [pnpm](https://pnpm.io).

```bash
cd site
pnpm install
pnpm dev
```

Then open http://localhost:3000.

## Editing content

No code changes are ever needed to add a book, a film review, or a photo — everything lives in three files under `site/src/content/` plus images in `site/public/`. The full walkthrough is in [HOW-TO-ADD-CONTENT.md](HOW-TO-ADD-CONTENT.md).

- `books.ts` — the newest book at the top of the list automatically becomes the hero's "Latest review"
- `films.ts` — each entry generates its own review page; paragraphs are just blank lines
- `clicks.ts` — the polaroid photos and their captions
- `featuredOnHomepage` lists at the top of `books.ts` / `films.ts` curate what appears on the homepage
