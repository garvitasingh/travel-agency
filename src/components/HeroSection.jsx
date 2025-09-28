import React, { useEffect, useState, useRef } from 'react';
import { TOURS, DESTINATIONS, Slider } from '../data/siteData';
import { useNavigate } from 'react-router-dom';

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
export default HeroSection;