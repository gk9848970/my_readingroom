/**
 * Watch & follow — two warm doorways to the channels, not a wall of
 * embeds (loads nothing from YouTube/Instagram: kind to cheap phones).
 * Drawn flat motifs keep it faceless, per the brand.
 */

const channels = [
  {
    name: "YouTube",
    handle: "@my_readingroom",
    href: "https://www.youtube.com/@my_readingroom",
    line: "Sixty-second book reviews — hands, pages, and a shelf behind them. Long-form is coming.",
    cta: "Visit the channel",
    motif: "play" as const,
  },
  {
    name: "Instagram",
    handle: "@my_readingroom_",
    href: "https://www.instagram.com/my_readingroom_",
    line: "Reels, shelves in progress, and the occasional cup of chai between chapters.",
    cta: "Say hello",
    motif: "camera" as const,
  },
];

export function WatchAndFollow() {
  return (
    <section
      id="watch"
      aria-labelledby="watch-heading"
      className="mx-auto mt-section-gap max-w-container border-t border-line px-page-x pt-10"
    >
      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-0.5">
        <h2
          id="watch-heading"
          className="whitespace-nowrap font-display text-[1.7rem] font-medium tracking-[-0.01em]"
        >
          Watch &amp; follow
        </h2>
        <p className="ml-auto whitespace-nowrap text-[0.83rem] font-semibold text-rust">
          where the reviews live
        </p>
      </div>

      <div className="mt-6 grid gap-5 min-[640px]:grid-cols-2">
        {channels.map((ch) => (
          <a
            key={ch.name}
            href={ch.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group block max-w-card rounded-card border border-line bg-paper p-5 no-underline transition duration-lift ease-soft hover:-translate-y-[3px] hover:shadow-card-hover motion-reduce:hover:translate-y-0"
          >
            <div className="flex items-center gap-3.5">
              <Motif kind={ch.motif} />
              <div className="min-w-0">
                <p className="font-display text-[1.2rem] font-medium">{ch.name}</p>
                <p className="truncate text-[0.83rem] font-semibold text-rust">{ch.handle}</p>
              </div>
            </div>
            <p className="mt-3 text-[0.9rem] leading-relaxed text-ink-body">{ch.line}</p>
            <p className="mt-3 text-[0.85rem] font-semibold text-rust group-hover:underline group-hover:underline-offset-4">
              {ch.cta} ↗<span className="sr-only"> (opens in a new tab)</span>
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}

function Motif({ kind }: { kind: "play" | "camera" }) {
  if (kind === "play") {
    return (
      <span
        aria-hidden="true"
        className="grid h-12 w-12 shrink-0 place-items-center rounded-pill bg-rust"
      >
        <span className="ml-0.5 border-y-[7px] border-l-[12px] border-y-transparent border-l-cream" />
      </span>
    );
  }
  return (
    <span aria-hidden="true" className="shrink-0">
      <svg width="48" height="48" viewBox="0 0 48 48">
        <rect
          x="6"
          y="6"
          width="36"
          height="36"
          rx="11"
          fill="none"
          stroke="#8A4B32"
          strokeWidth="2.6"
        />
        <circle cx="24" cy="24" r="8.5" fill="none" stroke="#8A4B32" strokeWidth="2.6" />
        <circle cx="33.5" cy="14.5" r="2.4" fill="#8A4B32" />
      </svg>
    </span>
  );
}
