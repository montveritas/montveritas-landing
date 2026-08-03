import React from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  size?: 'default' | 'narrow' | 'wide' | 'full';
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  size = 'default',
  className,
  ...props
}) => {
  const sizeClasses = {
    narrow: 'max-w-4xl',
    default: 'max-w-6xl lg:max-w-7xl', // 1200px - 1280px container
    wide: 'max-w-[1440px]',
    full: 'max-w-full',
  };

  return (
    <div
      className={cn(
        'mx-auto w-full px-4 sm:px-6 lg:px-8',
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
