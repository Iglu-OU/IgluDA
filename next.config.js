// TODO Stopped working for some reason
// const withPWA = require('next-pwa');

module.exports = {
  webpack(config) {
    config.module.rules.push({ test: /\.svg$/, use: ['@svgr/webpack'] });
    return config;
  },
};
