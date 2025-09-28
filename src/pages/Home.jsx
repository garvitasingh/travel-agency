import React from "react";
import HeroSection from "../components/HeroSection";
import AnimatedSection from "../components/AnimatedSection";
import SocialMediaFeed from "../components/SocialMediaFeed";
import TourCard from "../components/TourCard";
import DestinationGrid from "../components/DestinationGrid";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import { TOURSHOME } from "../data/siteData";
import { Link, NavLink } from "react-router-dom";

import { useNavigate } from "react-router-dom"; // ✅ import navigate
export default function Home({ openQuoteModal }) {
  const navigate = useNavigate(); // ✅ create navigate function

  const handleExplore = (page) => {
    if (page === "tours") navigate("/tours");
    if (page === "contact") navigate("/contact");
  };
  return (
    <>
      <HeroSection onExplore={handleExplore} />

      {/* Featured Adventures */}
      <AnimatedSection className="py-20">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div style={{ background: "#90E0EF", color: "#FFF" }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <span  style={{ color: "#FFF" }} className="w-2 h-2  rounded-full animate-pulse"></span>
              Featured Adventures
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Curated for the
              <span className="text-gray-900"> Extraordinary</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hand-picked journeys that go beyond the ordinary. Each adventure
              is crafted with local expertise and genuine care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {TOURSHOME.map((tour) => (
              <TourCard
                key={tour.id}
                tour={tour}
                onView={(id) => navigate(`tour-${id}`)}
                onQuote={openQuoteModal}
              />
            ))}
          </div>
          <br></br>
          <div className="flex justify-center">
            <Link
              to="tours"
              style={{ background: "#0077B6", color: "#fff" }}
              className="px-6 py-2 border border-gray-300 rounded-full text-gray-700 hover:border-blue-500 hover:text-blue-600 transition-all"
            >
              Explore Tours
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Social Feed */}
      <SocialMediaFeed />

      {/* Why Choose Us */}
      <AnimatedSection className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose
                <span className="text-gray-900"> OLA</span>
              </h2>
              <p className="text-xl text-gray-600 mb-3">
                We don't just plan trips - we create transformative experiences
                that stay with you forever.
              </p>

              <div className="">
                {[
                  {
                    icon: "🌟",
                    title: "Expert Local Guides",
                    description:
                      "Passionate locals who know hidden gems and authentic experiences.",
                  },
                  {
                    icon: "🎯",
                    title: "Tailored Experiences",
                    description:
                      "Every journey is customized to your interests and travel style.",
                  },
                  {
                    icon: "🛡️",
                    title: "24/7 Support",
                    description:
                      "Complete peace of mind with round-the-clock assistance.",
                  },
                  {
                    icon: "💎",
                    title: "Exclusive Access",
                    description:
                      "Unique experiences and locations not available to regular tourists.",
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-white/50 transition-all duration-300 transform hover:translate-x-2"
                  >
                    <div className="text-3xl">{feature.icon}</div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Travel Experience"
                  className="rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-500"
                />
                {/* <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl hover:scale-110 transform transition-transform duration-300">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-blue-600">98%</div>
                          <div className="text-sm text-gray-600">Satisfaction Rate</div>
                        </div>
                      </div> */}
              </div>
              {/* <div className="absolute top-8 left-8 w-24 h-24 bg-amber-400 rounded-full opacity-20 animate-pulse"></div>
                    <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-400 rounded-full opacity-20 animate-bounce"></div> */}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Destinations */}
      <AnimatedSection className="py-20">
        <div className="max-w-7xl mx-auto">
          <DestinationGrid />
        </div>
      </AnimatedSection>

      {/* Testimonials */}
      <div className="py-20 bg-[#90E0EF]">
        <div className="max-w-4xl mx-auto">
          <TestimonialsCarousel />
        </div>
      </div>

      {/* Call To Action */}
      <AnimatedSection className="py-20 relative overflow-hidden">
  <div className="w-full px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl mx-auto text-center relative">
      {/* Solid Color Card */}
      <div
        className="relative overflow-hidden rounded-3xl p-12 shadow-2xl transform transition-transform duration-700 hover:scale-[1.03] hover:shadow-3xl"
        style={{
          backgroundColor: "#0077B6", // primary color
        }}
      >
        {/* Floating Decorative Circles */}
        <div className="absolute top-[-6rem] right-[-6rem] w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-[-5rem] left-[-5rem] w-56 h-56 bg-white/20 rounded-full blur-2xl animate-bounce-slow"></div>
        <div className="absolute top-1/2 left-[-4rem] w-48 h-48 bg-accent/20 rounded-full blur-2xl animate-rotate-slow"></div>

        {/* Content */}
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight opacity-0 animate-fadeIn">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-white text-secondary max-w-2xl mx-auto opacity-0 animate-fadeIn delay-200">
            Let’s create an unforgettable journey tailored just for you.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => openQuoteModal()}
              className="px-8 py-4 text-text rounded-full font-semibold text-lg text-white
                         shadow-md border-2 border-accent hover:scale-105 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              style={{ backgroundColor: "#FFD166" }} // accent color
            >
              <span className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-30 transition-opacity duration-500 rounded-full"></span>
              Plan My Journey
            </button>
            <button
              onClick={() => navigate("tours")}
              className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold text-lg
                         hover:bg-white hover:text-[#0F172A] hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg relative overflow-hidden"
            >
              Browse Tours
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Tailwind / CSS Animations */}
  <style jsx>{`
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fadeIn { animation: fadeIn 1s forwards; }

    @keyframes pulse-slow {
      0%, 100% { transform: scale(1); opacity: 0.5; }
      50% { transform: scale(1.1); opacity: 0.7; }
    }
    .animate-pulse-slow { animation: pulse-slow 6s infinite; }

    @keyframes bounce-slow {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-20px); }
    }
    .animate-bounce-slow { animation: bounce-slow 8s infinite; }

    @keyframes rotate-slow {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    .animate-rotate-slow { animation: rotate-slow 20s linear infinite; }
  `}</style>
</AnimatedSection>

    </>
  );
}
