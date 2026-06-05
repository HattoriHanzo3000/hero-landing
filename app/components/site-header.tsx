import Link from "next/link";
import { AppNavTabs } from "@/app/components/app-nav-tabs";
import { LanguageSwitcher } from "@/app/components/language-switcher";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { getLocale } from "@/lib/i18n/get-locale";

export async function SiteHeader() {
  const locale = await getLocale();
  const dict = getDictionary(locale);

  return (
    <header className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-8 md:gap-6 md:px-10 md:py-10">
      <div className="flex min-w-0 flex-wrap items-center gap-4 sm:gap-6 md:gap-8">
        <Link
          href="/"
          className="shrink-0 text-sm font-semibold tracking-[0.2em] text-neutral-900 uppercase transition-opacity hover:opacity-60"
          aria-label="GIZATECH home"
        >
          GIZATECH
        </Link>

        <span className="h-3 w-px shrink-0 bg-neutral-200" aria-hidden />

        <AppNavTabs ariaLabel={dict.common.headerNavAria} />
      </div>

      <div className="flex shrink-0 items-center">
        <LanguageSwitcher
          locale={locale}
          label={dict.language.switcherLabel}
          enLabel="EN"
          deLabel="DE"
          ruLabel="RU"
        />
      </div>
    </header>
  );
}
