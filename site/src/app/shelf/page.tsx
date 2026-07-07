import type { Metadata } from "next";
import { ShelfLibrary } from "@/components/ShelfLibrary";

export const metadata: Metadata = {
  title: "The Shelf — every Hindi, English & Gujarati book I've reviewed · My Reading Room",
  description:
    "Browse the full bookshelf: Hindi, English and Gujarati book reviews, searchable by title and author. Every spine opens a video review.",
};

export default function ShelfPage() {
  return (
    <>
      <main className="mx-auto max-w-container px-page-x pb-16">
        <div className="pt-8">
          <h1 className="font-display text-[clamp(2rem,7vw,2.9rem)] font-[340] leading-[1.1] tracking-[-0.015em]">
            The Shelf
          </h1>
          <p className="mt-2 max-w-[44ch] font-display text-[1.02rem] italic text-ink-soft">
            Every book I&rsquo;ve reviewed — spine by spine, in three languages. Pull one.
          </p>
        </div>
        <div className="pt-6">
          <ShelfLibrary />
        </div>
      </main>
    </>
  );
}
