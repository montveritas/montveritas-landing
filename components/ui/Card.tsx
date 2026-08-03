import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'premium' | 'white' | 'glass' | 'interactive';
  hoverEffect?: boolean;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'premium',
  hoverEffect = true,
  className,
  ...props
}) => {
  const variantClasses = {
    premium:
      'bg-[#0d2647] border border-[#C89B3C]/20 text-white shadow-xl shadow-black/20',
    white:
      'bg-white border border-gray-100 text-[#1E1E1E] shadow-md shadow-black/5',
    glass:
      'bg-[#0a2242]/80 backdrop-blur-md border border-[#C89B3C]/20 text-white shadow-xl',
    interactive:
      'bg-[#081B33] border border-[#C89B3C]/30 text-white shadow-lg hover:border-[#C89B3C]',
  };

  return (
    <div
      className={cn(
        'rounded-[18px] p-8 md:p-10 transition-all duration-300 relative overflow-hidden group', // 18px radius, 40px (p-10) padding
        variantClasses[variant],
        hoverEffect && 'hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#C89B3C]/10',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
