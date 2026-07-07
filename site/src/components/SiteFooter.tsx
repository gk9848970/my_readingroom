import { Badge } from "./Badge";

/* Work with me link HIDDEN for now (Khyati's call) — page still exists */
const footerLinks = [
  { href: "/shelf", label: "The Shelf" },
  { href: "/screening-room", label: "The Screening Room" },
  { href: "https://www.youtube.com/@my_readingroom", label: "YouTube", external: true },
  { href: "https://www.instagram.com/my_readingroom_", label: "Instagram", external: true },
];

export function SiteFooter() {
  return (
    <footer className="mt-section-gap border-t border-line">
      <div className="mx-auto flex max-w-container flex-col items-center gap-4 px-page-x py-10 text-center">
        <Badge size={56} />
        <p className="max-w-[36ch] font-display text-[0.98rem] italic text-ink-soft">
          Helping you find your next favourite book.
        </p>
        <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-5 gap-y-2">
          {footerLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="text-[0.82rem] font-semibold text-rust no-underline hover:underline hover:underline-offset-4"
            >
              {link.label}
              {link.external ? " ↗" : ""}
            </a>
          ))}
        </nav>
        <p className="text-[0.75rem] uppercase tracking-[0.14em] text-ink-muted">
          © {new Date().getFullYear()} My Reading Room · read · review · reflect
        </p>
      </div>
    </footer>
  );
}
