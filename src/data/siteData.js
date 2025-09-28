import nepal1 from '../../public/images/tours/nepal1.jpeg';
import nepal2 from '../../public/images/tours/nepal2.jpeg';
import norway1 from '../../public/images/tours/norway1.jpeg';
import norway2 from '../../public/images/tours/norway2.jpeg';
import norway3 from '../../public/images/tours/norway3.jpeg';
import patagonia1 from '../../public/images/tours/patagonia1.jpeg';
import patagonia2 from '../../public/images/tours/patagonia2.jpeg';
import greek1 from '../../public/images/tours/greek1.jpeg';
import greek2 from '../../public/images/tours/greek2.jpeg';
import india1 from '../../public/images/tours/india1.jpeg';
import india2 from '../../public/images/tours/india2.jpeg';
// Enhanced Theme with modern palette
export const THEME = {
  primary: '#0077B6',     // Rich Dark Navy
  secondary: '#90E0EF',   // Vibrant Blue
  accent: '#FFD166',      // Golden Amber
  success: '#10B981',     // Emerald Green
  gradient: '#0077B6',
  surface: '#FFFFFF',
  background: '#FAFAFA',
  text: '#333333',
  textLight: '#64748B',
  glass: 'rgba(255, 255, 255, 0.1)',
};

