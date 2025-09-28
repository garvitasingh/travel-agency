import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';   // ✅ import navigate
// Enhanced Tour Cards

function TourCard({ tour, onView, onQuote }) {
  const [isHovered, setIsHovered] = useState(false);
 const navigate = useNavigate(); // ✅ create navigate
  const handleView = () => {
    navigate(`/tours/${tour.id}`); // ✅ redirect to tour details page
  };
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
            // onClick={() => onView(tour.id)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-full text-gray-700 font-medium hover:border-blue-500 hover:text-blue-600 transition-all duration-300 hover:scale-105 transform"
             onClick={() => navigate(`/tours/${tour.id}`)}
         >
            View Details
          </button>
          <button
             onClick={() => openQuoteModal(tour.id)} 
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
export default TourCard;