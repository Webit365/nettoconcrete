import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,
  // ESLint config is intentionally omitted from the repo; skip lint during the
  // Vercel build so a missing plugin can never block a deploy.
  eslint: { ignoreDuringBuilds: true },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    // The old WordPress site was a single page with in-page anchors
    // (#res, #com, #ag, #work, #contact). Map those to the new routes so any
    // shared/bookmarked links keep working.
    return [
      { source: "/home", destination: "/", permanent: true },
      { source: "/services", destination: "/residential", permanent: true },
    ];
  },
  async headers() {
    const securityHeaders = [
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "X-Frame-Options", value: "SAMEORIGIN" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      {
        key: "Permissions-Policy",
        value: "camera=(), microphone=(), geolocation=()",
      },
      {
        key: "Strict-Transport-Security",
        value: "max-age=63072000; includeSubDomains; preload",
      },
    ];
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
