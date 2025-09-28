import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Clock, Users, Mountain } from "lucide-react";

export default function TourDetails({ openQuoteModal }) {
  const { id } = useParams();
  const navigate = useNavigate();

  // ✅ Hardcoded data for demo
  const tour = {
    id,
    title: "Himalayan Adventure Trek",
    subtitle:
      "An unforgettable 7-day journey through the majestic Himalayan landscapes.",
    img: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1",
    description:
      "Join us on an epic trekking experience across the Himalayas. Witness snow-capped peaks, ancient monasteries, and authentic mountain villages while immersing yourself in the culture and beauty of Nepal. Perfect for adventure seekers and nature lovers.",
    days: 7,
    priceFrom: "$1,499",
    location: "Nepal, Himalayas",
    groupSize: "6–14 people",
    difficulty: "Moderate",
    departure: "Nov 15, 2025",
    highlights: [
      "Panoramic views of Mount Everest",
      "Stay in authentic tea houses",
      "Cultural exchange with local Sherpas",
      "Guided meditation at a mountain monastery",
    ],
    schedule: [
      {
        title: "Arrival in Kathmandu",
        description:
          "Welcome to Nepal! Meet your guide, explore Kathmandu city, and prepare for the trek.",
        img: "https://images.unsplash.com/photo-1579689189009-874f5cac2db5?q=80&w=704&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title: "Drive to Lukla & Trek to Phakding",
        description:
          "Scenic flight to Lukla and a gentle trek through villages and forests to Phakding.",
        img: "https://images.unsplash.com/photo-1711359940524-ed5e0ad9b89b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFuYWxpfGVufDB8fDB8fHww",
      },
      {
        title: "Trek to Namche Bazaar",
        description:
          "Climb through pine forests, cross suspension bridges, and arrive at the vibrant mountain town.",
        img: "https://plus.unsplash.com/premium_photo-1661814310068-bd895b7fe5cd?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        title: "Acclimatization Day",
        description:
          "Explore local monasteries, hike to Everest View Hotel, and enjoy breathtaking panoramas.",
        img: "https://images.unsplash.com/photo-1594102552386-793e5a27ad10?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hbmFsaXxlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        title: "Trek to Tengboche Monastery",
        description:
          "Pass through rhododendron forests and reach the iconic monastery with Everest views.",
        img: "https://images.unsplash.com/photo-1615445969492-6894df4a5613?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fG1hbmFsaXxlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        title: "Return to Namche",
        description:
          "Trek back through scenic landscapes, enjoying the beauty from a new perspective.",
        img: "https://images.unsplash.com/photo-1704795272663-68ed3010197c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fG1hbmFsaXxlbnwwfHwwfHx8MA%3D%3D",
      },
      {
        title: "Fly back to Kathmandu",
        description:
          "Return to Kathmandu, farewell dinner, and preparation for departure.",
        img: "https://images.unsplash.com/photo-1613935461248-8dd5b651951f?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
    activities: [
      "Guided trekking with expert Sherpas",
      "Daily yoga and meditation sessions",
      "Photography walks with local guides",
      "Traditional Nepali cooking class",
    ],
  };

  return (
    <div className="pt-28 pb-20 bg-gray-50 min-h-screen">
      {/* HERO */}
      <motion.div
        className="relative w-full h-[70vh] overflow-hidden rounded-b-3xl shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src={tour.img}
          alt={tour.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end text-white p-10 md:p-20">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {tour.title}
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl max-w-2xl"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {tour.subtitle}
          </motion.p>
        </div>
      </motion.div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* MAIN CONTENT */}
        <div className="lg:col-span-2 space-y-12">
          {/* Overview */}
          <motion.section
            className="bg-white p-8 rounded-3xl shadow-md"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              {tour.description}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-gray-700">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 " style={{  color: "#0077B6" }} />
                <span>{tour.days} Days</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 " style={{  color: "#0077B6" }} />
                <span>{tour.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 " style={{  color: "#0077B6" }} />
                <span>{tour.groupSize}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mountain className="w-5 h-5 " style={{  color: "#0077B6" }} />
                <span>{tour.difficulty}</span>
              </div>
            </div>
          </motion.section>

          {/* Highlights */}
          <motion.section
            className="bg-white p-8 rounded-3xl shadow-md"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Highlights
            </h2>
            <div className="flex flex-wrap gap-3">
              {tour.highlights.map((h) => (
                <span
                  key={h}
                  style={{  color: "#0077B6" }}
                  className="px-3 py-2 bg-blue-50 rounded-full text-sm font-medium shadow-sm"
                >
                  {h}
                </span>
              ))}
            </div>
          </motion.section>

          {/* Itinerary */}
          <motion.section
            className="bg-white p-8 rounded-3xl shadow-md"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Detailed Itinerary
            </h2>
            <div className="space-y-8">
              {tour.schedule.map((day, idx) => (
                <motion.div
                  key={idx}
                  className={`flex flex-col md:flex-row items-start md:items-center gap-6 ${
                    idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                >
                  <div className="flex-1">
                    <h3 style={{  color: "#0077B6" }}  className="font-bold text-lg  mb-2">
                      Day {idx + 1}: {day.title}
                    </h3>
                    <p className="text-gray-600">{day.description}</p>
                  </div>
                  {day.img && (
                    <img
                      src={day.img}
                      alt={day.title}
                      className="w-full md:w-64 h-40 rounded-xl object-cover shadow-md"
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Activities */}
          <motion.section
            className="bg-white p-8 rounded-3xl shadow-md"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Activities & Experiences
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {tour.activities.map((a, idx) => (
                <div
                  key={idx}
                  style={{  color: "#0077B6" }} 
                  className="p-4  rounded-xl text-blue-800 shadow-sm"
                >
                  {a}
                </div>
              ))}
            </div>
          </motion.section>
        </div>

        {/* SIDEBAR */}
        <motion.div
          className="bg-white shadow-xl rounded-3xl p-8 sticky top-28 h-fit border border-gray-100"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Book This Tour
          </h2>
          <p className="text-gray-600 mb-6">
            Secure your spot today and start your adventure!
          </p>
          <div className="mb-6 space-y-2 text-gray-700">
            <div className="flex justify-between">
              <span>Duration:</span>
              <span className="font-medium">{tour.days} Days</span>
            </div>
            <div className="flex justify-between">
              <span>Price:</span>
              <span className="font-medium">{tour.priceFrom}</span>
            </div>
            <div className="flex justify-between">
              <span>Next Departure:</span>
              <span className="font-medium">{tour.departure}</span>
            </div>
          </div>
          <button
            style={{ backgroundColor: "#0077B6", color: "#FFFFFF" }}
            onClick={() => openQuoteModal(tour.id)}
            className="w-full px-6 py-3  text-white rounded-full font-semibold hover:bg-blue-700 shadow-md transition-all"
          >
            Book Now
          </button>
          <button
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/ola_logo_wb.png"; // PDF file in public folder
              link.download = "Ola_logo.jpg"; // Name for the downloaded file
              link.click();
            }}
            className="w-full mt-4 px-6 py-3 border border-gray-300 rounded-full text-gray-700 hover:border-blue-500 hover:text-blue-600 transition-all"
          >
            Download Itinerary (PDF)
          </button>
          <button
          style={{  color: "#0077B6" }} 
            onClick={() => navigate("/tours")}
            className="w-full mt-4 px-6 py-3  hover:underline"
          >
            ← Back to Tours
          </button>
        </motion.div>
      </div>
    </div>
  );
}
