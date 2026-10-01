/**
 * Conteúdo da home — tudo que é texto editorial mora aqui.
 * Fonte: Curriculo-Maria-Clara-Silva.pdf. Nada de números sem lastro.
 */

export const PERSON = {
  name: 'Maria Clara Silva',
  studio: 'Selva MKT',
  handle: '@selva.mkt',
  kicker: 'Marketing de Produto',
  role: 'Negócios de Educação e Comunidades',
  whatsapp: 'https://wa.me/5521999220099',
  whatsappLabel: '+55 21 99922-0099',
  linkedin: 'https://www.linkedin.com/in/selva-mkt/',
  cv: '/curriculo-maria-clara-silva.pdf',
}

/** Loja Serafim — aparece apenas no rodapé. */
export const SERAFIM_URL = '/serafim/'

export const FACTS = [
  { value: '10+', label: 'anos de experiência em marketing e gestão de pessoas' },
  { value: '50+', label: 'produtos e eventos lançados' },
  { value: '2.000+', label: 'alunos e pessoas impactadas' },
  { value: 'R$2M+', label: 'faturados com negócios de educação e comunidades' },
]

export const PRACTICES = [
  {
    title: 'Produto e oferta',
    text: 'Pesquisa de demanda, conceito, oferta e página de vendas. Produtos educacionais pensados como parte de uma esteira, não como lançamento isolado.',
  },
  {
    title: 'Eventos presenciais',
    text: 'Do conceito à produção. O encontro presencial como produto exclusivo e como o momento em que a comunidade se reconhece.',
  },
  {
    title: 'Comunidade e relacionamento',
    text: 'Marca que cresce a partir das pessoas. Conteúdo, retenção e renovação como uma coisa só.',
  },
]

export type Case = {
  org: string
  title: string
  period: string
  role: string
  body: string
  results: { value: string; label: string }[]
  /** Até 3 fotos em public/trabalhos/. Espaços vazios aparecem como moldura. */
  photos: CasePhoto[]
}

export type CasePhoto = {
  src: string
  thumb: string
  caption: string
}

export const CASES: Case[] = [
  {
    org: 'Escola do Jonas',
    title: 'Uma comunidade para empreendedores em paz',
    period: '2026',
    role: 'Product Marketing Manager',
    body: 'Realizei a primeira experiência presencial da comunidade, um evento criado como produto exclusivo da esteira. Conduzi de ponta a ponta: pesquisa de demanda, conceito, oferta, página de vendas e produção do evento.',
    results: [
      { value: 'R$ 77,4 mil', label: 'na primeira edição' },
      { value: 'R$ 2.977', label: 'de ticket médio' },
    ],
    photos: [
      {
        src: '/trabalhos/empreender-pesquisa.webp',
        thumb: '/trabalhos/empreender-pesquisa-thumb.webp',
        caption: 'Pesquisa de demanda realizada para medir o interesse do público e definir a oferta.',
      },
      {
        src: '/trabalhos/empreender-pagina-vendas.webp',
        thumb: '/trabalhos/empreender-pagina-vendas-thumb.webp',
        caption: 'Página de Vendas desenvolvida para a oferta do produto "Imersão Empreender em Paz".',
      },
      {
        src: '/trabalhos/empreender-evento.webp',
        thumb: '/trabalhos/empreender-evento-thumb.webp',
        caption: 'Jonas Castro em momento durante o evento. Do local à experiência, cada decisão deve fortalecer o posicionamento do produto e a marca pessoal do Fundador.',
      },
    ],
  },
  {
    org: 'Escola de Permacultura',
    title: 'Uma escola sustentável centrada em comunidade',
    period: '2014 — 2022',
    role: 'Fundadora e Gestora',
    body: 'Oito anos à frente de um negócio de educação para o desenvolvimento sustentável. Captação pelas redes e pelo conteúdo, pioneira no nicho, onde liderei equipes de professores, facilitadores, e voluntários junto a comunidades tradicionais.',
    results: [
      { value: '50+', label: 'cursos' },
      { value: '1.500+', label: 'alunos e participantes' },
      { value: 'R$ 1M+', label: 'de faturamento acumulado' },
    ],
    photos: [
      {
        src: '/trabalhos/permacultura-instagram.webp',
        thumb: '/trabalhos/permacultura-instagram-thumb.webp',
        caption: 'Perfil da marca no Instagram: crescimento orgânico com conteúdo que comunica propósito.',
      },
      {
        src: '/trabalhos/permacultura-curso.webp',
        thumb: '/trabalhos/permacultura-curso-thumb.webp',
        caption: 'A primeira (e única) escola a produzir um curso de Design em Permacultura na cidade do Rio de Janeiro.',
      },
      {
        src: '/trabalhos/permacultura-reflorestamento.webp',
        thumb: '/trabalhos/permacultura-reflorestamento-thumb.webp',
        caption: 'Gestão de voluntários em projeto de reflorestamento.',
      },
    ],
  },
]

export const TIMELINE = [
  { period: '2026', title: 'Graduação em Marketing', org: 'UNINTER', note: 'Conclusão prevista.' },
  { period: 'nov/2025 — atual', title: 'Product Marketing Manager', org: 'Escola do Jonas', note: 'Estratégia de conteúdo, onboarding de clientes, novos produtos.' },
  { period: 'jul/2025 — atual', title: 'Sócia e Head de Marketing', org: 'Grande Rio · Administradora e Corretora de Seguros', note: 'Posicionamento digital e marketing de relacionamento.' },
  { period: '2014 — 2022', title: 'Fundadora e Gestora', org: 'Escola de Permacultura', note: 'Oito anos, 50+ cursos, 1.500+ alunos.' },
]

export const CERTIFICATIONS = [
  'O Impacto do Branding · Ana Couto',
  'Scrum e Kanban · SENAC',
  'Imersão IA · Alura',
  'ESG para Pequenas Empresas · SEBRAE',
  'Conteúdo para Mídias Sociais · MLabs',
]
