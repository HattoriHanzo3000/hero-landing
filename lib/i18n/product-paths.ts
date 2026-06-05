import type { ProductKey } from "./dictionaries/types";

export const PRODUCT_BASE_PATH: Record<ProductKey, string> = {
  b2Beruf: "/hero-b2-beruf",
  citizenship: "/hero-einbuergerungstest",
};

/** Site-wide Impressum (home page footer). Product pages use their own `/impressum` under each app. */
export const SITE_IMPRESSUM_PATH = "/impressum";

export function homeFooterLegalLinks(labels: { impressum: string }) {
  return [{ href: SITE_IMPRESSUM_PATH, label: labels.impressum }] as const;
}

export function footerSupportHref(product?: ProductKey) {
  const key = product ?? "citizenship";
  return `${PRODUCT_BASE_PATH[key]}/support`;
}

export function productFooterLegalLinks(
  product: ProductKey,
  labels: {
    impressum: string;
    privacy: string;
    terms: string;
  },
) {
  const base = PRODUCT_BASE_PATH[product];
  return [
    { href: `${base}/impressum`, label: labels.impressum },
    { href: `${base}/privacy-policy`, label: labels.privacy },
    { href: `${base}/terms-of-use`, label: labels.terms },
  ] as const;
}
