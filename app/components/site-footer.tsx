import { LanguageSwitcher } from "@/app/components/language-switcher";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { getLocale } from "@/lib/i18n/get-locale";

export async function SiteFooter() {
  const locale = await getLocale();
  const dict = getDictionary(locale);

  return (
    <footer className="mt-auto w-full border-t border-neutral-200/60 bg-[#f7f7f5] py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 text-sm text-neutral-500 md:flex-row md:px-10">
        <div>{dict.common.footerCopyright}</div>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-8">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <a
              href="mailto:info@gizatech.de"
              className="transition-colors hover:text-neutral-900"
            >
              info@gizatech.de
            </a>
            <a
              href="mailto:support@gizatech.de"
              className="transition-colors hover:text-neutral-900"
            >
              support@gizatech.de
            </a>
          </div>
          <LanguageSwitcher
            locale={locale}
            label={dict.language.switcherLabel}
            enLabel="EN"
            deLabel="DE"
          />
        </div>
      </div>
    </footer>
  );
}
