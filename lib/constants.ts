/**
 * Site-wide constants. Centralised so copy, URLs, and SEO defaults
 * stay consistent across the codebase.
 */

export const SITE = {
  name: "Frank",
  url: "https://frank-owl.vercel.app",
  email: "frank_code@126.com",
  github: "https://github.com/frank99-owl",
  year: 2026,
} as const;

export const SEO = {
  title: `${SITE.name} — Personal Site`,
  description:
    "Personal website of Frank: projects, writings, and ideas. Built with Next.js + Tailwind.",
  ogImage: "/avatar.jpg",
  twitterHandle: "@frank_owl",
} as const;
