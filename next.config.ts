import type { NextConfig } from "next";

/**
 * Content Security Policy (CSP)
 * Definimos las fuentes permitidas para scripts, estilos, imágenes, etc.
 * Ajustado para permitir Mercado Pago, Vercel Analytics y Gumroad.
 */
const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline' sdk.mercadopago.com va.vercel-scripts.com;
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data: huellaonline.com http2.mlstatic.com www.mercadopago.com.ar www.mercadopago.com;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self' www.mercadopago.com.ar www.mercadopago.com;
    frame-ancestors 'none';
    connect-src 'self' va.vercel-scripts.com api.mercadopago.com www.mercadopago.com.ar www.mercadopago.com;
    frame-src 'self' www.mercadopago.com.ar www.mercadopago.com vaphalo.gumroad.com;
    require-trusted-types-for 'script';
    upgrade-insecure-requests;
`;

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: cspHeader.replace(/\n/g, '').trim(),
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
