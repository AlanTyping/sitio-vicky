'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { initMercadoPago } from '@mercadopago/sdk-react';
import { PRODUCTS } from '@/config/products';
import { usePayment } from '@/hooks/usePayment';
import PaymentModal from './ui/PaymentModal';
import InfoModal from './ui/InfoModal';

const CHECK_ICON = (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="4"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-3.5 w-3.5"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const PRICE_FORMATTER = new Intl.NumberFormat('es-AR');

export default function Ebook() {
  const { initPoint, isLoading, startCheckout, resetPayment } = usePayment();
  const { title, price, currency, features } = PRODUCTS.EBOOK;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const ebookImage = '/images/ebook.webp';

  useEffect(() => {
    initMercadoPago(process.env.NEXT_PUBLIC_MP_PUBLIC_KEY || '');
  }, []);

  const handleOpenInfo = () => {
    setIsInfoModalOpen(true);
  };

  const handleGoToPayment = async () => {
    setIsInfoModalOpen(false);
    setIsPaymentModalOpen(true);
    await startCheckout('EBOOK');
  };

  const handleCloseModals = () => {
    setIsInfoModalOpen(false);
    setIsPaymentModalOpen(false);
    resetPayment();
  };

  return (
    <section
      id="ebook"
      className="relative overflow-hidden bg-gradient-to-b from-[#0c2a4a] to-[#06162a] py-24 font-[family-name:var(--font-lexend)] lg:py-32"
    >
      <InfoModal
        isOpen={isInfoModalOpen}
        onClose={handleCloseModals}
        onNext={handleGoToPayment}
      />

      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={handleCloseModals}
        initPoint={initPoint}
        isLoading={isLoading}
      />

      {/* Lightbox */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-[100] flex cursor-zoom-out items-center justify-center bg-black/90 p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="relative h-[80vh] w-full max-w-4xl">
            <Image
              src={ebookImage}
              alt={title}
              fill
              className="object-contain"
              sizes="(max-width: 896px) calc(100vw - 2rem), 896px"
            />
          </div>

          <button
            type="button"
            aria-label="Cerrar vista ampliada"
            className="absolute right-6 top-6 text-4xl text-white"
          >
            &times;
          </button>
        </div>
      )}

      {/* Fondo */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-full">
        <div className="absolute -right-24 top-[10%] h-[500px] w-[500px] rounded-full bg-sky-500/10 blur-[120px]" />
        <div className="absolute -left-24 bottom-[10%] h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Título mobile */}
        <div className="mb-12 text-center lg:hidden">
          <h2 className="text-4xl font-light leading-[1.05] tracking-tight text-white">
            Domina el caos <br />
            <span className="font-bold italic text-sky-400">sin perder la calma</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Visual Ebook */}
          <div className="flex animate-fade-in justify-center lg:justify-start">
            <style
              dangerouslySetInnerHTML={{
                __html: `
                  @keyframes float-slow {
                    0%, 100% { transform: translateY(0) rotate(-1deg); }
                    50% { transform: translateY(15px) rotate(0deg); }
                  }
                `,
              }}
            />

            <div
              className="group relative aspect-[3/4] w-full max-w-[420px] cursor-zoom-in transition-all duration-700 animate-[float-slow_4s_infinite_ease-in-out] hover:scale-[1.03]"
              onClick={() => setIsModalOpen(true)}
            >
              <div className="absolute inset-0 scale-110 rounded-3xl bg-sky-500/20 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100" />

              <div className="relative h-full w-full overflow-hidden rounded-2xl bg-slate-900 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.6)] ring-1 ring-white/10">
                <Image
                  src={ebookImage}
                  alt={title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 468px) calc(100vw - 3rem), 420px"
                />
              </div>
            </div>
          </div>

          {/* Contenido Ebook */}
          <div className="flex flex-col space-y-6 opacity-0 animate-fade-in-up [animation-delay:200ms] [animation-fill-mode:forwards] lg:max-w-3xl lg:space-y-8">
            <div className="hidden space-y-4 lg:block">
              <h2 className="text-4xl font-light leading-[1.05] tracking-tight text-white lg:text-6xl">
                Domina el caos <br />
                <span className="font-bold italic text-sky-400">sin perder la calma</span>
              </h2>

              <p className="max-w-xl text-lg font-medium leading-relaxed text-sky-100/70 lg:text-xl">
                ¿Sentís que a veces el aula se te escapa de las manos? Esta guía práctica está
                diseñada para darte respuestas concretas en segundos.
              </p>
            </div>

            <ul className="mt-5 grid grid-cols-1 gap-6 lg:mt-0 lg:gap-4">
              {features.map((feature) => (
                <li
                  key={feature}
                  className="group flex cursor-default items-center gap-4 text-base font-normal text-sky-50 lg:font-bold"
                >
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-sky-400 text-[#0c2a4a] shadow-lg transition-all duration-300 group-hover:bg-white">
                    {CHECK_ICON}
                  </span>
                  <span className="transition-transform group-hover:translate-x-1">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <div className="relative pt-4">
              <div className="relative mx-auto max-w-sm overflow-hidden rounded-[2rem] bg-white p-6 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.5)] lg:mx-0 lg:p-7">
                <div className="relative z-10 flex flex-col items-center space-y-5 text-center">
                  <div className="space-y-1">
                    <p className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 lg:text-[10px]">
                      Inversión en tu bienestar
                    </p>

                    <div className="flex flex-col items-center">
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-black tracking-tight text-[#0c2a4a] lg:text-5xl">
                          ${PRICE_FORMATTER.format(price)}
                        </span>
                        <span className="text-base font-bold text-slate-400 lg:text-lg">
                          {currency}
                        </span>
                      </div>
                      <p className="mt-0.5 text-xs font-bold uppercase tracking-widest text-sky-600 lg:text-sm">
                        20 USD LATAM
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleOpenInfo}
                    className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-sky-600 px-10 py-5 text-lg font-bold text-white shadow-xl shadow-sky-600/20 transition-all hover:bg-sky-500 active:scale-[0.98] lg:rounded-xl lg:px-8 lg:py-4"
                  >
                    ¡Quiero el Ebook ahora!
                  </button>
                </div>
              </div>

              <p className="mt-4 text-center text-[9px] font-bold uppercase tracking-widest text-sky-100/30 lg:text-left lg:text-[10px]">
                Acceso inmediato • Formato Digital • Soporte incluido
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
