const path = require('path')
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  concurrentFeatures: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['testnet.metheus.network'],
  },
  experimental: {
    reactRoot: true,
  },
  compiler: {
    removeConsole: {
      exclude: ['log'],
    },
  },
  webpack(config) {
    config.module.rules[3].oneOf.forEach((one) => {
      if (!`${one.issuer?.and}`.includes('_app')) return;
      one.issuer.and = [path.resolve(__dirname)];
    });
    return config;
  },
}

module.exports = nextConfig
