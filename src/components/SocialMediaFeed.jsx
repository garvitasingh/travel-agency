import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import { SOCIAL_POSTS } from '../data/siteData';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import colors from './colors';
import { Link } from 'react-router-dom';

function SocialMediaFeed() {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <AnimatedSection
      className="py-20"
      style={{
        background: `linear-gradient(to bottom right, ${colors.accent}10, ${colors.primary}10)`,
      }}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: colors.text }}>
            Follow Our <span style={{ color: colors.text }}>Journey</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: colors.text + '99' }}>
            Real moments from real adventures. Follow along as our travelers explore the world's most incredible destinations.
          </p>
          {/* <div className="text-center mb-8 mt-6 flex flex-wrap justify-center gap-4">
            <Link
              className="px-6 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 whitespace-nowrap"
              style={{ background: colors.accent, color: colors.text }}
            >
              Book Now
            </Link>
          </div> */}
        </div>
        <div className="text-center mt-4 mb-6">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              className="px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 transform flex items-center gap-2"
              style={{
                background: 'linear-gradient(45deg, #F58529, #DD2A7B, #8134AF, #515BD4)',
                color: 'white'
              }}
            >
              <FaInstagram /> 
            </button>
            <button
              className="px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 transform flex items-center gap-2"
              style={{ background: '#1877F2', color: 'white' }}
            >
              <FaFacebookF /> 
            </button>
            <button
              className="px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 transform flex items-center gap-2"
              style={{ background: '#25D366', color: 'white' }}
            >
              <FaWhatsapp /> 
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {SOCIAL_POSTS.map((post) => (
            <div
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 cursor-pointer group"
              style={{ background: colors.white }}
            >
              <div className="relative h-64 group overflow-hidden rounded-2xl">
  {/* Image */}
  <img
    src={post.image}
    alt="Social post"
    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
  />

  {/* Overlay gradient */}
  <div
    className="absolute inset-0"
    style={{ background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)" }}
  />

  {/* Platform Badge */}
  <div
    className="absolute top-4 right-4 flex items-center gap-2 backdrop-blur-sm rounded-full px-3 py-1"
    style={{
      background:
        post.platform === "instagram"
          ? "linear-gradient(45deg, #F58529, #DD2A7B, #8134AF, #515BD4)"
          : post.platform === "facebook"
          ? "#1877F2"
          : post.platform === "whatsapp"
          ? "#25D366"
          : "#999",
      color: "#fff",
    }}
  >
    <span className="text-lg">
      {post.platform === "instagram" ? (
        <FaInstagram />
      ) : post.platform === "facebook" ? (
        <FaFacebookF />
      ) : (
        <FaWhatsapp />
      )}
    </span>
  </div>

  {/* Caption always visible */}
  <div
    className="absolute bottom-0 left-0 w-full text-white p-4"
    style={{
      background: "linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.4), transparent)",
    }}
  >
    <p className="text-sm leading-relaxed z-10 relative">
      {post.caption.length > 120
        ? post.caption.slice(0, 120) + "..."
        : post.caption}
    </p>
  </div>

  {/* Hover overlay layer */}
  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
    {post.link && (
      <a
        href={post.link}
        target="_blank"
        rel="noopener noreferrer"
        className={`px-5 py-2 rounded-full text-sm font-semibold text-white transition-transform duration-500 transform translate-y-4 group-hover:translate-y-0 hover:scale-105 ${
          post.platform === "instagram"
            ? "bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF]"
            : post.platform === "facebook"
            ? "bg-[#1877F2]"
            : "bg-[#25D366]"
        }`}
      >
        View More
      </a>
    )}
  </div>
</div>

            </div>
          ))}
        </div>

        {/* Call to Action */}
        {/* <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 transform flex items-center gap-2"
              style={{ background: colors.accent, color: colors.white }}
            >
              <FaInstagram /> Follow on Instagram
            </button>
            <button
              className="px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 transform flex items-center gap-2"
              style={{ background: colors.secondary, color: colors.text }}
            >
              <FaFacebookF /> Like on Facebook
            </button>
          </div>
        </div> */}
      </div>
    </AnimatedSection>
  );
}

export default SocialMediaFeed;
