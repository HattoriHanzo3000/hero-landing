import {
  CITIZENSHIP_SCREENSHOT_IDS,
  getCitizenshipScreenshotSrc,
} from "@/lib/apps/citizenship-screenshots";
import { getLocale } from "@/lib/i18n/get-locale";
import { ScreenshotGalleryClient } from "@/app/hero-b2-beruf/components/screenshot-gallery-client";

type ScreenshotGalleryProps = {
  heading: string;
  expandHint: string;
  closeLabel: string;
  alts: readonly string[];
};

export async function ScreenshotGallery({
  heading,
  expandHint,
  closeLabel,
  alts,
}: ScreenshotGalleryProps) {
  const locale = await getLocale();

  const screenshots = CITIZENSHIP_SCREENSHOT_IDS.map((id, index) => ({
    src: getCitizenshipScreenshotSrc(id, locale),
    alt: alts[index] ?? `Screenshot ${id}`,
  }));

  return (
    <ScreenshotGalleryClient
      heading={heading}
      expandHint={expandHint}
      closeLabel={closeLabel}
      screenshots={screenshots}
    />
  );
}
