/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["localhost"],
  },
  env: {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  },
  experimental: {
    serverComponentsExternalPackages: ["openai"],
  },
};

module.exports = nextConfig;
