// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  test: {
    global: true,
    environment: "jsdom",
    setupFiles: "./src/test/setup.js",
    css: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
      },
    ],
  },
};

export default nextConfig;