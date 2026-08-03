import React from 'react';
import { Section } from '@/components/foundation/Section';
import { Container } from '@/components/foundation/Container';
import { Heading } from '@/components/foundation/Heading';
import { Grid } from '@/components/foundation/Grid';
import { Card } from '@/components/ui/Card';
import { IconWrapper } from '@/components/ui/IconWrapper';
import { HeartHandshake, Compass, CheckCircle, RefreshCw } from 'lucide-react';

export const StrategicJourney: React.FC = () => {
  const processSteps = [
    {
      id: 'passo-1',
      stepNumber: '01',
      icon: <HeartHandshake className="w-6 h-6" />,
      title: 'Entendemos sua realidade',
      description:
        'Conversamos abertamente sobre o seu momento de vida, suas prioridades e os objetivos que você e sua família desejam conquistar.',
    },
    {
      id: 'passo-2',
      stepNumber: '02',
      icon: <Compass className="w-6 h-6" />,
      title: 'Estruturamos sua estratégia',
      description:
        'Analisamos os caminhos possíveis e desenhamos uma rota personalizada, calculando etapas, prazos e recursos necessários.',
    },
    {
      id: 'passo-3',
      stepNumber: '03',
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'Escolhemos juntos as melhores alternativas',
      description:
        'Selecionamos com total isenção as soluções disponibilizadas por empresas consolidadas no mercado que viabilizam o seu projeto.',
    },
    {
      id: 'passo-4',
      stepNumber: '04',
      icon: <RefreshCw className="w-6 h-6" />,
      title: 'Acompanhamos sua evolução',
      description:
        'Oferecemos suporte contínuo para adequar e rebalancear suas metas sempre que sua vida, sua família ou seus objetivos mudarem.',
    },
  ];

  return (
    <Section id="jornada" variant="navy" spacing="default">
      <Container size="default">
        {/* Header da Seção Jornada Estratégica */}
        <Heading
          level={2}
          badgeText="PASSO A PASSO DA PARCERIA"
          subtitle="Conheça o processo simples e transparente que transforma seus objetivos em um plano concreto"
          align="center"
          color="white"
        >
          Como o seu caminho é construído
        </Heading>

        {/* Timeline Grid */}
        <div className="relative mt-16">
          <div 
            className="hidden lg:block absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C89B3C]/30 to-transparent -translate-y-12 z-0 pointer-events-none"
            aria-hidden="true"
          />

          <Grid cols={1} colsMd={2} colsLg={4} gap={24} className="relative z-10">
            {processSteps.map((step) => (
              <Card
                key={step.id}
                variant="premium"
                hoverEffect={false}
                className="flex flex-col justify-between h-full border-[#C89B3C]/20 bg-[#051224] p-6 lg:p-7 hover:border-[#C89B3C]/40 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <IconWrapper
                      icon={step.icon}
                      size="md"
                      variant="gold-glow"
                      shape="rounded"
                    />
                    <span className="font-serif font-bold text-2xl text-[#C89B3C]/50 group-hover:text-[#C89B3C] transition-colors">
                      {step.stepNumber}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl font-bold text-white mb-3 leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-sans mb-4">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#C89B3C]/15 flex items-center justify-end">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C89B3C]" />
                </div>
              </Card>
            ))}
          </Grid>
        </div>
      </Container>
    </Section>
  );
};


