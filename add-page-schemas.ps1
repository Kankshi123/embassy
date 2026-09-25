$ErrorActionPreference = 'Stop'

# ─── EVENTS PAGE ────────────────────────────────────────────────────────────────
$eventsFile = 'src\app\events\page.tsx'
$eventsSchema = @'

// Events page structured data for SEO & AEO
const eventSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://embassy-catering.netlify.app/events#service',
      name: 'Corporate & Event Catering Delhi NCR',
      serviceType: 'Corporate Event Catering',
      description: 'Premium corporate lunches, dinners, conferences, diplomatic receptions, and galas for 50–5,000 guests in Delhi NCR. Trusted by Fortune 500, government institutions, and foreign embassies since 1948.',
      provider: { '@id': 'https://embassy-catering.netlify.app/#organization' },
      areaServed: { '@type': 'AdministrativeArea', name: 'Delhi NCR' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://embassy-catering.netlify.app' },
        { '@type': 'ListItem', position: 2, name: 'Corporate & Event Catering', item: 'https://embassy-catering.netlify.app/events' },
      ],
    },
  ],
};

'@
$content = Get-Content $eventsFile -Raw -Encoding UTF8
# Add metadata improvements
$content = $content -replace "title: 'Corporate & Event Catering Delhi NCR',", "title: 'Corporate & Diplomatic Event Catering Delhi | Embassy Since 1948',"
$content = $content -replace "description:\r?\n    'Premium corporate, diplomatic, and social event catering in Delhi NCR. Embassies, government, and Fortune 500 clients. 100.5,000 guests. Request a quote in 24 hours.',", "description: 'Corporate event catering Delhi NCR — diplomatic receptions, conferences, and galas for 50–5,000 guests. Trusted by Fortune 500 and government since 1948. Quote in 24 hours.',"
# Insert canonical
$content = $content -replace "(openGraph: \{[^}]+\},\r?\n\};)", "`$1`nconst _canonical_events = 'https://embassy-catering.netlify.app/events';"
# Append schema const before the default export function
$content = $content -replace '(export default function EventsPage)', "$eventsSchema`$1"
Set-Content $eventsFile $content -Encoding UTF8 -NoNewline
Write-Host "Events done"

# ─── GASTRONOMY PAGE ─────────────────────────────────────────────────────────────
$gastroFile = 'src\app\gastronomy\page.tsx'
$gastroSchema = @'

// Gastronomy page structured data for SEO & AEO
const gastronomySchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://embassy-catering.netlify.app/gastronomy#service',
      name: 'Multi-Cuisine Catering Delhi — 300+ Dishes',
      serviceType: 'Multi-Cuisine Catering',
      description: '300+ dishes across 12 cuisine categories. Specialist chefs for North Indian, South Indian, Mughlai, Continental, Italian, Japanese, Chinese, and Mediterranean. Live counter stations for events.',
      provider: { '@id': 'https://embassy-catering.netlify.app/#organization' },
      areaServed: { '@type': 'AdministrativeArea', name: 'Delhi NCR' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://embassy-catering.netlify.app' },
        { '@type': 'ListItem', position: 2, name: 'Gastronomy & Menu', item: 'https://embassy-catering.netlify.app/gastronomy' },
      ],
    },
  ],
};

'@
$content = Get-Content $gastroFile -Raw -Encoding UTF8
$content = $content -replace "title: 'Our Gastronomy — Multi-Cuisine Menu',", "title: 'Multi-Cuisine Catering Menu Delhi | 300+ Dishes | The Embassy Catering',"
$content = $content -replace '(export default function GastronomyPage)', "$gastroSchema`$1"
Set-Content $gastroFile $content -Encoding UTF8 -NoNewline
Write-Host "Gastronomy done"

# ─── LEGACY PAGE ─────────────────────────────────────────────────────────────────
$legacyFile = 'src\app\legacy\page.tsx'
$legacySchema = @'

// Our Story page structured data for SEO & AEO
const legacySchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'AboutPage',
      '@id': 'https://embassy-catering.netlify.app/legacy#aboutpage',
      name: 'Our Story | The Embassy Catering Since 1948',
      description: 'The history of The Embassy Catering — Delhi NCR\'s original luxury caterer since 1948. Discover 75+ years of heritage, from state banquets to modern weddings.',
      about: { '@id': 'https://embassy-catering.netlify.app/#organization' },
      url: 'https://embassy-catering.netlify.app/legacy',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://embassy-catering.netlify.app' },
        { '@type': 'ListItem', position: 2, name: 'Our Story', item: 'https://embassy-catering.netlify.app/legacy' },
      ],
    },
  ],
};

'@
$content = Get-Content $legacyFile -Raw -Encoding UTF8
$content = $content -replace "title: 'Our Legacy \| The Embassy Catering Since 1948',", "title: 'Our Story | The Embassy Catering Since 1948 — 75 Years of Heritage',"
$content = $content -replace '(export default function LegacyPage)', "$legacySchema`$1"
Set-Content $legacyFile $content -Encoding UTF8 -NoNewline
Write-Host "Legacy done"

# ─── CONTACT PAGE ────────────────────────────────────────────────────────────────
$contactFile = 'src\app\contact\page.tsx'
$contactSchema = @'

// Contact page structured data for SEO & AEO
const contactSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ContactPage',
      '@id': 'https://embassy-catering.netlify.app/contact#contactpage',
      name: 'Contact The Embassy Catering Delhi — Enquire for Weddings & Events',
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

'@
$content = Get-Content $contactFile -Raw -Encoding UTF8
$content = $content -replace "title: 'Enquire — Begin Your Event',", "title: 'Contact The Embassy Catering Delhi | Enquire for Weddings & Events',"
$content = $content -replace "description:\r?\n    'Reach out to The Embassy Catering for weddings, corporate events, diplomatic functions, or tasting sessions. We respond within 4 business hours.',", "description: 'Contact The Embassy Catering Delhi for luxury catering enquiries — weddings, corporate events, diplomatic functions, and tasting sessions. Response within 4 business hours.',"
$content = $content -replace '(export default function ContactPage)', "$contactSchema`$1"
Set-Content $contactFile $content -Encoding UTF8 -NoNewline
Write-Host "Contact done"

Write-Host "All page schemas injected successfully."
