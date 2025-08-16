/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Remove basePath and assetPrefix for Cloudflare Pages
  // basePath: '/personal-profile',
  // assetPrefix: '/personal-profile',
}

module.exports = nextConfig