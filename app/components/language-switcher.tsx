"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { setLocale } from "@/app/actions/set-locale";
import type { Locale } from "@/lib/i18n/config";

type LanguageSwitcherProps = {
  locale: Locale;
  label: string;
  enLabel: string;
  deLabel: string;
};

export function LanguageSwitcher({
  locale,
  label,
  enLabel,
  deLabel,
}: LanguageSwitcherProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

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
      <button
        type="button"
        onClick={() => switchTo("en")}
        disabled={isPending}
        aria-current={locale === "en" ? "true" : undefined}
        className={locale === "en" ? activeClass : inactiveClass}
      >
        {enLabel}
      </button>
      <span className="text-neutral-300" aria-hidden>
        |
      </span>
      <button
        type="button"
        onClick={() => switchTo("de")}
        disabled={isPending}
        aria-current={locale === "de" ? "true" : undefined}
        className={locale === "de" ? activeClass : inactiveClass}
      >
        {deLabel}
      </button>
    </div>
  );
}
