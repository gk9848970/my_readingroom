import Link from "next/link";
import { workWithMe } from "@/content/workWithMe";

/**
 * The publisher & brand card — a warm media card, not a rate sheet.
 * All facts live in content/workWithMe.ts. Lives on its own page
 * (/work-with-me); `standalone` drops the in-page section border.
 */
export function WorkWithMe({ standalone = false }: { standalone?: boolean }) {
  return (
    <section
      id="work-with-me"
      aria-labelledby="work-heading"
      className={`mx-auto px-page-x ${
        standalone
          ? "max-w-[46rem] pt-8" /* centred column: heading, intro and card share one axis */
          : "max-w-container mt-section-gap border-t border-line pt-10"
      }`}
    >
      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-0.5">
        <h2
          id="work-heading"
          className="whitespace-nowrap font-display text-[1.7rem] font-medium tracking-[-0.01em]"
        >
          Work with me
        </h2>
        <p className="ml-auto whitespace-nowrap text-[0.83rem] font-semibold text-rust">
          for publishers &amp; brands
        </p>
      </div>

      <p className="mt-2 max-w-[44ch] font-display text-[1.02rem] italic text-ink-soft">
        If you publish stories worth stopping for, I&rsquo;d love to hear from you.
      </p>

      <div className="mt-6 max-w-[44rem] rounded-card border border-line bg-paper p-6 min-[640px]:p-8">
        <div className="grid gap-6 min-[640px]:grid-cols-2">
          <div>
            <h3 className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-rust">
              What I review
            </h3>
            <p className="mt-1.5 text-[0.95rem] leading-relaxed text-ink-body">
              <span lang="hi" className="font-display font-medium">हिंदी</span>, English &amp;{" "}
              <span lang="gu" className="font-display font-medium">ગુજરાતી</span> literature —
              classics to contemporary, translations included.
            </p>
          </div>
          <div>
            <h3 className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-rust">
              Formats
            </h3>
            <p className="mt-1.5 text-[0.95rem] leading-relaxed text-ink-body">
              Sixty-second reels &amp; Shorts today; long-form video reviews are on
              their way. Every film I watch gets a written review too.
            </p>
          </div>
        </div>

        <div className="mt-7 border-t border-line pt-6">
          <h3 className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-rust">
            Audience
          </h3>
          <dl className="mt-3 grid grid-cols-3 gap-3">
            {workWithMe.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-[1.6rem] font-medium leading-none text-espresso">
                  {stat.value || "—"}
                </dd>
                <dd className="mt-1 text-[0.72rem] leading-snug text-ink-muted">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-7 border-t border-line pt-6">
          <h3 className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-rust">
            How I review
          </h3>
          <ul role="list" className="mt-2 space-y-1.5">
            {workWithMe.policy.map((line) => (
              <li key={line} className="text-[0.95rem] leading-relaxed text-ink-body">
                {line}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-7 flex flex-wrap items-center gap-4 border-t border-line pt-6">
          <a
            href={`mailto:${workWithMe.email}`}
            className="rounded-pill bg-rust px-6 py-3.5 text-[0.95rem] font-semibold text-cream no-underline transition duration-press ease-soft hover:-translate-y-0.5 hover:bg-espresso motion-reduce:hover:translate-y-0"
          >
            Write to me
          </a>
          <span className="break-all text-[0.85rem] font-semibold text-rust">
            {workWithMe.email}
          </span>
        </div>

        <p className="mt-5 text-[0.85rem] italic text-ink-muted">
          Curious whether I can actually write?{" "}
          <Link
            href="/screening-room"
            className="font-semibold text-rust underline decoration-clay decoration-2 underline-offset-4"
          >
            The Screening Room is my written archive.
          </Link>
        </p>
      </div>
    </section>
  );
}
