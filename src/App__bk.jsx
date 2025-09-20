// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

        

// import React, { useState, useEffect } from 'react';
// import { 
//   ChevronLeft, ChevronRight, MapPin, Star, Calendar, Users, Plane, Camera, Shield, Award, 
//   Phone, Mail, Menu, X, Instagram, Facebook, CheckCircle, ArrowRight, Clock, Globe,
//   Mountain, Compass, Heart, ThumbsUp, Quote, Send, Navigation
// } from 'lucide-react';

// const TravelAgencyWebsite = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState('home');
//   const [quoteForm, setQuoteForm] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     destination: '',
//     travelDate: '',
//     travelers: '',
//     budget: '',
//     message: ''
//   });
//   const [reviewForm, setReviewForm] = useState({
//     name: '',
//     email: '',
//     rating: 5,
//     review: ''
//   });
//   const [isScrolled, setIsScrolled] = useState(false);

//   // Color palette from the proposal
//   const colors = {
//     deepBlue: '#005F73',
//     sunsetOrange: '#FF7E36',
//     goldenSand: '#E9C46A',
//     lightBeige: '#FAF3E0'
//   };

//   const heroSlides = [
//     {
//       image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
//       title: "Discover Paradise",
//       subtitle: "Experience the world's most breathtaking destinations with our expert guidance",
//       cta: "Explore Destinations"
//     },
//     {
//       image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
//       title: "Ancient Wonders",
//       subtitle: "Journey through history and culture with our curated heritage tours",
//       cta: "View Tours"
//     },
//     {
//       image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80",
//       title: "Ocean Adventures",
//       subtitle: "Dive into crystal clear waters and pristine beaches around the globe",
//       cta: "Get Quote"
//     }
//   ];
  
//   const featuredTours = [
//     {
//       id: 1,
//       name: "Bali Cultural Journey", 
//       image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//       price: "$1,299",
//       duration: "7 days",
//       rating: 4.8,
//       reviews: 124,
//       highlights: ["Temple visits", "Rice terraces", "Traditional cuisine", "Beach relaxation"]
//     },
//     {
//       id: 2,
//       name: "Greek Island Hopping",
//       image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//       price: "$1,899",
//       duration: "10 days",
//       rating: 4.9,
//       reviews: 89,
//       highlights: ["Santorini sunset", "Mykonos nightlife", "Ancient ruins", "Island cruising"]
//     },
//     {
//       id: 3,
//       name: "Japan Discovery",
//       image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//       price: "$2,199",
//       duration: "12 days",
//       rating: 4.7,
//       reviews: 156,
//       highlights: ["Tokyo modern life", "Kyoto temples", "Mount Fuji", "Traditional ryokan"]
//     }
//   ];

//   const destinations = [
//     {
//       name: "Southeast Asia",
//       image: "https://images.unsplash.com/photo-1528181304800-259b08848526?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//       tours: 15,
//       description: "Tropical paradises and vibrant cultures await"
//     },
//     {
//       name: "Mediterranean",
//       image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//       tours: 12,
//       description: "Ancient history meets stunning coastlines"
//     },
//     {
//       name: "Northern Europe",
//       image: "https://images.unsplash.com/photo-1527004760525-67b42e84dd8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//       tours: 8,
//       description: "Fjords, forests, and fairytale cities"
//     },
//     {
//       name: "South America",
//       image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//       tours: 10,
//       description: "From Amazon rainforest to Andean peaks"
//     }
//   ];

//   const whyChooseUs = [
//     {
//       icon: <Award className="w-8 h-8" />,
//       title: "25+ Years Experience",
//       description: "Trusted by thousands of travelers worldwide"
//     },
//     {
//       icon: <Shield className="w-8 h-8" />,
//       title: "100% Secure Booking",
//       description: "Your payments and data are completely protected"
//     },
//     {
//       icon: <Users className="w-8 h-8" />,
//       title: "Local Expert Guides",
//       description: "Authentic experiences with knowledgeable locals"
//     },
//     {
//       icon: <CheckCircle className="w-8 h-8" />,
//       title: "24/7 Support",
//       description: "We're here for you before, during, and after your trip"
//     }
//   ];

//   const socialPosts = [
//     {
//       platform: 'instagram',
//       image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
//       caption: "Sunset vibes from Maldives 🌅 #TravelLife #Paradise",
//       date: "2 hours ago",
//       likes: 234
//     },
//     {
//       platform: 'facebook',
//       image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
//       caption: "Our group having an amazing time exploring ancient temples in Cambodia!",
//       date: "1 day ago",
//       likes: 89
//     },
//     {
//       platform: 'instagram',
//       image: "https://images.unsplash.com/photo-1506197603052-3cc9c3201bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
//       caption: "Northern Lights magic in Iceland ✨ #BucketList #Iceland",
//       date: "3 days ago",
//       likes: 456
//     }
//   ];

//   const customerReviews = [
//     {
//       name: "Sarah Johnson",
//       location: "New York, USA",
//       rating: 5,
//       review: "Absolutely phenomenal experience! The team arranged everything perfectly. Our Bali trip was magical and stress-free.",
//       avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
//       tour: "Bali Cultural Journey"
//     },
//     {
//       name: "Michael Chen",
//       location: "Toronto, Canada",
//       rating: 5,
//       review: "Professional service and incredible attention to detail. The Greek islands tour exceeded all expectations!",
//       avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
//       tour: "Greek Island Hopping"
//     },
//     {
//       name: "Emma Wilson",
//       location: "London, UK",
//       rating: 5,
//       review: "Best travel agency ever! They showed us hidden gems we never would have found on our own. Highly recommended!",
//       avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
//       tour: "Japan Discovery"
//     }
//   ];

//   // Handle scroll for sticky navigation
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Auto-slide for hero section
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   const handleQuoteSubmit = (e) => {
//     e.preventDefault();
//     alert('Thank you for your quote request! We will contact you within 24 hours.');
//     setQuoteForm({
//       name: '', email: '', phone: '', destination: '', travelDate: '', travelers: '', budget: '', message: ''
//     });
//   };

//   const handleReviewSubmit = (e) => {
//     e.preventDefault();
//     alert('Thank you for your review! It will be published after moderation.');
//     setReviewForm({ name: '', email: '', rating: 5, review: '' });
//   };

//   const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
//   const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

//   return (
//     <div className="min-h-screen" style={{ fontFamily: 'Georgia, serif' }}>
//       {/* Navigation */}
//       <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
//         isScrolled ? 'bg-white shadow-lg py-2' : 'bg-white/10 backdrop-blur-md py-4'
//       }`}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center">
//             <div className="flex items-center">
//               <div className={`text-2xl font-bold transition-colors duration-300 ${
//                 isScrolled ? 'text-gray-900' : 'text-white'
//               }`} style={{ fontFamily: 'serif' }}>
//                 OLA
//               </div>
//             </div>
            
//             {/* Desktop Menu */}
//             <div className="hidden md:block">
//               <div className="ml-10 flex items-baseline space-x-8">
//                 {['Home', 'Tours', 'Destinations', 'About', 'Contact'].map((item) => (
//                   <a
//                     key={item}
//                     href={`#${item.toLowerCase()}`}
//                     className={`transition-colors duration-300 hover:scale-105 ${
//                       isScrolled ? 'text-gray-700 hover:text-orange-500' : 'text-white hover:text-yellow-300'
//                     }`}
//                     style={{ fontFamily: 'sans-serif' }}
//                   >
//                     {item}
//                   </a>
//                 ))}
//                 <button 
//                   className="px-6 py-2 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
//                   style={{ 
//                     backgroundColor: colors.sunsetOrange, 
//                     color: 'white',
//                     fontFamily: 'sans-serif'
//                   }}
//                 >
//                   Get Quote
//                 </button>
//               </div>
//             </div>

//             {/* Mobile menu button */}
//             <div className="md:hidden">
//               <button
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//                 className={`transition-colors duration-300 ${
//                   isScrolled ? 'text-gray-700' : 'text-white'
//                 }`}
//               >
//                 {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isMenuOpen && (
//           <div className="md:hidden bg-white border-t">
//             <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//               {['Home', 'Tours', 'Destinations', 'About', 'Contact'].map((item) => (
//                 <a
//                   key={item}
//                   href={`#${item.toLowerCase()}`}
//                   className="block px-3 py-2 text-gray-700 hover:text-orange-500"
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   {item}
//                 </a>
//               ))}
//               <button 
//                 className="w-full mt-2 px-6 py-2 rounded-full font-semibold"
//                 style={{ backgroundColor: colors.sunsetOrange, color: 'white' }}
//               >
//                 Get Quote
//               </button>
//             </div>
//           </div>
//         )}
//       </nav>

//       {/* Hero Section */}
//       <section id="home" className="relative h-screen overflow-hidden">
//         <div className="absolute inset-0">
//           {heroSlides.map((slide, index) => (
//             <div
//               key={index}
//               className={`absolute inset-0 transition-opacity duration-1000 ${
//                 index === currentSlide ? 'opacity-100' : 'opacity-0'
//               }`}
//             >
//               <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
//               <div className="absolute inset-0 bg-black/40"></div>
//             </div>
//           ))}
//         </div>

//         <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
//           <div className="max-w-4xl mx-auto px-4">
//             <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{ fontFamily: 'serif' }}>
//               {heroSlides[currentSlide].title}
//             </h1>
//             <p className="text-xl md:text-2xl mb-8" style={{ fontFamily: 'sans-serif' }}>
//               {heroSlides[currentSlide].subtitle}
//             </p>
//             <div className="space-x-4">
//               <button 
//                 className="px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
//                 style={{ backgroundColor: colors.sunsetOrange, color: 'white' }}
//               >
//                 {heroSlides[currentSlide].cta}
//               </button>
//               <button 
//                 className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
//               >
//                 Watch Video
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Slider Controls */}
//         <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-yellow-300 transition-colors duration-300">
//           <ChevronLeft className="w-8 h-8" />
//         </button>
//         <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-yellow-300 transition-colors duration-300">
//           <ChevronRight className="w-8 h-8" />
//         </button>

//         {/* Slider Indicators */}
//         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
//           {heroSlides.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentSlide(index)}
//               className={`w-3 h-3 rounded-full transition-colors duration-300 ${
//                 index === currentSlide ? 'bg-white' : 'bg-white/50'
//               }`}
//             />
//           ))}
//         </div>
//       </section>