export const Slider = [
  {
    id: 't1',
    title: 'Himalayan Odyssey ffsdf',
    subtitle: 'Sacred peaks, ancient monasteries & mountain villages',
    description: 'Experience the mystical beauty of the Himalayas with expert local guides, comfortable accommodations, and carefully planned itineraries.',
    priceFrom: '$2,499',
    originalPrice: '$2,999',
    duration: '12 Days',
    difficulty: 'Moderate',
    groupSize: '8-12 people',
    img: '/images/hero/hero1.jpeg',
    gallery: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    highlights: ['Sacred Monasteries', 'Mountain Villages', 'Expert Guides', 'Cultural Immersion'],
    days: 8,
    reviews: 127,
    bestTime: 'Oct-Nov, Mar-May',
    included: ['Accommodation', 'All Meals', 'Local Guide', 'Transportation', 'Permits']
  },
  {
    id: 't2',
    title: 'Aurora Borealis Quest',
    subtitle: 'Northern lights, ice hotels & Arctic adventures',
    description: 'Chase the magical Aurora Borealis across pristine Arctic landscapes with professional photography guidance and luxury accommodations.',
    priceFrom: '$3,299',
    originalPrice: '$3,799',
    duration: '8 Days',
    difficulty: 'Easy',
    groupSize: '6-10 people',
    img: '/images/hero/hero2.jpeg',
    gallery: [
      'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    highlights: ['Aurora Photography', 'Ice Hotel Stay', 'Husky Sledding', 'Arctic Cuisine'],
    days: 10,
    reviews: 89,
    bestTime: 'Nov-Mar',
    included: ['Luxury Accommodation', 'Photography Guide', 'Winter Gear', 'All Activities', 'Airport Transfers']
  },
  {
    id: 't3',
    title: 'Mediterranean Soul',
    subtitle: 'Greek islands, Turkish coasts & Italian charm',
    description: 'Sail through crystal-clear waters, explore ancient ruins, and savor authentic Mediterranean cuisine on this luxury yacht adventure.',
    priceFrom: '$4,199',
    originalPrice: '$4,999',
    duration: '15 Days',
    difficulty: 'Easy',
    groupSize: '10-16 people',
    img: '/images/hero/hero3.jpeg',
    gallery: [
      'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    highlights: ['Luxury Yacht', 'Private Beaches', 'Wine Tastings', 'Historical Sites'],
    days: 5,
    reviews: 156,
    bestTime: 'May-Sep',
    included: ['Luxury Yacht', 'Private Chef', 'All Excursions', 'Wine Tastings', 'Cultural Guide']
  }
];

// Enhanced sample data with more details
export const TOURS = [
  {
    id: 't1',
    title: 'Norwegian Coastal Escape',
    subtitle: 'Fjords, midnight sun & serene villages',
    description: 'Discover the stunning Norwegian coastline with breathtaking fjords, charming villages, and the magical midnight sun, all with expert local guides.',
    priceFrom: '$2,699',
    originalPrice: '$3,199',
    duration: '10 Days',
    difficulty: 'Moderate',
    groupSize: '8-12 people',
    img: norway1,
    gallery: [
      norway1,
      norway1
    ],
    highlights: ['Fjords Exploration', 'Midnight Sun', 'Local Cuisine', 'Scenic Drives'],
    days: 10,
    reviews: 145,
    bestTime: 'Jun-Aug',
    included: ['Accommodation', 'All Meals', 'Local Guide', 'Transportation', 'Permits'],
    destinationId: 'd2',
  },
  {
    id: 't2',
    title: 'Aurora Borealis Quest',
    subtitle: 'Northern lights, ice hotels & Arctic adventures',
    description: 'Chase the magical Aurora Borealis across pristine Arctic landscapes with professional photography guidance and luxury accommodations.',
    priceFrom: '$3,299',
    originalPrice: '$3,799',
    duration: '8 Days',
    difficulty: 'Easy',
    groupSize: '6-10 people',
    img: norway2,
    gallery: [
      norway2,
      norway2
    ],
    highlights: ['Aurora Photography', 'Ice Hotel Stay', 'Husky Sledding', 'Arctic Cuisine'],
    days: 10,
    reviews: 89,
    bestTime: 'Nov-Mar',
    included: ['Luxury Accommodation', 'Photography Guide', 'Winter Gear', 'All Activities', 'Airport Transfers'],
    destinationId: 'd2',
  },
  {
    id: 't3',
    title: 'Cultural Heritage Journey',
    subtitle: 'Traditional villages, waterfalls & ethnic experiences',
    description: 'Immerse yourself in rich cultural heritage with visits to traditional villages, stunning waterfalls, and vibrant ethnic celebrations.',
    priceFrom: '$1,899',
    originalPrice: '$2,299',
    duration: '7 Days',
    difficulty: 'Easy',
    groupSize: '10-15 people',
    img: india1,
    gallery: [
      india1,
      india1
    ],
    highlights: ['Traditional Villages', 'Waterfall Views', 'Cultural Festivals', 'Local Crafts'],
    days: 7,
    reviews: 112,
    bestTime: 'Apr-Jun, Sep-Oct',
    included: ['Accommodation', 'Local Guide', 'Cultural Activities', 'Transportation'],
    destinationId: 'd5',
  },
  {
    id: 't4',
    title: 'Golden Temple Serenity',
    subtitle: 'Spiritual retreat & architectural marvels',
    description: 'Experience a peaceful spiritual retreat at the Golden Temple, surrounded by serene waters and intricate architecture.',
    priceFrom: '$1,499',
    originalPrice: '$1,799',
    duration: '5 Days',
    difficulty: 'Easy',
    groupSize: '6-10 people',
    img: india2,
    gallery: [
      india2,
      india2
    ],
    highlights: ['Golden Temple', 'Spiritual Reflection', 'Local Cuisine', 'Historical Sites'],
    days: 5,
    reviews: 98,
    bestTime: 'Oct-Mar',
    included: ['Accommodation', 'All Meals', 'Local Guide', 'Transportation'],
    destinationId: 'd5',
  },
  {
    id: 't6',
    title: 'Milos Island Getaway',
    subtitle: 'Crystal waters, white cliffs & quaint villages',
    description: 'Relax on the pristine beaches of Milos, explore dramatic white cliffs, and enjoy the charm of quaint island villages.',
    priceFrom: '$2,999',
    originalPrice: '$3,499',
    duration: '9 Days',
    difficulty: 'Easy',
    groupSize: '6-10 people',
    img: greek1,
    gallery: [
      greek1,
      greek1
    ],
    highlights: ['Crystal Waters', 'White Cliffs', 'Boat Tours', 'Local Seafood'],
    days: 9,
    reviews: 76,
    bestTime: 'May-Sep',
    included: ['Accommodation', 'Boat Tours', 'Local Guide', 'Meals'],
    destinationId: 'd3',
  },
  {
    id: 't7',
    title: 'Santorini Stroll',
    subtitle: 'Whitewashed streets, blue domes & sunset views',
    description: 'Wander through the picturesque whitewashed streets of Santorini, admire blue-domed churches, and witness stunning sunsets.',
    priceFrom: '$2,799',
    originalPrice: '$3,299',
    duration: '7 Days',
    difficulty: 'Easy',
    groupSize: '8-12 people',
    img: greek2,
    gallery: [
      greek2,
      greek2
    ],
    highlights: ['Whitewashed Streets', 'Blue Domes', 'Sunset Views', 'Wine Tasting'],
    days: 7,
    reviews: 105,
    bestTime: 'May-Sep',
    included: ['Accommodation', 'Wine Tasting', 'Local Guide', 'Transportation'],
    destinationId: 'd3',
  },
  {
    id: 't8',
    title: 'Norwegian Fjord Adventure',
    subtitle: 'Waterfalls, mountain roads & scenic vistas',
    description: 'Embark on a thrilling adventure through Norwegian fjords, featuring majestic waterfalls, winding mountain roads, and breathtaking vistas.',
    priceFrom: '$3,499',
    originalPrice: '$3,999',
    duration: '11 Days',
    difficulty: 'Moderate',
    groupSize: '8-12 people',
    img: norway3,
    gallery: [
      norway3,
      norway3
    ],
    highlights: ['Waterfalls', 'Mountain Roads', 'Scenic Views', 'Hiking'],
    days: 11,
    reviews: 120,
    bestTime: 'Jun-Aug',
    included: ['Accommodation', 'All Meals', 'Local Guide', 'Transportation', 'Hiking Gear'],
    destinationId: 'd2',
  },{
    id: 't10',
    title: 'Swayambhunath Spiritual Journey',
    subtitle: 'Ancient stupas, prayer flags & monkey temple',
    description: 'Embark on a spiritual journey to the iconic Swayambhunath Stupa, surrounded by prayer flags and the lively monkey temple.',
    priceFrom: '$1,599',
    originalPrice: '$1,999',
    duration: '5 Days',
    difficulty: 'Easy',
    groupSize: '6-10 people',
    img: nepal1,
    gallery: [
      nepal1,
      nepal1
    ],
    highlights: ['Swayambhunath Stupa', 'Prayer Flags', 'Monkey Temple', 'Buddhist Culture'],
    days: 5,
    reviews: 95,
    bestTime: 'Oct-Nov, Mar-May',
    included: ['Accommodation', 'Local Guide', 'Cultural Tours', 'Transportation'],
    destinationId: 'd1',
  },
  {
    id: 't11',
    title: 'Annapurna Trekking Adventure',
    subtitle: 'Himalayan trails, suspension bridges & Sherpa villages',
    description: 'Trek through the majestic Annapurna region, crossing suspension bridges and experiencing the warmth of Sherpa villages.',
    priceFrom: '$2,899',
    originalPrice: '$3,399',
    duration: '12 Days',
    difficulty: 'Moderate',
    groupSize: '8-12 people',
    img: nepal2,
    gallery: [
      nepal2,
      nepal2
    ],
    highlights: ['Annapurna Range', 'Suspension Bridges', 'Sherpa Hospitality', 'Hiking'],
    days: 12,
    reviews: 130,
    bestTime: 'Oct-Nov, Mar-May',
    included: ['Accommodation', 'All Meals', 'Local Guide', 'Trekking Gear', 'Permits'],
    destinationId: 'd1',
  },
  {
    id: 't12',
    title: 'Patagonia Wilderness Trek',
    subtitle: 'Glaciers, rugged trails & pristine lakes',
    description: 'Explore the wild landscapes of Patagonia with treks to stunning glaciers, rugged trails, and crystal-clear lakes.',
    priceFrom: '$2,799',
    originalPrice: '$3,299',
    duration: '10 Days',
    difficulty: 'Moderate',
    groupSize: '8-12 people',
    img: patagonia1,
    gallery: [
      patagonia1,
      patagonia1
    ],
    highlights: ['Glacier Hikes', 'Rugged Trails', 'Pristine Lakes', 'Wildlife'],
    days: 10,
    reviews: 110,
    bestTime: 'Nov-Mar',
    included: ['Accommodation', 'All Meals', 'Local Guide', 'Trekking Gear', 'Transportation'],
    destinationId: 'd4',
  },
  {
    id: 't13',
    title: 'Torres del Paine Expedition',
    subtitle: 'Towering peaks, guanacos & scenic vistas',
    description: 'Embark on an expedition to Torres del Paine, encountering towering peaks, guanacos, and breathtaking scenic vistas.',
    priceFrom: '$3,199',
    originalPrice: '$3,799',
    duration: '12 Days',
    difficulty: 'Challenging',
    groupSize: '6-10 people',
    img: patagonia2,
    gallery: [
      patagonia2,
      patagonia2
    ],
    highlights: ['Torres del Paine', 'Guanaco Sightings', 'Scenic Vistas', 'Wild Camping'],
    days: 12,
    reviews: 95,
    bestTime: 'Nov-Mar',
    included: ['Accommodation', 'All Meals', 'Local Guide', 'Camping Gear', 'Permits'],
    destinationId: 'd4',
  }
];

export const DESTINATIONS = [
  {
    id: 'd1',
    name: 'Nepal Himalayas',
    country: 'Nepal',
    img: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Home to the world\'s highest peaks and ancient Buddhist culture.',
    toursCount: 8,
    bestTime: 'Oct-Nov, Mar-May',
    highlights: ['Mount Everest', 'Buddhist Monasteries', 'Sherpa Culture'],
  },
  {
    id: 'd2',
    name: 'Northern Norway',
    country: 'Norway',
    img: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Dramatic fjords, midnight sun, and the magical Northern Lights.',
    toursCount: 5,
    bestTime: 'Nov-Mar',
    highlights: ['Aurora Borealis', 'Fjords', 'Midnight Sun'],
  },
  {
    id: 'd3',
    name: 'Greek Islands',
    country: 'Greece',
    img: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Crystal-clear waters, white-washed villages, and ancient history.',
    toursCount: 12,
    bestTime: 'May-Sep',
    highlights: ['Ancient Ruins', 'Island Hopping', 'Mediterranean Cuisine'],
  },
  {
    id: 'd4',
    name: 'Patagonia',
    country: 'Chile & Argentina',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWw95fYCUDnMSatCtT7hZvxcazVjRaT7_-yg&s',
    description: 'Pristine wilderness, towering peaks, and endless adventure.',
    toursCount: 6,
    bestTime: 'Nov-Mar',
    highlights: ['Torres del Paine', 'Glaciers', 'Wildlife'],
  },
  {
    id: 'd5',
    name: 'India',
    country: 'India',
    img: 'https://plus.unsplash.com/premium_photo-1661919589683-f11880119fb7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWF8ZW58MHx8MHx8fDA%3D',
    description: 'Pristine wilderness, towering peaks, and endless adventure.',
    toursCount: 12,
    bestTime: 'Nov-Mar',
    highlights: ['India Gate', 'Taj Mahal'],
  },

  {
    id: 'd8',
    name: 'London',
    country: 'United Kingdom',
    img: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Iconic landmarks, world-class museums, and theatrical nights.',
    toursCount: 15,
    bestTime: 'May-Sep',
    highlights: ['Big Ben', 'British Museum', 'West End Shows'],
  },
  {
    id: 'd9',
    name: 'Greenland',
    country: 'Greenland',
    img: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Arctic wilderness, icebergs, and northern lights.',
    toursCount: 4,
    bestTime: 'Jun-Aug',
    highlights: ['Nuuk', 'Ice Fiords', 'Hiking Trails'],
  },
  {
    id: 'd10',
    name: 'Dolomites',
    country: 'Italy',
    img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Dramatic peaks, alpine lakes, and charming villages.',
    toursCount: 8,
    bestTime: 'Jun-Sep',
    highlights: ['Cortina d\'Ampezzo', 'Lake Braies', 'Via Ferrata'],
  },
  
  // {
  //   id: 'd12',
  //   name: 'Guatemala Highlands',
  //   country: 'Guatemala',
  //   img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  //   description: 'Volcanic landscapes, Mayan ruins, and colorful markets.',
  //   toursCount: 5,
  //   bestTime: 'Nov-Apr',
  //   highlights: ['Volcán de Fuego', 'Antigua', 'Lake Atitlán'],
  // },
  // {
  //   id: 'd13',
  //   name: 'Lithuania',
  //   country: 'Lithuania',
  //   img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  //   description: 'Baltic beaches, medieval castles, and green forests.',
  //   toursCount: 7,
  //   bestTime: 'Jun-Aug',
  //   highlights: ['Vilnius Old Town', 'Curonian Spit', 'Trakai Castle'],
  // },
 
];


// Social Media Posts Data
export const SOCIAL_POSTS = [
  {
    id: 1,
    platform: 'instagram',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    caption: 'Sunset vibes from the Maldives 🌅 Our travelers are living their best life! #OLA #Maldives #TravelGoals',
    date: '2 hours ago',
    likes: 1247,
    comments: 89,
    location: 'Maldives'
  },
  {
    id: 2,
    platform: 'facebook',
    image: 'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    caption: 'Just wrapped up an incredible temple tour in Cambodia! Our small group had exclusive access to areas most tourists never see. 🏛️',
    date: '1 day ago',
    likes: 523,
    comments: 34,
    location: 'Angkor Wat, Cambodia'
  },
  {
    id: 3,
    platform: 'instagram',
    image: 'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    caption: 'Northern Lights magic in Iceland ✨ Last night was absolutely spectacular! Our Aurora Quest group captured some incredible shots. #NorthernLights #Iceland #Photography',
    date: '3 days ago',
    likes: 2156,
    comments: 127,
    location: 'Reykjavik, Iceland'
  },
  {
    id: 4,
    platform: 'facebook',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    caption: 'Himalayan sunrise from 18,000 feet! 🏔️ This is why we wake up at 4 AM - moments like these make every step of the journey worth it.',
    date: '5 days ago',
    likes: 892,
    comments: 156,
    location: 'Himalayas, Nepal'
  },
  {
    id: 5,
    platform: 'instagram',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    caption: 'Santorini perfection 🇬🇷 Our Mediterranean Soul journey continues with breathtaking views and incredible local cuisine. #Santorini #Greece #MediterraneanSoul',
    date: '1 week ago',
    likes: 1834,
    comments: 98,
    location: 'Santorini, Greece'
  },
  {
    id: 6,
    platform: 'facebook',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    caption: 'Wildlife spotting in Patagonia! 🦙 Today we encountered wild guanacos and condors soaring overhead. Nature at its finest!',
    date: '1 week ago',
    likes: 678,
    comments: 67,
    location: 'Torres del Paine, Chile'
  }
];


export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Sarah Chen',
    location: 'San Francisco, CA',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    quote: 'The Himalayan odyssey was life-changing. Every detail was perfectly planned, and our guide was incredibly knowledgeable.',
    rating: 5,
    tour: 'Himalayan Odyssey',
    date: '2024-03-15'
  },
  {
    id: 2,
    name: 'Marcus Johnson',
    location: 'London, UK',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    quote: 'Witnessing the Aurora Borealis was magical. The photography guidance helped me capture memories that will last forever.',
    rating: 5,
    tour: 'Aurora Borealis Quest',
    date: '2024-02-20'
  },
  {
    id: 3,
    name: 'Isabella Rodriguez',
    location: 'Barcelona, Spain',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    quote: 'The Mediterranean yacht experience exceeded all expectations. Pure luxury combined with authentic cultural experiences.',
    rating: 5,
    tour: 'Mediterranean Soul',
    date: '2024-07-10'
  }
];

