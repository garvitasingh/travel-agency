import React from "react";
import HeroSection from "../components/HeroSection";
import AnimatedSection from "../components/AnimatedSection";
import SocialMediaFeed from "../components/SocialMediaFeed";
import TourCard from "../components/TourCard";
import DestinationGrid from "../components/DestinationGrid";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import { TOURSHOME } from "../data/siteData";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"; 
import colors from "../components/colors";

export default function Home({ openQuoteModal }) {
  const navigate = useNavigate(); 

  const handleExplore = (page) => {
    if (page === "tours") navigate("/tours");
    if (page === "contact") navigate("/contact");
  };

  return (
    <>
      <HeroSection onExplore={handleExplore} />

      {/* Featured Adventures */}
      {/* <AnimatedSection className="py-20">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div 
              style={{ background: colors.secondary, color: colors.white }} 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4"
            >
              <span  
                style={{ color: colors.white }} 
                className="w-2 h-2  rounded-full animate-pulse"
              ></span>
              Featured Adventures
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: colors.text }}>
              Curated for the
              <span style={{ color: colors.text }}> Extraordinary</span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: colors.text }}>
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
          <br />
          <div className="flex justify-center">
            <Link
              to="tours"
              style={{ background: colors.primary, color: colors.white }}
              className="px-6 py-2 rounded-full hover:border-blue-500 hover:text-blue-600 transition-all"
            >
              Explore Tours
            </Link>
          </div>
        </div>
      </AnimatedSection> */}

      {/* Social Feed */}
      <SocialMediaFeed />

      {/* Why Choose Us */}
      <AnimatedSection className="py-20" style={{ background: `linear-gradient(to bottom right, ${colors.secondary}, ${colors.accent})` }}>
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: colors.text }}>
                Why Choose
                <span style={{ color: colors.text }}> OLA</span>
              </h2>
              <p className="text-xl mb-3" style={{ color: colors.text }}>
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
                    style={{ background: 'transparent', color: colors.text }}
                  >
                    <div className="text-3xl">{feature.icon}</div>
                    <div>
                      <h3 className="font-bold text-lg mb-1" style={{ color: colors.text }}>
                        {feature.title}
                      </h3>
                      <p style={{ color: colors.text }}>{feature.description}</p>
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
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Destinations */}
      <AnimatedSection className="py-20">
        <div className="mx-auto">
          <DestinationGrid />
        </div>
      </AnimatedSection>

      {/* Testimonials */}
      <div className="py-20" style={{ background: colors.secondary }}>
        <div className="max-w-4xl mx-auto">
          <TestimonialsCarousel />
        </div>
      </div>

      {/* Call To Action */}
      <AnimatedSection className="py-20 relative overflow-hidden">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center relative">
            <div
              className="relative overflow-hidden rounded-3xl p-12 shadow-2xl transform transition-transform duration-700 hover:scale-[1.03] hover:shadow-3xl"
              style={{ backgroundColor: colors.primary }}
            >
              <div className="absolute top-[-6rem] right-[-6rem] w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse-slow"></div>
              <div className="absolute bottom-[-5rem] left-[-5rem] w-56 h-56 bg-white/20 rounded-full blur-2xl animate-bounce-slow"></div>
              <div className="absolute top-1/2 left-[-4rem] w-48 h-48" style={{ background: colors.accent + '33', borderRadius: '50%' }}></div>

              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight animate-fadeIn" style={{ color: colors.white }}>
                  Ready for Your Next Adventure?
                </h2>
                <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto animate-fadeIn delay-200" style={{ color: colors.white }}>
                  Let’s create an unforgettable journey tailored just for you.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => openQuoteModal()}
                    className="px-8 py-4 rounded-full font-semibold text-lg shadow-md border-2 hover:scale-105 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                    style={{ backgroundColor: colors.primary, color: colors.white, borderColor: colors.white }}
                  >
                    <span className="absolute inset-0 bg-white/20 hover:opacity-30 transition-opacity duration-500 rounded-full"></span>
                    Plan My Journey
                  </button>
                  <button
                    onClick={() => navigate("tours")}
                    className="px-8 py-4 border-2 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg relative overflow-hidden"
                    style={{ backgroundColor: 'transparent', color: colors.white, borderColor: colors.white }}
                  >
                    Browse Tours
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
