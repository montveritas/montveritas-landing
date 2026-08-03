import React from 'react';

export interface MontveritasLogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const MontveritasLogo: React.FC<MontveritasLogoProps> = ({
  className = '',
  showText = true,
  size = 'md',
}) => {
  // Dimension mappings
  const iconSizes = {
    sm: 'w-9 h-9',
    md: 'w-11 h-11',
    lg: 'w-14 h-14',
  };

  const textSizes = {
    sm: 'text-base',
    md: 'text-lg md:text-xl',
    lg: 'text-2xl',
  };

  const subtextSizes = {
    sm: 'text-[9px]',
    md: 'text-[10px] md:text-xs',
    lg: 'text-xs',
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Icon Mark: MV Interlocking Monogram emblem */}
      <div
        className={`${iconSizes[size]} relative flex-shrink-0 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#0a2342] via-[#051224] to-[#030a14] border border-[#C89B3C]/40 p-1.5 shadow-md shadow-black/40 group-hover:border-[#E5C170] transition-colors`}
      >
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]"
        >
          <defs>
            {/* Gold Light Gradient */}
            <linearGradient id="mvGoldLight" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF2C2" />
              <stop offset="50%" stopColor="#E5C170" />
              <stop offset="100%" stopColor="#B38728" />
            </linearGradient>

            {/* Gold Dark Gradient for 3D depth */}
            <linearGradient id="mvGoldDark" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D4AF37" />
              <stop offset="50%" stopColor="#C89B3C" />
              <stop offset="100%" stopColor="#7A5610" />
            </linearGradient>

            {/* Silver Light Gradient */}
            <linearGradient id="mvSilverLight" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="60%" stopColor="#E2E8F0" />
              <stop offset="100%" stopColor="#CBD5E1" />
            </linearGradient>

            {/* Silver Shadow Gradient */}
            <linearGradient id="mvSilverDark" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#94A3B8" />
              <stop offset="100%" stopColor="#475569" />
            </linearGradient>

            {/* Soft Glow */}
            <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="1.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Golden Upper Chevron 'V' - Left Facet (Highlight) */}
          <path
            d="M 18 20 L 50 52 L 50 42 L 26 18 Z"
            fill="url(#mvGoldLight)"
          />

          {/* Golden Upper Chevron 'V' - Right Facet (Shade) */}
          <path
            d="M 50 52 L 82 20 L 74 18 L 50 42 Z"
            fill="url(#mvGoldDark)"
          />

          {/* Golden Chevron Inner Cap */}
          <path
            d="M 26 18 L 50 42 L 74 18 L 82 20 L 50 52 L 18 20 Z"
            fill="url(#mvGoldLight)"
            opacity="0.9"
          />

          {/* Silver 'M' Left Vertical Pillar */}
          <path
            d="M 18 30 L 26 30 L 26 82 L 18 82 Z"
            fill="url(#mvSilverLight)"
          />

          {/* Silver 'M' Right Vertical Pillar */}
          <path
            d="M 74 30 L 82 30 L 82 82 L 74 82 Z"
            fill="url(#mvSilverDark)"
          />

          {/* Silver 'M' Central Interlocking Left Arm */}
          <path
            d="M 26 36 L 50 72 L 50 60 L 32 33 Z"
            fill="url(#mvSilverLight)"
          />

          {/* Silver 'M' Central Interlocking Right Arm */}
          <path
            d="M 74 36 L 50 72 L 50 60 L 68 33 Z"
            fill="url(#mvSilverDark)"
          />

          {/* Golden Accent Center Tip */}
          <circle cx="50" cy="52" r="2.5" fill="url(#mvGoldLight)" />
        </svg>
      </div>

      {/* Brand Typography */}
      {showText && (
        <div className="flex flex-col">
          <span
            className={`font-serif font-bold tracking-[0.15em] text-white leading-tight ${textSizes[size]}`}
          >
            MONTVERITAS
          </span>
          <span
            className={`font-sans font-semibold uppercase tracking-[0.15em] text-[#C89B3C] ${subtextSizes[size]} mt-0.5`}
          >
            Estratégias Patrimoniais Inteligentes
          </span>
        </div>
      )}
    </div>
  );
};

export default MontveritasLogo;

