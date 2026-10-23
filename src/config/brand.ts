import type { Destination, Experience, TourPackage, FAQItem, InstagramPost } from '../types';

export const BRAND = {
  name: 'CARLOZ | TRAVEL HUB',
  shortName: 'CARLOZ',
  tagline: 'Led by Faith. Driven by Adventure.',
  location: 'Wayanad, Kerala, India',
  district: 'Wayanad',
  state: 'Kerala',
  country: 'India',
  
  // Official WhatsApp Contacts (Verified)
  contacts: {
    primary: {
      number: '6238813608',
      international: '+91 6238813608',
      display: '+91 62388 13608',
      label: 'Main Travel Desk',
      waLink: 'https://wa.me/916238813608'
    },
    secondary: {
      number: '8157845547',
      international: '+91 8157845547',
      display: '+91 81578 45547',
      label: 'Tour Coordinator',
      waLink: 'https://wa.me/918157845547'
    }
  },

  social: {
    instagram: 'https://instagram.com/carloz_travel_hub',
    instagramHandle: '@carloz_travel_hub'
  },

  about: {
    headline: 'Some Roads Lead You Somewhere Extraordinary.',
    subheadline: 'Discover the wild beauty of Wayanad, one unforgettable journey at a time.',
    story: 'Born from a deep love for the misty ghat roads, winding mountain passes, and hidden trails of the Western Ghats, CARLOZ | TRAVEL HUB is your dedicated road-trip and tour partner in Wayanad. We craft authentic, soulful travel experiences with our signature customized travel vehicle—giving you the freedom to pause at misty viewpoints, listen to mountain rain, and share laughter with your favorite people.',
    pillValues: [
      'Authentic Western Ghats Routes',
      'Dedicated Custom Van Travel',
      'Flexible Road-Trip Pacing',
      'Local Wayanad Born Insights',
      'Direct WhatsApp Booking'
    ]
  }
};

