import type { MetadataRoute } from "next";
import { locales } from "@/lib/locale";
import { SITE } from "@/lib/constants";

const routes = ["", "/projects", "/about"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.flatMap((route) =>
    locales.map((lang) => ({
      url: `${SITE.url}/${lang}${route}`,
      lastModified: new Date(),
      changeFrequency: route === "" ? "weekly" : "monthly",
      priority: route === "" ? 1 : 0.8,
    }))
  );
}
