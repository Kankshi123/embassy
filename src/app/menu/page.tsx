// EMBASSY CATERING — src/app/menu/page.tsx — Menu Page
import type { Metadata } from 'next';
import NavBar from '@/components/primitives/NavBar';
import Moment07Departure from '@/components/Homepage/Moment07departure';
import WhatsappButton from '@/components/ui/WhatsappButton';
import ScriptEyebrow from '@/components/primitives/ScriptEyebrow';
import MenuDownloadCapture from '@/components/lead/MenuDownloadCapture';
import ButtonPrimary from '@/components/primitives/ButtonPrimary';
import ButtonSecondary from '@/components/primitives/ButtonSecondary';
import MenuFlipSection from '@/components/shared/MenuFlipSection';
import MenuPackagesSection from '@/components/shared/MenuPackagesSection';

export const metadata: Metadata = {
  title: 'Menu | 6,000+ Dishes Across 50+ Cuisines | The Embassy Catering',
  description:
    '6,000+ dishes across 50+ global and regional cuisines. Live culinary counters including Sushi, Dim Sum, Teppanyaki, Tandoor Grills, and more. Explore the Embassy Catering menu.',
  alternates: {
    canonical: 'https://embassy-catering.netlify.app/menu',
  },
};

// Menu page schema for SEO & AEO
const menuSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://embassy-catering.netlify.app/menu#service',
      name: 'Multi-Cuisine Catering Menu',
      serviceType: 'Multi-Cuisine Catering',
      description: '6,000+ dishes across 50+ global and regional cuisines. Live culinary counters including Sushi, Dim Sum, Teppanyaki, Pasta, Modern Chaat, Tandoor Grills and bespoke speciality counters.',
      provider: { '@id': 'https://embassy-catering.netlify.app/#organization' },
      areaServed: { '@type': 'AdministrativeArea', name: 'Delhi NCR' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://embassy-catering.netlify.app' },
        { '@type': 'ListItem', position: 2, name: 'Menu', item: 'https://embassy-catering.netlify.app/menu' },
      ],
    },
  ],
};

