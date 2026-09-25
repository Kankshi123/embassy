// EMBASSY CATERING — src/app/legacy/page.tsx — About Us Page
import type { Metadata } from 'next';
import NavBar from '@/components/primitives/NavBar';
import Moment07Departure from '@/components/Homepage/Moment07departure';
import WhatsappButton from '@/components/ui/WhatsappButton';
import ScriptEyebrow from '@/components/primitives/ScriptEyebrow';
import ButtonPrimary from '@/components/primitives/ButtonPrimary';
import TrustedByMarquee from '@/components/Homepage/TrustedByMarquee';

export const metadata: Metadata = {
  title: 'About Us | The Embassy Catering — Since 1948 — 75+ Years of Heritage',
  description:
    "The Embassy Catering — Delhi's original luxury caterer since 1948. 25,000+ weddings, 50+ cuisines, 6,000+ dishes. A proud part of Tasteshop Private Limited.",
  alternates: {
    canonical: 'https://embassy-catering.netlify.app/legacy',
  },
};

// About Us page schema for SEO & AEO
const legacySchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'AboutPage',
      '@id': 'https://embassy-catering.netlify.app/legacy#aboutpage',
      name: 'About Us | The Embassy Catering Since 1948',
      description: "The history of The Embassy Catering — Delhi's original luxury caterer since 1948. 75+ years of heritage, 25,000+ weddings, a proud part of Tasteshop Private Limited.",
      about: { '@id': 'https://embassy-catering.netlify.app/#organization' },
      url: 'https://embassy-catering.netlify.app/legacy',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://embassy-catering.netlify.app' },
        { '@type': 'ListItem', position: 2, name: 'About Us', item: 'https://embassy-catering.netlify.app/legacy' },
      ],
    },
  ],
};

const RESTAURANTS = [
  {
    name: 'Kampai',
    logo: '/restaurants/kampai-logo.png',
    image: '/restaurants/kampai.jpg',
    location: 'Delhi',
    desc: "Kampai, Delhi's acclaimed modern Japanese restaurant, offers a contemporary take on traditional Japanese cuisine.",
    wide: true,
  },
  {
    name: 'BASQUE',
    logo: '/restaurants/basque-logo.png',
    image: '/restaurants/basque.jpg',
    location: 'Dehradun',
    desc: "Set in Dehradun's scenic valley, BASQUE blends Italian, Asian and Indian cuisine with dining, events and entertainment.",
    wide: true,
  },
  {
    name: 'The Embassy',
    logo: '/restaurants/embassy-logo.png',
    image: '/restaurants/embassy-connaught-place.jpg',
    location: 'Connaught Place',
    desc: 'A Delhi dining institution since 1948, The Embassy is renowned for authentic North Indian cuisine and timeless hospitality.',
  },
  {
    name: 'The Embassy',
    logo: '/restaurants/embassy-logo.png',
    image: '/restaurants/embassy-elan-epic-gurgaon.jpg',
    location: 'Elan Epic | Gurgaon',
    desc: 'A legendary Delhi institution since 1948, The Embassy serves classic Indian and continental cuisine with timeless appeal.',
  },
  {
    name: 'The Embassy',
    logo: '/restaurants/embassy-logo.png',
    image: '/restaurants/embassy-dlf-promenade.jpg',
    location: 'DLF Promenade | Vasant Kunj',
    desc: 'Established in 1948, The Embassy brings its rich culinary heritage to Vasant Kunj with refined dining and contemporary hospitality.',
  },
];

