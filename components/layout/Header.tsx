'use client';

import React, { useState } from 'react';
import { Container } from '@/components/foundation/Container';
import { Button } from '@/components/ui/Button';
import { MontveritasLogo } from '@/components/ui/MontveritasLogo';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#081B33]/95 backdrop-blur-md border-b border-[#C89B3C]/20 transition-all duration-300 h-[70px] md:h-[90px] flex items-center">
      <Container size="wide" className="flex items-center justify-between">
        {/* Brand Logo with MV Monogram */}
        <a href="#" className="group">
          <MontveritasLogo size="md" />
        </a>

        {/* Desktop Navigation Menu Placeholder */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-sans uppercase tracking-widest text-gray-300">
          <a href="#inicio" className="hover:text-[#C89B3C] transition-colors py-1">
            Início
          </a>
          <a href="#estrategias" className="hover:text-[#C89B3C] transition-colors py-1">
            Estratégias
          </a>
          <a href="#como-funciona" className="hover:text-[#C89B3C] transition-colors py-1">
            Como Funciona
          </a>
          <a href="#sobre" className="hover:text-[#C89B3C] transition-colors py-1">
            Sobre
          </a>
          <a href="#contato" className="hover:text-[#C89B3C] transition-colors py-1">
            Contato
          </a>
        </nav>

        {/* Desktop CTA Placeholder */}
        <div className="hidden lg:block">
          <Button variant="primary" size="sm" href="#formulario">
            AGENDAR DIAGNÓSTICO
          </Button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-gray-300 hover:text-white p-2 focus:outline-none"
          aria-label="Alternar Menu"
        >
          {isMobileMenuOpen ? <X className="w-7 h-7 text-[#C89B3C]" /> : <Menu className="w-7 h-7 text-[#C89B3C]" />}
        </button>
      </Container>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-[70px] left-0 w-full bg-[#051224] border-b border-[#C89B3C]/30 p-6 shadow-2xl flex flex-col gap-5 animate-in slide-in-from-top duration-300">
          <a
            href="#inicio"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-white hover:text-[#C89B3C] font-sans text-base uppercase tracking-widest py-2 border-b border-white/10"
          >
            Início
          </a>
          <a
            href="#estrategias"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-white hover:text-[#C89B3C] font-sans text-base uppercase tracking-widest py-2 border-b border-white/10"
          >
            Estratégias
          </a>
          <a
            href="#como-funciona"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-white hover:text-[#C89B3C] font-sans text-base uppercase tracking-widest py-2 border-b border-white/10"
          >
            Como Funciona
          </a>
          <a
            href="#sobre"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-white hover:text-[#C89B3C] font-sans text-base uppercase tracking-widest py-2 border-b border-white/10"
          >
            Sobre
          </a>
          <a
            href="#contato"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-white hover:text-[#C89B3C] font-sans text-base uppercase tracking-widest py-2"
          >
            Contato
          </a>
          <div className="pt-2">
            <Button
              variant="primary"
              size="md"
              fullWidth
              href="#formulario"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              AGENDAR DIAGNÓSTICO
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
