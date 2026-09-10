import { MetadataRoute } from "next";
import { SHOP_CONFIG } from "@/config/shop";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SHOP_CONFIG.name} — Haute Botanique & Floral Architecture`,
    short_name: SHOP_CONFIG.name,
    description: SHOP_CONFIG.description,
    start_url: "/",
    display: "standalone",
    background_color: "#FAF7F2",
    theme_color: "#0D1E17",
    icons: [
      {
        src: "/favicon.avif",
        sizes: "any",
        type: "image/avif",
      },
    ],
  };
}
