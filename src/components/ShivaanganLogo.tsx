import React from 'react';

interface ShivaanganLogoProps {
  className?: string;
  variant?: 'light' | 'dark';
  height?: number | string;
}

const ShivaanganLogo: React.FC<ShivaanganLogoProps> = ({ 
  className = '', 
  variant = 'light',
  height = 42,
}) => {
  const isDark = variant === 'dark';

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <img 
        src="/shivaangan_logo_only.svg" 
        alt="Shivaangan Emblem" 
        className="w-auto object-contain shrink-0"
        style={{ height }}
      />
      <div className="flex flex-col justify-center leading-none">
        <div className="text-xl md:text-2xl font-black tracking-tight flex items-center">
          <span style={{ color: '#ab533e' }}>SHIVA</span>
          <span style={{ color: '#d37d1e' }}>ANGAN</span>
        </div>
        <span 
          style={{ color: isDark ? '#9ca3af' : '#595b60' }} 
          className="text-[9px] md:text-[10px] uppercase font-bold tracking-[0.28em] mt-1"
        >
          REALCON
        </span>
      </div>
    </div>
  );
};

export default ShivaanganLogo;
