/**
 * ═══════════════════════════════════════════════════════════
 *  THE SHELF — your book list. This is YOUR file, Khyati.
 * ═══════════════════════════════════════════════════════════
 *
 *  HOW TO ADD A BOOK (60 seconds):
 *  1. Copy a block between { and }, (including both braces and
 *     the comma) from any book below.
 *  2. Paste it at the TOP of the list — the first book is always
 *     shown as "Latest review" in the hero.
 *  3. Change the lines. Type Hindi/Gujarati titles directly —
 *     the site renders them in the right font automatically.
 *  4. Save. The bookcase at /shelf lays itself out, however many
 *     books you add.
 *
 *  The fields:
 *  · title      — exactly as on the cover, any script
 *  · author     — same script as the title looks best
 *  · language   — "Hindi", "English" or "Gujarati" (drives the filter)
 *  · videoUrl   — paste the link to your reel / Short / video
 *  · searchAlso — OPTIONAL, for Hindi/Gujarati titles: the name in
 *                 English letters, so a visitor typing "godan"
 *                 still finds गोदान in the search bar
 *  · spine      — OPTIONAL colour: "clay", "espresso", "sage",
 *                 "tan" or "rust". Leave out for automatic variety.
 *  · availableOn— OPTIONAL "where to get it" tag under the spine:
 *                 availableOn: { name: "Amazon", url: "https://…" }
 *
 *  ⚠︎ Most entries below are SAMPLE books added to fill the
 *  bookcase while we design — replace them with your real list.
 */

export type Book = {
  title: string;
  author: string;
  language: "Hindi" | "English" | "Gujarati";
  videoUrl: string;
  searchAlso?: string;
  spine?: "clay" | "espresso" | "sage" | "tan" | "rust";
  availableOn?: { name: string; url: string };
};

/**
 * WHICH BOOKS APPEAR ON THE HOMEPAGE — your pick, your order.
 * Write the titles EXACTLY as they appear in the list below.
 * (If this list is ever empty, the newest six show instead.)
 */
export const featuredOnHomepage: string[] = [
  "गुनाहों का देवता",
  "The God of Small Things",
  "સરસ્વતીચંદ્ર",
  "गोदान",
  "The Namesake",
  "મળેલા જીવ",
];

const CHANNEL = "https://www.youtube.com/@my_readingroom"; // TODO: real reel links per book

