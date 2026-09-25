'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import LeadCaptureModal from './LeadCaptureModal';

export default function FloatingContactCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [docked, setDocked] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const update = () => setDocked(window.scrollY > window.innerHeight * 0.85);
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [pathname]);

  useEffect(() => {
    if (docked) document.body.dataset.ctaDocked = 'true';
    else delete document.body.dataset.ctaDocked;
    return () => {
      delete document.body.dataset.ctaDocked;
    };
  }, [docked]);

  return (
    <>
      <motion.button
        key={docked ? 'docked' : 'floating'}
        className={`fcta ${docked ? 'fcta--docked' : ''}`}
        initial={docked ? { y: -30, x: '-50%', opacity: 0 } : { y: 100, opacity: 0, scale: 0.8 }}
        animate={docked ? { y: 0, x: '-50%', opacity: 1 } : { y: 0, opacity: 1, scale: 1 }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 22,
          delay: docked ? 0 : 1.5,
        }}
        onClick={() => setIsModalOpen(true)}
        aria-label="Get in touch with us"
      >
        Get In Touch
      </motion.button>

      <LeadCaptureModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <style dangerouslySetInnerHTML={{ __html: `
        .fcta {
          position: fixed;
          bottom: 36px;
          right: 110px;
          z-index: 100;
          background: linear-gradient(135deg, var(--color-gold) 0%, #ffdf7a 50%, var(--color-gold) 100%);
          background-size: 200% 100%;
          color: var(--color-primary);
          border: 2px solid rgba(255, 255, 255, 0.4);
          padding: 20px 44px;
          font-family: var(--font-body);
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          border-radius: 999px;
          cursor: pointer;
          white-space: nowrap;
          box-shadow: 0 12px 40px rgba(201, 168, 76, 0.5), inset 0 2px 4px rgba(255, 255, 255, 0.5);
          animation: cta-pulse-gold 2.5s infinite, shimmer-bg 6s infinite linear;
        }
        .fcta:hover {
          box-shadow: 0 16px 56px rgba(201, 168, 76, 0.7), inset 0 2px 4px rgba(255, 255, 255, 0.6);
          filter: brightness(1.06);
        }
        .fcta--docked {
          top: 20px;
          bottom: auto;
          right: auto;
          left: 50%;
          z-index: 250;
          padding: 11px 26px;
          font-size: 11px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25), inset 0 1px 2px rgba(255, 255, 255, 0.5);
          animation: shimmer-bg 6s infinite linear;
        }
        .fcta--docked:hover {
          box-shadow: 0 6px 22px rgba(0, 0, 0, 0.35), inset 0 1px 2px rgba(255, 255, 255, 0.6);
        }

        @keyframes shimmer-bg {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
        @keyframes cta-pulse-gold {
          0% { box-shadow: 0 0 0 0 rgba(201, 168, 76, 0.6), inset 0 2px 4px rgba(255, 255, 255, 0.5); }
          70% { box-shadow: 0 0 0 20px rgba(201, 168, 76, 0), inset 0 2px 4px rgba(255, 255, 255, 0.5); }
          100% { box-shadow: 0 0 0 0 rgba(201, 168, 76, 0), inset 0 2px 4px rgba(255, 255, 255, 0.5); }
        }

        @media (max-width: 899px) {
          .fcta { bottom: 24px; right: 80px; padding: 16px 28px; font-size: 11px; }
          .fcta--docked { top: 19px; bottom: auto; right: auto; padding: 9px 18px; font-size: 10px; letter-spacing: 0.14em; }
        }
      `}} />
    </>
  );
}
