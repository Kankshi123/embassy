'use client';
// EMBASSY CATERING — src/components/shared/MenuFlipSection.tsx
// Reusable flip-card menu section. Used on homepage (variant="homepage") and menu page (variant="full").

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import SampleMenuCard from './SampleMenuCard';
import { FEATURED_STATIONS, ALL_STATIONS, type MenuStation } from '@/data/menuStations';

interface MenuFlipSectionProps {
  variant: 'homepage' | 'full';
  extra?: React.ReactNode;
}

// ─── Flip Card ──────────────────────────────────────────────────────────────

function FlipCard({ station, index }: { station: MenuStation; index: number }) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('mfs-visible');
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const vegDishes = station.dishes.filter((d) => d.isVeg);
  const nonVegDishes = station.dishes.filter((d) => !d.isVeg);

  return (
    <div
      ref={wrapperRef}
      className="mfs-wrapper"
      style={{ '--stagger': index } as React.CSSProperties}
      tabIndex={0}
      role="article"
      aria-label={`${station.name} — flip to see dishes`}
    >
      <div className="mfs-card">

        {/* ── FRONT FACE ── */}
        <div className="mfs-front" aria-hidden="false">
          {/* Background Image */}
          <img
            src={station.image}
            alt={station.name}
            className="mfs-front-bg"
            loading="lazy"
            decoding="async"
          />

          {/* Gradient Overlay */}
          <div className="mfs-front-overlay" />

          {/* LIVE badge */}
          {station.isLive && (
            <div className="mfs-live-badge">
              <span className="mfs-live-dot" />
              LIVE
            </div>
          )}

          {/* Bottom content */}
          <div className="mfs-front-content">
            {/* Decorative gold line */}
            <div className="mfs-gold-rule" />
            <p className="mfs-front-tagline">{station.tagline}</p>
            <h3 className="mfs-front-name">{station.name}</h3>
            <p className="mfs-flip-hint">Hover to explore dishes</p>
          </div>

          {/* Corner ornament */}
          <div className="mfs-corner-tl" />
          <div className="mfs-corner-br" />
        </div>

        {/* ── BACK FACE ── */}
        <div className="mfs-back" aria-hidden="true">
          <div className="mfs-back-inner">
            {/* Header */}
            <div className="mfs-back-header">
              <p className="mfs-back-eyebrow">
                {station.isLive ? '🔴 LIVE STATION' : station.isInteractive ? '⚡ INTERACTIVE' : '✦ FROM THE KITCHEN'}
              </p>
              <h3 className="mfs-back-name">{station.name}</h3>
              <div className="mfs-back-divider" />
            </div>

            {/* Dishes */}
            <div className="mfs-dishes-scroll">
              {nonVegDishes.length > 0 && (
                <div className="mfs-dish-group">
                  <p className="mfs-dish-label">Non-Veg</p>
                  {nonVegDishes.map((dish) => (
                    <div key={dish.name} className="mfs-dish-item">
                      <span className="mfs-dish-dot mfs-dot-nonveg" />
                      <span className="mfs-dish-name">{dish.name}</span>
                      {dish.note && <span className="mfs-dish-note">{dish.note}</span>}
                    </div>
                  ))}
                </div>
              )}

              {vegDishes.length > 0 && (
                <div className="mfs-dish-group">
                  <p className="mfs-dish-label">Vegetarian</p>
                  {vegDishes.map((dish) => (
                    <div key={dish.name} className="mfs-dish-item">
                      <span className="mfs-dish-dot mfs-dot-veg" />
                      <span className="mfs-dish-name">{dish.name}</span>
                      {dish.note && <span className="mfs-dish-note">{dish.note}</span>}
                    </div>
                  ))}
                </div>
              )}

              {station.accompaniments && station.accompaniments.length > 0 && (
                <div className="mfs-accompaniments">
                  <p className="mfs-dish-label">Accompaniments</p>
                  <p className="mfs-acc-list">{station.accompaniments.join(' · ')}</p>
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

// ─── Rotating headline ───────────────────────────────────────────────────────

const ROTATING_TITLES = [
  { lead: 'From Our', accent: 'Kitchens' },
  { lead: 'To Your', accent: 'Hearts' },
];

function RotatingTitle() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % ROTATING_TITLES.length), 3200);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="mfs-rotator">
      {ROTATING_TITLES.map((t, i) => (
        <span
          key={t.accent}
          className={`mfs-rotator-line${i === index ? ' is-active' : ''}`}
          aria-hidden={i !== index}
        >
          {t.lead} <em>{t.accent}</em>
        </span>
      ))}
    </span>
  );
}

