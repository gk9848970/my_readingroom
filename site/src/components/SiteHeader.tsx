import { Badge } from "./Badge";

/* "Work with me" is HIDDEN for now (Khyati's call) — the page still
   exists at /work-with-me; re-add its entry here to bring it back. */
const nav = [
  { href: "/", label: "Home" },
  { href: "/shelf", label: "The Shelf" },
  { href: "/screening-room", label: "Screening Room" },
];

/**
 * Consistent header: stays with the reader while scrolling (sticky),
 * one tidy line at every width. Cream at 95% opacity + a soft blur so
 * content ghosts underneath without ever fighting the text.
 */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-cream/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-container items-center gap-2.5 px-page-x py-2.5">
        <a href="/" className="shrink-0">
          <Badge size={38} />
        </a>
        {/* wordmark yields to the nav on the narrowest phones — the
            badge still carries the identity and links home */}
        <a
          href="/"
          className="hidden whitespace-nowrap font-display text-[0.95rem] font-semibold tracking-[0.01em] no-underline min-[500px]:inline"
        >
          My Reading Room
        </a>
        <nav
          aria-label="Site"
          className="ml-auto flex items-center gap-3.5 text-[0.78rem] font-medium"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-rust no-underline hover:underline hover:underline-offset-4"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
