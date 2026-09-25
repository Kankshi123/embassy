// EMBASSY CATERING — src/data/menuStations.ts
// Source: menu-pdf.pdf (28 pages, non-vegetarian menu)
// Last updated: September 2026

export interface MenuDish {
  name: string;
  isVeg: boolean;
  note?: string; // e.g. "LIVE", "Signature"
}

export interface MenuStation {
  id: string;
  name: string;
  tagline: string;
  description: string;
  isLive: boolean;
  isInteractive?: boolean;
  theme: 'indian' | 'asian' | 'european' | 'middleeastern' | 'mexican' | 'fusion' | 'dessert';
  image: string; // Unsplash URL
  dishes: MenuDish[];
  accompaniments?: string[];
  featured?: boolean; // Show on homepage
}

export const MENU_STATIONS: MenuStation[] = [
  {
    id: 'hors-doeuvres',
    name: "Passed Hors D'oeuvres",
    tagline: 'Global flavours. Indian technique.',
    description:
      'An elegant parade of handcrafted small plates served warm on pass-around. Designed for effortless grazing and conversation.',
    isLive: false,
    theme: 'fusion',
    image: 'https://images.unsplash.com/photo-1592409866090-81ed66f4e7ce?q=80&w=800',
    featured: true,
    dishes: [
      { name: 'Panko Fish Fingers with Coriander Mayo', isVeg: false },
      { name: 'Philadelphia Cheese Marinated Chicken Tikka', isVeg: false },
      { name: 'Crispy Sesame Fried Chicken', isVeg: false },
      { name: 'Burnt Garlic Thyme Chicken Tikka', isVeg: false },
      { name: 'Dragon Chicken', isVeg: false },
      { name: 'Rampuri Seekh Kebab', isVeg: false },
      { name: 'Edamame Seekh Kebab', isVeg: true },
      { name: 'Charcoal Roasted Mushroom', isVeg: true },
      { name: 'Achari Paneer Tikka', isVeg: true },
      { name: 'Thai Cigar Rolls in Kaffir Lime Mayo', isVeg: true },
      { name: 'Butter Chilli Garlic Crispy Water Chestnut', isVeg: true },
    ],
  },

  {
    id: 'dimsum',
    name: 'Kampai Dimsum Station',
    tagline: 'Japanese street-style. Live theatre.',
    description:
      'The Bao Bliss counter is a live Asian street-style station where soft, fluffy steamed buns and dumplings are served with fresh fillings.',
    isLive: true,
    theme: 'asian',
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=800',
    featured: true,
    dishes: [
      { name: 'Chicken & Chives Dumpling', isVeg: false, note: 'Pan fried' },
      { name: 'Chicken and Coriander Sui Mai', isVeg: false },
      { name: 'Exotic Vegetable Dumpling', isVeg: true },
      { name: 'Mushroom & Water Chestnut Dim Sum', isVeg: true },
    ],
    accompaniments: ['Chilli Vinegar', 'Red Chilli Soya Sauce', 'Black Beans Fermented Chilli Sauce'],
  },

  {
    id: 'pizza',
    name: 'Italian Artisan Oven',
    tagline: 'Stone-baked. Hand-stretched. Live.',
    description:
      'Stone-baked gourmet pizzas prepared live with premium toppings and hand-stretched bases. Classic Italian comfort elevated with fine cheeses and bold flavours.',
    isLive: true,
    theme: 'european',
    image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?q=80&w=800',
    featured: false,
    dishes: [
      { name: 'Smoked Chicken Pizza', isVeg: false },
      { name: 'Chicken & Mushroom Bell Pepper Pizza', isVeg: false },
      { name: 'Buratta, Basil & Cherry Tomato Pizza', isVeg: true },
      { name: 'Spinach, Mushroom & Ricotta Pizza', isVeg: true },
      { name: 'Asparagus, Goat Cheese, Walnuts & Parmesan Pizza', isVeg: true },
    ],
    accompaniments: ['Chilli Flakes', 'Oregano Masala'],
  },

  {
    id: 'levantine',
    name: 'Levantine Kitchen',
    tagline: 'Mezze. Shawarma. Fragrant spices.',
    description:
      'Warm flatbreads, shawarma, falafel and mezze inspired by the vibrant kitchens of the Levant. Fragrant spices, slow-roasted proteins and creamy dips.',
    isLive: true,
    theme: 'middleeastern',
    image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?q=80&w=800',
    featured: false,
    dishes: [
      { name: 'Chicken Shawarma', isVeg: false, note: 'Hung curd, tahini, cinnamon' },
      { name: 'Falafel', isVeg: true },
    ],
    accompaniments: ['Hummus', 'Babaghnaoush', 'Tabbouleh', 'Fattoush', 'Garlic Mayonnaise'],
  },

  {
    id: 'mexican',
    name: 'Fiesta Mexicana',
    tagline: 'Fajitas. Guacamole. Bold heat.',
    description:
      'Live Mexican counter with pulled proteins, stuffed fajitas and bold accompaniments — a fiesta of flavour, every time.',
    isLive: true,
    theme: 'mexican',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800',
    featured: false,
    dishes: [
      { name: 'Shredded Chicken Fajita in Black Pepper', isVeg: false },
      { name: 'Pulled Lamb Fajitas in BBQ Sauce', isVeg: false },
      { name: 'Exotic Vegetable Stuffed Fajita', isVeg: true },
      { name: 'Pulled Jackfruit Fajita with Chipotle', isVeg: true },
    ],
    accompaniments: ['Sour Cream', 'Guacamole', 'Tomato Salsa', 'Monterey Jack Cheese', 'Salsa Fresca'],
  },


  {
    id: 'embassy-signature',
    name: 'Embassy Signature Kitchen',
    tagline: 'Heritage Indian. Since 1948.',
    description:
      'A curated showcase of signature dishes from Embassy, blending heritage Indian flavours with timeless restaurant classics. Rich, celebratory, and deeply nostalgic in spirit.',
    isLive: true,
    theme: 'indian',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=800',
    featured: true,
    dishes: [
      { name: 'Embassy Signature Dal Meat', isVeg: false, note: 'LIVE — lamb with dal, a speciality' },
      { name: 'Embassy Signature Butter Chicken', isVeg: false, note: 'Tandoori, rich tomato gravy' },
      { name: 'Kadhai Paneer', isVeg: true },
      { name: 'Gobhi Laccha Adraki', isVeg: true },
      { name: 'Mushroom Do Pyaza', isVeg: true },
      { name: 'Subz Bharwan Tawa', isVeg: true, note: 'LIVE' },
      { name: 'Embassy Pindi Chana', isVeg: true, note: 'Signature creation' },
      { name: 'Sarson Ka Saag', isVeg: true },
      { name: 'Dal Dhaba', isVeg: true },
    ],
    accompaniments: ['Bhatura', 'Achar', 'Makki Di Roti', 'Shakkar', 'Home Churned White Butter'],
  },

  {
    id: 'mughal',
    name: 'Mughal Royal Table',
    tagline: 'Regal. Slow-cooked. Indulgent.',
    description:
      'Slow-cooked curries and regal preparations inspired by Mughal culinary traditions. Luxuriously spiced gravies, rich textures, and indulgent aromas rooted in royal kitchens.',
    isLive: false,
    theme: 'indian',
    image: 'https://images.unsplash.com/photo-1728910156510-77488f19b152?q=80&w=800',
    featured: true,
    dishes: [
      { name: 'Gosht Nihari', isVeg: false, note: 'Traditional muslim mutton preparation' },
      { name: 'Chicken Dum Pukt', isVeg: false, note: 'Lucknowi spices, cashew nut gravy' },
      { name: 'Shahi Malai Kofta', isVeg: true },
      { name: 'Bagh-e-Bahar', isVeg: true },
      { name: 'Mirch Ka Salan', isVeg: true, note: 'Hyderabadi style' },
      { name: 'Dal Bukhara', isVeg: true, note: 'Overnight soaked black lentil' },
    ],
  },

  {
    id: 'malabar',
    name: 'Coast of Malabar',
    tagline: 'Coconut. Spice. Kerala soul.',
    description:
      'The historic southwestern coastline of Kerala along the Arabian Sea — famed for its spice trade, backwaters and rich cultural influences. Served with Kerala Appam, live.',
    isLive: true,
    theme: 'indian',
    image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?q=80&w=800',
    featured: false,
    dishes: [
      { name: 'Meen Moilee', isVeg: false, note: 'Fish stewed in coconut milk' },
      { name: 'Malabar Paneer', isVeg: true },
      { name: 'Aloo Chettinad', isVeg: true },
      { name: 'Vegetable Stew', isVeg: true, note: 'Coconut milk' },
      { name: 'Kerala Appam', isVeg: true, note: 'LIVE — rice batter pancake' },
    ],
  },

  {
    id: 'biryani',
    name: 'Hyderabadi Biryani & Rice',
    tagline: 'Dum-cooked. Fragrant. Layered.',
    description:
      'Fragrant dum-cooked biryanis and aromatic rice dishes served with traditional accompaniments. Layered flavours, slow cooking and soulful spice blends.',
    isLive: false,
    theme: 'indian',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800',
    featured: true,
    dishes: [
      { name: 'Chicken Dum Biryani', isVeg: false, note: 'Basmati, aromatic spices' },
      { name: 'Subz Handi Biryani', isVeg: true },
      { name: 'Jeera Pulao', isVeg: true },
    ],
    accompaniments: ['Buhrani Raita', 'Dahi Ki Chutney', 'Laccha Pyaz'],
  },

  {
    id: 'artisan-roti',
    name: 'Artisan Roti & Breads',
    tagline: 'Tandoor-baked. Fresh. Live.',
    description:
      'Freshly baked Indian breads prepared live from the tandoor and tawa. Soft, flaky, and aromatic accompaniments to elevate every curry and grill.',
    isLive: true,
    theme: 'indian',
    image: 'https://images.unsplash.com/photo-1697155406014-04dc649b0953?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    featured: false,
    dishes: [
      { name: 'Butter Naan', isVeg: true, note: 'Tandoor' },
      { name: 'Garlic Naan', isVeg: true, note: 'Tandoor' },
      { name: 'Coriander Naan', isVeg: true, note: 'Tandoor' },
      { name: 'Plain Naan', isVeg: true, note: 'Tandoor' },
      { name: 'Missi Roti', isVeg: true, note: 'Tandoor' },
      { name: 'Tandoori Roti', isVeg: true, note: 'Tandoor' },
      { name: 'Mirch Roti', isVeg: true, note: 'Tandoor' },
      { name: 'Laccha Paratha', isVeg: true, note: 'Tawa / Tandoor' },
      { name: 'Pudina Paratha', isVeg: true, note: 'Tawa / Tandoor' },
      { name: 'Mirch Paratha', isVeg: true, note: 'Tawa / Tandoor' },
    ],
  },

  {
    id: 'teppanyaki',
    name: 'Teppanyaki Grill',
    tagline: 'Interactive. High heat. Theatrical.',
    description:
      'Japanese-style interactive grill where proteins and vegetables are seared to order. Bold sauces, high heat and theatrical plating for a modern Asian dining experience.',
    isLive: true,
    isInteractive: true,
    theme: 'asian',
    image: 'https://images.unsplash.com/photo-1708388464897-92cf538d4795?q=80&w=800',
    featured: true,
    dishes: [
      { name: 'Chicken (Choice of Meat)', isVeg: false },
      { name: 'Fish (Choice of Meat)', isVeg: false },
      { name: 'Lamb (Choice of Meat)', isVeg: false },
      { name: 'Assorted Exotic Vegetables', isVeg: true, note: 'Pokchoy, broccoli, zucchini, baby corn, mushroom' },
    ],
    accompaniments: ['Kimchi Sauce', 'Wasabi Pepper Sauce', 'Teriyaki Sauce', 'Miso Gochujang', 'Steamed Rice', 'Garlic Fried Rice', 'Udon Noodles'],
  },

  {
    id: 'asian',
    name: 'Asian Kitchen',
    tagline: 'Thai curries. Wok-tossed. Bold.',
    description:
      'A vibrant showcase of Thai and South East Asian flavours. Fragrant curries, wok-tossed vegetables and bold chilli-forward sauces for balanced heat and freshness.',
    isLive: false,
    theme: 'asian',
    image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=800',
    featured: false,
    dishes: [
      { name: 'Kung Pao Chicken', isVeg: false, note: 'Fermented chilly sauce, peanuts' },
      { name: 'Clay Pot Lamb', isVeg: false, note: 'Anise flavoured sauce' },
      { name: 'Assorted Vegetables in Thai Green Curry', isVeg: true },
      { name: 'Mix Exotic Vegetable in Hot Garlic Sauce', isVeg: true },
      { name: 'Tofu in Black Bean Sauce', isVeg: true },
      { name: 'Vegetable Hakka Noodles', isVeg: true },
    ],
  },

  {
    id: 'pasta',
    name: 'Pasta Studio',
    tagline: 'Fresh. To order. Comforting.',
    description:
      'Fresh pasta tossed live with classic sauces and seasonal toppings. Customisable, comforting and indulgent — crafted to order for each guest.',
    isLive: true,
    theme: 'european',
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=800',
    featured: false,
    dishes: [
      { name: 'Penne', isVeg: true, note: 'Choice of pasta' },
      { name: 'Farfalle (Bow-tie)', isVeg: true, note: 'Choice of pasta' },
      { name: 'Fusilli', isVeg: true, note: 'Choice of pasta' },
    ],
    accompaniments: ['Alfredo Sauce', 'Arrabbiata Sauce', 'Broccoli', 'Mushroom', 'Bell Pepper', 'Olives', 'Herbs & Cheese'],
  },

  {
    id: 'indian-dessert',
    name: 'Indian Dessert Atelier',
    tagline: 'Saffron-kissed. Nostalgic. Live.',
    description:
      "A nostalgic celebration of India's most loved sweets, prepared and finished live. Warm, syrupy and saffron-kissed indulgences crafted for traditional sweetness lovers.",
    isLive: true,
    theme: 'dessert',
    image: 'https://images.unsplash.com/photo-1695568181044-afbbeaf4298d?q=80&w=800',
    featured: true,
    dishes: [
      { name: 'Kesari Jalebi', isVeg: true, note: 'LIVE — saffron flavoured' },
      { name: 'Lacchhedar Rabri', isVeg: true },
      { name: 'Gulab Jamun', isVeg: true, note: 'Cardamom, rosewater, pistachio stuffed' },
      { name: 'Gajar Ka Halwa', isVeg: true },
      { name: 'Tile Wali Kulfi', isVeg: true, note: 'LIVE — thickened milk & dry fruits' },
      { name: 'Rasmalai', isVeg: true },
      { name: 'Phirni', isVeg: true, note: 'Saffron milk, cardamom, pistachio' },
    ],
  },

  {
    id: 'western-dessert',
    name: 'Western Patisserie & Dessert Bar',
    tagline: 'European. Indulgent. Refined.',
    description:
      'A refined selection of European-style desserts and baked classics. Creamy, chocolate-forward and indulgent finales to complete the dining journey.',
    isLive: false,
    theme: 'dessert',
    image: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?q=80&w=800',
    featured: false,
    dishes: [
      { name: 'Kahlua Touched Tiramisu', isVeg: true },
      { name: 'Banoffee Pie', isVeg: true },
      { name: 'Lemon Tarts', isVeg: true },
      { name: 'Biscoff Cheesecake', isVeg: true },
      { name: 'Gooey Chocolate Cake', isVeg: true, note: 'Molten centre + vanilla ice cream' },
    ],
  },
  {
    id: 'beverage-tea',
    name: 'Beverage & Tea Lounge',
    tagline: 'Warm. Aromatic. Soulful.',
    description:
      'A curated selection of hot beverages to accompany desserts and late evening conversations. Comforting brews served with quiet elegance to conclude the celebration.',
    isLive: false,
    theme: 'dessert',
    image: 'https://plus.unsplash.com/premium_photo-1674406481284-43eba097a291?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmV2ZXJhZ2UlMjBhbmQlMjB0ZWElMjBsb3VuZ2V8ZW58MHx8MHx8fDA%3D',
    featured: false,
    dishes: [
      { name: 'Green Tea', isVeg: true },
      { name: 'Black Tea', isVeg: true },
      { name: 'Tea', isVeg: true },
      { name: 'Coffee', isVeg: true },
      { name: 'Black Coffee', isVeg: true },
      { name: 'Mineral Water - 200 ml', isVeg: true },


    ],
  },
];

