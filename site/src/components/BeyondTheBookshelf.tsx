import { clicks } from "@/content/clicks";

/**
 * The personal coda — a small strip of polaroid prints after the two
 * libraries. Deliberately compact: it warms the house, never competes
 * with it. Static markup; the straighten-and-lift is pure CSS using
 * the approved spring curve.
 */
export function BeyondTheBookshelf() {
  return (
    <section
      id="beyond"
      aria-labelledby="beyond-heading"
      className="mx-auto mt-section-gap max-w-container border-t border-line pt-10"
    >
      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-0.5 px-page-x">
        <h2
          id="beyond-heading"
          className="whitespace-nowrap font-display text-[1.7rem] font-medium tracking-[-0.01em]"
        >
          Beyond the Bookshelf
        </h2>
        <p className="ml-auto whitespace-nowrap text-[0.83rem] font-semibold text-rust">
          a few favourite clicks
        </p>
      </div>

      <p className="mt-2 px-page-x font-display text-[1.02rem] italic text-ink-soft">
        Kitchen experiments, morning walks, and the chai between chapters.
      </p>

      <ul
        role="list"
        tabIndex={0}
        aria-label="Photo prints, scrolls sideways"
        className="no-scrollbar flex snap-x snap-proximity gap-4 overflow-x-auto px-page-x pb-3 pt-7"
      >
        {clicks.map((click, i) => (
          <li key={click.src} className="snap-center">
            <figure
              className={`relative w-[196px] border border-line bg-cream px-2.5 pt-2.5 shadow-print-rest transition duration-play ease-spring hover:rotate-0 hover:-translate-y-1.5 hover:shadow-print-hover motion-reduce:hover:translate-y-0 ${
                i % 2 === 0 ? "rotate-[-2deg]" : "rotate-[1.6deg]"
              }`}
            >
              <span
                aria-hidden="true"
                className="absolute -top-2 left-1/2 h-[18px] w-[58px] -translate-x-1/2 rotate-[-3deg] rounded-plank bg-tan/80"
              />
              <span className="block aspect-square overflow-hidden bg-paper">
                {/* plain <img> while these are drawn stand-ins; switches to
                    the image optimizer when real photos arrive */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={click.src}
                  alt={click.alt}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </span>
              <figcaption className="py-2.5 text-center font-display text-[0.9rem] italic text-ink-body">
                {click.caption}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>

      <p className="px-page-x text-[0.78rem] italic text-ink-muted">
        These prints are drawn stand-ins — your photographs go here.
      </p>
    </section>
  );
}
