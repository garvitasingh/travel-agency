import React, { useState } from 'react';
import { TOURS, DESTINATIONS } from '../data/siteData';
import { useNavigate } from 'react-router-dom';
import colors from './colors';

function ToursAndTravelers({ openQuoteModal }) {
  const [selectedDest, setSelectedDest] = useState(null);
  const navigate = useNavigate();

  const filteredTours = selectedDest
    ? TOURS.filter(t => {
        const destination = DESTINATIONS.find(d => d.name === selectedDest);
        return destination && t.destinationId === destination.id;
      })
    : TOURS;

  return (
    <div style={{ backgroundColor: colors.background }} className="pt-36 pb-24 min-h-screen">
      <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto">

        <div className="text-center mb-10">
          <h1 style={{ color: colors.text }} className="text-4xl md:text-5xl font-bold mb-4">
            Tours & Destinations
          </h1>
        </div>

        <div style={{ borderColor: colors.lightText + '33' }} className="border-t mb-6"></div>

        <section className="">
          <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto">

            {/* DESTINATIONS */}
            <div className="mb-10">

              {/* Desktop Sidebar Grid */}
              <div 
                className="hidden md:grid grid-cols-1 gap-3 w-64 float-left mr-10 sticky top-28 
                           max-h-[120vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent rounded-xl"
              >
                <h3 style={{ color: colors.text }} className="font-bold text-xl mb-4">Destinations</h3>
                {DESTINATIONS.map((dest) => (
                  <div
                    key={dest.id}
                    onClick={() => setSelectedDest(dest.name)}
                    className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all duration-300 hover:shadow-md hover:-translate-y-1
                      ${selectedDest === dest.name 
                        ? `bg-blue-50 ring-2 ring-blue-400` 
                        : `bg-white border`} `}
                    style={{ borderColor: colors.lightText + '33' }}
                  >
                    <img
                      src={dest.img}
                      alt={dest.name}
                      className="w-14 h-14 rounded-xl object-cover"
                    />
                    <div>
                      <div style={{ color: colors.text }} className="font-semibold">{dest.name}</div>
                      <div style={{ color: colors.lightText }} className="text-sm">{dest.country}</div>
                    </div>
                  </div>
                ))}
                {selectedDest && (
                  <button
                    onClick={() => setSelectedDest(null)}
                    className="mt-4 text-sm"
                    style={{ color: '#0077B6' }}
                  >
                    Clear filter
                  </button>
                )}
              </div>

              {/* Mobile Horizontal Scroll */}
              <div className="flex md:hidden gap-4 overflow-x-auto pb-2">
                {DESTINATIONS.map((dest) => (
                  <div
                    key={dest.id}
                    onClick={() => setSelectedDest(dest.name)}
                    className={`flex-shrink-0 w-40 p-3 rounded-xl cursor-pointer transition-all duration-300 hover:shadow-md
                      ${selectedDest === dest.name 
                        ? `bg-blue-50 ring-2 ring-blue-400` 
                        : `bg-white border`} `}
                    style={{ borderColor: colors.lightText + '33' }}
                  >
                    <img
                      src={dest.img}
                      alt={dest.name}
                      className="w-full h-24 rounded-xl object-cover mb-2"
                    />
                    <div style={{ color: colors.text }} className="font-semibold truncate">{dest.name}</div>
                    <div style={{ color: colors.lightText }} className="text-sm">{dest.country}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* TOURS */}
            <div className="md:ml-72">
              <h3 style={{ color: colors.text }} className="text-2xl font-bold mb-6">
                {selectedDest ? `${selectedDest} Tours` : 'All Tours'}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredTours.map((tour) => (
                  <div
                    key={tour.id}
                    className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                  >
                    <div className="relative h-56" onClick={() => navigate(`/tours/${tour.id}`)}>
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
                      <h3 style={{ color: colors.text }} className="text-xl font-bold mb-2">{tour.title}</h3>
                      <p style={{ color: colors.lightText }} className="text-sm mb-4">{tour.subtitle}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {tour.highlights.slice(0, 3).map((h) => (
                          <span key={h} className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full">
                            {h}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-3">
                        <button
                          className="flex-1 px-4 py-2 rounded-full transition-all border"
                          style={{ borderColor: colors.lightText + '33', color: colors.lightText }}
                          onClick={() => navigate(`/tours/${tour.id}`)}
                        >
                          View Details
                        </button>
                        <button
                          onClick={() => openQuoteModal(tour.id)}
                          className="flex-1 px-4 py-2 rounded-full text-white font-semibold hover:shadow-lg transition-all"
                          style={{ background: colors.primary }}
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

      </div>
    </div>
  );
}

export default ToursAndTravelers;
