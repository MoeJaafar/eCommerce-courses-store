/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  reactStrictMode: true,
  images: {
    domains: ["img.freepik.com", "img.icons8.com"],
  },
};

module.exports = nextConfig;