//       {/* Featured Tours Section */}
//       <section id="tours" className="py-20" style={{ backgroundColor: colors.lightBeige }}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: colors.deepBlue, fontFamily: 'serif' }}>
//               Featured Tours & Itineraries
//             </h2>
//             <p className="text-xl max-w-3xl mx-auto" style={{ color: colors.deepBlue, fontFamily: 'sans-serif' }}>
//               Handcrafted journeys designed to create unforgettable memories
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {featuredTours.map((tour) => (
//               <div key={tour.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transform hover:scale-105 transition-all duration-300">
//                 <div className="relative">
//                   <img src={tour.image} alt={tour.name} className="w-full h-64 object-cover" />
//                   <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold" style={{ color: colors.deepBlue }}>
//                     {tour.duration}
//                   </div>
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-2xl font-bold mb-2" style={{ color: colors.deepBlue, fontFamily: 'serif' }}>
//                     {tour.name}
//                   </h3>
//                   <div className="flex items-center mb-3">
//                     <Star className="w-4 h-4 fill-current" style={{ color: colors.goldenSand }} />
//                     <span className="ml-1 text-sm" style={{ color: colors.deepBlue }}>
//                       {tour.rating} ({tour.reviews} reviews)
//                     </span>
//                   </div>
//                   <div className="mb-4">
//                     <div className="flex flex-wrap gap-2">
//                       {tour.highlights.map((highlight, index) => (
//                         <span
//                           key={index}
//                           className="px-2 py-1 text-xs rounded-full"
//                           style={{ backgroundColor: colors.goldenSand, color: colors.deepBlue }}
//                         >
//                           {highlight}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                   <div className="flex justify-between items-center">
//                     <span className="text-2xl font-bold" style={{ color: colors.sunsetOrange }}>
//                       {tour.price}
//                     </span>
//                     <button 
//                       className="px-4 py-2 rounded-full text-sm font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
//                       style={{ backgroundColor: colors.deepBlue, color: 'white' }}
//                     >
//                       Book Now
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="text-center mt-12">
//             <button 
//               className="px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
//               style={{ backgroundColor: colors.sunsetOrange, color: 'white' }}
//             >
//               View All Tours <ArrowRight className="inline w-4 h-4 ml-2" />
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Destinations Section */}
//       <section id="destinations" className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: colors.deepBlue, fontFamily: 'serif' }}>
//               Popular Destinations
//             </h2>
//             <p className="text-xl max-w-3xl mx-auto" style={{ color: colors.deepBlue, fontFamily: 'sans-serif' }}>
//               Explore the world's most captivating locations
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {destinations.map((destination, index) => (
//               <div
//                 key={index}
//                 className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
//               >
//                 <img
//                   src={destination.image}
//                   alt={destination.name}
//                   className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
//                 <div className="absolute bottom-6 left-6 text-white">
//                   <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'serif' }}>
//                     {destination.name}
//                   </h3>
//                   <p className="text-sm mb-2" style={{ fontFamily: 'sans-serif' }}>
//                     {destination.description}
//                   </p>
//                   <span className="text-sm opacity-90">
//                     {destination.tours} tours available
//                   </span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us Section */}
//       <section className="py-20" style={{ backgroundColor: colors.deepBlue }}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'serif' }}>
//               Why Choose OLA?
//             </h2>
//             <p className="text-xl text-white/90 max-w-3xl mx-auto" style={{ fontFamily: 'sans-serif' }}>
//               We're not just a travel agency - we're your gateway to extraordinary experiences
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {whyChooseUs.map((item, index) => (
//               <div key={index} className="text-center group">
//                 <div 
//                   className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300"
//                   style={{ backgroundColor: colors.goldenSand, color: colors.deepBlue }}
//                 >
//                   {item.icon}
//                 </div>
//                 <h3 className="text-xl font-bold text-white mb-4" style={{ fontFamily: 'serif' }}>
//                   {item.title}
//                 </h3>
//                 <p className="text-white/90" style={{ fontFamily: 'sans-serif' }}>
//                   {item.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Social Media Feed Section */}
//       <section className="py-20" style={{ backgroundColor: colors.lightBeige }}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: colors.deepBlue, fontFamily: 'serif' }}>
//               Follow Our Journey
//             </h2>
//             <p className="text-xl max-w-3xl mx-auto" style={{ color: colors.deepBlue, fontFamily: 'sans-serif' }}>
//               Stay updated with our latest adventures and travel inspiration
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {socialPosts.map((post, index) => (
//               <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
//                 <img src={post.image} alt="Social post" className="w-full h-64 object-cover" />
//                 <div className="p-6">
//                   <div className="flex items-center mb-3">
//                     {post.platform === 'instagram' ? (
//                       <Instagram className="w-5 h-5 mr-2" style={{ color: colors.sunsetOrange }} />
//                     ) : (
//                       <Facebook className="w-5 h-5 mr-2" style={{ color: colors.deepBlue }} />
//                     )}
//                     <span className="text-sm" style={{ color: colors.deepBlue }}>
//                       {post.date}
//                     </span>
//                   </div>
//                   <p className="mb-3" style={{ color: colors.deepBlue, fontFamily: 'sans-serif' }}>
//                     {post.caption}
//                   </p>
//                   <div className="flex items-center">
//                     <Heart className="w-4 h-4 mr-1" style={{ color: colors.sunsetOrange }} />
//                     <span className="text-sm" style={{ color: colors.deepBlue }}>
//                       {post.likes} likes
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="text-center mt-12">
//             <div className="flex justify-center space-x-4">
//               <button 
//                 className="px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center"
//                 style={{ backgroundColor: colors.sunsetOrange, color: 'white' }}
//               >
//                 <Instagram className="w-5 h-5 mr-2" />
//                 Follow on Instagram
//               </button>
//               <button 
//                 className="px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center"
//                 style={{ backgroundColor: colors.deepBlue, color: 'white' }}
//               >
//                 <Facebook className="w-5 h-5 mr-2" />
//                 Like on Facebook
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Reviews & Ratings Section */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: colors.deepBlue, fontFamily: 'serif' }}>
//               What Our Travelers Say
//             </h2>
//             <p className="text-xl max-w-3xl mx-auto" style={{ color: colors.deepBlue, fontFamily: 'sans-serif' }}>
//               Real experiences from real travelers
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
//             {customerReviews.map((review, index) => (
//               <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-gray-100">
//                 <div className="flex items-center mb-6">
//                   <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full object-cover mr-4" />
//                   <div>
//                     <h4 className="font-bold" style={{ color: colors.deepBlue, fontFamily: 'serif' }}>
//                       {review.name}
//                     </h4>
//                     <p className="text-sm" style={{ color: colors.deepBlue }}>
//                       {review.location}
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex mb-4">
//                   {[...Array(review.rating)].map((_, i) => (
//                     <Star key={i} className="w-4 h-4 fill-current" style={{ color: colors.goldenSand }} />
//                   ))}
//                 </div>
//                 <p className="italic mb-4" style={{ color: colors.deepBlue, fontFamily: 'sans-serif' }}>
//                   <Quote className="w-4 h-4 inline mr-1" />
//                   {review.review}
//                 </p>
//                 <div className="text-sm" style={{ color: colors.sunsetOrange }}>
//                   Tour: {review.tour}
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Review Submission Form */}
//           <div className="max-w-2xl mx-auto bg-gray-50 rounded-2xl p-8">
//             <h3 className="text-2xl font-bold text-center mb-6" style={{ color: colors.deepBlue, fontFamily: 'serif' }}>
//               Share Your Experience
//             </h3>
//             <div className="space-y-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <input
//                   type="text"
//                   placeholder="Your Name"
//                   value={reviewForm.name}
//                   onChange={(e) => setReviewForm({ ...reviewForm, name: e.target.value })}
//                   className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//                 <input
//                   type="email"
//                   placeholder="Your Email"
//                   value={reviewForm.email}
//                   onChange={(e) => setReviewForm({ ...reviewForm, email: e.target.value })}
//                   className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-semibold mb-2" style={{ color: colors.deepBlue }}>
//                   Rating
//                 </label>
//                 <div className="flex space-x-2">
//                   {[1, 2, 3, 4, 5].map((star) => (
//                     <button
//                       key={star}
//                       onClick={() => setReviewForm({ ...reviewForm, rating: star })}
//                       className={`w-8 h-8 ${star <= reviewForm.rating ? 'text-yellow-400' : 'text-gray-300'}`}
//                     >
//                       <Star className="w-full h-full fill-current" />
//                     </button>
//                   ))}
//                 </div>
//               </div>
//               <textarea
//                 placeholder="Share your travel experience with us..."
//                 value={reviewForm.review}
//                 onChange={(e) => setReviewForm({ ...reviewForm, review: e.target.value })}
//                 rows="4"
//                 className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               ></textarea>
//               <button
//                 onClick={handleReviewSubmit}
//                 className="w-full py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
//                 style={{ backgroundColor: colors.sunsetOrange, color: 'white' }}
//               >
//                 Submit Review
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Get a Quote Section */}
//       <section className="py-20" style={{ backgroundColor: colors.deepBlue }}>
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'serif' }}>
//               Get Your Custom Quote
//             </h2>
//             <p className="text-xl text-white/90 max-w-3xl mx-auto" style={{ fontFamily: 'sans-serif' }}>
//               Tell us about your dream trip and we'll create a personalized itinerary just for you
//             </p>
//           </div>

//           <div className="bg-white rounded-2xl p-8 shadow-xl">
//             <div className="space-y-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <input
//                   type="text"
//                   placeholder="Full Name *"
//                   value={quoteForm.name}
//                   onChange={(e) => setQuoteForm({ ...quoteForm, name: e.target.value })}
//                   className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//                 <input
//                   type="email"
//                   placeholder="Email Address *"
//                   value={quoteForm.email}
//                   onChange={(e) => setQuoteForm({ ...quoteForm, email: e.target.value })}
//                   className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <input
//                   type="tel"
//                   placeholder="Phone Number"
//                   value={quoteForm.phone}
//                   onChange={(e) => setQuoteForm({ ...quoteForm, phone: e.target.value })}
//                   className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//                 <input
//                   type="text"
//                   placeholder="Preferred Destination"
//                   value={quoteForm.destination}
//                   onChange={(e) => setQuoteForm({ ...quoteForm, destination: e.target.value })}
//                   className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                 <input
//                   type="date"
//                   placeholder="Travel Date"
//                   value={quoteForm.travelDate}
//                   onChange={(e) => setQuoteForm({ ...quoteForm, travelDate: e.target.value })}
//                   className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//                 <select
//                   value={quoteForm.travelers}
//                   onChange={(e) => setQuoteForm({ ...quoteForm, travelers: e.target.value })}
//                   className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 >
//                   <option value="">Number of Travelers</option>
//                   <option value="1">1 Traveler</option>
//                   <option value="2">2 Travelers</option>
//                   <option value="3-5">3-5 Travelers</option>
//                   <option value="6+">6+ Travelers</option>
//                 </select>
//                 <select
//                   value={quoteForm.budget}
//                   onChange={(e) => setQuoteForm({ ...quoteForm, budget: e.target.value })}
//                   className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 >
//                   <option value="">Budget Range</option>
//                   <option value="under-1000">Under $1,000</option>
//                   <option value="1000-3000">$1,000 - $3,000</option>
//                   <option value="3000-5000">$3,000 - $5,000</option>
//                   <option value="5000+">$5,000+</option>
//                 </select>
//               </div>
//               <textarea
//                 placeholder="Tell us about your dream trip, interests, and any special requirements..."
//                 value={quoteForm.message}
//                 onChange={(e) => setQuoteForm({ ...quoteForm, message: e.target.value })}
//                 rows="4"
//                 className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               ></textarea>
//               <button
//                 onClick={handleQuoteSubmit}
//                 className="w-full py-4 rounded-lg text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
//                 style={{ backgroundColor: colors.sunsetOrange, color: 'white' }}
//               >
//                 <Send className="w-5 h-5 mr-2" />
//                 Get My Custom Quote
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Map & Contact Section */}
//       <section id="contact" className="py-20" style={{ backgroundColor: colors.lightBeige }}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: colors.deepBlue, fontFamily: 'serif' }}>
//               Visit Our Office
//             </h2>
//             <p className="text-xl max-w-3xl mx-auto" style={{ color: colors.deepBlue, fontFamily: 'sans-serif' }}>
//               Come and meet our travel experts in person
//             </p>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//             <div>
//               <div className="bg-white rounded-2xl p-8 shadow-lg">
//                 <h3 className="text-2xl font-bold mb-6" style={{ color: colors.deepBlue, fontFamily: 'serif' }}>
//                   Get in Touch
//                 </h3>
//                 <div className="space-y-6">
//                   <div className="flex items-center">
//                     <Phone className="w-6 h-6 mr-4" style={{ color: colors.sunsetOrange }} />
//                     <div>
//                       <p className="font-semibold" style={{ color: colors.deepBlue }}>Phone</p>
//                       <p style={{ color: colors.deepBlue }}>+1 (555) 123-4567</p>
//                     </div>
//                   </div>
//                   <div className="flex items-center">
//                     <Mail className="w-6 h-6 mr-4" style={{ color: colors.sunsetOrange }} />
//                     <div>
//                       <p className="font-semibold" style={{ color: colors.deepBlue }}>Email</p>
//                       <p style={{ color: colors.deepBlue }}>hello@OLA.com</p>
//                     </div>
//                   </div>
//                   <div className="flex items-center">
//                     <MapPin className="w-6 h-6 mr-4" style={{ color: colors.sunsetOrange }} />
//                     <div>
//                       <p className="font-semibold" style={{ color: colors.deepBlue }}>Address</p>
//                       <p style={{ color: colors.deepBlue }}>123 Travel Street, Adventure City, AC 12345</p>
//                     </div>
//                   </div>
//                   <div className="flex items-center">
//                     <Clock className="w-6 h-6 mr-4" style={{ color: colors.sunsetOrange }} />
//                     <div>
//                       <p className="font-semibold" style={{ color: colors.deepBlue }}>Office Hours</p>
//                       <p style={{ color: colors.deepBlue }}>Mon-Fri: 9AM-6PM, Sat: 10AM-4PM</p>
//                     </div>
//                   </div>
//                 </div>
                
//                 <div className="mt-8">
//                   <button 
//                     className="w-full py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
//                     style={{ backgroundColor: colors.deepBlue, color: 'white' }}
//                   >
//                     <Navigation className="w-5 h-5 mr-2" />
//                     Get Directions
//                   </button>
//                 </div>
//               </div>
//             </div>

//             <div>
//               <div className="bg-white rounded-2xl overflow-hidden shadow-lg h-96">
//                 <iframe
//                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.0!2d-74.0!3d40.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzAwLjAiTiA3NMKwMDAnMDAuMCJX!5e0!3m2!1sen!2sus!4v1234567890"
//                   width="100%"
//                   height="100%"
//                   style={{ border: 0 }}
//                   allowFullScreen=""
//                   loading="lazy"
//                   referrerPolicy="no-referrer-when-downgrade"
//                   title="OLA Office Location"
//                 ></iframe>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="py-12" style={{ backgroundColor: colors.deepBlue }}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             <div>
//               <div className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'serif' }}>
//                 OLA
//               </div>
//               <p className="text-white/80" style={{ fontFamily: 'sans-serif' }}>
//                 Creating unforgettable travel experiences around the world since 1999.
//               </p>
//               <div className="flex space-x-4 mt-6">
//                 <Facebook className="w-6 h-6 text-white/60 hover:text-white cursor-pointer transition-colors" />
//                 <Instagram className="w-6 h-6 text-white/60 hover:text-white cursor-pointer transition-colors" />
//               </div>
//             </div>
//             <div>
//               <h4 className="font-bold text-white mb-4" style={{ fontFamily: 'serif' }}>Quick Links</h4>
//               <ul className="space-y-2">
//                 {['Home', 'Tours', 'Destinations', 'About', 'Contact'].map((item) => (
//                   <li key={item}>
//                     <a href={`#${item.toLowerCase()}`} className="text-white/80 hover:text-white transition-colors">
//                       {item}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <div>
//               <h4 className="font-bold text-white mb-4" style={{ fontFamily: 'serif' }}>Popular Tours</h4>
//               <ul className="space-y-2">
//                 <li><a href="#" className="text-white/80 hover:text-white transition-colors">Bali Adventure</a></li>
//                 <li><a href="#" className="text-white/80 hover:text-white transition-colors">Greek Islands</a></li>
//                 <li><a href="#" className="text-white/80 hover:text-white transition-colors">Japan Discovery</a></li>
//                 <li><a href="#" className="text-white/80 hover:text-white transition-colors">European Classic</a></li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="font-bold text-white mb-4" style={{ fontFamily: 'serif' }}>Newsletter</h4>
//               <p className="text-white/80 mb-4" style={{ fontFamily: 'sans-serif' }}>
//                 Get travel tips and exclusive offers
//               </p>
//               <div className="flex">
//                 <input
//                   type="email"
//                   placeholder="Your email"
//                   className="flex-1 px-3 py-2 rounded-l-lg border-none focus:outline-none"
//                 />
//                 <button 
//                   className="px-4 py-2 rounded-r-lg font-semibold"
//                   style={{ backgroundColor: colors.sunsetOrange, color: 'white' }}
//                 >
//                   Subscribe
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div className="border-t border-white/20 mt-8 pt-8 text-center">
//             <p className="text-white/60">&copy; 2025 OLA Travel Agency. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>

//       <style jsx>{`
//         html {
//           scroll-behavior: smooth;
//         }
//       `}</style>
//     </div>
//   );
// };

// // Export as default App component
// function App() {
//   return <TravelAgencyWebsite />;
// }

// export default App;

///TODO chatgpt code here 

// import React, { useEffect, useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// // -----------------------
// // Theme constants
// // -----------------------
// const THEME = {
//   primary: '#005F73', // Deep Ocean Blue
//   secondary: '#FF7E36', // Sunset Orange
//   accent: '#E9C46A', // Golden Sand
//   bg: '#FAF3E0',
//   text: '#0f172a',
// }; 

// // -----------------------
// // Sample data (replace with CMS later)
// // -----------------------
// const TOURS = [
//   { id: 't1', title: 'Canadian Rocky Highlights', subtitle: '7 days — Banff, Lake Louise & Icefields', priceFrom: '$1,299', duration: '7 Days', img: '/images/rockies-hero.jpg', days: 7 },
//   { id: 't2', title: 'Eastern Canada Explorer', subtitle: '10 days — Montreal & Quebec City', priceFrom: '$1,899', duration: '10 Days', img: '/images/eastern-hero.jpg', days: 10 },
//   { id: 't3', title: 'Winter Aurora Escape', subtitle: '5 days — Northern Lights & Winter Activities', priceFrom: '$999', duration: '5 Days', img: '/images/winter-hero.jpg', days: 5 },
// ];

// const DESTINATIONS = [
//   { id: 'd1', name: 'Banff & Lake Louise', img: '/images/dest-banff.jpg' },
//   { id: 'd2', name: 'Montreal', img: '/images/dest-montreal.jpg' },
//   { id: 'd3', name: 'Jasper', img: '/images/dest-jasper.jpg' },
//   { id: 'd4', name: 'Quebec City', img: '/images/dest-quebec.jpg' },
// ];

// const TESTIMONIALS = [
//   { id: 1, name: 'A. Traveler', quote: 'A truly unforgettable trip — excellent guides and attention to detail.' },
//   { id: 2, name: 'M. Singh', quote: 'Personalized itinerary and smooth communications. Highly recommended!' },
//   { id: 3, name: 'L. Carter', quote: 'Fantastic hospitality and well-paced schedule. Great value.' },
// ];

// // -----------------------
// // Utility helpers
// // -----------------------
// function cls(...args){ return args.filter(Boolean).join(' '); }

// // -----------------------
// // Small UI components
// // -----------------------
// function Icon({ children }){
//   return <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/90 shadow-sm">{children}</span>;
// }

// function Nav({ onNavigate }){
//   const [scrolled, setScrolled] = useState(false);
//   useEffect(()=>{
//     const onScroll = ()=> setScrolled(window.scrollY > 40);
//     window.addEventListener('scroll', onScroll); onScroll();
//     return () => window.removeEventListener('scroll', onScroll);
//   },[]);

//   return (
//     <motion.header animate={{ backgroundColor: scrolled ? '#ffffffee' : 'transparent', boxShadow: scrolled ? '0 6px 22px rgba(15,23,42,0.06)' : 'none' }} transition={{ duration: 0.25 }} className="fixed w-full z-50">
//       <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
//         <div className="flex items-center gap-3">
//           <div style={{ background: THEME.primary }} className="w-12 h-12 rounded-md flex items-center justify-center text-white font-bold">GT</div>
//           <div>
//             <div className="font-bold text-lg" style={{ color: THEME.primary }}>Genius Travel Co.</div>
//             <div className="text-xs text-gray-500">Curated trips · Local experts</div>
//           </div>
//         </div>

//         <nav className="hidden md:flex gap-6 items-center text-sm">
//           <button onClick={()=>onNavigate('home')} className="hover:text-slate-700">Home</button>
//           <button onClick={()=>onNavigate('tours')} className="hover:text-slate-700">Tours</button>
//           <button onClick={()=>onNavigate('destinations')} className="hover:text-slate-700">Destinations</button>
//           <button onClick={()=>onNavigate('about')} className="hover:text-slate-700">About</button>
//           <button onClick={()=>onNavigate('contact')} className="px-3 py-2 rounded-md font-semibold" style={{ background: THEME.secondary, color: '#fff' }}>Get a Quote</button>
//         </nav>

//       </div>
//     </motion.header>
//   );
// }

// // Hero carousel with animated caption
// function Hero({ onExplore }){
//   const [index, setIndex] = useState(0);
//   useEffect(()=>{
//     const t = setInterval(()=> setIndex(i => (i+1)%TOURS.length), 5000);
//     return ()=>clearInterval(t);
//   },[]);

//   return (
//     <section className="relative h-screen max-h-[720px]">
//       {TOURS.map((t,i)=> (
//         <motion.div key={t.id} initial={{ opacity: i===index?1:0 }} animate={{ opacity: i===index?1:0 }} transition={{ duration: 0.8 }} className={cls('absolute inset-0 bg-center bg-cover', i===index ? '' : 'pointer-events-none')} style={{ backgroundImage: `linear-gradient(to bottom, rgba(2,6,23,0.25), rgba(2,6,23,0.35)), url(${t.img})`}}/>
//       ))}

//       <div className="absolute inset-0 flex items-center">
//         <div className="max-w-6xl mx-auto px-6 text-white">
//           <motion.div initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
//             <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">Discover your next unforgettable journey</h1>
//             <p className="mt-4 text-lg max-w-2xl">Curated itineraries, local expertise, and support every step of the way. Travel with confidence.</p>

//             <div className="mt-6 flex gap-4">
//               <button onClick={()=>onExplore('tours')} className="px-6 py-3 rounded-md font-semibold shadow-lg" style={{ background: THEME.secondary, color: '#fff' }}>Explore Tours</button>
//               <button onClick={()=>onExplore('contact')} className="px-6 py-3 rounded-md border border-white/30">Request a Quote</button>
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {/* small indicators */}
//       <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
//         {TOURS.map((_,i)=> (
//           <div key={i} className={cls('w-10 h-1 rounded-full', i===index ? 'bg-white' : 'bg-white/40')}></div>
//         ))}
//       </div>
//     </section>
//   );
// }

// function SectionHeader({ title, subtitle }){
//   return (
//     <div className="mb-6">
//       <h3 className="text-2xl font-bold" style={{ color: THEME.text }}>{title}</h3>
//       {subtitle && <p className="text-sm text-gray-600 mt-1">{subtitle}</p>}
//     </div>
//   );
// }

// function ToursGrid({ onView, onQuote }){
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//       {TOURS.map(t=> (
//         <motion.article key={t.id} whileHover={{ y: -6, scale: 1.02 }} className="bg-white rounded-xl shadow-md overflow-hidden relative">
//           <div className="h-56 bg-cover bg-center" style={{ backgroundImage: `url(${t.img})` }} />
//           <div className="p-5">
//             <div className="flex items-start justify-between">
//               <div>
//                 <h4 className="font-semibold text-lg">{t.title}</h4>
//                 <p className="text-sm text-gray-600 mt-1">{t.subtitle}</p>
//               </div>
//               <div className="text-right">
//                 <div className="text-sm text-gray-500">From</div>
//                 <div className="font-bold text-lg" style={{ color: THEME.primary }}>{t.priceFrom}</div>
//               </div>
//             </div>

//             <div className="mt-4 flex items-center gap-3">
//               <button onClick={()=>onView(t.id)} className="px-3 py-2 rounded-md border">View Details</button>
//               <button onClick={()=>onQuote(t.id)} className="px-3 py-2 rounded-md" style={{ background: THEME.secondary, color: '#fff' }}>Get a Quote</button>
//             </div>
//           </div>
//         </motion.article>
//       ))}
//     </div>
//   );
// }

// function DestinationsMosaic(){
//   return (
//     <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//       {DESTINATIONS.map(d=> (
//         <motion.div key={d.id} whileHover={{ scale: 1.03 }} className="relative rounded-lg overflow-hidden shadow-md">
//           <img src={d.img} alt={d.name} className="w-full h-40 object-cover" />
//           <div className="absolute inset-0 bg-black/20 flex items-end p-4">
//             <div className="text-white font-semibold">{d.name}</div>
//           </div>
//         </motion.div>
//       ))}
//     </div>
//   );
// }

// function Testimonials(){
//   const [i, setI] = useState(0);
//   useEffect(()=>{ const t = setInterval(()=> setI(v => (v+1)%TESTIMONIALS.length), 4000); return ()=>clearInterval(t); },[]);
//   return (
//     <div className="bg-white rounded-xl p-6 shadow-md">
//       <AnimatePresence mode="wait">
//         <motion.div key={TESTIMONIALS[i].id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.4 }}>
//           <p className="italic">“{TESTIMONIALS[i].quote}”</p>
//           <div className="mt-3 font-semibold">— {TESTIMONIALS[i].name}</div>
//         </motion.div>
//       </AnimatePresence>
//     </div>
//   );
// }

// // Multi-step modal form for quote requests
// function QuoteModal({ open, onClose, initialTourId }){
//   const [step, setStep] = useState(0);
//   const [form, setForm] = useState({ name: '', email: '', phone: '', dates: '', pax: 2, message: '', tourId: initialTourId || '' });
//   useEffect(()=> setForm(f=>({...f, tourId: initialTourId || ''})), [initialTourId]);

//   useEffect(()=>{ if(!open){ setStep(0); setForm({ name: '', email: '', phone: '', dates: '', pax: 2, message: '', tourId: initialTourId || '' }); } }, [open, initialTourId]);

//   async function submit(){
//     // basic validation
//     if(!form.name || !form.email) return alert('Please fill name and email');
//     try{
//       const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
//       if(res.ok){ alert('Request sent! We will contact you soon.'); onClose(); }
//       else alert('Failed to send request');
//     }catch(e){ alert('Failed to send request'); }
//   }

//   return (
//     <AnimatePresence>
//       {open && (
//         <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
//           <motion.div initial={{ y: 20 }} animate={{ y: 0 }} exit={{ y: 20 }} className="bg-white rounded-xl max-w-xl w-full p-6 shadow-xl">
//             <div className="flex items-center justify-between">
//               <h4 className="font-bold">Request a Quote</h4>
//               <button onClick={onClose} className="text-gray-500">Close</button>
//             </div>

//             <div className="mt-4">
//               {step === 0 && (
//                 <div className="grid gap-3">
//                   <input className="px-3 py-2 border rounded-md" placeholder="Full name" value={form.name} onChange={e=>setForm({...form, name: e.target.value})} />
//                   <input className="px-3 py-2 border rounded-md" placeholder="Email" value={form.email} onChange={e=>setForm({...form, email: e.target.value})} />
//                   <div className="flex gap-3">
//                     <input className="px-3 py-2 border rounded-md flex-1" placeholder="Phone" value={form.phone} onChange={e=>setForm({...form, phone: e.target.value})} />
//                     <input className="px-3 py-2 border rounded-md w-36" placeholder="Travel dates" value={form.dates} onChange={e=>setForm({...form, dates: e.target.value})} />
//                   </div>
//                 </div>
//               )}

//               {step === 1 && (
//                 <div className="grid gap-3">
//                   <select value={form.tourId} onChange={e=>setForm({...form, tourId: e.target.value})} className="px-3 py-2 border rounded-md">
//                     <option value="">— Select tour (optional) —</option>
//                     {TOURS.map(t=> <option key={t.id} value={t.id}>{t.title}</option>)}
//                   </select>
//                   <input type="number" min={1} value={form.pax} onChange={e=>setForm({...form, pax: e.target.value})} className="px-3 py-2 border rounded-md w-36" />
//                   <textarea value={form.message} onChange={e=>setForm({...form, message: e.target.value})} placeholder="Tell us about your trip" className="px-3 py-2 border rounded-md h-28" />
//                 </div>
//               )}

//               <div className="mt-4 flex items-center justify-between">
//                 <div className="text-sm text-gray-600">Step {step+1} of 2</div>
//                 <div className="flex gap-3">
//                   {step > 0 && <button onClick={()=>setStep(s=>s-1)} className="px-3 py-2 rounded-md border">Back</button>}
//                   {step < 1 ? <button onClick={()=>setStep(s=>s+1)} className="px-3 py-2 rounded-md" style={{ background: THEME.primary, color: '#fff' }}>Next</button> : <button onClick={submit} className="px-3 py-2 rounded-md" style={{ background: THEME.secondary, color: '#fff' }}>Send Request</button>}
//                 </div>
//               </div>
//             </div>

//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }

// function Footer(){
//   return (
//     <footer className="bg-white mt-20 border-t">
//       <div className="max-w-7xl mx-auto px-6 py-8 grid md:grid-cols-3 gap-6">
//         <div>
//           <div className="font-bold text-lg" style={{ color: THEME.primary }}>Genius Travel Co.</div>
//           <p className="text-sm text-gray-600 mt-2">Curated tours & local expertise for thoughtful travellers.</p>
//         </div>
//         <div className="text-sm text-gray-600">
//           <div className="font-semibold">Contact</div>
//           <div className="mt-2">support@geniustravel.example</div>
//           <div>+1 (555) 123-4567</div>
//         </div>
//         <div className="text-sm text-gray-600">
//           <div className="font-semibold">Follow</div>
//           <div className="mt-2">Instagram · Facebook · LinkedIn</div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// // -----------------------
// // Admin Dashboard (simple)
// // -----------------------
// function AdminPanel(){
//   const [contacts, setContacts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   useEffect(()=>{ fetchContacts(); },[]);
//   async function fetchContacts(){ setLoading(true); try{ const res = await fetch('/api/contacts'); if(res.ok){ const data = await res.json(); setContacts(data); } }catch(e){} setLoading(false); }

//   return (
//     <div className="max-w-6xl mx-auto px-6 py-12">
//       <div className="flex items-center justify-between">
//         <h3 className="text-xl font-bold">Admin — Inquiries</h3>
//         <button onClick={fetchContacts} className="px-3 py-2 rounded-md border">Refresh</button>
//       </div>

//       <div className="mt-6 bg-white rounded-xl shadow overflow-auto">
//         <table className="min-w-full">
//           <thead className="bg-gray-50">
//             <tr>
//               <th className="p-3 text-left text-sm">Name</th>
//               <th className="p-3 text-left text-sm">Email</th>
//               <th className="p-3 text-left text-sm">Tour</th>
//               <th className="p-3 text-left text-sm">Dates</th>
//               <th className="p-3 text-left text-sm">Message</th>
//             </tr>
//           </thead>
//           <tbody>
//             {loading ? <tr><td colSpan={5} className="p-6">Loading...</td></tr> : (
//               contacts.length ? contacts.map(c=> (
//                 <tr key={c._id} className="border-t">
//                   <td className="p-3 text-sm">{c.name}</td>
//                   <td className="p-3 text-sm">{c.email}</td>
//                   <td className="p-3 text-sm">{c.tourId || '-'}</td>
//                   <td className="p-3 text-sm">{c.dates || '-'}</td>
//                   <td className="p-3 text-sm">{c.message}</td>
//                 </tr>
//               )) : <tr><td colSpan={5} className="p-6">No inquiries yet.</td></tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// // -----------------------
// // Main App
// // -----------------------
// export default function App(){
//   const [route, setRoute] = useState('home');
//   const [quoteOpen, setQuoteOpen] = useState(false);
//   const [prefillTour, setPrefillTour] = useState('');

//   useEffect(()=>{ const h = window.location.hash.replace('#',''); if(h) setRoute(h); const onHash = ()=>{ const newh = window.location.hash.replace('#',''); if(newh) setRoute(newh); }; window.addEventListener('hashchange', onHash); return ()=> window.removeEventListener('hashchange', onHash); },[]);
//   function navigate(r){ setRoute(r); window.location.hash = r; }

//   function openQuote(tourId){ setPrefillTour(tourId || ''); setQuoteOpen(true); }

//   return (
//     <div className="min-h-screen bg-gray-50 text-slate-800" style={{ fontFamily: 'Lato, sans-serif' }}>
//       <Nav onNavigate={navigate} />

//       <main className="pt-20">
//         {route === 'home' && (
//           <>
//             <Hero onExplore={(r)=>navigate(r)} />

//             <section className="max-w-7xl mx-auto px-6 py-16">
//               <SectionHeader title="Featured Tours" subtitle="Hand-picked journeys to inspire your next trip" />
//               <ToursGrid onView={(id)=>navigate('tour:'+id)} onQuote={openQuote} />
//             </section>

//             <section className="max-w-7xl mx-auto px-6 py-12 bg-[linear-gradient(90deg,#fff,rgba(249,246,235,0.6))] rounded-xl mx-6">
//               <div className="grid md:grid-cols-3 gap-6 items-center">
//                 <div>
//                   <SectionHeader title="Why Travel With Us" subtitle="Expertise, local partners and personalized service" />
//                   <ul className="mt-4 space-y-3 text-sm text-gray-700">
//                     <li className="flex items-start gap-3"><Icon>⭐</Icon> Local experts & vetted partners</li>
//                     <li className="flex items-start gap-3"><Icon>🧭</Icon> Tailor-made itineraries</li>
//                     <li className="flex items-start gap-3"><Icon>📞</Icon> 24/7 customer support</li>
//                   </ul>
//                 </div>
//                 <div className="md:col-span-2">
//                   <SectionHeader title="Popular Destinations" />
//                   <DestinationsMosaic />
//                 </div>
//               </div>
//             </section>

//             <section className="max-w-7xl mx-auto px-6 py-16">
//               <SectionHeader title="What our travellers say" />
//               <Testimonials />
//             </section>

//           </>
//         )}

//         {route === 'tours' && (
//           <section className="max-w-7xl mx-auto px-6 py-16">
//             <SectionHeader title="All Tours" subtitle="Find the perfect itinerary for your travel style" />
//             <ToursGrid onView={(id)=>navigate('tour:'+id)} onQuote={openQuote} />
//           </section>
//         )}

//         {route.startsWith('tour:') && (
//           <TourDetail id={route.split(':')[1]} openQuote={openQuote} />
//         )}

//         {route === 'destinations' && (
//           <section className="max-w-7xl mx-auto px-6 py-16">
//             <SectionHeader title="Destinations" subtitle="Explore regions we operate in" />
//             <DestinationsMosaic />
//           </section>
//         )}

//         {route === 'about' && (
//           <section className="max-w-7xl mx-auto px-6 py-16">
//             <SectionHeader title="About Us" subtitle="Our mission & team" />
//             <div className="grid md:grid-cols-2 gap-6">
//               <div>
//                 <p className="text-gray-700">Genius Travel Co. crafts thoughtful travel experiences with a focus on local insight, sustainability, and safety. We design itineraries that reflect authentic experiences and measurable value.</p>
//                 <ul className="mt-4 text-sm text-gray-700 space-y-2">
//                   <li>✓ 10+ years of experience</li>
//                   <li>✓ Local partners & guides</li>
//                   <li>✓ Customizable itineraries</li>
//                 </ul>
//               </div>
//               <div>
//                 <div className="bg-white p-6 rounded-xl shadow">
//                   <div className="font-semibold">Meet the team</div>
//                   <div className="mt-4 space-y-3">
//                     <div className="flex items-center gap-3"><div className="w-12 h-12 rounded-full bg-gray-100"/> <div><div className="font-semibold">Rohit Rana</div><div className="text-sm text-gray-600">Founder</div></div></div>
//                     <div className="flex items-center gap-3"><div className="w-12 h-12 rounded-full bg-gray-100"/> <div><div className="font-semibold">Garvita Singh</div><div className="text-sm text-gray-600">Operations</div></div></div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>
//         )}

//         {route === 'contact' && (
//           <section className="max-w-3xl mx-auto px-6 py-16">
//             <SectionHeader title="Get a Quote" subtitle="Tell us your preferences and we will provide a personalized quote" />
//             <div className="bg-white p-6 rounded-xl shadow">
//               <p className="text-sm text-gray-600">Use the quick form or request a full itinerary. We usually respond within 24-48 hours.</p>
//               <div className="mt-6 flex gap-3">
//                 <button className="px-4 py-2 rounded-md" style={{ background: THEME.primary, color: '#fff' }} onClick={()=>openQuote('')}>Quick Quote</button>
//                 <button className="px-4 py-2 rounded-md border" onClick={()=>openQuote('')}>Detailed Request</button>
//               </div>
//             </div>
//           </section>
//         )}

//         {route === 'admin' && (
//           <section className="pt-8"><AdminPanel /></section>
//         )}

//       </main>

//       <Footer />

//       <QuoteModal open={quoteOpen} onClose={()=>setQuoteOpen(false)} initialTourId={prefillTour} />

//       <div className="fixed bottom-6 right-6">
//         <button onClick={()=>{ const pw = prompt('Enter admin demo password'); if(pw==='admin123') navigate('admin'); else alert('Wrong password (demo)'); }} className="bg-white px-3 py-2 rounded-md shadow">Admin</button>
//       </div>

//     </div>
//   );
// }

// // -----------------------
// // Additional components used by TourDetail
// // -----------------------
// function TourDetail({ id, openQuote }){
//   const tour = TOURS.find(t=>t.id === id);
//   if(!tour) return <div className="max-w-4xl mx-auto px-6 py-16">Tour not found</div>;

//   return (
//     <section className="max-w-6xl mx-auto px-6 py-16">
//       <div className="grid md:grid-cols-2 gap-8">
//         <div>
//           <img src={tour.img} alt={tour.title} className="w-full h-96 object-cover rounded-xl shadow" />
//           <div className="mt-4 grid grid-cols-3 gap-3">
//             <img src={tour.img} alt="" className="h-24 w-full object-cover rounded" />
//             <img src={tour.img} alt="" className="h-24 w-full object-cover rounded" />
//             <img src={tour.img} alt="" className="h-24 w-full object-cover rounded" />
//           </div>
//         </div>
//         <div>
//           <h2 className="text-2xl font-bold">{tour.title}</h2>
//           <div className="mt-2 text-sm text-gray-600">{tour.subtitle}</div>
//           <div className="mt-4 flex items-center gap-4">
//             <div className="text-lg font-bold" style={{ color: THEME.primary }}>{tour.priceFrom}</div>
//             <div className="text-sm text-gray-600">{tour.duration}</div>
//           </div>

//           <div className="mt-6">
//             <h4 className="font-semibold">Highlights</h4>
//             <ul className="mt-2 text-sm text-gray-700 space-y-2">
//               <li>• Scenic drives through the Rockies</li>
//               <li>• Small-group guided tours and local experiences</li>
//               <li>• Optional activities (skiing, glacier walk)</li>
//             </ul>
//           </div>

//           <div className="mt-6 flex gap-3">
//             <button onClick={()=>openQuote(tour.id)} className="px-4 py-2 rounded-md" style={{ background: THEME.secondary, color: '#fff' }}>Request Quote</button>
//             <button className="px-4 py-2 rounded-md border">Download PDF</button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


// ///TODO chatgpt+cluade code here

// import React, { useEffect, useState, useRef } from 'react';
// import { motion, AnimatePresence, useScroll, useTransform, useInView } from 'framer-motion';

// // Enhanced Theme with modern palette
// const THEME = {
//   primary: '#0F172A',     // Rich Dark Navy
//   secondary: '#3B82F6',   // Vibrant Blue
//   accent: '#F59E0B',      // Golden Amber
//   success: '#10B981',     // Emerald Green
//   gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//   surface: '#FFFFFF',
//   background: '#F8FAFC',
//   text: '#1E293B',
//   textLight: '#64748B',
//   glass: 'rgba(255, 255, 255, 0.1)',
// };

// // Enhanced sample data with more details
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
//     rating: 4.9,
//     reviews: 127,
//     bestTime: 'Oct-Nov, Mar-May',
//     included: ['Accommodation', 'All Meals', 'Local Guide', 'Transportation', 'Permits'],
//     itinerary: [
//       { day: 1, title: 'Arrival in Kathmandu', description: 'Airport transfer and welcome dinner' },
//       { day: 2, title: 'Temple Tour', description: 'Explore ancient temples and local markets' },
//       { day: 3, title: 'Mountain Journey Begins', description: 'Scenic drive to base camp' }
//     ]
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
//     rating: 4.8,
//     reviews: 89,
//     bestTime: 'Nov-Mar',
//     included: ['Luxury Accommodation', 'Photography Guide', 'Winter Gear', 'All Activities', 'Airport Transfers']
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
//     rating: 5.0,
//     reviews: 156,
//     bestTime: 'May-Sep',
//     included: ['Luxury Yacht', 'Private Chef', 'All Excursions', 'Wine Tastings', 'Cultural Guide']
//   }
// ];

// const DESTINATIONS = [
//   {
//     id: 'd1',
//     name: 'Nepal Himalayas',
//     country: 'Nepal',
//     img: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
//     description: 'Home to the world\'s highest peaks and ancient Buddhist culture.',
//     toursCount: 8,
//     bestTime: 'Oct-Nov, Mar-May',
//     highlights: ['Mount Everest', 'Buddhist Monasteries', 'Sherpa Culture']
//   },
//   {
//     id: 'd2',
//     name: 'Northern Norway',
//     country: 'Norway',
//     img: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
//     description: 'Dramatic fjords, midnight sun, and the magical Northern Lights.',
//     toursCount: 5,
//     bestTime: 'Nov-Mar',
//     highlights: ['Aurora Borealis', 'Fjords', 'Midnight Sun']
//   },
//   {
//     id: 'd3',
//     name: 'Greek Islands',
//     country: 'Greece',
//     img: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
//     description: 'Crystal-clear waters, white-washed villages, and ancient history.',
//     toursCount: 12,
//     bestTime: 'May-Sep',
//     highlights: ['Ancient Ruins', 'Island Hopping', 'Mediterranean Cuisine']
//   },
//   {
//     id: 'd4',
//     name: 'Patagonia',
//     country: 'Chile & Argentina',
//     img: 'https://images.unsplash.com/photo-1518709268805-4e9042af2ac0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
//     description: 'Pristine wilderness, towering peaks, and endless adventure.',
//     toursCount: 6,
//     bestTime: 'Nov-Mar',
//     highlights: ['Torres del Paine', 'Glaciers', 'Wildlife']
//   }
// ];

// const TESTIMONIALS = [
//   {
//     id: 1,
//     name: 'Sarah Chen',
//     location: 'San Francisco, CA',
//     avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
//     quote: 'The Himalayan odyssey was life-changing. Every detail was perfectly planned, and our guide was incredibly knowledgeable.',
//     rating: 5,
//     tour: 'Himalayan Odyssey',
//     date: '2024-03-15'
//   },
//   {
//     id: 2,
//     name: 'Marcus Johnson',
//     location: 'London, UK',
//     avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
//     quote: 'Witnessing the Aurora Borealis was magical. The photography guidance helped me capture memories that will last forever.',
//     rating: 5,
//     tour: 'Aurora Borealis Quest',
//     date: '2024-02-20'
//   },
//   {
//     id: 3,
//     name: 'Isabella Rodriguez',
//     location: 'Barcelona, Spain',
//     avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
//     quote: 'The Mediterranean yacht experience exceeded all expectations. Pure luxury combined with authentic cultural experiences.',
//     rating: 5,
//     tour: 'Mediterranean Soul',
//     date: '2024-07-10'
//   }
// ];

// // Utility functions
// const fadeInUp = {
//   initial: { opacity: 0, y: 40 },
//   animate: { opacity: 1, y: 0 },
//   transition: { duration: 0.6, ease: "easeOut" }
// };

// const staggerContainer = {
//   animate: {
//     transition: {
//       staggerChildren: 0.1
//     }
//   }
// };

// function AnimatedSection({ children, className = "" }) {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, threshold: 0.1 });

//   return (
//     <motion.div
//       ref={ref}
//       initial="initial"
//       animate={isInView ? "animate" : "initial"}
//       variants={staggerContainer}
//       className={className}
//     >
//       {children}
//     </motion.div>
//   );
// }

// // Modern Glassmorphism Navigation
// function Navigation({ onNavigate, currentRoute }) {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 50);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <motion.header
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       className={`fixed w-full z-50 transition-all duration-500 ${
//         isScrolled 
//           ? 'bg-white/80 backdrop-blur-lg border-b border-white/20 shadow-lg' 
//           : 'bg-transparent'
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-6 py-4">
//         <div className="flex items-center justify-between">
//           {/* Logo */}
//           <motion.div 
//             whileHover={{ scale: 1.05 }}
//             className="flex items-center gap-3 cursor-pointer"
//             onClick={() => onNavigate('home')}
//           >
//             <div className="relative">
//               <div 
//                 className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg"
//                 style={{ background: THEME.gradient }}
//               >
//                 ✈️
//               </div>
//               <div className="absolute -top-1 -right-1 w-4 h-4 bg-amber-400 rounded-full animate-pulse"></div>
//             </div>
//             <div>
//               <div className={`font-bold text-xl ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
//                 OLA
//               </div>
//               <div className={`text-xs ${isScrolled ? 'text-gray-600' : 'text-white/80'}`}>
//                 Extraordinary Journeys
//               </div>
//             </div>
//           </motion.div>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center gap-8">
//             {['Home', 'Tours', 'Destinations', 'About', 'Contact'].map((item) => (
//               <motion.button
//                 key={item}
//                 whileHover={{ y: -2 }}
//                 onClick={() => onNavigate(item.toLowerCase())}
//                 className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
//                   currentRoute === item.toLowerCase()
//                     ? isScrolled ? 'text-blue-600' : 'text-amber-400'
//                     : isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-amber-400'
//                 }`}
//               >
//                 {item}
//                 {currentRoute === item.toLowerCase() && (
//                   <motion.div
//                     layoutId="activeTab"
//                     className="absolute bottom-0 left-0 right-0 h-0.5 bg-current rounded-full"
//                   />
//                 )}
//               </motion.button>
//             ))}
            
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => onNavigate('contact')}
//               className="px-6 py-3 rounded-full font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl"
//               style={{ background: THEME.gradient }}
//             >
//               Book Now
//             </motion.button>
//           </nav>

//           {/* Mobile Menu Button */}
//           <motion.button
//             whileTap={{ scale: 0.95 }}
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             className={`md:hidden p-2 rounded-lg ${isScrolled ? 'text-gray-700' : 'text-white'}`}
//           >
//             <div className="w-6 h-6 flex flex-col justify-center gap-1">
//               <motion.div 
//                 animate={{ rotate: isMobileMenuOpen ? 45 : 0, y: isMobileMenuOpen ? 6 : 0 }}
//                 className="w-full h-0.5 bg-current origin-center"
//               />
//               <motion.div 
//                 animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
//                 className="w-full h-0.5 bg-current"
//               />
//               <motion.div 
//                 animate={{ rotate: isMobileMenuOpen ? -45 : 0, y: isMobileMenuOpen ? -6 : 0 }}
//                 className="w-full h-0.5 bg-current origin-center"
//               />
//             </div>
//           </motion.button>
//         </div>

//         {/* Mobile Menu */}
//         <AnimatePresence>
//           {isMobileMenuOpen && (
//             <motion.div
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: 'auto' }}
//               exit={{ opacity: 0, height: 0 }}
//               className="md:hidden mt-4 bg-white/90 backdrop-blur-lg rounded-xl border border-white/20 overflow-hidden"
//             >
//               <div className="p-4 space-y-2">
//                 {['Home', 'Tours', 'Destinations', 'About', 'Contact'].map((item) => (
//                   <motion.button
//                     key={item}
//                     whileHover={{ x: 10 }}
//                     onClick={() => {
//                       onNavigate(item.toLowerCase());
//                       setIsMobileMenuOpen(false);
//                     }}
//                     className="block w-full text-left px-4 py-3 rounded-lg text-gray-700 hover:bg-blue-50 transition-colors"
//                   >
//                     {item}
//                   </motion.button>
//                 ))}
//                 <motion.button
//                   whileHover={{ scale: 1.02 }}
//                   onClick={() => {
//                     onNavigate('contact');
//                     setIsMobileMenuOpen(false);
//                   }}
//                   className="w-full mt-4 px-6 py-3 rounded-full font-semibold text-white"
//                   style={{ background: THEME.gradient }}
//                 >
//                   Book Now
//                 </motion.button>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </motion.header>
//   );
// }

// // Enhanced Hero Section with Parallax
// function HeroSection({ onExplore }) {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const { scrollY } = useScroll();
//   const y = useTransform(scrollY, [0, 500], [0, 150]);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % TOURS.length);
//     }, 6000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section className="relative h-screen min-h-[600px] overflow-hidden">
//       {/* Background Images */}
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={currentSlide}
//           initial={{ scale: 1.1, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           exit={{ scale: 0.9, opacity: 0 }}
//           transition={{ duration: 1.2 }}
//           className="absolute inset-0"
//         >
//           <motion.div
//             style={{ y }}
//             className="w-full h-[120%] bg-cover bg-center"
//             style={{
//               backgroundImage: `linear-gradient(135deg, rgba(15,23,42,0.4), rgba(59,130,246,0.3)), url(${TOURS[currentSlide].img})`
//             }}
//           />
//         </motion.div>
//       </AnimatePresence>

//       {/* Floating Elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {[...Array(6)].map((_, i) => (
//           <motion.div
//             key={i}
//             animate={{
//               y: [0, -30, 0],
//               rotate: [0, 180, 360],
//             }}
//             transition={{
//               duration: 10 + i * 2,
//               repeat: Infinity,
//               ease: "linear"
//             }}
//             className={`absolute w-4 h-4 bg-white/20 rounded-full`}
//             style={{
//               left: `${10 + i * 15}%`,
//               top: `${20 + i * 10}%`,
//             }}
//           />
//         ))}
//       </div>

//       {/* Content */}
//       <div className="relative z-10 h-full flex items-center">
//         <div className="max-w-7xl mx-auto px-6 text-white">
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//             className="max-w-4xl"
//           >
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.6, delay: 0.5 }}
//               className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
//             >
//               <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
//               <span className="text-sm font-medium">Now Booking 2024-2025 Adventures</span>
//             </motion.div>

