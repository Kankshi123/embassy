// EMBASSY CATERING — src/lib/blog.ts — June 15, 2026

export type BlogPost = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  content: string;
  coverImageUrl?: string;
  tags: string[];
  author: string;
  metaTitle?: string;
  metaDescription?: string;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'resurgence-of-regional-royal-cuisines',
    category: 'Culinary Innovation',
    title: 'The Resurgence of Regional Royal Cuisines in Modern Delhi Weddings',
    excerpt:
      'Moving beyond the standard buffet, today\'s families are looking deep into their heritage to serve forgotten royal recipes from Awadh, Rajasthan, and Bengal.',
    date: '2026-03-12',
    readTime: '4 min read',
    author: 'The Embassy Kitchen',
    tags: ['weddings', 'royal cuisine', 'Awadhi', 'heritage'],
    metaTitle: 'Regional Royal Cuisines at Delhi Weddings | The Embassy Catering',
    metaDescription:
      'Explore how Awadhi, Rajasthani, and Bengali royal recipes are transforming luxury wedding menus in Delhi NCR.',
    content: `
<p>For decades, the Delhi wedding menu operated on a kind of comfortable consensus. Paneer makhani. Dal makhani. A biryani station. Perhaps a chaat counter for the younger guests. The formula worked, in the way that formulas always work — reliably, predictably, and without surprise.</p>

<p>But something has shifted. In the last three years, we have seen a quiet and deeply personal revolution at the tables of Delhi NCR's most discerning families. They are returning to their roots — not in a nostalgic or sentimental way, but with genuine curiosity and pride. They are asking us to cook the food their great-grandmothers once served, dishes that existed in the margins of handwritten family recipe books, recipes that survived only because someone thought to write them down.</p>

<h2>The Awadhi Renaissance</h2>

<p>Lucknow's culinary tradition is perhaps the most aristocratic in the subcontinent. Born in the kitchens of the Nawabs of Awadh, it is a cuisine of extraordinary restraint and depth — where a single dish might require two days of preparation and a spice blend that takes a master chef a lifetime to perfect.</p>

<p>At Embassy, we have been approached by an increasing number of families with roots in Lucknow and the surrounding region who wish to honour this heritage at their weddings. The requests are specific. They want <em>dum pukht</em> — the ancient technique of sealing a pot with dough and slow-cooking over a wood fire, allowing the ingredients to cook entirely in their own steam and essence. They want <em>galouti kebab</em> made with the original recipe: 150 spices, meat so finely minced it dissolves on the tongue, a preparation that was invented for a toothless Nawab who refused to surrender his love of kebabs.</p>

<p>They want <em>nahari</em> served as it was intended — a slow-cooked overnight broth of bone marrow and trotters, finished with hand-ground spices and served at dawn. We adapt this for the wedding context, of course, but the soul of the dish remains unchanged.</p>

<h2>Rajasthan's Warrior Table</h2>

<p>Rajasthani royal cuisine presents a different challenge and a different beauty. It is a cuisine born of scarcity and ingenuity — a desert kingdom that learned to cook without water, to preserve without refrigeration, and to create richness from the most austere of ingredients.</p>

<p><em>Laal maas</em>, the legendary red mutton curry, was originally made with the flesh of wild game hunted on royal expeditions, cooked over open fires in the wilderness. The heat came from <em>mathania</em> chillies — a variety grown exclusively in a small region of Rajasthan, now increasingly rare, with a flavour profile that no substitution can replicate. We source these directly.</p>

<p><em>Dal baati churma</em>, in its proper royal avatar, is not the quick-service version most people know. At a Rajput wedding, the <em>baati</em> was baked in the embers of a wood fire until the crust cracked and the interior remained soft and steaming. The <em>churma</em> was hand-pounded, not blended, so it retained a coarser texture and a more complex sweetness. These distinctions matter enormously to families who grew up eating the real thing.</p>

<h2>Bengal's Forgotten Sophistication</h2>

<p>Of all India's regional traditions, Bengali cuisine is perhaps the most underestimated on the wedding circuit. It is a cuisine of exceptional subtlety — where the primary flavours are built not through long cooking but through the precise sequencing of ingredients, the timing of tempering, the balance of mustard and posto and the gentle bitterness of <em>neem</em> leaves.</p>

<p>Bengali aristocratic families — particularly those with connections to the old zamindari estates of the 19th century — are now bringing these traditions to their wedding tables with great intentionality. We have been asked to prepare <em>kosha mangsho</em> in the traditional way: mutton marinated overnight in mustard oil and whole spices, then slow-cooked without water until the oil separates and the meat collapses into something magnificent.</p>

<p>The <em>mishti</em> course — the sweets — deserves particular mention. Bengali sweets at their highest expression are not merely desserts. They are a form of cultural memory. <em>Sandesh</em> made with <em>chhena</em> pressed through silk cloth. <em>Roshogolla</em> that bounces back when pressed, soaked in light syrup rather than the heavy sugar bath of commercial versions. <em>Mishti doi</em> set in earthen pots that have been fired only once.</p>

<h2>What This Movement Means</h2>

<p>The return to regional royal cuisines is not merely a food trend. It is an act of identity. As India's middle and upper classes have grown more globally connected, there has emerged a parallel hunger for what is specifically, irreducibly Indian — and not the generic pan-Indian version that airport restaurants serve, but the deeply local, the geographically specific, the historically anchored.</p>

<p>At Embassy, we have been privileged to serve as the custodians of these recipes for many families. We research. We travel. We speak to the oldest members of families about how a dish tasted at a childhood wedding forty years ago. And then we attempt — with great humility — to bring that memory back to the table.</p>

<p>Because food, at a wedding, is not just sustenance. It is the most powerful form of storytelling a family can offer its guests.</p>
    `.trim(),
  },

  {
    slug: 'orchestrating-2000-guest-diplomatic-banquet',
    category: 'Behind the Scenes',
    title: 'Orchestrating a 2,000-Guest Diplomatic Banquet',
    excerpt:
      'The logistics, protocol, and precision required to serve heads of state. A look into how Embassy manages scale without sacrificing presentation.',
    date: '2026-02-28',
    readTime: '6 min read',
    author: 'The Embassy Operations Team',
    tags: ['corporate', 'diplomatic', 'large-scale'],
    metaTitle: '2000-Guest Diplomatic Banquet Logistics | The Embassy Catering',
    metaDescription:
      'Behind the scenes of a 2,000-guest diplomatic banquet — logistics, protocol, and culinary precision at The Embassy Catering.',
    content: `
<p>At 4:47 in the morning, the Embassy kitchens are already fully operational. Eighteen chefs work in coordinated silence. The first stocks have been on the fire since midnight. By the time Delhi wakes up, we will have prepared the foundational elements of a meal for two thousand people — a meal that must, by the evening, appear as though it was cooked moments ago.</p>

<p>This is the reality of large-scale diplomatic catering. And it is one that Embassy has been navigating, across seventy-eight years and countless state occasions, with the particular discipline that only experience can teach.</p>

<h2>The Mathematics of Scale</h2>

<p>Two thousand guests sounds like a number. What it actually represents is a logistical equation of extraordinary complexity. Consider: for a formal three-course dinner of this scale, you are serving approximately 6,000 individual plates over the course of an evening. Each plate must be hot. Each must be plated to a consistent standard. Each must arrive at the table within a defined service window.</p>

<p>At Embassy, we work with a ratio of one service staff member to every eight guests for formal seated occasions. For a 2,000-person event, that means 250 service personnel — each of whom has been briefed, positioned, and rehearsed. The briefing alone takes two hours the morning of the event. Positions are assigned. Timings are confirmed to the minute. Communication protocols — who calls the service, who acknowledges, who reports problems — are drilled until they become instinct.</p>

<p>The kitchen team operates on a different ratio. For a menu of this complexity, we deploy a head chef, six section chefs, and a production team of between forty and sixty people depending on the menu. They work in rotating shifts so that no one is cooking at hour sixteen of what would otherwise be an impossible day.</p>

<h2>The Protocol Layer</h2>

<p>Diplomatic events introduce a dimension that purely social occasions do not require: protocol. And protocol, in the diplomatic world, is not a suggestion. It is a system of codified respect that has evolved over centuries, and violations — however inadvertent — carry consequences that extend far beyond the dinner table.</p>

<p>Before any diplomatic event, our team receives a detailed brief from the host organisation. This brief covers seating arrangements (who sits where matters enormously — proximity to the host, sight lines, adjacencies that might be politically sensitive), dietary requirements (which are often non-negotiable for religious or health reasons), and service sequences (some protocols require that the head of state is always served first, which has implications for how we organise our service teams).</p>

<p>Allergen management at this scale is its own discipline. We maintain a colour-coded system for dietary requirements — each guest with a specific need has a corresponding marker on the service chart, and the relevant plate is prepared in an isolated section of the kitchen. The plate travels to the table through a separate service channel, handled only by staff who have been specifically briefed on that guest's requirements.</p>

<h2>Cold Chain and Temperature Control</h2>

<p>The single greatest enemy of large-scale catering is temperature. A dish that is served at 71 degrees is not merely cooler than ideal — it has failed. At Embassy, we operate a cold chain protocol for chilled dishes and a heat retention protocol for hot dishes that has been refined over decades.</p>

<p>Hot dishes leave the kitchen in insulated transport units that maintain temperature within a two-degree variance for up to forty-five minutes. Our service workflow is designed so that no dish ever needs to be held for longer than thirty minutes between leaving the kitchen and reaching the guest. This requires that the kitchen and the dining space operate in precise synchronisation — a complex choreography that is directed by a single operations coordinator who communicates simultaneously with the head chef and the floor manager.</p>

<p>For plated courses at a formal dinner, we use a process called <em>batch plating</em>: tables are plated in groups of ten, with all plates for a table completed simultaneously and dispatched together. This ensures that the entire table receives their course within a window of ninety seconds — the maximum variance that protocol allows before it becomes perceptible to guests.</p>

<h2>The Quiet Decisions</h2>

<p>Much of what makes a diplomatic banquet successful happens in decisions that guests never see. The choice of serving vessel — silver, white porcelain, or contemporary stoneware — is calibrated to the occasion and the host's preferences. The lighting at the service stations is set to allow staff to work efficiently without creating visual distraction. The music, if any, is at a volume that allows conversation without requiring guests to raise their voices.</p>

<p>These decisions are made weeks in advance, in consultation with event designers and protocol officers. By the day of the event, every variable that can be controlled has been accounted for. What remains is execution — and the calm readiness to manage whatever the evening brings.</p>

<p>Because in seventy-eight years of doing this, one thing has never changed: something unexpected always happens. A late arrival reshapes the service sequence. A guest's dietary requirement wasn't captured in the briefing. A serving station develops a technical problem thirty minutes before service begins.</p>

<p>The mark of an experienced team is not that these things don't happen. It is that when they do, no guest ever knows.</p>
    `.trim(),
  },

  {
    slug: 'art-of-interactive-live-counter',
    category: 'Event Planning',
    title: 'Beyond the Buffet: The Art of the Interactive Live Counter',
    excerpt:
      'From live wood-fired Neapolitan pizzas to hand-rolled sushi, interactive culinary stations have become the centerpiece of luxury events.',
    date: '2026-02-10',
    readTime: '3 min read',
    author: 'The Embassy Catering',
    tags: ['events', 'live counters', 'experiential'],
    metaTitle: 'Interactive Live Food Counters at Events | The Embassy Catering',
    metaDescription:
      'How live culinary stations — from wood-fired pizza to hand-rolled sushi — are redefining luxury events in Delhi NCR.',
    content: `
<p>The buffet, in its traditional form, is a remarkable invention. It solved a genuine problem: how do you feed a large number of people simultaneously, accommodate diverse preferences, and maintain some semblance of quality? The answer — line them up, let them serve themselves — was practical and democratic and, for a long time, sufficient.</p>

<p>But somewhere along the way, the buffet became the default. And defaults, over time, become invisible. Guests stop noticing the food. They fill their plates on autopilot, eating without attention, experiencing without memory. For an event planner — and for a family investing significantly in a celebration — that invisibility is a quiet failure.</p>

<p>The live counter changes this entirely.</p>

<h2>Why Live Counters Work</h2>

<p>A live counter is, at its core, a performance. There is a chef, working in real time, in full view of the guests. There is movement, heat, sound — the sizzle of a tawa, the theatrical toss of pasta in a pan, the careful rolling of a sushi cylinder. These are not incidental details. They are the entire point.</p>

<p>Human beings are drawn to watching skilled people do skilled things. It is one of our most fundamental fascinations. When a guest approaches a live counter, they are not merely collecting food — they are entering a brief encounter with craft. They watch. They ask questions. The chef explains. And the dish that arrives in their hands carries with it the weight of having been made, specifically, for them.</p>

<p>This transforms the food from a commodity into an experience. And experiences are what guests remember long after the evening has ended.</p>

<h2>The Stations We Love Most</h2>

<p>Over the years, we have designed and operated hundreds of live counter configurations. Some have become Embassy signatures — stations that our clients return to again and again because they work, consistently and beautifully.</p>

<p>The <strong>wood-fired pizza counter</strong> is perhaps our most dramatic. We bring in a full wood-fired oven — not a gas approximation, but an actual wood-burning unit — and position it so that the fire is visible to guests from across the room. A Neapolitan-trained pizzaiolo stretches dough by hand, builds the pizza, and slides it into the oven. Three minutes later — the exact time a Neapolitan pizza requires — it emerges with a leopard-spotted crust and molten centre. The theatre of it draws a crowd every time.</p>

<p>The <strong>live sushi station</strong> requires a different kind of skill: the precision of a surgeon and the calm of a monk. Watching a trained sushi chef work is almost meditative — the economy of movement, the exactness of every cut, the quiet confidence of someone who has done this ten thousand times. We pair this counter with sake service, which creates a natural gathering point and encourages guests to linger.</p>

<p>The <strong>chaat counter</strong>, in the right context, is pure joy. Delhi guests bring enormous enthusiasm and expertise to chaat — they know exactly how they want their <em>pani puri</em> filled, precisely how much tamarind chutney belongs on the <em>papdi chaat</em>. The interaction between a skilled chaat master and an opinionated Delhi guest is one of the most genuinely delightful things we witness at events. It is loud, cheerful, and completely alive.</p>

<p>For dessert, we have found that a <strong>live <em>jalebi</em> station</strong> — where the spirals are piped and fried to order, then soaked in warm saffron syrup and served immediately — creates a queue that never fully dissipates. The smell alone is enough to draw guests from the other side of the venue.</p>

<h2>Designing a Live Counter Programme</h2>

<p>The placement and sequencing of live counters within an event requires careful thought. A poorly positioned counter creates a bottleneck. Stations that are too similar in profile compete with each other and divide attention. The flow of guests through the space needs to be considered — both to ensure even distribution and to create moments of discovery as guests move through the evening.</p>

<p>We typically recommend between three and five live counters for a wedding of 300 to 500 guests, positioned at deliberate intervals across the venue. Each counter should represent a distinct culinary world — so that moving from one to the next feels like a journey rather than a repetition.</p>

<p>The staffing of these counters is equally important. A live counter chef is not simply a cook. They are, in a meaningful sense, an ambassador. They speak to guests, answer questions, personalise the experience. We select and train our counter chefs specifically for this combination of culinary skill and interpersonal warmth.</p>

<p>Because the best live counter is not the one with the most elaborate food. It is the one where a guest, years later, still remembers the name of the chef who made it for them.</p>
    `.trim(),
  },

  {
    slug: 'evolution-of-embassy-menu-1948-today',
    category: 'Heritage',
    title: 'The Evolution of the Embassy Menu: 1948 to Today',
    excerpt:
      'How our culinary offerings have adapted to modern palates while preserving the recipes that built our reputation over 75 years ago.',
    date: '2026-01-22',
    readTime: '5 min read',
    author: 'The Embassy Catering',
    tags: ['heritage', 'history', '1948'],
    metaTitle: 'The Embassy Catering Menu: 1948 to 2026 | Our Heritage Story',
    metaDescription:
      'The story of how The Embassy Catering\'s menu has evolved from 1948 to today, preserving heritage while embracing modern cuisine.',
    content: `
<p>There is a single sheet of paper, laminated now and kept in the Embassy archive, that lists the complete menu offered at our first catering engagement in 1948. It is a modest document by today's standards — twelve items in neat Devanagari script, a handful of dishes that reflected both the culinary traditions of Delhi and the particular constraints of the time.</p>

<p>Reading it now is a quietly moving experience. Some of those twelve dishes still appear on our menus today, essentially unchanged. Others have been retired, overtaken by shifting tastes or the unavailability of ingredients that once grew abundantly in the region. A few have been transformed beyond recognition — the same name, but a completely different expression of it, refined across decades of repetition and refinement.</p>

<p>The story of the Embassy menu is, in microcosm, the story of Delhi's culinary evolution.</p>

<h2>1948: The Founding Menu</h2>

<p>Delhi in 1948 was a city in the midst of profound transformation. Partition had reshaped its population and, with it, its food culture. Families from Lahore and Rawalpindi had brought their culinary traditions with them — the Punjabi robustness that would come to define the city's dominant food identity. But older Delhi flavours persisted: the Mughal-influenced preparations of the walled city, the subtle Persian notes that characterised the cuisine of established Muslim households, the vegetarian traditions of Jain and Bania communities.</p>

<p>Our first menu reflected this complexity. There were slow-cooked meats in the Mughal tradition — a <em>nihari</em>, a <em>korma</em> made with poppy seed paste and whole spices. There were Punjabi preparations that were already becoming the language of celebration in the city — a robust dal, a simple paneer dish. And there were sweets: <em>gulab jamun</em> made with <em>khoya</em> reduced on site, <em>phirni</em> set in earthen bowls.</p>

<p>The quantities were small. The ambitions were modest. But even in that first engagement, the commitment to quality that would define Embassy across the decades was already present.</p>

<h2>The 1960s and 70s: The Continental Encounter</h2>

<p>As India's diplomatic and business communities grew through the 1960s, Embassy began catering for an increasingly international clientele. The embassies of foreign nations in Delhi — which gave us, in part, our name and identity — required menus that could accommodate Western palates alongside Indian ones.</p>

<p>This was our first great culinary expansion. Our chefs learned to prepare continental dishes — roasts, soufflés, cream-based sauces — alongside the Indian preparations they had always known. But the Embassy approach, even then, was not simply to replicate. It was to understand the underlying logic of a cuisine and express it through the lens of our own culinary intelligence.</p>

<p>The result was a generation of dishes that we still think of as distinctively Embassy: a lamb preparation that used French braising technique but Indian spicing. A dessert that applied the logic of a crème brûlée to the flavours of <em>rabdi</em>. These were not fusion dishes in the contemporary sense — they were something more organic, born of genuine curiosity and daily practice.</p>

<h2>The 1980s and 90s: The Wedding Decade</h2>

<p>As Delhi's economy grew and its middle class expanded, the wedding became the primary arena for social expression. Families invested more. Guest lists grew. The expectations placed on the caterer shifted from mere adequacy to genuine distinction.</p>

<p>This was the period during which Embassy established the culinary signatures that would define us for the following generation. The <em>dum biryani</em> programme — where every biryani was sealed and cooked in the traditional manner, not assembled from pre-cooked components — became our most requested item and remains so today. The live chaat counter, which we introduced in this period, was considered innovative at the time and is now an industry standard.</p>

<p>We also built, during these years, the supplier relationships that continue to underpin our quality. The families who grow our basmati rice in the Dehradun valley. The dairy collective whose buffalo milk produces the <em>khoya</em> and <em>paneer</em> we use. The spice merchants in Old Delhi's Khari Baoli market who blend our masalas to specifications that have not changed in forty years.</p>

<h2>The 2000s to Today: Global Fluency, Local Roots</h2>

<p>The last two decades have brought the most rapid expansion in our menu's history. Delhi's exposure to global cuisine — through travel, through restaurants, through the internet — created a clientele that arrived at events with sophisticated expectations and specific requests.</p>

<p>We responded by investing in culinary education. Our chefs have trained in Italy, Japan, France, and Mexico. We have hosted visiting chefs from around the world. We have built a research kitchen where new preparations are tested, refined, and only adopted into our menu when they meet the standard we have maintained since 1948.</p>

<p>But the most important evolution of the last decade has been a deepening, rather than a broadening. As global influences have become available to everyone, what distinguishes Embassy is increasingly what has always distinguished us: the depth of our knowledge of Indian cuisine's most complex traditions, our access to the best regional ingredients, and our willingness to invest the time that great cooking requires.</p>

<p>The <em>nihari</em> on our current menu is made from a recipe that is, in its essentials, the same one that appeared on that laminated sheet from 1948. The technique is unchanged. The spice blend is unchanged. What has changed is the precision with which we execute it, the consistency we achieve across every event, the knowledge we bring to every bowl.</p>

<p>Seventy-eight years is a long time to cook. It is long enough to learn what matters and what doesn't. And what has always mattered, at Embassy, is the same thing it was in 1948: that the food on the plate is worth remembering.</p>
    `.trim(),
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getAllPosts(): BlogPost[] {
  return BLOG_POSTS.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostsByTag(tag: string): BlogPost[] {
  return BLOG_POSTS.filter((p) => p.tags.includes(tag));
}