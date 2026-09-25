// EMBASSY CATERING — src/components/shared/FAQAccordion.tsx — Optimized June 15, 2026
import React from 'react';
import FAQAccordionClient from './FAQAccordionClient';

export interface FAQ {
  question: string;
  answer: string;
}

export const WEDDING_FAQS: FAQ[] = [
  { question: "How far in advance should we book Embassy for our wedding?", answer: "Embassy books 14–18 months in advance for premium wedding dates in Delhi NCR. We recommend enquiring as soon as your date is confirmed. For dates within 6 months, we may still have availability — please call us directly." },
  { question: "What is the minimum and maximum guest count you cater for?", answer: "We cater for weddings from 100 to 5,000 guests. For smaller intimate gatherings under 100, please enquire and we'll advise accordingly." },
  { question: "Do you offer a tasting session before we commit?", answer: "Yes. We offer private tasting sessions by appointment, Tuesday to Saturday, 10 AM to 4 PM. This is complimentary for serious enquiries. You'll taste a curated selection from the menu you're considering." },
  { question: "Can you create a fully customised menu for our family?", answer: "Absolutely. Every Embassy menu is built from scratch for each event. If your family has specific regional cuisines, dietary requirements, or traditional dishes — our culinary team will accommodate them. Bengali specialties, Mughlai preparations, and Rajasthani cuisine are some of our most requested regional options." },
  { question: "What is your per-plate pricing for weddings?", answer: "Our wedding menus start from ₹2,000 per person — typically ₹2,000–₹2,500 for larger guest counts (500+) and ₹2,500–₹3,000 for smaller gatherings. Final pricing depends on chosen cuisines, live counter stations, service requirements, and guest count. We provide a precise quote within 48 hours of your enquiry." },
  { question: "Do you manage live counter stations?", answer: "Yes — live counters are one of Embassy's specialties. We operate dedicated live stations for Dimsum, Sushi, Chaat, Dosa & Idli, Taco, and Pizza. These can be added to any wedding package and are staffed by our specialist culinary teams." },
  { question: "Who is the point of contact during the event itself?", answer: "You will always have a senior Embassy contact assigned to your event from the first call through to final service. This person is directly reachable and fully accountable. No handoffs, no junior liaisons." },
  { question: "Do you serve outside Delhi NCR?", answer: "Our primary service area is Delhi NCR. We also operate internationally — including the Netherlands — for diplomatic and high-profile events. For events outside Delhi NCR within India, please enquire and we'll advise on feasibility." }
];

export const CORE_FAQS: FAQ[] = [
  { question: "What types of corporate events do you cater for?", answer: "Embassy caters for corporate lunches and dinners (100–2,000 guests), conferences and product launches (50–3,000 guests), award ceremonies and galas (200–5,000 guests), diplomatic receptions, cocktail and networking events, and large-scale government functions." },
  { question: "How quickly can you provide a corporate quote?", answer: "We provide detailed quotes within 24 business hours of your enquiry. For urgent requirements, please call us directly — we can often respond within 2 hours." },
  { question: "Do you have experience with diplomatic and government events?", answer: "Yes. Embassy has been a trusted caterer for foreign embassies, government departments, and international diplomatic functions since 1948. We understand protocol requirements, dietary restrictions for international delegates, and the discretion that formal functions demand." },
  { question: "What is the minimum guest count for corporate catering?", answer: "Our minimum for corporate events is 50 guests. For smaller executive lunches under 50 guests, please enquire as we can sometimes accommodate these for existing clients." },
  { question: "Can you handle multi-day conferences with multiple meal services?", answer: "Yes. We specialise in multi-day event catering — including breakfast, lunch, high-tea, and dinner across multiple days. A dedicated Embassy contact manages continuity across the entire event." },
  { question: "Do you provide serving staff and equipment, or just food?", answer: "Embassy provides a complete catering service — food, service staff, chafing equipment, live counter infrastructure, and a senior event manager. We do not require you to coordinate separately with any other vendor for the catering component." },
  { question: "What cuisines are available for corporate events?", answer: "Our full multi-cuisine menu is available for corporate events: North Indian, South Indian, Bengali, Mughlai, Continental, Italian, Mediterranean, Chinese, Japanese, and Thai. Live counter stations are available for all formats." }
];

interface FAQAccordionProps {
  faqs: FAQ[];
  theme: 'light' | 'dark';
  includeSchema?: boolean;
}

export default function FAQAccordion(props: FAQAccordionProps) {
  return <FAQAccordionClient {...props} />;
}