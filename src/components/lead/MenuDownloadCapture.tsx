// EMBASSY CATERING — src/components/lead/MenuDownloadCapture.tsx — Optimized 2026-06-13
'use client';

import React, { useEffect, useId, useState } from 'react';
import {
  SAMPLE_MENU_URL,
  SAMPLE_MENU_UNLOCK_KEY,
  triggerMenuDownload,
  warmSampleMenu,
} from '@/lib/sampleMenu';

export default function MenuDownloadCapture() {
  const [submitted, setSubmitted] = useState(false);
  const uid = useId();

  useEffect(() => {
    warmSampleMenu();
    // Temporarily disabled so you can preview the toggle switch
    // try {
    //   if (localStorage.getItem(SAMPLE_MENU_UNLOCK_KEY) === '1') setSubmitted(true);
    // } catch {}
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;

    fetch('/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        enquiryType: 'Sample Menu Download',
        name: data.name,
        email: data.email,
        phone: data.mobile,
        eventType: data.eventType,
        notes: 'Requested sample menu download from website.',
      }),
    }).catch(() => {});

    try {
      localStorage.setItem(SAMPLE_MENU_UNLOCK_KEY, '1');
    } catch {}
    triggerMenuDownload();
    setSubmitted(true);
  };

  // ── Post-download state ──────────────────────────────────────────────────
  if (submitted) {
    return (
      <div style={{ background: '#FFFDF9', border: 'var(--border-double-gold)', padding: 'var(--space-lg)', textAlign: 'center' }}>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', color: 'var(--color-text-dark)', marginBottom: 'var(--space-xs)' }}>
          Your menu is ready.
        </h3>
        <p style={{ color: 'rgba(26,26,26,0.62)', fontSize: '14px', fontFamily: 'var(--font-body)', marginBottom: 'var(--space-md)' }}>
          The download has started. Preview it below — our team will be in touch shortly.
        </p>
        <iframe
          src={`${SAMPLE_MENU_URL}#toolbar=0&navpanes=0&view=FitH`}
          title="Embassy Catering sample menu preview"
          style={{ width: '100%', height: 'min(70vh, 620px)', border: '1px solid rgba(201,168,76,0.35)', background: '#fff' }}
        />
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginTop: 'var(--space-md)' }}>
          <button
            type="button"
            onClick={triggerMenuDownload}
            style={{ padding: '14px 28px', fontSize: '11px', letterSpacing: '0.16em', fontWeight: 600, textTransform: 'uppercase', color: '#fff', background: 'linear-gradient(135deg, #8B0000, #B11226)', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-body)' }}
          >
            Download Menu ↓
          </button>
          <a
            href={SAMPLE_MENU_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{ padding: '14px 28px', fontSize: '11px', letterSpacing: '0.16em', fontWeight: 600, textTransform: 'uppercase', color: 'var(--color-primary)', border: '1px solid var(--color-primary)', textDecoration: 'none', fontFamily: 'var(--font-body)' }}
          >
            Open Full Screen ↗
          </a>
        </div>
      </div>
    );
  }

  // ── Shared styles ────────────────────────────────────────────────────────
  const labelStyle: React.CSSProperties = {
    display: 'block', fontSize: '11px', letterSpacing: '0.1em',
    textTransform: 'uppercase', color: 'rgba(26,26,26,0.55)',
    marginBottom: '6px', fontFamily: 'var(--font-body)',
  };
  const inputStyle: React.CSSProperties = {
    width: '100%', border: '1px solid rgba(201, 168, 76, 0.35)',
    borderRadius: '0px', padding: '12px 14px', fontSize: '16px',
    fontFamily: 'var(--font-body)', color: 'var(--color-text-dark)',
    backgroundColor: '#FFFFFF', outline: 'none',
    minHeight: '48px', transition: 'all 0.3s ease',
  };
  const buttonStyle: React.CSSProperties = {
    width: '100%', padding: '18px 40px', fontSize: '11px',
    letterSpacing: '0.16em', fontWeight: 600, textTransform: 'uppercase',
    color: '#FFFFFF', background: 'linear-gradient(135deg, #8B0000, #B11226)',
    border: '1px solid rgba(255, 255, 255, 0.12)', borderRadius: '0px',
    cursor: 'pointer', marginTop: 'var(--space-xl)',
    fontFamily: 'var(--font-body)', minHeight: '48px', transition: 'all 0.3s ease',
  };

  return (
    <div className="menu-download-container" style={{ background: '#FFFDF9', border: 'var(--border-double-gold)' }}>
      <style>{`
        .menu-download-container { 
          padding: var(--space-2xl);
          width: 100%;
          max-width: 100%;
        }
        .menu-form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-lg); }
        .menu-form-full { grid-column: 1 / -1; }
        .menu-input:focus { border-color: var(--color-gold) !important; box-shadow: 0 0 8px rgba(201, 168, 76, 0.25); }

        /* Menu Fan Styles */
        .mpk-fan { display: flex; justify-content: center; align-items: center; padding: 20px 0 40px; margin-top: -10px; }
        .mpk-page {
          position: relative; width: min(24vw, 200px); aspect-ratio: 595 / 842; padding: 0; border: 0;
          margin: 0 -18px; background: #fff;
          transform: translateY(var(--y)) rotate(var(--rot));
          box-shadow: 0 16px 40px rgba(0,0,0,0.15);
          transition: transform 0.5s var(--ease-embassy), box-shadow 0.5s var(--ease-embassy);
        }
        .mpk-page img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .mpk-page:hover { transform: translateY(-14px) rotate(0deg) scale(1.04); z-index: 5 !important; box-shadow: 0 24px 50px rgba(0,0,0,0.25); }

        @media (max-width: 768px) {
          .menu-form-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .menu-download-container { padding: var(--space-md) !important; }
          .mpk-page { width: 28vw; margin: 0 -12px; }
        }
      `}</style>

      {/* ── Fanned Menu Visual ── */}
      <div className="mpk-fan">
        {[
          { src: '/menu/preview-coast-of-malabar.jpg', rot: -7, y: 18 },
          { src: '/menu/preview-signature-kitchen.jpg', rot: 0, y: 0 },
          { src: '/menu/preview-indian-desserts.jpg', rot: 7, y: 18 },
        ].map((p, i) => (
          <div
            key={p.src}
            className="mpk-page"
            style={{ ['--rot' as string]: `${p.rot}deg`, ['--y' as string]: `${p.y}px`, zIndex: i === 1 ? 2 : 1 }}
          >
            <img src={p.src} alt="Menu preview" loading="lazy" />
          </div>
        ))}
      </div>

      {/* ── Form Panel ── */}
      <form onSubmit={handleSubmit} className="menu-form-grid">
        <div>
          <label htmlFor={`${uid}-name`} style={labelStyle}>Full Name</label>
          <input type="text" id={`${uid}-name`} name="name" required style={inputStyle} className="menu-input" />
        </div>
        <div>
          <label htmlFor={`${uid}-mobile`} style={labelStyle}>Mobile Number</label>
          <input type="tel" id={`${uid}-mobile`} name="mobile" required style={inputStyle} className="menu-input" />
        </div>
        <div className="menu-form-full">
          <label htmlFor={`${uid}-email`} style={labelStyle}>Email Address</label>
          <input type="email" id={`${uid}-email`} name="email" required style={inputStyle} className="menu-input" />
        </div>
        <div className="menu-form-full">
          <label htmlFor={`${uid}-type`} style={labelStyle}>Event Type</label>
          <select id={`${uid}-type`} name="eventType" style={inputStyle} className="menu-input">
            <option value="Wedding">Wedding</option>
            <option value="Corporate Event">Corporate Event</option>
            <option value="Social Celebration">Social Celebration</option>
            <option value="Just Browsing">Just Browsing</option>
          </select>
        </div>
        <div className="menu-form-full" style={{ marginTop: 'var(--space-sm)' }}>
          <button type="submit" style={buttonStyle}>
            View &amp; Download the Menu →
          </button>
        </div>
      </form>
    </div>
  );
}