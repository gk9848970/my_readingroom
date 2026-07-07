import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { films, filmSlug } from "@/content/films";
import { brand, tint } from "@/lib/design-tokens";

/**
 * Per-review link preview — a wide ticket: poster on the left,
 * title + meta on the right. Generated at build for every film.
 */
export const alt = "Film review · My Reading Room";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return films.map((film) => ({ slug: filmSlug(film) }));
}

const fontDir = join(process.cwd(), "src/assets/fonts");

export default async function OgImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const film = films.find((f) => filmSlug(f) === slug) ?? films[0];

  const [fraunces, notoDev, notoGuj] = await Promise.all([
    readFile(join(fontDir, "fraunces-600.ttf")),
    readFile(join(fontDir, "noto-dev-500.ttf")),
    readFile(join(fontDir, "noto-guj-500.ttf")),
  ]);
  const posterData = await readFile(join(process.cwd(), "public", film.poster));
  const posterSrc = `data:image/jpeg;base64,${posterData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          backgroundColor: brand.cream,
          border: `18px solid ${brand.tan}`,
          fontFamily: "Fraunces, NotoDev, NotoGuj",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={posterSrc}
          alt=""
          width={396}
          height={594}
          style={{ width: 396, height: 594, objectFit: "cover" }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 64px",
            borderLeft: `6px dashed ${tint.line}`,
            flex: 1,
          }}
        >
          <div
            style={{
              fontSize: 30,
              color: brand.rust,
              letterSpacing: 4,
              textTransform: "uppercase",
            }}
          >
            {`Film review · ${film.language} · ${film.year}`}
          </div>
          <div
            style={{
              fontSize: film.title.length > 14 ? 72 : 96,
              color: brand.espresso,
              marginTop: 22,
              lineHeight: 1.05,
            }}
          >
            {film.title}
          </div>
          <div
            style={{
              display: "flex",
              gap: 12,
              marginTop: 30,
            }}
          >
            {film.genres.map((genre) => (
              <div
                key={genre}
                style={{
                  fontSize: 26,
                  color: brand.rust,
                  border: `2px solid ${tint.line}`,
                  borderRadius: 999,
                  padding: "8px 26px",
                  textTransform: "uppercase",
                  letterSpacing: 2,
                }}
              >
                {genre}
              </div>
            ))}
          </div>
          <div
            style={{
              fontSize: 30,
              fontStyle: "italic",
              color: tint.inkSoft,
              marginTop: 44,
            }}
          >
            My Reading Room · read · review · reflect
          </div>
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
