import {
  CITIZENSHIP_SCREENSHOT_IDS,
  getCitizenshipScreenshotSrc,
} from "@/lib/apps/citizenship-screenshots";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { getLocale } from "@/lib/i18n/get-locale";
import { ScreenshotGalleryClient } from "@/app/hero-b2-beruf/components/screenshot-gallery-client";

type ScreenshotGalleryProps = {
  heading: string;
  closeLabel: string;
  alts: readonly string[];
};

export async function ScreenshotGallery({
  heading,
  closeLabel,
  alts,
}: ScreenshotGalleryProps) {
  const locale = await getLocale();
  const dict = getDictionary(locale);

  const screenshots = CITIZENSHIP_SCREENSHOT_IDS.map((id, index) => ({
    src: getCitizenshipScreenshotSrc(id, locale),
    alt: alts[index] ?? `Screenshot ${id}`,
  }));

  return (
    <ScreenshotGalleryClient
      heading={heading}
      closeLabel={closeLabel}
      prevLabel={dict.common.screenshotPrevLabel}
      nextLabel={dict.common.screenshotNextLabel}
      screenshots={screenshots}
    />
  );
}
