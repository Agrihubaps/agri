import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "lucide-react": path.resolve(process.cwd(), "app/icons.tsx"), // или lib/icon-shim.tsx
    };
    return config;
  },
};

export default nextConfig;
