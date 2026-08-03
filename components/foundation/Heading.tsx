import React from 'react';
import { cn } from '@/lib/utils';

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4;
  subtitle?: string;
  badgeText?: string;
  align?: 'left' | 'center' | 'right';
  color?: 'white' | 'gold' | 'dark';
  className?: string;
}

export const Heading: React.FC<HeadingProps> = ({
  children,
  level = 2,
  subtitle,
  badgeText,
  align = 'left',
  color = 'white',
  className,
  ...props
}) => {
  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  };

  const titleColorClasses = {
    white: 'text-white',
    gold: 'text-[#C89B3C]',
    dark: 'text-[#1E1E1E]',
  };

  const Component = (`h${level}` as React.ElementType);

  const levelClasses = {
    1: 'text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15]',
    2: 'text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.2]',
    3: 'text-2xl sm:text-3xl lg:text-4xl font-semibold leading-[1.25]',
    4: 'text-xl sm:text-2xl font-semibold leading-[1.3]',
  };

  return (
    <div className={cn('flex flex-col max-w-4xl mb-10 md:mb-14', alignmentClasses[align], className)}>
      {badgeText && (
        <span className="inline-flex items-center px-3.5 py-1 mb-4 rounded-full text-xs font-semibold uppercase tracking-widest text-[#C89B3C] border border-[#C89B3C]/30 bg-[#C89B3C]/10 whitespace-nowrap">
          {badgeText}
        </span>
      )}
      
      <Component
        className={cn(
          'font-serif font-serif-heading',
          levelClasses[level],
          titleColorClasses[color]
        )}
        {...props}
      >
        {children}
      </Component>

      {subtitle && (
        <p className={cn(
          'mt-4 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-3xl',
          color === 'dark' ? 'text-[#555555]' : 'text-gray-300'
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
