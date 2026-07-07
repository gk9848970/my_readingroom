/**
 * ═══════════════════════════════════════════════════════════
 *  THE SCREENING ROOM — your film reviews. This is YOUR file.
 * ═══════════════════════════════════════════════════════════
 *
 *  HOW TO ADD A FILM (this is your weekly ritual):
 *  1. Copy a block between { and }, (braces and comma included).
 *  2. Paste it at the TOP — newest films appear first.
 *  3. Fill in the lines. For the poster: drop the image into the
 *     folder  site/public/posters/  and write its name below.
 *  4. Write your review inside the backticks ` ` — normal
 *     paragraphs, with ONE EMPTY LINE between paragraphs.
 *     That's all the formatting you'll ever need.
 *  5. Save. The home card, the review page and its web address
 *     all create themselves.
 *
 *  The fields:
 *  · title       — the film's name
 *  · year        — release year
 *  · language    — "Hindi", "English", "Gujarati", or anything else
 *  · genres      — one to three, in quotes, comma-separated:
 *                  genres: ["Drama"] or ["Drama", "Romance"]
 *  · poster      — "/posters/your-file-name.jpg"
 *  · excerpt     — the two or three opening lines shown on the
 *                  home-page ticket card
 *  · review      — your FULL written review, between backticks
 *  · pullQuote   — OPTIONAL: one line from your review worth
 *                  framing large in the middle of the page
 *  · availableOn — OPTIONAL "where to watch" link, shown as a pill
 *                  beside the genres. Two parts:
 *                  availableOn: { name: "Netflix", url: "https://…" }
 *  · searchAlso  — OPTIONAL, for native-script titles: the name in
 *                  English letters so search finds it either way
 *  · bookOnShelf — OPTIONAL: if this film began as a book that's
 *                  on your Shelf, the book's title EXACTLY as in
 *                  books.ts (kept for later use; shows nothing now)
 *  · slug        — OPTIONAL web address, e.g. "the-lunchbox".
 *                  Leave it out and one is made from the title.
 *
 *  ⚠︎ Excerpts, reviews and pull quotes below are placeholder
 *  words written by your build partner — replace them with YOURS.
 */

export type Film = {
  title: string;
  year: number;
  language: string;
  genres: string[];
  poster: string;
  excerpt: string;
  review: string;
  pullQuote?: string;
  availableOn?: { name: string; url: string };
  searchAlso?: string;
  bookOnShelf?: string;
  slug?: string;
};

/**
 * WHICH FILMS APPEAR ON THE HOMEPAGE — your pick, your order.
 * Titles exactly as below. (Empty list = newest two show instead.)
 */
export const featuredOnHomepage: string[] = ["The Lunchbox", "The Namesake"];