// ─── Section ─────────────────────────────────────────────────────────────────

export default function MenuFlipSection({ variant, extra }: MenuFlipSectionProps) {
  const stations: MenuStation[] = variant === 'homepage' ? FEATURED_STATIONS : ALL_STATIONS;
  const isHomepage = variant === 'homepage';

  return (
    <section
      id={isHomepage ? 'menu-preview' : 'menu-stations'}
      className="mfs-section"
      aria-label={isHomepage ? 'Menu preview' : 'Full menu stations'}
    >
      {/* Section Header */}
      <div className="mfs-header">
        <p className="mfs-eyebrow">
          {isHomepage ? 'Crafted with Precision' : 'Every Station. Every Dish.'}
        </p>
        <h2 className="mfs-title">
          {isHomepage ? (
            <RotatingTitle />
          ) : (
            <>Experiential <em>Culinary</em> Stations</>
          )}
        </h2>
        <p className="mfs-subtitle">
          {isHomepage
            ? 'Eight iconic stations from the Embassy kitchen — each a world of flavour. Hover to explore the dishes within.'
            : 'Every station from our menu — live interactive counters, regional classics, and signature creations. Hover each card to discover the dishes within.'}
        </p>
      </div>

      {/* Grid */}
      <div
        className="mfs-grid"
        style={{
          gridTemplateColumns: isHomepage
            ? 'repeat(4, 1fr)'
            : 'repeat(4, 1fr)',
        }}
      >
        {stations.map((station, i) => (
          <FlipCard key={station.id} station={station} index={i} />
        ))}
        <SampleMenuCard index={stations.length} />
      </div>

      {extra}

      {/* Homepage CTA */}
      {isHomepage && (
        <div className="mfs-cta-row">
          <Link href="/menu" className="mfs-cta-link">
            <span>Explore the Full Menu</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
          <p className="mfs-cta-sub">50+ cuisines · 6,000+ dishes · 15+ live stations</p>
        </div>
      )}

      {/* ── STYLES ── */}
      <style dangerouslySetInnerHTML={{ __html: `
        /* ─ Section ─ */
        .mfs-section {
          background: var(--section-red-bg);
          padding: var(--space-5xl) var(--space-xl);
          position: relative;
          overflow: hidden;
        }
        .mfs-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255,255,255,0.05) 0%, transparent 70%);
          pointer-events: none;
        }

        /* ─ Header ─ */
        .mfs-header {
          text-align: center;
          max-width: 640px;
          margin: 0 auto var(--space-4xl);
          position: relative;
          z-index: 1;
        }
        .mfs-eyebrow {
          font-family: var(--font-body);
          font-size: 10px;
          letter-spacing: 0.26em;
          text-transform: uppercase;
          color: var(--color-gold);
          margin-bottom: var(--space-md);
        }
        .mfs-title {
          font-family: var(--font-display);
          font-size: clamp(36px, 5vw, 64px);
          font-weight: 400;
          color: #FFFFFF;
          line-height: 1.1;
          margin-bottom: var(--space-lg);
        }
        .mfs-rotator {
          display: grid;
        }
        .mfs-rotator-line {
          grid-area: 1 / 1;
          opacity: 0;
          transform: translateY(14px);
          filter: blur(4px);
          transition: opacity 0.9s var(--ease-embassy), transform 0.9s var(--ease-embassy), filter 0.9s var(--ease-embassy);
          pointer-events: none;
        }
        .mfs-rotator-line.is-active {
          opacity: 1;
          transform: translateY(0);
          filter: blur(0);
        }
        @media (prefers-reduced-motion: reduce) {
          .mfs-rotator-line { transition: opacity 0.3s linear; transform: none; filter: none; }
        }
        .mfs-title em {
          font-style: italic;
          color: var(--color-gold);
        }
        .mfs-subtitle {
          font-family: var(--font-body);
          font-size: 15px;
          color: rgba(255,255,255,0.75);
          line-height: 1.8;
          font-weight: 400;
        }

        /* ─ Grid ─ */
        .mfs-grid {
          display: grid;
          gap: 12px;
          max-width: 1280px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        /* ─ Wrapper (scroll-stagger entry) ─ */
        .mfs-wrapper {
          perspective: 1200px;
          aspect-ratio: 3 / 4;
          opacity: 0;
          transform: translateY(32px);
          transition:
            opacity 0.65s var(--ease-embassy),
            transform 0.65s var(--ease-embassy);
          transition-delay: calc(var(--stagger) * 0.07s);
          outline: none;
        }
        .mfs-wrapper.mfs-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* ─ Flip Card ─ */
        .mfs-card {
          width: 100%;
          height: 100%;
          position: relative;
          transform-style: preserve-3d;
          transition: transform 0.68s cubic-bezier(0.65, 0, 0.35, 1);
          cursor: pointer;
        }
        .mfs-wrapper:hover .mfs-card,
        .mfs-wrapper:focus-within .mfs-card {
          transform: rotateY(180deg);
        }

        /* ─ Shared face styles ─ */
        .mfs-front,
        .mfs-back {
          position: absolute;
          inset: 0;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          border-radius: 0;
          overflow: hidden;
        }

        /* ─ Front ─ */
        .mfs-front {
          border: 1px solid rgba(201,168,76,0.2);
        }
        .mfs-front-bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.68s var(--ease-embassy), filter 0.68s ease;
          filter: brightness(0.55) saturate(0.9);
        }
        .mfs-wrapper:hover .mfs-front-bg {
          transform: scale(1.04);
          filter: brightness(0.35) saturate(0.7);
        }
        .mfs-front-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(13,5,5,0.95) 0%,
            rgba(13,5,5,0.4) 45%,
            transparent 70%
          );
          pointer-events: none;
        }

        /* LIVE badge */
        .mfs-live-badge {
          position: absolute;
          top: 14px;
          right: 14px;
          display: flex;
          align-items: center;
          gap: 5px;
          background: rgba(177,18,38,0.85);
          border: 1px solid rgba(201,168,76,0.4);
          padding: 4px 8px;
          font-family: var(--font-body);
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.18em;
          color: #FFFFFF;
        }
        .mfs-live-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #FFFFFF;
          animation: mfs-pulse 1.6s ease-in-out infinite;
        }
        @keyframes mfs-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.7); }
        }

        /* Front bottom content */
        .mfs-front-content {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: var(--space-xl) var(--space-lg) var(--space-lg);
        }
        .mfs-gold-rule {
          width: 28px;
          height: 1px;
          background: var(--color-gold);
          margin-bottom: var(--space-sm);
          opacity: 0.7;
        }
        .mfs-front-tagline {
          font-family: var(--font-body);
          font-size: 10px;
          letter-spacing: 0.14em;
          color: rgba(201,168,76,0.8);
          text-transform: uppercase;
          margin-bottom: var(--space-xs);
        }
        .mfs-front-name {
          font-family: var(--font-display);
          font-size: clamp(17px, 1.6vw, 22px);
          font-weight: 600;
          color: #FFFFFF;
          line-height: 1.2;
          margin-bottom: var(--space-sm);
        }
        .mfs-flip-hint {
          font-family: var(--font-body);
          font-size: 9px;
          letter-spacing: 0.1em;
          color: rgba(255,255,255,0.35);
          text-transform: uppercase;
          transition: opacity 0.3s;
        }
        .mfs-wrapper:hover .mfs-flip-hint {
          opacity: 0;
        }

        /* Corner ornaments */
        .mfs-corner-tl,
        .mfs-corner-br {
          position: absolute;
          width: 16px;
          height: 16px;
          pointer-events: none;
        }
        .mfs-corner-tl {
          top: 10px;
          left: 10px;
          border-top: 1px solid rgba(201,168,76,0.4);
          border-left: 1px solid rgba(201,168,76,0.4);
        }
        .mfs-corner-br {
          bottom: 10px;
          right: 10px;
          border-bottom: 1px solid rgba(201,168,76,0.4);
          border-right: 1px solid rgba(201,168,76,0.4);
        }

        /* ─ Back ─ */
        .mfs-back {
          transform: rotateY(180deg);
          background: rgba(90, 0, 0, 0.97);
          border: 1px solid rgba(201,168,76,0.45);
        }
        .mfs-back-inner {
          position: absolute;
          inset: 0;
          padding: var(--space-lg);
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        .mfs-back-header {
          flex-shrink: 0;
          margin-bottom: var(--space-md);
        }
        .mfs-back-eyebrow {
          font-family: var(--font-body);
          font-size: 9px;
          letter-spacing: 0.18em;
          color: var(--color-gold);
          text-transform: uppercase;
          margin-bottom: var(--space-xs);
        }
        .mfs-back-name {
          font-family: var(--font-display);
          font-size: clamp(15px, 1.4vw, 20px);
          font-weight: 600;
          color: #FFFFFF;
          line-height: 1.2;
          margin-bottom: var(--space-md);
        }
        .mfs-back-divider {
          height: 1px;
          background: linear-gradient(to right, rgba(201,168,76,0.8), transparent);
        }

        /* Dishes scroll area */
        .mfs-dishes-scroll {
          flex: 1;
          overflow-y: auto;
          scrollbar-width: thin;
          scrollbar-color: rgba(201,168,76,0.3) transparent;
          margin-top: var(--space-md);
        }
        .mfs-dish-group {
          margin-bottom: var(--space-md);
        }
        .mfs-dish-label {
          font-family: var(--font-body);
          font-size: 8px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
          margin-bottom: var(--space-xs);
        }
        .mfs-dish-item {
          display: flex;
          align-items: flex-start;
          gap: 6px;
          margin-bottom: 5px;
        }
        .mfs-dish-dot {
          width: 5px;
          height: 5px;
          border-radius: 1px;
          flex-shrink: 0;
          margin-top: 4px;
        }
        .mfs-dot-nonveg { background: #C9A84C; }
        .mfs-dot-veg { background: #4CAF50; }
        .mfs-dish-name {
          font-family: var(--font-body);
          font-size: 11px;
          color: rgba(255,255,255,0.82);
          line-height: 1.4;
        }
        .mfs-dish-note {
          font-family: var(--font-body);
          font-size: 9px;
          color: rgba(201,168,76,0.6);
          display: block;
          font-style: italic;
        }
        .mfs-accompaniments {
          margin-top: var(--space-sm);
          padding-top: var(--space-sm);
          border-top: 1px solid rgba(255,255,255,0.07);
        }
        .mfs-acc-list {
          font-family: var(--font-body);
          font-size: 10px;
          color: rgba(255,255,255,0.42);
          line-height: 1.6;
        }

        /* ─ CTA Row ─ */
        .mfs-cta-row {
          text-align: center;
          margin-top: var(--space-4xl);
          position: relative;
          z-index: 1;
        }
        .mfs-cta-link {
          display: inline-flex;
          align-items: center;
          gap: var(--space-sm);
          font-family: var(--font-body);
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #0D0505;
          text-decoration: none;
          border: 2px solid var(--color-gold);
          background: var(--color-gold);
          padding: 18px 44px;
          transition: all 0.38s var(--ease-embassy);
        }
        .mfs-cta-link:hover {
          background: transparent;
          color: var(--color-gold);
          border-color: var(--color-gold);
          gap: 14px;
        }
        .mfs-cta-sub {
          margin-top: var(--space-lg);
          font-family: var(--font-body);
          font-size: 12px;
          letter-spacing: 0.14em;
          color: rgba(255,255,255,0.55);
          text-transform: uppercase;
          font-weight: 500;
        }

        /* ─ Responsive ─ */
        @media (max-width: 1200px) {
          .mfs-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 900px) {
          .mfs-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .mfs-section { padding: var(--space-3xl) var(--space-lg); }
        }
        @media (max-width: 520px) {
          .mfs-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 8px; }
          .mfs-front-name { font-size: 14px; }
          .mfs-dish-name { font-size: 10px; }
          .mfs-back-inner { padding: var(--space-md); }
        }

        /* ─ Touch device: tap instead of hover ─ */
        @media (hover: none) {
          .mfs-flip-hint { display: none; }
          .mfs-wrapper:active .mfs-card { transform: rotateY(180deg); }
        }
      ` }} />
    </section>
  );
}
