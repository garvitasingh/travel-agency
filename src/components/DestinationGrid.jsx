import React, { useEffect, useState, useRef } from 'react';
import { TOURS, DESTINATIONS, Slider } from '../data/siteData';
import { useNavigate } from 'react-router-dom';

// Interactive Destination Grid
function DestinationGrid() {
  const [selectedDestination, setSelectedDestination] = useState(null);
  const navigate = useNavigate();
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
                onClick={() => navigate('/tours')}
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
export default DestinationGrid;