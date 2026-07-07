/**
 * ============================================================
 *  MY READING ROOM — DESIGN TOKENS  ·  Checkpoint 2
 * ============================================================
 *  The single source of truth for every visual decision on the
 *  site. Extracted from the locked "Spine Wall v2" mockup
 *  (mockups/01-spine-wall-v2.html) — extraction, not redesign.
 *
 *  RULE (per checkpoint protocol): after this file is approved,
 *  no colour, font, size, radius, shadow or motion value may
 *  appear anywhere in the codebase unless it comes from here.
 *  Changes to this file are proposed and approved first.
 *
 *  Sections marked ⏳ PROPOSED are values the mockup didn't
 *  exercise yet (page transitions, long-form reading). They are
 *  parked here so nothing is invented later; each gets tried on
 *  screen and confirmed at its Checkpoint-3 section gate.
 * ============================================================
 */

/* ------------------------------------------------------------
 * 1 · COLOUR
 * ------------------------------------------------------------ */

/** The six locked brand colours — from Khyati's brand kit, never altered. */
export const brand = {
  cream:    '#EFE8D8', // base / page background
  espresso: '#3D2E23', // primary text
  clay:     '#B07C5B', // primary accent (italic highlights, underlines)
  sage:     '#7C8A5A', // secondary accent (spines, poster matte)
  rust:     '#8A4B32', // small details, links, CTAs
  tan:      '#C9A57E', // fills, hovers, the shelf plank
} as const;

/**
 * Derived tints — brand colours mixed into cream, so every surface
 * stays warm. Percentage = how much of the named colour is in the mix.
 */
export const tint = {
  paper:    '#EADFCB', // tan 14% → card / ticket backgrounds
  line:     '#C8BFB0', // espresso 22% → hairline borders, rules
  inkBody:  '#584A3E', // espresso 85% → card body copy
  inkSoft:  '#64574B', // espresso 78% → supporting text under headings
  inkMuted: '#7B6F62', // espresso 65% → captions, asides, footnotes
  plankEdge:'#AD7C5C', // rust 45% into tan → shelf plank underside
} as const;

/** Semantic roles — components speak in these, not raw hexes. */
export const color = {
  pageBg:        brand.cream,
  text:          brand.espresso,
  textBody:      tint.inkBody,
  textSoft:      tint.inkSoft,
  textMuted:     tint.inkMuted,
  surface:       tint.paper,        // cards, ticket stubs
  border:        tint.line,
  ctaBg:         brand.rust,        // primary button
  ctaBgHover:    brand.espresso,
  ctaText:       brand.cream,
  linkAccent:    brand.rust,        // arrow links, watch →
  underline:     brand.clay,        // decorative underlines (2px, offset 5px)
  heroItalic:    brand.clay,        // the "next favourite" moment
  focusRing:     brand.rust,        // 2px solid, offset 3px — accessibility
  chipActiveBg:  brand.espresso,
  chipActiveText:brand.cream,
  /** book-spine palette rotation (with which text colour sits on each) */
  spines: [
    { bg: brand.clay,     text: brand.cream },
    { bg: brand.espresso, text: brand.cream },
    { bg: brand.sage,     text: brand.cream },
    { bg: brand.tan,      text: brand.espresso },
    { bg: brand.rust,     text: brand.cream },
  ],
  posterMatte:   brand.sage,        // behind film posters while they load
  shadowBase:    '61, 46, 35',      // espresso RGB — every shadow is this, varying alpha
} as const;

/* ------------------------------------------------------------
 * 2 · TYPOGRAPHY — three scripts, one voice
 * ------------------------------------------------------------ */

/**
 * Display serif = Fraunces (variable font: weight + optical size).
 * Body sans     = Work Sans.
 * Hindi & Gujarati always render in their Noto SERIFS — even inside
 * sans-serif contexts. Deliberate: Devanagari & Gujarati carry more
 * grace in serif, and it keeps native titles feeling bookish.
 * (Loaded via next/font at build, display:swap, subset per script.)
 */
