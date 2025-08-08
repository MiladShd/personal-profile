/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/personal-profile',
  assetPrefix: '/personal-profile',
}

module.exports = nextConfig