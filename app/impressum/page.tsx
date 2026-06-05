import type { Metadata } from "next";
import { ImpressumBody } from "@/app/components/impressum-body";
import { SiteFooter } from "@/app/components/site-footer";
import { SiteHeader } from "@/app/components/site-header";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { getLocale } from "@/lib/i18n/get-locale";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const dict = getDictionary(locale);

  return {
    title: dict.common.impressum.title,
  };
}

export default async function ImpressumPage() {
  const locale = await getLocale();
  const dict = getDictionary(locale);

  return (
    <div className="flex w-full flex-1 flex-col bg-[#f7f7f5] font-sans text-neutral-900">
      <SiteHeader />

      <main className="mx-auto w-full max-w-2xl px-6 pb-20 md:px-10 md:pb-28">
        <article>
          <p className="text-xs font-medium tracking-[0.25em] text-neutral-400 uppercase">
            {dict.common.legalEyebrow}
          </p>
          <h1 className="mt-4 text-3xl font-light tracking-tight text-neutral-900 md:text-4xl">
            {dict.common.impressum.title}
          </h1>
          <div className="mt-10 space-y-6 text-sm leading-relaxed text-neutral-600 md:text-[0.95rem]">
            <ImpressumBody impressum={dict.common.impressum} />
          </div>
        </article>
      </main>

      <SiteFooter />
    </div>
  );
}
