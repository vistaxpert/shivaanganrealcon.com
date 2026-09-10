import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO } from '@/data/companyData';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-start overflow-hidden bg-white pt-20">
      {/* Background Image - Anchored to the right to leave space for the text on the left */}
      <div 
        className="absolute inset-0 bg-cover z-0" 
        style={{ 
          backgroundImage: 'url(/images/building.png)',
          backgroundPosition: '100% center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Strong gradient fading from left to right to ensure text readability without a card */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent w-full md:w-3/4 lg:w-2/3"></div>
      </div>
      
      {/* Content Container - Constrained to prevent overlap with the building */}
      <div className="container-custom relative z-10 w-full">
        <div className="max-w-lg lg:max-w-xl animate-fade-in text-left">
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-gray-900 leading-tight drop-shadow-sm">
            Building Your <br className="hidden sm:block" /><span className="text-[#FF6600]">Vision</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed font-medium">
            {COMPANY_INFO.name} delivers excellence in residential, commercial, and turnkey construction with an unwavering commitment to quality, engineering precision, and client satisfaction.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/projects"
              className="bg-[#FF6600] hover:bg-[#e65c00] text-white py-3.5 px-8 rounded-md font-bold transition-all flex items-center justify-center gap-2 shadow-lg hover:-translate-y-1 w-fit"
            >
              View Our Work
              <ChevronRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/contact"
              className="bg-white hover:bg-gray-50 text-gray-900 py-3.5 px-8 rounded-md font-bold transition-all flex items-center justify-center shadow-md border border-gray-200 hover:-translate-y-1 w-fit"
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