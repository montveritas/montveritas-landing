import React from 'react';
import { Section } from '@/components/foundation/Section';
import { Container } from '@/components/foundation/Container';
import { Heading } from '@/components/foundation/Heading';
import { Grid } from '@/components/foundation/Grid';
import { Card } from '@/components/ui/Card';
import { IconWrapper } from '@/components/ui/IconWrapper';
import { Building2, CircleDollarSign, ShieldCheck, HeartHandshake } from 'lucide-react';

export interface StrategyExampleItem {
  id: string;
  icon: React.ReactNode;
  objectiveTag: string;
  titlePlaceholder: string;
  situationPlaceholder: string;
  strategyPlaceholder: string;
  strategicDirectionPlaceholder: string;
}

interface ExemplosDeEstrategiasProps {
  items?: StrategyExampleItem[];
}

export const ExemplosDeEstrategias: React.FC<ExemplosDeEstrategiasProps> = ({
  items,
}) => {
  const defaultStrategyExamples: StrategyExampleItem[] = [
    {
      id: 'exemplo-1',
      icon: <Building2 className="w-6 h-6" />,
      objectiveTag: 'OBJETIVO: CASA PRÓPRIA & IMÓVEIS',
      titlePlaceholder: 'Comprar ou construir o imóvel dos sonhos',
      situationPlaceholder:
        'Situação: "Quero sair do aluguel ou comprar um imóvel maior para minha família sem comprometer minha renda com juros abusivos de financiamento tradicional."',
      strategyPlaceholder:
        'Estratégia: Planejamento estruturado de aportes e uso de ferramentas de alavancagem para aquisição com custo muito inferior ao bancário tradicional.',
      strategicDirectionPlaceholder:
        'Direção Estratégica: Aquisição do imóvel dos sonhos mantendo a segurança financeira e as reservas da família protegidas.',
    },
    {
      id: 'exemplo-2',
      icon: <CircleDollarSign className="w-6 h-6" />,
      objectiveTag: 'OBJETIVO: ECONOMIA DE JUROS & ORÇAMENTO',
      titlePlaceholder: 'Reorganização e quitação de compromissos',
      situationPlaceholder:
        'Situação: "Pago muitas parcelas e juros elevados todos os meses. Quero reorganizar minha vida financeira para fazer o dinheiro render mais no fim do mês."',
      strategyPlaceholder:
        'Estratégia: Análise do custo de dívidas e substituição de contratos caros por opções com menores taxas e prazos adequados.',
      strategicDirectionPlaceholder:
        'Direção Estratégica: Recuperação imediata do fluxo de caixa e liberação de orçamento para investir em objetivos reais.',
    },
    {
      id: 'exemplo-3',
      icon: <HeartHandshake className="w-6 h-6" />,
      objectiveTag: 'OBJETIVO: APOSENTADORIA & FUTURO',
      titlePlaceholder: 'Garantia de um futuro tranquilo',
      situationPlaceholder:
        'Situação: "Trabalho duro todos os dias e quero ter a certeza de que no futuro eu e minha família manteremos nossa qualidade de vida com estabilidade."',
      strategyPlaceholder:
        'Estratégia: Construção gradual de reservas protegidas contra oscilações do mercado com metas claras para cada fase de vida.',
      strategicDirectionPlaceholder:
        'Direção Estratégica: Tranquilidade para o futuro sem depender unicamente de fontes tradicionais de previdência.',
    },
    {
      id: 'exemplo-4',
      icon: <ShieldCheck className="w-6 h-6" />,
      objectiveTag: 'OBJETIVO: PROTEÇÃO & FAMÍLIA',
      titlePlaceholder: 'Proteção da família e sucessão harmoniosa',
      situationPlaceholder:
        'Situação: "Quero garantir que, em qualquer imprevisto, minha família estará amparada e não precisará desfazer de bens para pagar custos burocráticos."',
      strategyPlaceholder:
        'Estratégia: Estruturação de mecanismos de proteção jurídica e planejamento sucessório simplificado para evitar burocracias de inventário.',
      strategicDirectionPlaceholder:
        'Direção Estratégica: Proteção integral das conquistas de uma vida e perpetuidade da segurança da família.',
    },
  ];

  const displayItems = items || defaultStrategyExamples;

  return (
    <Section id="exemplos-de-estrategias" variant="navy" spacing="default">
      <Container size="default">
        {/* Header da Seção */}
        <Heading
          level={2}
          badgeText="POSSIBILIDADES REAIS"
          subtitle="Veja exemplos de como o planejamento estratégico conecta cada objetivo da sua vida a escolhas inteligentes"
          align="center"
          color="white"
        >
          Caminhos possíveis para objetivos como o seu
        </Heading>

        {/* Grid de Cards */}
        <Grid cols={1} colsMd={2} colsLg={2} gap={32} className="mt-12">
          {displayItems.map((example) => (
            <Card
              key={example.id}
              variant="premium"
              hoverEffect={false}
              className="flex flex-col justify-between h-full border-[#C89B3C]/20 bg-[#051224] p-8 hover:border-[#C89B3C]/40 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <IconWrapper
                    icon={example.icon}
                    size="md"
                    variant="gold-glow"
                    shape="rounded"
                  />
                  <span className="text-[11px] font-sans font-semibold uppercase tracking-widest text-[#E5C170] px-3 py-1 rounded-full bg-[#081B33] border border-[#C89B3C]/30">
                    {example.objectiveTag}
                  </span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-4 leading-snug">
                  {example.titlePlaceholder}
                </h3>

                <p className="text-sm text-gray-200 font-sans mb-4 leading-relaxed bg-[#081B33]/80 p-4 rounded-xl border-l-2 border-[#C89B3C] italic">
                  {example.situationPlaceholder}
                </p>

                <p className="text-xs sm:text-sm text-gray-300 font-sans mb-4 leading-relaxed bg-[#051224]/50 p-3 rounded-lg border border-[#C89B3C]/15">
                  {example.strategyPlaceholder}
                </p>

                <p className="text-xs text-gray-300 font-sans leading-relaxed">
                  {example.strategicDirectionPlaceholder}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#C89B3C]/15 flex items-center justify-between text-[11px] text-[#E5C170] font-sans font-medium uppercase tracking-wider">
                <span>DIAGNÓSTICO INDIVIDUAL NECESSÁRIO</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#C89B3C]" />
              </div>
            </Card>
          ))}
        </Grid>

        <div className="mt-12 pt-6 border-t border-[#C89B3C]/15 text-center max-w-4xl mx-auto">
          <p className="text-xs text-gray-400 font-sans leading-relaxed opacity-80">
            Nota: Os exemplos apresentados nesta seção têm caráter ilustrativo para demonstrar possibilidades do planejamento estratégico. A estratégia adequada para o seu caso é definida unicamente após o Diagnóstico Estratégico individual e varia conforme suas prioridades e momento de vida.
          </p>
        </div>
      </Container>
    </Section>
  );
};

