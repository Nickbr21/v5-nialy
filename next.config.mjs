/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['lucide-react']
  },
  images: {
    domains: [
      'images.unsplash.com',
      'k6hrqrxuu8obbfwn.public.blob.vercel-storage.com'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'k6hrqrxuu8obbfwn.public.blob.vercel-storage.com',
      }
    ]
  }
};

export default nextConfig;