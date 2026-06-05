import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      // Allow indexing of all public pages
      allow: "/",
      // If you ever add an admin panel or private routes, block them here:
      // disallow: "/admin/",
    },
    // Point search engines to your sitemap
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
