export const PRODUCTS = {
  TALLER: {
    id: 'taller-emocional-docentes',
    title: 'Taller de Gestión Emocional para Docentes',
    price: 1,
    oldPrice: 2,
    currency: 'ARS',
  },
  SESION_INDIVIDUAL: {
    id: 'sesion-individual-apoyo',
    title: 'Sesión Individual de Apoyo Emocional',
    price: 12000,
    currency: 'ARS',
    duration: '60 min',
    features: [
      'Atención personalizada',
      'Duración de 60 min',
      'Soporte vía WhatsApp',
      'Material complementario'
    ]
  },
  EBOOK: {
    id: 'ebook-aula-desordenada',
    title: 'Ebook: CUANDO EL AULA SE DESORDENA',
    price: 0.01,
    oldPrice: null,
    currency: 'ARS',
    subtitle: 'Qué hacer en el momento justo - sin perder la clase',
    features: [
      'Guía paso a paso para situaciones críticas',
      'Técnicas de regulación grupal inmediata',
      'Protocolos de comunicación asertiva',
      'Acceso de por vida en PDF'
    ]
  }
} as const;

export type ProductKey = keyof typeof PRODUCTS;
