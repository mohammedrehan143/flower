import { MetadataRoute } from "next";
import { SHOP_CONFIG } from "@/config/shop";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SHOP_CONFIG.meta.siteUrl}/sitemap.xml`,
    host: SHOP_CONFIG.meta.siteUrl,
  };
}
