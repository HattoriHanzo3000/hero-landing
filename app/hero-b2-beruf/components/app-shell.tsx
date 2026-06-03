import Link from "next/link";
import type { ReactNode } from "react";

const FOOTER_LINKS = [
  { href: "/hero-b2-beruf/support", label: "Support" },
  { href: "/hero-b2-beruf/faq", label: "FAQ" },
  { href: "/hero-b2-beruf/impressum", label: "Impressum" },
  { href: "/hero-b2-beruf/privacy-policy", label: "Privacy" },
  { href: "/hero-b2-beruf/terms-of-use", label: "Terms" },
] as const;

type AppShellProps = {
  children: ReactNode;
  narrow?: boolean;
};

export function AppShell({ children, narrow = false }: AppShellProps) {
  const year = new Date().getFullYear();

  return (
    <div className="flex min-h-screen flex-col bg-[#f7f7f5] font-sans text-neutral-900">
      <header className="mx-auto w-full max-w-6xl px-6 py-8 md:px-10 md:py-10">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="text-xs font-medium tracking-[0.2em] text-neutral-400 uppercase transition-colors hover:text-neutral-700"
            >
              Hero Studio
            </Link>
            <span className="hidden h-3 w-px bg-neutral-200 sm:block" aria-hidden />
            <Link
              href="/hero-b2-beruf"
              className="text-sm font-semibold tracking-[0.15em] text-neutral-900 uppercase transition-opacity hover:opacity-60"
            >
              B2 Beruf
            </Link>
          </div>
          <nav
            className="flex flex-wrap gap-x-5 gap-y-2 text-xs tracking-wide text-neutral-400"
            aria-label="App pages"
          >
            {FOOTER_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="transition-colors hover:text-neutral-700"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main
        className={`mx-auto w-full flex-1 px-6 pb-20 md:px-10 md:pb-28 ${
          narrow ? "max-w-2xl" : "max-w-6xl"
        }`}
      >
        {children}
      </main>

      <footer className="mx-auto w-full max-w-6xl border-t border-neutral-200/80 px-6 py-10 md:px-10 md:py-12">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-neutral-400">© {year} Giza Tech · Hero</p>
          <nav
            className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-neutral-400"
            aria-label="Legal and support"
          >
            {FOOTER_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="transition-colors hover:text-neutral-600"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </footer>
    </div>
  );
}
