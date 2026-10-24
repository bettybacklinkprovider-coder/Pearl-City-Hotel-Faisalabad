export interface Room {
  id: string;
  name: string;
  category: 'deluxe' | 'suite' | 'presidential' | 'family';
  tagline: string;
  pricePKR: number;
  priceUSD: number;
  sizeSqFt: number;
  bedType: string;
  occupancy: string;
  view: string;
  image: string;
  features: string[];
  description: string;
  popular?: boolean;
}

export interface SpecialOffer {
  id: string;
  title: string;
  code: string;
  tagline: string;
  category: 'weekend' | 'extended' | 'romantic' | 'family' | 'business' | 'seasonal';
  originalPricePKR: number;
  discountedPricePKR: number;
  discountPercent: number;
  minStay: string;
  validity: string;
  image: string;
  description: string;
  includedBenefits: string[];
  conditions: string;
}

export interface Review {
  id: string;
  name: string;
  role: string;
  location: string;
  rating: number;
  date: string;
  avatar: string;
  stayType: string;
  comment: string;
  verified: boolean;
  platform: 'Google' | 'Trustpilot' | 'Direct';
}

export interface Facility {
  id: string;
  name: string;
  shortDesc: string;
  icon: string;
  highlight: string;
}

export const HOTEL_INFO = {
  name: "Pearl City Shopping Mall",
  tagline: "Faisalabad's Premier Shopping, Fashion & Dining Landmark",
  phone: "03216561717",
  phoneDisplay: "0321 6561717",
  internationalPhone: "+92 321 6561717",
  whatsappNumber: "923216561717",
  email: "info@pearlcityfaisalabad.com",
  address: "Sargodha Rd, Canal Block Shadman, Faisalabad, Pakistan",
  landmark: "Near Sui Gas Head Office & Shadman Canal Bridge",
  coordinates: {
    lat: 31.4504,
    lng: 73.0825
  },
  openingHours: "10:00 AM – 11:30 PM (Daily)",
  checkIn: "10:00 AM (Mall Opening)",
  checkOut: "11:30 PM (Mall Closing)",
  rating: 4.9,
  totalReviews: 486,
  googleRating: 4.9,
  googleReviewsCount: 324,
  trustpilotRating: 4.8,
  trustpilotReviewsCount: 162,
};

export const IMAGES = {
  hero: "/src/assets/images/pearl_mall_hero_1792757694063.jpg",
  atrium: "/src/assets/images/pearl_mall_atrium_1792757694593.jpg",
  deluxe: "/src/assets/images/mall_designer_boutique_1792757713566.jpg",
  presidential: "/src/assets/images/pearl_mall_atrium_1792757694593.jpg",
  dining: "/src/assets/images/mall_food_court_1792757714189.jpg",
  family: "/src/assets/images/mall_supermarket_1792757730720.jpg",
  electronics: "/src/assets/images/mall_electronics_store_1792757731278.jpg",
  mallAtrium: "/src/assets/images/pearl_mall_atrium_1792757694593.jpg",
  mallExterior: "/src/assets/images/pearl_mall_hero_1792757694063.jpg",
  mallBoutique: "/src/assets/images/mall_designer_boutique_1792757713566.jpg",
  supermarket: "/src/assets/images/mall_supermarket_1792757730720.jpg",
  foodCourt: "/src/assets/images/mall_food_court_1792757714189.jpg",
};

export interface ShoppingMall {
  id: string;
  name: string;
  tagline: string;
  distance: string;
  highlights: string[];
  image: string;
  description: string;
}

