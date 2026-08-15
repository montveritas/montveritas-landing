import React from 'react';
import { Container } from '@/components/foundation/Container';
import { MontveritasLogo } from '@/components/ui/MontveritasLogo';
import { Linkedin, Instagram, ShieldCheck, Globe, Send } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#051224] text-white border-t border-[#C89B3C]/20 pt-16 pb-12">
      <Container size="default">
        {/* Main Footer Grid - 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand & Tagline */}
          <div className="flex flex-col gap-4">
            <MontveritasLogo size="md" />
            
            <p className="text-sm text-gray-200 font-sans leading-relaxed">
              Especialistas em Crescimento Patrimonial Inteligente.
            </p>
            
            <div className="text-xs uppercase tracking-wider text-[#E5C170] font-semibold pt-2 flex items-center gap-2">
              <Globe className="w-4 h-4 shrink-0 text-[#C89B3C]" />
              <span>Atendimento 100% Online (Brasil e Exterior)</span>
            </div>
          </div>

          {/* Column 2: Compromisso Institucional (Highlight Box beside Logo) */}
          <div className="bg-[#081B33] border border-[#C89B3C]/40 rounded-xl p-5 shadow-lg flex flex-col justify-between gap-3">
            <div className="flex items-center gap-2.5 text-[#E5C170]">
              <ShieldCheck className="w-6 h-6 shrink-0 text-[#C89B3C]" />
              <h4 className="font-serif text-lg font-bold text-white tracking-wide">
                Compromisso Institucional
              </h4>
            </div>
            <p className="text-sm text-gray-200 font-sans leading-relaxed">
              Não vendemos um produto específico. Desenvolvemos estratégias patrimoniais personalizadas utilizando soluções de parceiros reconhecidos nacionalmente em seus respectivos segmentos.
            </p>
            <div className="text-[11px] text-[#C89B3C] font-semibold uppercase tracking-wider">
              ✦ Independência & Isenção Consultiva
            </div>
          </div>

          {/* Column 3: Navigation Links */}
          <div className="flex flex-col gap-3">
            <h4 className="font-serif text-lg font-semibold text-white mb-2 border-b border-[#C89B3C]/30 pb-2">
              Navegação
            </h4>
            <a 
              href="#inicio" 
              className="text-sm text-gray-200 hover:text-[#E5C170] transition-colors py-1 font-medium underline underline-offset-4 decoration-[#C89B3C]/50 hover:decoration-[#E5C170]"
            >
              Início
            </a>
            <a 
              href="#estrategias" 
              className="text-sm text-gray-200 hover:text-[#E5C170] transition-colors py-1 font-medium underline underline-offset-4 decoration-[#C89B3C]/50 hover:decoration-[#E5C170]"
            >
              Estratégias Patrimoniais
            </a>
            <a 
              href="#como-funciona" 
              className="text-sm text-gray-200 hover:text-[#E5C170] transition-colors py-1 font-medium underline underline-offset-4 decoration-[#C89B3C]/50 hover:decoration-[#E5C170]"
            >
              Como Funciona
            </a>
            <a 
              href="#sobre" 
              className="text-sm text-gray-200 hover:text-[#E5C170] transition-colors py-1 font-medium underline underline-offset-4 decoration-[#C89B3C]/50 hover:decoration-[#E5C170]"
            >
              Sobre a Montveritas
            </a>
            <a 
              href="#faq" 
              className="text-sm text-gray-200 hover:text-[#E5C170] transition-colors py-1 font-medium underline underline-offset-4 decoration-[#C89B3C]/50 hover:decoration-[#E5C170]"
            >
              Perguntas Frequentes
            </a>
            <a 
              href="#formulario" 
              className="text-sm text-[#E5C170] hover:text-white transition-colors py-1 font-bold underline underline-offset-4 decoration-[#C89B3C] flex items-center gap-1.5 mt-1"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Entrar em Contato</span>
            </a>
          </div>

          {/* Column 4: Siga-nos nas redes sociais */}
          <div className="flex flex-col gap-3">
            <h4 className="font-serif text-lg font-semibold text-white mb-2 border-b border-[#C89B3C]/30 pb-2">
              Siga-nos nas redes sociais
            </h4>
            
            <div className="flex flex-col gap-3.5 mt-1">
              {/* Instagram Button */}
              <a
                href="https://instagram.com/montveritas.patrimonial"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 p-3.5 rounded-xl bg-[#081B33] border border-[#C89B3C]/30 hover:border-[#C89B3C] hover:bg-[#0d2647] text-white transition-all shadow-md"
              >
                <div className="w-9 h-9 rounded-lg bg-[#C89B3C]/10 border border-[#C89B3C]/30 flex items-center justify-center shrink-0 group-hover:bg-[#C89B3C]/20 transition-colors">
                  <Instagram className="w-5 h-5 text-[#E5C170]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-gray-400">Instagram</span>
                  <span className="text-sm font-semibold text-gray-200 group-hover:text-white underline underline-offset-4 decoration-[#C89B3C]/60 group-hover:decoration-[#E5C170]">
                    @montveritas.patrimonial
                  </span>
                </div>
              </a>

              {/* LinkedIn Button */}
              <a
                href="https://www.linkedin.com/in/luizmontveritas"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 p-3.5 rounded-xl bg-[#081B33] border border-[#C89B3C]/30 hover:border-[#C89B3C] hover:bg-[#0d2647] text-white transition-all shadow-md"
              >
                <div className="w-9 h-9 rounded-lg bg-[#C89B3C]/10 border border-[#C89B3C]/30 flex items-center justify-center shrink-0 group-hover:bg-[#C89B3C]/20 transition-colors">
                  <Linkedin className="w-5 h-5 text-[#E5C170]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-gray-400">LinkedIn</span>
                  <span className="text-sm font-semibold text-gray-200 group-hover:text-white underline underline-offset-4 decoration-[#C89B3C]/60 group-hover:decoration-[#E5C170]">
                    LinkedIn Montveritas
                  </span>
                </div>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© 2026 Montveritas. Todos os direitos reservados.</p>
          
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gray-300 transition-colors underline underline-offset-2 decoration-gray-600">
              Política de Privacidade
            </a>
            <span>•</span>
            <a href="#" className="hover:text-gray-300 transition-colors underline underline-offset-2 decoration-gray-600">
              Termos de Uso
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};
