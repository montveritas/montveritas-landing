import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from './Button';
import { ArrowRight } from 'lucide-react';

interface CallToActionBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  secondaryButtonText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  primaryHref?: string;
  secondaryHref?: string;
  className?: string;
}

export const CallToActionBlock: React.FC<CallToActionBlockProps> = ({
  title = 'QUERO MEU DIAGNÓSTICO GRATUITO',
  subtitle = 'Desenvolva uma estratégia patrimonial inteligente e personalizada para construir, multiplicar e proteger seu patrimônio com visão de longo prazo.',
  buttonText = 'AGENDAR DIAGNÓSTICO GRATUITO',
  secondaryButtonText,
  onPrimaryClick,
  onSecondaryClick,
  primaryHref = '#formulario',
  secondaryHref,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        'relative rounded-[18px] bg-gradient-to-br from-[#0d2647] via-[#081B33] to-[#051224] p-8 sm:p-12 md:p-16 border border-[#C89B3C]/30 text-center shadow-2xl overflow-hidden',
        className
      )}
      {...props}
    >
      {/* Subtle Gold Background Accent */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-[#C89B3C]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-[#C89B3C]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
        <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
          {title}
        </h3>
        
        {subtitle && (
          <p className="text-gray-300 text-base sm:text-lg mb-8 leading-relaxed max-w-2xl">
            {subtitle}
          </p>
        )}

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
          <Button
            variant="primary"
            size="lg"
            href={primaryHref}
            onClick={onPrimaryClick}
            icon={<ArrowRight className="w-5 h-5" />}
          >
            {buttonText}
          </Button>

          {secondaryButtonText && (
            <Button
              variant="secondary"
              size="lg"
              href={secondaryHref}
              onClick={onSecondaryClick}
            >
              {secondaryButtonText}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
