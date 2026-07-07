import type { Metadata } from "next";
import { FilmLibrary } from "@/components/FilmLibrary";

export const metadata: Metadata = {
  title: "The Screening Room — written film reviews · My Reading Room",
  description:
    "The full film review library of My Reading Room: every film watched, reviewed in writing — searchable by title, genre and year.",
};

export default function ScreeningRoomIndexPage() {
  return (
    <>
      <main className="mx-auto max-w-container px-page-x pb-16">
        <div className="pt-8">
          <h1 className="font-display text-[clamp(2rem,7vw,2.9rem)] font-[340] leading-[1.1] tracking-[-0.015em]">
            The Screening Room
          </h1>
          <p className="mt-2 max-w-[44ch] font-display text-[1.02rem] italic text-ink-soft">
            What I watch when I&rsquo;m not reading — reviewed anyway, because I
            can&rsquo;t help myself.
          </p>
        </div>
        <div className="pt-6">
          <FilmLibrary />
        </div>
      </main>
    </>
  );
}
