import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // `/` is negotiated by Accept-Language in proxy.ts.

  // Local images only — no remotePatterns, so /_next/image can't be used
  // as an open proxy for arbitrary remote images.
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 86_400,
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
