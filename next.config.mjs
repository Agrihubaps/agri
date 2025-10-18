// next.config.mjs
import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "lucide-react": path.resolve(process.cwd(), "lib/icon-shim.tsx"),
    };
    return config;
  },
};

export default nextConfig;
