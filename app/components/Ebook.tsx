'use client';

import Image from 'next/image';
import { initMercadoPago } from '@mercadopago/sdk-react';
import { PRODUCTS } from '@/config/products';
import { usePayment } from '@/hooks/usePayment';
import WalletButton from './ui/WalletButton';

// Inicializamos Mercado Pago con la clave pública
initMercadoPago(process.env.NEXT_PUBLIC_MP_PUBLIC_KEY || '');

export default function Ebook() {
  const { preferenceId, isLoading, startCheckout } = usePayment();
  const { title, price, oldPrice, currency, subtitle, features } = PRODUCTS.EBOOK;

  return (
    <section id="ebook" className="relative bg-[#022c22] py-24 sm:py-32 scroll-mt-20 overflow-hidden text-white">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none opacity-20">
        <div className="absolute top-1/4 -right-12 w-96 h-96 bg-emerald-500 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-12 w-96 h-96 bg-teal-500 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:items-center lg:gap-x-16">

          {/* Ebook Mockup / Visual Area */}
          <div className="relative group">
            <div className="aspect-[3/4] w-full max-w-md mx-auto relative transition-transform duration-500 group-hover:scale-[1.02] overflow-hidden rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] ring-1 ring-white/20">
              <Image
                src="/images/ebook.png"
                alt="Ebook: Cuando el aula se desordena"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Discount Badge */}
            <div className="absolute -top-6 -right-6 bg-[#e80300] text-white w-24 h-24 rounded-full flex flex-col items-center justify-center shadow-xl rotate-12 font-bold animate-bounce-slow z-20 border-4 border-white">
              <span className="text-xs uppercase">Lanzamiento</span>
              <span className="text-xl">30% OFF</span>
            </div>
          </div>

          {/* Product Details */}
          <div>
            <h2 className="text-base font-bold leading-7 text-[#e80300] uppercase tracking-[0.2em]">Recurso Imprescindible</h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-[#ffffcd] sm:text-5xl">
              Domina el caos sin perder la calma
            </p>
            <p className="mt-6 text-lg leading-8 text-emerald-100/80">
              ¿Sentís que a veces el aula se te escapa de las manos? Esta guía práctica está diseñada para darte respuestas concretas en esos segundos donde se decide el clima de tu clase.
            </p>

            <ul className="mt-10 space-y-4">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-emerald-50">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#e80300] text-white flex items-center justify-center font-bold text-xs shadow-sm">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-12 p-8 bg-[#ffffcd] rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative overflow-hidden border-2 border-[#e80300]/10">
              {/* Decorative accent inside the box */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#e80300]/5 rounded-full -translate-y-1/2 translate-x-1/2" />

              <div className="flex items-baseline gap-4 mb-6 relative z-10">
                <span className="text-[#e80300]/60 line-through text-2xl font-semibold">${oldPrice?.toLocaleString()}</span>
                <span className="text-5xl font-extrabold text-[#022c22]">${price.toLocaleString()}</span>
                <span className="text-sm text-emerald-800 font-bold uppercase tracking-wider">{currency}</span>
              </div>

              <button
                onClick={() => startCheckout('EBOOK')}
                disabled={isLoading}
                className="w-full bg-[#022c22] hover:bg-emerald-900 text-[#ffffcd] font-black py-4 px-6 rounded-xl shadow-lg transition-all active:scale-95 disabled:opacity-50 text-lg flex items-center justify-center gap-2 relative z-10"
              >
                {isLoading ? 'Redirigiendo a Mercado Pago...' : '¡Quiero el ebook ahora!'}
              </button>

              <p className="mt-4 text-center text-xs text-emerald-900/60 font-medium relative z-10">                Entrega inmediata vía email tras la confirmación del pago.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
