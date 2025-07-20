/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["framer-motion"],
  experimental: {
    esmExternals: false,
  },
  images: {
    domains: ["image.tmdb.org"],
  },
};

module.exports = nextConfig;
