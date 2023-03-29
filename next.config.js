/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { appDir: true },
  images: {
    domains: ['www.svgrepo.com'],
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
