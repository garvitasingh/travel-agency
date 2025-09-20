import React, { useEffect, useState, useRef } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp, FaYoutube, FaLocationArrow } from "react-icons/fa";
import nepal1 from '../public/images/tours/nepal1.jpeg';
import nepal2 from '../public/images/tours/nepal2.jpeg';
import norway1 from '../public/images/tours/norway1.jpeg';
import norway2 from '../public/images/tours/norway2.jpeg';
import norway3 from '../public/images/tours/norway3.jpeg';
import patagonia1 from '../public/images/tours/patagonia1.jpeg';
import patagonia2 from '../public/images/tours/patagonia2.jpeg';
import greek1 from '../public/images/tours/greek1.jpeg';
import greek2 from '../public/images/tours/greek2.jpeg';
import india1 from '../public/images/tours/india1.jpeg';
import india2 from '../public/images/tours/india2.jpeg';

// Enhanced Theme with modern palette
const THEME = {
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



const Slider = [
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
// const TOURS = [
//   {
//     id: 't1',
//     title: 'Himalayan Odyssey',
//     subtitle: 'Sacred peaks, ancient monasteries & mountain villages',
//     description: 'Experience the mystical beauty of the Himalayas with expert local guides, comfortable accommodations, and carefully planned itineraries.',
//     priceFrom: '$2,499',
//     originalPrice: '$2,999',
//     duration: '12 Days',
//     difficulty: 'Moderate',
//     groupSize: '8-12 people',
//     img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
//     gallery: [
//       'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
//       'https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
//       'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
//     ],
//     highlights: ['Sacred Monasteries', 'Mountain Villages', 'Expert Guides', 'Cultural Immersion'],
//     days: 8,
//     reviews: 127,
//     bestTime: 'Oct-Nov, Mar-May',
//     included: ['Accommodation', 'All Meals', 'Local Guide', 'Transportation', 'Permits'],
//     destinationId: 'd5',
//   },
//   {
//     id: 't2',
//     title: 'Aurora Borealis Quest',
//     subtitle: 'Northern lights, ice hotels & Arctic adventures',
//     description: 'Chase the magical Aurora Borealis across pristine Arctic landscapes with professional photography guidance and luxury accommodations.',
//     priceFrom: '$3,299',
//     originalPrice: '$3,799',
//     duration: '8 Days',
//     difficulty: 'Easy',
//     groupSize: '6-10 people',
//     img: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
//     gallery: [
//       'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
//       'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
//     ],
//     highlights: ['Aurora Photography', 'Ice Hotel Stay', 'Husky Sledding', 'Arctic Cuisine'],
//     days: 10,
//     reviews: 89,
//     bestTime: 'Nov-Mar',
//     included: ['Luxury Accommodation', 'Photography Guide', 'Winter Gear', 'All Activities', 'Airport Transfers'],
//     destinationId: 'd5',
//   },
//   {
//     id: 't3',
//     title: 'Mediterranean Soul',
//     subtitle: 'Greek islands, Turkish coasts & Italian charm',
//     description: 'Sail through crystal-clear waters, explore ancient ruins, and savor authentic Mediterranean cuisine on this luxury yacht adventure.',
//     priceFrom: '$4,199',
//     originalPrice: '$4,999',
//     duration: '15 Days',
//     difficulty: 'Easy',
//     groupSize: '10-16 people',
//     img: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
//     gallery: [
//       'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
//       'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
//     ],
//     highlights: ['Luxury Yacht', 'Private Beaches', 'Wine Tastings', 'Historical Sites'],
//     days: 5,
//     reviews: 156,
//     bestTime: 'May-Sep',
//     included: ['Luxury Yacht', 'Private Chef', 'All Excursions', 'Wine Tastings', 'Cultural Guide'],
//     destinationId: 'd5',
//   }
// ];

// Enhanced sample data with more details
const TOURS = [
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



const TOURSHOME = [
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
  // {
  //   id: 't8',
  //   title: 'Norwegian Fjord Adventure',
  //   subtitle: 'Waterfalls, mountain roads & scenic vistas',
  //   description: 'Embark on a thrilling adventure through Norwegian fjords, featuring majestic waterfalls, winding mountain roads, and breathtaking vistas.',
  //   priceFrom: '$3,499',
  //   originalPrice: '$3,999',
  //   duration: '11 Days',
  //   difficulty: 'Moderate',
  //   groupSize: '8-12 people',
  //   img: norway3,
  //   gallery: [
  //     norway3,
  //     norway3
  //   ],
  //   highlights: ['Waterfalls', 'Mountain Roads', 'Scenic Views', 'Hiking'],
  //   days: 11,
  //   reviews: 120,
  //   bestTime: 'Jun-Aug',
  //   included: ['Accommodation', 'All Meals', 'Local Guide', 'Transportation', 'Hiking Gear'],
  //   destinationId: 'd2',
  // },{
  //   id: 't10',
  //   title: 'Swayambhunath Spiritual Journey',
  //   subtitle: 'Ancient stupas, prayer flags & monkey temple',
  //   description: 'Embark on a spiritual journey to the iconic Swayambhunath Stupa, surrounded by prayer flags and the lively monkey temple.',
  //   priceFrom: '$1,599',
  //   originalPrice: '$1,999',
  //   duration: '5 Days',
  //   difficulty: 'Easy',
  //   groupSize: '6-10 people',
  //   img: nepal1,
  //   gallery: [
  //     nepal1,
  //     nepal1
  //   ],
  //   highlights: ['Swayambhunath Stupa', 'Prayer Flags', 'Monkey Temple', 'Buddhist Culture'],
  //   days: 5,
  //   reviews: 95,
  //   bestTime: 'Oct-Nov, Mar-May',
  //   included: ['Accommodation', 'Local Guide', 'Cultural Tours', 'Transportation'],
  //   destinationId: 'd1',
  // },
  // {
  //   id: 't11',
  //   title: 'Annapurna Trekking Adventure',
  //   subtitle: 'Himalayan trails, suspension bridges & Sherpa villages',
  //   description: 'Trek through the majestic Annapurna region, crossing suspension bridges and experiencing the warmth of Sherpa villages.',
  //   priceFrom: '$2,899',
  //   originalPrice: '$3,399',
  //   duration: '12 Days',
  //   difficulty: 'Moderate',
  //   groupSize: '8-12 people',
  //   img: nepal2,
  //   gallery: [
  //     nepal2,
  //     nepal2
  //   ],
  //   highlights: ['Annapurna Range', 'Suspension Bridges', 'Sherpa Hospitality', 'Hiking'],
  //   days: 12,
  //   reviews: 130,
  //   bestTime: 'Oct-Nov, Mar-May',
  //   included: ['Accommodation', 'All Meals', 'Local Guide', 'Trekking Gear', 'Permits'],
  //   destinationId: 'd1',
  // },
  // {
  //   id: 't12',
  //   title: 'Patagonia Wilderness Trek',
  //   subtitle: 'Glaciers, rugged trails & pristine lakes',
  //   description: 'Explore the wild landscapes of Patagonia with treks to stunning glaciers, rugged trails, and crystal-clear lakes.',
  //   priceFrom: '$2,799',
  //   originalPrice: '$3,299',
  //   duration: '10 Days',
  //   difficulty: 'Moderate',
  //   groupSize: '8-12 people',
  //   img: patagonia1,
  //   gallery: [
  //     patagonia1,
  //     patagonia1
  //   ],
  //   highlights: ['Glacier Hikes', 'Rugged Trails', 'Pristine Lakes', 'Wildlife'],
  //   days: 10,
  //   reviews: 110,
  //   bestTime: 'Nov-Mar',
  //   included: ['Accommodation', 'All Meals', 'Local Guide', 'Trekking Gear', 'Transportation'],
  //   destinationId: 'd4',
  // },
  // {
  //   id: 't13',
  //   title: 'Torres del Paine Expedition',
  //   subtitle: 'Towering peaks, guanacos & scenic vistas',
  //   description: 'Embark on an expedition to Torres del Paine, encountering towering peaks, guanacos, and breathtaking scenic vistas.',
  //   priceFrom: '$3,199',
  //   originalPrice: '$3,799',
  //   duration: '12 Days',
  //   difficulty: 'Challenging',
  //   groupSize: '6-10 people',
  //   img: patagonia2,
  //   gallery: [
  //     patagonia2,
  //     patagonia2
  //   ],
  //   highlights: ['Torres del Paine', 'Guanaco Sightings', 'Scenic Vistas', 'Wild Camping'],
  //   days: 12,
  //   reviews: 95,
  //   bestTime: 'Nov-Mar',
  //   included: ['Accommodation', 'All Meals', 'Local Guide', 'Camping Gear', 'Permits'],
  //   destinationId: 'd4',
  // }
];


const DESTINATIONS = [
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

const TESTIMONIALS = [
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

// Social Media Posts Data
const SOCIAL_POSTS = [
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

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

function AnimatedSection({ children, className = "" }) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${className}`}
    >
      {children}
    </div>
  );
}

function Navigation({ onNavigate, currentRoute }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 py-2">
      <div className="relative">
        {/* GRID: left col (logo) + right col (topbar + nav) */}
        {/* <div className="grid grid-cols-[180px_1fr] gap-1 items-center"> */}
        {/* <div className="grid grid-cols-[250px_1fr] gap-1 items-center"> */}
        <div className="grid grid-cols-[auto_1fr] gap-1 items-center">



          {/* LEFT: Logo - icon + text in a single row */}
          <div
  className="flex items-center gap-3 cursor-pointer transform hover:scale-105 transition-transform duration-300"
  onClick={() => onNavigate('home')}
>
  {/* Logo */}
  <div className="w-36 h-20 flex items-center justify-center overflow-hidden rounded-xl">
    <img
      src="images/ola_logo.png"
      alt="OLA Logo"
      className="w-full h-full object-cover scale-125"
    />
  </div>

  {/* Text (hidden on mobile) */}
  <div className="hidden md:block">
    <div
      className={`font-bold text-2xl leading-none whitespace-nowrap ${
        currentRoute !== 'home'
          ? 'text-gray-900'
          : isScrolled
          ? 'text-gray-900'
          : 'text-white'
      }`}
    >
      OLA TRAVELS
    </div>
    <div
      className={`text-sm leading-none tracking-wide ${
        currentRoute !== 'home'
          ? 'text-gray-600'
          : isScrolled
          ? 'text-gray-600'
          : 'text-white/80'
      }`}
    >
      Slogan
    </div>
  </div>
</div>



          {/* RIGHT: Topbar + Navigation stacked */}
          <div className="hidden md:flex flex-col">

            {/* Topbar row */}
            <div className={`flex justify-end items-center gap-5 text-sm mb-3 ${
              currentRoute !== 'home'
    ? 'text-gray-600'
    :isScrolled ? 'text-gray-600' : 'text-white'
            }`}>
              <a href="#" className={`text-lg transition-colors ${
                currentRoute !== 'home'
    ? 'text-gray-600'
    :isScrolled ? 'hover:text-blue-500' : 'hover:text-blue-300'
              }`}><FaFacebookF /></a>

              <a href="#" className={`text-lg transition-colors ${
                currentRoute !== 'home'
    ? 'text-gray-600'
    :isScrolled ? 'hover:text-pink-500' : 'hover:text-pink-300'
              }`}><FaInstagram /></a>

              <a href="#" className={`text-lg transition-colors ${
                currentRoute !== 'home'
    ? 'text-gray-600'
    :isScrolled ? 'hover:text-sky-400' : 'hover:text-sky-300'
              }`}><FaTwitter /></a>

              <a href="#" className={`text-lg transition-colors ${
                currentRoute !== 'home'
    ? 'text-gray-600'
    :isScrolled ? 'hover:text-green-500' : 'hover:text-green-300'
              }`}><FaWhatsapp /></a>

              <a href="#" className={`text-lg transition-colors ${
                currentRoute !== 'home'
    ? 'text-gray-600'
    :isScrolled ? 'hover:text-red-500' : 'hover:text-red-300'
              }`}><FaYoutube /></a>

              <span className="flex items-center gap-2 ml-6 whitespace-nowrap">
                📞 <span>+1 (555) 123-4567</span>
              </span>
              <span className="hidden sm:flex items-center gap-2 whitespace-nowrap">
                📧 <span>hello@ola.com</span>
              </span>
            </div>


            {/* Nav row */}
            <div className="flex justify-end items-center gap-6">
              <nav className="hidden md:flex items-center gap-8">
                {['Home', 'Tours & Destinations', 'About', 'Contact'].map((item) => {
  const routeKey = item === 'Tours & Destinations' ? 'tours&destinations' : item.toLowerCase();
  const isActive = currentRoute === routeKey;
  return (
    <button
      key={item}
      onClick={() => onNavigate(routeKey)}
      className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 text-[20px] whitespace-nowrap
        ${
          isActive
            ? 'text-[#FFD166] border-b-2 border-[#FFD166] bg-white/5'
            : (currentRoute !== 'home' || isScrolled)
              ? 'text-gray-700 hover:text-[#FFD166] hover:bg-gray-50'
              : 'text-white hover:text-[#FFD166] hover:bg-white/10'
        }`}
    >
      {item}
    </button>
  );
})}

                <button
                  onClick={() => onNavigate('contact')}
                  className="px-6 py-3 rounded-full font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 whitespace-nowrap"
                  style={{ background: '#0077B6' }}
                >
                  Book Now
                </button>
              </nav>

              
            </div>

          </div>
          {/* Mobile Menu Button */}
          <div className="flex items-center justify-end">
            {/* Hamburger button on right (mobile only) */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
                currentRoute !== 'home'
                  ? 'text-gray-700 hover:bg-gray-100'
                  : isScrolled
                    ? 'text-gray-700 hover:bg-gray-100'
                    : 'text-white hover:bg-white/10'
              }`}
            >
              <div className="w-6 h-6 flex flex-col justify-center gap-1">
                <div className={`w-full h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                <div className={`w-full h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
                <div className={`w-full h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
              </div>
            </button>
          </div>
        </div>
        
</div>
        {/* Mobile Menu */}
        {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 bg-white/95 backdrop-blur-lg rounded-xl border border-gray-200 overflow-hidden shadow-xl">
              <div className="p-4 space-y-4">

                {/* Mobile topbar content */}
                <div className="flex flex-wrap justify-center gap-5 text-gray-700 text-lg">
                  <a href="#" className="hover:text-blue-500"><FaFacebookF /></a>
                  <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
                  <a href="#" className="hover:text-sky-400"><FaTwitter /></a>
                  <a href="#" className="hover:text-green-500"><FaWhatsapp /></a>
                  <a href="#" className="hover:text-red-500"><FaYoutube /></a>
                </div>

                <div className="text-center text-sm text-gray-600 space-y-1">
                  <div>📞 +1 (555) 123-4567</div>
                  <div>📧 hello@ola.com</div>
                </div>

                <div className="border-t border-gray-200 pt-4 space-y-2">
                  {['Home', 'Tours & Destinations', 'About', 'Contact'].map((item) => {
  const routeKey = item === 'Tours & Destinations' ? 'tours&destinations' : item.toLowerCase();
  const isActive = currentRoute === routeKey;

  return (
    <button
      key={item}
      onClick={() => {
        onNavigate(routeKey);
        setIsMobileMenuOpen(false);
      }}
      className={`block w-full text-left px-4 py-3 rounded-lg text-[20px] transition-colors
        ${
          isActive
            ? 'text-[#FFD166] bg-white/10 border-l-4 border-[#FFD166]'
            : 'text-gray-700 hover:bg-blue-50 hover:text-[#FFD166]'
        }`}
    >
      {item}
    </button>
  );
})}
                  <button
                    onClick={() => {
                      onNavigate('contact');
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full mt-4 px-6 py-3 rounded-full font-semibold text-white"
                    style={{ background: '#0077B6' }}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          )}
      </div>
    </header>
  );
}


function ToursAndTravelers({ destinations, tours, onBook }) {
  const [selectedDest, setSelectedDest] = useState(null);

  // const filteredTours = selectedDest
  //   ? tours.filter(t =>
  //       t.title.toLowerCase().includes(selectedDest.toLowerCase()) ||
  //       t.subtitle.toLowerCase().includes(selectedDest.toLowerCase())
  //     )
  //   : tours;

  // const filteredTours = selectedDest
  // ? tours.filter(t => t.destinationId === selectedDest)
  // : tours;

  const filteredTours = selectedDest
    ? tours.filter(t => {
        const destination = destinations.find(d => d.name === selectedDest);
        return destination && t.destinationId === destination.id;
      })
    : tours;

  return (
    <section className="pb-20 bg-gray-50">
      <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto">

        {/* DESTINATIONS */}
        <div className="mb-10">
          <h3 className="font-bold text-xl text-gray-900 mb-4">Destinations</h3>

          {/* Desktop Sidebar Grid */}
          <div 
  className="hidden md:grid grid-cols-1 gap-3 w-64 float-left mr-10 sticky top-28 
             max-h-[50vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent rounded-xl">
            {destinations.map((dest) => (
              <div
                key={dest.id}
                onClick={() => setSelectedDest(dest.name)}
                className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all duration-300 hover:shadow-md hover:-translate-y-1
                  ${selectedDest === dest.name ? 'bg-blue-50 ring-2 ring-blue-400' : 'bg-white border border-gray-200'}`}
              >
                <img
                  src={dest.img}
                  alt={dest.name}
                  className="w-14 h-14 rounded-xl object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900">{dest.name}</div>
                  <div className="text-sm text-gray-500">{dest.country}</div>
                </div>
              </div>
            ))}
            {selectedDest && (
              <button
                onClick={() => setSelectedDest(null)}
                className="mt-4 text-sm text-blue-600 hover:underline"
              >
                Clear filter
              </button>
            )}
          </div>

          {/* Mobile Horizontal Scroll */}
          <div className="flex md:hidden gap-4 overflow-x-auto pb-2">
            {destinations.map((dest) => (
              <div
                key={dest.id}
                onClick={() => setSelectedDest(dest.name)}
                className={`flex-shrink-0 w-40 p-3 rounded-xl cursor-pointer transition-all duration-300 hover:shadow-md
                  ${selectedDest === dest.name ? 'bg-blue-50 ring-2 ring-blue-400' : 'bg-white border border-gray-200'}`}
              >
                <img
                  src={dest.img}
                  alt={dest.name}
                  className="w-full h-24 rounded-xl object-cover mb-2"
                />
                <div className="font-semibold text-gray-900 truncate">{dest.name}</div>
                <div className="text-sm text-gray-500">{dest.country}</div>
              </div>
            ))}
          </div>
        </div>

        {/* TOURS */}
        <div className="md:ml-72">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            {selectedDest ? `${selectedDest} Tours` : 'All Tours'}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTours.map((tour) => (
              <div
                key={tour.id}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative h-56">
                  <img
                    src={tour.img}
                    alt={tour.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-sm">
                    {tour.days} Days
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-sm font-bold">
                    {tour.priceFrom}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{tour.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{tour.subtitle}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {tour.highlights.slice(0, 3).map((h) => (
                      <span key={h} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full">
                        {h}
                      </span>
                    ))}
                  </div> 
                  <div className="flex gap-3">
                    <button className="flex-1 px-4 py-2 border border-gray-300 rounded-full text-white hover:border-blue-500 hover:text-white transition-all">
                      View Details
                    </button>
                    <button
                      onClick={() => onBook(tour.id)}
                      className="flex-1 px-4 py-2 rounded-full text-white font-semibold hover:shadow-lg transition-all"
                      style={{ background: '#0077B6' }}
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}



// Enhanced Hero Section
// function HeroSection({ onExplore }) {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % TOURS.length);
//     }, 6000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section className="relative h-screen min-h-[700px] overflow-hidden">
//       {/* Background Images */}
//       {TOURS.map((tour, index) => (
//         <div
//           key={tour.id}
//           className={`absolute inset-0 transition-opacity duration-1000 ${
//             index === currentSlide ? 'opacity-100' : 'opacity-0'
//           }`}
//         >
//           <div
//             className="w-full h-full bg-cover bg-center transform hover:scale-105 transition-transform duration-10000"
//             style={{
//               backgroundImage: `linear-gradient(135deg, rgba(15,23,42,0.4), rgba(59,130,246,0.3)), url(${tour.img})`
//             }}
//           />
//         </div>
//       ))}

//       {/* Floating Elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {[...Array(8)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute w-4 h-4 bg-white/20 rounded-full animate-float"
//             style={{
//               left: `${10 + i * 12}%`,
//               top: `${20 + i * 8}%`,
//               animationDelay: `${i * 0.5}s`,
//               animationDuration: `${8 + i}s`
//             }}
//           />
//         ))}
//       </div>

//       {/* Content */}
//       <div className="relative z-10 h-full flex items-center">
//         <div className="w-full px-4 sm:px-6 lg:px-8 text-white">
//           <div className="max-w-4xl mx-auto text-center">
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 animate-bounce-slow">
//               <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
//               <span className="text-sm font-medium">Now Booking 2025-2026 Adventures</span>
//             </div>

//             <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 animate-fade-in-up">
//               Discover Your Next
//               <div 
//                 className="bg-gradient-to-r from-amber-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient"
//               >
//                 Epic Journey
//               </div>
//             </h1>

//             <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-up-delay">
//               Embark on extraordinary adventures crafted by local experts. From mystical mountains to pristine coastlines, every journey tells a story.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up-delay-2">
//               <button
//                 onClick={() => onExplore('tours')}
//                 className="px-8 py-4 rounded-full font-semibold text-lg text-white shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 transform"
//                 style={{ background: '#0077B6' }}
//               >
//                 Explore Adventures
//               </button>

//               <button
//                 onClick={() => onExplore('contact')}
//                 className="px-8 py-4 rounded-full border-2 border-white/30 text-white font-semibold text-lg backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:scale-105 transform"
//               >
//                 Plan My Trip
//               </button>
//             </div>

//           </div>
//         </div>
//       </div>

//       {/* Slide Indicators */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
//         {TOURS.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrentSlide(index)}
//             className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
//               index === currentSlide ? 'bg-white scale-125' : 'bg-white/40'
//             }`}
//           />
//         ))}
//       </div>

//       {/* Scroll Indicator */}
//       <div className="absolute bottom-8 right-8 text-white/60 animate-bounce">
//         <div className="flex flex-col items-center gap-2">
//           <span className="text-sm">Scroll</span>
//           <div className="w-px h-8 bg-white/40"></div>
//           <div className="text-lg">↓</div>
//         </div>
//       </div>
//     </section>
//   );
// }

function HeroSection({ onExplore }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Slider.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const currentTour = TOURS[currentSlide];

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Background Images */}
      {Slider.map((tour, index) => (
        <div
          key={tour.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(135deg, rgba(15,23,42,0.4), rgba(59,130,246,0.3)), url(${tour.img})`
            }}
          />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="w-full px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-4xl mx-auto text-center transition-opacity duration-700">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4">
              {currentTour.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4">
              {currentTour.subtitle}
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
              {currentTour.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onExplore('tours')}
                className="px-8 py-4 rounded-full font-semibold text-lg text-white shadow-xl hover:scale-105 transition-transform"
                style={{ background: '#0077B6' }}
              >
                Explore  sd{currentTour.title}
              </button>
              <button
                onClick={() => onExplore('contact')}
                className="px-8 py-4 rounded-full border-2 border-white/30 text-white font-semibold text-lg hover:bg-white/10 transition-all"
              >
                Plan My Trip
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
        {Slider.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${index === currentSlide ? 'bg-white scale-125' : 'bg-white/40'
              }`}
          />
        ))}
      </div>
    </section>
  );
}


// Enhanced Tour Cards
function TourCard({ tour, onView, onQuote }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl transform hover:scale-105 hover:-translate-y-2 ${isHovered ? 'shadow-2xl' : ''
        }`}
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={tour.img}
          alt={tour.title}
          className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'
            }`}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Price Badge */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 transform hover:scale-110 transition-transform duration-300">
          <div className="text-sm font-bold text-gray-900">{tour.priceFrom}</div>
          {tour.originalPrice && (
            <div className="text-xs text-gray-500 line-through">{tour.originalPrice}</div>
          )}
        </div>

        {/* Rating */}
        <div className="absolute top-4 left-4 flex items-center gap-1 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
          {/* <span className="text-amber-400 text-sm">★</span> */}
          <span className="text-sm font-medium">{tour.days} Days</span>
        </div>

        {/* Difficulty Badge */}
        <div
          className="absolute bottom-4 left-4 backdrop-blur-sm rounded-full px-3 py-1"
          style={{ backgroundColor: 'rgba(59, 130, 246, 0.9)' }}
        >
          <span className="text-white text-xs font-medium">{tour.difficulty}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
              {tour.title}
            </h3>
            <p className="text-gray-600 text-sm mb-3">{tour.subtitle}</p>
          </div>
        </div>

        {/* Tour Details */}
        {/* <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-1">
            <span>📅</span>
            <span>{tour.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <span>👥</span>
            <span>{tour.groupSize}</span>
          </div>
          <div className="flex items-center gap-1">
            <span>⭐</span>
            <span>{tour.reviews} reviews</span>
          </div>
        </div> */}

        {/* Highlights */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tour.highlights.slice(0, 3).map((highlight, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full hover:bg-blue-100 transition-colors cursor-default"
            >
              {highlight}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button
            onClick={() => onView(tour.id)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-full text-gray-700 font-medium hover:border-blue-500 hover:text-blue-600 transition-all duration-300 hover:scale-105 transform"
          >
            View Details
          </button>
          <button
            onClick={() => onQuote(tour.id)}
            className="flex-1 px-4 py-2 rounded-full text-white font-medium transition-all duration-300 hover:scale-105 transform hover:shadow-lg"
            style={{ background: '#0077B6' }}
          >
            Book Now
          </button>
        </div>
      </div>

      {/* Hover Effect Overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 pointer-events-none transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'
          }`}
      />
    </div>
  );
}



// Social Media Posts Section
function SocialMediaFeed() {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <AnimatedSection className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-800 text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
            Live from Our Adventures
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Follow Our
            <span className="text-gray-900"> Journey</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real moments from real adventures. Follow along as our travelers explore the world's most incredible destinations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {SOCIAL_POSTS.map((post) => (
            <div
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 cursor-pointer group"
            >
              <div className="relative h-64">
                <img
                  src={post.image}
                  alt="Social post"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Platform Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-lg">
                    {post.platform === 'instagram' ? <FaInstagram/> : <FaFacebookF />}
                  </span>
                  <span className="text-sm font-medium capitalize">{post.platform}</span>
                </div>

                {/* Location */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-sm font-medium">📍 {post.location}</span>
                </div>

                {/* Engagement Stats */}
                <div className="absolute bottom-4 left-4 flex items-center gap-4 text-white">
                  <div className="flex items-center gap-1">
                    <span className="text-red-400">❤️</span>
                    <span className="text-sm">{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>💬</span>
                    <span className="text-sm">{post.comments}</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  {/* <div className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    <span className="text-xs text-gray-500">Live</span>
                  </div> */}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed group-hover:text-gray-900 transition-colors">
                  {post.caption.slice(0, 120)}...
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 rounded-full font-semibold text-black transition-all duration-300 hover:shadow-lg hover:scale-105 transform flex items-center gap-2 "
              style={{ background: '#FFD166' }}
            >
              <span><FaInstagram/></span>
              Follow on Instagram
            </button>
            {/* <button className="px-6 py-3 rounded-full font-semibold text-white transition-all duration-300 hover:shadow-lg hover:scale-105 transform flex items-center gap-2"
              style={{ background: 'linear-gradient(45deg, #1877f2, #42a5f5)' }}
            > */}
            <button className="px-6 py-3 rounded-full font-semibold text-black transition-all duration-300 hover:shadow-lg hover:scale-105 transform flex items-center gap-2"
              style={{ background: '#90E0EF' }}
            >
              <span><FaFacebookF/></span>
              Like on Facebook
            </button>
          </div>
        </div>

        {/* Social Post Modal */}
        {selectedPost && (
          <div
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedPost(null)}
          >
            <div
              className="bg-white rounded-2xl overflow-hidden max-w-2xl w-full shadow-2xl transform scale-100 transition-transform duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedPost.image}
                alt="Social post"
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">
                      {selectedPost.platform === 'instagram' ? '📷' : '📘'}
                    </span>
                    <div>
                      <div className="font-bold">OLA</div>
                      <div className="text-sm text-gray-500">{selectedPost.date}</div>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedPost(null)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    ❌
                  </button>
                </div>
                <p className="text-gray-700 mb-4">{selectedPost.caption}</p>
                <div className="flex items-center gap-6 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <span className="text-red-400">❤️</span>
                    <span>{selectedPost.likes} likes</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>💬</span>
                    <span>{selectedPost.comments} comments</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>📍</span>
                    <span>{selectedPost.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </AnimatedSection>
  );
}

// Interactive Destination Grid
function DestinationGrid() {
  const [selectedDestination, setSelectedDestination] = useState(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {DESTINATIONS.map((destination, index) => (
        <div
          key={destination.id}
          onClick={() => setSelectedDestination(destination)}
          className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
        >
          <img
            src={destination.img}
            alt={destination.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h3 className="text-xl font-bold mb-1">{destination.name}</h3>
            <p className="text-sm text-white/80 mb-2">{destination.country}</p>
            <p className="text-sm text-white/70 mb-3 line-clamp-2">{destination.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-sm bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                {destination.toursCount} Tours
              </span>
              <span className="text-xs text-white/60">{destination.bestTime}</span>
            </div>
          </div>

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-500">
            <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 scale-0 group-hover:scale-100 transition-transform duration-300">
              <span className="text-2xl">🔍</span>
            </div>
          </div>
        </div>
      ))}

      {/* Destination Modal */}
      {selectedDestination && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedDestination(null)}
        >
          <div
            className="bg-white rounded-2xl overflow-hidden max-w-2xl w-full shadow-2xl transform scale-100 transition-transform duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedDestination.img}
              alt={selectedDestination.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{selectedDestination.name}</h3>
              <p className="text-gray-600 mb-4">{selectedDestination.description}</p>
              <div className="grid grid-cols-3 gap-4 text-center text-sm">
                <div>
                  <div className="font-bold text-blue-600">{selectedDestination.toursCount}</div>
                  <div className="text-gray-500">Tours Available</div>
                </div>
                <div>
                  <div className="font-bold text-green-600">{selectedDestination.bestTime}</div>
                  <div className="text-gray-500">Best Time</div>
                </div>
                <div>
                  <div className="font-bold text-purple-600">{selectedDestination.highlights.length}</div>
                  <div className="text-gray-500">Highlights</div>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="font-semibold mb-2">Key Highlights:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedDestination.highlights.map((highlight, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
              <button
                className="w-full mt-6 px-6 py-3 rounded-full text-white font-semibold hover:scale-105 transform transition-all duration-300"
                style={{ background: '#0077B6' }}
              >
                Explore Tours in {selectedDestination.name}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Enhanced Testimonials Carousel
function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-gray-100"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.location}</p>
                    <div className="flex gap-1 mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-amber-400 text-sm">★</span>
                      ))}
                    </div>
                  </div>
                </div>

                <blockquote className="text-gray-700 text-lg leading-relaxed mb-4 italic">
                  "{testimonial.quote}"
                </blockquote>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full">
                    {testimonial.tour}
                  </span>
                  <span>{new Date(testimonial.date).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center gap-3 mt-8">
        {TESTIMONIALS.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${index === currentIndex ? 'bg-blue-500 scale-125' : 'bg-gray-300'
              }`}
          />
        ))}
      </div>
    </div>
  );
}

// Enhanced Quote Modal
function QuoteModal({ isOpen, onClose, initialTourId }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    personalInfo: { name: '', email: '', phone: '', country: '' },
    travelInfo: { destination: '', dates: '', duration: '', travelers: 1, budget: '' },
    preferences: { accommodation: '', activities: [], dietary: '', special: '' },
    tourId: initialTourId || ''
  });

  const totalSteps = 3;

  useEffect(() => {
    if (initialTourId) {
      setFormData(prev => ({ ...prev, tourId: initialTourId }));
    }
  }, [initialTourId]);

  const handleSubmit = async () => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      alert('Quote request submitted successfully! We\'ll contact you within 24 hours.');
      onClose();
      setStep(1);
      setFormData({
        personalInfo: { name: '', email: '', phone: '', country: '' },
        travelInfo: { destination: '', dates: '', duration: '', travelers: 1, budget: '' },
        preferences: { accommodation: '', activities: [], dietary: '', special: '' },
        tourId: ''
      });
    } catch (error) {
      alert('Failed to submit request. Please try again.');
    }
  };

  const nextStep = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4" onClick={onClose}>
      <div
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transform scale-100 transition-transform duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Plan Your Journey</h3>
              <p className="text-gray-600 mt-1">Step {step} of {totalSteps}</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              ❌
            </button>
          </div>

          {/* Progress Bar */}
          <div className="mt-4 bg-gray-200 rounded-full h-2">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{
                width: `${(step / totalSteps) * 100}%`,
                background: '#0077B6'
              }}
            />
          </div>
        </div>

        {/* Form Content */}
        <div className="p-6">
          <div className="transition-all duration-300">
            {step === 1 && (
              <div className="space-y-4">
                <h4 className="text-lg font-semibold mb-4">Personal Information</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Full Name *"
                    value={formData.personalInfo.name}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      personalInfo: { ...prev.personalInfo, name: e.target.value }
                    }))}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                  <input
                    type="email"
                    placeholder="Email Address *"
                    value={formData.personalInfo.email}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      personalInfo: { ...prev.personalInfo, email: e.target.value }
                    }))}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.personalInfo.phone}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      personalInfo: { ...prev.personalInfo, phone: e.target.value }
                    }))}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                  <select
                    value={formData.personalInfo.country}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      personalInfo: { ...prev.personalInfo, country: e.target.value }
                    }))}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select Country</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="UK">United Kingdom</option>
                    <option value="AU">Australia</option>
                    <option value="DE">Germany</option>
                    <option value="FR">France</option>
                    <option value="JP">Japan</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <h4 className="text-lg font-semibold mb-4">Travel Details</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <select
                    value={formData.travelInfo.destination}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      travelInfo: { ...prev.travelInfo, destination: e.target.value }
                    }))}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select Destination</option>
                    {DESTINATIONS.map(dest => (
                      <option key={dest.id} value={dest.name}>{dest.name}</option>
                    ))}
                    <option value="Custom">Custom Destination</option>
                  </select>
                  <input
                    type="date"
                    value={formData.travelInfo.dates}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      travelInfo: { ...prev.travelInfo, dates: e.target.value }
                    }))}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                  <select
                    value={formData.travelInfo.duration}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      travelInfo: { ...prev.travelInfo, duration: e.target.value }
                    }))}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Trip Duration</option>
                    <option value="3-5 days">3-5 days</option>
                    <option value="1 week">1 week</option>
                    <option value="2 weeks">2 weeks</option>
                    <option value="3+ weeks">3+ weeks</option>
                  </select>
                  <input
                    type="number"
                    min="1"
                    placeholder="Number of Travelers"
                    value={formData.travelInfo.travelers}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      travelInfo: { ...prev.travelInfo, travelers: parseInt(e.target.value) }
                    }))}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <select
                  value={formData.travelInfo.budget}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    travelInfo: { ...prev.travelInfo, budget: e.target.value }
                  }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                >
                  <option value="">Budget Range (per person)</option>
                  <option value="under-2000">Under $2,000</option>
                  <option value="2000-5000">$2,000 - $5,000</option>
                  <option value="5000-10000">$5,000 - $10,000</option>
                  <option value="10000+">$10,000+</option>
                </select>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <h4 className="text-lg font-semibold mb-4">Preferences & Special Requests</h4>
                <select
                  value={formData.preferences.accommodation}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    preferences: { ...prev.preferences, accommodation: e.target.value }
                  }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                >
                  <option value="">Accommodation Preference</option>
                  <option value="budget">Budget-friendly</option>
                  <option value="mid-range">Mid-range</option>
                  <option value="luxury">Luxury</option>
                  <option value="unique">Unique experiences (glamping, etc.)</option>
                </select>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Interested Activities (select multiple)
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {['Adventure Sports', 'Cultural Tours', 'Wildlife', 'Photography', 'Culinary', 'Wellness'].map(activity => (
                      <label key={activity} className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          className="rounded text-blue-500"
                          onChange={(e) => {
                            const activities = formData.preferences.activities;
                            if (e.target.checked) {
                              setFormData(prev => ({
                                ...prev,
                                preferences: {
                                  ...prev.preferences,
                                  activities: [...activities, activity]
                                }
                              }));
                            } else {
                              setFormData(prev => ({
                                ...prev,
                                preferences: {
                                  ...prev.preferences,
                                  activities: activities.filter(a => a !== activity)
                                }
                              }));
                            }
                          }}
                        />
                        <span className="text-sm">{activity}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <input
                  type="text"
                  placeholder="Dietary Requirements"
                  value={formData.preferences.dietary}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    preferences: { ...prev.preferences, dietary: e.target.value }
                  }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                />

                <textarea
                  placeholder="Special requests or additional information..."
                  value={formData.preferences.special}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    preferences: { ...prev.preferences, special: e.target.value }
                  }))}
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                />
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-200 flex justify-between">
          <button
            onClick={prevStep}
            disabled={step === 1}
            className="px-6 py-2 text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Previous
          </button>

          <div className="flex gap-3">
            {step < totalSteps ? (
              <button
                onClick={nextStep}
                className="px-6 py-3 rounded-full text-white font-semibold hover:scale-105 transform transition-all duration-300"
                style={{ background: '#0077B6' }}
              >
                Next Step
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="px-6 py-3 rounded-full text-white font-semibold hover:scale-105 transform transition-all duration-300"
                style={{ background: '#0077B6' }}
              >
                Submit Request
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Main App Component
export default function App() {
  const [currentRoute, setCurrentRoute] = useState('home');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedTourId, setSelectedTourId] = useState('');

  const navigate = (route) => {
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openQuoteModal = (tourId = '') => {
    setSelectedTourId(tourId);
    setIsQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
 
      <Navigation onNavigate={navigate} currentRoute={currentRoute} />

      <main>
        {currentRoute === 'home' && (
          <>
            <HeroSection onExplore={navigate} />

            {/* Featured Tours Section */}
            <AnimatedSection className="py-20">
              <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4">
                    <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                    Featured Adventures
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    Curated for the
                    <span className="text-gray-900"> Extraordinary</span>
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Hand-picked journeys that go beyond the ordinary. Each adventure is crafted with local expertise and genuine care.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                  {TOURSHOME.map((tour) => (
                    <TourCard
                      key={tour.id}
                      tour={tour}
                      onView={(id) => navigate(`tour-${id}`)}
                      onQuote={openQuoteModal}
                    />
                  ))}
                </div>
                <br></br>
                <div className="flex justify-center">
  <button onClick={() => navigate('tours&destinations')}  style={{ background: '#0077B6' }} className="px-6 py-2 border border-gray-300 rounded-full text-white hover:border-blue-500 hover:text-white transition-all">
    Explore Tours
  </button>
</div>

              </div>
            </AnimatedSection>

            {/* Social Media Feed Section */}
            <SocialMediaFeed />

            {/* Why Choose Us Section */}
            <AnimatedSection className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
              <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
                  <div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                      Why Choose
                      <span className="text-gray-900"> OLA</span>
                    </h2>
                    <p className="text-xl text-gray-600 mb-3">
                      We don't just plan trips - we create transformative experiences that stay with you forever.
                    </p>

                    <div className="">
                      {[
                        {
                          icon: '🌟',
                          title: 'Expert Local Guides',
                          description: 'Passionate locals who know hidden gems and authentic experiences.'
                        },
                        {
                          icon: '🎯',
                          title: 'Tailored Experiences',
                          description: 'Every journey is customized to your interests and travel style.'
                        },
                        {
                          icon: '🛡️',
                          title: '24/7 Support',
                          description: 'Complete peace of mind with round-the-clock assistance.'
                        },
                        {
                          icon: '💎',
                          title: 'Exclusive Access',
                          description: 'Unique experiences and locations not available to regular tourists.'
                        }
                      ].map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-4 p-4 rounded-lg hover:bg-white/50 transition-all duration-300 transform hover:translate-x-2"
                        >
                          <div className="text-3xl">{feature.icon}</div>
                          <div>
                            <h3 className="font-bold text-lg text-gray-900 mb-1">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="relative">
                    <div className="relative z-10">
                      <img
                        src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                        alt="Travel Experience"
                        className="rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-500"
                      />
                      {/* <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl hover:scale-110 transform transition-transform duration-300">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-blue-600">98%</div>
                          <div className="text-sm text-gray-600">Satisfaction Rate</div>
                        </div>
                      </div> */}
                    </div>
                    {/* <div className="absolute top-8 left-8 w-24 h-24 bg-amber-400 rounded-full opacity-20 animate-pulse"></div>
                    <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-400 rounded-full opacity-20 animate-bounce"></div> */}
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Destinations Section */}
            <AnimatedSection className="py-20">
              <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    Explore Amazing
                    <span className="text-gray-900"> Destinations</span>
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    From mystical mountains to pristine coastlines, discover the world's most captivating destinations.
                  </p>
                </div>

                <div className="max-w-7xl mx-auto">
                  <DestinationGrid />                 
                </div>
                <br></br> 
                 <div className="flex justify-center">
  <button onClick={() => navigate('tours&destinations')}  style={{ background: '#0077B6' }} className="px-6 py-2 border border-gray-300 rounded-full text-white hover:border-blue-500 hover:text-white transition-all">
    Explore Destinations
  </button>
</div>
              </div>
            </AnimatedSection>

            {/* Testimonials Section */}
            {/* <AnimatedSection className="py-20 text-white" style={{ background: '#90E0EF' }}> */}
            <div
              className={`transition-all duration-700 opacity-100 translate-y-0 py-10 text-white`}
              style={{ background: '#90E0EF' }}>
            
              <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 max-w-6xl mx-auto">
                  <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-700">
                    Stories from Our
                    <span className=""> Travelers</span>
                  </h2>
                  <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                    Real experiences from real adventurers who've journeyed with us.
                  </p>
                </div>

                <div className="max-w-4xl mx-auto">
                  <TestimonialsCarousel />
                </div>
              </div>
              </div>
            {/* </AnimatedSection> */}

            {/* CTA Section */}

            <AnimatedSection className="py-20 relative overflow-hidden">
  <div className="w-full px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl mx-auto text-center relative">

      {/* Animated Gradient Card */}
      <div 
        className="relative overflow-hidden rounded-3xl p-12 shadow-2xl transform transition-transform duration-700 hover:scale-[1.03] hover:shadow-3xl"
        style={{ 
          background: 'linear-gradient(135deg, #0056D2, #0096FF)', 
          backgroundSize: '400% 400%', 
          animation: 'gradientShift 15s ease infinite'
        }}
      >

        {/* Floating Decorative Circles */}
        <div className="absolute top-[-6rem] right-[-6rem] w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-[-5rem] left-[-5rem] w-56 h-56 bg-white/20 rounded-full blur-2xl animate-bounce-slow"></div>
        <div className="absolute top-1/2 left-[-4rem] w-48 h-48 bg-amber-400/20 rounded-full blur-2xl animate-rotate-slow"></div>

        {/* Content */}
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight opacity-0 animate-fadeIn">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-blue-100 max-w-2xl mx-auto opacity-0 animate-fadeIn delay-200">
            Let’s create an unforgettable journey tailored just for you.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => openQuoteModal()}
              className="px-8 py-4 text-gray-900 rounded-full font-semibold text-lg
                         shadow-md border-2 border-amber-300 hover:scale-105 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                         style={{background:'#FFD166'}}
            >
              <span className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-30 transition-opacity duration-500 rounded-full"></span>
              Plan My Journey
            </button>
            <button
              onClick={() => navigate('tours')}
              className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold text-lg
                         hover:bg-white hover:text-[#0F172A] hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg relative overflow-hidden"
            >
              Browse Tours
            </button>
          </div>
        </div>

      </div>
    </div>
  </div>

  {/* Tailwind / CSS Animations */}
  <style jsx>{`
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fadeIn { animation: fadeIn 1s forwards; }

    @keyframes pulse-slow {
      0%, 100% { transform: scale(1); opacity: 0.5; }
      50% { transform: scale(1.1); opacity: 0.7; }
    }
    .animate-pulse-slow { animation: pulse-slow 6s infinite; }

    @keyframes bounce-slow {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-20px); }
    }
    .animate-bounce-slow { animation: bounce-slow 8s infinite; }

    @keyframes rotate-slow {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    .animate-rotate-slow { animation: rotate-slow 20s linear infinite; }

    @keyframes gradientShift {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
  `}</style>
</AnimatedSection>



            
          </>
        )}

        {currentRoute === 'tours&destinations' && (
        <>
       <div className="pt-36 pb-24 bg-gray-50 min-h-screen">
        <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto">

          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Tours & Destinations
            </h1>
          </div>

          <div className="border-t border-gray-200 mb-6"></div>

          <ToursAndTravelers
            destinations={DESTINATIONS}
            tours={TOURS}
            onBook={openQuoteModal}
          />

        </div>
      </div>

  {/* <AnimatedSection className="py-20">
              <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                  <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl p-12 text-white relative overflow-hidden">
                    <div className="relative z-10">
                      <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Ready for Your Next Adventure?
                      </h2>
                      <p className="text-xl mb-8 text-blue-100">
                        Let's create an unforgettable journey tailored just for you.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                          onClick={() => openQuoteModal()}
                          className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform"
                        >
                          Plan My Journey
                        </button>
                        <button
                          onClick={() => navigate('tours')}
                          className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105 transform"
                        >
                          Browse Tours
                        </button>
                      </div>
                    </div>

                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full transform -translate-y-32 translate-x-32"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full transform translate-y-24 -translate-x-24"></div>
                  </div>
                </div>
              </div>
            </AnimatedSection> */}


          {/* <div className="pt-32 pb-20">
            <div className="w-full px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Tours & Destinations
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Discover extraordinary journeys and breathtaking places around the world.
                </p>
              </div>

              <div className="max-w-7xl mx-auto">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Tours</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                  {TOURS.map((tour) => (
                    <TourCard
                      key={tour.id}
                      tour={tour}
                      onView={(id) => navigate(`tour-${id}`)}
                      onQuote={openQuoteModal}
                    />
                  ))}
                </div>

                <h2 className="text-2xl font-bold text-gray-800 mb-6">Top Destinations</h2>
                <DestinationGrid />
              </div>
            </div>
          </div> */}
          </>
        )}

        {currentRoute === 'tours' && (
          <div className="pt-32 pb-20">
            <div className="w-full px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  All Tours & Adventures
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Discover our complete collection of extraordinary journeys around the world.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {TOURS.map((tour) => (
                  <TourCard
                    key={tour.id}
                    tour={tour}
                    onView={(id) => navigate(`tour-${id}`)}
                    onQuote={openQuoteModal}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {currentRoute === 'destinations' && (
          <div className="pt-32 pb-20">
            <div className="w-full px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Explore Destinations
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  From mountain peaks to ocean shores, discover the world's most beautiful places.
                </p>
              </div>

              <div className="max-w-7xl mx-auto">
                <DestinationGrid />
              </div>
              
            </div>
          </div>
        )}

        {currentRoute === 'about' && (
          <div className="pt-32 pb-20">
            <div className="w-full px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    About OLA
                  </h1>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    We are  Winnipeg’s very own travel experts, a full-service travel agency that deals in air ticket booking, tours & travel packages, cruises, sun destinations.
We are IATA certified, and have been Air Canada’s Platinum Circle partners continuously since 2022.
We have a team of 6 employees, 4 in office and 2 remote.
We are a group of passionate Travelers turned Travel Experts who take pride in creating immersive itineraries and delivering personalized service to every client.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
                    <p className="text-gray-600 mb-6">
                      To create transformative travel experiences that foster understanding,
                      respect for local cultures, and environmental consciousness while providing
                      our travelers with memories that last a lifetime.
                    </p>
                    <div className="space-y-4">
                      {[
                        'Sustainable Tourism Practices',
                        'Supporting Local Communities',
                        'Expert Local Partnerships',
                        'Small Group Experiences'
                      ].map((value, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                          <span className="text-gray-700">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                      alt="Our team"
                      className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-500"
                    />
                  </div>
                </div>

                <div className="text-center">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Ready to Start Your Journey?</h2>
                  <button
                    onClick={() => openQuoteModal()}
                    className="px-8 py-4 rounded-full text-white font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transform transition-all duration-300"
                    style={{ background: '#0077B6' }}
                  >
                    Plan Your Adventure
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* {currentRoute === 'contact' && (
          <div className="pt-32 pb-20">
            <div className="w-full px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    Let's Plan Your Adventure
                  </h1>
                  <p className="text-xl text-gray-600">
                    Ready to embark on your next journey? Get in touch and let's create something extraordinary together.
                  </p>
                </div>

                <div className="text-center">
                  <button
                    onClick={() => openQuoteModal()}
                    className="px-8 py-4 rounded-full text-white font-semibold text-lg shadow-xl mb-12 hover:shadow-2xl hover:scale-105 transform transition-all duration-300"
                    style={{ background: '#0077B6' }}
                  >
                    Start Planning Now
                  </button>

                  <div className="grid md:grid-cols-3 gap-8 text-center">
                    {[
                      { icon: '📧', title: 'Email', value: 'hello@OLA.com' },
                      { icon: '📞', title: 'Phone', value: '+1 (555) 123-4567' },
                      { icon: '📍', title: 'Office', value: 'San Francisco, CA' }
                    ].map((contact, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                      >
                        <div className="text-4xl mb-4">{contact.icon}</div>
                        <h3 className="font-bold text-gray-900 mb-2">{contact.title}</h3>
                        <p className="text-gray-600">{contact.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )} */}
        {currentRoute === 'contact' && (
  <div className="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white">
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Let's Plan Your Adventure
          </h1>
          <p className="text-xl text-gray-600">
            Ready to embark on your next journey? Get in touch and let's create something extraordinary together.
          </p>
        </div>

        {/* Main content: Form + Location */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
            <form className="space-y-5">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea
                  rows="4"
                  placeholder="Write your message..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                ></textarea>
              </div>
              <button
                type="submit"
                                      style={{ background: '#0077B6' }}

                className="w-full py-3 rounded-full bg-blue-600 text-white font-semibold text-lg shadow-md hover:bg-blue-700 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info / Location */}
          <div
            className="text-white rounded-2xl shadow-xl p-8 flex flex-col justify-center"
            style={{ background: '#0077B6' }}
          >
            <h2 className="text-2xl font-bold mb-6">Our Office</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <span className="text-3xl">📍</span>
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p>San Francisco, CA</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-3xl">📞</span>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-3xl">📧</span>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p>hello@OLA.com</p>
                </div> 
              </div>
          
          </div>
            <div className="mt-8">
              <iframe
                title="Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0195993507545!2d-122.4194152846811!3d37.774929779759206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064b5a2f2d1%3A0x44b0a2a3c8dfd5e1!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1673359067917!5m2!1sen!2sus"
                width="100%"
                height="250"
                allowFullScreen=""
                loading="lazy"
                className="rounded-xl shadow-md"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)}

      </main>

      <footer className="bg-gray-900 text-gray-300 py-16">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

            {/* Brand + About */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                {/* <div className="w-16 h-12 overflow-hidden rounded-xl shadow-lg bg-white flex items-center justify-center">
                <img
                  src="images/ola_logo.png"
                  alt="OLA Logo"
                  className="scale-150 origin-center object-cover"
                  style={{ background: '#0077B6' }}
                />
                </div> */}
               <div className="w-40 h-24 flex items-center justify-center overflow-hidden rounded-xl shadow-lg bg-white">
  <img
    src="images/ola_logo.png"
    alt="OLA Logo"
    className="w-full h-full object-cover scale-175"
  />
</div>




                <div>
                  <h3 className="font-bold text-2xl text-white">OLA TRAVELS</h3>
                  <p className="text-sm text-gray-400">Slogan</p>
                </div>
              </div>

              <p className="text-gray-400 max-w-md mb-6 leading-relaxed">
                Creating transformative travel experiences that connect people, cultures,
                and landscapes around the world.
              </p>

              <div className="flex items-center gap-4">
                <a href="#" className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full text-xl hover:bg-blue-600 hover:text-white transition-colors">
                  <FaFacebookF />
                </a>
                <a href="#" className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full text-xl hover:bg-pink-500 hover:text-white transition-colors">
                  <FaInstagram />
                </a>
                <a href="#" className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full text-xl hover:bg-sky-400 hover:text-white transition-colors">
                  <FaTwitter />
                </a>
                <a href="#" className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full text-xl hover:bg-green-500 hover:text-white transition-colors">
                  <FaWhatsapp />
                </a>
                <a href="#" className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full text-xl hover:bg-red-600 hover:text-white transition-colors">
                  <FaYoutube />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg text-white mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {['Tours', 'Destinations', 'About', 'Contact', 'FAQ'].map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => navigate(link.toLowerCase())}
                      className="hover:text-white transition-colors"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; 2024 OLA. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>


      {/* Enhanced Footer */}
      {/* <footer className="bg-gray-900 text-white py-16">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center gap-3 mb-6">
                  <img   
                  src="images/ola_logo.png"
                  alt="OLA Logo"
                  className="w-12 h-12 rounded-xl object-contain shadow-lg bg-white"
                  style={{ background: '#0077B6'}}
                  />
                  <div>
                    <div className="font-bold text-2xl">OLA</div>
                    <div className="text-gray-400 text-sm">Extraordinary Journeys</div>
                  </div>
                </div>
                <p className="text-gray-300 max-w-md mb-6">
                  Creating transformative travel experiences that connect people, cultures, and landscapes around the world.
                </p>
                <div className="flex gap-4">
                  {['📘', '📷', 'X', '📺'].map((icon, index) => (
                    <div 
                      key={index}
                      className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
                    >
                      {icon}
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  {['Tours', 'Destinations', 'About', 'Contact', 'FAQ'].map((link) => (
                    <li key={link}>
                      <button 
                        onClick={() => navigate(link.toLowerCase())}
                        className="text-gray-300 hover:text-white transition-colors duration-300"
                      >
                        {link}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-4">Newsletter</h4>
                <p className="text-gray-300 text-sm mb-4">
                  Get travel tips and exclusive offers delivered to your inbox.
                </p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-4 py-2 rounded-l-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                  />
                  <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-r-lg transition-colors duration-300">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
              <p>&copy; 2024 OLA. All rights reserved. | Privacy Policy | Terms of Service</p>
            </div>
          </div>
        </div>
      </footer> */}

      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        initialTourId={selectedTourId}
      />

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out 0.3s both;
        }
        
        .animate-fade-in-up-delay {
          animation: fade-in-up 0.8s ease-out 0.6s both;
        }
        
        .animate-fade-in-up-delay-2 {
          animation: fade-in-up 0.8s ease-out 0.9s both;
        }
        
        .animate-fade-in-up-delay-3 {
          animation: fade-in-up 0.8s ease-out 1.2s both;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}