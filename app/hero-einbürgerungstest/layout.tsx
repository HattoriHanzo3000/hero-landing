import type { Metadata } from "next";
import type { ReactNode } from "react";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { getLocale } from "@/lib/i18n/get-locale";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const { metadata } = getDictionary(locale).citizenship;

  return {
    title: metadata.title,
    description: metadata.description,
  };
}

export default function HeroEinbuergerungstestLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return children;
}