export const TOURSHOME = [
  {
    id: 't1',
    title: 'Norwegian Coastal Escape',
    subtitle: 'Fjords, midnight sun & serene villages',
    description: 'Discover the stunning Norwegian coastline with breathtaking fjords, charming villages, and the magical midnight sun, all with expert local guides.',
    priceFrom: '$2,699',
    originalPrice: '$3,199',
    duration: '10 Days',
    difficulty: 'Moderate',
    groupSize: '8-12 people',
    img: norway1,
    gallery: [
      norway1,
      norway1
    ],
    highlights: ['Fjords Exploration', 'Midnight Sun', 'Local Cuisine', 'Scenic Drives'],
    days: 10,
    reviews: 145,
    bestTime: 'Jun-Aug',
    included: ['Accommodation', 'All Meals', 'Local Guide', 'Transportation', 'Permits'],
    destinationId: 'd2',
  },
  {
    id: 't2',
    title: 'Aurora Borealis Quest',
    subtitle: 'Northern lights, ice hotels & Arctic adventures',
    description: 'Chase the magical Aurora Borealis across pristine Arctic landscapes with professional photography guidance and luxury accommodations.',
    priceFrom: '$3,299',
    originalPrice: '$3,799',
    duration: '8 Days',
    difficulty: 'Easy',
    groupSize: '6-10 people',
    img: norway2,
    gallery: [
      norway2,
      norway2
    ],
    highlights: ['Aurora Photography', 'Ice Hotel Stay', 'Husky Sledding', 'Arctic Cuisine'],
    days: 10,
    reviews: 89,
    bestTime: 'Nov-Mar',
    included: ['Luxury Accommodation', 'Photography Guide', 'Winter Gear', 'All Activities', 'Airport Transfers'],
    destinationId: 'd2',
  },
  {
    id: 't3',
    title: 'Cultural Heritage Journey',
    subtitle: 'Traditional villages, waterfalls & ethnic experiences',
    description: 'Immerse yourself in rich cultural heritage with visits to traditional villages, stunning waterfalls, and vibrant ethnic celebrations.',
    priceFrom: '$1,899',
    originalPrice: '$2,299',
    duration: '7 Days',
    difficulty: 'Easy',
    groupSize: '10-15 people',
    img: india1,
    gallery: [
      india1,
      india1
    ],
    highlights: ['Traditional Villages', 'Waterfall Views', 'Cultural Festivals', 'Local Crafts'],
    days: 7,
    reviews: 112,
    bestTime: 'Apr-Jun, Sep-Oct',
    included: ['Accommodation', 'Local Guide', 'Cultural Activities', 'Transportation'],
    destinationId: 'd5',
  },
  {
    id: 't4',
    title: 'Golden Temple Serenity',
    subtitle: 'Spiritual retreat & architectural marvels',
    description: 'Experience a peaceful spiritual retreat at the Golden Temple, surrounded by serene waters and intricate architecture.',
    priceFrom: '$1,499',
    originalPrice: '$1,799',
    duration: '5 Days',
    difficulty: 'Easy',
    groupSize: '6-10 people',
    img: india2,
    gallery: [
      india2,
      india2
    ],
    highlights: ['Golden Temple', 'Spiritual Reflection', 'Local Cuisine', 'Historical Sites'],
    days: 5,
    reviews: 98,
    bestTime: 'Oct-Mar',
    included: ['Accommodation', 'All Meals', 'Local Guide', 'Transportation'],
    destinationId: 'd5',
  },
  {
    id: 't6',
    title: 'Milos Island Getaway',
    subtitle: 'Crystal waters, white cliffs & quaint villages',
    description: 'Relax on the pristine beaches of Milos, explore dramatic white cliffs, and enjoy the charm of quaint island villages.',
    priceFrom: '$2,999',
    originalPrice: '$3,499',
    duration: '9 Days',
    difficulty: 'Easy',
    groupSize: '6-10 people',
    img: greek1,
    gallery: [
      greek1,
      greek1
    ],
    highlights: ['Crystal Waters', 'White Cliffs', 'Boat Tours', 'Local Seafood'],
    days: 9,
    reviews: 76,
    bestTime: 'May-Sep',
    included: ['Accommodation', 'Boat Tours', 'Local Guide', 'Meals'],
    destinationId: 'd3',
  },
  {
    id: 't7',
    title: 'Santorini Stroll',
    subtitle: 'Whitewashed streets, blue domes & sunset views',
    description: 'Wander through the picturesque whitewashed streets of Santorini, admire blue-domed churches, and witness stunning sunsets.',
    priceFrom: '$2,799',
    originalPrice: '$3,299',
    duration: '7 Days',
    difficulty: 'Easy',
    groupSize: '8-12 people',
    img: greek2,
    gallery: [
      greek2,
      greek2
    ],
    highlights: ['Whitewashed Streets', 'Blue Domes', 'Sunset Views', 'Wine Tasting'],
    days: 7,
    reviews: 105,
    bestTime: 'May-Sep',
    included: ['Accommodation', 'Wine Tasting', 'Local Guide', 'Transportation'],
    destinationId: 'd3',
  },
];