export const DESTINATIONS: Destination[] = [
  {
    id: 'banasura-sagar',
    name: 'Banasura Sagar Dam',
    malayalamName: 'ബാണാസുര സാഗർ',
    tagline: "India's largest earthen dam nestled among emerald island peaks",
    category: 'lake',
    image: '/images/banasura_sagar_dam.jpg',
    description: 'Set amidst the mist-crowned Banasura hills, this magnificent reservoir features clusters of emerald green islands that float on crystal-blue waters during monsoon and winter. Experience speedboating, scenic walking trails, and breathtaking sunset panoramas.',
    highlights: ['Speedboat & Coracle rides', 'Island viewpoints', 'Trek to Banasura Peak', 'Zip-lining & Adventure Park'],
    bestTime: 'September to March (Lush post-monsoon greenery)',
    altitude: '2,050 meters above sea level',
    idealDuration: '3 to 4 hours',
    location: 'Padinjarathara, Wayanad'
  },
  {
    id: 'chembra-peak',
    name: 'Chembra Peak & Heart Lake',
    malayalamName: 'ചെമ്പ്ര പീക്ക്',
    tagline: 'The iconic heart-shaped mountain lake shrouded in alpine clouds',
    category: 'mountain',
    image: '/images/chembra_peak_view.jpg',
    description: 'The highest peak in Wayanad, standing at 2,100 meters above sea level. Trek through lush green tea estates and misty alpine grasslands until you reach the mystical "Hridaya Saras" (Heart-Shaped Lake), which is believed to never dry up.',
    highlights: ['Heart-shaped alpine lake', 'Cloud-bed ridge walking', 'Panoramic view of Wayanad valleys', 'Tea garden trekking paths'],
    bestTime: 'October to May',
    altitude: '2,100 meters (Highest in Wayanad)',
    idealDuration: 'Half Day (4 to 5 hours trek)',
    location: 'Meppadi, Wayanad'
  },
  {
    id: 'soochipara-falls',
    name: 'Soochipara Waterfalls',
    malayalamName: 'സൂചിപ്പാറ വെള്ളച്ചാട്ടം',
    tagline: 'Three-tiered roaring cascade crashing through rainforest boulders',
    category: 'waterfall',
    image: '/images/soochipara_waterfall.jpg',
    description: 'Also known as Sentinel Rock Waterfalls, this thunderous 200-meter drop crashes into a natural rock pool enclosed by dense evergreen rainforest and towering cliff faces. The walk down through tea gardens and bamboo groves is pure wilderness poetry.',
    highlights: ['3-tier mountain cascade', 'Natural rock pool soaking', 'Bamboo forest walk', 'Rock climbing cliffs'],
    bestTime: 'June to January (High water volume)',
    altitude: '800 meters',
    idealDuration: '2 to 3 hours',
    location: 'Vellarimala, Meppadi'
  },
  {
    id: 'edakkal-caves',
    name: 'Edakkal Caves',
    malayalamName: 'എടക്കൽ ഗുഹകൾ',
    tagline: 'Ancient Neolithic rock etchings inside a massive split boulder',
    category: 'heritage',
    image: '/images/edakkal_caves_ancient.jpg',
    description: 'Perched high on Ambukuthi Mala, Edakkal Caves are not ordinary caves but a dramatic cleft caused by a massive boulder wedged between two mountains. Inside are prehistoric petroglyphs and drawings dating back over 6,000 years to the Neolithic era.',
    highlights: ['Prehistoric 6,000-year rock art', 'Ambukuthi Mala mountain hike', '3-state junction viewpoint', 'Ancient trade route history'],
    bestTime: 'September to April',
    altitude: '1,200 meters',
    idealDuration: '2.5 to 3.5 hours',
    location: 'Ambalavayal, Wayanad'
  },
  {
    id: 'kuruva-island',
    name: 'Kuruvadweep (Kuruva Island)',
    malayalamName: 'കുറുവ ദ്വീപ്',
    tagline: 'Serene bamboo rafting through a protected river delta canopy',
    category: 'lake',
    image: '/images/bamboo_raft_kuruva.jpg',
    description: 'A 950-acre protected river island delta formed by tributaries of the Kabini River. Glide on handcrafted rustic bamboo rafts through silent green waterways shaded by arching bamboo tunnels and dense tropical teak forests.',
    highlights: ['Traditional bamboo rafting', 'Evergreen flora & rare orchids', 'Freshwater walking streams', 'Silent forest bathing'],
    bestTime: 'October to May (Closed during heavy monsoon)',
    altitude: '750 meters',
    idealDuration: '3 to 4 hours',
    location: 'Mananthavady, Wayanad'
  },
  {
    id: 'lakkidi-viewpoint',
    name: 'Lakkidi View Point & Thamarassery Churam',
    malayalamName: 'ലക്കിടി വ്യൂപോയിന്റ്',
    tagline: 'Gateway to Wayanad with 9 legendary hair-raising mountain curves',
    category: 'viewpoint',
    image: '/images/wayanad_sunset_view.jpg',
    description: 'Known as the Gateway to Wayanad and one of the highest points in the district. Standing here at sunset, you gaze down upon the iconic 9 hairpin bends of Thamarassery Churam carving through mist-filled emerald gorges towards the Arabian Sea coast.',
    highlights: ['9 hairpin ghat road panorama', 'Dramatic sunset cloud sea', 'Cool mountain breeze', 'Chain tree folklore spot'],
    bestTime: 'All year round (Sunset & early morning mist)',
    altitude: '700 meters',
    idealDuration: '1 to 2 hours',
    location: 'Vythiri, Wayanad'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'scenic-roadtrips',
    title: 'Ghat Road Trips & Churam Drives',
    tag: 'Signature Journey',
    description: 'Wind through the historic 9 hairpin bends, misty high-altitude passes, and bamboo-fringed jungle corridors in our custom travel van with your curated road soundtrack.',
    image: '/images/hero_wayanad_van.jpg',
    vibe: 'Moody, Cinematic & Adventurous',
    bestFor: 'Friends, Solo Travellers & Driving Enthusiasts',
    features: ['Curated pitstops at scenic curves', 'Local tea stall chai & pazham pori', 'Flexible photo breaks anytime']
  },
  {
    id: 'tea-plantation-escapes',
    title: 'Emerald Tea Valley Trails',
    tag: 'Sensory & Refreshing',
    description: 'Wake up to cool mountain air and golden morning sun filtering through endless rolling tea estates in Meppadi and Vythiri. Walk through aromatic plantations and listen to the birds.',
    image: '/images/tea_plantation_mist.jpg',
    vibe: 'Peaceful, Rejuvenating & Crisp',
    bestFor: 'Couples, Families & Nature Photographers',
    features: ['Early morning misty estate walks', 'Tea tasting & factory visits', 'Private viewpoint access']
  },
  {
    id: 'friends-gang-trips',
    title: 'College Gang & Group Expeditions',
    tag: 'High Energy & Fun',
    description: 'Traveling with your crew? Skip the hassle of driving multiple cars. Hop into the CARLOZ vehicle together for spontaneous music, cliffside viewpoints, campfire evenings, and memories that stick.',
    image: '/images/friends_roadtrip_kerala.jpg',
    vibe: 'Lively, Carefree & Unfiltered',
    bestFor: 'College Batches, Tech Teams & Close Friends',
    features: ['Dedicated spacious group vehicle', 'Customizable flexible itinerary', 'Campfire & tent setup assistance']
  },
  {
    id: 'waterfall-river-adventures',
    title: 'Hidden Waterfalls & Jungle Rivers',
    tag: 'Wild & Untamed',
    description: 'Trek through pristine rainforest trails to discover roaring cascades, natural rock pools, and traditional bamboo raft glides across the Kabini river tributaries.',
    image: '/images/bamboo_raft_kuruva.jpg',
    vibe: 'Untamed, Refreshing & Immersive',
    bestFor: 'Adventure Seekers & Water Lovers',
    features: ['Bamboo raft river safaris', 'Natural forest pool swims', 'Local guide coordination']
  }
];

