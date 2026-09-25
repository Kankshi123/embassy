// src/components/ui/PWARegistrar.tsx
'use client';

import { useEffect } from 'react';

export default function PWARegistrar() {
  useEffect(() => {
    if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('/sw.js')
          .catch((err) => console.error('PWA Service Worker registration failed:', err));
      });
    }
  }, []);

  return null;
}
