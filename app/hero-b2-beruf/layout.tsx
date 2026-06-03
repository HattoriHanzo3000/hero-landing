import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Hero-Deutsch B2 Beruf",
  description:
    "Build workplace-ready German at B2 level with profession-specific vocabulary, realistic dialogues, and structured career paths.",
};

export default function HeroB2BerufLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return children;
}
