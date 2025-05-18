// @ts-check

const path = require('path');
const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const { nextI18NextRewrites } = require('next-i18next/rewrites');

const localeSubpaths = {};

/** @type {import('next').NextConfig} */
const config = {
  images: {
    domains: [
      `${process.env.FILES_HANDLER_BUCKET}.s3.eu-central-1.amazonaws.com`,
      `${process.env.IMAGE_HANDLER_ENDPOINT}`,
    ],
    loader: 'custom',

    deviceSizes: [250, 320, 500, 640],
  },
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths,
    API_SSL: process.env.API_SSL,
    API_PORT: process.env.API_PORT,
    API_HOST: process.env.API_HOST,
    API_HOST_PUBLIC: process.env.API_HOST_PUBLIC,
    API_PATH: process.env.API_PATH,
    GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
    AMPLITUDE_API_KEY: process.env.AMPLITUDE_API_KEY,
    IMAGE_HANDLER_ENDPOINT: process.env.IMAGE_HANDLER_ENDPOINT,
    FILES_HANDLER_BUCKET: process.env.FILES_HANDLER_BUCKET,
  },
  reactStrictMode: false,
  trailingSlash: false,
  poweredByHeader: false,
  sassOptions: {
    includePaths: [
      path.join(__dirname, 'src', 'style'),
    ],
  },
  optimizeFonts: true,
};

module.exports = withPlugins([
  [withBundleAnalyzer],
], config);
