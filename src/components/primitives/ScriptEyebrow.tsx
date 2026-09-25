// EMBASSY CATERING — src/components/primitives/ScriptEyebrow.tsx — Optimized June 8, 2026
'use client';

import React from 'react';

interface ScriptEyebrowProps {
  text?: string;
  eyebrowLabel?: string; // Optional upper utility text
  animate?: boolean;
  className?: string;
  color?: string; // Allows contextual inheritance based on section background
}

export default function ScriptEyebrow({
  text = 'Est. 1948',
  eyebrowLabel,
  animate = true,
  className = '',
  color = 'currentColor', 
}: ScriptEyebrowProps) {
  return (
    <div
      className={`script-eyebrow ${className}`}
      style={{
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: color,
        marginBottom: 'var(--space-md)',
      } as React.CSSProperties}
    >
      {/* Optional utility eyebrow text */}
      {eyebrowLabel && (
        <span
          className="type-eyebrow"
          style={{
            marginBottom: 'var(--space-sm)',
            opacity: 0.85,
          } as React.CSSProperties}
        >
          {eyebrowLabel}
        </span>
      )}

      {/* The actual ceremonial script */}
      <span 
        className="type-script"
        style={{ 
          position: 'relative', 
          zIndex: 1,
          padding: '0 var(--space-md)',
          textShadow: '0 0 28px rgba(201,168,76,0.55), 0 2px 10px rgba(0,0,0,0.7)',
          // Inherits clamp() sizing from type-script in typography.css
        } as React.CSSProperties}
      >
        {text}
      </span>

      {/* Optional Ceremonial Underline (Replaces the legacy side-rules) */}
      {animate && (
        <>
          <span
            className="script-underline"
            aria-hidden="true"
            style={{
              width: '60px',
              height: '1px',
              background: color,
              marginTop: 'var(--space-sm)',
              opacity: 0, // Initial state before animation
            } as React.CSSProperties}
          />
          <style
            dangerouslySetInnerHTML={{
              __html: `
                .script-underline {
                  transform-origin: center;
                  animation: drawUnderline 1.5s var(--ease-ceremonial) forwards;
                  will-change: transform, opacity;
                }

                @keyframes drawUnderline {
                  0% {
                    transform: scaleX(0);
                    opacity: 0;
                  }
                  100% {
                    transform: scaleX(1);
                    opacity: 0.65;
                  }
                }
              `,
            }}
          />
        </>
      )}
    </div>
  );
}