"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { films } from "@/content/films";
import { TicketCard } from "@/components/TicketCard";
import { Pagination } from "@/components/Pagination";
import { tint, motion as motionTokens } from "@/lib/design-tokens";

const LANG_FILTERS = ["All", "Hindi", "English", "Gujarati"] as const;
const LANG_LABELS: Record<string, string> = {
  All: "All",
  Hindi: "हिंदी",
  English: "English",
  Gujarati: "ગુજરાતી",
};
const LANG_CODES: Record<string, string | undefined> = { Hindi: "hi", Gujarati: "gu" };

const PAGE_SIZE = 4;

/**
 * The full film library at /screening-room — search + language chips
 * over every written review, ticket cards in pages.
 */
export function FilmLibrary() {
  const [filter, setFilter] = useState<(typeof LANG_FILTERS)[number]>("All");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const reduceMotion = useReducedMotion();

  const q = query.trim().toLowerCase();
  const filtered = films
    .filter((film) => filter === "All" || film.language === filter)
    .filter(
      (film) =>
        q === "" ||
        film.title.toLowerCase().includes(q) ||
        (film.searchAlso ?? "").toLowerCase().includes(q) ||
        film.genres.some((g) => g.toLowerCase().includes(q)) ||
        String(film.year).includes(q)
    );

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const visible = filtered.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);

  return (
    <div>
      <div className="flex flex-col gap-3 min-[640px]:flex-row min-[640px]:items-center">
        <label className="relative block w-full max-w-[26rem]">
          <span className="sr-only">Search films by title, genre or year</span>
          <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2"
            fill="none"
            stroke={tint.inkMuted}
            strokeWidth="2"
            strokeLinecap="round"
          >
            <circle cx="9" cy="9" r="6" />
            <path d="m14 14 4 4" />
          </svg>
          <input
            type="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setPage(1);
            }}
            placeholder="Search title, genre or year — hellaro, drama, 2013…"
            className="w-full rounded-pill border border-line bg-cream py-2.5 pl-11 pr-4 text-[0.9rem] placeholder:text-ink-muted"
          />
        </label>
        <div role="group" aria-label="Filter by language" className="no-scrollbar flex gap-2 overflow-x-auto">
          {LANG_FILTERS.map((f) => {
            const active = filter === f;
            return (
              <button
                key={f}
                type="button"
                aria-pressed={active}
                lang={LANG_CODES[f]}
                onClick={() => {
                  setFilter(f);
                  setPage(1);
                }}
                className={`whitespace-nowrap rounded-pill border px-3.5 py-1.5 text-[0.82rem] font-medium transition duration-tint ease-soft ${
                  active
                    ? "border-espresso bg-espresso text-cream"
                    : "border-line bg-transparent hover:bg-paper"
                }`}
              >
                {LANG_LABELS[f]}
              </button>
            );
          })}
        </div>
      </div>

      <p className="mt-3 text-[0.83rem] text-ink-muted" aria-live="polite">
        {filtered.length} of {films.length} written reviews
        {q !== "" && <> matching &ldquo;{query.trim()}&rdquo;</>}
      </p>

      {filtered.length === 0 ? (
        <p className="px-6 py-14 text-center font-display text-[1.02rem] italic text-ink-muted">
          Nothing matches yet — try another title, genre or year.
        </p>
      ) : (
        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((film) => (
              <motion.div
                key={film.title}
                layout={!reduceMotion}
                initial={reduceMotion ? false : { opacity: 0, y: 14, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 14, scale: 0.98 }}
                transition={reduceMotion ? { duration: 0 } : motionTokens.spring.gentle}
              >
                <TicketCard film={film} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}

      <Pagination
        page={safePage}
        totalPages={totalPages}
        onChange={(p) => setPage(p)}
        label="Film review pages"
      />
    </div>
  );
}
