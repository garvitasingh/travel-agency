import React, { useEffect, useState, useRef } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa';

function Footer() {
    return (
      <footer className="bg-gray-900 text-gray-300 py-16">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

            {/* Brand + About */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                {/* <div className="w-16 h-12 overflow-hidden rounded-xl shadow-lg bg-white flex items-center justify-center">
                <img
                  src="images/ola_logo.png"
                  alt="OLA Logo"
                  className="scale-150 origin-center object-cover"
                  style={{ background: '#0077B6' }}
                />
                </div> */}
               <div className="w-40 h-24 flex items-center justify-center overflow-hidden rounded-xl shadow-lg bg-white">
  <img
    src="images/ola_logo.png"
    alt="OLA Logo"
    className="w-full h-full object-cover scale-175"
  />
</div>




                <div>
                  <h3 className="font-bold text-2xl text-white">OLA TRAVELS</h3>
                  <p className="text-sm text-gray-400">Slogan</p>
                </div>
              </div>

              <p className="text-gray-400 max-w-md mb-6 leading-relaxed">
                Creating transformative travel experiences that connect people, cultures,
                and landscapes around the world.
              </p>

              <div className="flex items-center gap-4">
                <a href="#" className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full text-xl hover:bg-blue-600 hover:text-white transition-colors">
                  <FaFacebookF />
                </a>
                <a href="#" className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full text-xl hover:bg-pink-500 hover:text-white transition-colors">
                  <FaInstagram />
                </a>
                <a href="#" className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full text-xl hover:bg-sky-400 hover:text-white transition-colors">
                  <FaTwitter />
                </a>
                <a href="#" className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full text-xl hover:bg-green-500 hover:text-white transition-colors">
                  <FaWhatsapp />
                </a>
                <a href="#" className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full text-xl hover:bg-red-600 hover:text-white transition-colors">
                  <FaYoutube />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg text-white mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {['Tours', 'Destinations', 'About', 'Contact', 'FAQ'].map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => navigate(link.toLowerCase())}
                      className="hover:text-white transition-colors"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; 2024 OLA. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>

            );
        }

        export default Footer;