export const films: Film[] = [
  // ─── newest first ───
  {
    title: "The Lunchbox",
    year: 2013,
    language: "Hindi",
    genres: ["Drama", "Romance"],
    poster: "/posters/the-lunchbox.jpg",
    excerpt:
      "Ila cooks to be seen; Saajan eats to remember. The film knows that a dabba travelling across Mumbai carries more than lunch — it carries the hope of being noticed. Nothing here hurries, and that is the point.",
    pullQuote: "A love story told at the speed of steam rising from fresh rotis.",
    availableOn: { name: "Netflix", url: "https://www.netflix.com/search?q=the%20lunchbox" }, // TODO: exact page
    review: `Ila cooks to be seen; Saajan eats to remember. The film knows that a dabba travelling across Mumbai carries more than lunch — it carries the hope of being noticed. Nothing here hurries, and that is the point.

Ritesh Batra builds his film on a famous statistic: Mumbai's dabbawalas almost never deliver a lunchbox to the wrong desk. Almost. From that one-in-a-million slip grows a correspondence between a lonely housewife and a widower weeks from retirement, written on small chits of paper tucked between rotis and sabzi. It should feel like a gimmick. It never does, because the film treats food the way my nani treated it — as a sentence you write to someone.

Irrfan Khan gives the performance I keep returning to. Watch him smell the food before he eats it; watch the guilt with which he returns an empty dabba, knowing an empty dabba is also a message. He plays Saajan Fernandes as a man who has confused solitude with safety for so long that kindness startles him.

And yet my favourite character never appears on screen. Ila's upstairs neighbour — Deshpande aunty, a voice and a basket lowered from a window — is the film's whole philosophy: love is mostly attention, lowered down patiently, day after day.

The ending refuses to tie the ribbon. Some viewers call that a betrayal; I call it respect. सही ट्रेन कभी-कभी गलत स्टेशन पर भी ले जाती है — the wrong train, as the film says, sometimes takes you to the right station. Where they arrive matters less than the fact that two invisible people finally felt seen.`,
  },
  {
    title: "The Namesake",
    year: 2006,
    language: "English",
    genres: ["Drama"],
    poster: "/posters/the-namesake.jpg",
    excerpt:
      "Mira Nair films grief the way Gogol carries his name — reluctantly, and then all at once. Between Kolkata and New York, the film keeps asking what we owe the people who named us.",
    pullQuote: "We spend our twenties escaping our parents and our thirties searching for them.",
    availableOn: { name: "Prime Video", url: "https://www.primevideo.com/search?phrase=the%20namesake" }, // TODO: exact page
    review: `Mira Nair films grief the way Gogol carries his name — reluctantly, and then all at once. Between Kolkata and New York, the film keeps asking what we owe the people who named us.

I came to the film protective of Jhumpa Lahiri's novel, which I have loved for years. I needn't have been. Nair understands that the book's real subject is not immigration but inheritance — the way a name, a train ticket, a half-remembered story about a snowstorm can carry a whole family across an ocean.

Irrfan Khan and Tabu play Ashoke and Ashima with such restraint that their love story sneaks up on you. There is a scene where Ashima, newly arrived in a New York winter, shuffles into her husband's too-big shoes before deciding to marry him — the film's entire theory of arranged marriage in ten wordless seconds. You marry the shoes first, the man slowly.

Kal Penn's Gogol gets the showier journey, the American one, and the film is honest about how callow he is — embarrassed by his parents at exactly the age when they are most heroic. We spend our twenties escaping our parents and our thirties searching for them; the film knows which decade Gogol is in before he does.

Read the book for Lahiri's sentences. Watch the film for Tabu's face in the final scene, singing into the Kolkata evening — free, finally, in the way only someone who has carried two countries can be.`,
    bookOnShelf: "The Namesake",
  },

  // ─── SAMPLE FILMS from here down — replace with your archive ───
  {
    title: "Tumbbad",
    year: 2018,
    language: "Hindi",
    genres: ["Horror", "Fantasy"],
    poster: "/posters/tumbbad.jpg",
    excerpt:
      "Greed is the monster, rain is the weather of the soul, and one crumbling wada holds both. Tumbbad is the rare horror film that gets more frightening the more you understand it.",
    pullQuote: "Not everything that is handed down is an inheritance; some of it is a debt.",
    review: `Greed is the monster, rain is the weather of the soul, and one crumbling wada holds both. Tumbbad is the rare horror film that gets more frightening the more you understand it.

Rahi Anil Barve builds his film like a fable told by a grandmother who wants you to sleep badly: a goddess who must never be woken, a treasure that must never be counted, and three generations of men who mistake hunger for ambition. Every frame is the colour of wet earth and old brass.

What stays with me is not the creature but the teaching — the way Vinayak trains his own son into the family trade of taking. Not everything that is handed down is an inheritance; some of it is a debt. Watch it on the biggest screen you own, with the rain sounds up.`,
    availableOn: { name: "Prime Video", url: "https://www.primevideo.com/search?phrase=tumbbad" }, // TODO: exact page
  },
  {
    title: "હેલ્લારો",
    year: 2019,
    language: "Gujarati",
    genres: ["Drama"],
    poster: "/posters/hellaro.jpg",
    excerpt:
      "A drum arrives in a village where women are forbidden joy, and the garba becomes an act of rebellion. Hellaro is Gujarati cinema remembering how big it can be.",
    pullQuote: "Some dances are prayers; this one is a protest.",
    review: `A drum arrives in a village where women are forbidden joy, and the garba becomes an act of rebellion. Hellaro is Gujarati cinema remembering how big it can be.

Set in the salt-white emptiness of Kutch in 1975, the film follows thirteen women whose lives are measured out in water pots and permissions. Then they find a wounded drummer in the desert, and his dhol gives their feet a language their village never allowed them.

The garba sequences are shot like weather — something that gathers, breaks, and cleans the air. Some dances are prayers; this one is a protest. It won the National Award for Best Feature Film, and for once the award feels like the smaller honour.`,
    searchAlso: "Hellaro",
    slug: "hellaro",
  },
  {
    title: "12th Fail",
    year: 2023,
    language: "Hindi",
    genres: ["Drama", "Biography"],
    poster: "/posters/12th-fail.jpg",
    excerpt:
      "A boy from Chambal restarts his life the way you restart a stalled engine — again, and again, and again. 12th Fail turns the UPSC grind into something close to devotion.",
    pullQuote: "रीस्टार्ट — the bravest word in the film's vocabulary.",
    review: `A boy from Chambal restarts his life the way you restart a stalled engine — again, and again, and again. 12th Fail turns the UPSC grind into something close to devotion.

Vidhu Vinod Chopra strips the underdog story of its usual sugar. Manoj sleeps in a library he cleans, grinds flour by night, and fails more often than he passes. Vikrant Massey plays him with a stubbornness so quiet it takes an hour to notice it's heroism.

रीस्टार्ट — the bravest word in the film's vocabulary, and it is spoken by the people who have the least fuel left. I walked out wanting to work harder at everything, which may be the most honest review I can give.`,
    availableOn: { name: "Hotstar", url: "https://www.hotstar.com/in/explore?search_query=12th%20fail" }, // TODO: exact page
    slug: "12th-fail",
  },
];

/* ── helpers used by the site (no need to touch) ─────────── */

/** The films shown on the homepage, in your chosen order */
export function homepageFilms(): Film[] {
  const picked = featuredOnHomepage
    .map((title) => films.find((f) => f.title === title))
    .filter((f): f is Film => Boolean(f));
  return picked.length > 0 ? picked : films.slice(0, 2);
}

/** Web address for a film — your custom slug, or one made from the title. */
export function filmSlug(film: Film): string {
  return (
    film.slug ??
    film.title
      .toLowerCase()
      .replace(/['’.,:!?()]/g, "")
      .trim()
      .replace(/\s+/g, "-")
  );
}

/** Full review split into paragraphs for the reading page */
export function reviewParagraphs(film: Film): string[] {
  return film.review
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);
}