export const PACKAGES: TourPackage[] = [
  {
    id: 'wayanad-weekend-odyssey',
    title: 'The Wayanad Weekend Odyssey',
    subtitle: 'Classic 2-Day Western Ghats Discovery',
    tag: 'Most Popular',
    isPopular: true,
    duration: '2 Days / 1 Night',
    route: 'Lakkidi → Pookode Lake → Chembra Foothills → Banasura Dam → Tea Estates',
    priceNote: 'Custom quote based on group size',
    badge: 'Best for Weekends',
    image: '/images/tea_plantation_mist.jpg',
    inclusions: [
      'Dedicated CARLOZ travel vehicle with experienced driver',
      'All fuel, toll charges, and hill road driver allowances',
      'Flexible sightseeing stops & sunrise/sunset timing',
      'Sightseeing itinerary planning & local assistance'
    ],
    highlights: [
      'Thamarassery Churam 9 Hairpin drive',
      'Sunset boating at Banasura Sagar',
      'Meppadi emerald tea trails',
      'Spontaneous road-trip chai stops'
    ],
    idealFor: 'Couples, Working Professionals & Friends looking for a rejuvenating weekend reset'
  },
  {
    id: 'gangs-of-wayanad',
    title: "Gangs of Wayanad: The Ultimate Friends Road Trip",
    subtitle: 'High-Energy Adventure & Campfire Tour',
    tag: 'Group Favorite',
    duration: '3 Days / 2 Nights',
    route: 'Churam Ascent → Soochipara Trek → Banasura Waters → Kuruvadweep Rafting → Camp Night',
    priceNote: 'Direct group quote via WhatsApp',
    badge: 'Adventure Special',
    image: '/images/friends_roadtrip_kerala.jpg',
    inclusions: [
      'Full CARLOZ travel van reserved exclusively for your gang',
      'Bluetooth audio & personalized road-trip playlist vibes',
      'Assistance with tent camping / nature homestay bookings',
      'Driver with expert local mountain navigation skills'
    ],
    highlights: [
      'Private vehicle for the entire friend circle',
      'Soochipara waterfall rock pool dip',
      'Kuruvadweep river bamboo rafting',
      'Starry night bonfire & Kerala barbecue options'
    ],
    idealFor: 'College batches, alumni reunions, and close friend circles (5–12 travellers)'
  },
  {
    id: 'cloud-and-heritage-expedition',
    title: 'Clouds & Prehistoric Trails',
    subtitle: 'Deep Cultural & Mountain Exploration',
    tag: 'Heritage & Nature',
    duration: '3 Days / 2 Nights',
    route: 'Edakkal Caves → Chembra Ridge → Phantom Rock → Muthanga Forest Edge → Kuruva Delta',
    priceNote: 'Tailored pricing on enquiry',
    badge: 'Deep Explorer',
    image: '/images/edakkal_caves_ancient.jpg',
    inclusions: [
      'Comfortable point-to-point tour transport',
      'Local guidance on forest department permissions & tickets',
      'Pick up and drop from Calicut Railway / Kozhikode Airport / Mysore / Wayanad',
      'Driver night charges & parking permits included'
    ],
    highlights: [
      'Neolithic carvings at Edakkal Caves',
      'Chembra Peak high-altitude grasslands',
      'Bamboo rafting through pristine river islands',
      'Local Malabar & Wayanad cuisine food trail'
    ],
    idealFor: 'Curious explorers, families, and nature enthusiasts seeking authentic stories'
  },
  {
    id: 'custom-road-trip',
    title: 'Customized Private Wayanad Tour',
    subtitle: 'You Choose the Pace, We Drive the Dream',
    tag: '100% Flexible',
    duration: 'Custom (1 to 5+ Days)',
    route: 'Tailored specifically around your arrival station, budget, and wishlist',
    priceNote: 'Direct quotation on WhatsApp',
    badge: 'Fully Bespoke',
    image: '/images/van_roadtrip_vibe.jpg',
    inclusions: [
      'Exclusive CARLOZ vehicle at your full disposal',
      'Flexible start times, custom pickup & drop points',
      'Itinerary customization with local insider advice',
      'Transparent vehicle rates with no hidden surprises'
    ],
    highlights: [
      'Zero rigid schedules—spend as long as you want at spots you love',
      'Pick up from Calicut, Kannur, Bengaluru, or Mysore',
      'Family-friendly comfort and safe, courteous driving',
      'Direct WhatsApp communication throughout your journey'
    ],
    idealFor: 'Families with kids or elders, photography tours, honeymooners, and bespoke retreats'
  }
];

