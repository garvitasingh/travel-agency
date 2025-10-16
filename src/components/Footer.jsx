import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import colors from './colors';
import { useNavigate } from 'react-router-dom';

function Footer() {
  const navigate = useNavigate();

  return (
    <footer style={{ backgroundColor: colors.Darkprimary, color: colors.lightText }} className="py-5">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand + About */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-40 h-24 flex items-center justify-center overflow-hidden rounded-xl shadow-lg">
                <img
                  src="images/Ola White_logo.svg"
                  alt="OLA Logo"
                  className="w-full object-cover"
                />
              </div>
              {/* <div>
                <h3 style={{ color: colors.white }} className="font-bold text-2xl">OLA TRAVELS</h3>
                <p style={{ color: colors.lightText }} className="text-sm">Slogan</p>
              </div> */}
            </div>

            <p style={{ color: colors.white }} className="max-w-md mb-6 leading-relaxed">
              Creating transformative travel adexperiences that connect people, cultures,
              and landscapes around the world.
            </p>

            <div className="flex items-center gap-4">
              <a href="#" style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: colors.white }}
                className="w-10 h-10 flex items-center justify-center rounded-full text-xl hover:bg-blue-600 hover:text-white transition-colors"
              >
                <FaFacebookF />
              </a>
              <a href="#" style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: colors.white }}
                className="w-10 h-10 flex items-center justify-center rounded-full text-xl hover:bg-pink-500 hover:text-white transition-colors"
              >
                <FaInstagram />
              </a>
              {/* <a href="#" style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: colors.white }}
                className="w-10 h-10 flex items-center justify-center rounded-full text-xl hover:bg-sky-400 hover:text-white transition-colors"
              >
                <FaTwitter />
              </a> */}
              <a href="#" style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: colors.white }}
                className="w-10 h-10 flex items-center justify-center rounded-full text-xl hover:bg-green-500 hover:text-white transition-colors"
              >
                <FaWhatsapp />
              </a>
              {/* <a href="#" style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: colors.white }}
                className="w-10 h-10 flex items-center justify-center rounded-full text-xl hover:bg-red-600 hover:text-white transition-colors"
              >
                <FaYoutube />
              </a> */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: colors.white }} className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['Tours', 'Destinations', 'About', 'Contact', 'FAQ'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => navigate(link.toLowerCase())}
                    style={{ color: colors.white }}
                    className="hover:text-white transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{ borderColor: colors.white + '33', color: colors.white }} className="border-t mt-4 pt-4 text-center text-sm">
          <p>&copy; 2024 OLA. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
