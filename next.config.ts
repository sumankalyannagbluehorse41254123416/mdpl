import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wip.tezcommerce.com",
        port: "3304",
      },
    ],
  },
};

export default nextConfig;
