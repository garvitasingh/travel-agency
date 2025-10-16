import React, { useEffect, useState } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FiPhone } from "react-icons/fi";
import colors from './colors';
import ContactModal from './ContactModal';

function Navigation({ onNavigate, currentRoute }) {
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [showOceansDropdown, setShowOceansDropdown] = useState(false);
    const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
    const [selectedTourId, setSelectedTourId] = useState('');

    const openQuoteModal = (tourId = '') => {
        setSelectedTourId(tourId);
        setIsQuoteModalOpen(true);
    };
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { label: 'Home', path: '/' },
        { label: 'Tours & Destinations', path: '/tours', isDropdown: true }, // add isDropdown: true
        { label: 'About', path: '/about' },
        { label: 'Contact', path: '/contact' },
    ];

    const oceans = [
        { name: 'Atlantic Ocean', path: '/tours' },
        { name: 'Pacific Ocean', path: '/tours' },
        { name: 'Indian Ocean', path: '/tours' },
        { name: 'Arctic Ocean', path: '/tours' },
        { name: 'Southern Ocean', path: '/tours' },
    ];

    const isHome = location.pathname === '/';

    return (
        <>
            <header
                className={`fixed top-0 w-full z-50 transition-all duration-500 backdrop-blur-lg shadow-lg border-b`}
                style={{
                    background: isScrolled ? colors.primary + colors.primary : colors.primary,
                    borderColor: isScrolled ? colors.primary : 'transparent',
                }}
            >
                <div className="w-full px-4 sm:px-6 lg:px-8 py-2">
                    <div className="relative">
                        <div className="grid grid-cols-[auto_1fr] gap-1 items-center">

                            <div
                                className="flex items-center gap-3 cursor-pointer transform hover:scale-105 transition-transform duration-300"
                                to="/"
                            >
                                <div className="w-36 h-20 flex items-center justify-center overflow-hidden rounded-xl">
                                    <img
                                        src="images/Ola White_logo.svg"
                                        alt="OLA Logo"
                                        className="w-full object-cover "
                                    />
                                </div>

                                {/* <div className="hidden md:block">
                                <div
                                    className="font-bold text-2xl leading-none whitespace-nowrap"
                                    style={{
                                        color: isHome
                                            ? isScrolled
                                                ? colors.text
                                                : colors.white
                                            : colors.text,
                                    }}
                                >
                                    OLA TRAVELS
                                </div>
                                <div
                                    className="text-sm leading-none tracking-wide"
                                    style={{
                                        color: isHome
                                            ? isScrolled
                                                ? colors.text
                                                : colors.white + 'CC'
                                            : colors.text,
                                    }}
                                >
                                    Slogan
                                </div>
                            </div> */}
                            </div>

                            <div className="hidden md:flex flex-col">

                                <div className="flex justify-end items-center gap-5 text-sm mb-3">
                                    <a
                                        href="#"
                                        className="text-lg transition-colors"
                                        style={{
                                            color: colors.white
                                        }}
                                    ><FaFacebookF /></a>
                                    <a
                                        href="#"
                                        className="text-lg transition-colors"
                                        style={{
                                            color: colors.white
                                        }}
                                    ><FaInstagram /></a>
                                    {/* <a
                                    href="#"
                                    className="text-lg transition-colors"
                                    style={{
                                        color: isHome
                                            ? isScrolled
                                                ? colors.text
                                                : colors.white
                                            : colors.text,
                                    }}
                                ><FaTwitter /></a> */}
                                    <a
                                        href="#"
                                        className="text-lg transition-colors"
                                        style={{
                                            color: colors.white
                                        }}
                                    ><FaWhatsapp /></a>
                                    {/* <a
                                    href="#"
                                    className="text-lg transition-colors"
                                    style={{
                                        color: isHome
                                            ? isScrolled
                                                ? colors.text
                                                : colors.white
                                            : colors.text,
                                    }}
                                ><FaYoutube /></a> */}

                                    <span className="flex items-center gap-2 ml-6 whitespace-nowrap" style={{
                                        color: colors.white
                                    }}>
                                        <FiPhone className="text-white" /><span>+1 (555) 123-4567</span>
                                    </span>
                                    <span className="hidden sm:flex items-center gap-2 whitespace-nowrap" style={{
                                        color: colors.white
                                    }}>
                                        📧 <span>hello@ola.com</span>
                                    </span>
                                </div>

                                <div className="flex justify-end items-center gap-6">
                                    <nav className="hidden md:flex items-center gap-8">
                                        {navItems.map((item) => (
                                            <div key={item.path} className="relative">
                                                {item.isDropdown ? (
                                                    // Dropdown toggle for Tours
                                                    <div
                                                        className="px-4 py-2 rounded-lg font-medium text-[18px] cursor-pointer"
                                                        onClick={() => setShowOceansDropdown(!showOceansDropdown)}
                                                        style={{
                                                            color: location.pathname.startsWith('/tours') ? colors.accent : colors.white,
                                                            borderBottom: location.pathname.startsWith('/tours') ? `2px solid ${colors.accent}` : 'none',
                                                            background: location.pathname.startsWith('/tours') ? colors.white + '0D' : 'transparent',
                                                        }}
                                                    >
                                                        {item.label}
                                                    </div>
                                                ) : (
                                                    // Normal NavLink items
                                                    <NavLink
                                                        to={item.path}
                                                        end
                                                        className="px-4 py-2 rounded-lg font-medium text-[18px]"
                                                        style={({ isActive }) => ({
                                                            color: isActive ? colors.accent : colors.white,
                                                            borderBottom: isActive ? `2px solid ${colors.accent}` : 'none',
                                                            background: isActive ? colors.white + '0D' : 'transparent',
                                                        })}
                                                        onClick={() => setShowOceansDropdown(false)}
                                                    >
                                                        {item.label}
                                                    </NavLink>
                                                )}

                                                {/* Dropdown menu for Tours */}
                                                {item.isDropdown && showOceansDropdown && (
                                                    <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg z-50">
                                                        {oceans.map((ocean) => (
                                                            <div
                                                                key={ocean.name}
                                                                className="px-4 py-2 hover:bg-blue-50 cursor-pointer"
                                                                onClick={() => {
                                                                    navigate(ocean.path);
                                                                    setShowOceansDropdown(false);
                                                                }}
                                                            >
                                                                {ocean.name}
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        ))}

                                        <Link
                                            // to="/contact"
                                            className="px-6 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 whitespace-nowrap"
                                            style={{ background: colors.accent, color: colors.text }}
                                            onClick={() => openQuoteModal()}
                                        >
                                            Get A Quote
                                            {/* Book Now */}
                                        </Link>
                                    </nav>
                                </div>

                            </div>

                            <div className="flex items-center justify-end">
                                <button
                                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                    className="md:hidden p-2 rounded-lg transition-colors"
                                    style={{
                                        color: isHome
                                            ? isScrolled
                                                ? colors.text
                                                : colors.white
                                            : colors.text,
                                        background: isHome
                                            ? isScrolled
                                                ? colors.white
                                                : 'transparent'
                                            : colors.white,
                                    }}
                                >
                                    <div className="w-6 h-6 flex flex-col justify-center gap-1">
                                        <div className={`w-full h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                                        <div className={`w-full h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
                                        <div className={`w-full h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>

                    {isMobileMenuOpen && (
  <div
    className="md:hidden mt-4 rounded-xl border overflow-hidden shadow-xl"
    style={{
      background: colors.white + 'F2',
      borderColor: colors.background,
      maxHeight: '80vh',  // Limit height to 80% of viewport
      overflowY: 'auto',  // Enable vertical scrolling
    }}
  >
    <div className="p-4 space-y-4">
      {/* Social icons */}
      <div className="flex flex-wrap justify-center gap-5 text-lg">
        <a href="#" style={{ color: colors.text }}><FaFacebookF /></a>
        <a href="#" style={{ color: colors.text }}><FaInstagram /></a>
        <a href="#" style={{ color: colors.text }}><FaWhatsapp /></a>
      </div>

      {/* Contact info */}
      <div className="text-center text-sm space-y-1" style={{ color: colors.text }}>
        <div>📞 +1 (555) 123-4567</div>
        <div>📧 hello@ola.com</div>
      </div>

      {/* Nav items */}
      <div className="border-t pt-4 space-y-2" style={{ borderColor: colors.background }}>
        {navItems.map((item) => (
          <div key={item.path} className="relative">
            {item.isDropdown ? (
              <div>
                <div
                  className="block px-4 py-3 rounded-lg text-lg cursor-pointer hover:bg-blue-50"
                  onClick={() => setShowOceansDropdown(!showOceansDropdown)}
                  style={{
                    color: location.pathname.startsWith('/tours') ? colors.accent : colors.text,
                    borderLeft: location.pathname.startsWith('/tours') ? `4px solid ${colors.accent}` : 'none',
                    background: location.pathname.startsWith('/tours') ? colors.white + '1A' : 'transparent',
                  }}
                >
                  {item.label}
                </div>
                {showOceansDropdown && (
                  <div className="pl-4 mt-1 space-y-1">
                    {oceans.map((ocean) => (
                      <div
                        key={ocean.name}
                        className="px-4 py-2 rounded-lg hover:bg-blue-50 cursor-pointer"
                        onClick={() => {
                          navigate(ocean.path);
                          setIsMobileMenuOpen(false);
                          setShowOceansDropdown(false);
                        }}
                      >
                        {ocean.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-lg text-lg hover:bg-blue-50"
                style={({ isActive }) => ({
                  color: isActive ? colors.accent : colors.text,
                  background: isActive ? colors.white + '1A' : 'transparent',
                  borderLeft: isActive ? `4px solid ${colors.accent}` : 'none',
                })}
              >
                {item.label}
              </NavLink>
            )}
          </div>
        ))}

        <Link
          onClick={() => setIsMobileMenuOpen(false)}
          to="/contact"
          className="block w-full mt-4 px-6 py-3 rounded-full font-semibold text-center"
          style={{ background: colors.primary, color: colors.white }}
        >
          Book Now
        </Link>
      </div>
    </div>
  </div>
)}

                </div>

            </header>
            <ContactModal
                isOpen={isQuoteModalOpen}
                onClose={() => setIsQuoteModalOpen(false)}
                initialTourId={selectedTourId}
            />
        </>
    );
}

export default Navigation;