export const fontFamily = {
  display: `"Fraunces", "Noto Serif Devanagari", "Noto Serif Gujarati", serif`,
  body:    `"Work Sans", "Noto Serif Devanagari", "Noto Serif Gujarati", sans-serif`,
} as const;

export const fontWeight = {
  displayHero: 340,  // Fraunces light — the big welcome
  displayMed:  500,  // section & card titles, spine titles
  displaySemi: 600,  // wordmark
  body:        400,
  bodyMed:     500,
  bodySemi:    600,  // buttons, overlines, links
} as const;

/** Type scale — mobile value is the design; clamp grows it on wide screens. */
export const typeScale = {
  displayHero: { size: 'clamp(2.5rem, 9.5vw, 4.9rem)', lineHeight: 1.06, tracking: '-0.015em', family: 'display', weight: 340 },
  sectionTitle:{ size: '1.7rem',  lineHeight: 1.2,  tracking: '-0.01em', family: 'display', weight: 500 },
  cardTitle:   { size: '1.42rem', lineHeight: 1.25, tracking: '-0.01em', family: 'display', weight: 500 },
  spineTitle:  { size: '1.02rem', lineHeight: 1.2,  tracking: '0.02em',  family: 'display', weight: 500 }, // vertical-rl on spines
  introItalic: { size: '1.02rem', lineHeight: 1.6,  italic: true,        family: 'display', weight: 400 }, // section intro lines
  wordmark:    { size: '1.02rem', lineHeight: 1.2,  tracking: '0.01em',  family: 'display', weight: 600 },
  body:        { size: '1rem',    lineHeight: 1.6,  family: 'body', weight: 400 },
  bodySm:      { size: '0.88rem', lineHeight: 1.6,  family: 'body', weight: 400 }, // card excerpts
  caption:     { size: '0.85rem', lineHeight: 1.5,  family: 'body', weight: 400 }, // latest-video line
  note:        { size: '0.78rem', lineHeight: 1.55, italic: true, family: 'body', weight: 400 }, // asides
  overline:    { size: '0.82rem', tracking: '0.14em', uppercase: true, family: 'body', weight: 600 }, // हिंदी • ENGLISH • ગુજરાતી kicker
  chip:        { size: '0.82rem', family: 'body', weight: 500 },
  linkMore:    { size: '0.83rem', family: 'body', weight: 600 }, // "Every book I've reviewed →"
  metaMicro:   { size: '0.72rem', tracking: '0.10em', uppercase: true, family: 'body', weight: 600 }, // HINDI · DRAMA · 2013
  spineAuthor: { size: '0.62rem', tracking: '0.08em', family: 'body', weight: 400 },
  spineLang:   { size: '0.58rem', tracking: '0.12em', uppercase: true, family: 'body', weight: 400 },
} as const;

/* ------------------------------------------------------------
 * 3 · SPACING & LAYOUT
 * ------------------------------------------------------------ */

/** Base ramp (rem). Components pick from this ramp only. */
export const space = {
  xs2: '0.25rem', xs: '0.5rem', sm: '0.75rem', md: '1rem',
  lg: '1.25rem', xl: '1.5rem', xl2: '2rem', xl3: '2.6rem',
  xl4: '3rem', xl5: '3.6rem',
} as const;

/** Semantic layout values, extracted from the locked screen. */
export const layout = {
  pageX:        '1.25rem',  // page side padding (mobile)
  container:    '70rem',    // max content width
  cardMax:      '34rem',    // ticket-stub / feature card width
  sectionGap:   '3.6rem',   // vertical rhythm between sections
  sectionPadTop:'2.6rem',   // inside a bordered section
  heroPadTop:   '3rem',
  spineWidth:   '66px',     // one book spine
  spineHeights: [250, 232, 262, 224, 244, 250], // px — varied like a real shelf
  spineGap:     '0.55rem',
  plankHeight:  '12px',
  posterWidth:  '122px',    // ticket poster panel
  printWidth:   '196px',    // polaroid clicks
  breakpoints:  { navFull: '431px', grid2: '640px', desktop: '1024px' },
} as const;

