'use client';

import React from 'react';
import { Section } from '@/components/foundation/Section';
import { Container } from '@/components/foundation/Container';
import { Heading } from '@/components/foundation/Heading';
import { Card } from '@/components/ui/Card';
import { X, Check } from 'lucide-react';

export const OQueNaoVaiEncontrar: React.FC = () => {
  const naoEncontrara = [
    {
      title: 'Venda de produtos por pressão',
      desc: 'Sem metas de vendas impostas por bancos e corretoras ou ligações insistentes.',
    },
    {
      title: 'Promessas de enriquecimento rápido',
      desc: 'Sem atalhos mágicos, milagres financeiros ou ilusões que colocam seu patrimônio em risco.',
    },
    {
      title: 'Soluções iguais para todo mundo',
      desc: 'Sem pacotes prontos de prateleira. Cada família e projeto exige uma rota única.',
    },
    {
      title: 'Linguagem complicada',
      desc: 'Sem "economês" indecifrável, jargões obscuros ou letras miúdas que confundem você.',
    },
  ];

  const encontrara = [
    {
      title: 'Conversa humana e acolhedora',
      desc: 'Escutamos suas prioridades com calma antes de propor qualquer estratégia.',
    },
    {
      title: 'Estratégia 100% isenta',
      desc: 'Analisamos e selecionamos soluções do mercado com foco exclusivo nos seus interesses.',
    },
    {
      title: 'Clareza e transparência total',
      desc: 'Você entende e aprova 100% dos passos e custos antes de dar o próximo passo.',
    },
    {
      title: 'Planejamento personalizado',
      desc: 'Seu estrategista de longo prazo para acompanhar e proteger cada fase da sua jornada.',
    },
  ];

  return (
    <Section id="diferenciais-transparencia" variant="navy-dark" spacing="default">
      <Container size="default">
        <Heading
          level={2}
          badgeText="TRANSPARÊNCIA E ÉTICA"
          subtitle="O que diferencia nossa postura no mercado e garante a sua tranquilidade"
          align="center"
          color="white"
        >
          O que você NÃO vai encontrar na Montveritas
        </Heading>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          {/* Card NÃO Encontrará */}
          <Card
            variant="glass"
            hoverEffect={false}
            className="border-red-500/20 bg-[#081B33]/80 p-6 sm:p-8 relative overflow-hidden"
          >
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
              <div className="w-10 h-10 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center shrink-0">
                <X className="w-5 h-5 text-red-400" />
              </div>
              <h3 className="font-serif text-xl font-bold text-white">
                O que você NÃO vai encontrar aqui:
              </h3>
            </div>

            <div className="space-y-5">
              {naoEncontrara.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-red-500/15 border border-red-500/30 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5 text-red-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-200 font-sans">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-400 font-sans leading-relaxed mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Card O Que Encontrará */}
          <Card
            variant="premium"
            hoverEffect={false}
            className="border-[#C89B3C]/40 bg-[#051224] p-6 sm:p-8 relative overflow-hidden"
          >
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#C89B3C]/20">
              <div className="w-10 h-10 rounded-full bg-[#C89B3C]/15 border border-[#C89B3C]/40 flex items-center justify-center shrink-0">
                <Check className="w-5 h-5 text-[#E5C170]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-white">
                O que você ENCONTRARÁ conosco:
              </h3>
            </div>

            <div className="space-y-5">
              {encontrara.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-[#C89B3C]/20 border border-[#C89B3C]/40 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-[#E5C170]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white font-sans">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-300 font-sans leading-relaxed mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </Container>
    </Section>
  );
};
