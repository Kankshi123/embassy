'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ring = ringRef.current;
    if (!fine || reduce || !ring) return;

    let tx = -100, ty = -100, x = -100, y = -100;
    let visible = false;
    let raf = 0;

    const show = (v: boolean) => {
      if (visible === v) return;
      visible = v;
      ring.style.opacity = v ? '1' : '0';
    };

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      if (!visible) {
        x = tx;
        y = ty;
        show(true);
      }
    };

    const onOver = (e: MouseEvent) => {
      const el = e.target as Element | null;
      const clickable = !!el?.closest?.('a, button, [role="button"], input, select, textarea, summary, label');
      ring.classList.toggle('is-active', clickable);
    };

    const onLeave = (e: MouseEvent) => {
      if (!e.relatedTarget) show(false);
    };

    const tick = () => {
      x += (tx - x) * 0.2;
      y += (ty - y) * 0.2;
      ring.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseover', onOver, { passive: true });
    document.addEventListener('mouseout', onLeave);
    window.addEventListener('blur', () => show(false));

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onLeave);
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="embassy-cursor" aria-hidden="true" />
      <style dangerouslySetInnerHTML={{ __html: `
        .embassy-cursor {
          position: fixed; top: 0; left: 0; z-index: 2147483000; pointer-events: none;
          width: 30px; height: 30px; border-radius: 50%;
          border: 1.5px solid rgba(177, 18, 38, 0.75);
          background: rgba(177, 18, 38, 0.06);
          opacity: 0; will-change: transform;
          transition: opacity 0.25s ease, width 0.3s var(--ease-embassy), height 0.3s var(--ease-embassy), background 0.3s ease, border-color 0.3s ease;
        }
        .embassy-cursor.is-active { width: 46px; height: 46px; background: rgba(177, 18, 38, 0.12); border-color: rgba(201, 168, 76, 0.9); }
        @media (hover: none), (pointer: coarse) { .embassy-cursor { display: none; } }
      ` }} />
    </>
  );
}
