// EMBASSY CATERING — src/components/Homepage/Moment02Whisper.tsx — Optimized June 8, 2026
'use client';

import React, { useRef, useEffect } from 'react';

export default function Moment02Whisper() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const triggered = useRef(false);

  useEffect(() => {
    // Respect accessibility settings
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // Initial state setup using strict architecture tokens
    if (imageWrapRef.current) {
      imageWrapRef.current.style.clipPath = 'inset(100% 0% 0% 0%)';
      imageWrapRef.current.style.transition = 'clip-path 1.8s var(--ease-embassy)';
    }

    if (textRef.current) {
      textRef.current.style.opacity = '0';
      textRef.current.style.transform = 'translateY(24px)';
      textRef.current.style.transition = 'opacity 1.2s var(--ease-heritage) 0.3s, transform 1.2s var(--ease-heritage) 0.3s';
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !triggered.current) {
            triggered.current = true; // One-shot reveal execution
            
            if (imageWrapRef.current) {
              imageWrapRef.current.style.clipPath = 'inset(0% 0% 0% 0%)';
            }
            if (textRef.current) {
              textRef.current.style.opacity = '1';
              textRef.current.style.transform = 'translateY(0)';
            }
          }
        });
      },
      { threshold: 0.35 } // Trigger when 35% visible per guidelines
    );

    if (sectionRef.current) observerRef.current.observe(sectionRef.current);
    
    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <>
      <section
        id="moment-02-whisper"
        ref={sectionRef}
        className="section section-white-red"
        style={{
          minHeight: '100svh',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
        } as React.CSSProperties}
      >
        <div className="container whisper-grid">
          
          {/* TEXT PANEL */}
          <div 
            ref={textRef} 
            className="whisper-text-panel"
            style={{ opacity: 0 } as React.CSSProperties}
          >
            <h2
              className="type-h1"
              style={{
                fontStyle: 'italic',
                color: 'var(--color-primary)',
                textWrap: 'balance',
              } as React.CSSProperties}
            >
              Since 1948.
            </h2>

            {/* DECORATIVE DATA POINTS */}
            <div 
              style={{ 
                display: 'flex', 
                flexWrap: 'wrap',
                gap: 'var(--space-sm)',
                marginTop: 'var(--space-md)',
                marginBottom: 'var(--space-lg)',
              } as React.CSSProperties}
            >
              {['75+ Years', '10M+ Guests', 'Times Food Award'].map((stat, i) => (
                <React.Fragment key={stat}>
                  {i > 0 && (
                    <span style={{ color: 'var(--color-primary)', opacity: 0.4 }}>•</span>
                  )}
                  <span 
                    className="type-eyebrow"
                    style={{ 
                      color: 'var(--color-primary)',
                      letterSpacing: '0.22em',
                    } as React.CSSProperties}
                  >
                    {stat}
                  </span>
                </React.Fragment>
              ))}
            </div>

            <p
              className="type-body-large"
              style={{ 
                color: 'var(--color-text-muted)',
                maxWidth: '55ch',
                marginTop: 'var(--space-md)',
                lineHeight: 1.7,
              } as React.CSSProperties}
            >
              Delhi's first luxury caterer, orchestrating grand culinary narratives for weddings, diplomatic galas, and generational landmarks across Connaught Place and Delhi NCR.
            </p>
          </div>

          {/* IMAGE REVEAL PANEL */}
          <div
            ref={imageWrapRef}
            style={{
              position: 'relative',
              clipPath: 'inset(100% 0% 0% 0%)',
              maxHeight: '80vh',
              overflow: 'hidden',
              backgroundColor: 'rgba(163,0,0,0.08)', // Failsafe for missing image per instructions
              border: '1px solid rgba(177, 18, 38, 0.12)',
              boxShadow: 'var(--shadow-white)', // Using white shadow token because background is white
              borderRadius: '0px', // Sharp edges signal premium
            } as React.CSSProperties}
          >
            <img
              src="/assets/legacy-hero.webp"
              alt="Connaught Place circa 1948"
              loading="lazy"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                maxHeight: '80vh',
                display: 'block',
                // Subtle vintage processing
                filter: 'sepia(0.15) contrast(1.08)', 
              } as React.CSSProperties}
            />
          </div>
          
        </div>
      </section>

      {/* REACT-SAFE STYLESHEET (Handles Grid Responsiveness & Spacing) */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .whisper-grid {
              display: grid;
              grid-template-columns: 40% 60%;
              gap: var(--space-3xl);
              align-items: center;
            }

            .whisper-text-panel {
              padding-right: var(--space-2xl); /* 48px breathing room */
            }

            @media (max-width: 900px) {
              .whisper-grid {
                grid-template-columns: 1fr;
                gap: var(--space-4xl);
              }

              .whisper-text-panel {
                padding-right: 0;
                text-align: center;
              }

              .whisper-text-panel div {
                justify-content: center;
              }
            }
          `,
        }}
      />
    </>
  );
}