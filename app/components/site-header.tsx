import Link from "next/link";
import { LanguageSwitcher } from "@/app/components/language-switcher";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { getLocale } from "@/lib/i18n/get-locale";

export async function SiteHeader() {
  const locale = await getLocale();
  const dict = getDictionary(locale);

  return (
    <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-8 md:px-10 md:py-10">
      <div className="flex items-center gap-8 md:gap-12">
        <Link
          href="/"
          className="text-sm font-semibold tracking-[0.2em] text-neutral-900 uppercase transition-opacity hover:opacity-60"
          aria-label="GIZATECH home"
        >
          GIZATECH
        </Link>

        <nav
          className="hidden items-center gap-6 md:flex"
          aria-label={dict.common.headerNavAria}
        >
          <Link
            href="/hero-einbuergerungstest"
            className="text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-900"
          >
            Einbürgerung
          </Link>
          <Link
            href="/hero-b2-beruf"
            className="text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-900"
          >
            B2 Beruf
          </Link>
        </nav>
      </div>

      <div className="flex items-center">
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
