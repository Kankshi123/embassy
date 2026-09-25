// EMBASSY CATERING — src/app/page.tsx — Optimized June 8, 2026
import type { Metadata } from 'next';
import NavBar from '@/components/primitives/NavBar';
import Hero from '@/components/Homepage/Hero'; // Corrected import to match our optimized Moment 01 file
import TrustedByMarquee from '@/components/Homepage/TrustedByMarquee';
import Moment02Whisper from '@/components/Homepage/Moment02Whisper';
import Moment03Mastery from '@/components/Homepage/Moment03Mastery';
import Moment04Scale from '@/components/Homepage/Moment04scale';
import MenuFlipSection from '@/components/shared/MenuFlipSection';

import Moment05Evidence from '@/components/Homepage/Moment05evidence';
import Moment06Invitation from '@/components/Homepage/Moment06invitation';
import Moment07Departure from '@/components/Homepage/Moment07departure';
import CursorSpotlight from '@/components/ui/CursorSpotlight';
import WhatsappButton from '@/components/ui/WhatsappButton';

export const metadata: Metadata = {
  title: 'The Embassy Catering — Every Celebration Carries a Legacy | Since 1948',
  description:
    "The Embassy Catering — luxury multi-cuisine caterer since 1948. 25,000+ weddings, 50+ cuisines, 6,000+ dishes. Award-winning catering for weddings, corporate, and diplomatic events.",
  openGraph: {
    title: 'The Embassy Catering — Every Celebration Carries a Legacy',
    description:
      "Luxury caterer since 1948. 25,000+ weddings. 50+ cuisines. One uncompromising standard.",
  },
};

/**
 * Homepage — THE SEVEN-MOMENT FILM
 *
 * Emotional arc:
 * 01 ARRIVAL     → curiosity, wonder
 * 02 WHISPER     → recognition of legacy
 * 03 MASTERY     → respect for craft
 * 04 SCALE       → awe of magnitude
 * 05 EVIDENCE    → trust through proof
 * 06 INVITATION  → desire to participate
 * 07 DEPARTURE   → sense of having been somewhere
 */
export default function HomePage() {
  return (
    <>
      {/* Scroll orchestration */}

      {/* Signature Interaction Layer */}
      <CursorSpotlight />

      {/* Global Navigation */}
      <NavBar />

      {/* ─── THE SEVEN-MOMENT FILM ─── */}
      <main id="main-content" role="main">
        {/* 01 — ARRIVAL */}
        <Hero />

        {/* 02 — THE WHISPER */}
        <Moment02Whisper />

        {/* 03 — THE MASTERY */}
        <Moment03Mastery />

        {/* MENU FLIP PREVIEW — From Our Kitchens */}
        <MenuFlipSection variant="homepage" />

        {/* 04 — THE SCALE */}
        <Moment04Scale />

        {/* TRUSTED BY MARQUEE */}
        <TrustedByMarquee />

        {/* 05 — THE EVIDENCE */}
        <Moment05Evidence />

        {/* 06 — THE INVITATION */}
        <Moment06Invitation />
      </main>

      {/* 07 — THE DEPARTURE */}
      <Moment07Departure />

      {/* Persistent global CTA */}
      <WhatsappButton />
    </>
  );
}