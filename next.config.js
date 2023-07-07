/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    forceSwcTransforms: false,
  },
  compiler: {
    styledComponents: true
  }
  
}

module.exports = nextConfig
