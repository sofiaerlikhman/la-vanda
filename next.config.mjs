/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Once product photography comes from a CMS/CDN, list its hostname here
    // (or switch to a remotePatterns entry) so next/image can optimize it.
    remotePatterns: [],
  },
};

export default nextConfig;