export const FAISALABAD_MALLS: ShoppingMall[] = [
  {
    id: "pearl-city-mall",
    name: "Pearl City Shopping Mall (Our Mall)",
    tagline: "Faisalabad's iconic retail, dining & commercial landmark on Sargodha Road",
    distance: "Direct On-Site on Sargodha Road",
    highlights: ["Al-Rizq Supermarket", "Designer Lawn & Couture Boutiques", "Mega Food Court & Cafes", "500+ Secure Parking Bays"],
    image: IMAGES.hero,
    description: "The flagship shopping destination situated in Canal Block Shadman on Sargodha Road featuring grand glass architecture, illuminated fountain plaza, top Pakistani fashion houses, and family dining."
  },
  {
    id: "lyallpur-galleria",
    name: "Lyallpur Galleria Shopping Mall",
    tagline: "Faisalabad's luxury retail & lifestyle destination on Canal Road",
    distance: "10-12 Mins Drive",
    highlights: ["Designer Lawn & Couture Boutiques", "Hyperstar / Carrefour Supermarket", "Food Court & International Cafes", "Multiplex Cinema"],
    image: "/src/assets/images/faisalabad_lyallpur_galleria_mall_1792756672862.jpg",
    description: "The premier modern shopping center of Faisalabad featuring multi-level glass architecture, top Pakistani fashion houses (Sapphire, Khaadi, Sana Safinaz), luxury watch stores, and family entertainment."
  },
  {
    id: "textile-couture-hub",
    name: "D-Ground & Kohinoor Designer Hub",
    tagline: "The world-famous textile capital shopping district for fabrics & haute couture",
    distance: "14 Mins Drive",
    highlights: ["Exclusive Unstitched Silk & Cotton", "Bespoke Bridal Studios", "Artisan Embroidery Masters", "Textile Mill Outlets"],
    image: IMAGES.mallBoutique,
    description: "World-renowned for top Pakistani designer lawn, bespoke men's and women's unstitched fabrics, and traditional bridal wear."
  }
];

