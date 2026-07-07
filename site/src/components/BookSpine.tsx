"use client";

import { motion } from "framer-motion";
import { langCode, type Book } from "@/content/books";
import { motion as motionTokens } from "@/lib/design-tokens";

/** spine colour name → token classes (set in tailwind.config from design-tokens.ts) */
export const SPINE_CLASSES: Record<NonNullable<Book["spine"]>, string> = {
  clay: "bg-clay text-cream",
  espresso: "bg-espresso text-cream",
  sage: "bg-sage text-cream",
  tan: "bg-tan text-espresso",
  rust: "bg-rust text-cream",
};
export const SPINE_ROTATION: NonNullable<Book["spine"]>[] = [
  "clay",
  "espresso",
  "sage",
  "tan",
  "rust",
];

/**
 * One book: the spine (opens the reel in a new tab, springs off the
 * shelf on hover) plus the little "on Amazon" shelf-edge tag beneath.
 * Shared by the homepage shelf and the /shelf bookcase.
 */
export function BookSpine({
  book,
  colour,
  height,
  lean = 0,
  reduceMotion,
}: {
  book: Book;
  colour: NonNullable<Book["spine"]>;
  height: number;
  lean?: number;
  reduceMotion: boolean;
}) {
  return (
    <>
      <motion.a
        href={book.videoUrl}
        target="_blank"
        rel="noopener noreferrer"
        animate={{ rotate: lean }}
        whileHover={reduceMotion ? undefined : { y: -10, rotate: 0 }}
        whileTap={reduceMotion ? undefined : { y: -6 }}
        transition={motionTokens.spring.bookPull}
        style={{ height, transformOrigin: "bottom left" }}
        className={`flex w-[66px] flex-col items-center justify-between rounded-spine px-1 pb-3 pt-3.5 no-underline shadow-spine ${SPINE_CLASSES[colour]}`}
      >
        <span
          lang={langCode[book.language]}
          className="writing-vertical max-h-[170px] overflow-hidden font-display text-[1.02rem] font-medium tracking-[0.02em]"
        >
          {book.title}
        </span>
        <span
          lang={langCode[book.language]}
          className="writing-vertical mt-2 max-h-[70px] overflow-hidden text-[0.62rem] tracking-[0.08em] opacity-75"
        >
          {book.author}
        </span>
        <span aria-hidden="true" className="mb-1.5 mt-2 w-[26px] border-t border-current opacity-50" />
        <span className="text-[0.58rem] uppercase tracking-[0.12em] opacity-85">
          {book.language === "English" ? "Eng" : book.language === "Gujarati" ? "Guj" : "Hindi"}
        </span>
        <span className="sr-only">
          — watch the {book.language} video review (opens in a new tab)
        </span>
      </motion.a>
      {/* the little "shop label" on the shelf edge — only when a link exists */}
      <span className="flex h-[20px] items-center">
        {book.availableOn && (
          <a
            href={book.availableOn.url}
            target="_blank"
            rel="noopener noreferrer"
            className="max-w-[80px] truncate px-1.5 py-[7px] text-[0.6rem] font-semibold text-rust no-underline hover:underline hover:underline-offset-2"
          >
            on {book.availableOn.name} ↗
            <span className="sr-only">
              , {book.title} (opens in a new tab)
            </span>
          </a>
        )}
      </span>
    </>
  );
}
