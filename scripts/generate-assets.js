const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
const assetsDir = path.join(publicDir, 'assets');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

// Function to generate an SVG asset with Montveritas styling
function createSVGAsset(title, subtitle, iconType = 'M', width = 1200, height = 675) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#081B33"/>
      <stop offset="50%" stop-color="#051224"/>
      <stop offset="100%" stop-color="#0a2242"/>
    </linearGradient>
    <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#E5C170"/>
      <stop offset="50%" stop-color="#C89B3C"/>
      <stop offset="100%" stop-color="#A67C2E"/>
    </linearGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="8" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
  </defs>
  
  <!-- Background -->
  <rect width="100%" height="100%" fill="url(#bg)"/>
  
  <!-- Geometric Decorative Lines -->
  <circle cx="${width/2}" cy="${height/2}" r="${Math.min(width, height)*0.4}" fill="none" stroke="url(#gold)" stroke-width="1" opacity="0.15"/>
  <circle cx="${width/2}" cy="${height/2}" r="${Math.min(width, height)*0.3}" fill="none" stroke="url(#gold)" stroke-width="1" stroke-dasharray="8 8" opacity="0.2"/>
  <rect x="40" y="40" width="${width-80}" height="${height-80}" fill="none" stroke="url(#gold)" stroke-width="1" opacity="0.2"/>
  
  <!-- Center Emblem -->
  <g transform="translate(${width/2}, ${height/2 - 40})">
    <circle cx="0" cy="0" r="48" fill="#081B33" stroke="url(#gold)" stroke-width="2"/>
    <text x="0" y="16" font-family="'Playfair Display', Georgia, serif" font-size="44" font-weight="bold" fill="url(#gold)" text-anchor="middle">${iconType}</text>
  </g>
  
  <!-- Text Content -->
  <text x="${width/2}" y="${height/2 + 50}" font-family="'Playfair Display', Georgia, serif" font-size="32" font-weight="bold" fill="#FFFFFF" text-anchor="middle" letter-spacing="2">${title.toUpperCase()}</text>
  <text x="${width/2}" y="${height/2 + 90}" font-family="'Montserrat', sans-serif" font-size="16" font-weight="500" fill="#C89B3C" text-anchor="middle" letter-spacing="3">${subtitle.toUpperCase()}</text>
  <text x="${width/2}" y="${height/2 + 120}" font-family="'Montserrat', sans-serif" font-size="12" fill="#888888" text-anchor="middle" letter-spacing="4">MONTVERITAS • ESTRATÉGIAS DE ALAVANCAGEM PATRIMONIAL</text>
</svg>`;
}

// Logo SVG
function createLogoSVG() {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 500 500">
  <defs>
    <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#E5C170"/>
      <stop offset="50%" stop-color="#C89B3C"/>
      <stop offset="100%" stop-color="#A67C2E"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="#081B33" rx="250"/>
  <circle cx="250" cy="250" r="230" fill="none" stroke="url(#gold)" stroke-width="3"/>
  <circle cx="250" cy="250" r="215" fill="none" stroke="url(#gold)" stroke-width="1" stroke-dasharray="6 6"/>
  
  <text x="250" y="240" font-family="'Playfair Display', Georgia, serif" font-size="120" font-weight="bold" fill="url(#gold)" text-anchor="middle">M</text>
  <text x="250" y="320" font-family="'Playfair Display', Georgia, serif" font-size="32" font-weight="bold" fill="url(#gold)" text-anchor="middle" letter-spacing="6">MONTVERITAS</text>
  <text x="250" y="355" font-family="'Montserrat', sans-serif" font-size="13" font-weight="600" fill="#FFFFFF" text-anchor="middle" letter-spacing="3">ESTRATÉGIAS PATRIMONIAIS</text>
</svg>`;
}

