import { ContentPage } from "../components/content-page";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { getLocale } from "@/lib/i18n/get-locale";

export default async function TermsOfUsePage() {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  const t = dict.b2Beruf.terms;

  return (
    <ContentPage eyebrow={dict.common.legalEyebrow} title={t.title}>
      <p className="text-neutral-500">{t.intro}</p>
      <section className="space-y-4 rounded-2xl border border-dashed border-neutral-200 bg-white/60 px-6 py-8 text-neutral-400">
        <p className="text-xs font-medium tracking-[0.2em] uppercase">
          {dict.common.placeholderSections}
        </p>
        <ul className="list-inside list-disc space-y-2 text-sm">
          {t.sections.map((section) => (
            <li key={section}>{section}</li>
          ))}
        </ul>
      </section>
    </ContentPage>
  );
}