//             <motion.h1
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.7 }}
//               className="text-5xl md:text-7xl font-bold leading-tight mb-6"
//             >
//               Discover Your Next
//               <motion.span
//                 animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
//                 transition={{ duration: 3, repeat: Infinity }}
//                 className="block bg-gradient-to-r from-amber-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"
//                 style={{ backgroundSize: '200% 200%' }}
//               >
//                 Epic Journey
//               </motion.span>
//             </motion.h1>

//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.9 }}
//               className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl leading-relaxed"
//             >
//               Embark on extraordinary adventures crafted by local experts. From mystical mountains to pristine coastlines, every journey tells a story.
//             </motion.p>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 1.1 }}
//               className="flex flex-col sm:flex-row gap-4"
//             >
//               <motion.button
//                 whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={() => onExplore('tours')}
//                 className="px-8 py-4 rounded-full font-semibold text-lg text-white shadow-xl transition-all duration-300"
//                 style={{ background: THEME.gradient }}
//               >
//                 Explore Adventures
//               </motion.button>
              
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={() => onExplore('contact')}
//                 className="px-8 py-4 rounded-full border-2 border-white/30 text-white font-semibold text-lg backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
//               >
//                 Plan My Trip
//               </motion.button>
//             </motion.div>

//             {/* Stats */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 1.3 }}
//               className="flex gap-8 mt-12"
//             >
//               {[
//                 { number: '500+', label: 'Happy Travelers' },
//                 { number: '25+', label: 'Destinations' },
//                 { number: '4.9★', label: 'Average Rating' }
//               ].map((stat, index) => (
//                 <div key={index} className="text-center">
//                   <div className="text-2xl font-bold text-amber-400">{stat.number}</div>
//                   <div className="text-sm text-white/70">{stat.label}</div>
//                 </div>
//               ))}
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>

