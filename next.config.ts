import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'tailwindui.com',
      "via.placeholder.com",
      "assets.ajio.com",
      "www.ajio.com"
    ],
    unoptimized: true, // Disable image optimization
  },
  output: "export", // Enable static export
  reactStrictMode: true,
};

export default nextConfig;
