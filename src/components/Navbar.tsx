import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Award, Sparkles } from 'lucide-react';
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
    const handleScroll = () => {
      if (window.scrollY > 40) {
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
    { name: "About", path: "/about" },
    { name: "REGALIA", path: "/regalia", isFeatured: true },
    { name: "Projects", path: "/projects" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3 border-b border-shivaangan-amber/20' : 'bg-white/90 backdrop-blur-sm py-4'
    }`}>
        <div className="container-custom flex justify-between items-center">
          <Link to="/" className="hover:opacity-95 transition-opacity">
            <ShivaanganLogo variant="light" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-semibold text-sm tracking-wide transition-all flex items-center gap-1 ${
                  link.isFeatured 
                    ? 'bg-gradient-to-r from-shivaangan-terracotta to-shivaangan-amber text-white px-3.5 py-1.5 rounded-full shadow-md hover:brightness-110 font-bold'
                    : location.pathname === link.path 
                      ? 'text-shivaangan-terracotta border-b-2 border-shivaangan-terracotta pb-1 font-bold' 
                      : 'text-shivaangan-charcoal hover:text-shivaangan-terracotta'
                }`}
              >
                {link.isFeatured && <Sparkles className="w-3.5 h-3.5 text-amber-200" />}
                {link.name}
              </Link>
            ))}
            <a
              href={`tel:${COMPANY_INFO.director.phone}`}
              className="btn-gold py-2 px-4 text-xs tracking-wider uppercase font-bold flex items-center gap-1.5 shadow-md hover:scale-105 transition-transform"
            >
              <Phone className="w-3.5 h-3.5" />
              Enquire Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-shivaangan-charcoal p-2 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} className="text-shivaangan-terracotta" /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-shivaangan-amber/20 absolute top-full left-0 right-0 shadow-2xl py-6 px-6 backdrop-blur-xl">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`font-medium text-base py-2 border-b border-gray-100 transition-colors flex items-center justify-between ${
                    link.isFeatured
                      ? 'text-shivaangan-terracotta font-bold text-lg'
                      : location.pathname === link.path ? 'text-shivaangan-terracotta font-bold' : 'text-shivaangan-charcoal'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>{link.name}</span>
                  {link.isFeatured && <span className="bg-shivaangan-amber text-white text-xs font-bold px-2 py-0.5 rounded">FLAGSHIP</span>}
                </Link>
              ))}
              <div className="pt-4 flex flex-col gap-3">
                <a
                  href={`tel:${COMPANY_INFO.director.phone}`}
                  className="btn-primary w-full text-center py-3 text-sm uppercase tracking-wider font-bold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Call +91 9767900555
                </a>
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hello%20Shivaangan%20Realcon%20LLP,%20I%20am%20interested%20in%20your%20projects.`}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-center py-3 rounded-md text-sm uppercase tracking-wider"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
  );
};

export default Navbar;
