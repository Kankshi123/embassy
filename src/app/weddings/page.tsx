// EMBASSY CATERING — src/app/weddings/page.tsx — Optimized June 15, 2026
import type { Metadata } from 'next';
import NavBar from '@/components/primitives/NavBar';
import Moment07Departure from '@/components/Homepage/Moment07departure';
import EnquiryForm from '@/components/lead/EnquiryForm';
import TestimonialGrid from '@/components/shared/Testimonials';
import FAQAccordion, { WEDDING_FAQS } from '@/components/shared/FAQAccordion';
import GoogleReviews from '@/components/shared/GoogleReviews';
import WhatsappButton from '@/components/ui/WhatsappButton';
import ScriptEyebrow from '@/components/primitives/ScriptEyebrow';
import ButtonPrimary from '@/components/primitives/ButtonPrimary';
import ButtonSecondary from '@/components/primitives/ButtonSecondary';
import MenuFlipSection from '@/components/shared/MenuFlipSection';
import MenuPeek from '@/components/shared/MenuPeek';

export const metadata: Metadata = {
  title: 'Wedding Catering Delhi NCR | Premium Banquet & Live Counter Since 1948',
  description:
    "Award-winning luxury wedding catering in Delhi NCR since 1948. 10M+ guests served. Custom multi-cuisine menus, live counters, piping hot food. 100–5,000 guests. Prices start from ₹2,000 per person.",
  openGraph: {
    title: 'Wedding Catering Delhi NCR | The Embassy Catering Since 1948',
    description: "Delhi's most storied wedding caterer since 1948. 10M+ guests. Custom menus, live counters, one named contact for every event.",
  },
  alternates: {
    canonical: 'https://embassy-catering.netlify.app/weddings',
  },
};

// Wedding page structured data for SEO & AEO
const weddingSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://embassy-catering.netlify.app/weddings#service',
      name: 'Wedding Catering Delhi NCR',
      serviceType: 'Wedding Catering',
      description: 'Luxury wedding catering for 100–5,000 guests in Delhi NCR. Multi-cuisine menus including North Indian, Continental, Chinese, and regional specialties. Live counter stations, piping hot service guaranteed.',
      provider: { '@id': 'https://embassy-catering.netlify.app/#organization' },
      areaServed: { '@type': 'AdministrativeArea', name: 'Delhi NCR' },
      offers: {
        '@type': 'Offer',
        priceSpecification: [
          { '@type': 'PriceSpecification', price: '2000', priceCurrency: 'INR', name: 'Per person (starting)' },
        ],
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://embassy-catering.netlify.app' },
        { '@type': 'ListItem', position: 2, name: 'Wedding Catering', item: 'https://embassy-catering.netlify.app/weddings' },
      ],
    },
  ],
};

const DIFFERENTIATORS = [
  { image: '/assets/diff-hot.png', title: 'Piping Hot. Every Course.', body: 'Our operational standards guarantee hot food at any hour — our clients have praised us at 4am. Always.' },
  { image: '/assets/diff-contact.png', title: 'One Named Contact. Always.', body: 'A senior Embassy team member is accountable for your event, from first call to final service.' },
  { image: '/assets/diff-scratch.png', title: 'Built From Scratch.', body: 'Every menu is customised for your family. Bengali specialties, dietary requirements, regional cuisines — all built to brief.' },
  { image: '/assets/diff-weddings.png', title: '75 Years of Weddings.', body: 'Since 1948, Embassy has served tens of millions of guests. Your wedding joins a lineage of celebrations.' },
  { image: '/assets/diff-calendar.png', title: 'Books 14–18 Months Ahead.', body: 'Premium dates fill early. We recommend enquiring as soon as your date is confirmed.' },
];

