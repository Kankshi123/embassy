// EMBASSY CATERING — src/app/events/page.tsx — SEO Optimized June 24, 2026
import type { Metadata } from 'next';
import NavBar from '@/components/primitives/NavBar';
import Moment07Departure from '@/components/Homepage/Moment07departure';
import EnquiryForm from '@/components/lead/EnquiryForm';
import TestimonialGrid from '@/components/shared/Testimonials';
import FAQAccordion, { CORE_FAQS } from '@/components/shared/FAQAccordion';
import GoogleReviews from '@/components/shared/GoogleReviews';
import WhatsappButton from '@/components/ui/WhatsappButton';
import TrustedByMarquee from '@/components/Homepage/TrustedByMarquee';
import ScriptEyebrow from '@/components/primitives/ScriptEyebrow';
import ButtonPrimary from '@/components/primitives/ButtonPrimary';

export const metadata: Metadata = {
  title: 'Corporate & Diplomatic Event Catering Delhi | Embassy Since 1948',
  description:
    'Corporate event catering Delhi NCR — diplomatic receptions, conferences, product launches, and galas for 50–5,000 guests. Trusted by Fortune 500 and government since 1948. Quote in 24 hours.',
  openGraph: {
    title: 'Corporate & Event Catering Delhi NCR | The Embassy Catering Since 1948',
    description: 'Trusted by embassies, government, and Fortune 500 for corporate and diplomatic catering in Delhi NCR since 1948.',
  },
  alternates: {
    canonical: 'https://embassy-catering.netlify.app/events',
  },
};

// Events page structured data for SEO & AEO
const eventSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://embassy-catering.netlify.app/events#service',
      name: 'Corporate & Event Catering Delhi NCR',
      serviceType: 'Corporate Event Catering',
      description: 'Premium corporate lunches, dinners, conferences, diplomatic receptions, and galas for 50–5,000 guests in Delhi NCR. Trusted by Fortune 500, government institutions, and foreign embassies since 1948.',
      provider: { '@id': 'https://embassy-catering.netlify.app/#organization' },
      areaServed: { '@type': 'AdministrativeArea', name: 'Delhi NCR' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://embassy-catering.netlify.app' },
        { '@type': 'ListItem', position: 2, name: 'Corporate & Event Catering', item: 'https://embassy-catering.netlify.app/events' },
      ],
    },
  ],
};

const EVENT_TYPES = [
  { image: '/assets/event-corporate.png', title: 'Corporate Lunches & Dinners', desc: '100 – 2,000 guests' },
  { image: '/assets/event-conference.png', title: 'Conferences & Product Launches', desc: '50 – 3,000 guests' },
  { image: '/assets/event-diplomatic.png', title: 'Diplomatic Receptions', desc: 'Protocol-compliant catering' },
  { image: '/assets/event-gala.png', title: 'Award Ceremonies & Galas', desc: '200 – 5,000 guests' },
  { image: '/assets/event-cocktail.png', title: 'Cocktail & Networking Events', desc: 'High-presentation canape service' },
  { image: '/assets/event-social.png', title: 'Social Celebrations', desc: 'Birthdays, anniversaries, milestones' },
];

const CLIENT_TYPES = [
  { title: 'Foreign Embassies' },
  { title: 'Corporate Houses' },
  { title: 'Educational Institutions' },
  { title: 'Government Departments' },
  { title: 'International Operations' },
  { title: 'Hospitality Groups' },
];

const PROCESS_STEPS = [
  { num: '01', title: 'Initial Consultation', body: 'We understand your event requirements, guest profile, cuisine preferences, and operational constraints.' },
  { num: '02', title: 'Menu Curation', body: 'Our culinary team builds a bespoke menu. You receive a detailed proposal with itemised pricing within 48 hours.' },
  { num: '03', title: 'Tasting Session', body: 'Experience the menu before you commit. Tasting sessions available Tuesday to Saturday by appointment.' },
  { num: '04', title: 'Event Day', body: 'A senior Embassy contact manages your event from setup to final service — no handoffs, full accountability.' },
];

