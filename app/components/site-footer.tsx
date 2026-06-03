export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="mx-auto w-full max-w-6xl border-t border-neutral-200/80 px-6 py-12 md:px-10 md:py-16"
    >
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-medium tracking-[0.2em] text-neutral-900 uppercase">
            Hero
          </p>
          <p className="mt-2 text-sm text-neutral-400">
            Thoughtful tools for life in Germany.
          </p>
        </div>
        <p className="text-xs text-neutral-400">
          © {year} Hero. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