//       {/* Slide Indicators */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
//         {TOURS.map((_, index) => (
//           <motion.button
//             key={index}
//             whileHover={{ scale: 1.2 }}
//             onClick={() => setCurrentSlide(index)}
//             className={`w-3 h-3 rounded-full transition-all duration-300 ${
//               index === currentSlide ? 'bg-white scale-125' : 'bg-white/40'
//             }`}
//           />
//         ))}
//       </div>

//       {/* Scroll Indicator */}
//       <motion.div
//         animate={{ y: [0, 10, 0] }}
//         transition={{ duration: 2, repeat: Infinity }}
//         className="absolute bottom-8 right-8 text-white/60"
//       >
//         <div className="flex flex-col items-center gap-2">
//           <span className="text-sm">Scroll</span>
//           <div className="w-px h-8 bg-white/40"></div>
//         </div>
//       </motion.div>
//     </section>
//   );
// }

// // Enhanced Tour Cards with 3D Effects
// function TourCard({ tour, onView, onQuote }) {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <motion.div
//       variants={fadeInUp}
//       whileHover={{ y: -10, rotateY: 5 }}
//       onHoverStart={() => setIsHovered(true)}
//       onHoverEnd={() => setIsHovered(false)}
//       className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
//       style={{ transformStyle: 'preserve-3d' }}
//     >
//       {/* Image */}
//       <div className="relative h-64 overflow-hidden">
//         <motion.img
//           animate={{ scale: isHovered ? 1.1 : 1 }}
//           transition={{ duration: 0.6 }}
//           src={tour.img}
//           alt={tour.title}
//           className="w-full h-full object-cover"
//         />
        
