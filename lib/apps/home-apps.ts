import type { Dictionary } from "@/lib/i18n/dictionaries/types";

export const HOME_APP_IDS = ["citizenship", "b2Beruf"] as const;

export type HomeAppId = (typeof HOME_APP_IDS)[number];

export type HomeAppConfig = {
  id: HomeAppId;
  href: string;
  /** Place 1024×1024 App Store icon at this path under `public/` */
  iconSrc: string;
};

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

export function getHomeApps(dict: Dictionary) {
  return HOME_APPS.map((app) => {
    const copy = dict.home.apps[app.id];
    return {
      ...app,
      ...copy,
      iconAlt: `${copy.title} ${copy.titleAccent}`,
    };
  });
}
