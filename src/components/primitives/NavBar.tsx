'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import BrandMark from './BrandMark';
import { WHATSAPP_URL } from '@/lib/whatsapp';

const NAV_LINKS = [
  { label: 'About Us', href: '/legacy' },
  { 
    label: 'Events', 
    href: '/events',
    dropdown: [
      { label: 'Weddings', href: '/weddings' },
      { label: 'Corporate Events', href: '/events/corporate' },
      { label: 'Social Events', href: '/events/social' },
      { label: 'All Events', href: '/events' },
    ]
  },
  { label: 'Menu', href: '/menu' },
  { label: 'Gallery', href: '/gallery' },
];

// Expanded links specifically for the mobile overlay
const OVERLAY_LINKS = [
  { label: 'About Us', href: '/legacy' },
  { label: 'Weddings', href: '/weddings' },
  { label: 'Events', href: '/events' },
  { label: 'Menu', href: '/menu' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Blog', href: '/journal' },
  { label: 'Contact', href: '/contact' },
  { label: 'Corporate Events', href: '/events/corporate' },
  { label: 'Social Events', href: '/events/social' },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [overlayOpen, setOverlayOpen] = useState(false);
  const [logoSettled, setLogoSettled] = useState(false);
  const pathname = usePathname();

  // Logo entrance animation orchestrator
  useEffect(() => {
    const timer = setTimeout(() => {
      setLogoSettled(true);
    }, 1700);
    return () => clearTimeout(timer);
  }, []);

  // Scroll detection for subtle depth
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile overlay is open
  useEffect(() => {
    document.body.style.overflow = overlayOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [overlayOpen]);

  return (
    <>
      <nav
        aria-label="Main navigation"
        className="main-navigation"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 200,
          height: '82px',
          display: 'flex',
          alignItems: 'center',
          padding: '0 var(--space-xl)',
          background: 'var(--color-primary)', // Locked solid red, no transparency
          borderBottom: '1px solid rgba(255, 255, 255, 0.10)',
          boxShadow: scrolled ? 'var(--shadow-card)' : 'none',
          transition: 'box-shadow 0.6s var(--ease-embassy)',
        } as React.CSSProperties}
      >
        {/* LOGO ENTRANCE */}
        <Link
          href="/"
          aria-label="Home"
          style={{
            position: 'absolute',
            top: '50%',
            left: logoSettled ? '18px' : '50%',
            transform: logoSettled
              ? 'translateY(-50%) scale(0.88)'
              : 'translate(-50%, -50%) scale(1.08)',
            transformOrigin: 'center',
            textDecoration: 'none',
            zIndex: 20,
            transition: 'left 1.2s var(--ease-embassy), transform 1.2s var(--ease-embassy)',
          } as React.CSSProperties}
        >
          <BrandMark variant="light" size="sm" />
        </Link>

        {/* DESKTOP NAV LINKS */}
        <div
          role="list"
          className="nav-links-group"
          style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 'var(--space-2xl)',
            paddingLeft: '180px',
            opacity: logoSettled ? 1 : 0,
            transform: logoSettled ? 'translateY(0)' : 'translateY(10px)',
            transition: 'opacity 0.8s var(--ease-heritage) 0.7s, transform 0.8s var(--ease-heritage) 0.7s',
          } as React.CSSProperties}
        >
          {NAV_LINKS.map((link) => (
            <div key={link.label} className="nav-desktop-item" style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}>
              <Link
                href={link.href}
                className="nav-desktop-link type-nav"
                style={{
                  color: 'var(--color-white)',
                  opacity: 0.92,
                  textDecoration: 'none',
                  transition: 'all var(--dur-hover) var(--ease-embassy)',
                  padding: '30px 0', // larger hover area for dropdown
                } as React.CSSProperties}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '1';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '0.92';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {link.label} {link.dropdown && <span style={{ fontSize: '10px', marginLeft: '4px' }}>▼</span>}
              </Link>
              
              {link.dropdown && (
                <div className="nav-dropdown">
                  {link.dropdown.map(drop => (
                    <Link key={drop.label} href={drop.href} className="nav-dropdown-link">
                      {drop.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* CONTACT US CTA BUTTON */}
          <Link
            href="/contact"
            className="nav-contact-cta type-eyebrow"
            style={{
              position: 'relative',
              overflow: 'hidden',
              display: 'inline-block',
              fontFamily: 'var(--font-body)',
              fontSize: '11px',
              letterSpacing: '0.14em',
              fontWeight: 600,
              textTransform: 'uppercase',
              color: '#FFFFFF',
              textDecoration: 'none',
              padding: '10px 24px',
              background: 'rgba(255,255,255,0.15)',
              border: '1px solid rgba(255,255,255,0.35)',
              borderRadius: '2px',
              transition: 'all 0.3s var(--ease-embassy)',
              animation: 'cta-pulse 2.5s infinite',
            } as React.CSSProperties}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.25)';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.8)';
              e.currentTarget.style.animation = 'none'; // Pause pulse on hover
              e.currentTarget.style.transform = 'scale(1.02)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.15)';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)';
              e.currentTarget.style.animation = 'cta-pulse 2.5s infinite';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <span style={{ position: 'relative', zIndex: 2 }}>Contact Us</span>
            <span className="cta-shimmer" />
          </Link>
        </div>

        {/* MOBILE MENU HAMBURGER */}
        <button
          onClick={() => setOverlayOpen(true)}
          className="nav-hamburger"
          aria-label="Open Navigation"
          style={{
            background: 'none',
            border: 'none',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '5px',
            padding: '12px', // Touch target expansion
            minWidth: '44px', // Touch target minimum
            minHeight: '44px', // Touch target minimum
            marginLeft: 'auto',
            cursor: 'pointer',
            opacity: logoSettled ? 1 : 0,
            transition: 'opacity 0.8s var(--ease-heritage) 0.7s',
          } as React.CSSProperties}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                width: '24px',
                height: '1px',
                background: 'var(--color-white)',
                display: 'block',
              }}
            />
          ))}
        </button>
      </nav>

      {/* MOBILE NAV OVERLAY */}
      <NavOverlay
        open={overlayOpen}
        onClose={() => setOverlayOpen(false)}
        links={OVERLAY_LINKS}
        pathname={pathname}
      />

      {/* REACT-SAFE STYLESHEET (Bypasses jsx style parsing errors) */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .nav-dropdown {
              position: absolute;
              top: 60px;
              left: 50%;
              transform: translateX(-50%) translateY(10px);
              background: rgba(255, 255, 255, 0.98);
              backdrop-filter: blur(10px);
              padding: 12px 0;
              border-radius: 2px;
              box-shadow: 0 10px 30px rgba(0,0,0,0.1);
              opacity: 0;
              visibility: hidden;
              transition: all 0.3s ease;
              min-width: 220px;
              display: flex;
              flex-direction: column;
              pointer-events: none;
            }
            .nav-desktop-item:hover .nav-dropdown {
              opacity: 1;
              visibility: visible;
              transform: translateX(-50%) translateY(0);
              pointer-events: auto;
            }
            .nav-dropdown-link {
              color: var(--color-primary);
              text-decoration: none;
              padding: 12px 24px;
              font-family: var(--font-body);
              font-size: 11px;
              letter-spacing: 0.16em;
              text-transform: uppercase;
              font-weight: 500;
              transition: all 0.2s ease;
              text-align: center;
            }
            .nav-dropdown-link:hover {
              background: rgba(201,168,76,0.08);
              color: #C9A84C;
            }

            body[data-cta-docked="true"] .nav-links-group {
              justify-content: flex-end !important;
              padding-left: 0 !important;
              gap: var(--space-xl) !important;
            }
            body[data-cta-docked="true"] .nav-contact-cta {
              display: none !important;
            }
            @media (max-width: 1100px) {
              .nav-contact-cta {
                display: none !important;
              }
            }

            @media (min-width: 900px) {
              .nav-hamburger {
                display: none !important;
              }
            }

            @media (max-width: 899px) {
              nav[aria-label="Main navigation"] {
                height: 76px !important;
                padding: 0 18px !important;
              }
              .nav-desktop-link {
                display: none !important;
              }
            }

            @keyframes cta-pulse {
              0% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.2); }
              70% { box-shadow: 0 0 0 8px rgba(255, 255, 255, 0); }
              100% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0); }
            }

            .cta-shimmer {
              position: absolute;
              top: 0;
              left: -100%;
              width: 50%;
              height: 100%;
              background: linear-gradient(
                to right,
                rgba(255,255,255,0) 0%,
                rgba(255,255,255,0.4) 50%,
                rgba(255,255,255,0) 100%
              );
              transform: skewX(-25deg);
              animation: shimmer 3s infinite;
              z-index: 1;
            }

            @keyframes shimmer {
              0% { left: -100%; }
              20% { left: 200%; }
              100% { left: 200%; }
            }
          `,
        }}
      />
    </>
  );
}

function NavOverlay({
  open,
  onClose,
  links,
  pathname,
}: {
  open: boolean;
  onClose: () => void;
  links: { label: string; href: string }[];
  pathname: string;
}) {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 210,
        background: 'var(--color-primary)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 'var(--space-2xl)',
        opacity: open ? 1 : 0,
        pointerEvents: open ? 'all' : 'none',
        transition: 'opacity 0.6s var(--ease-embassy)',
      } as React.CSSProperties}
    >
      <button
        onClick={onClose}
        aria-label="Close Navigation"
        style={{
          position: 'absolute',
          top: '24px',
          right: '24px',
          background: 'none',
          border: 'none',
          color: 'var(--color-white)',
          fontSize: '40px',
          fontFamily: 'var(--font-body)',
          fontWeight: 300,
          lineHeight: 1,
          padding: '12px', // Touch target expansion
          minWidth: '44px', // Touch target minimum
          minHeight: '44px', // Touch target minimum
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
        } as React.CSSProperties}
      >
        ×
      </button>

      {links.map((link, i) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={onClose}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(36px, 10vw, 48px)',
            fontWeight: link.href === pathname ? 700 : 400,
            color: link.href === pathname ? 'var(--color-white)' : 'rgba(255,255,255,0.85)',
            textDecoration: 'none',
            opacity: open ? 1 : 0,
            transform: open ? 'translateY(0)' : 'translateY(24px)', // Slide entrance animation
            transition: `all 0.6s var(--ease-embassy) ${open ? 0.2 + i * 0.08 : 0}s`,
          } as React.CSSProperties}
        >
          {link.label}
        </Link>
      ))}

      {/* MOBILE WHATSAPP CTA */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClose}
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '11px',
          letterSpacing: '0.18em',
          fontWeight: 600,
          textTransform: 'uppercase',
          color: '#25D366',
          textDecoration: 'none',
          marginTop: 'var(--space-xl)',
          padding: '16px 32px',
          border: '1px solid rgba(37,211,102,0.4)',
          borderRadius: '2px',
          opacity: open ? 1 : 0,
          transform: open ? 'translateY(0)' : 'translateY(24px)',
          transition: `all 0.6s var(--ease-embassy) ${open ? 0.2 + links.length * 0.08 : 0}s`,
        }}
      >
        WhatsApp Us ↗
      </a>
    </div>
  );
}