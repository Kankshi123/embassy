// EMBASSY CATERING — src/app/journal/[slug]/page.tsx — Fixed for Next.js 16
import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPosts } from '@/lib/blog';
import NavBar from '@/components/primitives/NavBar';
import WhatsappButton from '@/components/ui/WhatsappButton';
import Moment07Departure from '@/components/Homepage/Moment07departure';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: 'Article Not Found' };

  return {
    title: post.metaTitle ?? `${post.title} | The Embassy Catering`,
    description: post.metaDescription ?? post.excerpt,
    openGraph: {
      title: post.metaTitle ?? post.title,
      description: post.metaDescription ?? post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
  };
}

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.date).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    author: { '@type': 'Organization', name: post.author },
    publisher: {
      '@type': 'Organization',
      name: 'The Embassy Catering',
      logo: {
        '@type': 'ImageObject',
        url: 'https://embassy-catering.netlify.app/assets/embassy-logo.png',
      },
    },
    datePublished: post.date,
    dateModified: post.date,
    keywords: post.tags.join(', '),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <NavBar />
      <WhatsappButton />

      <main style={{ paddingTop: '82px', background: '#FAF7F2', minHeight: '100vh' }}>

        {/* ARTICLE HEADER */}
        <header
          style={{
            background: 'linear-gradient(180deg, #FFFFFF 0%, #FFF7F7 100%)',
            padding: 'var(--space-5xl) var(--space-xl) var(--space-4xl)',
            textAlign: 'center',
          }}
        >
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '10px',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--color-primary)',
                fontWeight: 500,
              }}
            >
              {post.category}
            </span>

            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(36px, 5vw, 64px)',
                fontWeight: 600,
                color: 'var(--color-text-dark)',
                lineHeight: 1.15,
                marginTop: 'var(--space-md)',
              }}
            >
              {post.title}
            </h1>

            <div
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '12px',
                color: 'var(--color-text-muted)',
                marginTop: 'var(--space-lg)',
              }}
            >
              {formattedDate} &middot; {post.readTime} &middot; By {post.author}
            </div>

            <div
              style={{
                display: 'flex',
                gap: 'var(--space-sm)',
                justifyContent: 'center',
                marginTop: 'var(--space-lg)',
                flexWrap: 'wrap',
              }}
            >
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    background: 'rgba(177, 18, 38, 0.08)',
                    color: 'var(--color-primary)',
                    borderRadius: '2px',
                    fontSize: '10px',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    padding: '4px 10px',
                    fontWeight: 500,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </header>

        {/* ARTICLE BODY */}
        <article
          style={{
            maxWidth: '680px',
            margin: '0 auto',
            padding: 'var(--space-4xl) var(--space-xl) var(--space-5xl)',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '17px',
              lineHeight: 1.8,
              color: 'rgba(26, 26, 26, 0.82)',
            }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <hr
            style={{
              border: 'none',
              borderTop: '1px solid rgba(177, 18, 38, 0.15)',
              margin: 'var(--space-4xl) 0',
            }}
          />

          <div style={{ textAlign: 'center' }}>
            <Link
              href="/journal"
              className="luxury-btn-red type-button"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '14px 32px',
              }}
            >
              &larr; Back to Blogs
            </Link>
          </div>
        </article>
      </main>

      <Moment07Departure />
    </>
  );
}