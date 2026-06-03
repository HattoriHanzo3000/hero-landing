import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Hero: Einbürgerungstest 2026",
  description:
    "Prepare for Germany's official naturalization test with curated questions, focused practice, and clear progress.",
};

export default function HeroEinbuergerungstestLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return children;
}
