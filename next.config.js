/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { appDir: true },
  images: {
    domains: ['localhost', 'twilight-sunset-5469.fly.dev'],
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
