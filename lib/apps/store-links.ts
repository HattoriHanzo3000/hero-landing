import type { HomeAppId } from "./home-apps";

/** Hero: B2 Beruf Vokabeln — App Store Apple ID */
export const B2_BERUF_APPLE_ID = "6755700752";

export const B2_BERUF_APP_STORE_URL = `https://apps.apple.com/app/id${B2_BERUF_APPLE_ID}`;

/**
 * App Store product URLs. Override in `.env.local` if needed:
 * `NEXT_PUBLIC_B2_BERUF_APP_STORE_URL=…`
 */
const APP_STORE_URL_OVERRIDES: Record<HomeAppId, string | undefined> = {
  citizenship: process.env.NEXT_PUBLIC_CITIZENSHIP_APP_STORE_URL,
  b2Beruf: process.env.NEXT_PUBLIC_B2_BERUF_APP_STORE_URL,
};

export function getAppStoreUrl(appId: HomeAppId): string | null {
  if (appId === "b2Beruf") {
    const override = APP_STORE_URL_OVERRIDES.b2Beruf?.trim();
    if (override?.startsWith("http")) {
      return override;
    }
    return B2_BERUF_APP_STORE_URL;
  }

  const url = APP_STORE_URL_OVERRIDES[appId]?.trim();
  return url && url.startsWith("http") ? url : null;
}
