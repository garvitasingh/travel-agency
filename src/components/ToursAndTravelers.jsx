import React, { useEffect, useState, useRef } from 'react';
import { TOURS, DESTINATIONS, Slider } from '../data/siteData';
import { useNavigate } from 'react-router-dom';   // ✅ import navigate
function ToursAndTravelers({ openQuoteModal }) {
  const [selectedDest, setSelectedDest] = useState(null);
const navigate = useNavigate(); // ✅ create navigate function
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
    ? TOURS.filter(t => {
        const destination = DESTINATIONS.find(d => d.name === selectedDest);
        return destination && t.destinationId === destination.id;
      })
    : TOURS;

  return (

     <div className="pt-36 pb-24 bg-gray-50 min-h-screen">
        <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto">

          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Tours & Destinations
            </h1>
          </div>

          <div className="border-t border-gray-200 mb-6"></div>

    <section className="pb-20 bg-gray-50">
      <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto">

        {/* DESTINATIONS */}
        <div className="mb-10">
          {/* <h3 className="font-bold text-xl text-gray-900 mb-4">Destinations</h3> */}

          {/* Desktop Sidebar Grid */}
          <div 
  className="hidden md:grid grid-cols-1 gap-3 w-64 float-left mr-10 sticky top-28 
             max-h-[120vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent rounded-xl">
              <h3 className="font-bold text-xl text-gray-900 mb-4">Destinations</h3>
            {DESTINATIONS.map((dest) => (
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
            {DESTINATIONS.map((dest) => (
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
                <div className="relative h-56"
                 onClick={() => navigate(`/tours/${tour.id}`)}
                >
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
                    <button className="flex-1 px-4 py-2 border border-gray-300 rounded-full text-gray-700 hover:border-blue-500 hover:text-blue-600 transition-all"
                    onClick={() => navigate(`/tours/${tour.id}`)}
                    >
                      View Details

                    </button>
                    <button
                      onClick={() => openQuoteModal(tour.id)} 
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

    </div>
      </div>

  );
}

export default ToursAndTravelers;