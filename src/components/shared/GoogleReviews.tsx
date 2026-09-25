// EMBASSY CATERING — src/components/shared/GoogleReviews.tsx — Generated June 15, 2026
'use client';

import React, { useState, useEffect } from 'react';
import ScriptEyebrow from '../primitives/ScriptEyebrow';

type GoogleReview = {
  author_name: string;
  rating: number;
  text: string;
  time: number;
  profile_photo_url: string;
  relative_time_description: string;
};

type GoogleReviewsProps = {
  placeId: string;
  maxReviews?: number;
};

export default function GoogleReviews({ placeId, maxReviews = 6 }: GoogleReviewsProps) {
  const [reviews, setReviews] = useState<GoogleReview[]>([]);
  const [overallRating, setOverallRating] = useState<number>(0);
  const [totalRatings, setTotalRatings] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [expandedReviews, setExpandedReviews] = useState<Record<number, boolean>>({});

  useEffect(() => {
    async function fetchReviews() {
      try {
        const res = await fetch(`/api/google-reviews?placeId=${encodeURIComponent(placeId)}`);
        if (!res.ok) throw new Error('API Execution Interrupted');
        const data = await res.json();
        
        if (data.reviews) {
          setReviews(data.reviews.slice(0, maxReviews));
          setOverallRating(data.rating || 0);
          setTotalRatings(data.user_ratings_total || 0);
        }
      } catch (err) {
        // Fail silently per instruction to protect page runtime stability
      } finally {
        setLoading(false);
      }
    }
    fetchReviews();
  }, [placeId, maxReviews]);

  const toggleReadMore = (index: number) => {
    setExpandedReviews(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const renderStars = (rating: number) => {
    const filledStars = Math.round(rating);
    return (
      <div style={{ display: 'flex', gap: '2px', fontSize: '16px', margin: 'var(--space-xs) 0' }}>
        {Array.from({ length: 5 }).map((_, i) => (
          <span 
            key={i} 
            style={{ color: i < filledStars ? 'var(--color-primary)' : 'rgba(0,0,0,0.2)' }}
          >
            {i < filledStars ? '★' : '☆'}
          </span>
        ))}
      </div>
    );
  };

  if (!loading && reviews.length === 0) return null;

  return (
    <section 
      style={{
        background: 'linear-gradient(180deg, #FFFFFF 0%, #FFF7F7 40%, #FFFFFF 100%)',
        padding: 'var(--space-5xl) var(--space-xl)',
        textAlign: 'center',
      }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .review-skeleton-block {
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
        }
        .google-review-card {
          transition: all 0.38s var(--ease-embassy) !important;
        }
        .google-review-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(201, 168, 76, 0.12) !important;
          border-color: var(--color-gold) !important;
        }
      `}} />

      <ScriptEyebrow text="What Our Guests Say" color="var(--color-primary)" />
      
      <h2
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(32px, 4vw, 56px)',
          fontWeight: 600,
          color: 'var(--color-text-dark)',
          marginTop: 'var(--space-md)',
        }}
      >
        A Heritage of Pure Distinction.
      </h2>

      {/* Aggregate Rating Display */}
      <div style={{ marginTop: 'var(--space-md)', marginBottom: 'var(--space-4xl)' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: '4px' }}>
          <span style={{ fontSize: 'clamp(48px, 6vw, 80px)', fontFamily: 'var(--font-display)', color: 'var(--color-primary)', fontWeight: 600 }}>
            {overallRating ? overallRating.toFixed(1) : '5.0'}
          </span>
          <span style={{ fontSize: '20px', color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)' }}>/ 5</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '4px 0' }}>
          {renderStars(overallRating || 5)}
        </div>
        <div style={{ fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)', fontWeight: 500 }}>
          Based on {totalRatings || '150+'} Google reviews
        </div>
      </div>

      {/* Main Review Grid View */}
      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'var(--space-xl)',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {loading ? (
          // Skeleton Loader Configuration Blocks
          Array.from({ length: 3 }).map((_, idx) => (
            <div 
              key={idx} 
              style={{
                background: '#FFFDF9',
                border: 'var(--border-luxury-gold)',
                borderRadius: '0px',
                padding: 'var(--space-2xl)',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                textAlign: 'left'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div className="review-skeleton-block" style={{ width: '32px', height: '32px', borderRadius: '50%' }} />
                <div className="review-skeleton-block" style={{ width: '120px', height: '14px', borderRadius: '2px' }} />
              </div>
              <div className="review-skeleton-block" style={{ width: '80px', height: '16px', borderRadius: '2px' }} />
              <div className="review-skeleton-block" style={{ width: '100%', height: '80px', borderRadius: '2px' }} />
            </div>
          ))
        ) : (
          // Active Review Presentation Matrix
          reviews.map((review, idx) => {
            const isLong = review.text.length > 200;
            const isExpanded = expandedReviews[idx];
            const displayedText = isLong && !isExpanded ? `${review.text.substring(0, 200)}…` : review.text;

            return (
              <div
                key={idx}
                className="google-review-card"
                style={{
                  background: '#FFFDF9',
                  border: 'var(--border-luxury-gold)',
                  borderRadius: '0px',
                  padding: 'var(--space-2xl)',
                  display: 'flex',
                  flexDirection: 'column',
                  textAlign: 'left',
                  position: 'relative'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyItems: 'space-between', width: '100%', marginBottom: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1 }}>
                    {review.profile_photo_url ? (
                      <img 
                        src={review.profile_photo_url} 
                        alt={review.author_name} 
                        style={{ width: '32px', height: '32px', borderRadius: '50%', objectFit: 'cover' }}
                      />
                    ) : (
                      <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(177,18,38,0.1)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 600 }}>
                        {review.author_name.charAt(0)}
                      </div>
                    )}
                    <span style={{ fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: '14px', color: 'var(--color-text-dark)' }}>
                      {review.author_name}
                    </span>
                  </div>
                  <span style={{ fontSize: '10px', color: 'var(--color-primary)', letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: 'var(--font-body)', fontWeight: 600 }}>
                    via Google
                  </span>
                </div>

                {renderStars(review.rating)}
                
                <div style={{ fontSize: '11px', color: 'var(--color-text-muted)', fontFamily: 'var(--font-body)', marginBottom: 'var(--space-sm)' }}>
                  {review.relative_time_description}
                </div>

                <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', lineHeight: '1.7', color: 'rgba(26,26,26,0.75)', margin: 0, paddingBottom: '24px' }}>
                  {displayedText}
                  {isLong && (
                    <button
                      onClick={() => toggleReadMore(idx)}
                      style={{
                        background: 'none',
                        border: 'none',
                        padding: 0,
                        marginLeft: '6px',
                        color: 'var(--color-primary)',
                        cursor: 'pointer',
                        fontFamily: 'var(--font-body)',
                        fontSize: '14px',
                        fontWeight: 500,
                        display: 'inline'
                      }}
                    >
                      {isExpanded ? 'Read less' : 'Read more'}
                    </button>
                  )}
                </p>

                {/* Secure, inline-embedded Branded G Symbol layout */}
                <div style={{ position: 'absolute', bottom: '16px', right: '20px' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
                  </svg>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* External Review Generation Core Hook Block */}
      <div style={{ marginTop: 'var(--space-3xl)' }}>
        <a 
          href={`https://search.google.com/local/writereview?placeid=${placeId}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="luxury-btn-red type-button"
          style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '10px', 
            padding: '16px 40px',
            textDecoration: 'none'
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ fill: '#FFFFFF' }} xmlns="http://www.w3.org/2000/svg">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
          </svg>
          Leave a Google Review
        </a>
      </div>
    </section>
  );
}