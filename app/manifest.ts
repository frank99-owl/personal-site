import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: SITE.name,
    description:
      "Personal website of Frank: projects, writings, and ideas.",
    start_url: "/",
    display: "standalone",
    background_color: "#faf9f0",
    theme_color: "#131314",
  };
}
