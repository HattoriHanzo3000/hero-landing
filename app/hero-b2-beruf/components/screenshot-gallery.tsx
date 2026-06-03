import {
  B2_SCREENSHOT_IDS,
  getB2ScreenshotSrc,
} from "@/lib/apps/b2-beruf-screenshots";
import { getLocale } from "@/lib/i18n/get-locale";
import { ScreenshotGalleryClient } from "./screenshot-gallery-client";

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

  const screenshots = B2_SCREENSHOT_IDS.map((id, index) => ({
    src: getB2ScreenshotSrc(id, locale),
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
