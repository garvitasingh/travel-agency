import React, { useState } from 'react';
import QuoteModal from '../components/QuoteModal';

export default function About() {
    const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
      const [selectedTourId, setSelectedTourId] = useState('');
    
      const openQuoteModal = (tourId = '') => {
        setSelectedTourId(tourId);
        setIsQuoteModalOpen(true);
      };
    return (

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
            <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        initialTourId={selectedTourId}
      />
          </div>





    );

}
