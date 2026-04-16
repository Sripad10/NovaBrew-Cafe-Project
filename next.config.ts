import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/novabrew-coffee-taste-profile-quiz",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
