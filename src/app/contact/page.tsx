// EMBASSY CATERING — src/app/contact/page.tsx — Optimized June 15, 2026
import type { Metadata } from 'next';
import NavBar from '@/components/primitives/NavBar';
import Moment07Departure from '@/components/Homepage/Moment07departure';
import EnquiryForm from '@/components/lead/EnquiryForm';
import FAQAccordion, { WEDDING_FAQS, CORE_FAQS } from '@/components/shared/FAQAccordion';
import WhatsappButton from '@/components/ui/WhatsappButton';
import { WHATSAPP_URL } from '@/lib/whatsapp';

export const metadata: Metadata = {
  title: 'Contact The Embassy Catering Delhi | Enquire for Weddings & Events',
  description:
    'Contact The Embassy Catering for luxury wedding catering, corporate events, and diplomatic functions in Delhi NCR. Response within 4 business hours. Monday to Saturday, 9 AM to 8 PM.',
  alternates: {
    canonical: 'https://embassy-catering.netlify.app/contact',
  },
};

// Contact page schema for SEO & AEO
const contactSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ContactPage',
      '@id': 'https://embassy-catering.netlify.app/contact#contactpage',
      name: 'Contact The Embassy Catering Delhi',
      description: 'Enquire about luxury catering for your wedding, corporate event, or diplomatic function in Delhi NCR. The Embassy Catering responds within 4 business hours.',
      about: { '@id': 'https://embassy-catering.netlify.app/#organization' },
      url: 'https://embassy-catering.netlify.app/contact',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://embassy-catering.netlify.app' },
        { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://embassy-catering.netlify.app/contact' },
      ],
    },
  ],
};


