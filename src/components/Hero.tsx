
import { ChevronRight, Award, Sparkles, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO } from '@/data/companyData';

const Hero = () => {
  return (
    <div className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-shivaangan-navy">
      {/* Hero Overlay & Image Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 scale-105 transition-transform duration-10000" 
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2000&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-shivaangan-dark/95 via-shivaangan-navy/90 to-shivaangan-dark/75"></div>
      </div>
      
      {/* Decorative Gold Elements */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-shivaangan-gold/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Content Container */}
      <div className="container-custom relative z-10 text-white pt-24 pb-16">
        <div className="max-w-3xl animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-shivaangan-gold/20 border border-shivaangan-gold/40 text-shivaangan-gold px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-md">
            <Award className="w-4 h-4 text-shivaangan-gold" />
            President - CREDAI Baramati Leadership
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 text-white leading-tight tracking-tight">
            Crafting Architectural <span className="gold-gradient-text">Landmarks</span> & Luxury Living
          </h1>

          <p className="text-lg md:text-2xl text-gray-300 mb-8 font-light leading-relaxed">
            Welcome to <strong className="text-white font-semibold">{COMPANY_INFO.name}</strong>. Spearheaded by <span className="text-shivaangan-gold font-medium">Er. Rahul Khatmode</span>, delivering unmatched structural engineering, legal clarity, and premium lifestyle projects across Pune & Baramati.
          </p>

          {/* Quick Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10 border-y border-white/10 py-4 max-w-2xl">
            <div>
              <p className="text-2xl font-black text-shivaangan-gold">15+ Years</p>
              <p className="text-xs text-gray-300 uppercase tracking-wider">Engineering Proven</p>
            </div>
            <div>
              <p className="text-2xl font-black text-shivaangan-gold">REGALIA</p>
              <p className="text-xs text-gray-300 uppercase tracking-wider">Flagship Landmark</p>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="text-2xl font-black text-shivaangan-gold">14+ Projects</p>
              <p className="text-xs text-gray-300 uppercase tracking-wider">Completed & Ongoing</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/regalia"
              className="btn-gold py-4 px-8 text-base tracking-wider uppercase font-bold flex items-center justify-center gap-2 group shadow-xl shadow-amber-500/20"
            >
              <Sparkles className="w-5 h-5 text-shivaangan-navy" />
              Explore REGALIA Flagship
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/contact"
              className="bg-white/10 hover:bg-white/20 border border-white/30 text-white py-4 px-8 rounded-md font-bold transition-all flex items-center justify-center gap-2 backdrop-blur-md"
            >
              <Building2 className="w-5 h-5 text-shivaangan-gold" />
              Schedule Site Visit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
