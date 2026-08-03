import React from 'react';
import { cn } from '@/lib/utils';

interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  direction?: 'row' | 'col';
  gap?: 8 | 12 | 16 | 24 | 32 | 48;
  align?: 'start' | 'center' | 'end' | 'stretch';
  justify?: 'start' | 'center' | 'end' | 'between';
  wrap?: boolean;
  className?: string;
}

export const Stack: React.FC<StackProps> = ({
  children,
  direction = 'col',
  gap = 16,
  align = 'start',
  justify = 'start',
  wrap = false,
  className,
  ...props
}) => {
  const directionClasses = {
    row: 'flex-row',
    col: 'flex-col',
  };

  const gapClasses = {
    8: 'gap-2',
    12: 'gap-3',
    16: 'gap-4',
    24: 'gap-6',
    32: 'gap-8',
    48: 'gap-12',
  };

  const alignClasses = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
    stretch: 'items-stretch',
  };

  const justifyClasses = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
    between: 'justify-between',
  };

  return (
    <div
      className={cn(
        'flex w-full',
        directionClasses[direction],
        gapClasses[gap],
        alignClasses[align],
        justifyClasses[justify],
        wrap && 'flex-wrap',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
