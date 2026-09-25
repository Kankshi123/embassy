// EMBASSY CATERING — next.config.js — PWA + Turbopack compatible
const withPWA = require('@ducanh2912/next-pwa').default({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  swcMinify: true,
  fallbacks: {
    document: '/offline.html',
  },
  workboxOptions: {
    disableDevLogs: true,
    runtimeCaching: [
      // Fonts — cache first, long TTL
      {
        urlPattern: /^https:\/\/fonts\.(googleapis|gstatic)\.com\/.*/i,
        handler: 'CacheFirst',
        options: {
          cacheName: 'embassy-fonts',
          expiration: { maxEntries: 10, maxAgeSeconds: 365 * 24 * 60 * 60 },
          cacheableResponse: { statuses: [0, 200] },
        },
      },
      // Static assets — cache first
      {
        urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp|ico)$/i,
        handler: 'CacheFirst',
        options: {
          cacheName: 'embassy-images',
          expiration: { maxEntries: 60, maxAgeSeconds: 30 * 24 * 60 * 60 },
          cacheableResponse: { statuses: [0, 200] },
        },
      },
      // CSS & JS — stale while revalidate
      {
        urlPattern: /\.(?:css|js)$/i,
        handler: 'StaleWhileRevalidate',
        options: {
          cacheName: 'embassy-static',
          expiration: { maxEntries: 50, maxAgeSeconds: 7 * 24 * 60 * 60 },
        },
      },
      // Hero video — never cache (3.3MB+)
      {
        urlPattern: /\.(?:mp4|webm|ogg)$/i,
        handler: 'NetworkOnly',
      },
      // Pages — network first with offline fallback
      {
        urlPattern: /^https?.*/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'embassy-pages',
          expiration: { maxEntries: 30, maxAgeSeconds: 24 * 60 * 60 },
          networkTimeoutSeconds: 10,
          cacheableResponse: { statuses: [0, 200] },
        },
      },
    ],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Silence the Turbopack/webpack conflict warning from next-pwa
  turbopack: {},

  reactStrictMode: true,

  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [390, 640, 828, 1080, 1280, 1440, 1920],
  },

  headers: async () => [
    {
      source: '/offline.html',
      headers: [{ key: 'Cache-Control', value: 'no-store' }],
    },
    {
      source: '/manifest.json',
      headers: [{ key: 'Cache-Control', value: 'public, max-age=86400' }],
    },
  ],
};

module.exports = withPWA(nextConfig);