// EMBASSY CATERING — src/app/robots.ts — Optimized June 15, 2026
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/'],
    },
    sitemap: 'https://embassy-catering.netlify.app/sitemap.xml',
  };
}