const assets = [
  { name: 'hero.jpg', title: 'Sede Corporativa & Estratégia', subtitle: 'Construa, Multiplique e Proteja seu Patrimônio' },
  { name: '01_hero.jpg', title: 'Sede Corporativa & Estratégia', subtitle: 'Construa, Multiplique e Proteja seu Patrimônio' },
  { name: 'about.jpg', title: 'Sobre a Montveritas', subtitle: 'Estratégia antes de qualquer solução' },
  { name: '02_sobre-montveritas.jpg', title: 'Sobre a Montveritas', subtitle: 'Estratégia antes de qualquer solução' },
  { name: 'construcao-patrimonial.jpg', title: 'Construção Patrimonial', subtitle: 'Transforme renda em patrimônio consistente' },
  { name: '05_construcao-patrimonial.jpg', title: 'Construção Patrimonial', subtitle: 'Transforme renda em patrimônio consistente' },
  { name: 'multiplicacao-patrimonial.jpg', title: 'Multiplicação Patrimonial', subtitle: 'Potencialize ativos com inteligência' },
  { name: '03_multiplicacao-patrimonial.jpg', title: 'Multiplicação Patrimonial', subtitle: 'Potencialize ativos com inteligência' },
  { name: 'patrimonio-imobiliario.jpg', title: 'Patrimônio Imobiliário', subtitle: 'Oportunidades e investimentos estratégicos' },
  { name: '04_patrimonio-imobiliario.jpg', title: 'Patrimônio Imobiliário', subtitle: 'Oportunidades e investimentos estratégicos' },
  { name: 'renda-passiva.jpg', title: 'Renda Passiva', subtitle: 'Liberdade financeira de longo prazo' },
  { name: '06_renda-passiva.jpg', title: 'Renda Passiva', subtitle: 'Liberdade financeira de longo prazo' },
  { name: 'ecossistema-solucoes.jpg', title: 'Ecossistema de Soluções', subtitle: 'Empresas parceiras consolidadas no Brasil' },
  { name: '07_ecossistema-solucoes.jpg', title: 'Ecossistema de Soluções', subtitle: 'Empresas parceiras consolidadas no Brasil' },
  { name: 'og-image.jpg', title: 'Montveritas', subtitle: 'Estratégias de Alavancagem Patrimonial' },
  { name: 'case-1.jpg', title: 'Estudo de Caso 01', subtitle: 'Planejamento de Renda Passiva Imobiliária' },
  { name: 'case-2.jpg', title: 'Estudo de Caso 02', subtitle: 'Alavancagem Corporativa & Crédito Empresarial' },
  { name: 'case-3.jpg', title: 'Estudo de Caso 03', subtitle: 'Aquisição de Imóvel Residencial de Alto Padrão' },
  { name: 'case-4.jpg', title: 'Estudo de Caso 04', subtitle: 'Proteção Patrimonial & Sucessão Familiar' },
  { name: 'case-5.jpg', title: 'Estudo de Caso 05', subtitle: 'Diversificação em Studios e Portfólio Imobiliário' },
  { name: 'case-6.jpg', title: 'Estudo de Caso 06', subtitle: 'Construção de Legado Familiar Sustentável' },
];

assets.forEach(asset => {
  const content = createSVGAsset(asset.title, asset.subtitle);
  fs.writeFileSync(path.join(assetsDir, asset.name), content);
  fs.writeFileSync(path.join(publicDir, asset.name), content);
});

// Create logos
const logoSVG = createLogoSVG();
fs.writeFileSync(path.join(assetsDir, 'logo-circ.png'), logoSVG);
fs.writeFileSync(path.join(publicDir, 'logo-circ.png'), logoSVG);
fs.writeFileSync(path.join(assetsDir, 'emblema.png'), logoSVG);
fs.writeFileSync(path.join(publicDir, 'emblema.png'), logoSVG);
fs.writeFileSync(path.join(assetsDir, 'logo-icon.png'), logoSVG);
fs.writeFileSync(path.join(publicDir, 'logo-icon.png'), logoSVG);

// Copy favicons
fs.writeFileSync(path.join(publicDir, 'favicon.ico'), logoSVG);
fs.writeFileSync(path.join(publicDir, 'favicon-32.png'), logoSVG);
fs.writeFileSync(path.join(publicDir, 'favicon-16.png'), logoSVG);
fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.png'), logoSVG);

console.log('Assets generated successfully!');
