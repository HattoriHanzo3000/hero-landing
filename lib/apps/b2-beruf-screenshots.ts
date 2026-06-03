import type { Locale } from "@/lib/i18n/config";

export const B2_SCREENSHOT_IDS = ["01", "02", "03", "04", "05", "06"] as const;

export type B2ScreenshotId = (typeof B2_SCREENSHOT_IDS)[number];

const B2_SCREENSHOTS_BASE = "/apps/b2-beruf/screenshots";

/** Source image dimensions (500×1125 exports). Display width in the gallery is 260px. */
export const B2_SCREENSHOT_WIDTH = 500;
export const B2_SCREENSHOT_HEIGHT = 1125;

export function getB2ScreenshotSrc(
  id: B2ScreenshotId,
  locale: Locale,
): string {
  return `${B2_SCREENSHOTS_BASE}/${locale}/${id}.webp`;
}
