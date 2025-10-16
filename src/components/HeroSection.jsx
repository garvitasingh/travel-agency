import React, { useEffect, useState } from 'react';
import { TOURS, Slider } from '../data/siteData';
import { useNavigate } from 'react-router-dom';
import colors from './colors';

function HeroSection({ onExplore }) {
  const navigate = useNavigate();
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
              backgroundImage: `linear-gradient(135deg, rgba(15,23,42,0.4), ${colors.primary}4D), url(${tour.img})`
            }}
          />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="w-full px-4 sm:px-6 lg:px-8" style={{ color: colors.white }}>
          <div className="max-w-4xl mx-auto text-center transition-opacity duration-700">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4" style={{ color: colors.white }}>
              {currentTour.title}
            </h1>
            <p className="text-xl md:text-2xl mb-4" style={{ color: colors.white + 'E6' }}>
              {currentTour.subtitle}
            </p>
            <p className="text-lg mb-8 max-w-2xl mx-auto leading-relaxed" style={{ color: colors.white + 'CC' }}>
              {currentTour.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onExplore('tours')}
                className="px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:scale-105 transition-transform"
                style={{ background: colors.primary, color: colors.white }}
              >
                Explore {currentTour.title}
              </button>
              <button
                onClick={() => onExplore('contact')}
                className="px-8 py-4 rounded-full border-2 font-semibold text-lg hover:bg-white/10 transition-all"
                style={{ color: colors.white, borderColor: colors.white + '4D' }}
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
            className="w-3 h-3 rounded-full transition-all duration-300 hover:scale-125"
            style={{
              background: index === currentSlide ? colors.white : colors.white + '66',
              transform: index === currentSlide ? 'scale(1.25)' : 'scale(1)',
            }}
          />
        ))}
      </div>
    </section>
  );
}

export default HeroSection;
