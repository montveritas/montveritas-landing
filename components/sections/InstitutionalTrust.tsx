import React from 'react';
import { Section } from '@/components/foundation/Section';
import { Container } from '@/components/foundation/Container';
import { Heading } from '@/components/foundation/Heading';
import { Card } from '@/components/ui/Card';
import { IconWrapper } from '@/components/ui/IconWrapper';
import { Scale, ShieldCheck, Network, Clock, MessageSquareText } from 'lucide-react';

export interface TrustPillarItem {
  id: string;
  icon: React.ReactNode;
  pillarTag: string;
  titlePlaceholder: string;
  descriptionPlaceholder: string;
  principlePlaceholder: string;
}

interface InstitutionalTrustProps {
  items?: TrustPillarItem[];
}

export const InstitutionalTrust: React.FC<InstitutionalTrustProps> = ({
  items,
}) => {
  const defaultTrustPillars: TrustPillarItem[] = [
    {
      id: 'pilar-1',
      icon: <Scale className="w-6 h-6" />,
      pillarTag: 'PILAR 01 — ISENÇÃO CONSULTIVA',
      titlePlaceholder: 'Diagnóstico e Independência',
      descriptionPlaceholder:
        'Nossa responsabilidade é compreender integralmente seu cenário e objetivos antes de qualquer recomendação estratégica.',
      principlePlaceholder:
        'Princípio: Atuação isenta e sem pressão por contratação de produtos. Seus objetivos são os únicos direcionadores.',
    },
    {
      id: 'pilar-2',
      icon: <ShieldCheck className="w-6 h-6" />,
      pillarTag: 'PILAR 02 — RIGOR E ORGANIZAÇÃO',
      titlePlaceholder: 'Método e Organização',
      descriptionPlaceholder:
        'Existe um processo estruturado de análise e alinhamento contínuo para garantir total segurança e clareza em cada escolha.',
      principlePlaceholder:
        'Princípio: Processos estruturados com clareza técnica em cada etapa da sua jornada financeira.',
    },
    {
      id: 'pilar-3',
      icon: <Network className="w-6 h-6" />,
      pillarTag: 'PILAR 03 — ECOSSISTEMA ROBUSTO',
      titlePlaceholder: 'Empresas consolidadas em seus segmentos',
      descriptionPlaceholder:
        'Acesso a soluções disponibilizadas por empresas consolidadas e reconhecidas nacionalmente em seus segmentos para viabilizar seu plano.',
      principlePlaceholder:
        'Princípio: Curadoria neutra de ferramentas no mercado para que você tenha o melhor suporte.',
    },
    {
      id: 'pilar-4',
      icon: <Clock className="w-6 h-6" />,
      pillarTag: 'PILAR 04 — SEU ESTRATEGISTA DE LONGO PRAZO',
      titlePlaceholder: 'Parceiro para Todas as Fases da Vida',
      descriptionPlaceholder:
        'Não atuamos como corretores ou vendedores de ocasião. Somos o seu estrategista de longo prazo, acompanhando e ajustando suas metas conforme sua vida evolui.',
      principlePlaceholder:
        'Princípio: Relacionamento duradouro e suporte contínuo focado no seu bem-estar e na tranquilidade do seu futuro.',
    },
    {
      id: 'pilar-5',
      icon: <MessageSquareText className="w-6 h-6" />,
      pillarTag: 'PILAR 05 — CLAREZA E ALCANCE GLOBAL',
      titlePlaceholder: 'Atendimento Online no Brasil e Exterior',
      descriptionPlaceholder:
        'Atendimento 100% online com especialistas dedicados para todo o Brasil e exterior, com suporte humano em Português, Inglês e Espanhol.',
      principlePlaceholder:
        'Princípio: Comunicação direta, humana e acessível de onde você estiver, sem "economês" ou letras miúdas.',
    },
  ];

  const displayItems = items || defaultTrustPillars;
  const topPillars = displayItems.slice(0, 2);
  const bottomPillars = displayItems.slice(2);

  const renderCard = (item: TrustPillarItem) => (
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
          <span className="text-[11px] font-sans font-semibold uppercase tracking-widest text-[#E5C170] px-3 py-1 rounded-full bg-[#051224] border border-[#C89B3C]/30">
            {item.pillarTag}
          </span>
        </div>

        <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-4 leading-snug">
          {item.titlePlaceholder}
        </h3>

        <p className="text-sm text-gray-200 font-sans mb-4 leading-relaxed bg-[#051224]/70 p-4 rounded-xl border-l-2 border-[#C89B3C]">
          &quot;{item.descriptionPlaceholder}&quot;
        </p>

        <p className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed">
          {item.principlePlaceholder}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-[#C89B3C]/15 flex items-center justify-between text-[11px] text-[#E5C170] font-sans font-medium uppercase tracking-wider">
        <span>COMPROMISSO MONTVERITAS</span>
        <span className="w-1.5 h-1.5 rounded-full bg-[#C89B3C]" />
      </div>
    </Card>
  );

  return (
    <Section id="sobre" variant="navy-dark" spacing="default">
      <Container size="default">
        {/* Header da Seção */}
        <Heading
          level={2}
          badgeText="SISTEMA DE CONFIANÇA & COMPROMISSO"
          subtitle="Conheça os fundamentos de transparência, independência e atenção humana que guiam a atuação da Montveritas"
          align="center"
          color="white"
        >
          Por que confiar na Montveritas
        </Heading>

        {/* Pilares da Confiança em Formação Piramidal / Triangular */}
        <div className="mt-12 space-y-8">
          {/* Nível Superior da Pirâmide: Pilares 1 e 2 centralizados */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto w-full">
            {topPillars.map(renderCard)}
          </div>

          {/* Nível Inferior da Pirâmide: Pilares 3, 4 e 5 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {bottomPillars.map(renderCard)}
          </div>
        </div>

        {/* Declaração de Confiança */}
        <div className="mt-12 pt-8 border-t border-[#C89B3C]/20 text-center max-w-3xl mx-auto">
          <p className="text-sm sm:text-base text-gray-200 font-sans italic leading-relaxed">
            &quot;A confiança na Montveritas é construída através da transparência do nosso diagnóstico, da clareza da nossa comunicação e do respeito absoluto aos seus objetivos de vida.&quot;
          </p>
        </div>
      </Container>
    </Section>
  );
};