export const books: Book[] = [
  // ─── newest first — the top one becomes "Latest review" ───
  {
    title: "गुनाहों का देवता",
    author: "धर्मवीर भारती",
    language: "Hindi",
    videoUrl: CHANNEL,
    searchAlso: "Gunahon Ka Devta",
    spine: "clay",
    availableOn: { name: "Amazon", url: "https://www.amazon.in/s?k=gunahon+ka+devta" }, // TODO: exact page
  },
  {
    title: "The God of Small Things",
    author: "Arundhati Roy",
    language: "English",
    videoUrl: CHANNEL,
    spine: "espresso",
    availableOn: { name: "Amazon", url: "https://www.amazon.in/s?k=the+god+of+small+things" }, // TODO: exact page
  },
  {
    title: "સરસ્વતીચંદ્ર",
    author: "ગોવર્ધનરામ ત્રિપાઠી",
    language: "Gujarati",
    videoUrl: CHANNEL,
    searchAlso: "Saraswatichandra",
    spine: "sage",
  },
  {
    title: "गोदान",
    author: "प्रेमचंद",
    language: "Hindi",
    videoUrl: CHANNEL,
    searchAlso: "Godan",
    spine: "tan",
  },
  {
    title: "The Namesake",
    author: "Jhumpa Lahiri",
    language: "English",
    videoUrl: CHANNEL,
    spine: "rust",
  },
  {
    title: "મળેલા જીવ",
    author: "પન્નાલાલ પટેલ",
    language: "Gujarati",
    videoUrl: CHANNEL,
    searchAlso: "Malela Jeev",
    spine: "clay",
  },

  // ─── SAMPLE BOOKS from here down — swap in your real list ───
  { title: "रश्मिरथी", author: "रामधारी सिंह 'दिनकर'", language: "Hindi", videoUrl: CHANNEL, searchAlso: "Rashmirathi" },
  { title: "Malgudi Days", author: "R. K. Narayan", language: "English", videoUrl: CHANNEL },
  { title: "ઝેર તો પીધાં છે જાણી જાણી", author: "મનુભાઈ પંચોળી 'દર્શક'", language: "Gujarati", videoUrl: CHANNEL, searchAlso: "Zer To Pidhan Chhe Jani Jani" },
  { title: "मधुशाला", author: "हरिवंश राय बच्चन", language: "Hindi", videoUrl: CHANNEL, searchAlso: "Madhushala" },
  { title: "Train to Pakistan", author: "Khushwant Singh", language: "English", videoUrl: CHANNEL },
  { title: "માનવીની ભવાઈ", author: "પન્નાલાલ પટેલ", language: "Gujarati", videoUrl: CHANNEL, searchAlso: "Manvini Bhavai" },
  { title: "राग दरबारी", author: "श्रीलाल शुक्ल", language: "Hindi", videoUrl: CHANNEL, searchAlso: "Raag Darbari" },
  { title: "The White Tiger", author: "Aravind Adiga", language: "English", videoUrl: CHANNEL },
  { title: "ભદ્રંભદ્ર", author: "રમણભાઈ નીલકંઠ", language: "Gujarati", videoUrl: CHANNEL, searchAlso: "Bhadrambhadra" },
  { title: "निर्मला", author: "प्रेमचंद", language: "Hindi", videoUrl: CHANNEL, searchAlso: "Nirmala" },
  { title: "The Palace of Illusions", author: "Chitra Banerjee Divakaruni", language: "English", videoUrl: CHANNEL },
  { title: "સૌરાષ્ટ્રની રસધાર", author: "ઝવેરચંદ મેઘાણી", language: "Gujarati", videoUrl: CHANNEL, searchAlso: "Saurashtrani Rasdhar" },
  { title: "चंद्रकांता", author: "देवकीनंदन खत्री", language: "Hindi", videoUrl: CHANNEL, searchAlso: "Chandrakanta" },
  { title: "A Suitable Boy", author: "Vikram Seth", language: "English", videoUrl: CHANNEL },
  { title: "દિવ્યચક્ષુ", author: "રમણલાલ દેસાઈ", language: "Gujarati", videoUrl: CHANNEL, searchAlso: "Divyachakshu" },
  { title: "कितने पाकिस्तान", author: "कमलेश्वर", language: "Hindi", videoUrl: CHANNEL, searchAlso: "Kitne Pakistan" },
  { title: "Interpreter of Maladies", author: "Jhumpa Lahiri", language: "English", videoUrl: CHANNEL },
  { title: "The Guide", author: "R. K. Narayan", language: "English", videoUrl: CHANNEL },
  { title: "Em and the Big Hoom", author: "Jerry Pinto", language: "English", videoUrl: CHANNEL },
  { title: "The Blue Umbrella", author: "Ruskin Bond", language: "English", videoUrl: CHANNEL },
];

/* ── helpers used by the site (no need to touch) ─────────── */

/** The books shown on the homepage shelf, in your chosen order */
export function homepageBooks(): Book[] {
  const picked = featuredOnHomepage
    .map((title) => books.find((b) => b.title === title))
    .filter((b): b is Book => Boolean(b));
  return picked.length > 0 ? picked : books.slice(0, 6);
}

/** BCP-47 language codes for accessibility & correct font shaping */
export const langCode = { Hindi: "hi", English: "en", Gujarati: "gu" } as const;

/** Native-script labels for the filter chips */
export const langLabel = { Hindi: "हिंदी", English: "English", Gujarati: "ગુજરાતી" } as const;
