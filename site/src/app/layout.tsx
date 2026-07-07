import type { Metadata, Viewport } from "next";
import { ViewTransition } from "react";
import {
  Fraunces,
  Work_Sans,
  Noto_Serif_Devanagari,
  Noto_Serif_Gujarati,
} from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

/* The four faces of the site — display serif, body sans, and the two
   Indic serifs that carry Hindi & Gujarati titles. All variable fonts,
   self-hosted by next/font: no request ever leaves for Google. */
const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-fraunces",
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
});

const notoSerifDevanagari = Noto_Serif_Devanagari({
  subsets: ["devanagari"],
  variable: "--font-noto-dev",
  display: "swap",
});

const notoSerifGujarati = Noto_Serif_Gujarati({
  subsets: ["gujarati"],
  variable: "--font-noto-guj",
  display: "swap",
});

export const metadata: Metadata = {
  // TODO: swap for the real domain at deploy time
  metadataBase: new URL("https://my-readingroom.vercel.app"),
  title: "My Reading Room — Hindi, English & Gujarati book reviews",
  description:
    "Helping you find your next favourite book. Hindi, English and Gujarati book reviews — classics to contemporary — plus a growing library of written film reviews.",
  openGraph: {
    title: "My Reading Room",
    description:
      "Hindi, English & Gujarati book reviews — helping you find your next favourite book.",
    type: "website",
    siteName: "My Reading Room",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  themeColor: "#EFE8D8",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${workSans.variable} ${notoSerifDevanagari.variable} ${notoSerifGujarati.variable}`}
    >
      {/* header & footer hold still; page content cross-fades between
          routes via the browser's native View Transitions */}
      <body>
        <SiteHeader />
        <ViewTransition name="page">{children}</ViewTransition>
        <SiteFooter />
      </body>
    </html>
  );
}
