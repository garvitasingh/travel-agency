import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';   
import colors from './colors';

function TourCard({ tour, onView, onQuote }) {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

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
        <div
          className="absolute inset-0"
          style={{ background: `linear-gradient(to top, rgba(0,0,0,0.6), transparent)` }}
        />

        {/* Price Badge */}
        <div
          className="absolute top-4 right-4 backdrop-blur-sm rounded-full px-3 py-1 transform hover:scale-110 transition-transform duration-300"
          style={{ backgroundColor: 'rgba(255,255,255,0.9)' }}
        >
          <div className="text-sm font-bold" style={{ color: colors.text }}>{tour.priceFrom}</div>
          {tour.originalPrice && (
            <div className="text-xs line-through" style={{ color: colors.text + '99' }}>{tour.originalPrice}</div>
          )}
        </div>

        {/* Rating */}
        <div
          className="absolute top-4 left-4 flex items-center gap-1 backdrop-blur-sm rounded-full px-2 py-1"
          style={{ backgroundColor: 'rgba(255,255,255,0.9)' }}
        >
          <span className="text-sm font-medium" style={{ color: colors.text }}>{tour.days} Days</span>
        </div>

        {/* Difficulty Badge */}
        <div
          className="absolute bottom-4 left-4 backdrop-blur-sm rounded-full px-3 py-1"
          style={{ backgroundColor: colors.primary }}
        >
          <span className="text-xs font-medium" style={{ color: colors.white }}>{tour.difficulty}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3
              className="text-xl font-bold mb-1 transition-colors group-hover:text-blue-600"
              style={{ color: colors.text }}
            >
              {tour.title}
            </h3>
            <p className="text-sm mb-3" style={{ color: colors.text + '99' }}>{tour.subtitle}</p>
          </div>
        </div>

        {/* Highlights */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tour.highlights.slice(0, 3).map((highlight, index) => (
            <span
              key={index}
              className="px-2 py-1 rounded-full hover:bg-blue-100 transition-colors cursor-default"
              style={{ background: colors.secondary + '33', color: colors.primary }}
            >
              {highlight}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button
            onClick={() => navigate(`/tours/${tour.id}`)}
            className="flex-1 px-4 py-2 border rounded-full font-medium transition-all duration-300 hover:scale-105 transform"
            style={{ borderColor: colors.text + '33', color: colors.text }}
          >
            View Details
          </button>
          <button
            onClick={() => onQuote(tour.id)}
            className="flex-1 px-4 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 transform hover:shadow-lg"
            style={{ background: colors.primary, color: colors.white }}
          >
            Book Now
          </button>
        </div>
      </div>

      {/* Hover Effect Overlay */}
      <div
        className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        style={{ background: 'linear-gradient(to bottom right, ' + colors.primary + '1A, ' + colors.accent + '1A)' }}
      />
    </div>
  );
}

export default TourCard;
