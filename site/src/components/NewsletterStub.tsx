/**
 * Newsletter stub — "letters from the reading room". Deliberately
 * dormant: the field and button are visible but disabled until a
 * real mailing provider is wired in (one small change later).
 * No email is collected today — no false promises to visitors.
 */
export function NewsletterStub() {
  return (
    <section
      aria-labelledby="letters-heading"
      className="mx-auto mt-section-gap max-w-container px-page-x"
    >
      <div className="mx-auto max-w-[38rem] rounded-card border border-line bg-paper px-6 py-8 text-center">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-rust">
          Coming soon
        </p>
        <h2
          id="letters-heading"
          className="mt-2 font-display text-[1.5rem] font-medium tracking-[-0.01em]"
        >
          Letters from the reading room
        </h2>
        <p className="mx-auto mt-2 max-w-[38ch] text-[0.92rem] text-ink-soft">
          An occasional letter about what I&rsquo;m reading, watching, and brewing.
          The first one hasn&rsquo;t been written yet.
        </p>
        <form
          className="mx-auto mt-5 flex max-w-[24rem] gap-2"
          aria-label="Newsletter sign-up (not open yet)"
        >
          <input
            type="email"
            disabled
            placeholder="your@email.com — soon"
            aria-label="Email address (sign-up opens soon)"
            className="min-w-0 flex-1 rounded-pill border border-line bg-cream px-4 py-2.5 text-[0.9rem] placeholder:text-ink-muted disabled:opacity-70"
          />
          <button
            type="button"
            disabled
            className="shrink-0 cursor-not-allowed rounded-pill bg-tan px-5 py-2.5 text-[0.9rem] font-semibold text-espresso opacity-70"
          >
            Soon
          </button>
        </form>
      </div>
    </section>
  );
}
