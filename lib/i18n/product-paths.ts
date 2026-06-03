import type { ProductKey } from "./dictionaries/types";

export const PRODUCT_BASE_PATH: Record<ProductKey, string> = {
  b2Beruf: "/hero-b2-beruf",
  citizenship: "/hero-einbuergerungstest",
};

export function productNavLinks(
  product: ProductKey,
  labels: {
    support: string;
    faq: string;
    impressum: string;
    privacy: string;
    terms: string;
  },
) {
  const base = PRODUCT_BASE_PATH[product];
  return [
    { href: `${base}/support`, label: labels.support },
    { href: `${base}/faq`, label: labels.faq },
    { href: `${base}/impressum`, label: labels.impressum },
    { href: `${base}/privacy-policy`, label: labels.privacy },
    { href: `${base}/terms-of-use`, label: labels.terms },
  ] as const;
}
