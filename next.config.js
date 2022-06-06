require('dotenv').config();
const webpack = require('webpack');

const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  nextConfig,
  images: {
    domains: ['i.vimeocdn.com'],
    formats: ['image/avif', 'image/webp'],
  },
  webpack: (config) => {
    config.plugins.push(new webpack.EnvironmentPlugin(process.env));
    return config;
  },
};
