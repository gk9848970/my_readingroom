import { books, langCode } from "@/content/books";

/** The hero — books lead, both front doors visible in the first scroll. */
export function Hero() {
  const latest = books[0]; // newest book = top of the content file

  return (
    <section className="mx-auto max-w-container px-page-x pb-11 pt-12">
      <p className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[0.82rem] font-semibold uppercase tracking-[0.14em] text-rust">
        <span lang="hi" className="font-display font-medium normal-case tracking-[0.02em]">
          हिंदी
        </span>
        <Dot />
        <span>English</span>
        <Dot />
        <span lang="gu" className="font-display font-medium normal-case tracking-[0.02em]">
          ગુજરાતી
        </span>
        <span>&nbsp;literature</span>
      </p>

      <h1 className="mb-4 mt-4 max-w-[16ch] font-display text-[clamp(2.5rem,9.5vw,4.9rem)] font-[340] leading-[1.06] tracking-[-0.015em]">
        Helping you find your{" "}
        <em className="font-medium italic text-clay">next favourite</em> book.
      </h1>

      <p className="max-w-[34ch] text-[1.02rem] text-ink-soft">
        Stories that make us stop and look twice.
      </p>

      {/* one doorway only (Khyati's call) — books lead */}
      <div className="mt-7">
        <a
          href="/shelf"
          className="inline-block rounded-pill bg-rust px-6 py-3.5 text-[0.95rem] font-semibold text-cream no-underline transition duration-press ease-soft hover:-translate-y-0.5 hover:bg-espresso motion-reduce:hover:translate-y-0"
        >
          Browse the Shelf
        </a>
      </div>

      <a
        href={latest.videoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-9 inline-flex items-center gap-2.5 text-[0.85rem] text-rust no-underline group"
      >
        <span
          aria-hidden="true"
          className="grid h-[22px] w-[22px] shrink-0 place-items-center rounded-pill bg-espresso"
        >
          <span className="ml-px border-y-4 border-l-[7px] border-y-transparent border-l-cream" />
        </span>
        <span>
          Latest review:&nbsp;
          <span lang={langCode[latest.language]} className="font-display group-hover:underline group-hover:underline-offset-4">
            {latest.title}
          </span>
          &nbsp;— watch the reel
        </span>
      </a>
    </section>
  );
}

function Dot() {
  return <span aria-hidden="true" className="inline-block h-1 w-1 rounded-pill bg-clay" />;
}
