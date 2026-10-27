export const BUSINESS_INFO = {
  name: "Lm Automotive Service",
  tagline: "Mecânica de Alta Precisão, Rapidez e Honestidade",
  phone: "11 95726-1647",
  phoneRaw: "5511957261647",
  address: "R. Rozo Lagoa, 389 - Imirim, São Paulo - SP",
  postalCode: "02534-010",
  googleRating: 4.9,
  totalReviews: 180,
  hours: {
    weekdays: "Segunda a Sexta: 08h às 19h",
    saturday: "Sábado: 08h às 15h",
    sunday: "Domingo: Fechado"
  },
  whatsappUrl: (message = "Olá! Gostaria de agendar uma avaliação na Lm Automotive Service.") =>
    `https://wa.me/5511957261647?text=${encodeURIComponent(message)}`,
  mapsUrl: "https://maps.google.com/?q=R.+Rozo+Lagoa,+389+-+Imirim,+São+Paulo+-+SP",
  wazeUrl: "https://waze.com/ul?q=R.+Rozo+Lagoa,+389+-+Imirim,+São+Paulo+-+SP",
};

export const SERVICES = [
  {
    id: "injecao",
    title: "Injeção Eletrônica & Diagnóstico",
    shortDesc: "Scanners avançados para diagnóstico rápido e assertivo, eliminando falhas de consumo e perda de potência.",
    features: ["Leitura completa de falhas (ECU)", "Limpeza e teste de bicos injetores", "Regulagem eletrônica precisa"],
    icon: "Cpu",
    badge: "Alta Tecnologia"
  },
  {
    id: "suspensao-freios",
    title: "Freios & Suspensão Completa",
    shortDesc: "Sua segurança em primeiro lugar. Troca de pastilhas, discos, amortecedores e alinhamento milimétrico.",
    features: ["Revisão de sistema ABS", "Substituição de pastilhas e discos", "Amortecedores e buchas de alta durabilidade"],
    icon: "Disc",
    badge: "Segurança Máxima"
  },
  {
    id: "revisao-preventiva",
    title: "Revisão Geral Preventiva",
    shortDesc: "Check-up completo de mais de 50 itens para você viajar com tranquilidade e evitar gastos inesperados.",
    features: ["Checklist com relatório digital", "Inspeção visual e mecânica total", "Avaliação de correias e arrefecimento"],
    icon: "ShieldCheck",
    badge: "Mais Procurado"
  },
  {
    id: "oleo-filtros",
    title: "Troca de Óleo & Fluidos",
    shortDesc: "Utilizamos exclusivamente lubrificantes e filtros homologados pelas principais montadoras mundiais.",
    features: ["Óleo 100% sintético e semissintético", "Filtro de óleo, ar, combustível e cabine", "Fluidos de freio e direção"],
    icon: "Droplets",
    badge: "Rápido & Prático"
  }
];

export const TESTIMONIALS = [
  {
    name: "João Pereira",
    vehicle: "Jeep Renegade 1.8",
    rating: 5,
    text: "Oficina diferenciada na região do Imirim! Fizeram o diagnóstico exato que outras duas oficinas erraram. Me mandaram fotos e vídeos pelo WhatsApp de cada peça substituída. Preço justo e honestidade que hoje é raro encontrar.",
    date: "Há 2 semanas"
  },
  {
    name: "Camila Silveira",
    vehicle: "Hyundai HB20 1.0 Turbo",
    rating: 5,
    text: "Atendimento impecável! Levei para a revisão preventiva antes de viajar. O carro ficou pronto no mesmo dia, limpo e rodando macio. A nota 4.9 no Google é mais do que merecida. Super recomendo a Lm Automotive!",
    date: "Há 1 mês"
  },
  {
    name: "Marcelo F. Oliveira",
    vehicle: "VW Golf TSI",
    rating: 5,
    text: "Sou muito exigente com mecânica e a equipe da Lm me surpreendeu. O pessoal entende muito de injeção e suspensão. Cumpriram o orçamento certinho, sem inventar problemas adicionais. Ganharam um cliente fiel.",
    date: "Há 3 semanas"
  }
];

export const DIFFERENTIALS = [
  {
    title: "Transparência via WhatsApp",
    desc: "Enviamos fotos e vídeos do diagnóstico e das peças que realmente precisam de troca antes de iniciar o trabalho.",
    icon: "MessageSquare"
  },
  {
    title: "Diagnóstico Computadorizado",
    desc: "Equipamentos de varredura modernos compatíveis com nacionais e importados para identificar a causa exata.",
    icon: "Gauge"
  },
  {
    title: "Garantia & Peças Originais",
    desc: "Peças de procedência garantida com padrão de primeira linha e garantia formal de serviço realizado.",
    icon: "CheckCircle"
  },
  {
    title: "Pontualidade na Entrega",
    desc: "Respeitamos seu tempo. Prazos combinados na abertura da OS são rigorosamente cumpridos.",
    icon: "Clock"
  }
];

