# My Reading Room — how to add content 🌿

Everything you'll ever edit lives in **three files and two folders**,
all inside `site/src/content/` and `site/public/`.
You never need to touch anything else.

> Open the files in any text editor (TextEdit works — but ask me to set
> up something nicer if you like). Save, and the site updates itself.

---

## 1 · Add a book 📚  (`site/src/content/books.ts`)

1. Copy any existing book block — from `{` to `},` including both.
2. Paste it **at the top** of the list (the top book automatically
   becomes "Latest review" in the hero).
3. Edit the lines:

```
{
  title: "गोदान",                    ← exactly as on the cover, any script
  author: "प्रेमचंद",
  language: "Hindi",                 ← "Hindi", "English" or "Gujarati"
  videoUrl: "https://…",             ← your reel / Short link
  searchAlso: "Godan",               ← optional: English spelling for search
  spine: "clay",                     ← optional colour; delete the line for automatic
  availableOn: { name: "Amazon", url: "https://…" },   ← optional buy-link tag
},
```

4. Save. The bookcase at /shelf lays itself out — 26 books or 260.

---

## 2 · Add a film review 🎬  (`site/src/content/films.ts`)

Your weekly ritual. Same copy-paste-edit dance:

```
{
  title: "The Lunchbox",
  year: 2013,
  language: "Hindi",
  genres: ["Drama", "Romance"],      ← one to three
  poster: "/posters/the-lunchbox.jpg",   ← see below
  excerpt: "The first two or three lines of your review…",
  review: `Write your full review here.

Press Enter twice between paragraphs — that's the only rule.

That blank line is what makes a new paragraph on the page.`,
  pullQuote: "One line worth framing large.",   ← optional
  availableOn: { name: "Netflix", url: "https://…" },   ← optional
},
```

**The poster:** drop the image file into `site/public/posters/`
(e.g. `barfi.jpg`), then write `poster: "/posters/barfi.jpg"`.

The review page and its web address create themselves.

---

## 3 · Swap in your photos 📷  (`site/src/content/clicks.ts`)

1. Drop your photo into `site/public/clicks/` (squarish looks best).
2. In the file, change a `src:` line to `"/clicks/your-photo.jpg"`.
3. Write your `caption` (the italic line under the print) and `alt`
   (a description for people who can't see the photo).

---

## 4 · Choose what's on the homepage ⭐

At the top of `books.ts` and `films.ts` there's a list called
`featuredOnHomepage`. Write titles **exactly** as they appear below in
the same file, in the order you want them to stand. If the list is
ever empty, the newest ones show automatically.

---

## 5 · Things currently hidden (not deleted)

- **Newsletter card** and the **Work with me page** are switched off
  at your request. Everything is still in the code with notes at each
  spot — ask and they're back in minutes.
- Your **Work with me** facts (email, audience numbers, review policy)
  live in `site/src/content/workWithMe.ts`, ready for when you are.

---

## 6 · Seeing your changes

While we work together: the site runs at http://localhost:3111 —
save a file and refresh.

Once the site is live on the internet, tell me "publish" after you've
made edits, or I'll show you the one-command way to do it yourself.

---

## ⚠️ Reminders

- Most books/films in the files right now are **samples I added** so
  you could judge the design — replace them with your real archive.
- The two film reviews' text is **my placeholder writing** — swap in
  your own words.
- Some links are marked `TODO` (reel links, exact Amazon/Netflix
  pages) — they point somewhere sensible but not final.
- Never worry about breaking things: every change can be undone, and
  nothing you do in the content files can hurt the design.
