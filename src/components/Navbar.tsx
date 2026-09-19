import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '@/data/companyData';
import ShivaanganLogo from '@/components/ShivaanganLogo';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "REGALIA ROW VILLAS", path: "/regalia", highlight: true },
    { name: "Channel Partners", path: "/channel-partners" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/80 backdrop-blur-lg shadow-md py-3' 
        : 'bg-white/30 backdrop-blur-md border-b border-white/20 shadow-sm py-4'
    }`}>
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center group transition-transform hover:scale-105" aria-label="Shivaangan Realcon Home">
          <ShivaanganLogo variant="light" height={44} />
        </Link>

        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`transition-all duration-300 text-sm lg:text-base flex items-center gap-1.5 ${
                link.highlight 
                  ? 'bg-gray-900 text-[#FF6600] font-black px-5 py-2.5 rounded-full border border-gray-800 shadow-md hover:bg-black hover:border-[#FF6600]/50 hover:scale-105 hover:-translate-y-0.5 hover:shadow-[0_4px_15px_rgba(255,102,0,0.3)] group' 
                  : `font-medium hover:text-[#FF6600] ${
                      location.pathname === link.path 
                        ? 'text-[#FF6600] font-bold' 
                        : 'text-gray-900'
                    }`
              }`}
            >
              {link.highlight && <Sparkles className="w-4 h-4 animate-pulse" />}
              {link.name}
            </Link>
          ))}
        </div>

        <button 
          className="md:hidden text-gray-900 p-1 focus:outline-none"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200 shadow-xl absolute top-full left-0 right-0 animate-fade-in">
          <div className="container-custom py-5 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`py-2 transition-all duration-300 flex items-center gap-2 ${
                  link.highlight 
                    ? 'bg-gray-900 text-[#FF6600] font-black px-5 py-3 rounded-xl border border-gray-800 shadow-md hover:bg-black hover:border-[#FF6600]/50 hover:shadow-[0_4px_15px_rgba(255,102,0,0.3)] w-fit group' 
                    : `font-medium text-base hover:text-[#FF6600] ${
                        location.pathname === link.path 
                          ? 'text-[#FF6600] font-bold' 
                          : 'text-gray-900'
                      }`
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.highlight && <Sparkles className="w-4 h-4 animate-pulse" />}
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-200 mt-2">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="bg-[#FF6600] hover:bg-[#e65c00] text-white rounded-md w-full text-center py-3 text-sm font-bold block transition-colors shadow-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Call: {COMPANY_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;