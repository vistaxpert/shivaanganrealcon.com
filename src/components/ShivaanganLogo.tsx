import React from 'react';

interface ShivaanganLogoProps {
  className?: string;
  variant?: 'light' | 'dark'; // light background vs dark background
  height?: number | string;
  showSubtext?: boolean;
}

const ShivaanganLogo: React.FC<ShivaanganLogoProps> = ({ 
  className = '', 
  variant = 'light',
  height,
}) => {
  const isDark = variant === 'dark';

  return (
    <div className={`inline-flex items-center ${className}`}>
      <img 
        src="/shivaangan_logo.svg" 
        alt="Shivaangan Realcon LLP" 
        className={`h-11 md:h-13 w-auto object-contain transition-transform duration-300 ${
          isDark 
            ? 'bg-white/95 px-2.5 py-1.5 rounded-xl shadow-md border border-white/20' 
            : 'filter drop-shadow-sm'
        }`}
        style={height ? { height } : undefined}
      />
    </div>
  );
};

export default ShivaanganLogo;