export default function WeddingsPage() {
  return (
    <>
      <NavBar />
      <WhatsappButton />

      <main style={{ paddingTop: '82px' }}>

        {/* ── HERO ── */}
        <section className="weddings-hero-section responsive-section" style={{
          minHeight: '90svh', display: 'flex', alignItems: 'center', justifyContent: 'center',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative', overflow: 'hidden', padding: 'var(--space-5xl) var(--space-xl)',
        }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 80%, rgba(177,18,38,0.25), transparent 60%)', pointerEvents: 'none' }} />
          <div id="weddings-hero-content" style={{ textAlign: 'center', position: 'relative', zIndex: 2, maxWidth: '800px' }}>
            <ScriptEyebrow text="Wedding Catering" color="rgba(201,168,76,0.9)" />
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(48px, 7vw, 96px)', fontWeight: 600, color: '#FFFFFF', lineHeight: 1.05, margin: 'var(--space-lg) 0 var(--space-xl)' }}>
              Your Wedding.<br />Our Legacy.
            </h1>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '16px', color: 'rgba(255,255,255,0.68)', lineHeight: 1.8, maxWidth: '520px', margin: '0 auto var(--space-3xl)' }}>
              Delhi's original luxury caterer. Since 1948. Serving 100 to 5,000 guests with the same uncompromising standard.
            </p>
            <div style={{ display: 'flex', gap: 'var(--space-lg)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
              <ButtonPrimary href="#enquiry-form">
                Check Your Date
              </ButtonPrimary>
              <ButtonSecondary href="#menu-section">
                Explore the Menu
              </ButtonSecondary>
            </div>
            </div>
          </div>
        </section>

        {/* ── DIFFERENTIATORS ── */}
        <section className="responsive-section" style={{ background: '#FFFFFF', padding: 'var(--space-5xl) var(--space-xl)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-4xl)' }}>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '10px', letterSpacing: '0.2em', color: 'rgba(26,26,26,0.45)', textTransform: 'uppercase', marginBottom: 'var(--space-md)' }}>The Embassy Promise</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 3.5vw, 48px)', fontWeight: 600, color: 'var(--color-primary)' }}>
                Why families choose Embassy for their most important day.
              </h2>
            </div>
            <div className="diff-grid">
              {DIFFERENTIATORS.map((d) => (
                <div key={d.title} className="diff-card" style={{
                  padding: 'var(--space-xl)',
                  border: 'var(--border-luxury-gold)',
                  borderRadius: '0px',
                  background: '#FFFDF9',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative'
                }}>
                  {/* Decorative Inset Line */}
                  <div style={{
                    position: 'absolute',
                    inset: '4px',
                    border: '1px solid rgba(201, 168, 76, 0.12)',
                    pointerEvents: 'none'
                  }} />
                  
                  {/* Thematic Image */}
                  <div style={{
                    width: '100%',
                    aspectRatio: '16/10',
                    overflow: 'hidden',
                    border: '1px solid rgba(201, 168, 76, 0.18)',
                    marginBottom: 'var(--space-lg)',
                    position: 'relative',
                    zIndex: 1
                  }}>
                    <img src={d.image} alt={d.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  
                  <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(18px, 1.4vw, 22px)', fontWeight: 600, color: 'var(--color-text-dark)', marginBottom: 'var(--space-sm)', lineHeight: 1.3 }}>
                      {d.title}
                    </h3>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'rgba(26,26,26,0.62)', lineHeight: 1.75 }}>
                      {d.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── MENU GLIMPSES ── */}
        <div id="menu-section">
          <MenuFlipSection variant="homepage" extra={<MenuPeek />} />
        </div>

        {/* ── PRICING BAND ── */}
        <section style={{ background: 'linear-gradient(135deg, #B11226, #8B0000)', padding: 'var(--space-4xl) var(--space-xl)' }}>
          <div className="pricing-band-grid" style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-2xl)', alignItems: 'center' }}>
            <div style={{ display: 'flex', gap: 'var(--space-xl)', flexWrap: 'wrap' }}>
              {[{ label: '500+ guests', price: '₹2,000–2,500', sub: 'per person' }, { label: 'Under 500 guests', price: '₹2,500–3,000', sub: 'per person' }].map((p) => (
                <div key={p.label} style={{ flex: 1, minWidth: '160px', padding: 'var(--space-xl)', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.2)' }}>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '10px', letterSpacing: '0.14em', color: 'rgba(255,255,255,0.6)', marginBottom: 'var(--space-sm)', textTransform: 'uppercase' }}>{p.label}</p>
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: '28px', fontWeight: 600, color: '#C9A84C', lineHeight: 1, whiteSpace: 'nowrap' }}>{p.price}</p>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '11px', color: 'rgba(255,255,255,0.5)', marginTop: '4px' }}>{p.sub}</p>
                </div>
              ))}
            </div>
            <div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 2.5vw, 32px)', fontWeight: 600, color: '#FFFFFF', lineHeight: 1.3, marginBottom: 'var(--space-md)' }}>
                Packages tailored to your event.
              </h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, marginBottom: 'var(--space-xl)' }}>
                Our prices start from ₹2,000 per person and above. Final pricing depends on guest count, chosen cuisines, live counter stations, and service requirements. We provide a precise quote within 48 hours.
              </p>
              <ButtonSecondary href="#enquiry-form" theme="dark">
                Request Your Quote
              </ButtonSecondary>
            </div>
          </div>
        </section>

        {/* ── LIVE GOOGLE REVIEWS PIPELINE INTEGRATION ── */}
        <GoogleReviews placeId="ChIJ89u9_pDeDDkR_0y0p2Xm-9I" maxReviews={3} />

        {/* ── LEGACY REVIEWS ARCHIVE FALLBACK ── */}
        <section style={{ background: '#FFFFFF', padding: '0 var(--space-xl) var(--space-5xl)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <TestimonialGrid theme="light" count={3} />
          </div>
        </section>

        {/* ── LEAD CAPTURE FORM ── */}
        <section id="enquiry-form" className="responsive-section" style={{ background: '#FAF7F2', padding: 'var(--space-5xl) var(--space-xl)' }}>
          <div style={{ maxWidth: '820px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-4xl)' }}>
              <ScriptEyebrow text="Reserve Your Date" color="var(--color-primary)" />
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 600, color: 'var(--color-primary)', lineHeight: 1.1, marginBottom: 'var(--space-md)' }}>
                Is Your Date Available?
              </h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'rgba(26,26,26,0.6)', lineHeight: 1.75 }}>
                Embassy books 14–18 months ahead for premium dates. The earlier you enquire, the better.
              </p>
            </div>
            <EnquiryForm defaultTab="wedding" />
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="responsive-section" style={{ background: '#FFFFFF', padding: 'var(--space-5xl) var(--space-xl)' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-4xl)' }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 3vw, 44px)', fontWeight: 600, color: 'var(--color-text-dark)' }}>
                Frequently Asked Questions
              </h2>
            </div>
            <FAQAccordion faqs={WEDDING_FAQS} theme="light" includeSchema={true} />
          </div>
        </section>

      </main>

      <Moment07Departure />

      <style dangerouslySetInnerHTML={{ __html: `
        .weddings-hero-section {
          background-image: linear-gradient(rgba(26, 8, 9, 0.76) 0%, rgba(26, 8, 9, 0.7) 100%), url('https://images.unsplash.com/photo-1519741497674-611481863552?q=70&w=800');
        }
        @media (min-width: 768px) {
          .weddings-hero-section {
            background-image: linear-gradient(rgba(26, 8, 9, 0.76) 0%, rgba(26, 8, 9, 0.7) 100%), url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1920');
          }
        }
        .diff-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-xl); }
        .diff-card { transition: all 0.38s var(--ease-embassy); }
        .diff-card:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(201, 168, 76, 0.1); border-color: var(--color-gold) !important; }
        @media (max-width: 900px) { .diff-grid { grid-template-columns: 1fr; gap: var(--space-lg); } }
        @media (min-width: 600px) and (max-width: 900px) { .diff-grid { grid-template-columns: 1fr 1fr; } }
        
        @media (max-width: 600px) {
          .diff-grid {
            grid-template-columns: 1fr !important;
          }
          /* Hero padding */
          #weddings-hero-content {
            padding: 0 var(--space-lg) !important;
          }
          /* Pricing band stack */
          .pricing-band-grid {
            grid-template-columns: 1fr !important;
          }
        }
      ` }} />
    </>
  );
}