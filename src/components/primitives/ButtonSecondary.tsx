// EMBASSY CATERING — src/components/primitives/ButtonSecondary.tsx — Optimized June 8, 2026
'use client';

import React, { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import Link from 'next/link';

type ButtonSecondaryProps = {
  children: React.ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  fullWidth?: boolean;
  theme?: 'light' | 'dark'; // Preserved for API compatibility
} & (ButtonHTMLAttributes<HTMLButtonElement> | AnchorHTMLAttributes<HTMLAnchorElement>);

export default function ButtonSecondary({
  children,
  href,
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  fullWidth = false,
  theme = 'light',
  ...rest
}: ButtonSecondaryProps) {
  
  // Combine global tokens.
  // .luxury-btn-white enforces the brand-approved ghost/outline secondary aesthetic
  // .type-button enforces the strict Jost typography hierarchy.
  const combinedClasses = `luxury-btn-white type-button ${className}`.trim();

  // Minimal inline styles to handle layout constraints and state
  const dynamicStyles: React.CSSProperties = {
    width: fullWidth ? '100%' : 'auto',
    opacity: disabled ? 0.5 : 1,
    pointerEvents: disabled ? 'none' : 'auto',
    whiteSpace: 'nowrap',
    // Apply subtle border overrides if placed in a dark theme context to maintain contrast
    borderColor: theme === 'dark' ? 'var(--color-border-dark)' : undefined,
  };

  if (href) {
    return (
      <Link
        href={href}
        className={combinedClasses}
        style={dynamicStyles}
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={combinedClasses}
      style={dynamicStyles}
      onClick={onClick}
      disabled={disabled}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}