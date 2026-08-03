import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: 'gold' | 'outline' | 'navy' | 'subtle';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'gold',
  className,
  ...props
}) => {
  const variantClasses = {
    gold: 'bg-[#C89B3C]/15 border border-[#C89B3C]/40 text-[#E5C170]',
    outline: 'border border-[#C89B3C] text-[#C89B3C] bg-transparent',
    navy: 'bg-[#051224] border border-[#C89B3C]/30 text-white',
    subtle: 'bg-white/10 text-white border border-white/20',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-widest whitespace-nowrap select-none',
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
