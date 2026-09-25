// EMBASSY CATERING — src/components/Homepage/Hero.tsx — Optimized 2026-06-13
'use client';

import React, { useEffect, useRef, useState } from 'react';
import ScriptEyebrow from '../primitives/ScriptEyebrow';
import EmberParticles from '../ui/EmberParticles';
import ButtonPrimary from '../primitives/ButtonPrimary';
import ButtonSecondary from '../primitives/ButtonSecondary';

export default function Hero() {
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const trustRef = useRef<HTMLDivElement>(null);

  const [loadVideo, setLoadVideo] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    
    // Check Network Information API for Data Saver or 2G connections
    const conn = (navigator as any).connection;
    const saveData = conn?.saveData;
    const slowConnection = conn?.effectiveType === '2g' || conn?.effectiveType === 'slow-2g';
    const isMobile = window.innerWidth < 768;
    
    // Load video on desktop always; on mobile only if connection is optimal
    if (!isMobile || (!saveData && !slowConnection)) {
      // Delay video load by 2.5 seconds to prevent thread blocking on initial render
      const timer = setTimeout(() => {
        setLoadVideo(true);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches)
      return;

    const ease = 'cubic-bezier(0.16,1,0.3,1)';

    const animate = (
      el: HTMLElement | null,
      delay: number,
      styles: Partial<CSSStyleDeclaration>,
      duration = '1s'
    ) => {
      if (!el) return;

      el.style.opacity = '0';

      setTimeout(() => {
        el.style.transition = `all ${duration} ${ease}`;
        Object.assign(el.style, styles);
      }, delay);
    };

    animate(
      eyebrowRef.current,
      500,
      {
        opacity: '1',
        transform: 'translateY(0px)',
      },
      '1.1s'
    );

    animate(
      taglineRef.current,
      1700,
      {
        opacity: '1',
      },
      '1s'
    );

    animate(
      ctaRef.current,
      2200,
      {
        opacity: '1',
        transform: 'translateY(0px)',
      },
      '1s'
    );

    animate(
      trustRef.current,
      2500,
      {
        opacity: '1',
        transform: 'translateY(0px)',
      },
      '1s'
    );

    const line1 = line1Ref.current?.querySelector('.line-inner') as HTMLElement;
    const line2 = line2Ref.current?.querySelector('.line-inner') as HTMLElement;

    if (line1) {
      line1.style.transform = 'translateY(120%)';
      setTimeout(() => {
        line1.style.transition = 'transform 1.4s ' + ease;
        line1.style.transform = 'translateY(0)';
      }, 800);
    }

    if (line2) {
      line2.style.transform = 'translateY(120%)';
      setTimeout(() => {
        line2.style.transition = 'transform 1.4s ' + ease;
        line2.style.transform = 'translateY(0)';
      }, 1200);
    }
  }, []);

  return (
    <section
      id="moment-01-arrival"
      aria-label="Hero — The Embassy Catering"
      style={{
        position: 'relative',
        width: '100%',
        height: '100svh',
        minHeight: '760px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#000',
      }}
    >
      {/* BACKGROUND LAYER: VIDEO OR POSTER FALLBACK */}
      {hasMounted && loadVideo ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/assets/hero-bg-poster.webp"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
            filter: 'brightness(0.38) contrast(1.08) saturate(0.95)',
            transform: 'scale(1.04)',
          }}
        >
          <source src="/assets/hero-bg.webm" type="video/webm" />
          <source src="/assets/hero-bg.mp4" type="video/mp4" />
        </video>
      ) : (
        <img
          src="/assets/hero-bg-poster.webp"
          alt="The Embassy Catering Event Atmosphere"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
            filter: 'brightness(0.38) contrast(1.08) saturate(0.95)',
            transform: 'scale(1.04)',
          }}
          loading="eager"
        />
      )}

      {/* DARK OVERLAY */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.66), rgba(0,0,0,0.32), rgba(0,0,0,0.78))',
          zIndex: 1,
        }}
      />

      {/* RED GLOW */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at center, rgba(163,0,0,0.24), transparent 72%)',
          mixBlendMode: 'screen',
          zIndex: 2,
        }}
      />

      <EmberParticles />

      {/* CONTENT */}
      <div
        id="hero-content"
        style={{
          position: 'relative',
          zIndex: 20,
          width: '100%',
          maxWidth: '1280px',
          padding: '0 var(--space-xl)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        {/* EST */}
        <div
          ref={eyebrowRef}
          style={{
            opacity: 0,
            transform: 'translateY(10px)',
          }}
        >
          <ScriptEyebrow text="Est. 1948" animate color="var(--color-gold, #C9A84C)" />
        </div>

        {/* LINE 1 */}
        <div
          ref={line1Ref}
          style={{
            overflow: 'hidden',
            marginTop: 26,
          }}
        >
          <div
            className="line-inner"
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'clamp(36px, 8vw, 118px)',
              lineHeight: 0.92,
              letterSpacing: '-0.05em',
              color: '#FFFFFF',
              textShadow: '0 12px 50px rgba(0,0,0,0.58)',
              textWrap: 'balance',
            }}
          >
            Every Celebration
          </div>
        </div>

        {/* LINE 2 */}
        <div
          ref={line2Ref}
          style={{
            overflow: 'hidden',
          }}
        >
          <div
            className="line-inner"
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontWeight: 700,
              fontSize: 'clamp(36px, 8vw, 118px)',
              lineHeight: 0.92,
              letterSpacing: '-0.05em',
              color: '#FFFFFF',
              textShadow: '0 12px 50px rgba(0,0,0,0.58)',
              textWrap: 'balance',
            }}
          >
            Carries a Legacy!
          </div>
        </div>

        {/* TAGLINE */}
        <div
          ref={taglineRef}
          style={{
            opacity: 0,
            marginTop: 36,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 16,
            flexWrap: 'wrap',
          }}
        >
          {['Luxury Multi-Cuisine Catering', 'Since 1948'].map((item, i) => (
            <React.Fragment key={item}>
              {i > 0 && (
                <span
                  style={{
                    width: 5,
                    height: 5,
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.72)',
                  }}
                />
              )}

              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 700,
                  fontSize: 12,
                  letterSpacing: '0.26em',
                  textTransform: 'uppercase',
                  color: '#FFFFFF',
                }}
              >
                {item}
              </span>
            </React.Fragment>
          ))}
        </div>

        {/* BUTTONS */}
        <div
          ref={ctaRef}
          style={{
            opacity: 0,
            transform: 'translateY(12px)',
            marginTop: 54,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 18,
            flexWrap: 'wrap',
          }}
        >
          <ButtonPrimary href="/contact">
            Plan Your Celebration
          </ButtonPrimary>
          <ButtonSecondary href="/events/corporate" theme="dark">
            Corporate Events →
          </ButtonSecondary>
          <ButtonSecondary href="/legacy" theme="dark">
            View Our Legacy →
          </ButtonSecondary>
        </div>
      </div>

      {/* TRUST STRIP */}
      <div
        ref={trustRef}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          height: 58,
          background: 'rgba(255,255,255,0.96)',
          borderTop: '1px solid rgba(163,0,0,0.12)',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          opacity: 0,
          transform: 'translateY(100%)',
          zIndex: 30,
        }}
      >
        <div className="luxury-marquee-track">
          {[
            'Best Caterer Delhi NCR',
            'Times Food Award',
            'Embassy Restaurant',
            '10,000,000+ Guests Served',
            '75+ Years of Excellence',
            'Best Caterer Delhi NCR',
            'Times Food Award',
            'Embassy Restaurant',
            '10,000,000+ Guests Served',
            '75+ Years of Excellence',
          ].map((item, i) => (
            <React.Fragment key={i}>
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 700,
                  fontSize: 11,
                  letterSpacing: '0.24em',
                  textTransform: 'uppercase',
                  color: 'var(--color-red-premium)',
                  whiteSpace: 'nowrap',
                }}
              >
                {item}
              </span>

              <span
                style={{
                  color: 'rgba(163,0,0,0.48)',
                  fontSize: 16,
                }}
              >
                •
              </span>
            </React.Fragment>
          ))}
        </div>
      </div>

      <style jsx>{`
        .luxury-marquee-track {
          display: flex;
          align-items: center;
          gap: 44px;
          width: max-content;
          padding-left: 44px;
          animation: luxuryMarquee 18s linear infinite;
        }

        @keyframes luxuryMarquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 900px) {
          #moment-01-arrival a {
            width: 100% !important;
          }
        }
        
        /* Mobile Performance Spacing Override */
        @media (max-width: 600px) {
          #hero-content {
            padding: 0 var(--space-lg) !important;
          }
        }
      `}</style>
    </section>
  );
}