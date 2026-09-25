// EMBASSY CATERING — src/components/ui/WhatsappButton.tsx — Optimized June 8, 2026
'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { WHATSAPP_URL } from '@/lib/whatsapp';

const HIDDEN_PATHS = ['/contact', '/book-a-tasting'];

export default function WhatsappButton() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  // Initial delay orchestration
  useEffect(() => {
    const isHiddenPath = HIDDEN_PATHS.includes(pathname);

    if (isHiddenPath) {
      setVisible(false);
      return;
    }

    // Delay entrance on homepage to let hero animations breathe
    if (pathname === '/') {
      const timer = setTimeout(() => setVisible(true), 4200);
      return () => clearTimeout(timer);
    }

    setVisible(true);
  }, [pathname]);

  if (!visible) return null;

  return (
    <>
      <div
        className="whatsapp-container"
        style={{
          position: 'fixed',
          right: 'var(--space-lg)',
          zIndex: 400, // Strictly enforced z-index
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-md)',
          pointerEvents: 'none', // Let clicks pass through empty space
        } as React.CSSProperties}
      >
        {/* Slide-in Label */}
        <div
          className="whatsapp-label type-eyebrow"
          aria-hidden="true"
          style={{
            background: 'var(--color-white)',
            color: 'var(--color-text-dark)',
            padding: '10px 16px',
            borderRadius: '999px',
            boxShadow: 'var(--shadow-card)',
            pointerEvents: 'none',
          } as React.CSSProperties}
        >
          Chat With Us
        </div>

        {/* Primary CTA Button */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-btn"
          aria-label="Chat with us on WhatsApp"
          style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            background: '#25D366', // Official WhatsApp Green
            color: '#FFFFFF',      // White Icon
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 12px 32px rgba(37, 211, 102, 0.35)',
            pointerEvents: 'auto',
          } as React.CSSProperties}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            style={{ color: 'inherit' } as React.CSSProperties}
          >
            <path
              d="M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.1 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652C8.119 23.348 10.065 23.8 12.043 23.8c6.582 0 11.941-5.334 11.943-11.894.001-3.177-1.24-6.165-3.466-8.457zM12.045 21.784c-1.784 0-3.532-.479-5.057-1.38l-.363-.214-3.76.98.999-3.648-.237-.374a9.862 9.862 0 01-1.516-5.294c.003-5.45 4.436-9.884 9.89-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.892 6.993c-.003 5.45-4.437 9.884-9.836 9.884zm5.42-7.399c-.297-.148-1.758-.867-2.031-.967-.272-.099-.47-.148-.669.148-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.445-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.148.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"
              fill="currentColor"
            />
          </svg>
        </a>
      </div>

      {/* REACT-SAFE STYLESHEET (High-performance GPU transitions) */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            /* Base positioning adapting to mobile nav avoidance */
            .whatsapp-container {
              bottom: 32px;
            }

            @media (max-width: 768px) {
              .whatsapp-container {
                bottom: 96px; /* Bumps up to avoid overlapping mobile footers/navs */
              }
            }

            /* Subtly pulse every 3s */
            .whatsapp-btn {
              animation: pulseWhatsApp 3s var(--ease-embassy) infinite;
              transition: transform var(--dur-hover) var(--ease-embassy), box-shadow var(--dur-hover) var(--ease-embassy);
              will-change: transform;
            }

            @keyframes pulseWhatsApp {
              0%   { transform: scale(1); }
              50%  { transform: scale(1.05); }
              100% { transform: scale(1); }
            }

            /* Slide-in Label initial state */
            .whatsapp-label {
              opacity: 0;
              transform: translateX(12px);
              transition: all 0.4s var(--ease-embassy);
              will-change: transform, opacity;
            }

            /* Hover states (Triggered on parent container) */
            .whatsapp-container:hover .whatsapp-label {
              opacity: 1;
              transform: translateX(0);
            }

            .whatsapp-container:hover .whatsapp-btn {
              /* Pauses pulse and lifts button cleanly */
              animation-play-state: paused;
              transform: translateY(-3px) scale(1.04);
              box-shadow: 0 16px 40px rgba(37, 211, 102, 0.45);
            }
          `,
        }}
      />
    </>
  );
}