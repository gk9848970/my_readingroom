"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { books, langLabel, langCode, type Book } from "@/content/books";
import { BookSpine, SPINE_ROTATION } from "@/components/BookSpine";
import { Pagination } from "@/components/Pagination";
import {
  brand,
  tint,
  layout as layoutTokens,
  motion as motionTokens,
} from "@/lib/design-tokens";

type Filter = "All" | Book["language"];
const FILTERS: Filter[] = ["All", "Hindi", "English", "Gujarati"];

/* every page = exactly this many completely FULL shelf rows;
   how many books that is depends on the visitor's screen width */
const ROWS_PER_PAGE = 4;
const SPINE_W = 66;
const GAP = 8.8; // 0.55rem — must stay in sync with the ul's columnGap below
const CASE_PAD_X = 24; // ul px-3, both sides

/* one bookcase row: headroom + spines + shelf-edge labels + plank.
   HEADROOM > hover lift (10px), so a pulled book never leaves its shelf. */
const HEADROOM = 22;
const SPINE_ZONE = 262 + HEADROOM;
const LABEL_ZONE = 20;
const PLANK = 14;
const ROW_PITCH = SPINE_ZONE + LABEL_ZONE + PLANK;

/**
 * The full library at /shelf — a wooden, multi-storey bookcase.
 * Search + language chips filter ALL books; pagination then walks
 * through the matches, one bookcase at a time. Planks are painted by
 * a repeating gradient so rows work at every screen width with no
 * layout JavaScript.
 */
export function ShelfLibrary() {
  const [filter, setFilter] = useState<Filter>("All");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [perRow, setPerRow] = useState(4); // corrected on mount by measuring
  const caseRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  /* measure the case so every page holds exactly ROWS_PER_PAGE full rows */
  useEffect(() => {
    const el = caseRef.current;
    if (!el) return;
    const measure = () => {
      const available = el.clientWidth - CASE_PAD_X;
      setPerRow(Math.max(1, Math.floor((available + GAP) / (SPINE_W + GAP))));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const PAGE_SIZE = perRow * ROWS_PER_PAGE;

  const q = query.trim().toLowerCase();
  const filtered = books
    .map((book, index) => ({ book, index })) // original index → stable colour & height
    .filter(({ book }) => filter === "All" || book.language === filter)
    .filter(
      ({ book }) =>
        q === "" ||
        book.title.toLowerCase().includes(q) ||
        book.author.toLowerCase().includes(q) ||
        (book.searchAlso ?? "").toLowerCase().includes(q)
    );

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const visible = filtered.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);

  return (
    <div>
      {/* ── search + filters ── */}
      <div className="flex flex-col gap-3 min-[640px]:flex-row min-[640px]:items-center">
        <label className="relative block w-full max-w-[26rem]">
          <span className="sr-only">Search the shelf by title or author</span>
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
            placeholder="Search title or author — गोदान, godan, Roy…"
            className="w-full rounded-pill border border-line bg-cream py-2.5 pl-11 pr-4 text-[0.9rem] placeholder:text-ink-muted"
          />
        </label>
        <div role="group" aria-label="Filter by language" className="no-scrollbar flex gap-2 overflow-x-auto">
          {FILTERS.map((f) => {
            const active = filter === f;
            return (
              <button
                key={f}
                type="button"
                aria-pressed={active}
                lang={f === "All" || f === "English" ? undefined : langCode[f]}
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
                {f === "All" ? "All" : langLabel[f]}
              </button>
            );
          })}
        </div>
      </div>

      <p className="mt-3 text-[0.83rem] text-ink-muted" aria-live="polite">
        {filtered.length} of {books.length} books
        {q !== "" && <> matching &ldquo;{query.trim()}&rdquo;</>}
      </p>

      {/* ── the bookcase ── */}
      <div
        ref={caseRef}
        className="mt-5 rounded-t-[10px] border-x-[12px] border-t-[12px] border-b-4 border-x-tan border-t-tan border-b-plank-edge shadow-print-rest"
      >
        {filtered.length === 0 ? (
          <p className="px-6 py-14 text-center font-display text-[1.02rem] italic text-ink-muted">
            No books match — try another spelling, or a different language shelf.
          </p>
        ) : (
          <ul
            role="list"
            className="flex flex-wrap items-end justify-center px-3"
            style={{
              columnGap: GAP,
              backgroundImage: `repeating-linear-gradient(to bottom, transparent 0, transparent ${
                ROW_PITCH - PLANK
              }px, ${brand.tan} ${ROW_PITCH - PLANK}px, ${brand.tan} ${ROW_PITCH - 2}px, ${
                tint.plankEdge
              } ${ROW_PITCH - 2}px, ${tint.plankEdge} ${ROW_PITCH}px)`,
            }}
          >
            <AnimatePresence mode="popLayout" initial={false}>
              {visible.map(({ book, index }) => (
                <motion.li
                  key={book.title}
                  layout={!reduceMotion}
                  initial={reduceMotion ? false : { opacity: 0, y: 12, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 12, scale: 0.96 }}
                  transition={reduceMotion ? { duration: 0 } : motionTokens.spring.gentle}
                  className="flex flex-col items-center justify-end"
                  style={{ height: ROW_PITCH, paddingBottom: PLANK }}
                >
                  <BookSpine
                    book={book}
                    colour={book.spine ?? SPINE_ROTATION[index % SPINE_ROTATION.length]}
                    height={layoutTokens.spineHeights[index % layoutTokens.spineHeights.length]}
                    reduceMotion={!!reduceMotion}
                  />
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>
        )}
      </div>

      <Pagination
        page={safePage}
        totalPages={totalPages}
        onChange={(p) => setPage(p)}
        label="Bookcase pages"
      />
    </div>
  );
}
