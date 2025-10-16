import React from "react";
import { DESTINATIONS } from "../data/siteData";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import colors from "./colors";

export default function DestinationGrid() {
  const navigate = useNavigate();

  return (
    <section className="relative w-full bg-gradient-to-b from-white to-gray-50 pb-20">
      {/* Section Heading */}
      <div className="text-center pb-10">
        <motion.h2
          className="text-4xl md:text-6xl font-extrabold mb-4 text-gray-900"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Explore Our Top Destinations
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          From majestic mountains to tropical beaches — discover places that awaken your spirit and inspire your next journey.
        </motion.p>
      </div>

      {/* Destination Slider */}
      <div className="relative w-full">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
          }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop
          className="w-full h-[80vh] md:h-[90vh]"
        >
          {DESTINATIONS.map((destination) => (
            <SwiperSlide key={destination.id}>
              <motion.div
                className="relative w-full h-full flex items-center justify-center overflow-hidden"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                {/* Background Image */}
                <motion.img
                  src={destination.img}
                  alt={destination.name}
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ scale: 1 }}
                  animate={{ scale: 1.1 }}
                  transition={{ duration: 8, repeat: Infinity, repeatType: "mirror" }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                {/* Content */}
                <div className="relative z-10 text-center px-6 max-w-3xl">
                  <motion.h2
                    className="text-4xl md:text-6xl font-extrabold mb-4 text-white drop-shadow-lg"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                  >
                    {destination.name}
                  </motion.h2>

                  <motion.p
                    className="text-lg md:text-xl mb-3 text-gray-200"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                  >
                    {destination.country}
                  </motion.p>

                  <motion.p
                    className="text-sm md:text-base mb-8 text-gray-100 leading-relaxed"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.2 }}
                  >
                    {destination.description}
                  </motion.p>

                  <div className="flex justify-center items-center gap-4 mb-8">
                    <span className="text-sm md:text-base bg-white/80 text-black font-semibold px-4 py-2 rounded-full backdrop-blur-sm">
                      {destination.toursCount} Tours
                    </span>
                    <span className="text-sm md:text-base text-white font-medium">
                      Best Time: {destination.bestTime}
                    </span>
                  </div>

                  <motion.button
                    onClick={() => navigate("/tours")}
                    className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-xl hover:scale-105 transition-transform duration-300"
                  >
                    Explore {destination.name}
                  </motion.button>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Arrows */}
        <div className="swiper-button-prev !text-white !w-10 !h-10 !left-4 md:!left-10 after:!text-2xl" />
        <div className="swiper-button-next !text-white !w-10 !h-10 !right-4 md:!right-10 after:!text-2xl" />

        {/* Pagination Dots */}
        <div className="swiper-pagination !bottom-5 !text-white" />
      </div>
    </section>
  );
}
