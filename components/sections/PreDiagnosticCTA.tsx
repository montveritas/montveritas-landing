'use client';

import React, { useState, useRef } from 'react';
import { Section } from '@/components/foundation/Section';
import { Container } from '@/components/foundation/Container';
import { Heading } from '@/components/foundation/Heading';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ArrowRight, CheckCircle2, Shield, Clock, Sparkles } from 'lucide-react';
import { GOALS_LIST } from '@/lib/goals';

interface PreDiagnosticCTAProps {
  selectedGoals?: string[];
  onToggleGoal?: (goalId: string) => void;
}

export const PreDiagnosticCTA: React.FC<PreDiagnosticCTAProps> = ({
  selectedGoals: propSelectedGoals,
  onToggleGoal,
}) => {
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [internalSelectedGoals, setInternalSelectedGoals] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; whatsapp?: string; city?: string; goals?: string }>({});
  const [, setTouched] = useState<{ name?: boolean; whatsapp?: boolean; city?: boolean }>({});

  // Refs for auto-scrolling to error field
  const nameRef = useRef<HTMLInputElement>(null);
  const whatsappRef = useRef<HTMLInputElement>(null);
  const cityRef = useRef<HTMLInputElement>(null);
  const goalsRef = useRef<HTMLDivElement>(null);

  const selectedGoals = propSelectedGoals ?? internalSelectedGoals;

  const toggleGoal = (id: string) => {
    if (onToggleGoal) {
      onToggleGoal(id);
    } else {
      setInternalSelectedGoals((prev) =>
        prev.includes(id) ? prev.filter((g) => g !== id) : [...prev, id]
      );
    }
    // Clear goals error if at least one goal is selected
    if (errors.goals) {
      setErrors((prev) => ({ ...prev, goals: undefined }));
    }
  };

  const formatWhatsAppInput = (val: string) => {
    if (val.startsWith('+')) {
      return val.replace(/[^\d+ ]/g, '');
    }
    const digits = val.replace(/\D/g, '');
    if (!digits) return '';
    if (digits.length <= 2) {
      return `(${digits}`;
    } else if (digits.length <= 7) {
      return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    } else if (digits.length <= 11) {
      return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
    } else {
      return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
    }
  };

  const handleWhatsappChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    const formatted = formatWhatsAppInput(rawValue);
    setWhatsapp(formatted);
    if (errors.whatsapp) {
      setErrors((prev) => ({ ...prev, whatsapp: undefined }));
    }
  };

  const validateForm = () => {
    const newErrors: { name?: string; whatsapp?: string; city?: string; goals?: string } = {};

    // 1. Nome Completo
    const nameTrimmed = name.trim();
    const nameWords = nameTrimmed.split(/\s+/).filter(Boolean);
    const nameLetters = (nameTrimmed.match(/[a-zA-ZÀ-ÿ]/g) || []).length;
    const nameValidChars = /^[a-zA-ZÀ-ÿ\s'\-]+$/.test(nameTrimmed);

    if (!nameTrimmed || nameWords.length < 2 || nameLetters < 5 || !nameValidChars) {
      newErrors.name = 'Insira seu nome completo (nome e sobrenome, sem números ou caracteres especiais).';
    }

    // 2. WhatsApp
    const digitsOnly = whatsapp.replace(/\D/g, '');
    const hasInvalidLeadingZeroDDD = digitsOnly.length >= 2 && digitsOnly.startsWith('0');
    if (!whatsapp.trim() || digitsOnly.length < 10 || digitsOnly.length > 13 || hasInvalidLeadingZeroDDD) {
      newErrors.whatsapp = 'Insira um número de WhatsApp válido com DDD.';
    }

    // 3. Cidade e Estado / País
    const cityTrimmed = city.trim();
    const cityLetters = (cityTrimmed.match(/[a-zA-ZÀ-ÿ]/g) || []).length;
    const cityValidChars = /^[a-zA-ZÀ-ÿ\s\-_\/\\]+$/.test(cityTrimmed);

    if (!cityTrimmed || cityLetters < 3 || !cityValidChars) {
      newErrors.city = 'Insira sua cidade e estado/país (mínimo de 3 letras, sem números).';
    }

    // 4. Objetivos
    if (selectedGoals.length < 1) {
      newErrors.goals = 'Selecione pelo menos 1 objetivo para realizar o seu diagnóstico.';
    }

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, whatsapp: true, city: true });

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);

      // Auto-scroll to the first field with an error
      if (formErrors.name && nameRef.current) {
        nameRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        nameRef.current.focus();
      } else if (formErrors.whatsapp && whatsappRef.current) {
        whatsappRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        whatsappRef.current.focus();
      } else if (formErrors.city && cityRef.current) {
        cityRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        cityRef.current.focus();
      } else if (formErrors.goals && goalsRef.current) {
        goalsRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    setErrors({});
    setSubmitted(true);

    // Format selected goals into WhatsApp message
    const selectedGoalObjects = GOALS_LIST.filter((g) => selectedGoals.includes(g.id));
    const goalsFormattedText =
      selectedGoalObjects.length > 0
        ? selectedGoalObjects.map((g) => `• ${g.label}`).join('\n')
        : '• Analisar panorama financeiro geral';

    const message = `Olá Montveritas! Gostaria de agendar meu Diagnóstico Patrimonial Gratuito.\n\n👤 *Nome:* ${name.trim()}\n📱 *WhatsApp:* ${whatsapp.trim()}\n📍 *Cidade:* ${city.trim()}\n\n🎯 *O que gostaria de conquistar (${selectedGoalObjects.length}):*\n${goalsFormattedText}`;

    const whatsappUrl = `https://wa.me/5535988170330?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Section id="formulario" variant="navy" spacing="default">
      <div id="contato" className="scroll-mt-24" />
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

              <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
                {/* Campo 1: Nome */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-300 font-semibold mb-1.5">
                    Nome Completo <span className="text-[#E5C170]">*</span>
                  </label>
                  <input
                    ref={nameRef}
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                    }}
                    onBlur={() => setTouched((prev) => ({ ...prev, name: true }))}
                    placeholder="Seu nome completo (ex: João Silva)"
                    className={`w-full px-4 py-3 rounded-xl bg-[#081B33] border text-white placeholder-gray-500 focus:outline-none transition-colors text-sm ${
                      errors.name ? 'border-red-500 focus:border-red-400' : 'border-[#C89B3C]/30 focus:border-[#C89B3C]'
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-red-400 font-sans flex items-center gap-1">
                      ⚠️ {errors.name}
                    </p>
                  )}
                </div>

                {/* Campo 2: WhatsApp */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-300 font-semibold mb-1.5">
                    WhatsApp <span className="text-[#E5C170]">*</span>
                  </label>
                  <input
                    ref={whatsappRef}
                    type="tel"
                    value={whatsapp}
                    onChange={handleWhatsappChange}
                    onBlur={() => setTouched((prev) => ({ ...prev, whatsapp: true }))}
                    placeholder="(00) 9 0000 0000"
                    className={`w-full px-4 py-3 rounded-xl bg-[#081B33] border text-white placeholder-gray-500 focus:outline-none transition-colors text-sm ${
                      errors.whatsapp ? 'border-red-500 focus:border-red-400' : 'border-[#C89B3C]/30 focus:border-[#C89B3C]'
                    }`}
                  />
                  {errors.whatsapp && (
                    <p className="mt-1.5 text-xs text-red-400 font-sans flex items-center gap-1">
                      ⚠️ {errors.whatsapp}
                    </p>
                  )}
                </div>

                {/* Campo 3: Cidade */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-gray-300 font-semibold mb-1.5">
                    Cidade e Estado / País <span className="text-[#E5C170]">*</span>
                  </label>
                  <input
                    ref={cityRef}
                    type="text"
                    value={city}
                    onChange={(e) => {
                      setCity(e.target.value);
                      if (errors.city) setErrors((prev) => ({ ...prev, city: undefined }));
                    }}
                    onBlur={() => setTouched((prev) => ({ ...prev, city: true }))}
                    placeholder="Sua cidade e estado (ex: Belo Horizonte/MG, Lisboa/Portugal)"
                    className={`w-full px-4 py-3 rounded-xl bg-[#081B33] border text-white placeholder-gray-500 focus:outline-none transition-colors text-sm ${
                      errors.city ? 'border-red-500 focus:border-red-400' : 'border-[#C89B3C]/30 focus:border-[#C89B3C]'
                    }`}
                  />
                  {errors.city && (
                    <p className="mt-1.5 text-xs text-red-400 font-sans flex items-center gap-1">
                      ⚠️ {errors.city}
                    </p>
                  )}
                </div>

                {/* Campo 4: O QUE VOCÊ GOSTARIA DE CONQUISTAR? */}
                <div ref={goalsRef} className="pt-2">
                  <div className="flex items-center gap-2 mb-1.5 text-[#C89B3C]">
                    <Sparkles className="w-4 h-4" />
                    <label className="block text-xs uppercase tracking-wider text-gray-200 font-bold">
                      O QUE VOCÊ GOSTARIA DE CONQUISTAR? <span className="text-[#E5C170]">*</span>
                    </label>
                  </div>
                  <p className="text-xs text-gray-400 mb-3 font-sans">
                    Clique nas opções para selecionar seus objetivos (seleção múltipla):
                  </p>

                  <div className="flex flex-wrap gap-2.5">
                    {GOALS_LIST.map((goalItem) => {
                      const isSelected = selectedGoals.includes(goalItem.id);
                      return (
                        <button
                          key={goalItem.id}
                          onClick={() => toggleGoal(goalItem.id)}
                          type="button"
                          className={`px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-sans transition-all duration-200 cursor-pointer flex items-center gap-2 border text-left ${
                            isSelected
                              ? 'bg-gradient-to-r from-[#C89B3C] to-[#E5C170] text-[#051224] border-[#E5C170] font-bold shadow-md shadow-[#C89B3C]/20 scale-[1.02] ring-2 ring-[#C89B3C]/40'
                              : 'bg-[#081B33] text-gray-300 border-[#C89B3C]/30 hover:border-[#C89B3C] hover:bg-[#0d2647]'
                          }`}
                        >
                          <span>{goalItem.label}</span>
                          {isSelected && <CheckCircle2 className="w-4 h-4 ml-0.5 flex-shrink-0 text-[#051224]" />}
                        </button>
                      );
                    })}
                  </div>

                  <div className="mt-3 text-xs font-sans">
                    {errors.goals ? (
                      <p className="text-red-400 flex items-center gap-1 font-semibold">
                        ⚠️ {errors.goals}
                      </p>
                    ) : selectedGoals.length > 0 ? (
                      <span className="text-[#E5C170]">✓ {selectedGoals.length} {selectedGoals.length === 1 ? 'objetivo selecionado' : 'objetivos selecionados'} que serão analisados em seu diagnóstico.</span>
                    ) : (
                      <span className="text-gray-400">Nenhum objetivo selecionado ainda. Clique nas opções acima para selecionar.</span>
                    )}
                  </div>
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

                  <p className="text-sm sm:text-base text-gray-200 font-medium mt-3.5 font-sans leading-relaxed">
                    100% gratuito, confidencial e sem compromisso comercial. Atendimento online em todo o Brasil e exterior.
                  </p>
                </div>
              </form>

              <div className="mt-8 pt-6 border-t border-[#C89B3C]/20 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base font-medium text-gray-200">
                <div className="flex items-center space-x-2.5">
                  <Shield className="w-5 h-5 text-[#C89B3C] shrink-0" />
                  <span>Sigilo absoluto de informações</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <Clock className="w-5 h-5 text-[#C89B3C] shrink-0" />
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
