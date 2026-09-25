// EMBASSY CATERING — src/components/Homepage/Moment05Evidence.tsx — Optimized June 8, 2026
'use client';

import React, { useRef, useEffect, useState } from 'react';

// Added dynamic carousel array per Phase 0 architectural instructions
const TESTIMONIALS = [
  {
    line1: "Piping hot food at four in the morning.",
    line2: "And that too — with a smile.",
    name: "Shradha",
    event: "Wedding Reception · 2023",
  },
  {
    line1: "Every dish tasted like a memory.",
    line2: "Flawless execution from start to finish.",
    name: "The Oberoi Family",
    event: "Sangeet Ceremony · 2024",
  },
  {
    line1: "The definition of aristocratic restraint.",
    line2: "A masterclass in luxury catering.",
    name: "Ananya & Raghav",
    event: "Gala Dinner · 2023",
  }
];

export default function Moment05Evidence() {
  const sectionRef = useRef<HTMLElement>(null);
  const quoteMarkRef = useRef<HTMLSpanElement>(null);
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);
  const attributionRef = useRef<HTMLDivElement>(null);
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const triggered = useRef(false);

  // Function to execute the cinematic entrance choreography
  const playAnimation = (reduceMotion: boolean) => {
    if (reduceMotion) {
      if (quoteMarkRef.current) quoteMarkRef.current.style.opacity = '1';
      if (attributionRef.current) attributionRef.current.style.opacity = '1';
      const inner1 = line1Ref.current?.querySelector('.quote-inner') as HTMLElement;
      const inner2 = line2Ref.current?.querySelector('.quote-inner') as HTMLElement;
      if (inner1) inner1.style.transform = 'translateY(0)';
      if (inner2) inner2.style.transform = 'translateY(0)';
      return;
    }

    const ease = 'var(--ease-embassy)';

    // Reset State
    if (quoteMarkRef.current) quoteMarkRef.current.style.opacity = '0';
    if (attributionRef.current) attributionRef.current.style.opacity = '0';
    const inner1 = line1Ref.current?.querySelector('.quote-inner') as HTMLElement;
    const inner2 = line2Ref.current?.querySelector('.quote-inner') as HTMLElement;
    
    if (inner1) {
      inner1.style.transition = 'none';
      inner1.style.transform = 'translateY(110%)';
    }
    if (inner2) {
      inner2.style.transition = 'none';
      inner2.style.transform = 'translateY(110%)';
    }

    // Force reflow
    void line1Ref.current?.offsetHeight;

    // Trigger Choreography
    setTimeout(() => {
      if (quoteMarkRef.current) {
        quoteMarkRef.current.style.transition = `opacity 0.8s ${ease}`;
        quoteMarkRef.current.style.opacity = '1';
      }
    }, 100);

    setTimeout(() => {
      if (inner1) {
        inner1.style.transition = `transform 1.4s ${ease}`;
        inner1.style.transform = 'translateY(0)';
      }
    }, 300);

    setTimeout(() => {
      if (inner2) {
        inner2.style.transition = `transform 1.4s ${ease}`;
        inner2.style.transform = 'translateY(0)';
      }
    }, 480);

    setTimeout(() => {
      if (attributionRef.current) {
        attributionRef.current.style.transition = `opacity 1.0s var(--ease-heritage)`;
        attributionRef.current.style.opacity = '1';
      }
    }, 900);
  };

  // Intersection Observer for initial reveal
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !triggered.current) {
            triggered.current = true;
            setIsVisible(true);
            playAnimation(reduceMotion);
          }
        });
      },
      { threshold: 0.35 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Auto-rotate testimonials every 6 seconds, re-triggering animation
  useEffect(() => {
    if (!isVisible) return;
    
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
      // Slight delay to allow React state to render the new text before animating it up
      setTimeout(() => playAnimation(reduceMotion), 50);
    }, 6000);

    return () => clearInterval(timer);
  }, [isVisible, currentIndex]);

  const currentQuote = TESTIMONIALS[currentIndex];

  return (
    <section
      id="moment-05-evidence"
      ref={sectionRef}
      className="section section-red-white"
      aria-label="A word from our guests"
      style={{
        minHeight: '100svh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      } as React.CSSProperties}
    >
      <div style={{ maxWidth: '720px', width: '100%', padding: '0 var(--space-xl)' } as React.CSSProperties}>
        
        {/* SCRIPT QUOTATION MARK */}
        <span
          ref={quoteMarkRef}
          aria-hidden="true"
          className="type-script"
          style={{
            opacity: 0,
            fontSize: '60px',
            color: 'rgba(255, 255, 255, 0.45)',
            lineHeight: 1,
            display: 'block',
            marginBottom: 'var(--space-lg)',
          } as React.CSSProperties}
        >
          &#8220;
        </span>

        {/* QUOTE TEXT (Masked Reveal) */}
        <div ref={line1Ref} style={{ overflow: 'hidden' } as React.CSSProperties} aria-hidden="true">
          <div
            className="quote-inner type-h1"
            style={{
              fontStyle: 'italic',
              color: 'var(--color-white)',
              transform: 'translateY(110%)',
              willChange: 'transform',
            } as React.CSSProperties}
          >
            {currentQuote.line1}
          </div>
        </div>

        <div ref={line2Ref} style={{ overflow: 'hidden' } as React.CSSProperties} aria-hidden="true">
          <div
            className="quote-inner type-h1"
            style={{
              fontStyle: 'italic',
              color: 'var(--color-white)',
              transform: 'translateY(110%)',
              willChange: 'transform',
            } as React.CSSProperties}
          >
            {currentQuote.line2}
          </div>
        </div>

        {/* SCREEN READER ACCESSIBILITY */}
        <blockquote className="sr-only">
          <p>{currentQuote.line1} {currentQuote.line2}</p>
          <footer>— {currentQuote.name}, {currentQuote.event}</footer>
        </blockquote>

        {/* ATTRIBUTION */}
        <div
          ref={attributionRef}
          style={{
            opacity: 0,
            marginTop: 'var(--space-3xl)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 'var(--space-sm)',
          } as React.CSSProperties}
          aria-hidden="true"
        >
          <span 
            style={{ 
              display: 'block', 
              width: '40px', 
              height: '1px', 
              background: 'rgba(255, 255, 255, 0.55)',
              marginBottom: 'var(--space-sm)'
            } as React.CSSProperties} 
          />

          <span className="type-eyebrow" style={{ color: 'var(--color-white)' } as React.CSSProperties}>
            {currentQuote.name}
          </span>

          <span 
            className="type-eyebrow" 
            style={{ 
              color: 'rgba(255, 255, 255, 0.65)', 
              letterSpacing: '0.18em' // Slightly tighter tracking for secondary data
            } as React.CSSProperties}
          >
            {currentQuote.event}
          </span>
        </div>

        {/* DOT NAVIGATION INDICATORS */}
        <div 
          style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: 'var(--space-sm)', 
            marginTop: 'var(--space-2xl)' 
          } as React.CSSProperties}
        >
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => setCurrentIndex(i)}
              className={`quote-dot ${currentIndex === i ? 'active' : ''}`}
            />
          ))}
        </div>

      </div>

      <style jsx>{`
        .quote-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          border: none;
          padding: 0;
          cursor: pointer;
          background: rgba(255, 255, 255, 0.25);
          transition: transform var(--dur-hover) var(--ease-heritage), background var(--dur-hover) var(--ease-heritage);
        }
        .quote-dot:hover {
          transform: scale(1.3);
          background: rgba(255, 255, 255, 0.6);
        }
        .quote-dot.active {
          background: var(--color-white);
          transform: scale(1.15);
        }
      `}</style>
    </section>
  );
}