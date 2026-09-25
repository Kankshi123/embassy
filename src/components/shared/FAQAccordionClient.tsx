// EMBASSY CATERING — src/components/shared/FAQAccordionClient.tsx — Optimized June 15, 2026
'use client';

import React, { useState } from 'react';
import type { FAQ } from './FAQAccordion';

interface FAQAccordionClientProps {
  faqs: FAQ[];
  theme: 'light' | 'dark';
  includeSchema?: boolean;
}

export default function FAQAccordionClient({ faqs, theme, includeSchema = false }: FAQAccordionClientProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const isLight = theme === 'light';
  const borderColor = isLight ? 'rgba(26,26,26,0.08)' : 'rgba(255,255,255,0.15)';
  const textColor = isLight ? 'var(--color-text-dark)' : '#FFFFFF';
  const answerColor = isLight ? 'rgba(26,26,26,0.65)' : 'rgba(255,255,255,0.65)';

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const schemaData = includeSchema ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  return (
    <div style={{ fontFamily: 'var(--font-body)' }}>
      {includeSchema && (
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      )}
      
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} style={{ borderBottom: `1px solid ${borderColor}` }}>
            <button
              onClick={() => toggleFAQ(index)}
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 'var(--space-xl) 0',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
                color: textColor,
              }}
            >
              <span style={{ fontSize: '15px', fontWeight: 600, paddingRight: 'var(--space-lg)' }}>
                {faq.question}
              </span>
              <span style={{ color: 'var(--color-primary)', fontSize: '20px', fontWeight: 300, flexShrink: 0 }}>
                {isOpen ? '−' : '+'}
              </span>
            </button>
            
            <div 
              style={{
                maxHeight: isOpen ? '1000px' : '0',
                overflow: 'hidden',
                transition: 'max-height 0.4s ease-in-out',
              }}
            >
              <p style={{
                fontSize: '14px',
                lineHeight: 1.8,
                color: answerColor,
                padding: '0 var(--space-xl) var(--space-xl) 0',
                margin: 0
              }}>
                {faq.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}