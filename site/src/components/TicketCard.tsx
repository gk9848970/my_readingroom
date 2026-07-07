import Image from "next/image";
import Link from "next/link";
import { filmSlug, type Film } from "@/content/films";

/**
 * The cinema-ticket film card — poster left, perforated tear, review
 * excerpt right. Shared by the homepage and the /screening-room library.
 */
export function TicketCard({ film }: { film: Film }) {
  return (
    <article className="flex max-w-card items-stretch overflow-hidden rounded-card border border-line bg-paper transition duration-lift ease-soft hover:-translate-y-[3px] hover:shadow-card-hover motion-reduce:hover:translate-y-0">
      <div className="relative w-[122px] shrink-0 overflow-hidden bg-sage">
        {/* 118% height crops the poster's own baked-in title band —
            the card's typography names the film instead */}
        <div className="absolute inset-x-0 top-0 h-[118%]">
          <Image
            src={film.poster}
            alt={`${film.title} film poster`}
            fill
            sizes="122px"
            className="object-cover object-[50%_10%]"
          />
        </div>
      </div>

      <div className="relative flex-1 border-l-2 border-dashed border-line px-4 py-4 before:absolute before:-left-[11px] before:-top-[11px] before:h-5 before:w-5 before:rounded-pill before:border before:border-line before:bg-cream after:absolute after:-bottom-[11px] after:-left-[11px] after:h-5 after:w-5 after:rounded-pill after:border after:border-line after:bg-cream">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-rust">
          {film.language} · {film.year}
        </p>
        <h3 className="mb-1.5 mt-1.5 font-display text-[1.42rem] font-medium tracking-[-0.01em]">
          <Link
            href={`/screening-room/${filmSlug(film)}`}
            className="no-underline hover:underline hover:underline-offset-4"
          >
            {film.title}
          </Link>
        </h3>
        <p className="text-[0.88rem] leading-relaxed text-ink-body">{film.excerpt}</p>

        <div className="mt-3 flex flex-wrap items-center gap-1.5">
          {film.genres.map((genre) => (
            <span
              key={genre}
              className="rounded-pill border border-line bg-cream px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-rust"
            >
              {genre}
            </span>
          ))}
          {film.availableOn && (
            <a
              href={film.availableOn.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-pill bg-tan px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-espresso no-underline transition duration-tint ease-soft hover:bg-clay hover:text-cream"
            >
              Available on {film.availableOn.name} ↗
              <span className="sr-only">, watch {film.title} (opens in a new tab)</span>
            </a>
          )}
        </div>

        <Link
          href={`/screening-room/${filmSlug(film)}`}
          className="mt-3 block text-[0.85rem] font-semibold text-rust no-underline hover:underline hover:underline-offset-4"
        >
          Read the full review →
        </Link>
      </div>
    </article>
  );
}
