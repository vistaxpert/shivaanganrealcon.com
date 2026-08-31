import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO } from '@/data/companyData';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80")',
          backgroundBlendMode: 'overlay',
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      {/* Content */}
      <div className="container-custom relative z-10 text-white pt-20">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
            Building Your <span className="text-construction-orange">Vision</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed font-normal">
            {COMPANY_INFO.name} delivers excellence in residential, commercial, and turnkey construction with an unwavering commitment to quality, engineering precision, and client satisfaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/projects"
              className="bg-construction-orange hover:bg-opacity-90 text-white py-3.5 px-8 rounded-md font-medium transition-colors flex items-center justify-center gap-2 group shadow-md"
            >
              View Our Work
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/contact"
              className="bg-white hover:bg-opacity-90 text-construction-navy py-3.5 px-8 rounded-md font-medium transition-colors flex items-center justify-center shadow-md"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
