/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // Commented out for development - enable before deployment
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
