import type { Metadata } from "next";
import type { ReactNode } from "react";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { getLocale } from "@/lib/i18n/get-locale";
import { PRODUCT_BASE_PATH } from "@/lib/i18n/product-paths";
import { buildSocialMetadata } from "@/lib/seo/build-social-metadata";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const meta = getDictionary(locale).citizenship.metadata;

  return buildSocialMetadata({
    title: meta.title,
    description: meta.description,
    path: PRODUCT_BASE_PATH.citizenship,
    locale,
    image: {
      path: "/images/og-citizenship.png",
      alt: "Hero: Einbürgerungstest 2026 Preview",
    },
  });
}

export default function HeroEinbuergerungstestLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return children;
}
