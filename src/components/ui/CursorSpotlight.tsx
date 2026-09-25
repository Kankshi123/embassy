// EMBASSY CATERING — src/components/ui/CursorSpotlight.tsx — Optimized June 8, 2026
'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function CursorSpotlight() {
  const spotRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: -460, y: -460 });
  const currentRef = useRef({ x: -460, y: -460 });
  const rafRef = useRef<number>(0);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  useEffect(() => {
    // 1. Strict Touch Device Prevention
    if (typeof window === 'undefined') return;
    const isCoarse = window.matchMedia('(pointer: coarse)').matches;
    const isNoHover = window.matchMedia('(hover: none)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (isCoarse || isNoHover || prefersReducedMotion) {
      return; // Do not initialize on touch/accessibility devices
    }
    
    setIsTouchDevice(false); // Safe to render and track

    // 2. High-Performance Tracking
    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // Lerp factor — 0.7s lag approximation for that "ceremonial drag" feel
    const LERP = 0.05;

    const tick = () => {
      const cx = currentRef.current.x;
      const cy = currentRef.current.y;
      const tx = mouseRef.current.x;
      const ty = mouseRef.current.y;

      currentRef.current.x = cx + (tx - cx) * LERP;
      currentRef.current.y = cy + (ty - cy) * LERP;

      if (spotRef.current) {
        spotRef.current.style.transform = `translate(${currentRef.current.x}px, ${currentRef.current.y}px) translate(-50%, -50%)`;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Completely unmount on touch devices to save resources
  if (isTouchDevice) return null;

  return (
    <div
      ref={spotRef}
      aria-hidden="true"
      className="cursor-spotlight"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '460px',
        height: '460px',
        pointerEvents: 'none',
        zIndex: 'calc(var(--z-cursor) - 1)', // Ensure it sits below the 12px primary dot
        // Brand Red #B11226 = 177, 18, 38
        background: 'radial-gradient(circle, rgba(177, 18, 38, 0.08) 0%, transparent 65%)',
        transform: 'translate(-460px, -460px)',
        willChange: 'transform',
        borderRadius: '50%',
      } as React.CSSProperties}
    />
  );
}