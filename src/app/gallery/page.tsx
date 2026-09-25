'use client';
// EMBASSY CATERING — src/app/gallery/page.tsx
// Gallery page with filtered masonry grid of image and video placeholders.

import { useState, useEffect, useRef } from 'react';
import NavBar from '@/components/primitives/NavBar';
import Moment07Departure from '@/components/Homepage/Moment07departure';
import WhatsappButton from '@/components/ui/WhatsappButton';
import ScriptEyebrow from '@/components/primitives/ScriptEyebrow';

// ─── Types ───────────────────────────────────────────────────────────────────

type MediaType = 'image' | 'video';
type Category = 'all' | 'weddings' | 'corporate' | 'diplomatic' | 'live-counters' | 'behind-the-scenes' | 'social';

interface GalleryItem {
  id: string;
  type: MediaType;
  category: Category;
  label: string;
  caption: string;
  span?: 'wide' | 'tall' | 'normal'; // grid spanning variants
  accentColor: string;
}

// ─── Data ────────────────────────────────────────────────────────────────────

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-01', type: 'image', category: 'weddings',
    label: 'Grand Wedding Reception', caption: 'A 2,000-guest celebration in South Delhi',
    span: 'wide', accentColor: '#C9A84C',
  },
  {
    id: 'g-02', type: 'video', category: 'live-counters',
    label: 'Live Teppanyaki Grill', caption: 'Interactive theatre at its finest',
    span: 'normal', accentColor: '#B11226',
  },
  {
    id: 'g-03', type: 'image', category: 'diplomatic',
    label: 'Diplomatic Banquet Setup', caption: 'Protocol-compliant table for 400 delegates',
    span: 'tall', accentColor: '#6B4C8A',
  },
  {
    id: 'g-04', type: 'image', category: 'weddings',
    label: 'Bridal Mehendi Spread', caption: 'Rajasthani live counters & chaat bar',
    span: 'normal', accentColor: '#C9A84C',
  },
  {
    id: 'g-05', type: 'video', category: 'behind-the-scenes',
    label: 'The Embassy Kitchen', caption: 'A day in the life of our head chef',
    span: 'normal', accentColor: '#2E6E4A',
  },
  {
    id: 'g-06', type: 'image', category: 'corporate',
    label: 'Corporate Product Launch', caption: 'Gala dinner for 600 executives',
    span: 'wide', accentColor: '#1A5276',
  },
  {
    id: 'g-07', type: 'image', category: 'social',
    label: 'Birthday Celebration', caption: 'An intimate soirée for 150 guests',
    span: 'normal', accentColor: '#D4AC0D',
  },
  {
    id: 'g-08', type: 'video', category: 'live-counters',
    label: 'Dim Sum Station', caption: 'Bamboo steamers & bold flavours, live',
    span: 'normal', accentColor: '#C0392B',
  },
  {
    id: 'g-09', type: 'image', category: 'behind-the-scenes',
    label: 'Prep & Plating', caption: 'Precision craftsmanship before service',
    span: 'tall', accentColor: '#784212',
  },
  {
    id: 'g-10', type: 'image', category: 'diplomatic',
    label: 'Embassy State Dinner', caption: 'Multi-national delegation, New Delhi',
    span: 'normal', accentColor: '#154360',
  },
  {
    id: 'g-11', type: 'image', category: 'social',
    label: 'Festive House Party', caption: 'Curated Diwali dinner for 80 guests',
    span: 'normal', accentColor: '#B7950B',
  },
  {
    id: 'g-12', type: 'video', category: 'weddings',
    label: 'Sangeet Night', caption: 'Full audio-visual coverage of the evening',
    span: 'wide', accentColor: '#922B21',
  },
];

const FILTER_TABS: { label: string; value: Category }[] = [
  { label: 'All', value: 'all' },
  { label: 'Weddings', value: 'weddings' },
  { label: 'Corporate Events', value: 'corporate' },
  { label: 'Diplomatic Banquets', value: 'diplomatic' },
  { label: 'Live Counters', value: 'live-counters' },
  { label: 'Social Events', value: 'social' },
  { label: 'Behind the Scenes', value: 'behind-the-scenes' },
];

// ─── Gallery Card ─────────────────────────────────────────────────────────────

