'use client';

import { Wallet } from '@mercadopago/sdk-react';
import { PRODUCTS } from '@/config/products';
import { usePayment } from '@/hooks/usePayment';

export default function Payment() {
  const { preferenceId, isLoading, startCheckout } = usePayment();
  const { title, price, currency, features } = PRODUCTS.SESION_INDIVIDUAL;

  return (
    <section id="pago" className="bg-slate-50 py-24 sm:py-32 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Inicia tu camino hoy
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-700">
            Puedes contratar las sesiones de apoyo emocional de manera simple y segura.
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-lg rounded-3xl bg-white p-8 ring-1 ring-slate-200 shadow-xl sm:p-10 lg:mx-0 lg:max-w-none lg:flex lg:items-center">
          <div className="flex-1 lg:pr-10">
            <h3 className="text-2xl font-bold tracking-tight text-slate-900">{title}</h3>
            <p className="mt-6 text-base leading-7 text-slate-600">
              Un espacio uno a uno diseñado para trabajar tus necesidades específicas y encontrar herramientas personalizadas para tu bienestar.
            </p>
            <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-slate-600 sm:mt-10">
              {features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <span className="text-sky-500 font-bold">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-10 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-slate-50 py-10 text-center ring-1 ring-inset ring-slate-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-slate-600">Valor de la inversión</p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-slate-900">${price.toLocaleString()}</span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-slate-600">{currency}</span>
                </p>
                
                <div className="mt-10">
                  {!preferenceId ? (
                    <button
                      onClick={() => startCheckout('SESION_INDIVIDUAL')}
                      disabled={isLoading}
                      className="block w-full rounded-md bg-sky-600 px-3 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-sky-500 transition-all active:scale-95 disabled:opacity-50"
                    >
                      {isLoading ? 'Preparando pago...' : 'Contratar ahora'}
                    </button>
                  ) : (
                    <div className="animate-in fade-in zoom-in duration-300">
                      <Wallet initialization={{ preferenceId }} customization={{ texts: { valueProp: 'smart_option' } }} />
                    </div>
                  )}
                </div>
                
                <p className="mt-6 text-xs leading-5 text-slate-600">
                  Transferencia bancaria o link de pago seguro.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
