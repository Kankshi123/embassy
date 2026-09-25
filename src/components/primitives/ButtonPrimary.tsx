// EMBASSY CATERING — src/components/primitives/ButtonPrimary.tsx — Optimized June 15, 2026
'use client';

import React, { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import Link from 'next/link';

type ButtonPrimaryProps = {
  children: React.ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  fullWidth?: boolean;
  style?: React.CSSProperties;
} & (ButtonHTMLAttributes<HTMLButtonElement> | AnchorHTMLAttributes<HTMLAnchorElement>);

export default function ButtonPrimary({
  children,
  href,
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  fullWidth = false,
  style,
  ...rest
}: ButtonPrimaryProps) {
  
  // Combine our global styling tokens.
  // .luxury-btn-red handles the gradient, border, cinematic hover lift, and shadow.
  // .type-button enforces the strict Jost typography hierarchy.
  const combinedClasses = `luxury-btn-red type-button ${className}`.trim();

  // Foundational inline styles for structural constraints and state
  const dynamicStyles: React.CSSProperties = {
    width: fullWidth ? '100%' : 'auto',
    opacity: disabled ? 0.5 : 1,
    pointerEvents: disabled ? 'none' : 'auto',
    whiteSpace: 'nowrap',
  };

  // Explicitly merge incoming styles AFTER base dynamic styles so parameters win cleanly
  const mergedStyles = { ...dynamicStyles, ...style };

  if (href) {
    return (
      <Link
        href={href}
        className={combinedClasses}
        style={mergedStyles}
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
      style={mergedStyles}
      onClick={onClick}
      disabled={disabled}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}