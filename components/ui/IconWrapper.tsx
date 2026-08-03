import React from 'react';
import { cn } from '@/lib/utils';

interface IconWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'gold-glow' | 'outline' | 'subtle';
  shape?: 'circle' | 'rounded';
  className?: string;
}

export const IconWrapper: React.FC<IconWrapperProps> = ({
  icon,
  size = 'md',
  variant = 'gold-glow',
  shape = 'rounded',
  className,
  ...props
}) => {
  const sizeClasses = {
    sm: 'w-10 h-10 text-lg',
    md: 'w-14 h-14 text-2xl',
    lg: 'w-20 h-20 text-3xl',
  };

  const variantClasses = {
    'gold-glow':
      'bg-[#081B33] border border-[#C89B3C] text-[#C89B3C] shadow-lg shadow-[#C89B3C]/15',
    outline: 'bg-transparent border border-[#C89B3C]/50 text-[#C89B3C]',
    subtle: 'bg-[#C89B3C]/10 border border-[#C89B3C]/30 text-[#E5C170]',
  };

  const shapeClasses = {
    circle: 'rounded-full',
    rounded: 'rounded-[14px]',
  };

  return (
    <div
      className={cn(
        'flex items-center justify-center flex-shrink-0 transition-all duration-300',
        sizeClasses[size],
        variantClasses[variant],
        shapeClasses[shape],
        className
      )}
      {...props}
    >
      {icon}
    </div>
  );
};
