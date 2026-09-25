'use client';

import { useEffect, useRef, useState } from 'react';
import SampleMenuModal from './SampleMenuModal';
import { warmSampleMenu } from '@/lib/sampleMenu';

export default function SampleMenuCard({ index }: { index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('mfs-visible');
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <>
      <div
        ref={ref}
        className="mfs-wrapper smc-wrapper"
        style={{ '--stagger': index } as React.CSSProperties}
      >
        <button
          type="button"
          className="smc-card"
          onClick={() => setOpen(true)}
          onMouseEnter={warmSampleMenu}
          onFocus={warmSampleMenu}
          onTouchStart={warmSampleMenu}
          aria-label="Preview and download the sample menu"
        >
          <span className="smc-shine" />
          <span className="smc-corner smc-corner--tl" />
          <span className="smc-corner smc-corner--br" />
          <svg className="smc-icon" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
            <path d="M14 3v5h5" />
            <path d="M12 11v6m0 0-2.5-2.5M12 17l2.5-2.5" />
          </svg>
          <span className="smc-eyebrow">The Menu Compendium</span>
          <span className="smc-title">Sample Menu</span>
          <span className="smc-sub">Preview &amp; download the Embassy menu</span>
          <span className="smc-cta">View &amp; Download →</span>
        </button>
      </div>

      <SampleMenuModal open={open} onClose={() => setOpen(false)} />

      <style dangerouslySetInnerHTML={{ __html: `
        .smc-card {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 20px 16px;
          text-align: center;
          cursor: pointer;
          overflow: hidden;
          color: #4a1a12;
          border: 1px solid rgba(255,255,255,0.55);
          background: linear-gradient(145deg, #cfcabd 0%, #f6e8b9 26%, #c9a84c 52%, #ece6d6 76%, #b3ae9f 100%);
          box-shadow: 0 10px 30px rgba(0,0,0,0.35), inset 0 1px 2px rgba(255,255,255,0.7);
          transition: transform 0.4s var(--ease-embassy), box-shadow 0.4s var(--ease-embassy);
        }
        .smc-card:hover, .smc-card:focus-visible {
          transform: translateY(-6px);
          box-shadow: 0 18px 44px rgba(201,168,76,0.45), inset 0 1px 2px rgba(255,255,255,0.8);
          outline: none;
        }
        .smc-shine {
          position: absolute; top: 0; left: -120%; width: 55%; height: 100%;
          background: linear-gradient(to right, rgba(255,255,255,0), rgba(255,255,255,0.55), rgba(255,255,255,0));
          transform: skewX(-22deg);
          animation: smc-shine 4.5s infinite;
          pointer-events: none;
        }
        @keyframes smc-shine { 0% { left: -120%; } 35% { left: 170%; } 100% { left: 170%; } }
        .smc-corner { position: absolute; width: 20px; height: 20px; border: 1px solid rgba(74,26,18,0.45); }
        .smc-corner--tl { top: 12px; left: 12px; border-right: 0; border-bottom: 0; }
        .smc-corner--br { bottom: 12px; right: 12px; border-left: 0; border-top: 0; }
        .smc-icon { color: #8B0000; }
        .smc-eyebrow { font-family: var(--font-body); font-size: 9px; letter-spacing: 0.24em; text-transform: uppercase; font-weight: 600; opacity: 0.75; }
        .smc-title { font-family: var(--font-display); font-size: clamp(20px, 2.2vw, 28px); line-height: 1.1; font-weight: 600; color: #6b0f1a; }
        .smc-sub { font-family: var(--font-body); font-size: 12px; line-height: 1.5; opacity: 0.8; max-width: 22ch; }
        .smc-cta { margin-top: 6px; font-family: var(--font-body); font-size: 10px; letter-spacing: 0.18em; text-transform: uppercase; font-weight: 700; color: #fff; background: linear-gradient(135deg, #8B0000, #B11226); padding: 10px 16px; }

        @media (max-width: 520px) { .smc-sub { font-size: 11px; } .smc-cta { padding: 8px 10px; font-size: 9px; } }
      `}} />
    </>
  );
}
