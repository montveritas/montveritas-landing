import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  variant?: 'navy' | 'navy-dark' | 'navy-light' | 'offwhite' | 'white';
  spacing?: 'compact' | 'default' | 'spacious';
  id?: string;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({
  children,
  variant = 'navy',
  spacing = 'default',
  id,
  className,
  ...props
}) => {
  const variantClasses = {
    navy: 'bg-[#081B33] text-white',
    'navy-dark': 'bg-[#051224] text-white',
    'navy-light': 'bg-[#0d2647] text-white',
    offwhite: 'bg-[#F5F5F3] text-[#1E1E1E]',
    white: 'bg-white text-[#1E1E1E]',
  };

  const spacingClasses = {
    compact: 'py-12 md:py-16',
    default: 'py-16 md:py-24 lg:py-28', // Standard 120px desktop / 80px mobile spacing
    spacious: 'py-20 md:py-32 lg:py-36',
  };

  return (
    <section
      id={id}
      className={cn(
        'relative w-full overflow-hidden transition-colors duration-300',
        variantClasses[variant],
        spacingClasses[spacing],
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
};
