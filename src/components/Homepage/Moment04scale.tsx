// EMBASSY CATERING — src/components/Homepage/Moment04scale.tsx — Redesigned Premium Editorial Layout
'use client';

import React, { useRef, useEffect } from 'react';

// Premium storytelling data structures replacing generic stats
const STATS = [
  { 
    number: 75, 
    suffix: '+', 
    label: 'Years of Heritage',
    description: 'Established in 1948 in the heart of Connaught Place, defining the benchmark of luxury hospitality for generations.'
  },
  { 
    number: 10, 
    suffix: 'M+', 
    label: 'Guests Served',
    description: 'Hosting dignitaries, royalty, and families of distinction, each event executed with absolute culinary and service precision.'
  },
  { 
    number: 50000, 
    suffix: '+', 
    label: 'Grand Celebrations',
    description: 'From intimate diplomatic dinners to majestic weddings, transforming spaces and moments into legacy memories.'
  },
];

export default function Moment04Scale() {
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<(HTMLDivElement | null)[]>([]);
  const triggered = useRef(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // 1. Initial State Preparation
    statsRef.current.forEach((el, i) => {
      if (!el) return;
      if (!reduceMotion) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `
          opacity 1.5s var(--ease-embassy) ${i * 0.2}s,
          transform 1.5s var(--ease-embassy) ${i * 0.2}s
        `;
      }
    });

    // 2. Cinematic Intersection Reveal
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !triggered.current) {
            triggered.current = true; // One-shot execution
            
            statsRef.current.forEach((el, i) => {
              if (!el) return;
              
              // Trigger structural reveal
              requestAnimationFrame(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
              });

              // Trigger numerical count up with slight delay to sync with physical reveal
              setTimeout(() => {
                const numEl = el.querySelector('.stat-number') as HTMLElement;
                const stat = STATS[i];
                if (numEl && !reduceMotion) {
                  animateCount(numEl, stat.number, stat.suffix, 2400); // 2.4s count duration
                } else if (numEl && reduceMotion) {
                  // Fallback for accessibility
                  numEl.textContent = `${stat.number.toLocaleString('en-US')}${stat.suffix}`;
                }
              }, (i * 200) + 100); 
            });
          }
        });
      },
      { threshold: 0.25 } // Fire when 25% visible
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section
        id="moment-04-scale"
        ref={sectionRef}
        className="section section-white-red"
        aria-label="The Embassy by numbers"
        style={{
          minHeight: '100svh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          backgroundColor: 'var(--color-white)',
        } as React.CSSProperties}
      >
        <div className="scale-staggered-container">
          {STATS.map((stat, i) => (
            <div 
              key={stat.label} 
              ref={el => { statsRef.current[i] = el; }} 
              className="stat-card-staggered"
              style={{ 
                opacity: 0, 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'flex-start',
                textAlign: 'left',
              } as React.CSSProperties}
            >
              {/* THE GIANT NUMBER */}
              <div
                className="stat-number type-stat"
                aria-label={`${stat.number}${stat.suffix}`}
                style={{
                  color: 'var(--color-primary)',
                  marginBottom: 'var(--space-sm)',
                } as React.CSSProperties}
              >
                0{stat.suffix}
              </div>

              {/* EYEBROW LABEL */}
              <div
                className="type-eyebrow"
                style={{
                  color: 'var(--color-primary)',
                  fontWeight: 700,
                  marginBottom: 'var(--space-md)',
                } as React.CSSProperties}
              >
                {stat.label}
              </div>

              {/* STAT DESCRIPTION */}
              <p
                className="type-body"
                style={{
                  color: 'var(--color-text-muted)',
                  fontSize: '14px',
                  lineHeight: 1.6,
                  maxWidth: '30ch',
                } as React.CSSProperties}
              >
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* REACT-SAFE STYLESHEET (Handles staggered asymmetrical visual rhythm) */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .scale-staggered-container {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              gap: var(--space-4xl);
              width: 100%;
              max-width: var(--container-max);
              padding: var(--space-6xl) var(--space-3xl);
              margin: 0 auto;
              align-items: start;
            }

            /* Descending staggered visual rhythm */
            .stat-card-staggered:nth-child(2) {
              margin-top: 80px;
            }
            
            .stat-card-staggered:nth-child(3) {
              margin-top: 160px;
            }

            @media (max-width: 900px) {
              .scale-staggered-container {
                grid-template-columns: 1fr !important;
                gap: var(--space-4xl);
                padding: var(--space-4xl) var(--space-lg);
              }
              
              .stat-card-staggered {
                margin-top: 0 !important;
                align-items: center !important;
                text-align: center !important;
                padding-bottom: var(--space-3xl);
                border-bottom: 1px solid rgba(177, 18, 38, 0.08);
              }
              
              .stat-card-staggered:last-child {
                border-bottom: none;
                padding-bottom: 0;
              }
            }
          `,
        }}
      />
    </>
  );
}

/**
 * Performant numerical counter with hardware-synced RAF tick
 * Handles thousands separators for premium data display
 */
function animateCount(el: HTMLElement, target: number, suffix: string, duration: number) {
  const start = performance.now();
  
  const tick = (now: number) => {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    
    // Custom exponential easing for a dramatic slow-down at the end
    const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
    const current = Math.floor(target * ease);
    
    // Ensure large numbers (like 50000) are formatted beautifully (50,000)
    const formattedNum = current.toLocaleString('en-US');
    
    el.textContent = `${formattedNum}${suffix}`;
    
    if (progress < 1) {
      requestAnimationFrame(tick);
    } else {
      // Force exact target on completion to prevent rounding anomalies
      el.textContent = `${target.toLocaleString('en-US')}${suffix}`;
    }
  };
  
  requestAnimationFrame(tick);
}