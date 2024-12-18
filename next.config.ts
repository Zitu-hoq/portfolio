import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    loader: 'custom',
    loaderFile: './public/images/loader.js',
  },
};

export default nextConfig;
