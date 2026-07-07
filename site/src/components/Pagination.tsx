"use client";

/** Warm pill pagination — shared by the Shelf and the Screening Room. */
export function Pagination({
  page,
  totalPages,
  onChange,
  label,
}: {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
  label: string;
}) {
  if (totalPages <= 1) return null;
  return (
    <nav aria-label={label} className="mt-7 flex items-center justify-center gap-4">
      <button
        type="button"
        onClick={() => onChange(page - 1)}
        disabled={page <= 1}
        className="rounded-pill border border-line bg-cream px-4 py-2 text-[0.85rem] font-semibold text-rust transition duration-tint ease-soft enabled:hover:bg-paper disabled:cursor-not-allowed disabled:opacity-40"
      >
        ← Prev
      </button>
      <span className="text-[0.83rem] font-semibold text-ink-soft" aria-live="polite">
        Page {page} of {totalPages}
      </span>
      <button
        type="button"
        onClick={() => onChange(page + 1)}
        disabled={page >= totalPages}
        className="rounded-pill border border-line bg-cream px-4 py-2 text-[0.85rem] font-semibold text-rust transition duration-tint ease-soft enabled:hover:bg-paper disabled:cursor-not-allowed disabled:opacity-40"
      >
        Next →
      </button>
    </nav>
  );
}