export default function LegacyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(legacySchema) }}
      />
      <NavBar />
      <WhatsappButton />

      <main style={{ paddingTop: '82px' }}>

        {/* ── HERO ── */}
        <section className="legacy-hero-section" style={{
          minHeight: '80svh', display: 'flex', alignItems: 'center', justifyContent: 'center',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative', overflow: 'hidden', padding: 'var(--space-5xl) var(--space-xl)',
        }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 80%, rgba(177,18,38,0.25), transparent 60%)', pointerEvents: 'none' }} />
          <div style={{ textAlign: 'center', position: 'relative', zIndex: 2, maxWidth: '800px' }}>
            <ScriptEyebrow text="About Us" color="rgba(201,168,76,0.9)" />
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(48px, 7vw, 96px)', fontWeight: 600, color: '#FFFFFF', lineHeight: 1.05, margin: 'var(--space-lg) 0 var(--space-xl)' }}>
              A Legacy Built on<br />Trust & Excellence.
            </h1>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '16px', color: 'rgba(255,255,255,0.68)', lineHeight: 1.8, maxWidth: '520px', margin: '0 auto' }}>
              Over seven decades of crafting unforgettable moments — from intimate gatherings to grand celebrations of over 5,000 guests.
            </p>
          </div>
        </section>

        {/* ── THE STORY ── */}
        <section style={{ background: '#FFFFFF', padding: 'var(--space-5xl) var(--space-xl)' }}>
          <div className="about-story-grid" style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-5xl)', alignItems: 'start' }}>
            
            {/* TEXT COLUMN */}
            <div>
              <ScriptEyebrow text="Our Story" color="var(--color-primary)" />
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4.2vw, 52px)', fontWeight: 300, color: 'var(--color-text-dark)', lineHeight: 1.15, margin: 'var(--space-md) 0 var(--space-xl)', textWrap: 'balance' }}>
                From Connaught Place to the World.
              </h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)' }}>
                <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 'var(--text-editorial)', color: 'var(--color-primary)', lineHeight: 1.6, marginBottom: 'var(--space-xs)' }}>
                  The story of The Embassy began in 1948, when the iconic Embassy Restaurant first opened its doors in the heart of Connaught Place, New Delhi. Founded on a vision of timeless hospitality and exceptional food, it quickly became a landmark for generations.
                </p>
                
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '16px', color: 'rgba(26, 26, 26, 0.85)', lineHeight: 1.8 }}>
                  Over the decades, across generations, Embassy evolved beyond a celebrated restaurant into one of India&apos;s most respected and enduring catering legacies. Built on over <strong style={{ color: 'var(--color-gold)', fontWeight: 600 }}>75 years of culinary excellence</strong>, Embassy Catering today stands as a symbol of trust, scale and sophistication in the hospitality industry.
                </p>
                
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '16px', color: 'rgba(26, 26, 26, 0.85)', lineHeight: 1.8 }}>
                  Having successfully catered <strong style={{ color: 'var(--color-text-dark)', fontWeight: 600 }}>25,000+ weddings</strong>, private milestones, and large-scale corporate events, Embassy has had the privilege of serving an esteemed clientele including Chief Ministers, judiciary members, foreign embassies, and leading global organisations.
                </p>
                
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '16px', color: 'rgba(26, 26, 26, 0.85)', lineHeight: 1.8 }}>
                  With expertise spanning <strong style={{ color: 'var(--color-gold)', fontWeight: 600 }}>50+ cuisines</strong> and a repertoire of over <strong style={{ color: 'var(--color-gold)', fontWeight: 600 }}>6,000 dishes</strong>, we curate experiences that are as diverse as they are memorable — from intimate gatherings to grand celebrations of over <strong style={{ color: 'var(--color-primary)', fontWeight: 600 }}>5,000 guests</strong>, across India and internationally.
                </p>
              </div>
            </div>
            
            {/* HERITAGE PHOTOS */}
            <div className="heritage-photos" style={{ position: 'sticky', top: '120px' }}>
              <figure className="heritage-photo heritage-photo--a">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/about/heritage-1.jpg" alt="Archive photograph of The Embassy restaurant dining room" loading="lazy" />
              </figure>
              <figure className="heritage-photo heritage-photo--b">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/about/heritage-2.jpg" alt="Archive photograph of guests dining at The Embassy" loading="lazy" />
              </figure>
            </div>
          </div>
        </section>

        {/* ── OUR RESTAURANTS ── */}
        <section className="restaurants-section" style={{ background: 'linear-gradient(160deg, #A01813 0%, #7E0F0F 100%)', padding: 'var(--space-5xl) var(--space-xl)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
            <ScriptEyebrow text="The Group" color="rgba(201,168,76,0.95)" />
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4.2vw, 56px)', fontWeight: 400, color: '#FFF3DE', lineHeight: 1.15, margin: 'var(--space-md) 0 var(--space-lg)' }}>
              Our Restaurants
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'rgba(255,243,222,0.78)', lineHeight: 1.85, maxWidth: '640px', margin: '0 auto var(--space-4xl)' }}>
              Embassy Catering is a proud part of <strong style={{ color: '#FFF3DE', fontWeight: 600 }}>Tasteshop Private Limited</strong> — a hospitality group behind acclaimed restaurants across Delhi NCR and Uttarakhand.
            </p>

            <div className="restaurants-grid">
              {RESTAURANTS.map((r) => (
                <article key={r.image} className={`restaurant-card${r.wide ? ' restaurant-card--wide' : ''}`}>
                  <div className="restaurant-logo">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={r.logo} alt={`${r.name} logo`} loading="lazy" />
                  </div>
                  <p className="restaurant-location">{r.location}</p>
                  <div className="restaurant-photo">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={r.image} alt={`${r.name}, ${r.location}`} loading="lazy" />
                  </div>
                  <p className="restaurant-desc">{r.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── STATS / AUTHORITY ── */}
        <section style={{ background: 'linear-gradient(135deg, #B11226, #8B0000)', padding: 'var(--space-5xl) var(--space-xl)' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div className="stats-grid">
              {[
                { number: '75+', label: 'Years of Heritage' },
                { number: '25,000+', label: 'Weddings Catered' },
                { number: '6,000+', label: 'Signature Dishes' },
                { number: '50+', label: 'Global Cuisines' },
              ].map((stat) => (
                <div key={stat.label} style={{ textAlign: 'center', padding: 'var(--space-2xl) 0' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(42px, 5.5vw, 68px)', fontWeight: 600, color: '#C9A84C', lineHeight: 1, marginBottom: 'var(--space-md)' }}>
                    {stat.number}
                  </div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.8)' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <TrustedByMarquee />

        {/* ── CTA ── */}
        <section style={{ background: '#FAF7F2', padding: 'var(--space-5xl) var(--space-xl)', textAlign: 'center' }}>
          <div style={{ maxWidth: '640px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 600, color: 'var(--color-text-dark)', marginBottom: 'var(--space-lg)' }}>
              Begin Your Celebration With Us.
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'rgba(26,26,26,0.6)', lineHeight: 1.75, marginBottom: 'var(--space-3xl)' }}>
              Whether it&apos;s an intimate gathering or a grand wedding celebration, let Embassy Catering craft an experience rooted in over seven decades of culinary excellence.
            </p>
            <div style={{ display: 'inline-flex', justifyContent: 'center' }}>
              <ButtonPrimary href="/contact">
                Plan Your Event With Us
              </ButtonPrimary>
            </div>
          </div>
        </section>

      </main>

      <Moment07Departure />

      <style dangerouslySetInnerHTML={{ __html: `
        .legacy-hero-section {
          background-image: linear-gradient(rgba(26, 8, 9, 0.72) 0%, rgba(26, 8, 9, 0.65) 100%), url('/about/about-hero.jpg');
        }
        @media (min-width: 768px) {
          .legacy-hero-section {
            background-image: linear-gradient(rgba(26, 8, 9, 0.72) 0%, rgba(26, 8, 9, 0.65) 100%), url('/about/about-hero.jpg');
          }
        }
        .heritage-photos { position: relative; min-height: 560px; }
        .heritage-photo { margin: 0; position: absolute; background: #fff; padding: 10px 10px 34px; box-shadow: 0 18px 44px rgba(26,8,9,0.22); }
        .heritage-photo img { display: block; width: 100%; height: auto; }
        .heritage-photo--a { width: 58%; top: 0; left: 0; transform: rotate(-4deg); }
        .heritage-photo--b { width: 58%; bottom: 0; right: 0; transform: rotate(3.5deg); }
        .restaurants-grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: var(--space-3xl) var(--space-2xl); text-align: center; }
        .restaurant-card { grid-column: span 2; display: flex; flex-direction: column; align-items: center; }
        .restaurant-card--wide { grid-column: span 3; }
        .restaurant-logo { height: 64px; display: flex; align-items: center; justify-content: center; margin-bottom: 8px; }
        .restaurant-logo img { max-height: 100%; width: auto; max-width: 180px; }
        .restaurant-location { font-family: var(--font-body); font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: rgba(255,243,222,0.8); min-height: 16px; margin-bottom: var(--space-md); }
        .restaurant-photo { width: 100%; max-width: 420px; border: 4px solid #FFF3DE; border-radius: 16px; overflow: hidden; box-shadow: 0 16px 36px rgba(0,0,0,0.3); }
        .restaurant-photo img { display: block; width: 100%; height: auto; transition: transform 0.7s var(--ease-embassy); }
        .restaurant-card:hover .restaurant-photo img { transform: scale(1.05); }
        .restaurant-desc { font-family: var(--font-body); font-style: italic; font-size: 14px; line-height: 1.75; color: rgba(255,243,222,0.88); max-width: 360px; margin-top: var(--space-lg); }
        .stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: var(--space-xl); }
        
        .logos-grid > div:hover { border-color: rgba(177,18,38,0.25) !important; transform: translateY(-2px); }
        
        @media (max-width: 900px) { 
          .stats-grid { grid-template-columns: repeat(2, 1fr); gap: var(--space-3xl) var(--space-xl); }
          .about-story-grid { grid-template-columns: 1fr !important; }
          .restaurants-grid { grid-template-columns: repeat(2, 1fr); }
          .restaurant-card, .restaurant-card--wide { grid-column: span 1; }
          .heritage-photos { min-height: 480px; max-width: 460px; margin: 0 auto; position: relative !important; top: 0 !important; }
          .logos-grid { grid-template-columns: repeat(4, 1fr) !important; }
        }
        @media (max-width: 600px) { 
          .stats-grid { grid-template-columns: 1fr; }
          .restaurants-grid { grid-template-columns: 1fr; }
          .logos-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
      ` }} />
    </>
  );
}