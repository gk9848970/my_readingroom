import { brand } from "@/lib/design-tokens";

/**
 * Stand-in for the circular logo badge until the real .webp arrives.
 * Same geometry as the approved mockups: double ring, arced wordmark,
 * open book at the centre.
 */
export function Badge({ size = 44, className }: { size?: number; className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label="My Reading Room · read · review · reflect — home"
    >
      <circle cx="60" cy="60" r="58" fill={brand.cream} stroke={brand.espresso} strokeWidth="1.6" />
      <circle cx="60" cy="60" r="49" fill="none" stroke={brand.clay} strokeWidth=".8" />
      <defs>
        <path id="badge-arc-top" d="M 20,60 a 40,40 0 1 1 80,0" />
        <path id="badge-arc-bottom" d="M 18,60 a 42,42 0 0 0 84,0" />
      </defs>
      <text
        fontSize="10"
        letterSpacing="2"
        fill={brand.espresso}
        fontWeight="600"
        style={{ fontFamily: "var(--font-fraunces), serif" }}
      >
        <textPath href="#badge-arc-top" startOffset="50%" textAnchor="middle">
          MY READING ROOM
        </textPath>
      </text>
      <text
        fontSize="6.4"
        letterSpacing="1.5"
        fill={brand.rust}
        style={{ fontFamily: "var(--font-work-sans), sans-serif" }}
      >
        <textPath href="#badge-arc-bottom" startOffset="50%" textAnchor="middle">
          READ · REVIEW · REFLECT
        </textPath>
      </text>
      <g
        stroke={brand.espresso}
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M60 50 C 55.5 46, 48 45, 43 47 L 43 68 C 48 66, 55.5 67, 60 71 C 64.5 67, 72 66, 77 68 L 77 47 C 72 45, 64.5 46, 60 50 Z" />
        <path d="M60 50 L 60 71" />
      </g>
    </svg>
  );
}
