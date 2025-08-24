/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react']
  },
  images: {
    domains: ['cdn.builder.io', 'images.unsplash.com']
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production'
  }
}
module.exports = {
  output: 'export',
}

module.exports = nextConfig