const CUISINE_CATEGORIES = [
  {
    region: 'Indian Cuisine',
    cuisines: [
      { name: 'North Indian', img: '/assets/cuisine-north-indian.png' },
      { name: 'Mughlai & Frontier Cuisine', img: '/assets/cuisine-mughlai.png' },
      { name: 'Punjabi Classics', img: 'https://media.istockphoto.com/id/527912548/photo/sarson-ka-saag-with-makke-ki-roti.jpg?s=612x612&w=0&k=20&c=sH4tQ9_ndAIswUZkacxuPu62jiIjAqEoTYUvWVASTW4=' },
      { name: 'Awadhi Cuisine', img: 'https://media.istockphoto.com/id/2229586444/photo/homecooked-dindigul-thalappakatti-mutton-biryani.jpg?s=612x612&w=0&k=20&c=3nDS9h6jGxrPoNie9GJpn0YazeqqMDC_EjHEVaV30r0=' },
      { name: 'Kashmiri Wazwan', img: 'https://media.istockphoto.com/id/1396092287/photo/dish-meat-based.jpg?s=612x612&w=0&k=20&c=UXgPXN2Otf_dpvOES9NIgQ1r0fAe-j7APFEoCfn6UuQ=' },
      { name: 'Delhi Heritage Cuisine', img: 'https://media.istockphoto.com/id/873539518/photo/deep-fried-bread-spicy-chickpeas-curry-and-salad.jpg?s=612x612&w=0&k=20&c=S3YF4G2hCVQCccnjC0Q_Q4RXmR2vQmzDOcvdVwOjgLU=' },
      { name: 'South Indian', img: 'https://media.istockphoto.com/id/1292563627/photo/assorted-south-indian-breakfast-foods-on-wooden-background-ghee-dosa-uttappam-medhu-vada.jpg?s=612x612&w=0&k=20&c=HvuYT3RiWj5YsvP2_pJrSWIcZUXhnTKqjKhdN3j_SgY=' },
      { name: 'Coastal Indian Specialities', img: 'https://media.istockphoto.com/id/1292562009/photo/assorted-indian-sea-foods-fish-curry-meal-nethili-fry-prawn-biryani-pomfret-tawa-fry-and.jpg?s=612x612&w=0&k=20&c=f_2H8U6C0TYTvzOh21h5BvpUHdS6pYYIekzJfGhJIHE=' },
      { name: 'Gujarati & Rajasthani Fare', img: 'https://media.istockphoto.com/id/1168396740/photo/traditional-food-thali-from-gujarat-india.jpg?s=612x612&w=0&k=20&c=3on9JlHYTMDW76DrNLcUe9jkaxt_QvbloT1azAJCZiQ=' },
      { name: 'Bengali Cuisine', img: 'https://media.istockphoto.com/id/1124398915/photo/chicken-tikka-masala-with-rice-and-naan-bread-and-spices.jpg?s=612x612&w=0&k=20&c=1ZQv9gZeHx-HEGZMoroJfCQbOKdezCt85ilamTG2T98=' },
      { name: 'Goan Cuisine', img: 'https://media.istockphoto.com/id/913998760/photo/spicy-hot-homemade-mutton-curry-kerala-india.jpg?s=612x612&w=0&k=20&c=0Q3jf4LKAQ43pDlq2E46Jx7KrvrKgH57lCKpQvj5CAA=' },
    ],
  },
  {
    region: 'Continental & European',
    cuisines: [
      { name: 'Continental European', img: 'https://media.istockphoto.com/id/1301956915/photo/traditional-danish-dishes.jpg?s=612x612&w=0&k=20&c=klSZySYH2B1CSAoQmEL9Zo5DA2KZPGZvy6jeFwxCrk4=' },
      { name: 'Italian', img: 'https://media.istockphoto.com/id/1227415751/photo/full-table-of-italian-meals-on-plates-pizza-pasta-ravioli-carpaccio-caprese-salad-and-tomato.jpg?s=612x612&w=0&k=20&c=0qCRhYGQw0w6ahhVX-4ezayA9r81A81cwbPDbgRlC5s=' },
      { name: 'French-inspired Menus', img: 'https://media.istockphoto.com/id/1723606638/photo/traditional-french-food-mussel-and-meat-dishes-ratatouille-snails-croissants-desserts-fresh.jpg?s=612x612&w=0&k=20&c=JZYUF4Iwd2aNOd7MboWclERn0BU3zoseBq9q2ecewBc=' },
      { name: 'Mediterranean', img: 'https://media.istockphoto.com/id/1462724148/photo/food-products-representing-the-mediterranean-diet.jpg?s=612x612&w=0&k=20&c=XQJQWW5NGPKrnb85-CWtyV4J5hbejWy1aK2OA5-ab8M=' },
      { name: 'Spanish Tapas & Small Plates', img: 'https://media.istockphoto.com/id/2180044348/photo/assorted-tapas-from-spain-food-typical-spanish-recipes-and-pintxos-on-a-rustic-wood.jpg?s=612x612&w=0&k=20&c=s1GikDFeyqPsmgEL8unxSNT1Prrzdsq-GL6Sv_olYXg=' },
      { name: 'Modern European', img: 'https://media.istockphoto.com/id/538045178/photo/codfish.jpg?s=612x612&w=0&k=20&c=MZvpsN8jdBNcf-FM78qFfqShuCRWxiJhgrQXohcdL98=' },
    ],
  },
  {
    region: 'Pan-Asian',
    cuisines: [
      { name: 'Chinese', img: 'https://media.istockphoto.com/id/1560615831/photo/stir-fry-noodles-with-vegetables-and-chicken-meat-in-a-bowl.jpg?s=612x612&w=0&k=20&c=LYQdI6fSywg06Gm2dCKVaeA4J3MBXb-YLR2oFt8XTVM=' },
      { name: 'Japanese', img: 'https://media.istockphoto.com/id/1053855452/photo/sushi-set-on-bamboo-plate.jpg?s=612x612&w=0&k=20&c=oOPJ7oR1weGlwvhA7_hL6BLf1wnWox5_e4rzLdRmLdY=' },
      { name: 'Thai', img: 'https://media.istockphoto.com/id/596799642/photo/beef-pad-thai-shot-from-overhead-view.jpg?s=612x612&w=0&k=20&c=6QkbaexWjrF7MLjoil9TE98Zzed8cAQb-LscMb9z3Ss=' },
      { name: 'Korean', img: 'https://media.istockphoto.com/id/183752521/photo/bi-bim-bap.jpg?s=612x612&w=0&k=20&c=kK9ZtpnqNhG38QUZ-dRDd6eBlf-jj4XAVXQb6LRPEmk=' },
      { name: 'Vietnamese', img: 'https://media.istockphoto.com/id/1471456977/photo/fried-spring-rolls-cold-rice-vermicelli-with-sauce-served-in-bowl-isolated-on-table-top-view.jpg?s=612x612&w=0&k=20&c=480XlWZ3S_SXgkgcji-gzkRFOvW0HsHEa5p-_fIEp1o=' },
      { name: 'Singaporean & Malaysian', img: 'https://media.istockphoto.com/id/526149515/photo/nasi-lemak-malaysian-cuisine.jpg?s=612x612&w=0&k=20&c=XiJE-q-zUMj8KLEmrDnEWHwVgaP-VPhYaOoWUgnR6UY=' },
    ],
  },
  {
    region: 'Middle Eastern',
    cuisines: [
      { name: 'Lebanese', img: 'https://media.istockphoto.com/id/955998652/photo/homemade-chickpea-hummus-bowl-with-pita-chips-and-paprika.jpg?s=612x612&w=0&k=20&c=H3m78rhd7113mc06CqBKLH4PVn7e8AUmTes2yCQEzlY=' },
      { name: 'Turkish & Middle Eastern', img: 'https://media.istockphoto.com/id/970416464/photo/kebab.jpg?s=612x612&w=0&k=20&c=RHZHEGPELwqADkUPCSFmC4Z3bZNJWw2uxC-cxKsfXy0=' },
    ],
  },
  {
    region: 'Americas',
    cuisines: [
      { name: 'Mexican', img: 'https://media.istockphoto.com/id/638951176/photo/mexican-street-tacos-flat-lay-composition.jpg?s=612x612&w=0&k=20&c=a6_AxL4_gva5qeep71NTbV9M4BGGYwitpW0ByQRtC_U=' },
      { name: 'Tex-Mex', img: 'https://media.istockphoto.com/id/2165322334/photo/fajita-with-peppers-and-onions-served-on-a-hot-iron-skillet.jpg?s=612x612&w=0&k=20&c=hCb94UdFq2T_aZL2-1O2oQtXZYBmZBxtMLccQV0aRho=' },
      { name: 'American Grill & Barbecue', img: 'https://media.istockphoto.com/id/2197723646/photo/tasty-beef-burger-with-bacon-lettuce-cheese-and-tomato-onion-rings-garlic-sauce-and-a-glass.jpg?s=612x612&w=0&k=20&c=-7E_KD5cIi-2qRqCT-ajjlHuzQWjr1MFGojDf3IcfI0=' },
    ],
  },
  {
    region: 'Specialty & Dietary',
    cuisines: [
      { name: 'Global Fusion Cuisine', img: 'https://media.istockphoto.com/id/1582970631/photo/quinoa-salad-with-fried-harissa-tofu-for-vegan-diet.jpg?s=612x612&w=0&k=20&c=_W-3ro9KoRNJsBZ7-dfpXCPnJDBr_ilFB5gVLsfqe2E=' },
      { name: 'Artisanal Bakery & Desserts', img: 'https://media.istockphoto.com/id/645542956/photo/french-pastry.jpg?s=612x612&w=0&k=20&c=JE4QgqBdtvMqdMvUPRqvnw-hIfftwtSV8qSoPygF0Qk=' },
      { name: 'Canapés & Hors d\'oeuvres', img: 'https://media.istockphoto.com/id/1745691137/photo/hors-doeuvres-on-a-glass-table-salsa-salmon-tomatoes-mozzarella-and-a-variety-of-cheese.jpg?s=612x612&w=0&k=20&c=4mhgEyEZeOrevxzghkZCnrzRBm_8oeOY_AsKgkCmn5Q=' },
      { name: 'Wellness-focused & Custom Dietary Menus', img: 'https://media.istockphoto.com/id/955656512/photo/various-different-tasty-dishes-plates-on-dark-background-fish-steak-salad.jpg?s=612x612&w=0&k=20&c=VtL6vQUrxDw07t5fDO0AujBqDN84uDBSkSd0A4k1K1M=' },
      { name: 'Jain, Satvik & Fasting Menus', img: 'https://media.istockphoto.com/id/1716168684/photo/navratri-upwas-thali-fasting-recipes-or-indian-food-platter.jpg?s=612x612&w=0&k=20&c=uAE1sKb_UB5zD8pgHMBysUTkJgY0lTiEwfKiMnz-cJM=' },
      { name: 'Vegan & Plant-based Menus', img: 'https://media.istockphoto.com/id/2201068820/photo/female-preparing-aesthetically-pleasing-salad-bowls-adding-dressing-on-top-to-tie-flavors.jpg?s=612x612&w=0&k=20&c=2eoKHqzVNoP0BYnAFvYunOdsRX1zc7xQv5I6HRYgQRw=' },
    ],
  },
];


