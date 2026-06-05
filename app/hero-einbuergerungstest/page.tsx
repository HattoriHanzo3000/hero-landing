import { LandingFaqSection } from "@/app/components/landing-faq-section";
import { AppShell } from "./components/app-shell";
import { DownloadPanel } from "@/app/components/download-panel";
import { ScreenshotGallery } from "./components/screenshot-gallery";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { getLocale } from "@/lib/i18n/get-locale";

export default async function HeroEinbuergerungstestPage() {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  const t = dict.citizenship.landing;

  return (
    <AppShell>
      <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-20">
        <div className="max-w-xl lg:max-w-none">
          <p className="text-xs font-medium tracking-[0.25em] text-neutral-400 uppercase">
            {t.eyebrow}
          </p>
          <h1 className="mt-6 text-4xl leading-[1.1] font-light tracking-tight text-neutral-900 md:text-5xl md:leading-[1.08]">
            {t.title}
            <span className="mt-1 block font-normal text-neutral-500">
              {t.titleAccent}
            </span>
          </h1>
          <p className="mt-8 text-base leading-relaxed text-neutral-500 md:text-lg">
            {t.description}
          </p>

          <ul className="mt-10 space-y-4 border-t border-neutral-200/80 pt-10">
            {t.features.map((feature) => (
              <li
                key={feature}
                className="flex gap-3 text-sm leading-relaxed text-neutral-600"
              >
                <span
                  className="mt-2 h-1 w-1 shrink-0 rounded-full bg-neutral-400"
                  aria-hidden
                />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <DownloadPanel
          product="citizenship"
          iconAlt={dict.citizenship.appName}
          downloadCta={t.downloadCta}
          downloadAria={t.downloadAria}
        />
      </div>

      <ScreenshotGallery
        heading={t.screenshotsHeading}
        closeLabel={t.screenshotCloseLabel}
        alts={t.screenshotAlts}
      />

      <LandingFaqSection product="citizenship" />
    </AppShell>
  );
}
