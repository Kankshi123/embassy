'use client';

import React from 'react';

export interface TestimonialGridProps {
  theme: 'light' | 'dark';
  count: number;
}

const ALL_TESTIMONIALS = [
  {
    quote: "Embassy Catering made our wedding truly unforgettable. The food was piping hot at 1 AM, every single counter. Guests are still talking about the Bengali section and the live sushi bar.",
    author: "Priya & Rahul S.",
    event: "Wedding",
    platform: "WedMeGood",
    stars: "★★★★★"
  },
  {
    quote: "They had a great variety of dishes in different cuisines. Everyone loved the food. One can fall short of words to express the taste.",
    author: "Vikram T.",
    event: "Multi-Function Event",
    platform: "WeddingWire",
    stars: "★★★★★"
  },
  {
    quote: "We've used Embassy for our annual corporate gala for 6 years running. The consistency is remarkable — same quality whether it's 300 or 2,000 guests.",
    author: "Meera R.",
    event: "Director, Fortune 500 Company",
    platform: "",
    stars: "★★★★★"
  },
  {
    quote: "The tasting session sealed it for us. They customised an entire Bengali–Mughlai menu for our family. Not one catering house in Delhi could match it.",
    author: "Arjun & Sunita K.",
    event: "Wedding Reception",
    platform: "VenueLook",
    stars: "★★★★★"
  },
  {
    quote: "Diplomatic functions require a different level of care. Embassy understood the protocol, delivered immaculately, and received praise from the delegation.",
    author: "Head of Delegation Affairs",
    event: "Embassy Client",
    platform: "",
    stars: "★★★★★"
  },
  {
    quote: "From the first consultation to the last course at midnight, there was always a named person accountable. That is incredibly rare in this industry.",
    author: "Sanjay M.",
    event: "Product Launch Event",
    platform: "JustDial",
    stars: "★★★★"
  }
];

export default function TestimonialGrid({ theme, count }: TestimonialGridProps) {
  const displayTestimonials = ALL_TESTIMONIALS.slice(0, count);

  const isLight = theme === 'light';
  const cardBg = isLight ? '#FFFDF9' : '#1F0B0C';
  const cardBorder = isLight ? 'var(--border-luxury-gold)' : '1px solid rgba(201, 168, 76, 0.25)';
  const textColor = isLight ? 'var(--color-text-dark)' : 'rgba(255,255,255,0.9)';
  const attrColor = isLight ? 'rgba(26,26,26,0.5)' : 'rgba(255,255,255,0.5)';

  return (
    <div className="testimonial-grid-wrapper">
      <style>{`
        .testimonial-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-xl);
        }
        .testimonial-card {
          transition: all 0.38s var(--ease-embassy) !important;
        }
        .testimonial-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(201, 168, 76, 0.12) !important;
          border-color: var(--color-gold) !important;
        }
        @media (max-width: 900px) { .testimonial-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 600px) { .testimonial-grid { grid-template-columns: 1fr; } }
      `}</style>

      <div className="testimonial-grid">
        {displayTestimonials.map((t, idx) => (
          <div 
            key={idx} 
            className="testimonial-card"
            style={{
              background: cardBg,
              border: cardBorder,
              borderRadius: '0px',
              padding: 'var(--space-2xl)',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <div style={{ color: 'var(--color-gold)', fontSize: '13px', marginBottom: 'var(--space-lg)' }}>
              {t.stars}
            </div>
            
            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: '48px',
              color: 'var(--color-primary)',
              opacity: 0.25,
              position: 'absolute',
              top: 'var(--space-xl)',
              right: 'var(--space-xl)',
              lineHeight: 1
            }}>
              &ldquo;
            </div>

            <p style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: 'clamp(15px, 1.4vw, 17px)',
              lineHeight: 1.7,
              color: textColor,
              marginBottom: 'var(--space-2xl)',
              flexGrow: 1
            }}>
              "{t.quote}"
            </p>

            <div style={{
              fontFamily: 'var(--font-body)',
              fontSize: '11px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: attrColor,
              lineHeight: 1.5
            }}>
              <strong style={{ color: textColor }}>{t.author}</strong><br />
              {t.event} {t.platform && `· ${t.platform}`}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}