/* ------------------------------------------------------------
 * 4 · RADII & BORDERS
 * ------------------------------------------------------------ */

export const radius = {
  spine:  '3px 3px 2px 2px', // books are near-sharp — they're objects
  card:   '14px',            // ticket stubs, feature cards
  chip:   '999px',           // pills, buttons, filter chips
  plank:  '2px',
  print:  '0',               // polaroids are true prints — sharp corners
} as const;

export const border = {
  hairline: `1px solid ${tint.line}`,
  ticketTear: `2px dashed #C8BFB0`, // the perforation line
} as const;

/* ------------------------------------------------------------
 * 5 · SHADOWS — always espresso-tinted, never grey
 * ------------------------------------------------------------ */

export const shadow = {
  spine: `inset -3px 0 6px rgba(${color.shadowBase},.18), inset 2px 0 2px rgba(239,232,216,.15), 0 1px 0 rgba(${color.shadowBase},.25)`,
  ledge: `0 3px 0 ${tint.plankEdge}, 0 10px 14px -8px rgba(${color.shadowBase},.35)`,
  cardHover:  `0 14px 24px -16px rgba(${color.shadowBase},.4)`,
  printRest:  `0 4px 10px -6px rgba(${color.shadowBase},.35)`,
  printHover: `0 16px 24px -14px rgba(${color.shadowBase},.45)`,
} as const;

/* ------------------------------------------------------------
 * 6 · MOTION — the site's personality; use sparingly, land precisely
 *     Everything here is disabled wholesale by prefers-reduced-motion.
 * ------------------------------------------------------------ */

export const motion = {
  /** Durations (ms) */
  duration: {
    tint:  150,  // colour/background-only changes (chip hover)
    press: 180,  // buttons
    lift:  200,  // cards, posters
    play:  220,  // the springy pieces: spines, polaroids
  },

  /** Easings (CSS) */
  ease: {
    soft:   'cubic-bezier(0.25, 0.1, 0.25, 1)',    // standard ease — calm elements
    spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',   // ~10% overshoot — the "book pull"
  },

  /** Framer Motion equivalents of ease.spring — one feel, two syntaxes */
  spring: {
    bookPull: { type: 'spring', stiffness: 420, damping: 24 },        // spines, prints
    gentle:   { type: 'spring', stiffness: 260, damping: 30 },        // cards settling
  },

  /** Hover transforms — the exact distances from the locked mockup */
  lift: {
    spine:  'translateY(-10px)',            // book slides off the shelf
    card:   'translateY(-3px)',
    print:  'rotate(0deg) translateY(-6px)',// polaroid straightens as it lifts
    button: 'translateY(-2px)',
  },

  /** Standing poses */
  pose: {
    spineLean:  'rotate(4.5deg)',                 // one book always leans
    printTiltA: 'rotate(-2deg)',                  // polaroids alternate
    printTiltB: 'rotate(1.6deg)',
  },

  /** ⏳ PROPOSED — scroll-reveal & page transitions (not in mockup yet;
   *  to be shown and approved at their Checkpoint-3 section gates) */
  proposed: {
    revealDistance: '12px',                        // sections drift up as they enter
    revealDuration: 500,
    revealEase:     'cubic-bezier(0.215, 0.61, 0.355, 1)',
    revealStagger:  60,                            // ms between siblings (e.g. spines)
    pageFadeDuration: 420, // ✓ confirmed on screen with Khyati — native cross-fade, easeOutCubic
  },
} as const;

/* ------------------------------------------------------------
 * 7 · ⏳ PROPOSED — long-form reading (Screening Room review pages)
 *     Parked until that section's gate; listed so it isn't invented ad hoc.
 * ------------------------------------------------------------ */

export const readingProposed = {
  measure:   '60ch',      // comfortable line length for review prose
  proseSize: '1.06rem',
  proseLeading: 1.75,
  dropCapLines: 3,        // if we keep drop caps — decided at that gate
} as const;
