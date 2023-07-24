/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.staradvertiser.com",
        port: "",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "media-cldnry.s-nbcnews.com",
        port: "",
        pathname: "/image/upload/rockcms/**",
      },
    ],
  },
};

module.exports = nextConfig;
