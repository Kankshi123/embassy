// EMBASSY CATERING — src/components/Homepage/Moment06invitation.tsx — Optimized June 15, 2026
'use client';

import React, { useRef, useEffect } from 'react';
import ScriptEyebrow from '../primitives/ScriptEyebrow';
import ButtonPrimary from '../primitives/ButtonPrimary';

export default function Moment06Invitation() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const triggered = useRef(false);

  useEffect(() => {
    // Respect accessibility constraints
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    const elements = contentRef.current?.querySelectorAll('.invitation-el');

    // Setup initial animation states
    elements?.forEach((el, i) => {
      const htmlEl = el as HTMLElement;
      htmlEl.style.opacity = '0';
      htmlEl.style.transform = 'translateY(24px)';
      // Staggered reveal using our strictly enforced token
      htmlEl.style.transition = `
        opacity 1.2s var(--ease-embassy) ${0.15 * i}s,
        transform 1.2s var(--ease-embassy) ${0.15 * i}s
      `;
    });

    // Cinematic Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !triggered.current) {
            triggered.current = true; // One-shot execution

            elements?.forEach((el) => {
              const htmlEl = el as HTMLElement;
              htmlEl.style.opacity = '1';
              htmlEl.style.transform = 'translateY(0)';
            });
          }
        });
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="moment-06-invitation"
      ref={sectionRef}
      className="section section-white-red"
      aria-label="Reserve your date — The Embassy Catering"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100svh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        // Mandatory section gradient locked per instructions
        background: 'linear-gradient(180deg, #ffffff 0%, #fff7f7 40%, #ffffff 100%)',
      } as React.CSSProperties}
    >
      {/* PREMIUM RADIAL GLOW (Corrected to Primary Red RGB: 177, 18, 38) */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at center, rgba(177, 18, 38, 0.08), transparent 60%)',
          pointerEvents: 'none',
         } as React.CSSProperties}
      />

      <div
        ref={contentRef}
        className="invitation-card"
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '720px',
          width: '90%',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          background: 'var(--color-white)',
          border: '1px solid rgba(177, 18, 38, 0.12)',
          borderRadius: '4px',
          boxShadow: 'var(--shadow-card)',
        } as React.CSSProperties}
      >
        <style dangerouslySetInnerHTML={{ __html: `
          .invitation-card {
            padding: var(--space-4xl) var(--space-3xl);
          }
          @media (max-width: 600px) {
            .invitation-card {
              padding: var(--space-2xl) var(--space-md) !important;
              width: 95% !important;
            }
          }
        `}} />
        {/* ADDED MANDATORY SCRIPT EYEBROW */}
        <div className="invitation-el">
          <ScriptEyebrow 
            text="An Invitation" 
            animate 
            color="var(--color-primary)" 
          />
        </div>

        {/* HEADLINE */}
        <h2
          className="invitation-el type-h1"
          style={{
            color: 'var(--color-primary)',
            marginTop: 'var(--space-md)',
            textWrap: 'balance',
          } as React.CSSProperties}
        >
          Reserve Your Date.
        </h2>

        {/* PARAGRAPH */}
        <p
          className="invitation-el type-body-large"
          style={{
            color: 'var(--color-text-muted)',
            maxWidth: '48ch',
            margin: 'var(--space-lg) auto 0',
            lineHeight: 1.7,
          } as React.CSSProperties}
        >
          Embassy books fourteen to eighteen months ahead for premium dates.
          Yours deserves the consideration.
        </p>

        {/* CALL TO ACTION */}
        <div
          className="invitation-el"
          style={{ marginTop: 'var(--space-3xl)' } as React.CSSProperties}
        >
          <ButtonPrimary 
            href="/contact"
          >
            Begin Your Enquiry
          </ButtonPrimary>
        </div>
      </div>
    </section>
  );
}