export const ROOMS: Room[] = [
  {
    id: "designer-boutique-suite",
    name: "Designer Lawn & Couture Fashion Boutique",
    category: "deluxe",
    tagline: "Flagship Pakistani couture, bridal wear and luxury unstitched lawn collections",
    pricePKR: 16500,
    priceUSD: 59,
    sizeSqFt: 1200,
    bedType: "Ground Floor Galleria",
    occupancy: "All Shoppers",
    view: "Grand Mall Promenade",
    image: IMAGES.mallBoutique,
    features: [
      "Top Designer Brands (Sapphire, Khaadi, Asim Jofa)",
      "Bespoke Bridal Tailoring & Styling Assistance",
      "Spacious VIP Fitting Rooms with Attendants",
      "Exclusive Seasonal Pret & Lawn Launches",
      "Instant Tax-Free Billing & Gift Wrapping"
    ],
    description: "Explore the very best of Faisalabad's famous textile legacy. Featuring premier Pakistani designer brands, haute couture bridal dresses, luxury unstitched silk and cotton fabrics.",
    popular: true
  },
  {
    id: "central-atrium-galleria",
    name: "Grand Central Mall Atrium & Luxury Galleria",
    category: "presidential",
    tagline: "Spectacular multi-tier glass skylight atrium with panoramic glass elevators",
    pricePKR: 38000,
    priceUSD: 136,
    sizeSqFt: 4500,
    bedType: "Multi-Level Atrium",
    occupancy: "Family Friendly",
    view: "360° Glass Skylight & Fountains",
    image: IMAGES.atrium,
    features: [
      "High-speed Panoramic Glass Elevators & Escalators",
      "International Luxury Watches, Perfumes & Cosmetics",
      "Central Fountains & Seasonal Event Stage",
      "High-Speed Mall Optical Wi-Fi & Lounge Seating",
      "Customer Care Concierge Desk & Directory Maps"
    ],
    description: "The architectural marvel of Pearl City Shopping Mall. Featuring polished marble walkways, high natural light skylight ceiling, premier watch boutiques, and luxury brand storefronts.",
    popular: true
  },
  {
    id: "al-rizq-supermarket",
    name: "Al-Rizq Mega Supermarket & Grocery Anchor",
    category: "family",
    tagline: "Comprehensive one-stop supermarket with fresh produce, imported goods & bakery",
    pricePKR: 26000,
    priceUSD: 93,
    sizeSqFt: 8500,
    bedType: "Lower Ground Anchor",
    occupancy: "All Families",
    view: "Direct Car Park Access",
    image: IMAGES.supermarket,
    features: [
      "Fresh Farm Produce, Fruits & Organic Vegetables",
      "In-House Artisan French Bakery & Delicatessen",
      "Imported Gourmet Confectionery & Beverages",
      "Convenient Shopping Carts & Express Billing Counters",
      "Direct Escalator Access to Covered Car Parking"
    ],
    description: "Faisalabad's favorite modern grocery destination inside Pearl City Mall. Offering farm-fresh groceries, premium butcher cuts, household essentials, and daily bakery delicacies.",
    popular: true
  },
  {
    id: "tech-electronics-hub",
    name: "Flagship Electronics, Laptops & Smartphone Hub",
    category: "suite",
    tagline: "Authorized Apple, Samsung, Dell and smart gadgets experience center",
    pricePKR: 21000,
    priceUSD: 75,
    sizeSqFt: 2200,
    bedType: "1st Floor Tech Wing",
    occupancy: "Tech Enthusiasts",
    view: "Boulevard Glass Facade",
    image: IMAGES.electronics,
    features: [
      "Hands-On Interactive Live Demo Stations",
      "Official 100% Genuine Brand Warranties",
      "4K OLED Smart TVs & Home Theater Lounges",
      "Next-Gen Gaming Consoles & VR Gear",
      "Dedicated Corporate & Volume Pricing Desk"
    ],
    description: "The premier gadgets destination in Faisalabad. Experience live product demonstrations, flagship smartphone releases, gaming setups, and genuine authorized warranties."
  },
  {
    id: "gourmet-food-court",
    name: "Gourmet Food Court & Rooftop Dining Promenade",
    category: "suite",
    tagline: "Vibrant culinary center featuring continental cafes, live tandoor and desserts",
    pricePKR: 19000,
    priceUSD: 68,
    sizeSqFt: 3800,
    bedType: "2nd Floor Food Court",
    occupancy: "300+ Seating",
    view: "Canal Skyline Panorama",
    image: IMAGES.dining,
    features: [
      "Over 20 National & International Food Brands",
      "Comfortable Family Dining Booths & Kids High Chairs",
      "Artisanal Coffee, Bubble Teas & Ice Cream Parlors",
      "Authentic Pakistani Barbecue, Handi & Live Grills",
      "Rapid WhatsApp Table Ordering & Takeaway Counter"
    ],
    description: "Take a delightful shopping break at our vibrant food court. Enjoy freshly prepared burgers, stone-baked pizzas, aromatic biryani, gourmet coffee, and decadent desserts."
  },
  {
    id: "mall-exterior-plaza",
    name: "Pearl City Twilight Promenade & Fountain Plaza",
    category: "deluxe",
    tagline: "Landscaped outdoor fountain promenade with grand facade and valet parking",
    pricePKR: 14000,
    priceUSD: 50,
    sizeSqFt: 6000,
    bedType: "Main Entrance Plaza",
    occupancy: "Visitors & Guests",
    view: "Sargodha Road Main Canal",
    image: IMAGES.hero,
    features: [
      "Direct Sargodha Road Expressway Dual Carriage Access",
      "Dancing Fountain Display with Warm Evening Illumination",
      "3-Level Monitored Underground & Surface Parking",
      "24/7 Security Guards & Metal Detectors",
      "Designated Taxi, Careem & Chauffeur Drop-off Bay"
    ],
    description: "The illuminated grand exterior of Pearl City Mall on Sargodha Road. Welcoming thousands of families daily with safe pedestrian promenades and secure monitored parking."
  }
];

