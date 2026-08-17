export interface GoalOption {
  id: string;
  label: string;
}

export const GOALS_LIST: GoalOption[] = [
  { id: 'tranquilidade', label: '🕊️ Ter tranquilidade financeira para dormir em paz' },
  { id: 'casa', label: '🏠 Comprar minha casa' },
  { id: 'construir', label: '🏡 Construir minha casa' },
  { id: 'carro', label: '🚗 Trocar de veículo' },
  { id: 'investir', label: '📈 Investir melhor e organizar recursos' },
  { id: 'juros', label: '💰 Pagar menos juros e estancar perdas' },
  { id: 'familia', label: '👨‍👩‍👧 Proteger minha família' },
  { id: 'aposentadoria', label: '🏖️ Garantir uma aposentadoria tranquila' },
  { id: 'negocio', label: '🏢 Abrir ou expandir meu negócio' },
  { id: 'dividas', label: '💳 Quitar dívidas com inteligência' },
];
