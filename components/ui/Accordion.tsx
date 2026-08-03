'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface AccordionItemData {
  id: string;
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItemData[];
  className?: string;
  allowMultiple?: boolean;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  className,
  allowMultiple = false,
}) => {
  const [openIds, setOpenIds] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className={cn('w-full flex flex-col gap-4', className)}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        return (
          <div
            key={item.id}
            className={cn(
              'rounded-[14px] border transition-all duration-300 overflow-hidden',
              isOpen
                ? 'bg-[#0d2647] border-[#C89B3C] shadow-lg shadow-black/20'
                : 'bg-[#0a2242]/60 border-[#C89B3C]/20 hover:border-[#C89B3C]/50'
            )}
          >
            <button
              type="button"
              onClick={() => toggleItem(item.id)}
              className="w-full flex items-center justify-between p-6 sm:p-7 text-left cursor-pointer focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="font-serif text-lg sm:text-xl font-semibold text-white pr-4 leading-snug">
                {item.question}
              </span>
              <div
                className={cn(
                  'flex-shrink-0 w-8 h-8 rounded-full border border-[#C89B3C]/40 flex items-center justify-center text-[#C89B3C] transition-transform duration-300',
                  isOpen && 'transform rotate-180 bg-[#C89B3C]/20 border-[#C89B3C]'
                )}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            {isOpen && (
              <div className="px-6 pb-6 sm:px-7 sm:pb-7 text-gray-300 text-base leading-relaxed border-t border-[#C89B3C]/10 pt-4">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
