import React from 'react';
import { Section } from '@/components/foundation/Section';
import { Container } from '@/components/foundation/Container';
import { Heading } from '@/components/foundation/Heading';
import { Grid } from '@/components/foundation/Grid';
import { Card } from '@/components/ui/Card';
import { IconWrapper } from '@/components/ui/IconWrapper';
import { Sprout, TrendingUp, ShieldCheck, Landmark } from 'lucide-react';

export const SuaJornadaPatrimonial: React.FC = () => {
  const patrimonialStages = [
    {
      id: 'estado-1',
      icon: <Sprout className="w-6 h-6" />,
      title: 'Organizando as finanças e primeiros passos',
      statement:
        'Talvez este seja o seu momento: Quero transformar minha renda diária em conquistas reais, organizando meu orçamento e construindo minha primeira reserva com segurança.',
      focus:
        'Foco: Organização do fluxo de caixa, eliminação de custos com juros desnecessários e direcionamento do esforço mensal para objetivos concretos.',
    },
    {
      id: 'estado-2',
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Acelerando objetivos e aquisições',
      statement:
        'Talvez este seja o seu momento: Já conquistei estabilidade e busco caminhos inteligentes para comprar minha casa, trocar de carro, expandir negócios ou investir melhor.',
      focus:
        'Foco: Estratégias de alavancagem sem juros abusivos, planejamento de aquisições de bens e aceleração da formação de patrimônio.',
    },
    {
      id: 'estado-3',
      icon: <ShieldCheck className="w-6 h-6" />,
      title: 'Protegendo o que foi conquistado',
      statement:
        'Talvez este seja o seu momento: Trabalhei duro para construir minha vida e minha prioridade é garantir que minha família e meus bens estejam protegidos contra imprevistos.',
      focus:
        'Foco: Estruturação de mecanismos de proteção patrimonial, cobertura familiar e preservação de poder de compra.',
    },
    {
      id: 'estado-4',
      icon: <Landmark className="w-6 h-6" />,
      title: 'Planejando a tranquilidade da família',
      statement:
        'Talvez este seja o seu momento: Quero organizar a sucessão dos meus bens de forma pacífica e estruturada, garantindo um futuro tranquilo para meus filhos e netos.',
      focus:
        'Foco: Planejamento sucessório simplificado, redução de custos com inventário e continuidade da harmonia familiar.',
    },
  ];

  return (
    <Section id="sua-jornada-patrimonial" variant="navy-dark" spacing="default">
      <Container size="default">
        {/* Header da Seção */}
        <Heading
          level={2}
          badgeText="MOMENTO DE VIDA & AUTOIDENTIFICAÇÃO"
          subtitle="Veja em qual situação você se encontra e entenda como um planejamento focado em você faz toda a diferença"
          align="center"
          color="white"
        >
          Você se identifica com alguma destas situações?
        </Heading>

        {/* Grid de Cards dos 4 Momentos de Vida */}
        <Grid cols={1} colsMd={2} colsLg={2} gap={32} className="mt-12">
          {patrimonialStages.map((stage) => (
            <Card
              key={stage.id}
              variant="premium"
              hoverEffect={false}
              className="flex flex-col justify-between h-full border-[#C89B3C]/25 bg-[#081B33]/80 p-8 hover:border-[#C89B3C]/45 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <IconWrapper
                    icon={stage.icon}
                    size="md"
                    variant="gold-glow"
                    shape="rounded"
                  />
                  <div className="w-2 h-2 rounded-full bg-[#C89B3C]/40" />
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-4 leading-snug">
                  {stage.title}
                </h3>

                <p className="text-sm sm:text-base text-gray-100 font-sans mb-4 leading-relaxed bg-[#051224]/80 p-4 rounded-xl border-l-2 border-[#C89B3C]">
                  &quot;{stage.statement}&quot;
                </p>

                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-sans">
                  {stage.focus}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#C89B3C]/15 flex items-center justify-between text-xs text-gray-300 font-sans">
                <span className="uppercase tracking-wider">
                  PLANEJAMENTO PERSONALIZADO
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#C89B3C]" />
              </div>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};


