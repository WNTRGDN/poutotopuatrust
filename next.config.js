/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    trailingSlash: true,
    images: {
      //path: "/",
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'localhost',
          port: '17398',
          pathname: '/media/**',
        },
        {
          protocol: 'https',
          hostname: 'staging.api.wntr.gdn',
          port: '',
          pathname: '/media/**',
        },
        {
          protocol: 'https',
          hostname: 'api.wntr.gdn',
          port: '',
          pathname: '/media/**',
        },
      ],
    }
  }
  
  module.exports = nextConfig