// EMBASSY CATERING — src/components/ui/PWAInstallPrompt.tsx — Optimized 2026-06-13
'use client';

import { useState, useEffect } from 'react';

export default function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsVisible(true);
    };

    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      setIsVisible(false);
    }
    setDeferredPrompt(null);
  };

  if (!isVisible) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: '24px', 
      left: '24px',
      zIndex: 1000,
      background: 'var(--color-primary)',
      padding: 'var(--space-md) var(--space-lg)',
      borderRadius: '4px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-md)',
      color: '#FFFFFF',
      // Responsive check: push up if screen is very narrow to avoid keyboard or nav
      maxWidth: 'calc(100vw - 48px)'
    }}>
      <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', fontWeight: 500, margin: 0 }}>
        Install App
      </p>
      <button 
        onClick={handleInstall}
        style={{
          background: '#FFFFFF',
          color: 'var(--color-primary)',
          border: 'none',
          padding: '8px 16px',
          borderRadius: '2px',
          fontFamily: 'var(--font-body)',
          fontSize: '11px',
          fontWeight: 600,
          textTransform: 'uppercase',
          cursor: 'pointer',
          whiteSpace: 'nowrap'
        }}
      >
        Install
      </button>
    </div>
  );
}