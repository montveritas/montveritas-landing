'use client';

import React, { useState } from 'react';
import { Container } from '@/components/foundation/Container';
import { Button } from '@/components/ui/Button';
import { ArrowRight, CheckCircle2, ChevronDown, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);

  const goalsList = [
    { id: 'tranquilidade', label: '🕊️ Ter tranquilidade financeira para dormir em paz' },
    { id: 'casa', label: '🏠 Comprar minha casa' },
    { id: 'construir', label: '🏡 Construir minha casa' },
    { id: 'carro', label: '🚗 Trocar de veículo' },
    { id: 'investir', label: '📈 Investir melhor e organizar recursos' },
    { id: 'juros', label: '💰 Pagar menos juros e estancar perdas' },
    { id: 'familia', label: '👨‍👩‍👧 Proteger minha família' },
    { id: 'aposentadoria', label: '🏖️ Garantir uma aposentadoria tranquila' },
    { id: 'negocio', label: '🏢 Abrir ou expandir meu negócio' },
    { id: 'dividas', label: '💳 Quitar dívidas com inteligência' },
  ];

  const toggleGoal = (id: string) => {
    setSelectedGoals((prev) =>
      prev.includes(id) ? prev.filter((g) => g !== id) : [...prev, id]
    );
  };

  return (
    <section 
      id="inicio" 
      aria-label="Apresentação Principal da Montveritas"
      className="relative w-full min-h-[calc(100vh-90px)] flex flex-col justify-between bg-[#081B33] text-white overflow-hidden py-12 md:py-16 lg:py-20"
    >
      {/* Background sutil */}
      <div 
        className="absolute inset-0 z-0 bg-gradient-to-b from-[#051224] via-[#081B33] to-[#051224] opacity-90 border-b border-[#C89B3C]/20"
        aria-hidden="true"
      />

      <Container size="default" className="relative z-10 my-auto flex flex-col items-center text-center">
        {/* Badge de Posicionamento */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0d2647] border border-[#C89B3C]/30 text-[#E5C170] text-xs sm:text-sm font-sans font-semibold uppercase tracking-widest mb-6 select-none">
          <span className="w-2 h-2 rounded-full bg-[#C89B3C]" />
          <span>OBJETIVOS DE VIDA & PLANEJAMENTO PATRIMONIAL</span>
        </div>

        {/* Headline Principal */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-5xl leading-[1.15] mb-6">
          Seu próximo grande objetivo pode estar mais perto do que você imagina.
        </h1>

        {/* Subheadline Humana */}
        <p className="text-base sm:text-xl md:text-2xl font-normal text-gray-200 max-w-4xl leading-relaxed mb-6">
          Toda grande conquista começa com uma estratégia clara. Seja comprar sua casa, organizar sua vida financeira, investir melhor ou construir um futuro mais tranquilo para sua família, estamos aqui para ajudar você a encontrar o melhor caminho.
        </p>

        {/* Bloco de Conexão com o Visitante */}
        <div className="bg-[#051224]/80 border border-[#C89B3C]/30 rounded-2xl p-5 sm:p-6 max-w-3xl mb-8 shadow-lg">
          <p className="text-sm sm:text-base text-[#E5C170] font-sans font-medium leading-relaxed italic">
            &quot;Você não precisa entender de investimentos. Você só precisa saber onde quer chegar. Nosso papel é traduzir esse mundo para uma linguagem simples e ajudar você a tomar decisões com mais segurança.&quot;
          </p>
        </div>

        {/* Botoes de Acao (CTA) */}
        <div className="flex flex-col items-center gap-3 w-full sm:w-auto mb-12">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <Button
              variant="primary"
              size="lg"
              href="#formulario"
              icon={<ArrowRight className="w-5 h-5" />}
              className="w-full sm:w-auto font-bold uppercase tracking-wide bg-[#C89B3C] hover:bg-[#B38728] text-[#051224] shadow-lg shadow-[#C89B3C]/20"
            >
              DAR O PRIMEIRO PASSO
            </Button>
            
            <Button
              variant="secondary"
              size="lg"
              href="#como-funciona"
              className="w-full sm:w-auto font-medium"
            >
              COMO FUNCIONA
            </Button>
          </div>
          
          <span className="text-xs sm:text-sm text-gray-300 font-sans">
            Diagnóstico estratégico gratuito, sem compromisso e sem pressão para contratar.
          </span>
        </div>

        {/* Widget Interativo de Seleção de Objetivos */}
        <div className="w-full max-w-4xl bg-[#051224]/90 border border-[#C89B3C]/30 rounded-2xl p-6 md:p-8 text-left mb-10 shadow-2xl">
          <div className="flex items-center gap-2 mb-2 text-[#C89B3C]">
            <Sparkles className="w-5 h-5" />
            <h2 className="font-serif text-lg sm:text-xl font-bold text-white">
              O que você gostaria de conquistar?
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-gray-300 mb-6 font-sans">
            Clique nas opções abaixo para marcar seus objetivos e ver o seu ponto de partida:
          </p>

          <div className="flex flex-wrap gap-2.5 sm:gap-3">
            {goalsList.map((goal) => {
              const isSelected = selectedGoals.includes(goal.id);
              return (
                <button
                  key={goal.id}
                  onClick={() => toggleGoal(goal.id)}
                  type="button"
                  className={`px-4 py-3 rounded-xl text-xs sm:text-sm font-sans transition-all duration-200 cursor-pointer flex items-center gap-2 border text-left ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#C89B3C] to-[#E5C170] text-[#051224] border-[#E5C170] font-bold shadow-lg shadow-[#C89B3C]/30 scale-[1.03] ring-2 ring-[#C89B3C]/40'
                      : 'bg-[#081B33]/90 text-gray-200 border-[#C89B3C]/25 hover:border-[#C89B3C] hover:bg-[#0d2647] hover:shadow-md hover:shadow-[#C89B3C]/10 hover:-translate-y-0.5 active:translate-y-0'
                  }`}
                >
                  <span>{goal.label}</span>
                  {isSelected && <CheckCircle2 className="w-4 h-4 ml-1 flex-shrink-0 text-[#051224]" />}
                </button>
              );
            })}
          </div>

          {selectedGoals.length > 0 && (
            <div className="mt-6 pt-4 border-t border-[#C89B3C]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-[#E5C170] font-sans">
                ✓ {selectedGoals.length} {selectedGoals.length === 1 ? 'objetivo selecionado' : 'objetivos selecionados'}. Nós estruturamos a estratégia para a sua realidade.
              </span>
              <a
                href="#formulario"
                className="text-xs font-semibold text-[#C89B3C] hover:text-white underline underline-offset-4 transition-colors uppercase tracking-wider"
              >
                Fazer diagnóstico desses objetivos →
              </a>
            </div>
          )}
        </div>

        {/* Pilares de Confiança no Rodapé da Hero */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full max-w-4xl pt-6 border-t border-[#C89B3C]/20 text-left">
          <div className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-300">
            <CheckCircle2 className="w-4 h-4 text-[#C89B3C] flex-shrink-0" />
            <span>Diagnóstico sem custo</span>
          </div>
          <div className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-300">
            <CheckCircle2 className="w-4 h-4 text-[#C89B3C] flex-shrink-0" />
            <span>Sem pressão comercial</span>
          </div>
          <div className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-300">
            <CheckCircle2 className="w-4 h-4 text-[#C89B3C] flex-shrink-0" />
            <span>Estratégia sob medida</span>
          </div>
          <div className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-300">
            <CheckCircle2 className="w-4 h-4 text-[#C89B3C] flex-shrink-0" />
            <span>Atendimento humano</span>
          </div>
        </div>
      </Container>

      {/* Indicador de Rolar */}
      <div className="relative z-10 flex justify-center pt-6">
        <a 
          href="#estrategias" 
          aria-label="Rolar para próxima seção"
          className="text-gray-400 hover:text-[#C89B3C] transition-colors p-2"
        >
          <ChevronDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};


