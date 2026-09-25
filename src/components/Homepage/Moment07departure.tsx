// EMBASSY CATERING — src/components/Homepage/Moment07Departure.tsx — Optimized June 8, 2026
'use client';

import React from 'react';
import Link from 'next/link';
import BrandMark from '../primitives/BrandMark';
import { WHATSAPP_URL } from '@/lib/whatsapp';

const EXPLORE_LINKS = [
  { label: 'Our Story', href: '/legacy' },
  { label: 'Weddings', href: '/weddings' },
  { label: 'Events', href: '/events' },
  { label: 'Menu', href: '/menu' },
  { label: 'Blogs', href: '/journal' },
  { label: 'Contact', href: '/contact' },
];

export default function Moment07Departure() {
  return (
    <>
      <footer
        id="moment-07-departure"
        className="section section-red-white"
        aria-label="Site footer — The Embassy Catering"
        style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.18)',
          position: 'relative',
          zIndex: 10,
        } as React.CSSProperties}
      >
        <div 
          className="container footer-grid"
          style={{ padding: 'var(--space-4xl) var(--space-xl) var(--space-3xl)' } as React.CSSProperties}
        >
          {/* BRAND PANEL */}
          <div className="footer-brand-panel">
            <BrandMark variant="light" size="md" />

            <p
              className="type-editorial"
              style={{
                color: 'rgba(255, 255, 255, 0.92)',
                marginTop: 'var(--space-2xl)',
                maxWidth: '300px',
              } as React.CSSProperties}
            >
              Delhi's original luxury caterer.
              <br />
              Generations served. Standards unchanged.
            </p>
          </div>

          {/* NAVIGATION LINKS GRID */}
          <div className="footer-links-grid">
            
            {/* EXPLORE */}
            <div aria-label="Explore pages">
              <h3 
                className="type-eyebrow"
                style={{ color: 'rgba(255, 255, 255, 0.65)', marginBottom: 'var(--space-md)' } as React.CSSProperties}
              >
                Explore
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' } as React.CSSProperties}>
                {EXPLORE_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="footer-link underline-draw"
                      style={{ color: 'rgba(255, 255, 255, 0.9)' } as React.CSSProperties}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* CONTACT */}
            <address aria-label="Contact information" style={{ fontStyle: 'normal' } as React.CSSProperties}>
              <h3 
                className="type-eyebrow"
                style={{ color: 'rgba(255, 255, 255, 0.65)', marginBottom: 'var(--space-md)' } as React.CSSProperties}
              >
                Reach Us
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' } as React.CSSProperties}>
                <a href="tel:+918448496874" className="footer-link underline-draw" style={{ color: 'rgba(255, 255, 255, 0.9)' } as React.CSSProperties}>
                  +91 84484 96874
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link underline-draw"
                  style={{ color: 'rgba(255, 255, 255, 0.9)' } as React.CSSProperties}
                >
                  WhatsApp Enquiry
                </a>
                <a href="mailto:events@embassycatering.in" className="footer-link underline-draw" style={{ color: 'rgba(255, 255, 255, 0.9)' } as React.CSSProperties}>
                  events@embassycatering.in
                </a>
              </div>
            </address>

            {/* LOCATION */}
            <div>
              <h3 
                className="type-eyebrow"
                style={{ color: 'rgba(255, 255, 255, 0.65)', marginBottom: 'var(--space-md)' } as React.CSSProperties}
              >
                Location
              </h3>
              <p 
                style={{ 
                  fontFamily: 'var(--font-body)', 
                  fontSize: '13px', 
                  letterSpacing: '0.06em', 
                  color: 'rgba(255, 255, 255, 0.9)', 
                  lineHeight: 1.8 
                } as React.CSSProperties}
              >
                D-100, Udyog Vihar
                <br />
                Phase -V
                <br />
                <span style={{ display: 'block', marginTop: 'var(--space-sm)', color: 'rgba(255, 255, 255, 0.65)' } as React.CSSProperties}>
                  Monday to Saturday<br />9:00 AM — 8:00 PM
                </span>
              </p>
            </div>

          </div>
        </div>
      </footer>

      {/* REACT-SAFE STYLESHEET (Handles structural layout & link interactions) */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .footer-grid {
              display: grid;
              grid-template-columns: 40% 60%;
              gap: var(--space-3xl);
            }

            .footer-links-grid {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              gap: var(--space-xl);
            }

            /* GPU-Accelerated Link Hover State */
            .footer-link {
              font-family: var(--font-body);
              font-weight: 400;
              font-size: 13px;
              letter-spacing: 0.06em;
              text-decoration: none;
              display: inline-block;
              transition: color var(--dur-hover) var(--ease-heritage), transform var(--dur-hover) var(--ease-heritage);
              will-change: transform, color;
            }

            .footer-link:hover {
              color: var(--color-white) !important;
              transform: translateX(4px);
            }

            @media (max-width: 900px) {
              .footer-grid {
                grid-template-columns: 1fr;
                gap: var(--space-4xl);
              }

              .footer-brand-panel {
                text-align: center;
                display: flex;
                flex-direction: column;
                align-items: center;
              }

              .footer-links-grid {
                grid-template-columns: 1fr 1fr;
              }
            }

            @media (max-width: 600px) {
              .footer-links-grid {
                grid-template-columns: 1fr;
                gap: var(--space-3xl);
                text-align: center;
              }

              .footer-links-grid ul {
                align-items: center;
              }
            }
          `,
        }}
      />
    </>
  );
}