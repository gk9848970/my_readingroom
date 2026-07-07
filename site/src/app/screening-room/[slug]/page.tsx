import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { films, filmSlug, reviewParagraphs } from "@/content/films";

/**
 * The review reading page — the Screening Room's whole point.
 * Editorial typography: 60ch measure, generous leading, a drop cap
 * on the opening paragraph, one framed pull quote. Values come from
 * the readingProposed tokens, exercised here for approval.
 */

export function generateStaticParams() {
  return films.map((film) => ({ slug: filmSlug(film) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const film = films.find((f) => filmSlug(f) === slug);
  if (!film) return {};
  return {
    title: `${film.title} (${film.year}) — film review · My Reading Room`,
    description: film.excerpt,
  };
}

export default async function ReviewPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const film = films.find((f) => filmSlug(f) === slug);
  if (!film) notFound();

  const paragraphs = reviewParagraphs(film);
  /* pull quote sits after the 2nd paragraph (if the review is long enough) */
  const quoteAfter = film.pullQuote && paragraphs.length > 3 ? 1 : -1;

  return (
    <>
      <main className="mx-auto max-w-[44rem] px-page-x pb-16">
        <nav className="pt-6">
          <Link
            href="/screening-room"
            className="text-[0.83rem] font-semibold text-rust no-underline hover:underline hover:underline-offset-4"
          >
            ← The Screening Room
          </Link>
        </nav>

        {/* ── masthead: the ticket, opened flat ── */}
        <header className="border-b border-line pb-7 pt-8">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-rust">
            Film review · {film.language} · {film.year}
          </p>
          <div className="mt-3 flex items-start gap-5">
            <div className="min-w-0 flex-1">
              <h1 className="font-display text-[clamp(2rem,7.5vw,3.2rem)] font-[340] leading-[1.1] tracking-[-0.015em]">
                {film.title}
              </h1>
              <div className="mt-4 flex flex-wrap items-center gap-1.5">
                {film.genres.map((genre) => (
                  <span
                    key={genre}
                    className="rounded-pill border border-line bg-paper px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-rust"
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
            </div>
            <div className="relative w-[92px] shrink-0 overflow-hidden rounded-[6px] bg-sage shadow-print-rest min-[431px]:w-[110px]">
              <div className="relative aspect-[2/3]">
                <Image
                  src={film.poster}
                  alt={`${film.title} film poster`}
                  fill
                  sizes="110px"
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>
        </header>

        {/* ── the review ── */}
        <article className="mx-auto max-w-[60ch] pt-8">
          {paragraphs.map((para, i) => (
            <div key={i}>
              <p
                className={`mb-6 text-[1.06rem] leading-[1.75] text-ink-body ${
                  i === 0 ? "drop-cap" : ""
                }`}
              >
                {para}
              </p>
              {i === quoteAfter && (
                <blockquote className="my-9 border-l-[3px] border-clay py-1 pl-5">
                  <p className="font-display text-[1.45rem] font-medium italic leading-[1.35] text-espresso">
                    &ldquo;{film.pullQuote}&rdquo;
                  </p>
                </blockquote>
              )}
            </div>
          ))}
        </article>

        <p className="mx-auto mt-10 max-w-[60ch] border-t border-line pt-5 text-center font-display text-[0.95rem] italic text-ink-muted">
          — read · review · reflect —
        </p>
      </main>
    </>
  );
}
