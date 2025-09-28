import React from 'react';
import DestinationGrid from '../components/DestinationGrid';


export default function Destinations() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Explore Destinations</h1>
        <DestinationGrid />
      </div>
    </div>
  );
}