// 8 featured stations for homepage (4×2 grid)
export const FEATURED_STATIONS = MENU_STATIONS.filter((s) => s.featured);

// All stations for the full menu page
export const ALL_STATIONS = MENU_STATIONS;

export interface MenuPackage {
  id: string;
  title: string;
  eventType: 'wedding' | 'corporate' | 'social';
  description: string;
  image: string;
  suggestedStations: string[];
  guestSize: string;
}

export const MENU_PACKAGES: MenuPackage[] = [
  {
    id: 'grand-wedding',
    title: 'The Grand Embassy Wedding',
    eventType: 'wedding',
    description: 'An opulent culinary experience featuring our most celebrated live counters, a sprawling Indian feast, and theatrical desserts, designed for grand celebrations.',
    image: '', // Placeholder
    suggestedStations: ['hors-doeuvres', 'teppanyaki', 'asian', 'modern-indian-chaat'],
    guestSize: '500+ Guests',
  },
  {
    id: 'corporate-gala',
    title: 'Executive Corporate Gala',
    eventType: 'corporate',
    description: 'Sophisticated global flavours, elegant pass-arounds, and seamless service designed to impress partners and celebrate milestones.',
    image: '', // Placeholder
    suggestedStations: ['hors-doeuvres', 'european', 'sushi-bar', 'artisanal-cheese'],
    guestSize: '100 - 500 Guests',
  },
  {
    id: 'social-soiree',
    title: 'Intimate Social Soirée',
    eventType: 'social',
    description: 'A curated selection of interactive food stations and crowd-favourite dishes, perfect for anniversaries, birthdays, and private gatherings.',
    image: '', // Placeholder
    suggestedStations: ['asian', 'mexican', 'indian-street-food', 'dessert'],
    guestSize: '50 - 200 Guests',
  }
];
