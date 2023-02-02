/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "https://api.notion.com/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
