/** @type {import('next').NextConfig} */
const nextConfig = {
  // Turbopack disable করে webpack ব্যবহার করবো (stable)
  experimental: {
    turbopack: false,
  },
  // Production build এর জন্য
  output: 'standalone',
};

export default nextConfig;