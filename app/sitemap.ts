import type { MetadataRoute } from "next";
import { PRODUCT_BASE_PATH, SITE_IMPRESSUM_PATH } from "@/lib/i18n/product-paths";
import { SITE_URL } from "@/lib/seo/site";

type SitemapRoute = {
  path: string;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;
  priority: number;
};

const PRODUCT_SUBPAGES = [
  "",
  "/support",
  "/faq",
  "/impressum",
  "/privacy-policy",
  "/terms-of-use",
] as const;

function productRoutes(): SitemapRoute[] {
  return Object.values(PRODUCT_BASE_PATH).flatMap((base) =>
    PRODUCT_SUBPAGES.map((subpage) => ({
      path: `${base}${subpage}`,
      changeFrequency: "yearly" as const,
      priority:
        subpage === ""
          ? 0.8
          : subpage === "/support" || subpage === "/faq"
            ? 0.7
            : 0.5,
    })),
  );
}

const ROUTES: SitemapRoute[] = [
  { path: "", changeFrequency: "monthly", priority: 1 },
  { path: SITE_IMPRESSUM_PATH, changeFrequency: "yearly", priority: 0.5 },
  ...productRoutes(),
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  // Locale is cookie-based, so each URL serves en/de/ru on the same path.
  return ROUTES.map(({ path, changeFrequency, priority }) => ({
    url: path ? `${SITE_URL}${path}` : SITE_URL,
    lastModified,
    changeFrequency,
    priority,
  }));
}