//         {/* Gradient Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
//         {/* Price Badge */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 0.2 }}
//           className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1"
//         >
//           <div className="text-sm font-bold text-gray-900">{tour.priceFrom}</div>
//           {tour.originalPrice && (
//             <div className="text-xs text-gray-500 line-through">{tour.originalPrice}</div>
//           )}
//         </motion.div>

//         {/* Rating */}
//         <div className="absolute top-4 left-4 flex items-center gap-1 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
//           <span className="text-amber-400 text-sm">★</span>
//           <span className="text-sm font-medium">{tour.rating}</span>
//         </div>

//         {/* Difficulty Badge */}
//         <div className="absolute bottom-4 left-4 bg-blue-500/90 backdrop-blur-sm rounded-full px-3 py-1">
//           <span className="text-white text-xs font-medium">{tour.difficulty}</span>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="p-6">
//         <div className="flex items-start justify-between mb-3">
//           <div className="flex-1">
//             <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
//               {tour.title}
//             </h3>
//             <p className="text-gray-600 text-sm mb-3">{tour.subtitle}</p>
//           </div>
//         </div>

//         {/* Tour Details */}
//         <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
//           <div className="flex items-center gap-1">
//             <span>📅</span>
//             <span>{tour.duration}</span>
//           </div>
//           <div className="flex items-center gap-1">
//             <span>👥</span>
//             <span>{tour.groupSize}</span>
//           </div>
//           <div className="flex items-center gap-1">
//             <span>⭐</span>
//             <span>{tour.reviews} reviews</span>
//           </div>
//         </div>

//         {/* Highlights */}
//         <div className="flex flex-wrap gap-2 mb-4">
//           {tour.highlights.slice(0, 3).map((highlight, index) => (
//             <span
//               key={index}
//               className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full"
//             >
//               {highlight}
//             </span>
//           ))}
//         </div>

//         {/* Action Buttons */}
//         <div className="flex gap-3">
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={() => onView(tour.id)}
//             className="flex-1 px-4 py-2 border border-gray-300 rounded-full text-gray-700 font-medium hover:border-blue-500 hover:text-blue-600 transition-colors"
//           >
//             View Details
//           </motion.button>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={() => onQuote(tour.id)}
//             className="flex-1 px-4 py-2 rounded-full text-white font-medium transition-all duration-300"
//             style={{ background: THEME.gradient }}
//           >
//             Book Now
//           </motion.button>
//         </div>
//       </div>

