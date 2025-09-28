import React from 'react';
import TourCard from '../components/TourCard';
import { TOURS } from '../data/siteData';


export default function Tours({ openQuoteModal }) {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">All Tours & Adventures</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TOURS.map((tour) => (
            <TourCard
              key={tour.id}
              tour={tour}
              onView={(id) => console.log(`View tour ${id}`)}
              onQuote={openQuoteModal}
            />
          ))}
        </div>
      </div>
    </div>
  );
}


