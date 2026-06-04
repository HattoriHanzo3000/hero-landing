"use client";

import { Fragment } from "react";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { setLocale } from "@/app/actions/set-locale";
import { LOCALES, type Locale } from "@/lib/i18n/config";

type LanguageSwitcherProps = {
  locale: Locale;
  label: string;
  enLabel: string;
  deLabel: string;
  ruLabel: string;
};

export function LanguageSwitcher({
  locale,
  label,
  enLabel,
  deLabel,
  ruLabel,
}: LanguageSwitcherProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const localeLabels: Record<Locale, string> = { en: enLabel, de: deLabel, ru: ruLabel };

  function switchTo(next: Locale) {
    if (next === locale || isPending) {
      return;
    }

    startTransition(async () => {
      await setLocale(next);
      router.refresh();
    });
  }

  const activeClass = "font-medium text-neutral-900";
  const inactiveClass =
    "text-neutral-400 transition-colors hover:text-neutral-700 disabled:opacity-50";

  return (
    <div
      role="group"
      aria-label={label}
      className="inline-flex items-center gap-2 text-xs tracking-wide"
    >
      {LOCALES.map((code, index) => (
        <Fragment key={code}>
          {index > 0 ? (
            <span className="text-neutral-300" aria-hidden>
              |
            </span>
          ) : null}
          <button
            type="button"
            onClick={() => switchTo(code)}
            disabled={isPending}
            aria-current={locale === code ? "true" : undefined}
            className={locale === code ? activeClass : inactiveClass}
          >
            {localeLabels[code]}
          </button>
        </Fragment>
      ))}
    </div>
  );
}
