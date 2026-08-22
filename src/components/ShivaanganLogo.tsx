import React from 'react';

interface ShivaanganLogoProps {
  className?: string;
  variant?: 'light' | 'dark'; // light background vs dark background
  showSubtext?: boolean;
}

const ShivaanganLogo: React.FC<ShivaanganLogoProps> = ({ 
  className = '', 
  variant = 'light',
  showSubtext = true 
}) => {
  const isDark = variant === 'dark';
  
  // Colors from official logo
  const terracottaColor = '#A44C2E';
  const amberColor = '#D97706';
  const realconColor = isDark ? '#E5E7EB' : '#374151';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Official Pinwheel Logo Mark (6 S-petals) */}
      <svg 
        viewBox="0 0 100 100" 
        className="w-10 h-10 shrink-0" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="translate(50, 50)">
          {[0, 60, 120, 180, 240, 300].map((angle, i) => (
            <g key={i} transform={`rotate(${angle})`}>
              <path
                d="M 0,-38 C 12,-38 18,-24 10,-12 C 4,-4 -4,-6 -8,-14 C -12,-22 -6,-36 0,-38 Z"
                fill={terracottaColor}
              />
            </g>
          ))}
          {/* Inner circle accent */}
          <circle cx="0" cy="0" r="4" fill={amberColor} />
        </g>
      </svg>

      {/* Typography */}
      <div className="flex flex-col">
        <div className="text-xl md:text-2xl font-extrabold tracking-tight leading-none flex items-center">
          <span style={{ color: terracottaColor }}>SHIVA</span>
          <span style={{ color: amberColor }}>ANGAN</span>
        </div>
        {showSubtext && (
          <span 
            className="text-[10px] md:text-[11px] font-bold tracking-[0.2em] leading-tight uppercase mt-0.5" 
            style={{ color: realconColor }}
          >
            REALCON LLP<span style={{ color: terracottaColor }}>.</span>
          </span>
        )}
      </div>
    </div>
  );
};

export default ShivaanganLogo;
