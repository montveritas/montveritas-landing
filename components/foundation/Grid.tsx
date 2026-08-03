import React from 'react';
import { cn } from '@/lib/utils';

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  cols?: 1 | 2 | 3 | 4 | 6;
  colsMd?: 1 | 2 | 3 | 4;
  colsLg?: 1 | 2 | 3 | 4 | 6;
  gap?: 16 | 24 | 32 | 48;
  className?: string;
}

export const Grid: React.FC<GridProps> = ({
  children,
  cols = 1,
  colsMd = 2,
  colsLg = 3,
  gap = 32,
  className,
  ...props
}) => {
  const colsClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
    6: 'grid-cols-6',
  };

  const colsMdClasses = {
    1: 'md:grid-cols-1',
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4',
  };

  const colsLgClasses = {
    1: 'lg:grid-cols-1',
    2: 'lg:grid-cols-2',
    3: 'lg:grid-cols-3',
    4: 'lg:grid-cols-4',
    6: 'lg:grid-cols-6',
  };

  const gapClasses = {
    16: 'gap-4',
    24: 'gap-6',
    32: 'gap-8',
    48: 'gap-12',
  };

  return (
    <div
      className={cn(
        'grid w-full',
        colsClasses[cols],
        colsMdClasses[colsMd],
        colsLgClasses[colsLg],
        gapClasses[gap],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