//       {/* Hover Effect Overlay */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: isHovered ? 1 : 0 }}
//         className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 pointer-events-none"
//       />
//     </motion.div>
//   );
// }

// // Interactive Destination Grid
// function DestinationGrid() {
//   const [selectedDestination, setSelectedDestination] = useState(null);

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//       {DESTINATIONS.map((destination, index) => (
//         <motion.div
//           key={destination.id}
//           variants={fadeInUp}
//           whileHover={{ y: -5 }}
//           onClick={() => setSelectedDestination(destination)}
//           className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
//         >
//           <motion.img
//             whileHover={{ scale: 1.1 }}
//             transition={{ duration: 0.6 }}
//             src={destination.img}
//             alt={destination.name}
//             className="w-full h-full object-cover"
//           />
          
//           <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          
//           <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.1 }}
//             >
//               <h3 className="text-xl font-bold mb-1">{destination.name}</h3>
//               <p className="text-sm text-white/80 mb-2">{destination.country}</p>
//               <p className="text-sm text-white/70 mb-3 line-clamp-2">{destination.description}</p>
//               <div className="flex items-center justify-between">
//                 <span className="text-sm bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
//                   {destination.toursCount} Tours
//                 </span>
//                 <span className="text-xs text-white/60">{destination.bestTime}</span>
//               </div>
//             </motion.div>
//           </div>

//           {/* Hover Overlay */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileHover={{ opacity: 1 }}
//             className="absolute inset-0 bg-blue-500/20 flex items-center justify-center"
//           >
//             <motion.div
//               initial={{ scale: 0 }}
//               whileHover={{ scale: 1 }}
//               className="bg-white/90 backdrop-blur-sm rounded-full p-4"
//             >
//               <span className="text-2xl">🔍</span>
//             </motion.div>
//           </motion.div>
//         </motion.div>
//       ))}

//       {/* Destination Modal */}
//       <AnimatePresence>
//         {selectedDestination && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setSelectedDestination(null)}
//             className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
//           >
//             <motion.div
//               initial={{ scale: 0.8, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.8, opacity: 0 }}
//               onClick={(e) => e.stopPropagation()}
//               className="bg-white rounded-2xl overflow-hidden max-w-2xl w-full shadow-2xl"
//             >
//               <img
//                 src={selectedDestination.img}
//                 alt={selectedDestination.name}
//                 className="w-full h-64 object-cover"
//               />
//               <div className="p-6">
//                 <h3 className="text-2xl font-bold mb-2">{selectedDestination.name}</h3>
//                 <p className="text-gray-600 mb-4">{selectedDestination.description}</p>
//                 <div className="grid grid-cols-3 gap-4 text-center text-sm">
//                   <div>
//                     <div className="font-bold text-blue-600">{selectedDestination.toursCount}</div>
//                     <div className="text-gray-500">Tours Available</div>
//                   </div>
//                   <div>
//                     <div className="font-bold text-green-600">{selectedDestination.bestTime}</div>
//                     <div className="text-gray-500">Best Time</div>
//                   </div>
//                   <div>
//                     <div className="font-bold text-purple-600">{selectedDestination.highlights.length}</div>
//                     <div className="text-gray-500">Highlights</div>
//                   </div>
//                 </div>
//                 <div className="mt-4">
//                   <h4 className="font-semibold mb-2">Key Highlights:</h4>
//                   <div className="flex flex-wrap gap-2">
//                     {selectedDestination.highlights.map((highlight, index) => (
//                       <span
//                         key={index}
//                         className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
//                       >
//                         {highlight}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className="w-full mt-6 px-6 py-3 rounded-full text-white font-semibold"
//                   style={{ background: THEME.gradient }}
//                 >
//                   Explore Tours in {selectedDestination.name}
//                 </motion.button>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

// // Enhanced Testimonials Carousel
// function TestimonialsCarousel() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="relative">
//       <div className="overflow-hidden">
//         <motion.div
//           animate={{ x: -currentIndex * 100 + '%' }}
//           transition={{ duration: 0.5, ease: "easeInOut" }}
//           className="flex"
//         >
//           {TESTIMONIALS.map((testimonial) => (
//             <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
//               >
//                 <div className="flex items-center gap-4 mb-6">
//                   <img
//                     src={testimonial.avatar}
//                     alt={testimonial.name}
//                     className="w-16 h-16 rounded-full object-cover"
//                   />
//                   <div>
//                     <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
//                     <p className="text-gray-600 text-sm">{testimonial.location}</p>
//                     <div className="flex gap-1 mt-1">
//                       {[...Array(testimonial.rating)].map((_, i) => (
//                         <span key={i} className="text-amber-400 text-sm">★</span>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
                
//                 <blockquote className="text-gray-700 text-lg leading-relaxed mb-4 italic">
//                   "{testimonial.quote}"
//                 </blockquote>
                
//                 <div className="flex items-center justify-between text-sm text-gray-500">
//                   <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full">
//                     {testimonial.tour}
//                   </span>
//                   <span>{new Date(testimonial.date).toLocaleDateString()}</span>
//                 </div>
//               </motion.div>
//             </div>
//           ))}
//         </motion.div>
//       </div>

//       {/* Navigation Dots */}
//       <div className="flex justify-center gap-3 mt-8">
//         {TESTIMONIALS.map((_, index) => (
//           <motion.button
//             key={index}
//             whileHover={{ scale: 1.2 }}
//             onClick={() => setCurrentIndex(index)}
//             className={`w-3 h-3 rounded-full transition-all duration-300 ${
//               index === currentIndex ? 'bg-blue-500 scale-125' : 'bg-gray-300'
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// // Enhanced Quote Modal with Multi-step Form
// function QuoteModal({ isOpen, onClose, initialTourId }) {
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     personalInfo: { name: '', email: '', phone: '', country: '' },
//     travelInfo: { destination: '', dates: '', duration: '', travelers: 1, budget: '' },
//     preferences: { accommodation: '', activities: [], dietary: '', special: '' },
//     tourId: initialTourId || ''
//   });

//   const totalSteps = 3;

//   useEffect(() => {
//     if (initialTourId) {
//       setFormData(prev => ({ ...prev, tourId: initialTourId }));
//     }
//   }, [initialTourId]);

//   const handleSubmit = async () => {
//     // Simulate API call
//     try {
//       await new Promise(resolve => setTimeout(resolve, 1500));
//       alert('Quote request submitted successfully! We\'ll contact you within 24 hours.');
//       onClose();
//       setStep(1);
//       setFormData({
//         personalInfo: { name: '', email: '', phone: '', country: '' },
//         travelInfo: { destination: '', dates: '', duration: '', travelers: 1, budget: '' },
//         preferences: { accommodation: '', activities: [], dietary: '', special: '' },
//         tourId: ''
//       });
//     } catch (error) {
//       alert('Failed to submit request. Please try again.');
//     }
//   };

//   const nextStep = () => {
//     if (step < totalSteps) setStep(step + 1);
//   };

//   const prevStep = () => {
//     if (step > 1) setStep(step - 1);
//   };

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
//           onClick={onClose}
//         >
//           <motion.div
//             initial={{ scale: 0.9, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             exit={{ scale: 0.9, opacity: 0 }}
//             onClick={(e) => e.stopPropagation()}
//             className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
//           >
//             {/* Header */}
//             <div className="p-6 border-b border-gray-200">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <h3 className="text-2xl font-bold text-gray-900">Plan Your Journey</h3>
//                   <p className="text-gray-600 mt-1">Step {step} of {totalSteps}</p>
//                 </div>
//                 <button
//                   onClick={onClose}
//                   className="p-2 hover:bg-gray-100 rounded-full transition-colors"
//                 >
//                   ❌
//                 </button>
//               </div>
              
//               {/* Progress Bar */}
//               <div className="mt-4 bg-gray-200 rounded-full h-2">
//                 <motion.div
//                   initial={{ width: 0 }}
//                   animate={{ width: `${(step / totalSteps) * 100}%` }}
//                   className="h-full rounded-full"
//                   style={{ background: THEME.gradient }}
//                 />
//               </div>
//             </div>

//             {/* Form Content */}
//             <div className="p-6">
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={step}
//                   initial={{ opacity: 0, x: 20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   exit={{ opacity: 0, x: -20 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   {step === 1 && (
//                     <div className="space-y-4">
//                       <h4 className="text-lg font-semibold mb-4">Personal Information</h4>
//                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                         <input
//                           type="text"
//                           placeholder="Full Name *"
//                           value={formData.personalInfo.name}
//                           onChange={(e) => setFormData(prev => ({
//                             ...prev,
//                             personalInfo: { ...prev.personalInfo, name: e.target.value }
//                           }))}
//                           className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                         />
//                         <input
//                           type="email"
//                           placeholder="Email Address *"
//                           value={formData.personalInfo.email}
//                           onChange={(e) => setFormData(prev => ({
//                             ...prev,
//                             personalInfo: { ...prev.personalInfo, email: e.target.value }
//                           }))}
//                           className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                         />
//                         <input
//                           type="tel"
//                           placeholder="Phone Number"
//                           value={formData.personalInfo.phone}
//                           onChange={(e) => setFormData(prev => ({
//                             ...prev,
//                             personalInfo: { ...prev.personalInfo, phone: e.target.value }
//                           }))}
//                           className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                         />
//                         <select
//                           value={formData.personalInfo.country}
//                           onChange={(e) => setFormData(prev => ({
//                             ...prev,
//                             personalInfo: { ...prev.personalInfo, country: e.target.value }
//                           }))}
//                           className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                         >
//                           <option value="">Select Country</option>
//                           <option value="US">United States</option>
//                           <option value="CA">Canada</option>
//                           <option value="UK">United Kingdom</option>
//                           <option value="AU">Australia</option>
//                           <option value="DE">Germany</option>
//                           <option value="FR">France</option>
//                           <option value="JP">Japan</option>
//                           <option value="Other">Other</option>
//                         </select>
//                       </div>
//                     </div>
//                   )}

//                   {step === 2 && (
//                     <div className="space-y-4">
//                       <h4 className="text-lg font-semibold mb-4">Travel Details</h4>
//                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                         <select
//                           value={formData.travelInfo.destination}
//                           onChange={(e) => setFormData(prev => ({
//                             ...prev,
//                             travelInfo: { ...prev.travelInfo, destination: e.target.value }
//                           }))}
//                           className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                         >
//                           <option value="">Select Destination</option>
//                           {DESTINATIONS.map(dest => (
//                             <option key={dest.id} value={dest.name}>{dest.name}</option>
//                           ))}
//                           <option value="Custom">Custom Destination</option>
//                         </select>
//                         <input
//                           type="date"
//                           value={formData.travelInfo.dates}
//                           onChange={(e) => setFormData(prev => ({
//                             ...prev,
//                             travelInfo: { ...prev.travelInfo, dates: e.target.value }
//                           }))}
//                           className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                         />
//                         <select
//                           value={formData.travelInfo.duration}
//                           onChange={(e) => setFormData(prev => ({
//                             ...prev,
//                             travelInfo: { ...prev.travelInfo, duration: e.target.value }
//                           }))}
//                           className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                         >
//                           <option value="">Trip Duration</option>
//                           <option value="3-5 days">3-5 days</option>
//                           <option value="1 week">1 week</option>
//                           <option value="2 weeks">2 weeks</option>
//                           <option value="3+ weeks">3+ weeks</option>
//                         </select>
//                         <input
//                           type="number"
//                           min="1"
//                           placeholder="Number of Travelers"
//                           value={formData.travelInfo.travelers}
//                           onChange={(e) => setFormData(prev => ({
//                             ...prev,
//                             travelInfo: { ...prev.travelInfo, travelers: parseInt(e.target.value) }
//                           }))}
//                           className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                         />
//                       </div>
//                       <select
//                         value={formData.travelInfo.budget}
//                         onChange={(e) => setFormData(prev => ({
//                           ...prev,
//                           travelInfo: { ...prev.travelInfo, budget: e.target.value }
//                         }))}
//                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       >
//                         <option value="">Budget Range (per person)</option>
//                         <option value="under-2000">Under $2,000</option>
//                         <option value="2000-5000">$2,000 - $5,000</option>
//                         <option value="5000-10000">$5,000 - $10,000</option>
//                         <option value="10000+">$10,000+</option>
//                       </select>
//                     </div>
//                   )}

//                   {step === 3 && (
//                     <div className="space-y-4">
//                       <h4 className="text-lg font-semibold mb-4">Preferences & Special Requests</h4>
//                       <select
//                         value={formData.preferences.accommodation}
//                         onChange={(e) => setFormData(prev => ({
//                           ...prev,
//                           preferences: { ...prev.preferences, accommodation: e.target.value }
//                         }))}
//                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       >
//                         <option value="">Accommodation Preference</option>
//                         <option value="budget">Budget-friendly</option>
//                         <option value="mid-range">Mid-range</option>
//                         <option value="luxury">Luxury</option>
//                         <option value="unique">Unique experiences (glamping, etc.)</option>
//                       </select>
                      
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-2">
//                           Interested Activities (select multiple)
//                         </label>
//                         <div className="grid grid-cols-2 gap-2">
//                           {['Adventure Sports', 'Cultural Tours', 'Wildlife', 'Photography', 'Culinary', 'Wellness'].map(activity => (
//                             <label key={activity} className="flex items-center gap-2">
//                               <input
//                                 type="checkbox"
//                                 className="rounded text-blue-500"
//                                 onChange={(e) => {
//                                   const activities = formData.preferences.activities;
//                                   if (e.target.checked) {
//                                     setFormData(prev => ({
//                                       ...prev,
//                                       preferences: {
//                                         ...prev.preferences,
//                                         activities: [...activities, activity]
//                                       }
//                                     }));
//                                   } else {
//                                     setFormData(prev => ({
//                                       ...prev,
//                                       preferences: {
//                                         ...prev.preferences,
//                                         activities: activities.filter(a => a !== activity)
//                                       }
//                                     }));
//                                   }
//                                 }}
//                               />
//                               <span className="text-sm">{activity}</span>
//                             </label>
//                           ))}
//                         </div>
//                       </div>

