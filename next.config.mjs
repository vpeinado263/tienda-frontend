/** @type {import('next').NextConfig} */

const NextConfig = {
  webpack: (config) => {
    return config;
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'drive.google.com',
        port: '',
        pathname: '/uc',
      },
    ],
  },
};

export default NextConfig;
