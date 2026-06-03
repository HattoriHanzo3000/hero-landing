export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="mx-auto w-full max-w-6xl border-t border-neutral-200/80 px-6 py-10 md:px-10 md:py-12"
    >
      <p className="text-xs text-neutral-400">© {year} Hero</p>
    </footer>
  );
}
