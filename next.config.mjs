/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  turbopack: {
    root: "/home/node/.openclaw/workspace-coding/iatab",
  },
};

export default nextConfig;
