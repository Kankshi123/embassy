// EMBASSY CATERING — src/components/ui/EmberParticles.tsx — Optimized 2026-06-13
'use client';

import React, { useRef, useEffect, useState } from 'react';

export default function EmberParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // Default to true (hidden) on the server to prevent SSR hydration mismatch
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    const isSmallScreen = window.innerWidth < 480;
    setIsHidden(isSmallScreen);

    // Hard cutoff: no particles below 480px to conserve battery/GPU
    if (isSmallScreen) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);
    resize();

    // Initialize the signature 12 particles
    const particles = Array.from({ length: 12 }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5 + 0.5,
      vx: (Math.random() - 0.5) * 0.3,
      vy: Math.random() * 0.4 + 0.1, // Drifting upwards
      alpha: Math.random() * 0.4 + 0.1
    }));

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(p => {
        p.x += p.vx;
        p.y -= p.vy; 
        
        // Wrap around logic
        if (p.y < 0) p.y = canvas.height;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        // Using the heritage crimson brand color with particle-specific opacity
        ctx.fillStyle = `rgba(177, 18, 38, ${p.alpha})`; 
        ctx.fill();
      });
      
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 'var(--z-base, 0)',
        display: isHidden ? 'none' : 'block',
      }}
    />
  );
}