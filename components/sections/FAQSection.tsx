'use client';

import React, { useState } from 'react';
import { Section } from '@/components/foundation/Section';
import { Container } from '@/components/foundation/Container';
import { Heading } from '@/components/foundation/Heading';
import { Card } from '@/components/ui/Card';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Preciso ter muito dinheiro para começar?',
      answer:
        'Não. Nossa orientação existe justamente para ajudar você a construir, organizar e acelerar suas conquistas. Independentemente de quanto dinheiro você tem guardado hoje, desenhamos uma estratégia viável adequada para a sua renda e para a sua realidade atual.',
    },
    {
      question: 'Vocês vendem algum produto financeiro?',
      answer:
        'Não. A Montveritas atua de forma isenta e independente. Não vendemos produtos diretos nem temos metas comerciais de corretoras. Criamos a sua estratégia e fazemos a curadoria das melhores opções disponíveis em nosso ecossistema de empresas parceiras consolidadas.',
    },
    {
      question: 'A reunião inicial realmente é gratuita?',
      answer:
        'Sim, 100% gratuita e sem qualquer compromisso. No Diagnóstico Estratégico, analisamos seus objetivos, traduzimos suas opções para uma linguagem simples e mostramos como viabilizar seus projetos. Você decide com total liberdade se deseja seguir em frente.',
    },
    {
      question: 'Vocês atendem online para quem mora fora ou em outros estados?',
      answer:
        'Sim! Realizamos atendimento 100% online e personalizado para clientes de todo o Brasil e no Exterior. Nossas reuniões por videochamada garantem total sigilo, conforto e flexibilidade. Além disso, oferecemos atendimento humano nos idiomas Português, Inglês e Espanhol.',
    },
    {
      question: 'Posso procurar a Montveritas mesmo estando endividado?',
      answer:
        'Com certeza. Uma de nossas principais atuações é ajudar a reorganizar a vida financeira, trocar dívidas com juros abusivos por alternativas mais baratas, estancar juros desnecessários e criar um plano sustentável de recuperação e crescimento.',
    },
    {
      question: 'Como a Montveritas garante que a orientação é isenta?',
      answer:
        'Trabalhamos focados nos seus objetivos de vida, sem preferência por marcas ou produtos específicos. Nosso papel é orientar o seu caminho para que você pague o menor custo possível, economize juros e alcance suas metas com segurança.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section id="faq" variant="navy-dark" spacing="default">
      <Container size="default">
        <Heading
          level={2}
          badgeText="DÚVIDAS FREQUENTES"
          subtitle="Respostas claras para as principais perguntas sobre como funciona a parceria com a Montveritas"
          align="center"
          color="white"
        >
          Ainda tem dúvidas sobre como ajudamos você?
        </Heading>

        <div className="mt-12 max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <Card
                key={index}
                variant="premium"
                hoverEffect={false}
                className={`border-[#C89B3C]/20 bg-[#081B33]/90 transition-all overflow-hidden ${
                  isOpen ? 'border-[#C89B3C]/50' : 'hover:border-[#C89B3C]/35'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-[#C89B3C] shrink-0" />
                    <span className="font-serif text-base sm:text-lg font-bold text-white leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-[#C89B3C] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 border-t border-[#C89B3C]/10 text-sm text-gray-300 font-sans leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </Card>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};