//                       <input
//                         type="text"
//                         placeholder="Dietary Requirements"
//                         value={formData.preferences.dietary}
//                         onChange={(e) => setFormData(prev => ({
//                           ...prev,
//                           preferences: { ...prev.preferences, dietary: e.target.value }
//                         }))}
//                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       />

//                       <textarea
//                         placeholder="Special requests or additional information..."
//                         value={formData.preferences.special}
//                         onChange={(e) => setFormData(prev => ({
//                           ...prev,
//                           preferences: { ...prev.preferences, special: e.target.value }
//                         }))}
//                         rows="4"
//                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       />
//                     </div>
//                   )}
//                 </motion.div>
//               </AnimatePresence>
//             </div>

//             {/* Footer */}
//             <div className="p-6 border-t border-gray-200 flex justify-between">
//               <button
//                 onClick={prevStep}
//                 disabled={step === 1}
//                 className="px-6 py-2 text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 Previous
//               </button>
              
//               <div className="flex gap-3">
//                 {step < totalSteps ? (
//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     onClick={nextStep}
//                     className="px-6 py-3 rounded-full text-white font-semibold"
//                     style={{ background: THEME.gradient }}
//                   >
//                     Next Step
//                   </motion.button>
//                 ) : (
//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     onClick={handleSubmit}
//                     className="px-6 py-3 rounded-full text-white font-semibold"
//                     style={{ background: THEME.gradient }}
//                   >
//                     Submit Request
//                   </motion.button>
//                 )}
//               </div>
//             </div>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }

// // Main App Component
// export default function App() {
//   const [currentRoute, setCurrentRoute] = useState('home');
//   const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
//   const [selectedTourId, setSelectedTourId] = useState('');

//   const navigate = (route) => {
//     setCurrentRoute(route);
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   const openQuoteModal = (tourId = '') => {
//     setSelectedTourId(tourId);
//     setIsQuoteModalOpen(true);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Navigation onNavigate={navigate} currentRoute={currentRoute} />

//       <main>
//         {currentRoute === 'home' && (
//           <>
//             <HeroSection onExplore={navigate} />
            
//             {/* Featured Tours Section */}
//             <AnimatedSection className="py-20 px-6">
//               <div className="max-w-7xl mx-auto">
//                 <motion.div variants={fadeInUp} className="text-center mb-16">
//                   <motion.div
//                     initial={{ opacity: 0, scale: 0 }}
//                     whileInView={{ opacity: 1, scale: 1 }}
//                     className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4"
//                   >
//                     <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
//                     Featured Adventures
//                   </motion.div>
//                   <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//                     Curated for the
//                     <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Extraordinary</span>
//                   </h2>
//                   <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                     Hand-picked journeys that go beyond the ordinary. Each adventure is crafted with local expertise and genuine care.
//                   </p>
//                 </motion.div>

//                 <motion.div
//                   variants={staggerContainer}
//                   className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//                 >
//                   {TOURS.map((tour) => (
//                     <TourCard
//                       key={tour.id}
//                       tour={tour}
//                       onView={(id) => navigate(`tour-${id}`)}
//                       onQuote={openQuoteModal}
//                     />
//                   ))}
//                 </motion.div>
//               </div>
//             </AnimatedSection>

//             {/* Why Choose Us Section */}
//             <AnimatedSection className="py-20 px-6 bg-gradient-to-br from-blue-50 to-purple-50">
//               <div className="max-w-7xl mx-auto">
//                 <div className="grid lg:grid-cols-2 gap-16 items-center">
//                   <motion.div variants={fadeInUp}>
//                     <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//                       Why Choose
//                       <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> OLA</span>
//                     </h2>
//                     <p className="text-xl text-gray-600 mb-8">
//                       We don't just plan trips - we create transformative experiences that stay with you forever.
//                     </p>
                    
//                     <div className="space-y-6">
//                       {[
//                         {
//                           icon: '🌟',
//                           title: 'Expert Local Guides',
//                           description: 'Passionate locals who know hidden gems and authentic experiences.'
//                         },
//                         {
//                           icon: '🎯',
//                           title: 'Tailored Experiences',
//                           description: 'Every journey is customized to your interests and travel style.'
//                         },
//                         {
//                           icon: '🛡️',
//                           title: '24/7 Support',
//                           description: 'Complete peace of mind with round-the-clock assistance.'
//                         },
//                         {
//                           icon: '💎',
//                           title: 'Exclusive Access',
//                           description: 'Unique experiences and locations not available to regular tourists.'
//                         }
//                       ].map((feature, index) => (
//                         <motion.div
//                           key={index}
//                           variants={fadeInUp}
//                           whileHover={{ x: 10 }}
//                           className="flex items-start gap-4 p-4 rounded-lg hover:bg-white/50 transition-colors"
//                         >
//                           <div className="text-3xl">{feature.icon}</div>
//                           <div>
//                             <h3 className="font-bold text-lg text-gray-900 mb-1">{feature.title}</h3>
//                             <p className="text-gray-600">{feature.description}</p>
//                           </div>
//                         </motion.div>
//                       ))}
//                     </div>
//                   </motion.div>

//                   <motion.div variants={fadeInUp} className="relative">
//                     <div className="relative z-10">
//                       <img
//                         src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
//                         alt="Travel Experience"
//                         className="rounded-2xl shadow-2xl"
//                       />
//                       <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl">
//                         <div className="text-center">
//                           <div className="text-3xl font-bold text-blue-600">98%</div>
//                           <div className="text-sm text-gray-600">Satisfaction Rate</div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="absolute top-8 left-8 w-24 h-24 bg-amber-400 rounded-full opacity-20"></div>
//                     <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-400 rounded-full opacity-20"></div>
//                   </motion.div>
//                 </div>
//               </div>
//             </AnimatedSection>

//             {/* Destinations Section */}
//             <AnimatedSection className="py-20 px-6">
//               <div className="max-w-7xl mx-auto">
//                 <motion.div variants={fadeInUp} className="text-center mb-16">
//                   <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//                     Explore Amazing
//                     <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"> Destinations</span>
//                   </h2>
//                   <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                     From mystical mountains to pristine coastlines, discover the world's most captivating destinations.
//                   </p>
//                 </motion.div>
                
//                 <DestinationGrid />
//               </div>
//             </AnimatedSection>

//             {/* Testimonials Section */}
//             <AnimatedSection className="py-20 px-6 bg-gray-900 text-white">
//               <div className="max-w-6xl mx-auto">
//                 <motion.div variants={fadeInUp} className="text-center mb-16">
//                   <h2 className="text-4xl md:text-5xl font-bold mb-4">
//                     Stories from Our
//                     <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent"> Travelers</span>
//                   </h2>
//                   <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//                     Real experiences from real adventurers who've journeyed with us.
//                   </p>
//                 </motion.div>
                
//                 <TestimonialsCarousel />
//               </div>
//             </AnimatedSection>

//             {/* CTA Section */}
//             <AnimatedSection className="py-20 px-6">
//               <div className="max-w-4xl mx-auto text-center">
//                 <motion.div
//                   variants={fadeInUp}
//                   className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl p-12 text-white relative overflow-hidden"
//                 >
//                   <div className="relative z-10">
//                     <h2 className="text-4xl md:text-5xl font-bold mb-6">
//                       Ready for Your Next Adventure?
//                     </h2>
//                     <p className="text-xl mb-8 text-blue-100">
//                       Let's create an unforgettable journey tailored just for you.
//                     </p>
//                     <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                       <motion.button
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                         onClick={() => openQuoteModal()}
//                         className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300"
//                       >
//                         Plan My Journey
//                       </motion.button>
//                       <motion.button
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                         onClick={() => navigate('tours')}
//                         className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
//                       >
//                         Browse Tours
//                       </motion.button>
//                     </div>
//                   </div>
                  
//                   {/* Background decorations */}
//                   <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
//                   <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
//                 </motion.div>
//               </div>
//             </AnimatedSection>
//           </>
//         )}

//         {currentRoute === 'tours' && (
//           <div className="pt-32 pb-20 px-6">
//             <div className="max-w-7xl mx-auto">
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="text-center mb-16"
//               >
//                 <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//                   All Tours & Adventures
//                 </h1>
//                 <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                   Discover our complete collection of extraordinary journeys around the world.
//                 </p>
//               </motion.div>
              
//               <motion.div
//                 initial="initial"
//                 animate="animate"
//                 variants={staggerContainer}
//                 className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//               >
//                 {TOURS.map((tour) => (
//                   <TourCard
//                     key={tour.id}
//                     tour={tour}
//                     onView={(id) => navigate(`tour-${id}`)}
//                     onQuote={openQuoteModal}
//                   />
//                 ))}
//               </motion.div>
//             </div>
//           </div>
//         )}

//         {currentRoute === 'destinations' && (
//           <div className="pt-32 pb-20 px-6">
//             <div className="max-w-7xl mx-auto">
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="text-center mb-16"
//               >
//                 <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//                   Explore Destinations
//                 </h1>
//                 <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                   From mountain peaks to ocean shores, discover the world's most beautiful places.
//                 </p>
//               </motion.div>
              
//               <DestinationGrid />
//             </div>
//           </div>
//         )}

//         {currentRoute === 'about' && (
//           <div className="pt-32 pb-20 px-6">
//             <div className="max-w-4xl mx-auto">
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="text-center mb-16"
//               >
//                 <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
//                   About OLA
//                 </h1>
//                 <p className="text-xl text-gray-600 leading-relaxed">
//                   We believe that travel is more than just visiting places—it's about creating connections, 
//                   understanding cultures, and experiencing the extraordinary. Founded by passionate travelers, 
//                   OLA curates authentic adventures that leave lasting impacts on both travelers and 
//                   the communities they visit.
//                 </p>
//               </motion.div>

//               <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
//                 <motion.div
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: 0.2 }}
//                 >
//                   <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
//                   <p className="text-gray-600 mb-6">
//                     To create transformative travel experiences that foster understanding, 
//                     respect for local cultures, and environmental consciousness while providing 
//                     our travelers with memories that last a lifetime.
//                   </p>
//                   <div className="space-y-4">
//                     {[
//                       'Sustainable Tourism Practices',
//                       'Supporting Local Communities',
//                       'Expert Local Partnerships',
//                       'Small Group Experiences'
//                     ].map((value, index) => (
//                       <div key={index} className="flex items-center gap-3">
//                         <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
//                         <span className="text-gray-700">{value}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </motion.div>
                
//                 <motion.div
//                   initial={{ opacity: 0, x: 20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: 0.4 }}
//                 >
//                   <img
//                     src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
//                     alt="Our team"
//                     className="rounded-2xl shadow-lg"
//                   />
//                 </motion.div>
//               </div>

//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.6 }}
//                 className="text-center"
//               >
//                 <h2 className="text-3xl font-bold text-gray-900 mb-8">Ready to Start Your Journey?</h2>
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={() => openQuoteModal()}
//                   className="px-8 py-4 rounded-full text-white font-semibold text-lg shadow-xl"
//                   style={{ background: THEME.gradient }}
//                 >
//                   Plan Your Adventure
//                 </motion.button>
//               </motion.div>
//             </div>
//           </div>
//         )}

//         {currentRoute === 'contact' && (
//           <div className="pt-32 pb-20 px-6">
//             <div className="max-w-4xl mx-auto">
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="text-center mb-16"
//               >
//                 <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//                   Let's Plan Your Adventure
//                 </h1>
//                 <p className="text-xl text-gray-600">
//                   Ready to embark on your next journey? Get in touch and let's create something extraordinary together.
//                 </p>
//               </motion.div>

//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.2 }}
//                 className="text-center"
//               >
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={() => openQuoteModal()}
//                   className="px-8 py-4 rounded-full text-white font-semibold text-lg shadow-xl mb-12"
//                   style={{ background: THEME.gradient }}
//                 >
//                   Start Planning Now
//                 </motion.button>

//                 <div className="grid md:grid-cols-3 gap-8 text-center">
//                   {[
//                     { icon: '📧', title: 'Email', value: 'hello@OLA.com' },
//                     { icon: '📞', title: 'Phone', value: '+1 (555) 123-4567' },
//                     { icon: '📍', title: 'Office', value: 'San Francisco, CA' }
//                   ].map((contact, index) => (
//                     <motion.div
//                       key={index}
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ delay: 0.4 + index * 0.1 }}
//                       className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
//                     >
//                       <div className="text-4xl mb-4">{contact.icon}</div>
//                       <h3 className="font-bold text-gray-900 mb-2">{contact.title}</h3>
//                       <p className="text-gray-600">{contact.value}</p>
//                     </motion.div>
//                   ))}
//                 </div>
//               </motion.div>
//             </div>
//           </div>
//         )}
//       </main>

