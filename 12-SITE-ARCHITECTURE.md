# ===================================================================
# MONTVERITAS
# SITE ARCHITECTURE
# Arquitetura de Experiência e Mapeamento da Jornada Cognitiva (PJM™)
# ===================================================================

Versão: 1.0
Status: Documento Oficial
Data de Atualização: 2026-08-02

---

# VISÃO GERAL

A Landing Page da Montveritas é um Framework de Decisão Patrimonial estruturado sobre o Patrimonial Journey Model™ (PJM™).
Cada bloco responde a uma pergunta cognitiva natural na mente do visitante, conduzindo-o progressivamente da descoberta à conversão consultiva.

---

# MAPA DA JORNADA COGNITIVA (PJM™)

| Etapa | Pergunta Cognitiva | Componente Técnico | Função na Arquitetura |
|---|---|---|---|
| 01 | O que é isso? | `Hero.tsx` | Apresentação da proposta de valor central e geração de reconhecimento imediato. |
| 02 | O que eu ganho? | `StrategicBenefits.tsx` | Clareza dos benefícios estratégicos do planejamento patrimonial. |
| 03 | Por que esta abordagem é diferente? | `StrategicDifferentiation.tsx` | Diferenciação filosófica: a estratégia precede a ferramenta. |
| 04 | Como a estratégia é construída? | `StrategicJourney.tsx` | Transparência da jornada consultiva em 4 etapas estruturadas. |
| 05 | Isso serve para alguém como eu? | `SuaJornadaPatrimonial.tsx` | Autoidentificação em primeira pessoa pelos estados patrimoniais. |
| 06 | Que tipos de caminhos estratégicos podem surgir? | `ExemplosDeEstrategias.tsx` | Exemplos ilustrativos por objetivos patrimoniais sem promessa de resultado. |
| 07 | Posso confiar? | `InstitutionalTrust.tsx` | Fundamentos da confiança institucional, independência e governança. |
| 08 | Ainda tenho dúvidas? | `FAQ.tsx` | Sanar objeções frequentes com linguagem técnica e transparente. |
| 09 | Vamos conversar? | `PreDiagnosticForm.tsx` | Engajamento e conversão para o diagnóstico gratuito e sem compromisso. |

---

# GOVERNANÇA DE COMPONENTES E ESTRUTURA DE PASTA

```
/components
  /foundation
    Container.tsx
    Grid.tsx
    Heading.tsx
    Section.tsx
  /layout
    Footer.tsx
    Header.tsx
  /sections
    Hero.tsx
    StrategicBenefits.tsx
    StrategicDifferentiation.tsx
    StrategicJourney.tsx
    SuaJornadaPatrimonial.tsx
    ExemplosDeEstrategias.tsx
    InstitutionalTrust.tsx
    FAQ.tsx (sprint futura)
    PreDiagnosticForm.tsx (sprint futura)
  /ui
    Button.tsx
    Card.tsx
    IconWrapper.tsx
```

---

# REGRAS DE MANUTENÇÃO DA ARQUITETURA

1. **Prioridade do PJM™**: A organização da página deve respeitar a ordem da Jornada Cognitiva.
2. **Independência de Produtos**: Nenhuma seção deve atuar como catálogo de vendas de consórcios, seguros ou fundos.
3. **Protagonismo Institucional**: A Montveritas é sempre a estrategista. Parceiros formam o ecossistema de suporte.
4. **Validação Contínua**: Toda nova seção ou alteração deve ser submetida à matriz do `11-ARCHITECTURE-VALIDATION.md`.

---

# FIM DO DOCUMENTO