function GalleryCard({ item, index }: { item: GalleryItem; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const isWide = item.span === 'wide';
  const isTall = item.span === 'tall';

  return (
    <div
      ref={cardRef}
      className="gallery-card"
      style={{
        gridColumn: isWide ? 'span 2' : 'span 1',
        gridRow: isTall ? 'span 2' : 'span 1',
        opacity: visible ? 1 : 0,
        transition: `opacity 0.7s ease ${index * 0.07}s, transform 0.7s ease ${index * 0.07}s`,
        position: 'relative',
        borderRadius: '4px',
        overflow: 'hidden',
        cursor: 'pointer',
        border: hovered ? `1.5px solid ${item.accentColor}` : '1.5px solid rgba(201,168,76,0.12)',
        boxShadow: hovered ? `0 16px 48px rgba(0,0,0,0.18), 0 0 0 1px ${item.accentColor}22` : '0 4px 20px rgba(0,0,0,0.08)',
        transform: visible ? (hovered ? 'translateY(-5px)' : 'translateY(0)') : 'translateY(28px)',
        transitionProperty: 'opacity, transform, box-shadow, border-color',
      } as React.CSSProperties}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Placeholder Background */}
      <div style={{
        position: 'absolute', inset: 0,
        background: item.type === 'video'
          ? `linear-gradient(135deg, ${item.accentColor}18, ${item.accentColor}35)`
          : `linear-gradient(135deg, #F5EFE6, #EDE0CC)`,
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        minHeight: isTall ? '480px' : '240px',
      }}>
        {/* Shimmer overlay */}
        {item.type === 'image' && (
          <div className="gallery-shimmer" style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)',
            backgroundSize: '200% 100%',
          }} />
        )}

        {/* Icon */}
        {item.type === 'video' ? (
          <div style={{
            width: '72px', height: '72px', borderRadius: '50%',
            background: `${item.accentColor}DD`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: `0 8px 32px ${item.accentColor}44`,
            transform: hovered ? 'scale(1.12)' : 'scale(1)',
            transition: 'transform 0.3s ease',
            zIndex: 2, position: 'relative',
          }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        ) : (
          <div style={{
            width: '60px', height: '60px', borderRadius: '50%',
            background: `${item.accentColor}22`,
            border: `1.5px solid ${item.accentColor}55`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            zIndex: 2, position: 'relative',
          }}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={item.accentColor} strokeWidth="1.5">
              <rect x="3" y="3" width="18" height="18" rx="2"/>
              <circle cx="8.5" cy="8.5" r="1.5"/>
              <path d="m21 15-5-5L5 21"/>
            </svg>
          </div>
        )}

        {/* Type badge */}
        <span style={{
          position: 'absolute', top: '14px', left: '14px',
          fontFamily: 'var(--font-body)', fontSize: '9px', letterSpacing: '0.16em',
          textTransform: 'uppercase', fontWeight: 600, padding: '4px 10px',
          background: item.type === 'video' ? item.accentColor : 'rgba(26,26,26,0.08)',
          color: item.type === 'video' ? '#fff' : 'rgba(26,26,26,0.5)',
          borderRadius: '2px',
        }}>
          {item.type === 'video' ? '▶ VIDEO' : '⬡ PHOTO'}
        </span>
      </div>

      {/* Caption overlay — revealed on hover */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        padding: '24px 20px 20px',
        background: 'linear-gradient(to top, rgba(26,8,9,0.88) 0%, transparent 100%)',
        transform: hovered ? 'translateY(0)' : 'translateY(100%)',
        transition: 'transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      }}>
        <p style={{
          fontFamily: 'var(--font-display)', fontSize: '16px', fontWeight: 500,
          color: '#fff', margin: 0, lineHeight: 1.3,
        }}>{item.label}</p>
        <p style={{
          fontFamily: 'var(--font-body)', fontSize: '12px',
          color: 'rgba(255,255,255,0.65)', margin: '4px 0 0', letterSpacing: '0.04em',
        }}>{item.caption}</p>
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<Category>('all');
  const [visibleCount, setVisibleCount] = useState(12);

  const filtered = GALLERY_ITEMS.filter(
    (item) => activeFilter === 'all' || item.category === activeFilter
  ).slice(0, visibleCount);

  const totalForFilter = GALLERY_ITEMS.filter(
    (item) => activeFilter === 'all' || item.category === activeFilter
  ).length;

  return (
    <>
      <NavBar />
      <WhatsappButton />

      <main style={{ paddingTop: '82px' }}>

        {/* ── HERO ── */}
        <section style={{
          minHeight: '60svh', display: 'flex', alignItems: 'center', justifyContent: 'center',
          position: 'relative', overflow: 'hidden',
          padding: 'var(--space-5xl) var(--space-xl)',
          backgroundColor: '#111',
        }}>
        {/* BACKGROUND IMAGE */}
        <img
          src="/assets/event-gala.png"
          alt="Gallery Background"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
            filter: 'brightness(0.3) contrast(1.1)',
          }}
        />
          
          {/* Radial glow overlay */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(201,168,76,0.15) 0%, transparent 70%)',
            pointerEvents: 'none',
            zIndex: 1,
          }} />
          {/* Decorative grid lines */}
          <div style={{
            position: 'absolute', inset: 0, opacity: 0.04,
            backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
            backgroundSize: '80px 80px', pointerEvents: 'none',
            zIndex: 1,
          }} />

          <div style={{ textAlign: 'center', position: 'relative', zIndex: 2, maxWidth: '760px' }}>
            <ScriptEyebrow text="Gallery" color="rgba(201,168,76,0.9)" animate />
            <h1 style={{
              fontFamily: 'var(--font-display)', fontSize: 'clamp(42px, 6vw, 80px)',
              fontWeight: 600, color: '#FFFFFF', lineHeight: 1.08,
              margin: 'var(--space-lg) 0 var(--space-xl)',
            }}>
              A Legacy Captured<br />in Every Frame.
            </h1>
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: '16px',
              color: 'rgba(255,255,255,0.62)', lineHeight: 1.85,
              maxWidth: '540px', margin: '0 auto',
            }}>
              Moments from 75+ years of crafting celebrations — weddings, diplomatic banquets,
              live counters and everything in between.
            </p>
          </div>
        </section>

        {/* ── FILTER BAR ── */}
        <div style={{
          position: 'sticky', top: '82px', zIndex: 100,
          background: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(201,168,76,0.18)',
          padding: '0 var(--space-xl)',
        }}>
          <div style={{
            maxWidth: '1200px', margin: '0 auto', overflowX: 'auto',
            display: 'flex', gap: 0, scrollbarWidth: 'none',
          }}>
            {FILTER_TABS.map((tab) => {
              const isActive = activeFilter === tab.value;
              return (
                <button
                  key={tab.value}
                  onClick={() => { setActiveFilter(tab.value); setVisibleCount(12); }}
                  style={{
                    background: 'none', border: 'none', cursor: 'pointer',
                    padding: '18px 20px', whiteSpace: 'nowrap',
                    fontFamily: 'var(--font-body)', fontSize: '11px',
                    letterSpacing: '0.14em', fontWeight: isActive ? 600 : 400,
                    textTransform: 'uppercase',
                    color: isActive ? 'var(--color-primary)' : 'rgba(26,26,26,0.5)',
                    borderBottom: isActive ? '2px solid var(--color-primary)' : '2px solid transparent',
                    marginBottom: '-1px',
                    transition: 'all 0.25s ease',
                  }}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── GALLERY GRID ── */}
        <section style={{
          background: '#FAFAF8', padding: 'var(--space-4xl) var(--space-xl) var(--space-5xl)',
          minHeight: '60vh',
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

            {filtered.length === 0 ? (
              <div style={{ textAlign: 'center', padding: 'var(--space-5xl) 0' }}>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '24px', color: 'rgba(26,26,26,0.35)' }}>
                  No items in this category yet.
                </p>
              </div>
            ) : (
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gridAutoRows: '240px',
                gap: '16px',
              }}>
                {filtered.map((item, i) => (
                  <GalleryCard key={item.id} item={item} index={i} />
                ))}
              </div>
            )}

            {/* Load More */}
            {visibleCount < totalForFilter && (
              <div style={{ textAlign: 'center', marginTop: 'var(--space-4xl)' }}>
                <button
                  onClick={() => setVisibleCount((n) => n + 6)}
                  style={{
                    fontFamily: 'var(--font-body)', fontSize: '11px',
                    letterSpacing: '0.18em', textTransform: 'uppercase',
                    fontWeight: 600, padding: '16px 48px',
                    background: 'none', border: '1px solid rgba(201,168,76,0.5)',
                    color: 'var(--color-primary)', borderRadius: '2px',
                    cursor: 'pointer', transition: 'all 0.25s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--color-primary)';
                    e.currentTarget.style.color = '#fff';
                    e.currentTarget.style.borderColor = 'var(--color-primary)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'none';
                    e.currentTarget.style.color = 'var(--color-primary)';
                    e.currentTarget.style.borderColor = 'rgba(201,168,76,0.5)';
                  }}
                >
                  Load More
                </button>
              </div>
            )}
          </div>
        </section>

        {/* ── CTA STRIP ── */}
        <section style={{
          background: 'var(--color-primary)', padding: 'var(--space-4xl) var(--space-xl)',
          textAlign: 'center',
        }}>
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: '10px', letterSpacing: '0.22em',
            textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: 'var(--space-md)',
          }}>Book Your Event</p>
          <h2 style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: 600, color: '#fff', margin: '0 0 var(--space-xl)',
          }}>
            Your celebration belongs here too.
          </h2>
          <a
            href="/contact"
            style={{
              display: 'inline-block', fontFamily: 'var(--font-body)',
              fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase',
              fontWeight: 600, padding: '16px 48px', textDecoration: 'none',
              background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.4)',
              color: '#fff', borderRadius: '2px', transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.25)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.15)'; }}
          >
            Start Planning
          </a>
        </section>

        <Moment07Departure />
      </main>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes gallery-shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .gallery-shimmer {
          animation: gallery-shimmer 2.4s infinite linear;
        }
        .gallery-card {
          min-height: 240px;
        }
        @media (max-width: 768px) {
          .gallery-card {
            grid-column: span 1 !important;
            grid-row: span 1 !important;
          }
        }
      ` }} />
    </>
  );
}
