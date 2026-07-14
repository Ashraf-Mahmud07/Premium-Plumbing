import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // SEO continuity: one canonical form per URL — no trailing slashes.
  trailingSlash: false,
  images: {
    remotePatterns: [
      // Unsplash URLs are design-time placeholders — swap via src/data/images.ts.
      { protocol: "https", hostname: "images.unsplash.com" },
      // Real photo hosted on the current live site (Erik & family cutout).
      { protocol: "https", hostname: "oxplumbing.com" },
    ],
  },
};

export default nextConfig;
