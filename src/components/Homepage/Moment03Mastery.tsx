'use client';

import React, { useRef, useEffect, useState } from 'react';
import ButtonSecondary from '../primitives/ButtonSecondary';

export default function Moment03Mastery() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const triggered = useRef(false);

  const [loadVideo, setLoadVideo] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  // Network & Viewport Detection for Performance Optimization
  useEffect(() => {
    setHasMounted(true);
    
    // Check Network Information API
    const conn = (navigator as any).connection;
    const saveData = conn?.saveData;
    const slowConnection = conn?.effectiveType === '2g' || conn?.effectiveType === 'slow-2g';
    const isMobile = window.innerWidth < 768;
    
    // Load video strictly on optimal connections or desktop
    if (!isMobile || (!saveData && !slowConnection)) {
      setLoadVideo(true);
    }
  }, []);

  useEffect(() => {
    // Respect accessibility constraints
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // Initialize pre-animation states using strict easing tokens
    if (videoRef.current) {
      videoRef.current.style.opacity = '0';
      videoRef.current.style.transition = 'opacity 1.5s var(--ease-embassy)';
    }

    if (textRef.current) {
      textRef.current.style.opacity = '0';
      textRef.current.style.transform = 'translateY(24px)';
      textRef.current.style.transition = 'opacity 1.2s var(--ease-heritage) 0.3s, transform 1.2s var(--ease-heritage) 0.3s';
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !triggered.current) {
            triggered.current = true; // One-shot reveal execution
            
            if (videoRef.current) videoRef.current.style.opacity = '1';
            if (textRef.current) {
              textRef.current.style.opacity = '1';
              textRef.current.style.transform = 'translateY(0)';
            }
          }
        });
      },
      { threshold: 0.3 } // Fire when 30% of the element is visible
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section
        id="moment-03-mastery"
        ref={sectionRef}
        className="section section-red-white"
        aria-label="Menu — The Mastery of Craft"
        style={{
          minHeight: '100svh',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
        } as React.CSSProperties}
      >
        <div className="container mastery-grid">
          
          {/* CINEMATIC VIDEO / POSTER FALLBACK PANEL */}
          <div 
            ref={videoRef} 
            className="mastery-video-panel"
            style={{ opacity: 0, willChange: 'opacity' } as React.CSSProperties}
          >
            {hasMounted && loadVideo ? (
              <video
                autoPlay
                loop
                muted
                playsInline
                aria-label="Chef's hands plating a dish"
                poster="/assets/chef-plating-poster.webp"
                style={{
                  width: '100%',
                  aspectRatio: '4/5',
                  objectFit: 'cover',
                  display: 'block',
                  border: '1px solid var(--color-border)', // 1px solid rgba(255,255,255,0.22)
                  boxShadow: 'var(--shadow-deep)', // Deep contrast against the red
                  borderRadius: '4px', // Maximum allowed radius for structural elements
                } as React.CSSProperties}
              >
                <source src="/assets/chef-plating.webm" type="video/webm" />
                <source src="/assets/chef-plating.mp4" type="video/mp4" />
              </video>
            ) : (
              <img
                src="/assets/chef-plating-poster.webp"
                alt="Embassy chef plating a dish — craftsmanship at the kitchen"
                loading="lazy"
                style={{
                  width: '100%',
                  aspectRatio: '4/5',
                  objectFit: 'cover',
                  display: 'block',
                  border: '1px solid var(--color-border)',
                  boxShadow: 'var(--shadow-deep)',
                  borderRadius: '4px',
                } as React.CSSProperties}
              />
            )}
          </div>

          {/* CURATED EDITORIAL PANEL */}
          <div 
            ref={textRef} 
            className="mastery-text-panel"
            style={{ opacity: 0 } as React.CSSProperties}
          >
            <div style={{ maxWidth: '420px', margin: '0 auto' } as React.CSSProperties}>
              
              <span 
                className="type-eyebrow" 
                style={{ color: 'rgba(255, 255, 255, 0.86)' } as React.CSSProperties}
              >
                Menu
              </span>

              <h2 
                className="type-h2" 
                style={{ 
                  color: 'var(--color-white)', 
                  marginTop: 'var(--space-lg)' 
                } as React.CSSProperties}
              >
                Recipes carried forward by memory.
              </h2>

              <p 
                className="type-editorial" 
                style={{ 
                  color: 'rgba(255, 255, 255, 0.92)', 
                  marginTop: 'var(--space-xl)' 
                } as React.CSSProperties}
              >
                Our chefs do not follow recipes. They carry forward the flavours that made
                The Embassy Restaurant the talk of Connaught Place for three decades —
                passed from generation to generation, plated as it has always been plated.
              </p>

              <ButtonSecondary
                href="/menu"
                theme="dark"
                style={{
                  marginTop: 'var(--space-2xl)',
                }}
              >
                Explore our Menu →
              </ButtonSecondary>

            </div>
          </div>
        </div>
      </section>

      {/* REACT-SAFE STYLESHEET (Handles Grid Responsiveness & Whitespace) */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .mastery-grid {
              display: grid;
              grid-template-columns: 1fr 1fr;
              align-items: center;
              min-height: 100svh;
            }

            .mastery-video-panel {
              padding: var(--space-4xl);
            }

            .mastery-text-panel {
              display: flex;
              flex-direction: column;
              justify-content: center;
              padding: var(--space-3xl) var(--space-2xl);
            }

            @media (max-width: 900px) {
              .mastery-grid {
                grid-template-columns: 1fr;
                gap: var(--space-lg);
              }

              .mastery-video-panel {
                padding: var(--space-xl) 0 0 0;
                max-width: 500px;
                margin: 0 auto;
                width: 100%;
              }

              .mastery-text-panel {
                padding: var(--space-xl) 0;
                text-align: center;
              }

              .mastery-text-panel .underline-draw {
                margin-left: auto;
                margin-right: auto;
              }
            }
          `,
        }}
      />
    </>
  );
}