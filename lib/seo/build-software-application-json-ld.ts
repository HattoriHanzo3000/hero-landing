import { APP_NAMES } from "@/lib/apps/app-names";
import type { ProductKey } from "@/lib/i18n/dictionaries/types";
import { PRODUCT_BASE_PATH } from "@/lib/i18n/product-paths";
import { SITE_AUTHOR, SITE_URL } from "./site";

type BuildSoftwareApplicationJsonLdInput = {
  product: ProductKey;
  description: string;
};

export function buildSoftwareApplicationJsonLd({
  product,
  description,
}: BuildSoftwareApplicationJsonLdInput) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: APP_NAMES[product].full,
    applicationCategory: "EducationalApplication",
    operatingSystem: "iOS",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
    },
    description,
    url: `${SITE_URL}${PRODUCT_BASE_PATH[product]}`,
    author: {
      "@type": "Person",
      name: SITE_AUTHOR.name,
      url: SITE_AUTHOR.url,
    },
  };
}
