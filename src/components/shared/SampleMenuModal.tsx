'use client';

import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import MenuDownloadCapture from '@/components/lead/MenuDownloadCapture';
import { useScrollLock } from '@/lib/useScrollLock';

export default function SampleMenuModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  useScrollLock(open);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open || typeof document === 'undefined') return null;

  return createPortal(
    <div className="smc-overlay" data-lenis-prevent onClick={onClose}>
      <div className="smc-modal" role="dialog" aria-modal="true" aria-label="Sample menu" onClick={(e) => e.stopPropagation()}>
        <MenuDownloadCapture />
        <button type="button" className="smc-close" onClick={onClose}>
          Back to Website
        </button>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        .smc-overlay {
          position: fixed; inset: 0; z-index: 10000; overflow-y: auto; overscroll-behavior: contain;
          background: rgba(0,0,0,0.72); backdrop-filter: blur(6px);
          display: flex; align-items: flex-start; justify-content: center;
          padding: 100px 1rem 40px; animation: smcFade 0.3s var(--ease-embassy);
        }
        .smc-modal { width: 100%; max-width: 880px; }
        .smc-close {
          display: block; margin: 20px auto 0; background: none; border: 0;
          border-bottom: 1px solid currentColor; color: rgba(255,255,255,0.85);
          font-family: var(--font-body); font-size: 12px; letter-spacing: 0.16em;
          text-transform: uppercase; padding: 4px 0; cursor: pointer;
        }
        @keyframes smcFade { from { opacity: 0; } to { opacity: 1; } }
      ` }} />
    </div>,
    document.body
  );
}
