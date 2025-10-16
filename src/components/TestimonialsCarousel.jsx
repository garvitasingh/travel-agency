import React, { useEffect, useState } from 'react';
import { TESTIMONIALS } from '../data/siteData';
import colors from './colors';

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
              <div
                className="rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
                style={{ backgroundColor: colors.white }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                    style={{ border: `4px solid ${colors.background}` }}
                  />
                  <div>
                    <h4 className="font-bold" style={{ color: colors.text }}>
                      {testimonial.name}
                    </h4>
                    <p className="text-sm" style={{ color: colors.lightText }}>
                      {testimonial.location}
                    </p>
                    <div className="flex gap-1 mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} style={{ color: colors.accent, fontSize: '0.875rem' }}>
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <blockquote
                  className="text-lg leading-relaxed mb-4 italic"
                  style={{ color: colors.lightText }}
                >
                  "{testimonial.quote}"
                </blockquote>

                <div className="flex items-center justify-between text-sm">
                  <span
                    className="px-3 py-1 rounded-full"
                    style={{ backgroundColor: colors.secondary + '33', color: colors.secondary }}
                  >
                    {testimonial.tour}
                  </span>
                  <span style={{ fontFamily: 'initial', color: colors.lightText }}>
                    {new Date(testimonial.date).toLocaleDateString()}
                  </span>
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
            className="w-3 h-3 rounded-full transition-all duration-300 hover:scale-125"
            style={{
              backgroundColor:
                index === currentIndex ? colors.primary : colors.lightText + '33',
              transform: index === currentIndex ? 'scale(1.25)' : 'scale(1)',
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default TestimonialsCarousel;
