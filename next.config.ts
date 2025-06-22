/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // enables static export
  images: {
    domains: ['images.unsplash.com', 'assets.aceternity.com'],
    unoptimized: true, // ✅ disables the Image Optimization API for export mode
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
