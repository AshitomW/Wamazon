import type { NextConfig } from "next";

const nextConfig:NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Use a wildcard to allow any hostname
      },
    ],
  },
};

export default nextConfig;
