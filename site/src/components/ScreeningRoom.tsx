import Link from "next/link";
import { homepageFilms } from "@/content/films";
import { TicketCard } from "@/components/TicketCard";

/**
 * Homepage Screening Room — a curated pair of ticket cards. Which
 * films appear is YOUR pick: the featuredOnHomepage list at the top
 * of content/films.ts. The full library lives at /screening-room.
 */
export function ScreeningRoom() {
  const featured = homepageFilms();

  return (
    <section
      id="screening-room"
      aria-labelledby="screening-heading"
      className="mx-auto mt-section-gap max-w-container border-t border-line px-page-x pt-10"
    >
      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-0.5">
        <h2
          id="screening-heading"
          className="whitespace-nowrap font-display text-[1.7rem] font-medium tracking-[-0.01em]"
        >
          The Screening Room
        </h2>
        <Link
          href="/screening-room"
          className="ml-auto whitespace-nowrap text-[0.83rem] font-semibold text-rust no-underline hover:underline hover:underline-offset-4"
        >
          Enter the Screening Room →
        </Link>
      </div>

      <p className="mb-6 mt-2 max-w-[44ch] font-display text-[1.02rem] italic text-ink-soft">
        What I watch when I&rsquo;m not reading — reviewed anyway, because I
        can&rsquo;t help myself.
      </p>

      <div className="grid gap-5 lg:grid-cols-2">
        {featured.map((film) => (
          <TicketCard key={film.title} film={film} />
        ))}
      </div>
    </section>
  );
}
