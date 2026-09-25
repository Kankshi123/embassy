'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useScrollLock } from '@/lib/useScrollLock';

export default function EventIntentPrompt() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  useScrollLock(isOpen);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem('eventPromptDismissed') === 'true';
    } catch {}
    if (seen) return;

    const timer = setTimeout(() => {
      try {
        sessionStorage.setItem('eventPromptDismissed', 'true');
      } catch {}
      setIsOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsOpen(false);
    try {
      sessionStorage.setItem('eventPromptDismissed', 'true');
    } catch {}
  };

  const handleNavigate = (href: string) => {
    handleDismiss();
    router.push(href);
  };

  if (!isOpen) return null;

  return (
    <div
      data-lenis-prevent
      style={{
        position: 'fixed',
        overflowY: 'auto',
        overscrollBehavior: 'contain',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        backgroundColor: 'rgba(0, 0, 0, 0.65)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        animation: 'fadeIn 0.5s var(--ease-embassy)',
      }}
      onClick={handleDismiss}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        style={{
          position: 'relative',
          background: 'var(--color-white)',
          padding: '4rem 3rem',
          maxWidth: '560px',
          width: '100%',
          textAlign: 'center',
          border: '1px solid rgba(177,18,38,0.2)',
          boxShadow: '0 24px 64px rgba(0,0,0,0.2)',
          animation: 'slideUp 0.6s var(--ease-embassy)',
        }}
      >
        <p className="type-eyebrow" style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>
          Welcome to Embassy
        </p>
        <h2 className="type-display" style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: 'var(--color-text-dark)', marginBottom: '3rem', lineHeight: 1.1 }}>
          Which event can <br />
          <span style={{ color: 'var(--color-primary)', fontStyle: 'italic' }}>Embassy cater for you?</span>
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <button
            className="luxury-btn-red"
            onClick={() => handleNavigate('/events/corporate')}
            style={{ width: '100%', padding: '1.2rem', justifyContent: 'center', fontSize: '1.1rem' }}
          >
            Corporate Events
          </button>
          
          <button
            className="luxury-btn-red"
            onClick={() => handleNavigate('/events/social')}
            style={{ width: '100%', padding: '1.2rem', justifyContent: 'center', fontSize: '1.1rem' }}
          >
            Social Events
          </button>

          <button
            className="luxury-btn-red"
            onClick={() => handleNavigate('/weddings')}
            style={{ width: '100%', padding: '1.2rem', justifyContent: 'center', fontSize: '1.1rem' }}
          >
            Weddings
          </button>

          <button
            className="luxury-btn-red"
            onClick={() => handleNavigate('/contact')}
            style={{ width: '100%', padding: '1.2rem', justifyContent: 'center', fontSize: '1.1rem' }}
          >
            Custom
          </button>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <button
            onClick={handleDismiss}
            style={{
              background: 'none',
              border: 'none',
              borderBottom: '1px solid currentColor',
              cursor: 'pointer',
              color: 'var(--color-text-muted)',
              padding: '4px 0',
              fontSize: '0.85rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              transition: 'color 0.3s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-primary)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--color-text-muted)'; }}
          >
            Back to Website
          </button>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes slideUp {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `
      }} />
    </div>
  );
}
