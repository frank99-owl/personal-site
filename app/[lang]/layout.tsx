import type { Metadata } from "next";
import { Inter, Noto_Sans_SC, Playfair_Display } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";

import {
  getDictionary,
  hasLocale,
  locales,
  type Locale,
} from "@/lib/dictionaries";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SITE } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const notoSC = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-noto-sc",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-playfair",
  display: "swap",
});

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = await getDictionary(lang as Locale);

  return {
    title: {
      default: dict.meta.title,
      template: `%s — ${SITE.name}`,
    },
    description: dict.meta.description,
    metadataBase: new URL(SITE.url),
    alternates: {
      canonical: `/${lang}`,
      languages: {
        en: "/en",
        zh: "/zh",
      },
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      url: `/${lang}`,
      siteName: SITE.name,
      locale: lang === "zh" ? "zh_CN" : "en_US",
      type: "website",
      images: [
        {
          url: "/avatar.jpg",
          width: 1200,
          height: 630,
          alt: dict.meta.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
      images: ["/avatar.jpg"],
    },
    robots: {
      index: true,
      follow: true,
    },
    icons: {
      icon: "/avatar.jpg",
      apple: "/avatar.jpg",
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang as Locale);

  return (
    <html
      lang={lang}
      className={`${inter.variable} ${notoSC.variable} ${playfair.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-cream text-ink">
        <Navbar lang={lang as Locale} dict={dict.nav} />
        <main className="flex-1">{children}</main>
        <Footer
          lang={lang as Locale}
          dict={dict.footer}
          navDict={dict.nav}
        />
      </body>
    </html>
  );
}
