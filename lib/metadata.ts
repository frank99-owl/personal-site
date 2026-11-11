import type { Metadata } from "next";
import { SITE } from "./constants";
import { defaultLocale, locales, type Locale } from "./locale";

type PageMeta = {
  lang: Locale;
  // Path after the locale segment: "" for home, "/about", "/projects".
  path: string;
  // Full title as it should appear in the tab and in share cards.
  title: string;
  description: string;
};

// Canonical, hreflang and share-card fields for one page. Each page needs its
// own: a page that inherits the layout's canonical tells search engines it is
// a duplicate of the home page.
export function pageMetadata({ lang, path, title, description }: PageMeta): Metadata {
  const url = `/${lang}${path}`;

  return {
    description,
    alternates: {
      canonical: url,
      languages: {
        ...Object.fromEntries(locales.map((l) => [l, `/${l}${path}`])),
        "x-default": `/${defaultLocale}${path}`,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE.name,
      locale: lang === "zh" ? "zh_CN" : "en_US",
      type: "website",
      images: [{ url: "/og.png", width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og.png"],
    },
  };
}
