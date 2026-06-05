"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const APP_TABS = [
  { id: "citizenship", href: "/hero-einbuergerungstest", label: "Einbürgerung" },
  { id: "b2Beruf", href: "/hero-b2-beruf", label: "B2 Beruf" },
] as const;

type AppNavTabsProps = {
  ariaLabel: string;
};

export function AppNavTabs({ ariaLabel }: AppNavTabsProps) {
  const pathname = usePathname();

  return (
    <nav
      className="flex items-center gap-4 sm:gap-6"
      aria-label={ariaLabel}
    >
      {APP_TABS.map(({ id, href, label }) => {
        const isActive = pathname === href || pathname.startsWith(`${href}/`);
        return (
          <Link
            key={id}
            href={href}
            aria-current={isActive ? "page" : undefined}
            className={
              isActive
                ? "text-xs font-medium text-neutral-900 sm:text-sm"
                : "text-xs font-medium text-neutral-500 transition-colors hover:text-neutral-900 sm:text-sm"
            }
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
