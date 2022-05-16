const withPWA = require('next-pwa');

module.exports = withPWA({
  webpack5: true,
  pwa: {
    disable: process.env.NODE_ENV === 'development',
    dest: 'public',
  },
  webpack(config) {
    config.module.rules.push({ test: /\.svg$/, use: ['@svgr/webpack'] });
    return config;
  },
  experimental: {
    concurrentFeatures: true,
    // Could be useful, but some hooks are not supported so requires a small rewrite
    // serverComponents: true,
  },
});
