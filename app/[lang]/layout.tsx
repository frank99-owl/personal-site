import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
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
import { pageMetadata } from "@/lib/metadata";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
    metadataBase: new URL(SITE.url),
    ...pageMetadata({
      lang: lang as Locale,
      path: "",
      title: dict.meta.title,
      description: dict.meta.description,
    }),
    robots: {
      index: true,
      follow: true,
    },
    icons: {
      icon: { url: "/icon.jpg", sizes: "64x64", type: "image/jpeg" },
      apple: { url: "/apple-icon.jpg", sizes: "180x180", type: "image/jpeg" },
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
      className={`${inter.variable} ${playfair.variable} antialiased`}
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
