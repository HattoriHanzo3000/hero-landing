import { ContentPage } from "../components/content-page";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { getLocale } from "@/lib/i18n/get-locale";

const SUPPORT_EMAIL = "support@gizatech.de";

export default async function FaqPage() {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  const t = dict.citizenship.faq;

  return (
    <ContentPage eyebrow={dict.common.helpEyebrow} title={t.title}>
      <div className="flex flex-col items-center justify-center rounded-2xl border border-neutral-200/80 bg-white px-8 py-16 text-center shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
        <p className="text-xs font-medium tracking-[0.25em] text-neutral-400 uppercase">
          {dict.common.comingSoon}
        </p>
        <p className="mt-4 text-2xl font-light tracking-tight text-neutral-900">
          {t.heading}
        </p>
        <p className="mt-4 max-w-sm text-sm leading-relaxed text-neutral-500">
          {t.bodyBefore}
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="text-neutral-700 underline decoration-neutral-300 underline-offset-4 transition-colors hover:text-neutral-900"
          >
            {SUPPORT_EMAIL}
          </a>
          {t.bodyAfter}
        </p>
      </div>
    </ContentPage>
  );
}
