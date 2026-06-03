import { Mail } from "lucide-react";
import { ContentPage } from "../components/content-page";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { getLocale } from "@/lib/i18n/get-locale";

const SUPPORT_EMAIL = "support@gizatech.de";

export default async function SupportPage() {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  const t = dict.citizenship.support;

  return (
    <ContentPage eyebrow={dict.common.nav.support} title={t.title}>
      <p>{t.intro}</p>

      <a
        href={`mailto:${SUPPORT_EMAIL}`}
        className="group mt-4 inline-flex items-center gap-3 rounded-2xl border border-neutral-200/80 bg-white px-6 py-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-all hover:border-neutral-300/80 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-900 transition-colors group-hover:bg-neutral-800">
          <Mail className="h-4 w-4 text-white" strokeWidth={1.5} />
        </span>
        <span>
          <span className="block text-xs tracking-wide text-neutral-400 uppercase">
            {dict.common.emailLabel}
          </span>
          <span className="mt-0.5 block text-base font-medium text-neutral-900">
            {SUPPORT_EMAIL}
          </span>
        </span>
      </a>

      <p className="text-neutral-500">{t.deviceHint}</p>
    </ContentPage>
  );
}
