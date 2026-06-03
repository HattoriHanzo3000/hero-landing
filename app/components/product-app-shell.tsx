import Link from "next/link";
import type { ReactNode } from "react";
import { SiteFooter } from "@/app/components/site-footer";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { getLocale } from "@/lib/i18n/get-locale";
import type { ProductKey } from "@/lib/i18n/dictionaries/types";
import { productNavLinks, PRODUCT_BASE_PATH } from "@/lib/i18n/product-paths";

type ProductAppShellProps = {
  product: ProductKey;
  children: ReactNode;
  narrow?: boolean;
};

export async function ProductAppShell({
  product,
  children,
  narrow = false,
}: ProductAppShellProps) {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  const productDict = dict[product];
  const basePath = PRODUCT_BASE_PATH[product];
  const footerLinks = productNavLinks(product, dict.common.nav);

  return (
    <div className="flex w-full flex-1 flex-col bg-[#f7f7f5] font-sans text-neutral-900">
      <header className="mx-auto w-full max-w-6xl px-6 py-8 md:px-10 md:py-10">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="text-sm font-semibold tracking-[0.2em] text-neutral-900 uppercase transition-opacity hover:opacity-60"
              aria-label="GIZATECH home"
            >
              GIZATECH
            </Link>
            <span className="hidden h-3 w-px bg-neutral-200 sm:block" aria-hidden />
            <Link
              href={basePath}
              className="text-sm font-semibold tracking-[0.15em] text-neutral-900 uppercase transition-opacity hover:opacity-60"
            >
              {productDict.shell.productNav}
            </Link>
          </div>
          <nav
            className="flex flex-wrap gap-x-5 gap-y-2 text-xs tracking-wide text-neutral-400"
            aria-label={dict.common.headerNavAria}
          >
            {footerLinks.map(({ href, label }) => (
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
        className={`mx-auto w-full px-6 pb-20 md:px-10 md:pb-28 ${
          narrow ? "max-w-2xl" : "max-w-6xl"
        }`}
      >
        {children}
      </main>

      <SiteFooter />
    </div>
  );
}
