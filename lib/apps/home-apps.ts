import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries/types";

export const HOME_APP_IDS = ["citizenship", "b2Beruf"] as const;

export type HomeAppId = (typeof HOME_APP_IDS)[number];

export type HomeAppConfig = {
  id: HomeAppId;
  href: string;
  iconSrc: string;
};

/** App Store icons used on product pages and download panels */
export const HOME_APPS: readonly HomeAppConfig[] = [
  {
    id: "citizenship",
    href: "/hero-einbuergerungstest",
    iconSrc: "/apps/einbuergerungstest/icon.png",
  },
  {
    id: "b2Beruf",
    href: "/hero-b2-beruf",
    iconSrc: "/apps/b2-beruf/icon.png",
  },
] as const;

const HOME_APP_PRESENTATION = [
  {
    id: "citizenship" as const,
    mascotSrc: "/images/hero-eagle-passport.png",
    bgColor: "bg-[#e9dcc1]",
  },
  {
    id: "b2Beruf" as const,
    mascotSrc: "/images/hero-eagle-book.png",
    bgColor: "bg-[#d1e0d7]",
  },
] as const;

const MASCOT_ALTS: Record<HomeAppId, Record<Locale, string>> = {
  citizenship: {
    en: "Hero Eagle holding German passport",
    de: "Hero-Adler mit deutschem Reisepass",
    ru: "Орёл Hero с немецким паспортом",
  },
  b2Beruf: {
    en: "Hero Eagle holding vocabulary book",
    de: "Hero-Adler mit Vokabelbuch",
    ru: "Орёл Hero со словарём",
  },
};

export function getHomeAppIntros(dict: Dictionary, locale: Locale) {
  return HOME_APP_PRESENTATION.map((presentation) => {
    const config = HOME_APPS.find((app) => app.id === presentation.id)!;
    const copy = dict.home.apps[presentation.id];
    return {
      href: config.href,
      mascotSrc: presentation.mascotSrc,
      mascotAlt: MASCOT_ALTS[presentation.id][locale],
      bgColor: presentation.bgColor,
      goalTitle: copy.goalTitle,
      appName: copy.appName,
      description: copy.description,
    };
  });
}
