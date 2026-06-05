import type { Metadata } from "next";
import type { ReactNode } from "react";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { getLocale } from "@/lib/i18n/get-locale";
import { PRODUCT_BASE_PATH } from "@/lib/i18n/product-paths";
import { buildSocialMetadata } from "@/lib/seo/build-social-metadata";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const meta = getDictionary(locale).b2Beruf.metadata;

  return buildSocialMetadata({
    title: meta.title,
    description: meta.description,
    path: PRODUCT_BASE_PATH.b2Beruf,
    locale,
    image: {
      path: "/images/og-b2beruf.png",
      alt: "Hero: B2 Beruf Vokabeln Preview",
    },
  });
}

export default function HeroB2BerufLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return children;
}
