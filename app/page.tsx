'use client';

import React, { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/sections/Hero';
import { StrategicBenefits } from '@/components/sections/StrategicBenefits';
import { StrategicDifferentiation } from '@/components/sections/StrategicDifferentiation';
import { OQueNaoVaiEncontrar } from '@/components/sections/OQueNaoVaiEncontrar';
import { StrategicJourney } from '@/components/sections/StrategicJourney';
import { SuaJornadaPatrimonial } from '@/components/sections/SuaJornadaPatrimonial';
import { ExemplosDeEstrategias } from '@/components/sections/ExemplosDeEstrategias';
import { InstitutionalTrust } from '@/components/sections/InstitutionalTrust';
import { FAQSection } from '@/components/sections/FAQSection';
import { PreDiagnosticCTA } from '@/components/sections/PreDiagnosticCTA';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);

  const handleToggleGoal = (goalId: string) => {
    setSelectedGoals((prev) =>
      prev.includes(goalId) ? prev.filter((id) => id !== goalId) : [...prev, goalId]
    );
  };

  return (
    <div className="min-h-screen bg-[#081B33] text-white flex flex-col selection:bg-[#C89B3C] selection:text-white">
      {/* 1. HEADER (Top Navigation Bar) */}
      <Header />

      {/* Main Page Body */}
      <main className="flex-1">
        {/* Step 1 in Cognitive Journey: HERO (O que é isso?) */}
        <Hero selectedGoals={selectedGoals} onToggleGoal={handleToggleGoal} />

        {/* Step 2 in Cognitive Journey: STRATEGIC BENEFITS (O que eu ganho?) */}
        <StrategicBenefits />

        {/* Step 3 in Cognitive Journey: STRATEGIC DIFFERENTIATION (Por que esta abordagem é diferente?) */}
        <StrategicDifferentiation />

        {/* Transparência e Quebra de Objeções: O que você NÃO vai encontrar aqui */}
        <OQueNaoVaiEncontrar />

        {/* Step 4 in Cognitive Journey: STRATEGIC JOURNEY (Como isso funciona na prática?) */}
        <StrategicJourney />

        {/* Step 5 in Cognitive Journey: SUA JORNADA PATRIMONIAL / MOMENTOS PATRIMONIAIS (Isso serve para alguém como eu?) */}
        <SuaJornadaPatrimonial />

        {/* Step 6 in Cognitive Journey: EXEMPLOS DE ESTRATÉGIAS PATRIMONIAIS (Que tipos de caminhos estratégicos podem surgir?) */}
        <ExemplosDeEstrategias />

        {/* Step 7 in Cognitive Journey: CONFIANÇA INSTITUCIONAL / INSTITUTIONAL TRUST (Posso confiar?) */}
        <InstitutionalTrust />

        {/* Step 8 in Cognitive Journey: FAQ (Ainda tenho dúvidas?) */}
        <FAQSection />

        {/* Step 9 in Cognitive Journey: PRÉ-DIAGNÓSTICO / FORMULÁRIO (Estou pronto para planejar meus passos) */}
        <PreDiagnosticCTA selectedGoals={selectedGoals} onToggleGoal={handleToggleGoal} />
      </main>

      {/* FOOTER (Institutional Footer) */}
      <Footer />
    </div>
  );
}

