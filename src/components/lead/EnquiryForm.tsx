// EMBASSY CATERING — src/components/lead/EnquiryForm.tsx — Redesigned with Stitch June 2026
'use client';

import React, { useState } from 'react';

export interface EnquiryFormProps {
  defaultTab?: 'wedding' | 'corporate' | 'tasting';
}

export default function EnquiryForm({ defaultTab = 'wedding' }: EnquiryFormProps) {
  const [step, setStep] = useState(1);
  const [eventType, setEventType] = useState(defaultTab);
  const [preferredDate, setPreferredDate] = useState('');
  const [guestCount, setGuestCount] = useState('200–500');
  const [budget, setBudget] = useState('₹2,500–₹3,000');
  const [budgetTouched, setBudgetTouched] = useState(false);
  const [cuisines, setCuisines] = useState<string[]>(['Imperial Asian']);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleCuisineToggle = (cuisine: string) => {
    if (cuisines.includes(cuisine)) {
      setCuisines(cuisines.filter((c) => c !== cuisine));
    } else {
      setCuisines([...cuisines, cuisine]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          enquiryType: 'Detailed Enquiry',
          name,
          email,
          phone: mobile,
          eventType,
          preferredDate,
          guestCount,
          budget: `${budget} per person`,
          cuisines: cuisines.join(', '),
          notes,
        }),
      });
      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.error || 'Failed to submit enquiry.');
      }
      setSubmitted(true);
    } catch (err: any) {
      setSubmitError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="submit-success-card">
        <style dangerouslySetInnerHTML={{ __html: `
          .submit-success-card {
            padding: var(--space-4xl) var(--space-xl);
            text-align: center;
            background: #FFFDF9;
            border: var(--border-double-gold);
            animation: fadeIn 0.4s ease-out;
          }
          .success-icon {
            font-size: 48px;
            color: var(--color-primary);
            margin-bottom: var(--space-md);
            font-family: var(--font-display);
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}} />
        <div className="success-icon">❖</div>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(22px, 2.5vw, 32px)', fontWeight: 600, color: 'var(--color-primary)', marginBottom: 'var(--space-sm)' }}>
          Your elegant journey has begun.
        </h3>
        <p style={{ color: 'rgba(26,26,26,0.65)', fontSize: '14px', fontFamily: 'var(--font-body)', lineHeight: 1.6, maxWidth: '480px', margin: '0 auto' }}>
          A legacy catering concierge will contact you within 4 business hours to curate your bespoke dining blueprint.
        </p>
      </div>
    );
  }

  const steps = [
    { num: 1, label: 'EVENT DETAILS' },
    { num: 2, label: 'CUISINE CHOICE' },
    { num: 3, label: 'CONTACT INFO' },
  ] as const;

  return (
    <div className="enquiry-container" style={{ background: '#FFFDF9', borderRadius: '0px', border: 'var(--border-double-gold)', width: '100%', maxWidth: '100%', boxSizing: 'border-box', overflow: 'hidden' }}>
      <style dangerouslySetInnerHTML={{ __html: `
        .enquiry-container { 
          padding: var(--space-2xl);
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
          position: relative;
          overflow: hidden;
        }
        .form-tabs {
          display: flex;
          gap: var(--space-lg);
          border-bottom: 1px solid rgba(201, 168, 76, 0.22);
          margin-bottom: var(--space-2xl);
          overflow-x: auto;
          width: 100%;
          max-width: 100%;
        }
        /* Hide scrollbar for tab navigation */
        .form-tabs::-webkit-scrollbar { display: none; }
        .form-tabs { -ms-overflow-style: none; scrollbar-width: none; }

        .form-tab-btn {
          background: none;
          border: none;
          padding: 0 0 var(--space-sm) 0;
          font-size: 12px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          cursor: pointer;
          font-family: var(--font-body);
          white-space: nowrap;
          border-radius: 0px;
          transition: all 0.3s ease;
        }
        
        .field-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: var(--space-lg);
        }

        .field-label {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--color-text-dark);
          font-family: var(--font-body);
        }

        .field-input {
          width: 100%;
          border: 1px solid rgba(201, 168, 76, 0.35);
          border-radius: 0px;
          padding: 12px 14px;
          font-size: 16px;
          font-family: var(--font-body);
          color: var(--color-text-dark);
          backgroundColor: #FFFFFF;
          outline: none;
          min-height: 52px;
          transition: all 0.3s ease;
        }
        .field-input:focus {
          border-color: var(--color-primary) !important;
          box-shadow: 0 0 8px rgba(177, 18, 38, 0.15);
        }

        .guest-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: var(--space-sm);
        }

        .guest-btn {
          height: 48px;
          border: 1px solid rgba(201, 168, 76, 0.35);
          background: #FFFFFF;
          color: var(--color-text-dark);
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .guest-btn.active {
          border-color: var(--color-primary);
          background: rgba(177, 18, 38, 0.05);
          color: var(--color-primary);
        }

        .budget-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--space-sm);
        }

        .budget-btn {
          height: 48px;
          border: 1px solid rgba(201, 168, 76, 0.35);
          background: #FFFFFF;
          color: var(--color-text-dark);
          font-family: var(--font-body);
          font-size: 12px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          white-space: nowrap;
        }
        .budget-btn.active {
          border-color: var(--color-primary);
          background: rgba(177, 18, 38, 0.05);
          color: var(--color-primary);
        }

        .cuisine-option-card {
          display: flex;
          align-items: center;
          padding: var(--space-md);
          border: 1px solid rgba(201, 168, 76, 0.22);
          background: #FFFFFF;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
        }
        .cuisine-option-card.active {
          border-color: var(--color-primary);
          background: rgba(177, 18, 38, 0.04);
        }

        .cuisine-img {
          width: 56px;
          height: 56px;
          background-size: cover;
          background-position: center;
          margin-right: var(--space-md);
          border: 1px solid rgba(201, 168, 76, 0.15);
        }

        .cuisine-title {
          font-family: var(--font-display);
          font-size: 18px;
          font-weight: 600;
          color: var(--color-text-dark);
          line-height: 1.3;
        }
        
        .cuisine-desc {
          font-family: var(--font-body);
          font-size: 12px;
          color: rgba(26,26,26,0.55);
        }

        .action-btn-primary {
          width: 100%;
          height: 56px;
          background: var(--color-primary);
          color: #FFFFFF;
          border: none;
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: var(--space-xs);
          transition: all 0.3s ease;
          margin-top: var(--space-lg);
        }
        .action-btn-primary:hover {
          background: var(--color-secondary);
        }

        .action-btn-secondary {
          height: 56px;
          background: #FFFFFF;
          border: 1px solid var(--color-primary);
          color: var(--color-primary);
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          margin-top: var(--space-lg);
        }

        .btn-flex-row {
          display: flex;
          gap: var(--space-md);
        }

        .step-transition-container {
          animation: slideUp 0.4s ease-out;
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 600px) {
          .enquiry-container { padding: var(--space-md) !important; }
          .form-tabs { 
            gap: 8px !important; 
            margin-bottom: var(--space-xl) !important; 
            justify-content: space-between;
          }
          .form-tab-btn { 
            font-size: 10px !important; 
            letter-spacing: 0.05em !important;
          }
          .cuisine-title { font-size: 16px !important; }
          .cuisine-desc { font-size: 11px !important; }
          .guest-grid { 
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 6px !important; 
          }
          .guest-btn { font-size: 11px !important; }
          .budget-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 6px !important;
          }
          .budget-btn { font-size: 11px !important; }
        }
      `}} />

      {/* Tabs Indicator Switcher */}
      <div className="form-tabs">
        {steps.map((s) => {
          const isActive = step === s.num;
          return (
            <button
              key={s.num}
              type="button"
              onClick={() => setStep(s.num)}
              className="form-tab-btn"
              style={{
                borderBottom: isActive ? '2px solid var(--color-primary)' : '2px solid transparent',
                color: isActive ? 'var(--color-primary)' : 'rgba(26,26,26,0.4)',
                fontWeight: isActive ? 600 : 400,
              }}
            >
              {s.label}
            </button>
          );
        })}
      </div>

      <form onSubmit={handleSubmit} className="step-transition-container">
        {/* STEP 1: EVENT DETAILS */}
        {step === 1 && (
          <div>
            <div className="field-group">
              <label className="field-label">Event Type</label>
              <select
                name="event_type"
                value={eventType}
                onChange={(e) => setEventType(e.target.value as any)}
                className="field-input"
                style={{ appearance: 'none', backgroundImage: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%231A1A1A\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3E%3Cpolyline points=\'6 9 12 15 18 9\'/%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 14px center', backgroundSize: '16px' }}
              >
                <option value="wedding">Grand Wedding Gala</option>
                <option value="corporate">Corporate / Diplomatic Event</option>
                <option value="tasting">Private Tasting Session</option>
              </select>
            </div>

            <div className="field-group">
              <label className="field-label">Preferred Date</label>
              <input
                type="date"
                name="date"
                required
                value={preferredDate}
                onChange={(e) => setPreferredDate(e.target.value)}
                className="field-input"
              />
            </div>

            <div className="field-group">
              <label className="field-label">Approximate Guest Scale</label>
              <div className="guest-grid">
                {['Under 200', '200–500', '500–1000', '1000+'].map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => {
                      setGuestCount(option);
                      if (!budgetTouched) setBudget(option === '500–1000' || option === '1000+' ? '₹2,000–₹2,500' : '₹2,500–₹3,000');
                    }}
                    className={`guest-btn ${guestCount === option ? 'active' : ''}`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div className="field-group">
              <label className="field-label">Estimated Budget (Per Person)</label>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'rgba(26,26,26,0.5)', margin: '-2px 0 10px', lineHeight: 1.5 }}>
                Our prices start from ₹2,000 per person and above.
              </p>
              <div className="budget-grid">
                {['₹2,000–₹2,500', '₹2,500–₹3,000'].map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => {
                      setBudget(option);
                      setBudgetTouched(true);
                    }}
                    className={`budget-btn ${budget === option ? 'active' : ''}`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={() => setStep(2)}
              className="action-btn-primary"
            >
              Next Chapter →
            </button>
          </div>
        )}

        {/* STEP 2: CUISINE CHOICE */}
        {step === 2 && (
          <div>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontStyle: 'italic', textAlign: 'center', color: 'rgba(26,26,26,0.65)', marginBottom: 'var(--space-md)' }}>
              Select your preferred culinary heritage
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
              {[
                {
                  title: 'Continental Classic',
                  desc: 'French & Mediterranean influences',
                  img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNykvuc1-gP8dckyQOTfPx9L9tH7gchdydynDFLak3poZ7LnXtPJ62dCpHzQlxxugWUBedBJD_T9tOJ1MthF3d8GScxTgoDXaH_z0ZhLM_hN_d8wFMO63g_VKhs4k-_on5hpqoK3WvT8GMsYHyEdix7ct663_RCvKf0zl-vXpyOgmzM9VbygWXUX6SVSq7ZIT6B6B_cwU0AvObB1MLYXAew0eWep-U8QJ-u8Ryf4R96nMjJ4jB-s81s8J5aI78973rLQ6KwU-hUpA',
                },
                {
                  title: 'Imperial Asian',
                  desc: 'Royal Mughlai & Pan-Asian fusion',
                  img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCMn_qaIe3oYVKR54TgmEVOiKxDzxfsV7oobbzzuEKfvyphVvAzSto-I4s0ijWQ1TGp54i_YEbWdkFfeknRMRI9fHQrojdWJY0bd-C8Y7bqLwrby4TcQcLSzlQVRMr5RwacFlW_3bAM-E4vEfS6qSNWnkzFy2Ln1lBFXJ9EPwLiO4ul99ZfdDF4FaKRemQtGDsuNKYDfu7Jlcd4Gm8IKBVEtFvN1jBkqYM63RiX4OHQM5ikkkiqsOaPXGa_Ip1RIcj6cFcUEQ2surE',
                },
                {
                  title: 'Modern Patisserie',
                  desc: 'Artisanal desserts & high tea curation',
                  img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLKA8roSVGc63YlEjtnguBL6rsiOJXoUgU-yM2jVLVtCNlP__KbQ2OwWj4MzW6axZyqZhR0EfWRnAmsn77oD13KHzIOkzuTF3hYMH32l7VuyhZU_sC5uTkbFA1XkMYdGMjEdzLN1O48BzGUXNPqYGSYtj2gElv9xAvZq5DBrLTf0hhlvOTIy9z6r7AjVSgseAsAMeisrl03VhphjBz4lYh2foDLMJEISBvR-CzgH0IKSWVP-0Dug8A_nsHKbSRA7j-agrHLUhAHQI',
                },
              ].map((c) => {
                const isActive = cuisines.includes(c.title);
                return (
                  <div
                    key={c.title}
                    onClick={() => handleCuisineToggle(c.title)}
                    className={`cuisine-option-card ${isActive ? 'active' : ''}`}
                  >
                    <div className="cuisine-img" style={{ backgroundImage: `url(${c.img})` }} />
                    <div style={{ flexGrow: 1 }}>
                      <h4 className="cuisine-title">{c.title}</h4>
                      <p className="cuisine-desc">{c.desc}</p>
                    </div>
                    <span
                      style={{
                        color: 'var(--color-primary)',
                        fontSize: '20px',
                        opacity: isActive ? 1 : 0.15,
                        transition: 'opacity 0.3s ease',
                      }}
                    >
                      ❖
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="btn-flex-row">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="action-btn-secondary"
                style={{ flex: 1 }}
              >
                Back
              </button>
              <button
                type="button"
                onClick={() => setStep(3)}
                className="action-btn-primary"
                style={{ flex: 2 }}
              >
                Almost There →
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: CONTACT INFO */}
        {step === 3 && (
          <div>
            <div className="field-group">
              <label className="field-label">Full Name</label>
              <input
                type="text"
                name="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Lord / Lady Surname"
                className="field-input"
              />
            </div>

            <div className="field-group">
              <label className="field-label">Mobile Number</label>
              <input
                type="tel"
                name="mobile"
                required
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                placeholder="+91 XXXXX XXXXX"
                className="field-input"
              />
            </div>

            <div className="field-group">
              <label className="field-label">Email Address</label>
              <input
                type="email"
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="prestige@example.com"
                className="field-input"
              />
            </div>

            <div className="field-group">
              <label className="field-label">Special Instructions / Custom Requests</label>
              <textarea
                name="notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="List any VIP security, protocols, or specific menu curation requirements..."
                rows={3}
                className="field-input"
                style={{ resize: 'vertical' }}
              />
            </div>

            <div className="btn-flex-row">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="action-btn-secondary"
                style={{ flex: 1 }}
                disabled={submitting}
              >
                Back
              </button>
              <button
                type="submit"
                className="action-btn-primary"
                style={{ flex: 2, opacity: submitting ? 0.7 : 1, cursor: submitting ? 'not-allowed' : 'pointer' }}
                disabled={submitting}
              >
                {submitting ? 'SENDING...' : 'SEND ENQUIRY'}
              </button>
            </div>
            {submitError && (
              <p style={{ fontSize: '12px', color: 'var(--color-primary)', textAlign: 'center', marginTop: 'var(--space-md)', fontFamily: 'var(--font-body)' }}>
                ⚠ {submitError}
              </p>
            )}
            <p style={{ fontSize: '10px', textTransform: 'uppercase', color: 'rgba(26,26,26,0.4)', textAlign: 'center', marginTop: 'var(--space-md)', letterSpacing: '0.05em' }}>
              By submitting, you agree to our heritage service standards.
            </p>
          </div>
        )}
      </form>
    </div>
  );
}