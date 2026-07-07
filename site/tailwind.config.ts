import type { Config } from "tailwindcss";
import { brand, tint, shadow, motion, radius, layout } from "./src/lib/design-tokens";

/**
 * Tailwind reads EVERYTHING from src/lib/design-tokens.ts.
 * theme.colors is deliberately non-extendable: only the approved
 * palette exists — there is no blue, no grey, no white to reach for.
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      cream: brand.cream,
      espresso: brand.espresso,
      clay: brand.clay,
      sage: brand.sage,
      rust: brand.rust,
      tan: brand.tan,
      paper: tint.paper,
      line: tint.line,
      "ink-body": tint.inkBody,
      "ink-soft": tint.inkSoft,
      "ink-muted": tint.inkMuted,
      "plank-edge": tint.plankEdge,
    },
    fontFamily: {
      display: [
        "var(--font-fraunces)",
        "var(--font-noto-dev)",
        "var(--font-noto-guj)",
        "serif",
      ],
      body: [
        "var(--font-work-sans)",
        "var(--font-noto-dev)",
        "var(--font-noto-guj)",
        "sans-serif",
      ],
    },
    extend: {
      borderRadius: {
        spine: radius.spine,
        card: radius.card,
        pill: radius.chip,
        plank: radius.plank,
      },
      boxShadow: {
        spine: shadow.spine,
        ledge: shadow.ledge,
        "card-hover": shadow.cardHover,
        "print-rest": shadow.printRest,
        "print-hover": shadow.printHover,
      },
      transitionTimingFunction: {
        soft: motion.ease.soft,
        spring: motion.ease.spring,
      },
      transitionDuration: {
        tint: `${motion.duration.tint}ms`,
        press: `${motion.duration.press}ms`,
        lift: `${motion.duration.lift}ms`,
        play: `${motion.duration.play}ms`,
      },
      maxWidth: {
        container: layout.container,
        card: layout.cardMax,
      },
      spacing: {
        "page-x": layout.pageX,
        "section-gap": layout.sectionGap,
      },
    },
  },
  plugins: [],
};

export default config;
