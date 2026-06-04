import type { Locale } from "@/lib/i18n/config";

export const CITIZENSHIP_SCREENSHOT_IDS = [
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
] as const;

export type CitizenshipScreenshotId =
  (typeof CITIZENSHIP_SCREENSHOT_IDS)[number];

const CITIZENSHIP_SCREENSHOTS_BASE =
  "/apps/einbuergerungstest/screenshots";

/** Source image dimensions (500×1125 exports). Display width in the gallery is 260px. */
export const CITIZENSHIP_SCREENSHOT_WIDTH = 500;
export const CITIZENSHIP_SCREENSHOT_HEIGHT = 1125;

/** Screenshot folders exist for en and de only; ru uses en assets. */
function citizenshipScreenshotLocale(locale: Locale): "en" | "de" {
  return locale === "de" ? "de" : "en";
}

export function getCitizenshipScreenshotSrc(
  id: CitizenshipScreenshotId,
  locale: Locale,
): string {
  return `${CITIZENSHIP_SCREENSHOTS_BASE}/${citizenshipScreenshotLocale(locale)}/${id}.webp`;
}
