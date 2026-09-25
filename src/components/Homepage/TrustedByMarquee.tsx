'use client';

import React from 'react';

const logos = [
  { src: '/logos/world-bank.jpg', alt: 'World Bank' },
  { src: '/logos/ifc.jpg', alt: 'IFC' },
  { src: '/logos/adb.jpg', alt: 'ADB' },
  { src: '/logos/nestle.jpg', alt: 'Nestle' },
  { src: '/logos/teleperformance.jpg', alt: 'Teleperformance' },
  { src: '/logos/undp.jpg', alt: 'UNDP' },
];

export default function TrustedByMarquee() {
  return (
    <>
      <section style={{
        position: 'relative',
        width: '100%',
        padding: '5rem 0 6rem',
        backgroundColor: '#fff',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderTop: '1px solid rgba(177,18,38,0.1)',
        borderBottom: '1px solid rgba(177,18,38,0.1)',
      }}>

        {/* HEADING */}
        <div style={{ marginBottom: '3.5rem', textAlign: 'center' }}>
          <p style={{
            fontFamily: 'var(--font-display-next), serif',
            fontSize: '0.8rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'var(--color-primary)',
            fontWeight: 900,
            marginBottom: '0.6rem',
          }}>
            Trusted By
          </p>
          <h2 style={{
            fontFamily: 'var(--font-display-next), serif',
            fontStyle: 'italic',
            fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
            fontWeight: 600,
            color: 'var(--color-primary)',
            letterSpacing: '0.04em',
          }}>
            Global Brands & Institutions
          </h2>
        </div>

        {/* MARQUEE STRIP */}
        <div style={{
          position: 'relative',
          width: '100%',
          overflow: 'hidden',
        }}>
          {/* Edge fade left */}
          <div style={{
            position: 'absolute', left: 0, top: 0, bottom: 0, width: '120px', zIndex: 2,
            background: 'linear-gradient(to right, #fff 0%, transparent 100%)',
            pointerEvents: 'none',
          }} />
          {/* Edge fade right */}
          <div style={{
            position: 'absolute', right: 0, top: 0, bottom: 0, width: '120px', zIndex: 2,
            background: 'linear-gradient(to left, #fff 0%, transparent 100%)',
            pointerEvents: 'none',
          }} />

          {/* Scrolling track */}
          <div style={{
            display: 'flex',
            width: 'max-content',
            alignItems: 'center',
            gap: '5rem',
            padding: '0.5rem 5rem',
            animation: 'marquee 28s linear infinite',
          }}>
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                style={{
                  flexShrink: 0,
                  width: '280px',
                  height: '170px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '8px',
                  borderRadius: '16px',
                  background: '#ffffff',
                  boxShadow: '0 2px 16px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.05)',
                  transition: 'box-shadow 0.35s ease, transform 0.35s ease',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 32px rgba(177,18,38,0.15), 0 0 0 1px rgba(177,18,38,0.12)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 2px 16px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.05)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    display: 'block',
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
