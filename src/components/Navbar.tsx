import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Sparkles, MessageCircle, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { COMPANY_INFO } from '@/data/companyData';
import ShivaanganLogo from '@/components/ShivaanganLogo';

interface NavItem {
  name: string;
  path: string;
  isFeatured?: boolean;
}

const navLinks: NavItem[] = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "REGALIA", path: "/regalia", isFeatured: true },
  { name: "Projects", path: "/projects" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Elevation and elevation state change on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll(); // Check initial position
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out px-3 sm:px-6 lg:px-8 ${
      isScrolled ? 'pt-2.5 sm:pt-3' : 'pt-3.5 sm:pt-5'
    }`}>
      {/* Floating Translucent Bar */}
      <div 
        className={`max-w-7xl mx-auto rounded-2xl lg:rounded-full transition-all duration-500 flex items-center justify-between ${
          isScrolled 
            ? 'bg-white/92 backdrop-blur-xl border border-shivaangan-amber/25 shadow-xl shadow-slate-900/8 py-2.5 px-4 sm:px-6 ring-1 ring-black/5' 
            : 'bg-white/75 md:bg-white/80 backdrop-blur-md border border-white/70 shadow-md py-3 px-4 sm:px-7'
        }`}
      >
        {/* Brand Logo */}
        <Link 
          to="/" 
          className="flex items-center gap-2 group shrink-0 transition-opacity hover:opacity-95"
          aria-label="Shivaangan Realcon LLP Home"
        >
          <ShivaanganLogo variant="light" className="transition-transform duration-300 group-hover:scale-105" />
        </Link>

        {/* Desktop Navigation Menu */}
        <nav className="hidden lg:flex items-center space-x-1.5 xl:space-x-2">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;

            if (link.isFeatured) {
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className="bg-gradient-to-r from-shivaangan-terracotta to-shivaangan-amber text-white font-bold text-xs xl:text-sm tracking-wide px-4 py-2 rounded-full shadow-md shadow-shivaangan-terracotta/20 hover:brightness-110 hover:shadow-lg transition-all duration-300 flex items-center gap-1.5 mx-1"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-200 animate-pulse" />
                  <span>{link.name}</span>
                </Link>
              );
            }

            return (
              <Link
                key={link.name}
                to={link.path}
                className={`text-xs xl:text-sm font-semibold tracking-wide px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                  isActive 
                    ? 'text-shivaangan-terracotta bg-shivaangan-amber/10 font-bold border border-shivaangan-amber/20' 
                    : 'text-shivaangan-charcoal hover:text-shivaangan-terracotta hover:bg-slate-100/60'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Action CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${COMPANY_INFO.director.phone}`}
            className="bg-shivaangan-charcoal hover:bg-shivaangan-terracotta text-white py-2 px-4 rounded-full text-xs tracking-wider uppercase font-bold flex items-center gap-2 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
          >
            <Phone className="w-3.5 h-3.5 text-shivaangan-amber" />
            <span>Enquire Now</span>
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="lg:hidden flex items-center">
          <button 
            className="text-shivaangan-charcoal p-2 rounded-xl bg-slate-100/80 hover:bg-slate-200/80 transition-colors focus:outline-none"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X size={24} className="text-shivaangan-terracotta" />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Drop-Down Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="lg:hidden max-w-7xl mx-auto mt-2 bg-white/95 backdrop-blur-2xl border border-white/80 shadow-2xl rounded-2xl p-5 ring-1 ring-black/5 overflow-hidden"
          >
            <div className="flex flex-col space-y-1.5">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`font-semibold text-sm py-2.5 px-4 rounded-xl transition-colors flex items-center justify-between ${
                      link.isFeatured
                        ? 'bg-gradient-to-r from-shivaangan-terracotta to-shivaangan-amber text-white font-bold shadow-md'
                        : isActive
                          ? 'bg-shivaangan-amber/10 text-shivaangan-terracotta font-bold border border-shivaangan-amber/20'
                          : 'text-shivaangan-charcoal hover:bg-slate-100/80'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="flex items-center gap-2">
                      {link.isFeatured && <Sparkles className="w-4 h-4 text-amber-200" />}
                      {link.name}
                    </span>
                    {link.isFeatured ? (
                      <span className="bg-white/20 text-white text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider">
                        FLAGSHIP
                      </span>
                    ) : (
                      <ArrowRight className="w-3.5 h-3.5 opacity-40" />
                    )}
                  </Link>
                );
              })}

              <div className="pt-3 mt-2 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <a
                  href={`tel:${COMPANY_INFO.director.phone}`}
                  className="bg-shivaangan-charcoal hover:bg-shivaangan-terracotta text-white font-bold text-center py-2.5 px-4 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Phone className="w-3.5 h-3.5 text-shivaangan-amber" />
                  <span>Call +91 9767900555</span>
                </a>
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hello%20Shivaangan%20Realcon%20LLP,%20I%20am%20interested%20in%20your%20projects.`}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-center py-2.5 px-4 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
