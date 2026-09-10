import { MetadataRoute } from "next";
import { SHOP_CONFIG } from "@/config/shop";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SHOP_CONFIG.meta.siteUrl;

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/bouquets`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
