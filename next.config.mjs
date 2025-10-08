/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: false,
  },
  experimental: {
    styledJsx: false,
  },
  swcMinify: true,
  reactStrictMode: true,
}

export default nextConfig