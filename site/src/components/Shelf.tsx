"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { homepageBooks, langCode, langLabel, type Book } from "@/content/books";
import { BookSpine, SPINE_ROTATION } from "@/components/BookSpine";
import { motion as motionTokens, layout as layoutTokens } from "@/lib/design-tokens";

type Filter = "All" | Book["language"];

const FILTERS: Filter[] = ["All", "Hindi", "English", "Gujarati"];

/**
 * The homepage shelf — a curated single plank. Which books stand here
 * is YOUR pick: the featuredOnHomepage list at the top of
 * content/books.ts. The full library lives at /shelf.
 */
export function Shelf() {
  const [filter, setFilter] = useState<Filter>("All");
  const reduceMotion = useReducedMotion();
  const featured = homepageBooks();

  const visible = featured
    .map((book, index) => ({ book, index })) // index in featured list → stable colour & height
    .filter(({ book }) => filter === "All" || book.language === filter);

  return (
    <section id="shelf" aria-labelledby="shelf-heading">
      <div className="mx-auto flex max-w-container items-baseline gap-4 px-page-x">
        <h2
          id="shelf-heading"
          className="font-display text-[1.7rem] font-medium tracking-[-0.01em]"
        >
          The Shelf
        </h2>
        <Link
          href="/shelf"
          className="ml-auto whitespace-nowrap text-[0.83rem] font-semibold text-rust no-underline hover:underline hover:underline-offset-4"
        >
          Browse the full shelf →
        </Link>
      </div>

      <div
        role="group"
        aria-label="Filter by language"
        className="no-scrollbar mx-auto flex max-w-container gap-2 overflow-x-auto px-page-x pb-1.5 pt-3.5"
      >
        {FILTERS.map((f) => {
          const active = filter === f;
          return (
            <button
              key={f}
              type="button"
              aria-pressed={active}
              lang={f === "All" || f === "English" ? undefined : langCode[f]}
              onClick={() => setFilter(f)}
              className={`whitespace-nowrap rounded-pill border px-3.5 py-1.5 text-[0.82rem] font-medium transition duration-tint ease-soft ${
                active
                  ? "border-espresso bg-espresso text-cream"
                  : "border-line bg-transparent hover:bg-paper"
              }`}
            >
              {f === "All" ? "All" : langLabel[f]}
            </button>
          );
        })}
      </div>

      <div
        tabIndex={0}
        aria-label="Bookshelf, scrolls sideways"
        className="no-scrollbar snap-x snap-proximity overflow-x-auto px-page-x pt-6"
      >
        <ul className="mx-auto flex w-max items-end gap-[0.55rem] px-1" role="list">
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map(({ book, index }, position) => {
              const isLast = position === visible.length - 1;
              return (
                <motion.li
                  key={book.title}
                  layout={!reduceMotion}
                  initial={reduceMotion ? false : { opacity: 0, y: 10, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 10, scale: 0.96 }}
                  transition={reduceMotion ? { duration: 0 } : motionTokens.spring.gentle}
                  className="flex snap-center flex-col items-center"
                >
                  <BookSpine
                    book={book}
                    colour={book.spine ?? SPINE_ROTATION[index % SPINE_ROTATION.length]}
                    height={layoutTokens.spineHeights[index % layoutTokens.spineHeights.length]}
                    lean={isLast ? 4.5 : 0}
                    reduceMotion={!!reduceMotion}
                  />
                </motion.li>
              );
            })}
          </AnimatePresence>
        </ul>
        {visible.length === 0 && (
          <p className="pb-4 text-center text-[0.85rem] italic text-ink-muted">
            No books on this shelf yet — soon!
          </p>
        )}
      </div>

      <div aria-hidden="true" className="mx-auto max-w-container px-page-x">
        <div className="h-3 rounded-plank bg-tan shadow-ledge" />
      </div>

      <p className="mx-auto max-w-container px-page-x pt-3.5 text-[0.83rem] text-ink-muted">
        Each spine opens the video review.{" "}
        <em className="font-display">Slide along the shelf —</em>
      </p>
    </section>
  );
}
