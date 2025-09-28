import React, { useEffect, useState, useRef } from 'react';
import AnimatedSection from './AnimatedSection';
import { TOURSHOME, SOCIAL_POSTS } from '../data/siteData';
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp, FaYoutube, FaLocationArrow } from "react-icons/fa";
// Social Media Posts Section
function SocialMediaFeed() {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <AnimatedSection className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-800 text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
            Live from Our Adventures
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Follow Our
            <span className="text-gray-900"> Journey</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real moments from real adventures. Follow along as our travelers explore the world's most incredible destinations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {SOCIAL_POSTS.map((post) => (
            <div
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 cursor-pointer group"
            >
              <div className="relative h-64">
                <img
                  src={post.image}
                  alt="Social post"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Platform Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-lg">
                    {post.platform === 'instagram' ? <FaInstagram/> : <FaFacebookF />}
                  </span>
                  <span className="text-sm font-medium capitalize">{post.platform}</span>
                </div>

                {/* Location */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-sm font-medium">📍 {post.location}</span>
                </div>

                {/* Engagement Stats */}
                <div className="absolute bottom-4 left-4 flex items-center gap-4 text-white">
                  <div className="flex items-center gap-1">
                    <span className="text-red-400">❤️</span>
                    <span className="text-sm">{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>💬</span>
                    <span className="text-sm">{post.comments}</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  {/* <div className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    <span className="text-xs text-gray-500">Live</span>
                  </div> */}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed group-hover:text-gray-900 transition-colors">
                  {post.caption.slice(0, 120)}...
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 rounded-full font-semibold text-black transition-all duration-300 hover:shadow-lg hover:scale-105 transform flex items-center gap-2 "
              style={{ background: '#FFD166' }}
            >
              <span><FaInstagram/></span>
              Follow on Instagram
            </button>
            {/* <button className="px-6 py-3 rounded-full font-semibold text-white transition-all duration-300 hover:shadow-lg hover:scale-105 transform flex items-center gap-2"
              style={{ background: 'linear-gradient(45deg, #1877f2, #42a5f5)' }}
            > */}
            <button className="px-6 py-3 rounded-full font-semibold text-black transition-all duration-300 hover:shadow-lg hover:scale-105 transform flex items-center gap-2"
              style={{ background: '#90E0EF' }}
            >
              <span><FaFacebookF/></span>
              Like on Facebook
            </button>
          </div>
        </div>

        {/* Social Post Modal */}
        {selectedPost && (
          <div
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedPost(null)}
          >
            <div
              className="bg-white rounded-2xl overflow-hidden max-w-2xl w-full shadow-2xl transform scale-100 transition-transform duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedPost.image}
                alt="Social post"
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">
                      {selectedPost.platform === 'instagram' ? '📷' : '📘'}
                    </span>
                    <div>
                      <div className="font-bold">OLA</div>
                      <div className="text-sm text-gray-500">{selectedPost.date}</div>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedPost(null)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    ❌
                  </button>
                </div>
                <p className="text-gray-700 mb-4">{selectedPost.caption}</p>
                <div className="flex items-center gap-6 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <span className="text-red-400">❤️</span>
                    <span>{selectedPost.likes} likes</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>💬</span>
                    <span>{selectedPost.comments} comments</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>📍</span>
                    <span>{selectedPost.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </AnimatedSection>
  );
}

export default SocialMediaFeed;