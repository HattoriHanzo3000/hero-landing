import type { Metadata } from "next";
import type { ReactNode } from "react";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { getLocale } from "@/lib/i18n/get-locale";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const { metadata } = getDictionary(locale).b2Beruf;

  return {
    title: metadata.title,
    description: metadata.description,
  };
}

export default function HeroB2BerufLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return children;
}
