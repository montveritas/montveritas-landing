import React from 'react';
import { Section } from '@/components/foundation/Section';
import { Container } from '@/components/foundation/Container';
import { Heading } from '@/components/foundation/Heading';
import { Grid } from '@/components/foundation/Grid';
import { Card } from '@/components/ui/Card';
import { IconWrapper } from '@/components/ui/IconWrapper';
import { Shield, TrendingUp, HeartHandshake, Compass, Coins, Clock, ShieldAlert } from 'lucide-react';

export const StrategicBenefits: React.FC = () => {
  // Estrutura focada no visitante com verbos de ação e transformação real
  const valuePropositions = [
    {
      id: 'prop-1',
      icon: <Shield className="w-6 h-6" />,
      title: 'Tome decisões com mais segurança',
      description:
        'Diagnóstico isento e transparente para que você saiba exatamente o impacto de cada escolha na sua vida antes de assinar qualquer contrato.',
    },
    {
      id: 'prop-[#prop-avoid]',
      icon: <ShieldAlert className="w-6 h-6" />,
      title: 'Evite decisões que podem custar caro no futuro',
      description:
        'Proteção contra escolhas apressadas, financiamentos com juros abusivos e armadilhas financeiras que comprometem sua renda por anos.',
    },
    {
      id: 'prop-2',
      icon: <Compass className="w-6 h-6" />,
      title: 'Organize melhor sua vida financeira',
      description:
        'Clareza total sobre seu fluxo de caixa e a melhor forma de destinar seus recursos mensais para transformar conquistas em patrimônio real.',
    },
    {
      id: 'prop-3',
      icon: <HeartHandshake className="w-6 h-6" />,
      title: 'Proteja quem você ama',
      description:
        'Estruturação de mecanismos de segurança para garantir a estabilidade e o bem-estar da sua família em qualquer cenário de imprevisto.',
    },
    {
      id: 'prop-4',
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Aproveite melhor o dinheiro que você ganha todos os meses',
      description:
        'Alocação inteligente do seu esforço financeiro para acelerar a realização dos seus sonhos de forma estruturada e sem comprometer o presente.',
    },
    {
      id: 'prop-5',
      icon: <Coins className="w-6 h-6" />,
      title: 'Reduza gastos desnecessários com juros',
      description:
        'Alternativas estratégicas para financiar projetos, adquirir bens e quitar compromissos economizando juros e reduzindo custos totais.',
    },
  ];

  return (
    <Section id="estrategias" variant="navy" spacing="default">
      <Container size="default">
        {/* Header da Seção de Benefícios Estratégicos */}
        <Heading
          level={2}
          badgeText="TRANSFORMAÇÃO & BENEFÍCIOS REALIZÁVEIS"
          subtitle="Descubra o valor real de organizar seus objetivos com uma orientação isenta antes de tomar qualquer decisão financeira"
          align="center"
          color="white"
        >
          Como uma estratégia bem desenhada transforma sua vida
        </Heading>

        {/* Grid de Cards Centrados no Visitante */}
        <Grid cols={1} colsMd={2} colsLg={3} gap={32} className="mt-12">
          {valuePropositions.map((item) => (
            <Card
              key={item.id}
              variant="premium"
              hoverEffect={false}
              className="flex flex-col justify-between h-full border-[#C89B3C]/20 hover:border-[#C89B3C]/40 bg-[#081B33]/80 p-8"
            >
              <div>
                {/* Linha Superior: Ícone com Destaque Discreto */}
                <div className="flex items-center justify-between mb-6">
                  <IconWrapper
                    icon={item.icon}
                    size="md"
                    variant="gold-glow"
                    shape="rounded"
                  />
                  <div className="w-2 h-2 rounded-full bg-[#C89B3C]/50" />
                </div>

                {/* Título com Verbo de Ação */}
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-4 leading-snug">
                  {item.title}
                </h3>

                {/* Descrição em Linguagem Humana */}
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

