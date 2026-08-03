'use client';

import React, { useState } from 'react';
import { Section } from '@/components/foundation/Section';
import { Container } from '@/components/foundation/Container';
import { Heading } from '@/components/foundation/Heading';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ArrowRight, CheckCircle2, Shield, Clock } from 'lucide-react';

export const PreDiagnosticCTA: React.FC = () => {
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [goal, setGoal] = useState('casa');
  const [submitted, setSubmitted] = useState(false);

  const goalLabels: Record<string, string> = {
    tranquilidade: 'Ter tranquilidade financeira para dormir em paz',
    casa: 'Comprar minha casa ou imóvel',
    construir: 'Construir minha casa',
    carro: 'Trocar de veículo',
    dividas: 'Quitar dívidas ou pagamentos',
    investir: 'Investir melhor e organizar recursos',
    proteger: 'Proteger minha família e patrimônio',
    outro: 'Outro objetivo específico',
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (whatsapp.trim()) {
      setSubmitted(true);

      // Pre-fill WhatsApp message
      const selectedGoalText = goalLabels[goal] || goal;
      const message = `Olá Montveritas! Gostaria de agendar meu Diagnóstico Patrimonial Gratuito.\n\n👤 *Nome:* ${name}\n📱 *WhatsApp:* ${whatsapp}\n📍 *Cidade:* ${city}\n🎯 *Objetivo Principal:* ${selectedGoalText}`;
      
      const whatsappUrl = `https://wa.me/5535988170330?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    }
  };

  return (
    <Section id="formulario" variant="navy" spacing="default">
      <Container size="narrow">
        {/* Frase de Conexão antes do formulário */}
        <div className="mb-10 text-center">
          <p className="text-sm sm:text-base text-[#E5C170] font-sans font-medium tracking-wide uppercase mb-3">
            O primeiro passo da sua jornada
          </p>
          <p className="font-serif text-xl sm:text-2xl text-white max-w-2xl mx-auto leading-relaxed">
            &quot;Nosso primeiro passo não é oferecer nada, mas entender o que você quer conquistar.&quot;
          </p>
        </div>

        <Card
          variant="premium"
          hoverEffect={false}
          className="border-[#C89B3C]/30 bg-[#051224] p-6 sm:p-10 relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C89B3C] to-transparent" />

          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-[#C89B3C]/20 text-[#C89B3C] flex items-center justify-center mx-auto mb-6 border border-[#C89B3C]/40">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-white mb-3">
                Solicitação Enviada!
              </h3>
              <p className="text-sm text-gray-300 font-sans max-w-md mx-auto leading-relaxed mb-6">
                Caso a janela do WhatsApp não tenha aberto automaticamente, clique no botão abaixo para iniciar a conversa diretamente conosco.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  variant="primary"
                  href={`https://wa.me/5535988170330?text=${encodeURIComponent(`Olá! Enviei a solicitação de diagnóstico no site. Meu nome é ${name}.`)}`}
                  target="_blank"
                  className="bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold px-6 py-3.5 rounded-xl border-none shadow-lg shadow-[#25D366]/20"
                >
                  ABRIR CONVERSA NO WHATSAPP
                </Button>

                <Button
                  variant="outline"
                  onClick={() => setSubmitted(false)}
                  className="text-[#C89B3C] border-[#C89B3C]/30 hover:bg-[#C89B3C]/10 text-xs py-3"
                >
                  Enviar nova solicitação
                </Button>
              </div>
            </div>
          ) : (
            <div>
              <Heading
                level={2}
                badgeText="DIAGNÓSTICO ISENTO & GRATUITO"
                subtitle="Preencha os campos abaixo para receber seu diagnóstico inicial personalizado"
                align="center"
                color="white"
              >
                Pronto para dar o primeiro passo?
              </Heading>

              <div className="mt-4 p-3.5 rounded-lg bg-[#081B33]/80 border border-[#C89B3C]/20 text-xs text-gray-300 font-sans text-center">
                💡 <span className="text-[#E5C170] font-semibold">Confirmação de Expectativa:</span> Suas respostas permitem que nosso especialista prepare uma análise inicial totalmente personalizada para a nossa conversa no WhatsApp.
              </div>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                {/* Campo 1: Nome */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-300 font-semibold mb-1.5">
                    Nome
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Seu nome completo"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[#081B33] border border-[#C89B3C]/30 text-white placeholder-gray-500 focus:outline-none focus:border-[#C89B3C] transition-colors text-sm"
                  />
                </div>

                {/* Campo 2: WhatsApp */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-300 font-semibold mb-1.5">
                    WhatsApp
                  </label>
                  <input
                    type="tel"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    placeholder="(35) 98817-0330 ou seu DDD"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[#081B33] border border-[#C89B3C]/30 text-white placeholder-gray-500 focus:outline-none focus:border-[#C89B3C] transition-colors text-sm"
                  />
                </div>

                {/* Campo 3: Cidade */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-300 font-semibold mb-1.5">
                    Cidade
                  </label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Sua cidade e estado (ou país se residir no exterior)"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[#081B33] border border-[#C89B3C]/30 text-white placeholder-gray-500 focus:outline-none focus:border-[#C89B3C] transition-colors text-sm"
                  />
                </div>

                {/* Campo 4: Objetivo Principal */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-300 font-semibold mb-1.5">
                    Objetivo Principal
                  </label>
                  <select
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#081B33] border border-[#C89B3C]/30 text-white focus:outline-none focus:border-[#C89B3C] transition-colors text-sm"
                  >
                    <option value="tranquilidade">Ter tranquilidade financeira para dormir em paz</option>
                    <option value="casa">Comprar minha casa ou imóvel</option>
                    <option value="construir">Construir minha casa</option>
                    <option value="carro">Trocar de veículo</option>
                    <option value="dividas">Quitar dívidas ou pagamentos</option>
                    <option value="investir">Investir melhor e organizar recursos</option>
                    <option value="proteger">Proteger minha família e patrimônio</option>
                    <option value="outro">Outro objetivo específico</option>
                  </select>
                </div>

                <div className="pt-4 text-center">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full px-4 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm md:text-base font-bold bg-[#C89B3C] hover:bg-[#B38728] text-[#051224] shadow-lg shadow-[#C89B3C]/20 transition-all rounded-xl uppercase tracking-wider whitespace-normal leading-snug"
                  >
                    <span>SOLICITAR DIAGNÓSTICO GRATUITO</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 shrink-0 inline-block" />
                  </Button>

                  <p className="text-xs text-gray-400 mt-3 font-sans leading-relaxed">
                    100% gratuito, confidencial e sem compromisso comercial. Atendimento online em todo o Brasil e exterior.
                  </p>
                </div>
              </form>

              <div className="mt-8 pt-6 border-t border-[#C89B3C]/15 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-gray-400">
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-[#C89B3C] shrink-0" />
                  <span>Sigilo absoluto de informações</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-[#C89B3C] shrink-0" />
                  <span>Retorno em até 24 horas úteis</span>
                </div>
              </div>
            </div>
          )}
        </Card>
      </Container>
    </Section>
  );
};
