import React from 'react';
import { Container } from '@/components/foundation/Container';
import { MontveritasLogo } from '@/components/ui/MontveritasLogo';
import { Linkedin, Instagram, MessageCircle, ShieldCheck, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#051224] text-white border-t border-[#C89B3C]/20 pt-16 pb-12">
      <Container size="default">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/10">
          {/* Column 1: Brand & Tagline */}
          <div className="flex flex-col gap-4">
            <MontveritasLogo size="md" />
            
            <p className="text-sm text-gray-300 font-sans leading-relaxed">
              Especialistas em Crescimento Patrimonial Inteligente
            </p>
            
            <div className="text-[11px] uppercase tracking-wider text-[#C89B3C] font-semibold pt-1 flex items-center gap-2">
              <Globe className="w-4 h-4 shrink-0 text-[#C89B3C]" />
              <span>Atendimento 100% Online (Brasil e Exterior)</span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="flex flex-col gap-3">
            <h4 className="font-serif text-lg font-semibold text-white mb-2">
              Navegação
            </h4>
            <a href="#inicio" className="text-sm text-gray-400 hover:text-[#C89B3C] transition-colors py-1">
              Início
            </a>
            <a href="#estrategias" className="text-sm text-gray-400 hover:text-[#C89B3C] transition-colors py-1">
              Estratégias Patrimoniais
            </a>
            <a href="#como-funciona" className="text-sm text-gray-400 hover:text-[#C89B3C] transition-colors py-1">
              Como Funciona
            </a>
            <a href="#sobre" className="text-sm text-gray-400 hover:text-[#C89B3C] transition-colors py-1">
              Sobre a Montveritas
            </a>
            <a href="#faq" className="text-sm text-gray-400 hover:text-[#C89B3C] transition-colors py-1">
              Perguntas Frequentes
            </a>
          </div>

          {/* Column 3: Contact & Social */}
          <div className="flex flex-col gap-3">
            <h4 className="font-serif text-lg font-semibold text-white mb-2">
              Contato & Redes
            </h4>
            <a
              href="https://wa.me/5535988170330?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20o%20diagn%C3%B3stico%20patrimonial%20da%20Montveritas."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-[#C89B3C] transition-colors py-1"
            >
              <MessageCircle className="w-4 h-4 text-[#C89B3C]" />
              <span>WhatsApp: (35) 98817-0330</span>
            </a>
            <a
              href="https://instagram.com/montveritas.patrimonial"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-[#C89B3C] transition-colors py-1"
            >
              <Instagram className="w-4 h-4 text-[#C89B3C]" />
              <span>@montveritas.patrimonial</span>
            </a>
            <a
              href="mailto:montveritas.patrimonial@gmail.com.br"
              className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-[#C89B3C] transition-colors py-1 break-all"
            >
              <span className="text-[#C89B3C] font-semibold">✉</span>
              <span>montveritas.patrimonial@gmail.com.br</span>
            </a>
            <a
              href="https://www.linkedin.com/in/luizmontveritas"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-[#C89B3C] transition-colors py-1"
            >
              <Linkedin className="w-4 h-4 text-[#C89B3C]" />
              <span>LinkedIn</span>
            </a>
          </div>

          {/* Column 4: Institutional Disclaimer */}
          <div className="flex flex-col gap-3">
            <h4 className="font-serif text-lg font-semibold text-white mb-2 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#C89B3C]" />
              <span>Compromisso Institucional</span>
            </h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Não vendemos um produto específico. Desenvolvemos estratégias patrimoniais personalizadas utilizando soluções de parceiros reconhecidos nacionalmente.
            </p>
          </div>
        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© 2026 Montveritas. Todos os direitos reservados.</p>
          
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gray-300 transition-colors">
              Política de Privacidade
            </a>
            <span>•</span>
            <a href="#" className="hover:text-gray-300 transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};
