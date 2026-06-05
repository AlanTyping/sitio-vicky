'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { initMercadoPago } from '@mercadopago/sdk-react';
import { PRODUCTS } from '@/config/products';
import { usePayment } from '@/hooks/usePayment';
import PaymentModal from './ui/PaymentModal';
import InfoModal from './ui/InfoModal';

export default function Ebook() {
  const { preferenceId, initPoint, isLoading, startCheckout, resetPayment } = usePayment();
  const { title, price, oldPrice, currency, features } = PRODUCTS.EBOOK;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const ebookImage = '/images/ebook.webp';

  useEffect(() => {
    // Inicializamos Mercado Pago solo en el cliente y una sola vez
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
    <section id="ebook" className="relative bg-gradient-to-b from-[#0c2a4a] to-[#06162a] py-24 lg:py-32 overflow-hidden font-[family-name:var(--font-lexend)]">
      {/* Modales */}
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

      {/* Modal Lightbox */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="relative w-full max-w-4xl h-[80vh]">
            <Image
              src={ebookImage}
              alt={title}
              fill
              className="object-contain"
            />
          </div>
          <button className="absolute top-6 right-6 text-white text-4xl">&times;</button>
        </div>
      )}

      {/* Fondo */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[10%] -right-24 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] -left-24 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {/* Título y Badges para Móvil (arriba de la imagen) */}
        <div className="lg:hidden mb-12 text-center">
          <div className="flex flex-col items-center gap-3 mb-6">
            <span className="bg-sky-500/20 text-sky-300 border border-sky-500/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
              Recurso Imprescindible
            </span>
            <span className="text-sky-100/40 text-xs font-bold tracking-wide uppercase">Bestseller Docente</span>
          </div>
          <h2 className="text-4xl font-light tracking-tight text-white leading-[1.05]">
            Domina el caos <br />
            <span className="text-sky-400 italic font-bold">sin perder la calma</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 lg:items-center">

          {/* Visual Ebook - Animación de flotación con CSS */}
          <div
            className="flex justify-center lg:justify-start animate-fade-in"
          >
            <style dangerouslySetInnerHTML={{ __html: `
              @keyframes float-slow {
                0%, 100% { transform: translateY(0) rotate(-1deg); }
                50% { transform: translateY(15px) rotate(0deg); }
              }
            `}} />
            <div
              className="relative group w-full max-w-[420px] aspect-[3/4] transition-all duration-700 hover:scale-[1.03] cursor-zoom-in animate-[float-slow_4s_infinite_ease-in-out]"
              onClick={() => setIsModalOpen(true)}
            >
              <div className="absolute inset-0 bg-sky-500/20 rounded-3xl blur-3xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative h-full w-full overflow-hidden rounded-2xl shadow-[0_50px_100px_-20px_rgba(0,0,0,0.6)] ring-1 ring-white/10 bg-slate-900">
                <Image
                  src={ebookImage}
                  alt={title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Contenido Ebook - Animación de bloque único */}
          <div
            className="flex flex-col space-y-6 lg:space-y-8 lg:max-w-3xl animate-fade-in-up [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards]"
          >
            {/* Contenido Desktop (se oculta en móvil) */}
            <div className="hidden lg:block space-y-4">
              <div className="flex items-center gap-3">
                <span className="bg-sky-500/20 text-sky-300 border border-sky-500/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Recurso Imprescindible
                </span>
                <span className="text-sky-100/40 text-xs font-bold tracking-wide uppercase">Bestseller Docente</span>
              </div>
              <h2 className="text-4xl lg:text-6xl font-light tracking-tight text-white leading-[1.05]">
                Domina el caos <br />
                <span className="text-sky-400 italic font-bold">sin perder la calma</span>
              </h2>

              <p className="text-lg lg:text-xl leading-relaxed text-sky-100/70 font-medium max-w-xl">
                ¿Sentís que a veces el aula se te escapa de las manos? Esta guía práctica está diseñada para darte respuestas concretas en segundos.
              </p>
            </div>

            <ul className="grid grid-cols-1 gap-6 lg:gap-4 mt-5 lg:mt-0">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-4 text-sky-50 text-base font-normal lg:font-bold group cursor-default">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-sky-400 text-[#0c2a4a] flex items-center justify-center shadow-lg group-hover:bg-white transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </span>
                  <span className="group-hover:translate-x-1 transition-transform">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="relative pt-4">
              <div className="bg-white p-6 lg:p-7 rounded-[2rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.5)] relative overflow-hidden max-w-sm mx-auto lg:mx-0">
                <div className="flex flex-col items-center text-center space-y-5 relative z-10">

                  <div className="space-y-1">
                    <p className="text-slate-400 text-[9px] lg:text-[10px] font-black uppercase tracking-[0.2em]">Inversión en tu bienestar</p>

                    <div className="flex flex-col items-center">
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl lg:text-5xl font-black text-[#0c2a4a] tracking-tight">
                          ${price.toLocaleString()}
                        </span>
                        <span className="text-base lg:text-lg font-bold text-slate-400">ARG</span>
                      </div>
                      <p className="text-xs lg:text-sm font-bold text-sky-600 uppercase tracking-widest mt-0.5">
                        20 USD LATAM
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={handleOpenInfo}
                    className="w-full bg-sky-600 hover:bg-sky-500 text-white font-bold py-5 px-10 rounded-2xl shadow-xl shadow-sky-600/20 transition-all text-lg lg:text-lg lg:py-4 lg:px-8 lg:rounded-xl flex items-center justify-center gap-3 group active:scale-[0.98]"
                  >
                    ¡Quiero el Ebook ahora!
                  </button>
                </div>
              </div>
              <p className="mt-4 text-center lg:text-left text-[9px] lg:text-[10px] text-sky-100/30 font-bold uppercase tracking-widest">
                Acceso inmediato • Formato Digital • Soporte incluido
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