export const VEHICLE_DETAILS = {
  title: 'The Journey Is Just as Beautiful as the Destination.',
  subtitle: 'Travel Wayanad in the unmistakable CARLOZ tour van—built for mountain roads, comfortable group vibes, and effortless sightseeing.',
  features: [
    {
      title: 'Built for Western Ghats Roads',
      description: 'Navigating Thamarassery Churam and narrow estate trails requires experience. Our vehicle and drivers are seasoned on these terrain.'
    },
    {
      title: 'Comfortable Group Seating',
      description: 'Generous legroom and cushioned seating so your group can travel together without being cramped or separated.'
    },
    {
      title: 'Rooftop Carrier & Ample Boot',
      description: 'Spacious luggage rack and boot capacity for backpacks, camping gear, and travel bags.'
    },
    {
      title: 'Road Trip Sound & Atmosphere',
      description: 'Hook up your phone, queue up Malayalam melodies or indie rock, roll down the windows, and let the mountain breeze in.'
    }
  ]
};

export const CHURAM_STORY_STEPS = [
  {
    step: '01',
    name: 'Thamarassery Churam Ascent',
    desc: 'The journey begins at Adivaram as our van tackles the 9 legendary hairpin bends, climbing 700 meters through deep mist and canopy.',
    highlight: 'Hairpin Bends 1 to 9'
  },
  {
    step: '02',
    name: 'The Gateway at Lakkidi',
    desc: 'Cool mountain air hits you instantly. Passing the historic Chain Tree, the valley below is swallowed in a rolling ocean of white clouds.',
    highlight: '700m Altitude Gate'
  },
  {
    step: '03',
    name: 'Emerald Heartlands of Vythiri & Meppadi',
    desc: 'Winding alongside endless emerald tea carpets, waterfalls crashing on roadside cliffs, and fresh cardamom-scented breezes.',
    highlight: 'Tea Valleys & Streams'
  },
  {
    step: '04',
    name: 'Banasura Waters & Wild Peaks',
    desc: 'Reaching the vast blue expanse of Banasura Sagar Dam and Chembra Peak where every turn feels like a scene straight out of cinema.',
    highlight: 'The Wild Horizon'
  }
];

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'post-1',
    title: 'Churam 9 Hairpins at Sunrise',
    caption: 'Nothing compares to sunrise climbing the 9th hairpin bend with mist flowing across the windscreen. 🚐⛰️ #CarlozTravelHub #Wayanad',
    image: '/images/wayanad_sunset_view.jpg',
    likes: '1.4k',
    location: 'Lakkidi View Point',
    type: 'reel',
    tag: '#RoadTripVibes'
  },
  {
    id: 'post-2',
    title: 'The CARLOZ Van Parked at Overlook',
    caption: 'Cozy lights, fresh mountain breeze, and endless hills. When your ride is part of the destination. ✨☕ #VanLifeKerala',
    image: '/images/van_roadtrip_vibe.jpg',
    likes: '2.1k',
    location: 'Meppadi Hills',
    type: 'photo',
    tag: '#CarlozVan'
  },
  {
    id: 'post-3',
    title: 'Chasing Waterfalls with the Gang',
    caption: 'Spontaneous stops, freezing forest water, and unstoppable laughter with the crew. Book your gang tour with us! 🌊🍃',
    image: '/images/friends_roadtrip_kerala.jpg',
    likes: '1.8k',
    location: 'Soochipara Falls',
    type: 'reel',
    tag: '#FriendsTrip'
  },
  {
    id: 'post-4',
    title: 'Silent Waters of Kuruvadweep',
    caption: 'Gliding along the Kabini river delta on rustic bamboo rafts. Nature in its purest, most tranquil rhythm. 🛶🌿',
    image: '/images/bamboo_raft_kuruva.jpg',
    likes: '960',
    location: 'Kuruva Island',
    type: 'photo',
    tag: '#KeralaDiaries'
  },
  {
    id: 'post-5',
    title: 'Heart of the Western Ghats',
    caption: 'Standing beside the heart-shaped lake on Chembra Peak. A trek every traveler must make at least once. 💚⛰️',
    image: '/images/chembra_peak_view.jpg',
    likes: '3.2k',
    location: 'Chembra Peak',
    type: 'reel',
    tag: '#ChembraTrek'
  },
  {
    id: 'post-6',
    title: 'Twilight Roads & Coffee Aromas',
    caption: 'When evening falls over the tea valleys and the mountain lights flicker on. Your next story starts on the road. 🌌',
    image: '/images/final_cta_road.jpg',
    likes: '1.7k',
    location: 'Vythiri Rainforest',
    type: 'photo',
    tag: '#WayanadNights'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'booking',
    question: 'How do I book a tour or travel vehicle with CARLOZ?',
    answer: 'Booking is quick and simple directly via WhatsApp! You can use our interactive "Plan Your Trip" tool on this website to select your dates, group size, and preferred destinations. Clicking submit generates a prefilled message directly to either of our official WhatsApp numbers (+91 6238813608 or +91 8157845547). We discuss your schedule, customize the itinerary, confirm vehicle availability, and lock in your dates.'
  },
  {
    id: 'faq-2',
    category: 'customization',
    question: 'Can I customize our itinerary or choose our own destinations?',
    answer: 'Absolutely! That is the core specialty of CARLOZ | TRAVEL HUB. We do not force rigid fixed tour schedules. Whether you want to spend extra hours relaxing at Banasura Lake, take an early morning tea garden trek, or explore offbeat waterfall trails, we customize the route around your exact preferences, travel pace, and budget.'
  },
  {
    id: 'faq-3',
    category: 'vehicle',
    question: 'What kind of vehicle is provided and what is the group capacity?',
    answer: 'We operate our signature branded CARLOZ travel vehicle, purpose-built and maintained for the steep hairpin bends and mountain terrain of Wayanad and the Western Ghats. It comfortably accommodates friends groups, families, and college batches with ample luggage capacity. For exact group sizes and seating configurations, drop us a quick WhatsApp ping!'
  },
  {
    id: 'faq-4',
    category: 'booking',
    question: 'Do you arrange pickups from Calicut (Kozhikode), Mysore, or Bangalore?',
    answer: 'Yes! We provide seamless pickups and drops from Calicut Railway Station (CLT), Calicut International Airport (CCJ), Kannur Airport (CNN), as well as Mysore and Bangalore by prior arrangement. We can pick your group up from the station/airport and head straight into the scenic Thamarassery Churam ascent.'
  },
  {
    id: 'faq-5',
    category: 'safety',
    question: 'When is the best season to visit Wayanad?',
    answer: 'Wayanad is beautiful throughout the year! October to March offers crisp, cool mountain mornings, mist, and pleasant sunshine—ideal for trekking and sightseeing. June to September is the famous Kerala Monsoon season, when the hills turn neon emerald, waterfalls roar at full volume, and clouds drift across the roads. Summer (April to May) is cool compared to the plains.'
  },
  {
    id: 'faq-6',
    category: 'booking',
    question: 'What information should I share for a fast quotation?',
    answer: 'To get an instant and accurate quote, simply tell us: (1) Your planned travel dates and number of days, (2) Approximate number of persons in your group, (3) Preferred pickup and drop location (e.g., Calicut station or within Wayanad), and (4) Any specific spots you definitely want to visit. Send this via our WhatsApp button and we reply promptly!'
  }
];

