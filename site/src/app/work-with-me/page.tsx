import type { Metadata } from "next";
import Link from "next/link";
import { WorkWithMe } from "@/components/WorkWithMe";

export const metadata: Metadata = {
  title: "Work with me — My Reading Room",
  description:
    "Collaborate with My Reading Room: Hindi, English and Gujarati book reviews for publishers and brands — review copies, reels today, long-form soon.",
};

export default function WorkWithMePage() {
  return (
    <>
      <main className="pb-16">
        <nav className="mx-auto max-w-container px-page-x pt-6">
          <Link
            href="/"
            className="text-[0.83rem] font-semibold text-rust no-underline hover:underline hover:underline-offset-4"
          >
            ← The reading room
          </Link>
        </nav>
        <WorkWithMe standalone />
      </main>
    </>
  );
}
