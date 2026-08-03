import React from 'react';
import { cn } from '@/lib/utils';

interface SurfaceProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'glass' | 'navy-card' | 'white-card' | 'gold-subtle';
  radius?: 'default' | 'large' | 'small';
  padding?: 'compact' | 'default' | 'spacious';
  className?: string;
}

export const Surface: React.FC<SurfaceProps> = ({
  children,
  variant = 'glass',
  radius = 'large',
  padding = 'default',
  className,
  ...props
}) => {
  const variantClasses = {
    glass: 'bg-[#0a2242]/70 backdrop-blur-md border border-[#C89B3C]/20 text-white shadow-xl',
    'navy-card': 'bg-[#0d2647] border border-[#C89B3C]/20 text-white shadow-xl',
    'white-card': 'bg-white border border-gray-100 text-[#1E1E1E] shadow-lg shadow-black/5',
    'gold-subtle': 'bg-[#C89B3C]/10 border border-[#C89B3C]/30 text-white',
  };

  const radiusClasses = {
    small: 'rounded-[12px]',
    default: 'rounded-[14px]',
    large: 'rounded-[18px]', // Brand Guide: 18px radius for Premium Cards
  };

  const paddingClasses = {
    compact: 'p-4 sm:p-6',
    default: 'p-6 sm:p-8 lg:p-10', // Brand Guide: 40px default padding
    spacious: 'p-8 sm:p-10 lg:p-12',
  };

  return (
    <div
      className={cn(
        'relative transition-all duration-300',
        variantClasses[variant],
        radiusClasses[radius],
        paddingClasses[padding],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