/**
 * Generates an official WhatsApp enquiry URL with a prefilled, formatted message.
 */
export function buildWhatsAppUrl(contactNumber: '6238813608' | '8157845547', data?: Partial<{
  name: string;
  phone: string;
  tripType: string;
  travellerCount: string;
  duration: string;
  travelDate: string;
  destinations: string[];
  specialRequests: string;
  packageName?: string;
}>): string {
  const number = contactNumber === '8157845547' ? '918157845547' : '916238813608';
  
  if (!data || Object.keys(data).length === 0) {
    const text = encodeURIComponent(
      `Hello CARLOZ | TRAVEL HUB! 🚐⛰️\n\nI am interested in planning a Wayanad trip with you. Could you please share available packages and travel vehicle details?`
    );
    return `https://wa.me/${number}?text=${text}`;
  }

  let message = `*NEW TRIP ENQUIRY — CARLOZ | TRAVEL HUB* 🚐🌿\n`;
  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  if (data.name) message += `👤 *Name:* ${data.name}\n`;
  if (data.phone) message += `📞 *Phone/WhatsApp:* ${data.phone}\n`;
  if (data.packageName) message += `📦 *Package:* ${data.packageName}\n`;
  if (data.tripType) message += `🧭 *Trip Type:* ${data.tripType}\n`;
  if (data.travellerCount) message += `👥 *Travellers:* ${data.travellerCount} Persons\n`;
  if (data.duration) message += `⏳ *Duration:* ${data.duration}\n`;
  if (data.travelDate) message += `📅 *Travel Date/Timeframe:* ${data.travelDate}\n`;
  if (data.destinations && data.destinations.length > 0) {
    message += `📍 *Places of Interest:* ${data.destinations.join(', ')}\n`;
  }
  if (data.specialRequests) {
    message += `📝 *Notes/Requirements:* ${data.specialRequests}\n`;
  }
  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `_Sent via carloz-travelhub website. Please share availability & quotation._`;

  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
