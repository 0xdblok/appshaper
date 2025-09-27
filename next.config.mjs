/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: { ignoreDuringBuilds: true },
    images: {
      remotePatterns: [{ protocol: 'https', hostname: 'placehold.co', pathname: '/**' }],
    },
  };
  export default nextConfig;