export const SPECIAL_OFFERS: SpecialOffer[] = [
  {
    id: "weekend-shopping-spree",
    title: "Weekend Family Shopping & Dining Festival",
    code: "MALL-FEST",
    tagline: "Special mall-wide discounts, free parking & food court vouchers",
    category: "weekend",
    originalPricePKR: 38000,
    discountedPricePKR: 29500,
    discountPercent: 22,
    minStay: "Friday – Sunday Gala",
    validity: "Valid on all weekends through 2026",
    image: IMAGES.hero,
    description: "Enjoy a rejuvenating weekend at Pearl City Shopping Mall on Sargodha Road. Get 20% off at participating retail fashion brands, free valet parking, and kids entertainment perks.",
    includedBenefits: [
      "Flat 20% Discount at Top Designer Lawn Boutiques",
      "Complimentary VIP Valet Parking all day",
      "PKR 2,000 Food Court Family Dining Voucher",
      "Free Welcome Mocktails & Kids Play Zone Token",
      "High-Speed Mall Wi-Fi & Concierge Support"
    ],
    conditions: "Applicable at all participating Pearl City Mall outlets. Show voucher code at checkout."
  },
  {
    id: "lawn-bridal-gala",
    title: "Designer Lawn & Bridal Fashion Gala",
    code: "LAWN-LUX",
    tagline: "Exclusive bridal consultations, pre-launch discounts & couture styling",
    category: "extended",
    originalPricePKR: 70000,
    discountedPricePKR: 52500,
    discountPercent: 25,
    minStay: "Seasonal Fashion Week",
    validity: "Year-Round Exclusive Offer",
    image: IMAGES.mallBoutique,
    description: "Ideal for wedding shoppers and fashion enthusiasts visiting Faisalabad's famous textile hub. Exclusive discounts on unstitched silk, luxury chiffon, and bridal collections.",
    includedBenefits: [
      "25% Off on Selected Designer Lawn & Bridal Outfits",
      "Complimentary Personal Stylist & Tailoring Consultation",
      "Private VIP Fitting Lounge with Refreshments",
      "Free Doorstep Delivery Across Faisalabad & Lahore",
      "Special Corporate & Wedding Bulk Discount Pricing"
    ],
    conditions: "Valid at Pearl City Mall designer fashion studios. Appointments can be scheduled on WhatsApp."
  },
  {
    id: "atrium-luxury-pass",
    title: "Atrium Luxury Brand Exhibition & Shopping Pass",
    code: "ATRIUM-VIP",
    tagline: "VIP pass to seasonal brand exhibitions, perfumes & international watches",
    category: "romantic",
    originalPricePKR: 44000,
    discountedPricePKR: 35000,
    discountPercent: 20,
    minStay: "Daily VIP Pass",
    validity: "Available Daily upon WhatsApp reservation",
    image: IMAGES.atrium,
    description: "Access our exclusive central atrium luxury pop-up exhibits, imported perfumes, gold jewelry showrooms, and luxury accessories with special concierge discounts.",
    includedBenefits: [
      "Exclusive 20% Savings on Premium Watch & Fragrance Brands",
      "Access to Executive Atrium Lounge with Specialty Coffee",
      "Complimentary Gift Wrapping & Customized Gift Boxes",
      "Priority Valet Drop-off at Main Mall Entrance",
      "Instant WhatsApp Assistance for Store Reservations"
    ],
    conditions: "Present your digital pass on WhatsApp to concierge desk on Arrival."
  },
  {
    id: "supermarket-savings",
    title: "Al-Rizq Supermarket Mega Family Savings",
    code: "GROCERY-SAVER",
    tagline: "Weekly family grocery discounts, imported goods & bakery specials",
    category: "family",
    originalPricePKR: 48000,
    discountedPricePKR: 38500,
    discountPercent: 20,
    minStay: "Weekly Grocery Gala",
    validity: "Daily Opening Hours 10:00 AM – 11:30 PM",
    image: IMAGES.supermarket,
    description: "Stock up on premium pantry goods, fresh meats, dairy, imported chocolates, and organic vegetables at Al-Rizq Supermarket inside Pearl City Mall with extra savings.",
    includedBenefits: [
      "20% Off on Selected Imported Gourmet Foods & Cheeses",
      "Free In-House Fresh Baguette or Pastry with PKR 5k+ cart",
      "Dedicated Express Checkout Line for Privilege Cardholders",
      "Free Parking Validation for Shoppers",
      "Complimentary Cart Assistance to Your Vehicle"
    ],
    conditions: "Valid at Al-Rizq Supermarket inside Pearl City Mall, Sargodha Road Faisalabad."
  },
  {
    id: "tech-electronics-deal",
    title: "Tech & Gadgets Flash Discount Week",
    code: "TECH-ELITE",
    tagline: "Instant rebates on latest smartphones, laptops, smart TVs and headphones",
    category: "business",
    originalPricePKR: 28000,
    discountedPricePKR: 22400,
    discountPercent: 20,
    minStay: "Promotional Period",
    validity: "Limited Stocks Available",
    image: IMAGES.electronics,
    description: "Upgrade your work and entertainment devices at the authorized technology showroom inside Pearl City Mall. 100% genuine products with manufacturer warranty.",
    includedBenefits: [
      "Up to 20% Off on Leading Smartphone & Laptop Brands",
      "Free Screen Protector & Premium Silicone Case",
      "Complimentary Data Migration & Setup Assistance",
      "0% Markup Installment Plans on Major Bank Cards",
      "Dedicated Corporate WhatsApp Assistant for Inquiries"
    ],
    conditions: "Official Pakistan PTA approved stock with 1-year brand warranty."
  },
  {
    id: "food-court-feast",
    title: "Food Court & Gourmet Dining Feast Voucher",
    code: "TASTE-PEARL",
    tagline: "Delicious dining deals across 20+ restaurants and terrace cafes",
    category: "seasonal",
    originalPricePKR: 32000,
    discountedPricePKR: 24000,
    discountPercent: 25,
    minStay: "Daily Dining",
    validity: "Valid 12:00 PM – 11:30 PM",
    image: IMAGES.dining,
    description: "Savor the flavors of Faisalabad! From sizzling barbecue platters and gourmet burgers to wood-fired pizzas and dessert bars, enjoy exclusive 25% dining cashbacks.",
    includedBenefits: [
      "Flat 25% Savings at Featured Food Court Restaurants",
      "Complimentary Dessert or Specialty Coffee with Meals",
      "Reserved Family Seating Area on Weekends",
      "Free High-Speed Wi-Fi for Seamless Food Ordering",
      "Direct WhatsApp Table & Takeaway Booking Service"
    ],
    conditions: "Valid across all participating Food Court counters in Pearl City Mall."
  }
];

