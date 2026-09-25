'use client';

// EMBASSY CATERING — BrandMark.tsx — Fixed variant support + transparent logo

import React, { useEffect, useState } from 'react';

type BrandMarkVariant = 'light' | 'dark';
type BrandMarkSize = 'sm' | 'md' | 'lg';

interface BrandMarkProps {
  variant?: BrandMarkVariant;
  size?: BrandMarkSize;
  className?: string;
}

const sizes: Record<BrandMarkSize, { width: number }> = {
  sm: { width: 108 },
  md: { width: 150 },
  lg: { width: 215 },
};

export default function BrandMark({
  variant = 'light',
  size = 'md',
  className = '',
}: BrandMarkProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 120);
    return () => clearTimeout(timer);
  }, []);

  const s = sizes[size];

  // transparent logo: white content visible on any bg
  // variant="dark"  → on red navbar  → no filter needed (white shows on red)
  // variant="light" → on red footer  → no filter needed (white shows on red)
  // If ever placed on a white bg, use brightness(0) to make it dark
  const imgFilter =
    variant === 'dark'
      ? 'none'
      : 'none';

  return (
    <div
      className={`brand-mark ${className}`}
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: s.width,
        maxWidth: '100%',
        transition:
          'transform 1.2s cubic-bezier(0.16,1,0.3,1), opacity 1.2s cubic-bezier(0.16,1,0.3,1)',
        transform: mounted
          ? 'translateY(0px) scale(1)'
          : 'translateY(10px) scale(0.94)',
        opacity: mounted ? 1 : 0,
      }}
    >
      <img
        src="/assets/embassy-logo-transparent.png"
        alt="The Embassy Catering"
        style={{
          width: '100%',
          height: 'auto',
          objectFit: 'contain',
          display: 'block',
          position: 'relative',
          zIndex: 2,
          filter: imgFilter,
        }}
      />

      <style jsx>{`
        @keyframes logoFloat {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-2px); }
        }
      `}</style>
    </div>
  );
}