import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbo: {
      rules: {},
    },
  },
  async rewrites() {
    return [];
  },
};

export default nextConfig;
