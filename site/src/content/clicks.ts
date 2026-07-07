/**
 * ═══════════════════════════════════════════════════════════
 *  BEYOND THE BOOKSHELF — your favourite clicks. YOUR file.
 * ═══════════════════════════════════════════════════════════
 *
 *  HOW TO SWAP IN A REAL PHOTO:
 *  1. Drop your photo into the folder  site/public/clicks/
 *     (square-ish photos look best in the polaroid frames).
 *  2. Change the `src` line below to "/clicks/your-file-name.jpg".
 *  3. Write your caption — it appears in handwriting-style italics
 *     under the print.
 *
 *  The four entries below are DRAWN STAND-INS in your palette,
 *  waiting for your kitchen & nature photographs.
 *
 *  · src     — "/clicks/file-name.jpg" (or .png / .webp)
 *  · caption — short and warm; this is your voice
 *  · alt     — describe the photo for people who can't see it
 */

export type Click = {
  src: string;
  caption: string;
  alt: string;
};

export const clicks: Click[] = [
  {
    src: "/clicks/chai.svg",
    caption: "adrak wali chai, first rain",
    alt: "A steaming glass of ginger chai on a wooden table",
  },
  {
    src: "/clicks/leaves.svg",
    caption: "morning walk finds",
    alt: "A sprig of fresh leaves picked on a morning walk",
  },
  {
    src: "/clicks/reading-corner.svg",
    caption: "reading corner, 11 pm",
    alt: "A stack of books beside a lit candle at night",
  },
  {
    src: "/clicks/train-window.svg",
    caption: "from the train window",
    alt: "Green hills and the sun through an arched train window",
  },
];
