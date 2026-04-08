'use client';

import { useState, useEffect } from 'react';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import Timer from './Timer';
import { PRODUCTS } from '@/config/products';
import { usePayment } from '@/hooks/usePayment';

// Inicializamos Mercado Pago
initMercadoPago(process.env.NEXT_PUBLIC_MP_PUBLIC_KEY || '');

export default function Taller() {
  const [isMounted, setIsMounted] = useState(false);
  const { preferenceId, isLoading, startCheckout } = usePayment();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <section id="taller" className="px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="animate-pulse bg-gray-50 h-96 rounded-3xl ring-1 ring-gray-200" />
        </div>
      </section>
    );
  }

  const { title, price, oldPrice, currency } = PRODUCTS.TALLER;

  return (
    <section id="taller" className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8 scroll-mt-20">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <h2 className="text-base font-semibold leading-7 text-sky-600 uppercase tracking-wide">Taller Exclusivo</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
            Transforma tu Aula sin Agotarte
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Sabemos que el estrés docente es real. Este taller está diseñado para darte las herramientas que la formación tradicional olvidó.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-12">
          {/* Dolores del Maestro */}
          <div className="bg-red-50 p-8 rounded-2xl ring-1 ring-red-200 shadow-sm">
            <h3 className="text-xl font-bold text-red-900 mb-6 flex items-center">
              <span className="mr-2">⚠️</span> ¿Te sientes así?
            </h3>
            <ul className="space-y-4 text-red-800">
              <li className="flex gap-x-3 italic">
                <span>•</span> Agotamiento mental antes de llegar al mediodía.
              </li>
              <li className="flex gap-x-3 italic">
                <span>•</span> Sensación de que el grupo te "desborda" emocionalmente.
              </li>
              <li className="flex gap-x-3 italic">
                <span>•</span> Falta de herramientas prácticas para manejar conflictos.
              </li>
              <li className="flex gap-x-3 italic">
                <span>•</span> Dificultad para desconectar del trabajo al llegar a casa.
              </li>
            </ul>
          </div>

          {/* Métodos de Solución */}
          <div className="bg-sky-50 p-8 rounded-2xl ring-1 ring-sky-200 shadow-sm">
            <h3 className="text-xl font-bold text-sky-900 mb-6 flex items-center">
              <span className="mr-2">✨</span> Qué vas a lograr
            </h3>
            <ul className="space-y-4 text-sky-800">
              <li className="flex gap-x-3">
                <span className="font-bold text-sky-600">✓</span> Estrategias de regulación emocional inmediata.
              </li>
              <li className="flex gap-x-3">
                <span className="font-bold text-sky-600">✓</span> Técnicas de comunicación no violenta para el aula.
              </li>
              <li className="flex gap-x-3">
                <span className="font-bold text-sky-600">✓</span> Método de "Reseteo Consciente" post-clase.
              </li>
              <li className="flex gap-x-3">
                <span className="font-bold text-sky-600">✓</span> Plan de autocuidado realista para el calendario escolar.
              </li>
            </ul>
          </div>
        </div>
{/* Oferta y Checkout */}
<div className="mt-20 bg-slate-900 rounded-3xl p-8 sm:p-12 text-center text-white relative shadow-2xl">
  {/* Decorative background for the card - Moved overflow-hidden here */}
  <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-sky-500/20 rounded-full blur-3xl" />
  </div>

  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-400 text-black px-6 py-2 rounded-full font-bold text-sm uppercase tracking-widest shadow-xl z-30 whitespace-nowrap">
    Oferta por tiempo limitado
  </div>


          <div className="mb-12 relative z-10">
            <p className="text-slate-400 text-sm uppercase tracking-widest mb-4">La oferta termina en:</p>
            <Timer />
          </div>

          <div className="mb-10 h-32 flex flex-col items-center justify-center relative z-10">
            <div className="mb-4">
              <span className="text-slate-400 line-through text-2xl mr-4">${oldPrice?.toLocaleString()}</span>
              <span className="text-5xl font-extrabold text-white">${price.toLocaleString()}</span>
              <span className="text-sm text-slate-400 ml-2">{currency}</span>
            </div>

            {!preferenceId ? (
              <button
                onClick={() => startCheckout('TALLER')}
                disabled={isLoading}
                className="w-full sm:w-auto bg-sky-500 px-12 py-4 rounded-xl font-bold text-lg hover:bg-sky-600 transition-all disabled:opacity-50 shadow-xl shadow-sky-500/20 active:scale-95 flex items-center justify-center gap-3"
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Preparando tu lugar...
                  </>
                ) : '¡Quiero mi lugar ahora!'}
              </button>
            ) : (
              <div id="wallet_container" className="w-full max-w-xs animate-in fade-in zoom-in duration-300">
                <Wallet initialization={{ preferenceId }} />
              </div>
            )}
          </div>

          <p className="mt-6 text-xs text-slate-500 relative z-10">
            Pago seguro procesado por Mercado Pago. Acceso inmediato tras la compra.
          </p>
        </div>
      </div>
    </section>
  );
}
