import { Sparkles } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-8 md:px-10 md:py-10">
      <a
        href="#"
        className="group flex items-center gap-2.5 text-neutral-900 transition-opacity hover:opacity-70"
        aria-label="Hero home"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-white shadow-sm">
          <Sparkles className="h-4 w-4 text-neutral-700" strokeWidth={1.5} />
        </span>
        <span className="text-sm font-semibold tracking-[0.2em] uppercase">
          Hero
        </span>
      </a>
      <nav className="hidden items-center gap-8 text-sm text-neutral-500 md:flex">
        <a
          href="#apps"
          className="transition-colors hover:text-neutral-900"
        >
          Apps
        </a>
        <a
          href="#contact"
          className="transition-colors hover:text-neutral-900"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
