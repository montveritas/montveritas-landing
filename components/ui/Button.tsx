import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  icon,
  iconPosition = 'right',
  className,
  href,
  target,
  rel,
  onClick,
  ...props
}) => {
  const variantClasses = {
    primary:
      'bg-gradient-to-r from-[#C89B3C] to-[#A67C2E] text-white hover:from-[#D4AF37] hover:to-[#B88B32] shadow-md hover:shadow-lg hover:shadow-[#C89B3C]/20 border border-[#E5C170]/30',
    secondary:
      'bg-transparent text-[#C89B3C] border border-[#C89B3C] hover:bg-[#C89B3C] hover:text-white shadow-sm',
    outline:
      'bg-transparent text-white border border-white/30 hover:border-white hover:bg-white/10',
    text:
      'bg-transparent text-[#C89B3C] hover:text-[#E5C170] p-0 shadow-none border-none hover:underline',
  };

  const sizeClasses = {
    sm: 'text-xs px-4 py-2.5 rounded-[10px] font-medium tracking-wider',
    md: 'text-sm sm:text-base px-6 py-3.5 rounded-[14px] font-semibold tracking-wide min-h-[52px]',
    lg: 'text-base sm:text-lg px-8 py-4 rounded-[14px] font-semibold tracking-wide min-h-[56px]', // UI System: 56px height, 32px padding, 14px radius
  };

  const baseClasses = cn(
    'inline-flex items-center justify-center font-sans uppercase transition-all duration-300 cursor-pointer select-none active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#C89B3C]/50',
    fullWidth ? 'w-full' : 'w-auto',
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  const content = (
    <span className="inline-flex items-center justify-center flex-wrap sm:flex-nowrap gap-2 text-center leading-tight">
      {icon && iconPosition === 'left' && <span className="inline-flex shrink-0">{icon}</span>}
      <span className="leading-tight">{children}</span>
      {icon && iconPosition === 'right' && <span className="inline-flex shrink-0">{icon}</span>}
    </span>
  );

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={baseClasses} onClick={onClick as any}>
        {content}
      </a>
    );
  }

  return (
    <button className={baseClasses} onClick={onClick} {...props}>
      {content}
    </button>
  );
};
