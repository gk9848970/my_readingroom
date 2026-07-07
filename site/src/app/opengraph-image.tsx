import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { brand, tint } from "@/lib/design-tokens";

/**
 * The site-wide link preview — what WhatsApp / Instagram / Twitter show
 * when someone shares the home page. Generated at build, in-brand.
 */
export const alt =
  "My Reading Room — Hindi, English & Gujarati book reviews";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const fontDir = join(process.cwd(), "src/assets/fonts");

export default async function OgImage() {
  const [fraunces, notoDev, notoGuj] = await Promise.all([
    readFile(join(fontDir, "fraunces-600.ttf")),
    readFile(join(fontDir, "noto-dev-500.ttf")),
    readFile(join(fontDir, "noto-guj-500.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: brand.cream,
          border: `18px solid ${brand.tan}`,
          fontFamily: "Fraunces, NotoDev, NotoGuj",
        }}
      >
        {/* tiny shelf of spines, standing on a plank */}
        <div style={{ display: "flex", alignItems: "flex-end", gap: 7 }}>
          {[
            { c: brand.rust, h: 64 },
            { c: brand.espresso, h: 76 },
            { c: brand.sage, h: 58 },
            { c: brand.tan, h: 72 },
            { c: brand.clay, h: 66 },
          ].map((s, i) => (
            <div
              key={i}
              style={{
                width: 17,
                height: s.h,
                backgroundColor: s.c,
                borderRadius: 3,
                ...(i === 4 ? { transform: "rotate(6deg)" } : {}),
              }}
            />
          ))}
        </div>
        <div style={{ display: "flex", width: 140, height: 8, backgroundColor: brand.tan, borderRadius: 2, marginTop: 0 }} />

        <div
          style={{
            fontSize: 92,
            color: brand.espresso,
            marginTop: 34,
            letterSpacing: -1,
          }}
        >
          My Reading Room
        </div>
        <div
          style={{
            display: "flex",
            gap: 18,
            fontSize: 34,
            color: brand.rust,
            marginTop: 18,
          }}
        >
          <span>हिंदी</span>
          <span>·</span>
          <span>English</span>
          <span>·</span>
          <span>ગુજરાતી</span>
          <span style={{ color: tint.inkSoft }}>literature</span>
        </div>
        <div
          style={{
            fontSize: 28,
            fontStyle: "italic",
            color: tint.inkSoft,
            marginTop: 22,
          }}
        >
          Helping you find your next favourite book.
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Fraunces", data: fraunces, weight: 600, style: "normal" },
        { name: "NotoDev", data: notoDev, weight: 500, style: "normal" },
        { name: "NotoGuj", data: notoGuj, weight: 500, style: "normal" },
      ],
    }
  );
}
