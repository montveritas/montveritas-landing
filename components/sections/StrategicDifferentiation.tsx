import React from 'react';
import { Section } from '@/components/foundation/Section';
import { Container } from '@/components/foundation/Container';
import { Heading } from '@/components/foundation/Heading';
import { Grid } from '@/components/foundation/Grid';
import { Card } from '@/components/ui/Card';
import { IconWrapper } from '@/components/ui/IconWrapper';
import { Compass, ShieldCheck, Scale, Network } from 'lucide-react';

export const StrategicDifferentiation: React.FC = () => {
  const differentiationFrents = [
    {
      id: 'diferencial-1',
      icon: <Scale className="w-6 h-6" />,
      title: 'Diagnóstico isento e individual',
      description:
        'Entendemos sua realidade, suas necessidades e seu momento de vida antes de recomendar qualquer caminho ou alternativa de mercado.',
    },
    {
      id: 'diferencial-2',
      icon: <Compass className="w-6 h-6" />,
      title: 'O planejamento vem antes das ferramentas',
      description:
        'Sua estratégia é desenhada de forma personalizada; produtos, serviços e parceiros entram apenas como viabilizadores da sua conquista.',
    },
    {
      id: 'diferencial-3',
      icon: <ShieldCheck className="w-6 h-6" />,
      title: 'Visão completa dos seus objetivos',
      description:
        'Conectamos suas conquistas de curto prazo com a estabilidade, segurança e tranquilidade financeira da sua família no longo prazo.',
    },
    {
      id: 'diferencial-4',
      icon: <Network className="w-6 h-6" />,
      title: 'Seleção neutra e independente',
      description:
        'Curadoria livre e criteriosa das melhores soluções dentro de um ecossistema de empresas parceiras consolidadas no mercado brasileiro.',
    },
  ];

  return (
    <Section id="diferencial" variant="navy-dark" spacing="default">
      <Container size="default">
        {/* Header da Seção */}
        <Heading
          level={2}
          badgeText="FILOSOFIA DE ATUAÇÃO & ABORDAGEM"
          subtitle="Nem sempre a primeira solução apresentada é a que faz mais sentido para sua realidade. Por isso, acreditamos que um bom planejamento deve vir antes de qualquer decisão."
          align="center"
          color="white"
        >
          Por que tantas pessoas acabam tomando decisões financeiras erradas?
        </Heading>

        {/* Grid das 4 frentes */}
        <Grid cols={1} colsMd={2} colsLg={2} gap={32} className="mt-12">
          {differentiationFrents.map((item) => (
            <Card
              key={item.id}
              variant="premium"
              hoverEffect={false}
              className="flex flex-col justify-between h-full border-[#C89B3C]/25 bg-[#081B33]/80 p-8 hover:border-[#C89B3C]/45 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <IconWrapper
                    icon={item.icon}
                    size="md"
                    variant="gold-glow"
                    shape="rounded"
                  />
                  <div className="w-2 h-2 rounded-full bg-[#C89B3C]/40" />
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-4 leading-snug">
                  {item.title}
                </h3>

                <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </Grid>

        {/* Princípio Central */}
        <div className="mt-12 pt-8 border-t border-[#C89B3C]/20 text-center max-w-3xl mx-auto">
          <p className="text-sm sm:text-base text-gray-200 font-sans italic leading-relaxed">
            &quot;A Montveritas atua como orientadora da sua jornada. As ferramentas existem para viabilizar o seu planejamento, jamais para defini-lo.&quot;
          </p>
        </div>
      </Container>
    </Section>
  );
};

