import React from 'react';
import { cn } from '@/lib/utils';

interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'gold' | 'dark' | 'light' | 'gold-accent';
  spacing?: 'compact' | 'default' | 'spacious';
  className?: string;
}

export const Divider: React.FC<DividerProps> = ({
  variant = 'gold-accent',
  spacing = 'default',
  className,
  ...props
}) => {
  const spacingClasses = {
    compact: 'my-6',
    default: 'my-12 md:my-16',
    spacious: 'my-16 md:my-24',
  };

  if (variant === 'gold-accent') {
    return (
      <div className={cn('flex items-center justify-center w-full', spacingClasses[spacing], className)} {...props}>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#C89B3C]/40 to-transparent" />
        <div className="mx-4 w-2 h-2 rotate-45 border border-[#C89B3C] bg-[#081B33]" />
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#C89B3C]/40 to-transparent" />
      </div>
    );
  }

  const borderVariantClasses = {
    gold: 'border-[#C89B3C]/30',
    dark: 'border-gray-800',
    light: 'border-gray-200',
  };

  return (
    <div
      className={cn(
        'w-full border-t',
        borderVariantClasses[variant as 'gold' | 'dark' | 'light'],
        spacingClasses[spacing],
        className
      )}
      {...props}
    />
  );
};
