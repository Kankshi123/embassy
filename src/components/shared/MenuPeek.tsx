'use client';

import { useState } from 'react';
import SampleMenuModal from './SampleMenuModal';
import { warmSampleMenu } from '@/lib/sampleMenu';

const PAGES = [
  { src: '/menu/preview-coast-of-malabar.jpg', alt: 'Coast of Malabar menu page', rot: -7, y: 18 },
  { src: '/menu/preview-signature-kitchen.jpg', alt: 'The Embassy signature kitchen menu page', rot: 0, y: 0 },
  { src: '/menu/preview-indian-desserts.jpg', alt: 'Indian dessert atelier menu page', rot: 7, y: 18 },
];

export default function MenuPeek() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="mpk-wrap">
        <p className="mpk-eyebrow">Flip through the real menu</p>
        <div className="mpk-fan">
          {PAGES.map((p, i) => (
            <button
              key={p.src}
              type="button"
              className="mpk-page"
              style={{ ['--rot' as string]: `${p.rot}deg`, ['--y' as string]: `${p.y}px`, zIndex: i === 1 ? 2 : 1 }}
              onClick={() => setOpen(true)}
              onMouseEnter={warmSampleMenu}
              onFocus={warmSampleMenu}
              aria-label="Preview and download the sample menu"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.src} alt={p.alt} loading="lazy" />
            </button>
          ))}
        </div>
        <button type="button" className="mpk-cta" onClick={() => setOpen(true)} onMouseEnter={warmSampleMenu}>
          View &amp; Download the Sample Menu →
        </button>
      </div>

      <SampleMenuModal open={open} onClose={() => setOpen(false)} />

      <style dangerouslySetInnerHTML={{ __html: `
        .mpk-wrap { text-align: center; margin-top: var(--space-4xl); }
        .mpk-eyebrow { font-family: var(--font-body); font-size: 10px; letter-spacing: 0.26em; text-transform: uppercase; color: var(--color-gold); margin-bottom: var(--space-xl); }
        .mpk-fan { display: flex; justify-content: center; align-items: center; padding: 10px 0 30px; }
        .mpk-page {
          position: relative; width: min(28vw, 240px); aspect-ratio: 595 / 842; padding: 0; border: 0; cursor: pointer;
          margin: 0 -18px; background: #fff;
          transform: translateY(var(--y)) rotate(var(--rot));
          box-shadow: 0 24px 50px rgba(0,0,0,0.45);
          transition: transform 0.5s var(--ease-embassy), box-shadow 0.5s var(--ease-embassy);
        }
        .mpk-page img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .mpk-page:hover, .mpk-page:focus-visible { transform: translateY(-14px) rotate(0deg) scale(1.04); z-index: 5 !important; box-shadow: 0 34px 70px rgba(0,0,0,0.55); outline: none; }
        .mpk-cta {
          margin-top: var(--space-lg); cursor: pointer; font-family: var(--font-body); font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; font-weight: 700;
          color: var(--color-primary); border: 1px solid rgba(255,255,255,0.5);
          background: linear-gradient(135deg, #cfcabd 0%, #f6e8b9 30%, #c9a84c 60%, #ece6d6 100%); padding: 16px 30px;
        }
        @media (max-width: 600px) { .mpk-page { width: 30vw; margin: 0 -14px; } .mpk-cta { padding: 14px 18px; font-size: 10px; } }
      ` }} />
    </>
  );
}