export default function MenuPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(menuSchema) }}
      />
      <NavBar />
      <WhatsappButton />

      <main style={{ paddingTop: '82px' }}>

        {/* ── HERO ── */}
        <section className="menu-hero-section responsive-section" style={{
          minHeight: '80svh', display: 'flex', alignItems: 'center', justifyContent: 'center',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative', overflow: 'hidden', padding: 'var(--space-5xl) var(--space-xl)',
        }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 60% 40%, rgba(201,168,76,0.1), transparent 55%)', pointerEvents: 'none' }} />
          <div id="menu-hero-content" style={{ maxWidth: '800px', textAlign: 'center', position: 'relative', zIndex: 2 }}>
            <ScriptEyebrow text="Menu" color="rgba(201,168,76,0.9)" />
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(44px, 6.5vw, 88px)', fontWeight: 600, color: '#FFFFFF', lineHeight: 1.05, margin: 'var(--space-lg) 0 var(--space-xl)' }}>
              Food at the Heart of<br />Every Celebration.
            </h1>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '16px', color: 'rgba(255,255,255,0.62)', lineHeight: 1.8, maxWidth: '580px', margin: '0 auto var(--space-3xl)' }}>
              With a repertoire of over <strong style={{ color: '#C9A84C' }}>6,000 dishes</strong> across <strong style={{ color: '#C9A84C' }}>50+ global and regional cuisines</strong>, our culinary philosophy blends heritage, innovation and impeccable craftsmanship.
            </p>
            <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
              <ButtonPrimary href="#menu-download">
                Request Full Menu
              </ButtonPrimary>
              <ButtonSecondary href="#cuisines">
                Explore Cuisines
              </ButtonSecondary>
            </div>
          </div>
        </section>

        {/* ── CULINARY PHILOSOPHY ── */}
        <section className="responsive-section" style={{ background: '#FFFFFF', padding: 'var(--space-5xl) var(--space-xl)' }}>
          <div className="philosophy-grid" style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-5xl)', alignItems: 'center' }}>
            <div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '10px', letterSpacing: '0.22em', color: 'rgba(26,26,26,0.45)', textTransform: 'uppercase', marginBottom: 'var(--space-lg)' }}>Our Culinary Philosophy</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 600, color: 'var(--color-text-dark)', lineHeight: 1.2, marginBottom: 'var(--space-xl)' }}>
                Heritage, innovation and impeccable craftsmanship.
              </h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'rgba(26,26,26,0.62)', lineHeight: 1.85, marginBottom: 'var(--space-lg)' }}>
                At Embassy Catering, food is at the heart of every celebration. From timeless North Indian classics and slow-cooked signature recipes to contemporary global flavours, every menu is thoughtfully curated to suit the occasion.
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'rgba(26,26,26,0.62)', lineHeight: 1.85 }}>
                Whether it&apos;s an intimate gathering or a grand wedding celebration, our chefs craft menus that are personalised, memorable and rooted in over seven decades of culinary excellence.
              </p>
            </div>
            <div className="form-container-card" style={{
              background: '#FFFDF9',
              padding: 'var(--space-3xl)',
              borderRadius: '0px',
              border: 'var(--border-luxury-gold)',
              position: 'relative',
            }}>
              {/* Inset luxury frame border line */}
              <div style={{
                position: 'absolute',
                inset: '4px',
                border: '1px solid rgba(201, 168, 76, 0.18)',
                pointerEvents: 'none',
              }} />
              
              <div style={{ position: 'relative', zIndex: 1 }}>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(20px, 2.2vw, 28px)', fontStyle: 'italic', color: 'var(--color-text-dark)', lineHeight: 1.6, marginBottom: 'var(--space-xl)' }}>
                  &ldquo;They had a great variety of dishes in different cuisines. Everyone loved the food. One can fall short of words to express the taste.&rdquo;
                </p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '12px', letterSpacing: '0.08em', color: 'rgba(26,26,26,0.5)' }}>
                  Vikram T. · Multi-Function Event · WeddingWire
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── FULL MENU FLIP STATIONS ── */}
        <MenuFlipSection variant="full" />


        {/* ── MENU DOWNLOAD LEAD MAGNET ── */}
        <section id="menu-download" className="responsive-section" style={{ background: '#FFFFFF', padding: 'var(--space-5xl) var(--space-xl)' }}>
          <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
            <ScriptEyebrow text="The Menu Compendium" color="var(--color-primary)" />
          </div>

          {/* ── EVENT PACKAGES ── */}
          <MenuPackagesSection />

          <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 600, color: 'var(--color-primary)', lineHeight: 1.1, margin: '0 0 var(--space-md)' }}>
              Receive the Full Menu.
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'rgba(26,26,26,0.6)', lineHeight: 1.75, marginBottom: 'var(--space-3xl)' }}>
              6,000+ dishes across 50+ cuisine categories. Preview the Embassy menu right here and download it instantly.
            </p>
            <MenuDownloadCapture />
          </div>
        </section>

        {/* ── TASTING CTA ── */}
        <section className="responsive-section" style={{ background: '#FAF7F2', padding: 'var(--space-5xl) var(--space-xl)', textAlign: 'center' }}>
          <div style={{ maxWidth: '640px', margin: '0 auto' }}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '10px', letterSpacing: '0.22em', color: 'rgba(26,26,26,0.45)', textTransform: 'uppercase', marginBottom: 'var(--space-lg)' }}>Before You Commit</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 600, color: 'var(--color-text-dark)', marginBottom: 'var(--space-lg)' }}>
              Experience the menu first.
            </h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '15px', color: 'rgba(26,26,26,0.6)', lineHeight: 1.75, marginBottom: 'var(--space-3xl)' }}>
              Embassy offers private tasting sessions for prospective clients, by appointment.<br />
              Tuesday to Saturday · 10 AM – 4 PM.
            </p>
            <div style={{ display: 'inline-flex', justifyContent: 'center' }}>
              <ButtonPrimary href="/contact?type=tasting">
                Request a Tasting Session
              </ButtonPrimary>
            </div>
          </div>
        </section>

      </main>

      <Moment07Departure />

      <style dangerouslySetInnerHTML={{ __html: `
        .menu-hero-section {
          background-image: linear-gradient(rgba(26, 8, 9, 0.76) 0%, rgba(26, 8, 9, 0.7) 100%), url('https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=70&w=800');
        }
        @media (min-width: 768px) {
          .menu-hero-section {
            background-image: linear-gradient(rgba(26, 8, 9, 0.76) 0%, rgba(26, 8, 9, 0.7) 100%), url('https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=1920');
          }
        }
        .cuisine-card { transition: all 0.32s cubic-bezier(0.25,0.46,0.45,0.94); }
        .cuisine-card:hover { background: #221010 !important; transform: translateY(-3px); box-shadow: 0 12px 32px rgba(0,0,0,0.35), 0 0 0 1px rgba(201,168,76,0.55) !important; }
        .cuisine-card:hover .cuisine-accent { background: rgba(201,168,76,0.85) !important; }
        .cuisine-card:hover img { filter: brightness(0.9) saturate(1.25) !important; }
        .live-card { display: none; }
        
        @media (max-width: 1100px) {
          .live-grid { grid-template-columns: repeat(3, 1fr) !important; }
          .cuisine-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 900px) { 
          .philosophy-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) { 
          .cuisine-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .cuisine-card { min-height: 70px !important; }
          .cuisine-card img { width: 60px !important; height: 60px !important; }
          .cuisine-card div[style*="width"] { width: 60px !important; min-width: 60px !important; height: 60px !important; }
        }
      ` }} />
    </>
  );
}