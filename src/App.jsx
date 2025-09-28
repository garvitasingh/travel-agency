import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer"; // create Footer.jsx from the bottom part of your file
import QuoteModal from "./components/QuoteModal";
import ToursAndTravelers from "./components/ToursAndTravelers";

import Home from "./pages/Home";
import Tours from "./pages/Tours";
import Destinations from "./pages/Destinations";

import About from "./pages/About";
import Contact from "./pages/Contact";
import TourDetails from "./pages/TourDetails";

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedTourId, setSelectedTourId] = useState("");

  const openQuoteModal = (tourId = "") => {
    setSelectedTourId(tourId);
    setIsQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <main>
        <Routes>
          <Route path="/" element={<Home openQuoteModal={openQuoteModal} />} />
          <Route
            path="/tours"
            element={<ToursAndTravelers openQuoteModal={openQuoteModal} />}
          />

          {/* <Route path="/tours/:id" element={<TourDetails />} /> ✅ dynamic tour details route */}
          <Route
            path="/tours/:id"
            element={<TourDetails openQuoteModal={openQuoteModal} />}
          />

          <Route
            path="/destinations"
            element={<Destinations openQuoteModal={openQuoteModal} />}
          />
          <Route path="/about" element={<About />} />
          <Route
            path="/contact"
            element={<Contact openQuoteModal={openQuoteModal} />}
          />
        </Routes>
      </main>

      <Footer />

      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        initialTourId={selectedTourId}
      />
    </div>
  );
}
