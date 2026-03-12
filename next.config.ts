import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  turbopack: {
    root: "/home/node/.openclaw/workspace-coding/iatab",
  },
};

export default nextConfig;
