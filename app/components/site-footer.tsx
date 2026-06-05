import Link from "next/link";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { getLocale } from "@/lib/i18n/get-locale";
import type { ProductKey } from "@/lib/i18n/dictionaries/types";
import {
  footerSupportHref,
  homeFooterLegalLinks,
  productFooterLegalLinks,
} from "@/lib/i18n/product-paths";

type SiteFooterProps = {
  /** Omit on the home page — shows Impressum only. Pass on product pages for full legal links. */
  product?: ProductKey;
};

export async function SiteFooter({ product }: SiteFooterProps) {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  const legalLinks = product
    ? productFooterLegalLinks(product, dict.common.nav)
    : homeFooterLegalLinks(dict.common.nav);
  const supportProduct = product ?? "citizenship";
  const supportLabel = dict[supportProduct].landing.supportLink;

  return (
    <footer className="mt-auto w-full border-t border-neutral-200/60 bg-[#f7f7f5] py-12 md:py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 text-sm text-neutral-500 md:px-10">
        <div className="flex justify-center border-b border-neutral-200/50 pb-10 sm:justify-start">
          <Link
            href={footerSupportHref(product)}
            className="text-base font-medium transition-colors hover:text-neutral-900"
          >
            {supportLabel}
          </Link>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            {dict.common.footerCopyright}
          </div>

          <nav
            className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-xs"
            aria-label={dict.common.legalEyebrow}
          >
            {legalLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="transition-colors hover:text-neutral-900"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
