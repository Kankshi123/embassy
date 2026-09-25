'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, CircleNotch } from 'phosphor-react';
import { useScrollLock } from '@/lib/useScrollLock';

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LeadCaptureModal({ isOpen, onClose }: LeadCaptureModalProps) {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  useScrollLock(isOpen);

  useEffect(() => {
    if (!isOpen) {
      // Reset state when closed
      setTimeout(() => {
        setStatus('idle');
        setFormData({ name: '', phone: '', email: '' });
      }, 500);
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, enquiryType: 'Quick Enquiry' }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit');
      }

      setStatus('success');
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again or contact us directly.');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          data-lenis-prevent
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }} // --ease-embassy equivalent
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999, // Super high to be above custom cursors if needed
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(0, 0, 0, 0.65)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            padding: '24px',
            overflowY: 'auto',
            overscrollBehavior: 'contain',
          }}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 20, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '520px',
              background: 'var(--color-primary)', // Embassy Red
              color: 'var(--color-white)',
              padding: '48px 40px',
              boxShadow: '0 24px 64px rgba(0,0,0,0.4)',
              border: '1px solid rgba(201, 168, 76, 0.3)', // Subtle gold border
              overflow: 'hidden',
            }}
            onClick={(e) => e.stopPropagation()}
            className="luxury-frame"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'none',
                border: 'none',
                color: 'var(--color-gold)',
                cursor: 'pointer',
                padding: '8px',
                zIndex: 10,
              }}
              aria-label="Close modal"
            >
              <X size={24} weight="light" />
            </button>

            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ textAlign: 'center', padding: '32px 0' }}
              >
                <CheckCircle size={56} weight="light" color="var(--color-gold)" style={{ margin: '0 auto 24px' }} />
                <h3 style={{ 
                  fontFamily: 'var(--font-display)', 
                  fontSize: '28px', 
                  marginBottom: '16px',
                  fontWeight: 300
                }}>
                  Thank You
                </h3>
                <p style={{ 
                  fontFamily: 'var(--font-body)', 
                  fontSize: '15px', 
                  color: 'rgba(255,255,255,0.8)',
                  lineHeight: 1.6
                }}>
                  Your details have been received. An Embassy ambassador will be in touch with you shortly to discuss your celebration.
                </p>
                <button
                  onClick={onClose}
                  className="luxury-btn-white"
                  style={{ marginTop: '32px' }}
                >
                  Return to Website
                </button>
              </motion.div>
            ) : (
              <>
                <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                  <h2 style={{ 
                    fontFamily: 'var(--font-display)', 
                    fontSize: '32px', 
                    fontWeight: 300,
                    marginBottom: '12px'
                  }}>
                    Begin Your Journey
                  </h2>
                  <p style={{ 
                    fontFamily: 'var(--font-body)', 
                    fontSize: '14px',
                    color: 'rgba(255,255,255,0.7)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.15em'
                  }}>
                    Connect with our curation team
                  </p>
                </div>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label htmlFor="name" style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.9)' }}>
                      Full Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.2)',
                        padding: '14px 16px',
                        color: 'white',
                        fontFamily: 'var(--font-body)',
                        fontSize: '15px',
                        outline: 'none',
                        transition: 'border-color 0.3s ease',
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--color-gold)'}
                      onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.2)'}
                    />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label htmlFor="phone" style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.9)' }}>
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: '100%',
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.2)',
                        padding: '14px 16px',
                        color: 'white',
                        fontFamily: 'var(--font-body)',
                        fontSize: '15px',
                        outline: 'none',
                        transition: 'border-color 0.3s ease',
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--color-gold)'}
                      onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.2)'}
                    />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label htmlFor="email" style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.9)' }}>
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.2)',
                        padding: '14px 16px',
                        color: 'white',
                        fontFamily: 'var(--font-body)',
                        fontSize: '15px',
                        outline: 'none',
                        transition: 'border-color 0.3s ease',
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--color-gold)'}
                      onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.2)'}
                    />
                  </div>

                  {errorMessage && (
                    <div style={{ color: '#ff6b6b', fontSize: '13px', marginTop: '4px' }}>
                      {errorMessage}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    style={{
                      marginTop: '16px',
                      width: '100%',
                      background: 'var(--color-gold)',
                      color: 'var(--color-primary)',
                      border: 'none',
                      padding: '16px',
                      fontSize: '13px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.15em',
                      fontWeight: 600,
                      cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      gap: '12px',
                      transition: 'background 0.3s ease',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                    onMouseEnter={(e) => {
                      if (status !== 'loading') e.currentTarget.style.background = '#e5be56';
                    }}
                    onMouseLeave={(e) => {
                      if (status !== 'loading') e.currentTarget.style.background = 'var(--color-gold)';
                    }}
                  >
                    {status === 'loading' ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                      >
                        <CircleNotch size={20} weight="bold" />
                      </motion.div>
                    ) : (
                      'Request Consultation'
                    )}
                  </button>
                  
                  <p style={{ textAlign: 'center', fontSize: '11px', color: 'rgba(255,255,255,0.5)', marginTop: '8px' }}>
                    Your information is strictly confidential.
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
