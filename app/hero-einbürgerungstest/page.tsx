import { Apple, BookOpen } from "lucide-react";
import Link from "next/link";
import { AppShell } from "./components/app-shell";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { getLocale } from "@/lib/i18n/get-locale";

export default async function HeroEinbuergerungstestPage() {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  const t = dict.citizenship.landing;
  const nav = dict.common.nav;

  return (
    <AppShell>
      <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-20">
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

          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-neutral-900 px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
              aria-label={t.downloadAria}
            >
              <Apple className="h-4 w-4" strokeWidth={1.5} />
              {t.downloadCta}
            </a>
            <Link
              href="/hero-einbürgerungstest/support"
              className="text-center text-sm tracking-wide text-neutral-400 transition-colors hover:text-neutral-700 sm:text-left"
            >
              {t.supportLink}
            </Link>
          </div>
        </div>

        <div className="rounded-2xl border border-neutral-200/80 bg-white p-10 shadow-[0_1px_2px_rgba(0,0,0,0.04)] md:p-12">
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-neutral-800 shadow-sm">
            <BookOpen className="h-6 w-6 text-white" strokeWidth={1.5} />
          </span>
          <p className="mt-8 text-xs font-medium tracking-[0.15em] text-neutral-400 uppercase">
            {t.cardEyebrow}
          </p>
          <p className="mt-3 text-lg leading-relaxed text-neutral-600">
            {t.cardBody}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/hero-einbürgerungstest/faq"
              className="rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-xs font-medium tracking-wide text-neutral-500 transition-colors hover:border-neutral-300 hover:text-neutral-700"
            >
              {nav.faq}
            </Link>
            <Link
              href="/hero-einbürgerungstest/privacy-policy"
              className="rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-xs font-medium tracking-wide text-neutral-500 transition-colors hover:border-neutral-300 hover:text-neutral-700"
            >
              {nav.privacy}
            </Link>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