export const TESTIMONIALS: Review[] = [
  {
    id: "rev-1",
    name: "Mian Tariq Mehmood",
    role: "Managing Director, Crescent Textiles",
    location: "Faisalabad",
    rating: 5,
    date: "October 2026",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    stayType: "Retail & Textile Shopping",
    comment: "Pearl City Shopping Mall on Sargodha Road is by far the finest shopping destination in Faisalabad! The designer lawn boutiques, Khaadi, Sapphire, and Asim Jofa collections under one roof are incredible. Parking on Sargodha Road is fast and secure.",
    verified: true,
    platform: "Google"
  },
  {
    id: "rev-2",
    name: "Dr. Ayesha Zubair & Zubair Khan",
    role: "Visiting Diaspora from UK",
    location: "Manchester / Faisalabad",
    rating: 5,
    date: "September 2026",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
    stayType: "Family Shopping & Supermarket",
    comment: "We visited Pearl City Mall multiple times during our vacation. Al-Rizq Supermarket has everything including imported UK groceries, the central atrium with glass elevators is stunning, and the kids loved the food court. World-class mall standard in Faisalabad!",
    verified: true,
    platform: "Google"
  },
  {
    id: "rev-3",
    name: "Hamza Farooq",
    role: "Tech Consultant & Investor",
    location: "Lahore",
    rating: 5,
    date: "October 2026",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    stayType: "Electronics & Dining",
    comment: "Bought a new laptop from the tech flagship store and had dinner at the terrace food court. Inquired directly via WhatsApp on 03216561717 and got instant confirmation about store timings and brand availability. 10/10 shopping mall experience.",
    verified: true,
    platform: "Trustpilot"
  },
  {
    id: "rev-4",
    name: "Fatima Noor & Daniyal Sheikh",
    role: "Wedding Shoppers",
    location: "Islamabad",
    rating: 5,
    date: "August 2026",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    stayType: "Bridal Couture & Lawn",
    comment: "Drove down specifically for wedding shopping. The designer boutiques inside Pearl City Mall had the most exquisite bridal collections and unstitched luxury fabrics. The central atrium air-conditioning and valet service made our long day effortless.",
    verified: true,
    platform: "Google"
  },
  {
    id: "rev-5",
    name: "Shahid Rafiq",
    role: "Regional Director, Allied Bank",
    location: "Karachi",
    rating: 5,
    date: "July 2026",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80",
    stayType: "Commercial & Business",
    comment: "Conveniently located along Canal Block Shadman on Sargodha Road. The mall is clean, spacious, guarded 24/7, and the food court offers fantastic lunch meetings. Essential landmark for anyone in Faisalabad.",
    verified: true,
    platform: "Trustpilot"
  },
  {
    id: "rev-6",
    name: "Zainab Malik",
    role: "Interior Architect",
    location: "Lahore",
    rating: 5,
    date: "October 2026",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    stayType: "Architecture & Design",
    comment: "The architecture of Pearl City Shopping Mall is impressive. The multi-tiered glass skylight atrium, clean travertine facade, and thoughtful retail layout make it stand out among shopping centers in Punjab.",
    verified: true,
    platform: "Google"
  }
];