export default function EventsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
      />
      <NavBar />
      <WhatsappButton />

      <main style={{ paddingTop: '82px' }}>

        {/* ── HERO ── */}
        <section className="events-hero-section responsive-section" style={{
          minHeight: '85svh', display: 'flex', alignItems: 'center', justifyContent: 'center',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative', overflow: 'hidden', padding: 'var(--space-5xl) var(--space-xl)',
        }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 30% 70%, rgba(177,18,38,0.2), transparent 55%)', pointerEvents: 'none' }} />
          <div id="events-hero-content" style={{ maxWidth: '900px', position: 'relative', zIndex: 2 }}>
            <ScriptEyebrow text="Event Catering" color="rgba(201,168,76,0.85)" />
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(44px, 6.5vw, 88px)', fontWeight: 600, color: '#FFFFFF', lineHeight: 1.05, margin: 'var(--space-lg) 0 var(--space-xl)' }}>
              Events Remembered.<br />Catering Perfected.
            </h1>
            <p className="speakable" style={{ fontFamily: 'var(--font-body)', fontSize: '16px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, maxWidth: '540px', marginBottom: 'var(--space-3xl)' }}>
              From diplomatic receptions to corporate galas. Trusted by embassies, government departments, and India&apos;s leading institutions since 1948.
            </p>
            <div style={{ display: 'inline-flex' }}>
              <ButtonPrimary href="#corporate-form">
                Request a Quote
              </ButtonPrimary>
            </div>
          </div>
        </section>

        {/* ── EVENT TYPES ── */}
        <section className="responsive-section" style={{ background: '#FFFFFF', padding: 'var(--space-5xl) var(--space-xl)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-4xl)' }}>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '10px', letterSpacing: '0.2em', color: 'rgba(26,26,26,0.45)', textTransform: 'uppercase', marginBottom: 'var(--space-md)' }}>What We Cater</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 3.5vw, 48px)', fontWeight: 600, color: 'var(--color-text-dark)' }}>
                Every occasion. One standard.
              </h2>
            </div>
            <div className="event-grid">
              {EVENT_TYPES.map((e) => (
                <div key={e.title} className="event-card" style={{ padding: 'var(--space-xl)', background: '#FFFDF9', borderRadius: '0px', border: 'var(--border-luxury-gold)', display: 'flex', flexDirection: 'column', position: 'relative' }}>
                  {/* Decorative Inset Frame */}
                  <div style={{
                    position: 'absolute',
                    inset: '4px',
                    border: '1px solid rgba(201, 168, 76, 0.12)',
                    pointerEvents: 'none'
                  }} />

                  {/* Widescreen Image Header */}
                  <div style={{
                    width: '100%',
                    aspectRatio: '16/10',
                    overflow: 'hidden',
                    border: '1px solid rgba(201, 168, 76, 0.18)',
                    marginBottom: 'var(--space-lg)',
                    position: 'relative',
                    zIndex: 1
                  }}>
                    <img src={e.image} alt={e.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>

                  <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(16px, 1.4vw, 20px)', fontWeight: 600, color: 'var(--color-text-dark)', marginBottom: '8px', lineHeight: 1.3 }}>
                      {e.title}
                    </h3>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'rgba(26,26,26,0.6)', letterSpacing: '0.02em', lineHeight: 1.5 }}>
                      {e.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CLIENT PORTFOLIO ── */}
        <section className="responsive-section" style={{ background: 'linear-gradient(135deg, #B11226, #8B0000)', padding: 'var(--space-5xl) var(--space-xl)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '10px', letterSpacing: '0.22em', color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase', marginBottom: 'var(--space-md)' }}>Our Clientele</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 3.5vw, 48px)', fontWeight: 600, color: '#FFFFFF', marginBottom: 'var(--space-lg)' }}>
              Trusted by institutions, governments, and embassies.
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'rgba(255,255,255,0.6)', marginBottom: 'var(--space-4xl)', maxWidth: '520px', margin: '0 auto var(--space-4xl)' }}>
              International operations in the Netherlands. Pan-India reach including Delhi and Kanpur. This is not a local caterer — it is a state-banquet tier operator.
            </p>
            <div className="client-grid">
              {CLIENT_TYPES.map((c) => (
                <div key={c.title} style={{ padding: 'var(--space-xl)', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(201,168,76,0.22)', borderRadius: '0px', textAlign: 'center' }}>
                  <div style={{ color: '#C9A84C', fontSize: '18px', marginBottom: 'var(--space-sm)', fontFamily: 'var(--font-display)' }}>❖</div>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', fontWeight: 500, color: 'rgba(255,255,255,0.9)', letterSpacing: '0.04em' }}>{c.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <TrustedByMarquee />

        {/* ── PROCESS ── */}
        <section className="responsive-section" style={{ background: '#FAF7F2', padding: 'var(--space-5xl) var(--space-xl)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-4xl)' }}>
              <ScriptEyebrow text="How We Work" color="var(--color-primary)" />
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 3.5vw, 48px)', fontWeight: 600, color: 'var(--color-text-dark)' }}>
                From first call to last course.
              </h2>
            </div>
            <div className="process-grid">
              {PROCESS_STEPS.map((step) => (
                <div key={step.num} style={{ position: 'relative', paddingLeft: 'var(--space-3xl)' }}>
                  <div style={{ position: 'absolute', left: 0, top: 0, fontFamily: 'var(--font-display)', fontSize: '48px', fontWeight: 600, color: 'rgba(177,18,38,0.15)', lineHeight: 1 }}>{step.num}</div>
                  <div style={{ paddingTop: 'var(--space-2xl)' }}>
                    <h3 style={{ fontFamily: 'var(--font-body)', fontSize: '15px', fontWeight: 600, color: 'var(--color-text-dark)', marginBottom: 'var(--space-sm)' }}>{step.title}</h3>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'rgba(26,26,26,0.6)', lineHeight: 1.75 }}>{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── LIVE GOOGLE REVIEWS PIPELINE INTEGRATION ── */}
        <GoogleReviews placeId="ChIJ89u9_pDeDDkR_0y0p2Xm-9I" maxReviews={3} />

        {/* ── LEGACY REVIEWS ARCHIVE FALLBACK ── */}
        <section className="responsive-section" style={{ background: '#FFFFFF', padding: '0 var(--space-xl) var(--space-5xl)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <TestimonialGrid theme="light" count={3} />
          </div>
        </section>

        {/* ── CORPORATE ENQUIRY FORM ── */}
        <section id="corporate-form" className="responsive-section" style={{ background: '#FAF7F2', padding: 'var(--space-5xl) var(--space-xl)' }}>
          <div style={{ maxWidth: '820px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-4xl)' }}>
              <ScriptEyebrow text="Get in Touch" color="var(--color-primary)" />
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 600, color: 'var(--color-primary)', lineHeight: 1.1, marginBottom: 'var(--space-md)' }}>
                Request a Corporate Quote.
              </h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'rgba(26,26,26,0.6)', lineHeight: 1.75 }}>
                Quotes provided within 24 business hours. Monday – Saturday, 9 AM – 8 PM.
              </p>
            </div>
            <EnquiryForm defaultTab="corporate" />
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="responsive-section" style={{ background: '#FFFFFF', padding: 'var(--space-5xl) var(--space-xl)' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-4xl)' }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 3vw, 44px)', fontWeight: 600, color: 'var(--color-text-dark)' }}>
                Common Questions
              </h2>
            </div>
            <FAQAccordion faqs={CORE_FAQS.slice(0, 7)} theme="light" includeSchema={true} />
          </div>
        </section>

      </main>

      <Moment07Departure />

      <style dangerouslySetInnerHTML={{ __html: `
        .events-hero-section {
          background-image: linear-gradient(rgba(26, 8, 9, 0.76) 0%, rgba(26, 8, 9, 0.7) 100%), url('https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=70&w=800');
        }
        @media (min-width: 768px) {
          .events-hero-section {
            background-image: linear-gradient(rgba(26, 8, 9, 0.76) 0%, rgba(26, 8, 9, 0.7) 100%), url('https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1920');
          }
        }
        .event-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-xl); }
        .event-card { transition: all 0.38s var(--ease-embassy); }
        .event-card:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(201, 168, 76, 0.1); border-color: var(--color-gold) !important; }
        .client-grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: var(--space-md); }
        .process-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: var(--space-2xl); }
        .company-logos-grid > div:hover { border-color: rgba(177,18,38,0.25) !important; transform: translateY(-2px); }
        
        @media (max-width: 1100px) { 
          .client-grid { grid-template-columns: repeat(3, 1fr); } 
          .process-grid { grid-template-columns: repeat(2, 1fr); } 
          .company-logos-grid { grid-template-columns: repeat(4, 1fr) !important; }
        }
        
        @media (max-width: 768px) { 
          .event-grid { grid-template-columns: 1fr 1fr; } 
          .client-grid { grid-template-columns: repeat(2, 1fr); } 
          .process-grid { grid-template-columns: 1fr; } 
          .company-logos-grid { grid-template-columns: repeat(4, 1fr) !important; }
        }

        @media (max-width: 600px) {
          #events-hero-content {
            padding: 0 var(--space-lg) !important;
          }
          .event-grid { grid-template-columns: 1fr !important; }
          .company-logos-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
      ` }} />
    </>
  );
}