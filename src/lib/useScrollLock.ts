import { useEffect } from 'react';

type LenisHandle = { stop(): void; start(): void };
const lenisOf = () => (window as unknown as { __lenis?: LenisHandle }).__lenis;

export function useScrollLock(locked: boolean) {
  useEffect(() => {
    if (!locked) return;
    const html = document.documentElement;
    const prevHtml = html.style.overflow;
    const prevBody = document.body.style.overflow;
    html.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    lenisOf()?.stop();
    return () => {
      html.style.overflow = prevHtml;
      document.body.style.overflow = prevBody;
      lenisOf()?.start();
    };
  }, [locked]);
}
