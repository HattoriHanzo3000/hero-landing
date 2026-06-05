import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n/config";
import { SITE_NAME, SITE_URL } from "./site";

const OG_LOCALE: Record<Locale, string> = {
  en: "en_US",
  de: "de_DE",
  ru: "ru_RU",
};

type BuildSocialMetadataInput = {
  title: string;
  description: string;
  path: string;
  locale: Locale;
  image: {
    path: string;
    alt: string;
  };
};

export function buildSocialMetadata({
  title,
  description,
  path,
  locale,
  image,
}: BuildSocialMetadataInput): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
      locale: OG_LOCALE[locale],
      images: [
        {
          url: image.path,
          width: 1200,
          height: 630,
          alt: image.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image.path],
    },
  };
}
