import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="mx-auto w-full max-w-6xl px-6 py-8 md:px-10 md:py-10">
      <Link
        href="/"
        className="text-sm font-semibold tracking-[0.2em] text-neutral-900 uppercase transition-opacity hover:opacity-60"
        aria-label="GIZATECH home"
      >
        GIZATECH
      </Link>
    </header>
  );
}
