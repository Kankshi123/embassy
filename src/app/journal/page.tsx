// EMBASSY CATERING — src/app/journal/page.tsx — Updated June 15, 2026
import type { Metadata } from 'next';
import Link from 'next/link';
import NavBar from '@/components/primitives/NavBar';
import Moment07Departure from '@/components/Homepage/Moment07departure';
import WhatsappButton from '@/components/ui/WhatsappButton';
import ScriptEyebrow from '@/components/primitives/ScriptEyebrow';
import { getAllPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blogs & Insights | The Embassy Catering',
  description: "Insights, trends, and stories from Delhi NCR's premier luxury catering house since 1948.",
  openGraph: {
    title: 'The Embassy Blog | The Embassy Catering',
    description: 'Behind-the-scenes insights on luxury catering, weddings, and culinary heritage from The Embassy since 1948.',
    type: 'website',
  },
};

export default function JournalPage() {
  const ARTICLES = getAllPosts();
  const featuredArticle = ARTICLES[0];
  const gridArticles = ARTICLES.slice(1);

  const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });

  return (
    <>
      <NavBar />
      <WhatsappButton />

      <main style={{ paddingTop: '82px', background: '#FAF7F2', minHeight: '100vh' }}>

        {/* ── HERO ── */}
        <section className="journal-hero-section" style={{
          minHeight: '40svh', display: 'flex', alignItems: 'center', justifyContent: 'center',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative', overflow: 'hidden', padding: 'var(--space-5xl) var(--space-xl)',
          textAlign: 'center'
        }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 80%, rgba(177,18,38,0.2), transparent 60%)', pointerEvents: 'none' }} />
          <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
            <ScriptEyebrow text="Insights & Stories" color="rgba(201,168,76,0.9)" />
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 6vw, 72px)', fontWeight: 600, color: '#FFFFFF', lineHeight: 1.1, marginTop: 'var(--space-md)' }}>
              The Embassy Blog.
            </h1>
          </div>
        </section>

        {/* ── FEATURED ARTICLE ── */}
        {featuredArticle && (
          <section style={{ padding: '0 var(--space-xl) var(--space-5xl)' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
              <Link
                href={`/journal/${featuredArticle.slug}`}
                className="article-card featured-card"
                style={{ display: 'block', textDecoration: 'none', background: '#FFFFFF', borderRadius: '2px', border: '1px solid rgba(26,26,26,0.08)', overflow: 'hidden' }}
              >
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                  <div
                    className="featured-image-placeholder"
                    style={{
                      flex: '1 1 50%',
                      minHeight: '400px',
                      background: 'radial-gradient(circle at center, #2C0B0E 0%, #110304 100%)',
                      position: 'relative',
                      overflow: 'hidden',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {/* Decorative Frame Line */}
                    <div style={{
                      position: 'absolute',
                      inset: '24px',
                      border: '1px solid rgba(201, 168, 76, 0.18)',
                      pointerEvents: 'none'
                    }} />
                    
                    <div style={{ position: 'relative', zIndex: 1, opacity: 0.35 }}>
                      <span style={{ fontFamily: 'var(--font-display)', color: 'var(--color-gold)', fontSize: '120px', fontWeight: 300 }}>E</span>
                    </div>
                  </div>
                  <div style={{ flex: '1 1 50%', padding: 'var(--space-4xl)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: 'var(--space-lg)' }}>
                      {featuredArticle.category}
                    </div>
                    <h2 className="article-title" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 3vw, 42px)', fontWeight: 600, color: 'var(--color-text-dark)', lineHeight: 1.2, marginBottom: 'var(--space-md)', transition: 'color 0.3s ease' }}>
                      {featuredArticle.title}
                    </h2>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'rgba(26,26,26,0.65)', lineHeight: 1.7, marginBottom: 'var(--space-2xl)' }}>
                      {featuredArticle.excerpt}
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)', fontFamily: 'var(--font-body)', fontSize: '12px', color: 'rgba(26,26,26,0.45)' }}>
                      <span>{formatDate(featuredArticle.date)}</span>
                      <span>&bull;</span>
                      <span>{featuredArticle.readTime}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </section>
        )}

        {/* ── ARTICLE GRID ── */}
        <section style={{ padding: '0 var(--space-xl) var(--space-5xl)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div className="journal-grid">
              {gridArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/journal/${article.slug}`}
                  className="article-card"
                  style={{ display: 'block', textDecoration: 'none', background: '#FFFFFF', borderRadius: '2px', border: '1px solid rgba(26,26,26,0.08)', padding: 'var(--space-2xl)' }}
                >
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: 'var(--space-md)' }}>
                    {article.category}
                  </div>
                  <h3 className="article-title" style={{ fontFamily: 'var(--font-display)', fontSize: '24px', fontWeight: 600, color: 'var(--color-text-dark)', lineHeight: 1.3, marginBottom: 'var(--space-sm)', transition: 'color 0.3s ease' }}>
                    {article.title}
                  </h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'rgba(26,26,26,0.6)', lineHeight: 1.7, marginBottom: 'var(--space-xl)' }}>
                    {article.excerpt}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)', fontFamily: 'var(--font-body)', fontSize: '11px', color: 'rgba(26,26,26,0.45)' }}>
                    <span>{formatDate(article.date)}</span>
                    <span>&bull;</span>
                    <span>{article.readTime}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Moment07Departure />

      <style dangerouslySetInnerHTML={{ __html: `
        .journal-hero-section {
          background-image: linear-gradient(rgba(26, 8, 9, 0.76) 0%, rgba(26, 8, 9, 0.7) 100%), url('https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?q=70&w=800');
        }
        @media (min-width: 768px) {
          .journal-hero-section {
            background-image: linear-gradient(rgba(26, 8, 9, 0.76) 0%, rgba(26, 8, 9, 0.7) 100%), url('https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?q=80&w=1920');
          }
        }
        .journal-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-xl); }
        .article-card { transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease; }
        .article-card:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(26,26,26,0.06); }
        .article-card:hover .article-title { color: var(--color-primary) !important; }
        @media (max-width: 900px) {
          .journal-grid { grid-template-columns: repeat(2, 1fr); }
          .featured-image-placeholder { min-height: 250px !important; }
        }
        @media (max-width: 600px) {
          .journal-grid { grid-template-columns: 1fr; }
        }
      ` }} />
    </>
  );
}