export default function ContactPage() {
  // Combine FAQs cleanly for complete site coverage on the main contact point
  const combinedFAQs = [...WEDDING_FAQS.slice(0, 4), ...CORE_FAQS.slice(0, 4)];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <NavBar />
      <WhatsappButton />


      <main style={{ paddingTop: '82px' }}>

        {/* ── HERO ── */}
        <section className="responsive-section" style={{
          background: 'linear-gradient(135deg, #B11226 0%, #8B0000 100%)',
          padding: 'var(--space-5xl) var(--space-xl) var(--space-4xl)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse at center top, rgba(255,255,255,0.06), transparent 60%)',
            pointerEvents: 'none',
          }} />
          <div id="contact-hero-content" style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '10px', letterSpacing: '0.22em', color: 'rgba(255,255,255,0.55)', marginBottom: 'var(--space-lg)', textTransform: 'uppercase' }}>
              Since 1948
            </p>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 6vw, 80px)', fontWeight: 600, color: '#FFFFFF', lineHeight: 1.1, marginBottom: 'var(--space-xl)' }}>
              Begin Your Enquiry.
            </h1>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'rgba(255,255,255,0.72)', maxWidth: '480px', margin: '0 auto', lineHeight: 1.75 }}>
              Our team responds within 4 business hours.<br />
              Monday – Saturday, 9 AM – 8 PM.
            </p>
          </div>
        </section>

        {/* ── MAIN CONTENT ── */}
        <section className="responsive-section" style={{ background: '#FAF7F2', padding: 'var(--space-5xl) var(--space-xl)' }}>
          <div className="contact-layout" style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 380px', gap: 'var(--space-4xl)', alignItems: 'start' }}>

            {/* FORM CONTAINER */}
            <div className="form-container-card" style={{ background: '#FFFFFF', padding: 'var(--space-3xl)', borderRadius: '4px', border: '1px solid rgba(26,26,26,0.08)' }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 2.5vw, 36px)', fontWeight: 600, color: 'var(--color-primary)', marginBottom: 'var(--space-sm)' }}>
                Tell us about your event.
              </h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'rgba(26,26,26,0.55)', marginBottom: 'var(--space-2xl)', lineHeight: 1.7 }}>
                Select your event type and we'll match you with the right enquiry path.
              </p>
              <EnquiryForm />
            </div>

            {/* SIDEBAR BLOCK LAYOUT */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)' }}>

              {/* Direct contact info card */}
              <div className="form-container-card" style={{ background: '#FFFFFF', padding: 'var(--space-2xl)', borderRadius: '4px', border: '1px solid rgba(26,26,26,0.08)' }}>
                <h3 style={{ fontFamily: 'var(--font-body)', fontSize: '10px', letterSpacing: '0.18em', color: 'rgba(26,26,26,0.45)', textTransform: 'uppercase', marginBottom: 'var(--space-lg)' }}>
                  Reach Us Directly
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
                  <a href="tel:+918448496874" style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none' }}>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '10px', letterSpacing: '0.12em', color: 'rgba(26,26,26,0.45)', textTransform: 'uppercase', marginBottom: '3px' }}>Phone</span>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '16px', color: 'var(--color-primary)', fontWeight: 500 }}>+91 84484 96874</span>
                  </a>
                  <a href={WHATSAPP_URL}
                    target="_blank" rel="noopener noreferrer"
                    style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none' }}>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '10px', letterSpacing: '0.12em', color: 'rgba(26,26,26,0.45)', textTransform: 'uppercase', marginBottom: '3px' }}>WhatsApp</span>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '16px', color: '#25D366', fontWeight: 500 }}>Chat with us ↗</span>
                  </a>
                  <a href="mailto:events@embassycatering.in" style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none' }}>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '10px', letterSpacing: '0.12em', color: 'rgba(26,26,26,0.45)', textTransform: 'uppercase', marginBottom: '3px' }}>Email</span>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--color-primary)', fontWeight: 400 }}>events@embassycatering.in</span>
                  </a>
                </div>
              </div>

              {/* Kitchen Location coordinates info card */}
              <div className="form-container-card" style={{ background: '#FFFFFF', padding: 'var(--space-2xl)', borderRadius: '4px', border: '1px solid rgba(26,26,26,0.08)' }}>
                <h3 style={{ fontFamily: 'var(--font-body)', fontSize: '10px', letterSpacing: '0.18em', color: 'rgba(26,26,26,0.45)', textTransform: 'uppercase', marginBottom: 'var(--space-lg)' }}>
                  Our Kitchen
                </h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'rgba(26,26,26,0.7)', lineHeight: 1.8 }}>
                  D-100, Udyog Vihar, Phase -V<br />
                  Gurgaon, Haryana — 122016
                </p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'rgba(26,26,26,0.45)', marginTop: 'var(--space-md)', lineHeight: 1.7 }}>
                  Monday – Saturday<br />9:00 AM – 8:00 PM
                </p>
              </div>

              {/* Trust signals metrics block layout */}
              <div className="form-container-card" style={{ background: 'linear-gradient(135deg, #B11226, #8B0000)', padding: 'var(--space-2xl)', borderRadius: '4px' }}>
                <h3 style={{ fontFamily: 'var(--font-body)', fontSize: '10px', letterSpacing: '0.18em', color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase', marginBottom: 'var(--space-lg)' }}>
                  Trusted Since 1948
                </h3>
                {[
                  { value: '5.0 ★', label: 'WedMeGood Rating' },
                  { value: '4.1 ★', label: 'JustDial · 6,459 ratings' },
                  { value: '10M+', label: 'Guests served' },
                  { value: '75+', label: 'Years of excellence' },
                ].map((stat) => (
                  <div key={stat.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'rgba(255,255,255,0.65)' }}>{stat.label}</span>
                    <span className="trust-stat-value" style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 600, color: '#C9A84C' }}>{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CENTRAL FAQS SYNCHRONIZATION MATRIX SECTION ── */}
        <section className="responsive-section" style={{ background: '#FFFFFF', padding: '0 var(--space-xl) var(--space-5xl)' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-4xl)' }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 600, color: 'var(--color-text-dark)' }}>
                Frequently Asked Questions
              </h2>
            </div>
            <FAQAccordion faqs={combinedFAQs} theme="light" includeSchema={true} />
          </div>
        </section>

        {/* ── MAP EMBED AXIS SECTION ── */}
        <section style={{ background: '#F5F5F0' }}>
          <div className="map-container-div" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 var(--space-xl) var(--space-4xl)' }}>
            <div style={{ borderRadius: '4px', overflow: 'hidden', height: '320px', border: '1px solid rgba(26,26,26,0.1)' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.4746624996414!2d77.2687588761158!3d28.52543417572421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce197febebb33%3A0xd9fbe665a7b44cff!2sThe%20Embassy%20Catering!5e0!3m2!1sen!2sin!4v1718460000000!5m2!1sen!2sin"
                width="100%" height="100%"
                style={{ border: 0 }} allowFullScreen loading="lazy"
                title="The Embassy Catering Kitchen Location — Udyog Vihar, Gurgaon"
              />
            </div>
          </div>
        </section>

      </main>

      <Moment07Departure />

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 900px) {
          .contact-layout { 
            grid-template-columns: 1fr !important; 
            gap: var(--space-2xl) !important;
          }
        }
        @media (max-width: 600px) {
          #contact-hero-content { padding: 0 var(--space-lg) !important; }
          .trust-stat-value { font-size: 22px !important; }
          .map-container-div {
            padding: 0 var(--space-md) var(--space-2xl) !important;
          }
        }
      ` }} />
    </>
  );
}