export const FACILITIES: Facility[] = [
  {
    id: "dining",
    name: "Gourmet Food Court & Dining Terrace",
    shortDesc: "Over 20 national & continental fast food, grill barbecue, barista coffees and ice cream parlors.",
    icon: "Utensils",
    highlight: "Open 11:00 AM – 11:30 PM"
  },
  {
    id: "supermarket",
    name: "Al-Rizq Mega Supermarket & Grocery",
    shortDesc: "Complete one-stop hypermarket with imported gourmet items, bakery, and farm fresh vegetables.",
    icon: "BellRing",
    highlight: "Daily 10:00 AM – 11:30 PM"
  },
  {
    id: "boutiques",
    name: "Designer Lawn & Couture Fashion Wing",
    shortDesc: "Pakistan's top fashion houses (Sapphire, Khaadi, Asim Jofa) and bespoke bridal wear studios.",
    icon: "Briefcase",
    highlight: "50+ Fashion Outlets"
  },
  {
    id: "wifi",
    name: "High-Speed Free Mall Wi-Fi",
    shortDesc: "Seamless optical fiber Wi-Fi throughout all shopping levels, atrium, and food court.",
    icon: "Wifi",
    highlight: "Complimentary for Visitors"
  },
  {
    id: "parking",
    name: "3-Level Monitored Parking & Valet",
    shortDesc: "24/7 CCTV surveillance, guarded perimeter, and spacious bays for 500+ vehicles on Sargodha Road.",
    icon: "ShieldCheck",
    highlight: "500+ Car Capacity"
  },
  {
    id: "concierge",
    name: "Customer Care & Information Desk",
    shortDesc: "Store directory guides, lost & found, wheelchair assistance, and WhatsApp shopping inquiries.",
    icon: "Compass",
    highlight: "Ground Floor Atrium"
  }
];

export const FAQS = [
  {
    q: "What are the opening and closing timings for Pearl City Shopping Mall?",
    a: "Pearl City Shopping Mall is open daily from 10:00 AM to 11:30 PM. The Food Court and Al-Rizq Supermarket operate during the same convenient hours, 7 days a week."
  },
  {
    q: "Where is Pearl City Shopping Mall located in Faisalabad?",
    a: "We are situated directly on Main Sargodha Rd, Canal Block Shadman, Faisalabad, Pakistan (near the Sui Gas Head Office and Shadman Canal Bridge). We are approximately 12 minutes from the Clock Tower (Ghanta Ghar) and 25 minutes from LYP Airport."
  },
  {
    q: "Which top brands and stores are located inside Pearl City Mall?",
    a: "Pearl City Mall houses leading Pakistani fashion and lawn labels (including Sapphire, Khaadi, Asim Jofa), Al-Rizq Mega Supermarket, flagship smartphone and electronics showrooms, a multi-brand food court, and fine jewelry studios."
  },
  {
    q: "Is parking available at Pearl City Mall?",
    a: "Yes! Pearl City Mall features extensive 3-level secure monitored parking accommodating 500+ vehicles with 24/7 security guards and complimentary valet service at the main Sargodha Road entrance."
  },
  {
    q: "How can I contact customer care or inquire about shop leasing / promotions?",
    a: "You can reach our management and customer care directly via WhatsApp at 03216561717 (+92 321 6561717) or call 0321 6561717 for instant store inquiries, vouchers, and event info."
  },
  {
    q: "Are credit cards, debit cards, and digital wallets accepted?",
    a: "Yes, all retail outlets, supermarkets, and restaurants accept Visa, MasterCard, UnionPay, PayPak, JazzCash, EasyPaisa, Raast, and cash."
  }
];
