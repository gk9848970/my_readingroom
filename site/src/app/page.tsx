import { Hero } from "@/components/Hero";
import { Shelf } from "@/components/Shelf";
import { ScreeningRoom } from "@/components/ScreeningRoom";
import { BeyondTheBookshelf } from "@/components/BeyondTheBookshelf";
import { WatchAndFollow } from "@/components/WatchAndFollow";
// NewsletterStub is HIDDEN for now (Khyati's call) — component kept,
// re-enable by importing it and adding <NewsletterStub /> back below.

/**
 * Home — built gate by gate (checkpoint protocol).
 * Live so far: Hero + The Shelf (approved) · Screening Room cards.
 * Next gates: Beyond the Bookshelf photos · review pages ·
 * Work with me · Watch & follow · newsletter stub · footer.
 */
export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Shelf />
        <WatchAndFollow />
        <ScreeningRoom />
        <BeyondTheBookshelf />
      </main>
    </>
  );
}
