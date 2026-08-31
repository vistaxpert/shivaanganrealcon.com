import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { COMPANY_INFO } from '@/data/companyData';
import ShivaanganLogo from '@/components/ShivaanganLogo';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close mobile menu on route change
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
    { name: "REGALIA", path: "/regalia" },
    { name: "Channel Partners", path: "/channel-partners" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 md:bg-white shadow-sm py-4'
    }`}>
      <div className="container-custom flex justify-between items-center">
        {/* Brand Logo & Color-Split Brand Name */}
        <Link to="/" className="flex items-center group transition-transform hover:scale-105" aria-label="Shivaangan Realcon Home">
          <ShivaanganLogo variant="light" height={44} />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-medium transition-colors text-sm lg:text-base hover:text-construction-orange ${
                location.pathname === link.path 
                  ? 'text-construction-orange font-bold' 
                  : 'text-construction-navy'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-construction-navy p-1 focus:outline-none"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl absolute top-full left-0 right-0 animate-fade-in">
          <div className="container-custom py-5 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-medium text-base py-1 transition-colors hover:text-construction-orange ${
                  location.pathname === link.path 
                    ? 'text-construction-orange font-bold' 
                    : 'text-construction-navy'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2 border-t border-gray-100">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="btn-primary w-full text-center py-2.5 text-sm font-bold block"
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
