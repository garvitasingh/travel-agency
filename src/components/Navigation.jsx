import React, { useEffect, useState, useRef } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';

function Navigation({ onNavigate, currentRoute }) {
    const location = useLocation(); // gives current URL path
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { label: 'Home', path: '/' },
        { label: 'Tours & Destinations', path: '/tours' },
        { label: 'About', path: '/about' },
        { label: 'Contact', path: '/contact' },
    ];

     const isHome = location.pathname === '/';

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled
                ? 'bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-lg'
                : 'bg-transparent'
                }`}
        >
            <div className="w-full px-4 sm:px-6 lg:px-8 py-2">
                <div className="relative">
                  
                    <div className="grid grid-cols-[auto_1fr] gap-1 items-center">

                        <div
                            className="flex items-center gap-3 cursor-pointer transform hover:scale-105 transition-transform duration-300"
                            to="/"
                        >
                            {/* Logo */}
                            <div className="w-36 h-20 flex items-center justify-center overflow-hidden rounded-xl">
                                <img
                                    src="images/ola_logo.png"
                                    alt="OLA Logo"
                                    className="w-full h-full object-cover scale-125"
                                />
                            </div>

                            {/* Text (hidden on mobile) */}
                            <div className="hidden md:block">
                                <div
                                    className={`font-bold text-2xl leading-none whitespace-nowrap ${isHome ? (isScrolled ? 'text-black' : 'text-white') : 'text-gray-900'}`}
                                >
                                    OLA TRAVELS
                                </div>
                                <div
                                    className={`text-sm leading-none tracking-wide ${isHome ? (isScrolled ? 'text-gray-700' : 'text-white/80') : 'text-gray-600'}`}
                                >
                                    Slogan
                                </div>
                            </div>
                        </div>



                        {/* RIGHT: Topbar + Navigation stacked */}
                        <div className="hidden md:flex flex-col">

                            {/* Topbar row */}
                            <div className={`flex justify-end items-center gap-5 text-sm mb-3 ${
              isHome ? (isScrolled ? 'text-gray-600' : 'text-white') : 'text-gray-600'
            }`}>
                                   <a href="#" className={`text-lg transition-colors ${isHome ? (isScrolled ? 'hover:text-blue-500' : 'hover:text-blue-300') : 'text-gray-600'}`}><FaFacebookF /></a>
              <a href="#" className={`text-lg transition-colors ${isHome ? (isScrolled ? 'hover:text-pink-500' : 'hover:text-pink-300') : 'text-gray-600'}`}><FaInstagram /></a>
              <a href="#" className={`text-lg transition-colors ${isHome ? (isScrolled ? 'hover:text-sky-400' : 'hover:text-sky-300') : 'text-gray-600'}`}><FaTwitter /></a>
              <a href="#" className={`text-lg transition-colors ${isHome ? (isScrolled ? 'hover:text-green-500' : 'hover:text-green-300') : 'text-gray-600'}`}><FaWhatsapp /></a>
              <a href="#" className={`text-lg transition-colors ${isHome ? (isScrolled ? 'hover:text-red-500' : 'hover:text-red-300') : 'text-gray-600'}`}><FaYoutube /></a>

                                <span className="flex items-center gap-2 ml-6 whitespace-nowrap">
                                    📞 <span>+1 (555) 123-4567</span>
                                </span>
                                <span className="hidden sm:flex items-center gap-2 whitespace-nowrap">
                                    📧 <span>hello@ola.com</span>
                                </span>
                            </div>


                            {/* Nav row */}
                            <div className="flex justify-end items-center gap-6">
                                <nav className="hidden md:flex items-center gap-8">
                                    {navItems.map((item) => (
                                        <NavLink
                                            key={item.path}
                                            to={item.path}
                                            className={({ isActive }) => {
        // Base text color: white on home (not scrolled), black on scroll, gray otherwise
        const baseColor = isHome
          ? isScrolled
            ? 'text-black'
            : 'text-white'
          : 'text-gray-700';

        // Active link color
        const activeColor = 'text-[#FFD166] border-b-2 border-[#FFD166] bg-white/5';

        // Hover color
        const hoverColor = 'hover:text-[#FFD166] hover:bg-gray-50';

        return `px-4 py-2 rounded-lg font-medium text-[18px] transition-all duration-300 ${
          isActive ? activeColor : `${baseColor} ${hoverColor}`
        }`;
      }}
                                        >
                                            {item.label}
                                        </NavLink>
                                    ))}

                                    <Link
                                        to="/contact"
                                        className="px-6 py-3 rounded-full font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 whitespace-nowrap"
                                        style={{ background: '#0077B6' }}
                                    >
                                        Book Now
                                    </Link>
                                </nav>


                            </div>

                        </div>
                        {/* Mobile Menu Button */}
                        <div className="flex items-center justify-end">
                            {/* Hamburger button on right (mobile only) */}
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
                isHome ? (isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10') : 'text-gray-700 hover:bg-gray-100'
              }`}
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
                {/* Mobile Menu */}
                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden mt-4 bg-white/95 backdrop-blur-lg rounded-xl border border-gray-200 overflow-hidden shadow-xl">
                        <div className="p-4 space-y-4">

                            {/* Mobile topbar content */}
                            <div className="flex flex-wrap justify-center gap-5 text-gray-700 text-lg">
                                <a href="#" className="hover:text-blue-500"><FaFacebookF /></a>
                                <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
                                <a href="#" className="hover:text-sky-400"><FaTwitter /></a>
                                <a href="#" className="hover:text-green-500"><FaWhatsapp /></a>
                                <a href="#" className="hover:text-red-500"><FaYoutube /></a>
                            </div>

                            <div className="text-center text-sm text-gray-600 space-y-1">
                                <div>📞 +1 (555) 123-4567</div>
                                <div>📧 hello@ola.com</div>
                            </div>

                            <div className="border-t border-gray-200 pt-4 space-y-2">
                                {navItems.map((item) => (

                                    <NavLink
                                        key={item.path}
                                        to={item.path}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={({ isActive }) => {
                                            const baseColor = isHome
                                            ? isScrolled
                                                ? 'text-black'
                                                : 'text-black'
                                            : '';
                                            const activeColor = 'text-[#FFD166] bg-white/10 border-l-4 border-[#FFD166]';
                                            const hoverColor = '';

                                            return `block px-4 py-3 rounded-lg text-lg hover:bg-blue-50 hover:text-[#0077B6]  ${
                                            isActive ? activeColor : `${baseColor} ${hoverColor}`
                                            }`;
                                        }}
                                        >
                                        {item.label}
                                        </NavLink>


                                    
                                ))}
                                <Link
                                    onClick={() => {
                                        setIsMobileMenuOpen(false);
                                    }}
                                    to="/contact"
                                    className="w-full mt-4 px-6 py-3 rounded-full font-semibold text-white"
                                    style={{ background: '#0077B6', display: 'block', textAlign: 'center' }}
                                >
                                    Book Now
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}


export default Navigation;