//       {/* Enhanced Footer */}
//       <footer className="bg-gray-900 text-white py-16">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             <div className="col-span-1 md:col-span-2">
//               <div className="flex items-center gap-3 mb-6">
//                 <div 
//                   className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-xl"
//                   style={{ background: THEME.gradient }}
//                 >
//                   ✈️
//                 </div>
//                 <div>
//                   <div className="font-bold text-2xl">OLA</div>
//                   <div className="text-gray-400 text-sm">Extraordinary Journeys</div>
//                 </div>
//               </div>
//               <p className="text-gray-300 max-w-md mb-6">
//                 Creating transformative travel experiences that connect people, cultures, and landscapes around the world.
//               </p>
//               <div className="flex gap-4">
//                 {['📘', '📷', '🐦', '📺'].map((icon, index) => (
//                   <motion.div
//                     key={index}
//                     whileHover={{ scale: 1.1, y: -2 }}
//                     className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors"
//                   >
//                     {icon}
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
            
//             <div>
//               <h4 className="font-bold text-lg mb-4">Quick Links</h4>
//               <ul className="space-y-2">
//                 {['Tours', 'Destinations', 'About', 'Contact', 'FAQ'].map((link) => (
//                   <li key={link}>
//                     <button 
//                       onClick={() => navigate(link.toLowerCase())}
//                       className="text-gray-300 hover:text-white transition-colors"
//                     >
//                       {link}
//                     </button>
//                   </li>
//                 ))}
//               </ul>
//             </div>
            
//             <div>
//               <h4 className="font-bold text-lg mb-4">Newsletter</h4>
//               <p className="text-gray-300 text-sm mb-4">
//                 Get travel tips and exclusive offers delivered to your inbox.
//               </p>
//               <div className="flex">
//                 <input
//                   type="email"
//                   placeholder="Your email"
//                   className="flex-1 px-4 py-2 rounded-l-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//                 <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-r-lg transition-colors">
//                   Subscribe
//                 </button>
//               </div>
//             </div>
//           </div>
          
//           <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
//             <p>&copy; 2024 OLA. All rights reserved. | Privacy Policy | Terms of Service</p>
//           </div>
//         </div>
//       </footer>

//       <QuoteModal 
//         isOpen={isQuoteModalOpen} 
//         onClose={() => setIsQuoteModalOpen(false)} 
//         initialTourId={selectedTourId}
//       />
//     </div>
//   );
// } 

import React, { useEffect, useState, useRef } from 'react';

// Enhanced Theme with modern palette
const THEME = {
  primary: '#0F172A',     // Rich Dark Navy
  secondary: '#3B82F6',   // Vibrant Blue
  accent: '#F59E0B',      // Golden Amber
  success: '#10B981',     // Emerald Green
  gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  surface: '#FFFFFF',
  background: '#F8FAFC',
  text: '#1E293B',
  textLight: '#64748B',
  glass: 'rgba(255, 255, 255, 0.1)',
};

// Enhanced sample data with more details
const TOURS = [
  {
    id: 't1',
    title: 'Himalayan Odyssey',
    subtitle: 'Sacred peaks, ancient monasteries & mountain villages',
    description: 'Experience the mystical beauty of the Himalayas with expert local guides, comfortable accommodations, and carefully planned itineraries.',
    priceFrom: '$2,499',
    originalPrice: '$2,999',
    duration: '12 Days',
    difficulty: 'Moderate',
    groupSize: '8-12 people',
    img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    highlights: ['Sacred Monasteries', 'Mountain Villages', 'Expert Guides', 'Cultural Immersion'],
    rating: 4.9,
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
    img: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    highlights: ['Aurora Photography', 'Ice Hotel Stay', 'Husky Sledding', 'Arctic Cuisine'],
    rating: 4.8,
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
    img: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    highlights: ['Luxury Yacht', 'Private Beaches', 'Wine Tastings', 'Historical Sites'],
    rating: 5.0,
    reviews: 156,
    bestTime: 'May-Sep',
    included: ['Luxury Yacht', 'Private Chef', 'All Excursions', 'Wine Tastings', 'Cultural Guide']
  }
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
    highlights: ['Mount Everest', 'Buddhist Monasteries', 'Sherpa Culture']
  },
  {
    id: 'd2',
    name: 'Northern Norway',
    country: 'Norway',
    img: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Dramatic fjords, midnight sun, and the magical Northern Lights.',
    toursCount: 5,
    bestTime: 'Nov-Mar',
    highlights: ['Aurora Borealis', 'Fjords', 'Midnight Sun']
  },
  {
    id: 'd3',
    name: 'Greek Islands',
    country: 'Greece',
    img: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Crystal-clear waters, white-washed villages, and ancient history.',
    toursCount: 12,
    bestTime: 'May-Sep',
    highlights: ['Ancient Ruins', 'Island Hopping', 'Mediterranean Cuisine']
  },
  {
    id: 'd4',
    name: 'Patagonia',
    country: 'Chile & Argentina',
    img: 'https://images.unsplash.com/photo-1518709268805-4e9042af2ac0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Pristine wilderness, towering peaks, and endless adventure.',
    toursCount: 6,
    bestTime: 'Nov-Mar',
    highlights: ['Torres del Paine', 'Glaciers', 'Wildlife']
  }
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

// Modern Navigation
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
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
                <div  
                className="flex items-center gap-3 cursor-pointer transform hover:scale-105 transition-transform duration-300"
                onClick={() => onNavigate('home')}
                > 
                <div className="relative">
                  <img   
                  src="images/ola_logo.png"
                  alt="OLA Logo"
                  className="w-12 h-12 rounded-xl object-contain shadow-lg bg-white"
                  style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}
                  />
                  {/* <div className="absolute -top-1 -right-1 w-4 h-4 bg-amber-400 rounded-full animate-pulse"></div> */}
                </div>
                <div>
                  <div className={`font-bold text-xl ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
                  OLA
                  </div>
                  <div className={`text-xs ${isScrolled ? 'text-gray-600' : 'text-white/80'}`}>
                  Extraordinary Journeys
                  </div> 
                </div>
                </div>

                {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {['Home', 'Tours', 'Destinations', 'About', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => onNavigate(item.toLowerCase())}
                className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:transform hover:scale-105 ${
                  currentRoute === item.toLowerCase()
                    ? isScrolled ? 'text-blue-600 bg-blue-50' : 'text-amber-400 bg-white/10'
                    : isScrolled ? 'text-gray-700 hover:text-blue-600 hover:bg-gray-50' : 'text-white hover:text-amber-400 hover:bg-white/10'
                }`}
              >
                {item}
              </button>
            ))}
            
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 rounded-full font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}
            >
              Book Now
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
          >
            <div className="w-6 h-6 flex flex-col justify-center gap-1">
              <div className={`w-full h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <div className={`w-full h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
              <div className={`w-full h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 bg-white/95 backdrop-blur-lg rounded-xl border border-gray-200 overflow-hidden shadow-xl">
            <div className="p-4 space-y-2">
              {['Home', 'Tours', 'Destinations', 'About', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    onNavigate(item.toLowerCase());
                    setIsMobileMenuOpen(false);
                  }}
                  className="block w-full text-left px-4 py-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                >
                  {item}
                </button>
              ))}
              <button
                onClick={() => {
                  onNavigate('contact');
                  setIsMobileMenuOpen(false);
                }}
                className="w-full mt-4 px-6 py-3 rounded-full font-semibold text-white"
                style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}
              >
                Book Now
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

// Enhanced Hero Section
function HeroSection({ onExplore }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % TOURS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Background Images */}
      {TOURS.map((tour, index) => (
        <div
          key={tour.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="w-full h-full bg-cover bg-center transform hover:scale-105 transition-transform duration-10000"
            style={{
              backgroundImage: `linear-gradient(135deg, rgba(15,23,42,0.4), rgba(59,130,246,0.3)), url(${tour.img})`
            }}
          />
        </div>
      ))}

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-4 h-4 bg-white/20 rounded-full animate-float"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + i * 8}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${8 + i}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="w-full px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 animate-bounce-slow">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium">Now Booking 2025-2026 Adventures</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 animate-fade-in-up">
              Discover Your Next
              <div 
                className="bg-gradient-to-r from-amber-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient"
              >
                Epic Journey
              </div>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-up-delay">
              Embark on extraordinary adventures crafted by local experts. From mystical mountains to pristine coastlines, every journey tells a story.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up-delay-2">
              <button
                onClick={() => onExplore('tours')}
                className="px-8 py-4 rounded-full font-semibold text-lg text-white shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 transform"
                style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}
              >
                Explore Adventures
              </button>
              
              <button
                onClick={() => onExplore('contact')}
                className="px-8 py-4 rounded-full border-2 border-white/30 text-white font-semibold text-lg backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:scale-105 transform"
              >
                Plan My Trip
              </button>
            </div>

            {/* Stats */}
            <div className="flex justify-center gap-8 mt-12 animate-fade-in-up-delay-3">
              {[
                { number: '500+', label: 'Happy Travelers' },
                { number: '25+', label: 'Destinations' },
                { number: '4.9★', label: 'Average Rating' }
              ].map((stat, index) => (
                <div key={index} className="text-center transform hover:scale-110 transition-transform duration-300">
                  <div className="text-2xl font-bold text-amber-400">{stat.number}</div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
        {TOURS.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
              index === currentSlide ? 'bg-white scale-125' : 'bg-white/40'
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 text-white/60 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm">Scroll</span>
          <div className="w-px h-8 bg-white/40"></div>
          <div className="text-lg">↓</div>
        </div>
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
      className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl transform hover:scale-105 hover:-translate-y-2 ${
        isHovered ? 'shadow-2xl' : ''
      }`}
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={tour.img}
          alt={tour.title}
          className={`w-full h-full object-cover transition-transform duration-700 ${
            isHovered ? 'scale-110' : 'scale-100'
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
          <span className="text-amber-400 text-sm">★</span>
          <span className="text-sm font-medium">{tour.rating}</span>
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
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
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
        </div>

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
            style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}
          >
            Book Now
          </button>
        </div>
      </div>

      {/* Hover Effect Overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 pointer-events-none transition-opacity duration-500 ${
          isHovered ? 'opacity-100' : 'opacity-0'
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
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> Journey</span>
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
                    {post.platform === 'instagram' ? '📷' : '📘'}
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
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    <span className="text-xs text-gray-500">Live</span>
                  </div>
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
            <button className="px-6 py-3 rounded-full font-semibold text-white transition-all duration-300 hover:shadow-lg hover:scale-105 transform flex items-center gap-2"
              style={{ background: 'linear-gradient(45deg, #833ab4, #fd1d1d, #fcb045)' }}
            >
              <span>📷</span>
              Follow on Instagram
            </button>
            <button className="px-6 py-3 rounded-full font-semibold text-white transition-all duration-300 hover:shadow-lg hover:scale-105 transform flex items-center gap-2"
              style={{ background: 'linear-gradient(45deg, #1877f2, #42a5f5)' }}
            >
              <span>📘</span>
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
                style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}
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
            className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
              index === currentIndex ? 'bg-blue-500 scale-125' : 'bg-gray-300'
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
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
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
                style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}
              >
                Next Step
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="px-6 py-3 rounded-full text-white font-semibold hover:scale-105 transform transition-all duration-300"
                style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}
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
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Extraordinary</span>
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Hand-picked journeys that go beyond the ordinary. Each adventure is crafted with local expertise and genuine care.
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
                      <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> OLA</span>
                    </h2>
                    <p className="text-xl text-gray-600 mb-8">
                      We don't just plan trips - we create transformative experiences that stay with you forever.
                    </p>
                    
                    <div className="space-y-6">
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
                      <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl hover:scale-110 transform transition-transform duration-300">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-blue-600">98%</div>
                          <div className="text-sm text-gray-600">Satisfaction Rate</div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-8 left-8 w-24 h-24 bg-amber-400 rounded-full opacity-20 animate-pulse"></div>
                    <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-400 rounded-full opacity-20 animate-bounce"></div>
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
                    <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"> Destinations</span>
                  </h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    From mystical mountains to pristine coastlines, discover the world's most captivating destinations.
                  </p>
                </div>
                
                <div className="max-w-7xl mx-auto">
                  <DestinationGrid />
                </div>
              </div>
            </AnimatedSection>

            {/* Testimonials Section */}
            <AnimatedSection className="py-20 bg-gray-900 text-white">
              <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 max-w-6xl mx-auto">
                  <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    Stories from Our
                    <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent"> Travelers</span>
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Real experiences from real adventurers who've journeyed with us.
                  </p>
                </div>
                
                <div className="max-w-4xl mx-auto">
                  <TestimonialsCarousel />
                </div>
              </div>
            </AnimatedSection>

            {/* CTA Section */}
            <AnimatedSection className="py-20">
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
                    
                    {/* Background decorations */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full transform -translate-y-32 translate-x-32"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full transform translate-y-24 -translate-x-24"></div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
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
                    We believe that travel is more than just visiting places—it's about creating connections, 
                    understanding cultures, and experiencing the extraordinary. Founded by passionate travelers, 
                    OLA curates authentic adventures that leave lasting impacts on both travelers and 
                    the communities they visit.
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
                    style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}
                  >
                    Plan Your Adventure
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {currentRoute === 'contact' && (
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
                    style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}
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
        )}
      </main>

      {/* Enhanced Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center gap-3 mb-6">
                  <img   
                  src="images/ola_logo.png"
                  alt="OLA Logo"
                  className="w-12 h-12 rounded-xl object-contain shadow-lg bg-white"
                  style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}
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
      </footer>

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