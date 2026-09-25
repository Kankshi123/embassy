'use client';
import React, { useState } from 'react';
import { MENU_PACKAGES } from '@/data/menuStations';
import SampleMenuModal from './SampleMenuModal';

export default function MenuPackagesSection() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div style={{ margin: 'var(--space-4xl) auto', width: '100vw', marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 var(--space-xl)' }}>
        <div className="packages-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'var(--space-2xl)'
        }}>
          {MENU_PACKAGES.map((pkg) => (
            <div key={pkg.id} className="package-card" style={{
              background: '#FFFFFF',
              border: '1px solid rgba(201,168,76,0.2)',
              borderRadius: '8px',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer'
            }}>
              {/* Image Placeholder */}
              <div style={{
                height: '240px',
                background: pkg.image ? `url(${pkg.image}) center/cover` : 'linear-gradient(135deg, #1A0809 0%, #2A1416 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderBottom: '2px solid var(--color-primary)'
              }}>
                {!pkg.image && (
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '14px', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase' }}>
                    [ Image Placeholder ]
                  </span>
                )}
              </div>
              
              <div style={{ padding: 'var(--space-xl)', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '11px', letterSpacing: '0.15em', color: 'var(--color-primary)', textTransform: 'uppercase', marginBottom: 'var(--space-sm)' }}>
                  {pkg.eventType}
                </p>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', fontWeight: 600, color: 'var(--color-text-dark)', marginBottom: 'var(--space-sm)' }}>
                  {pkg.title}
                </h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'rgba(26,26,26,0.6)', lineHeight: 1.6, marginBottom: 'var(--space-lg)', flex: 1 }}>
                  {pkg.description}
                </p>
                
                <div style={{ paddingTop: 'var(--space-md)', borderTop: '1px solid rgba(0,0,0,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--color-text-dark)', fontWeight: 500 }}>
                    {pkg.guestSize}
                  </span>
                  <button type="button" onClick={() => setModalOpen(true)} style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--color-primary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      View Sample &rarr;
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <SampleMenuModal open={modalOpen} onClose={() => setModalOpen(false)} />
      <style dangerouslySetInnerHTML={{ __html: `
        .package-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(0,0,0,0.08);
        }
      ` }} />
    </div>
  );
}
