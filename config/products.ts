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
    price: 12000, // Precio de ejemplo, puedes ajustarlo
    currency: 'ARS',
    duration: '60 min',
    features: [
      'Atención personalizada',
      'Duración de 60 min',
      'Soporte vía WhatsApp',
      'Material complementario'
    ]
  }
} as const;

export type ProductKey = keyof typeof PRODUCTS;
