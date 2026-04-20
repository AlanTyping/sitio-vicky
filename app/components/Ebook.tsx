'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { initMercadoPago } from '@mercadopago/sdk-react';
import { PRODUCTS } from '@/config/products';
import { usePayment } from '@/hooks/usePayment';
import PaymentModal from './ui/PaymentModal';
import InfoModal from './ui/InfoModal';

// Inicializamos Mercado Pago con la clave pública
initMercadoPago(process.env.NEXT_PUBLIC_MP_PUBLIC_KEY || '');

export default function Ebook() {
  const { preferenceId, initPoint, isLoading, startCheckout, resetPayment } = usePayment();
  const { title, price, oldPrice, currency, features } = PRODUCTS.EBOOK;

  const [currentImage, setCurrentImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const images = ['/images/ebook.png', '/images/pdf-guide.jpeg'];

  useEffect(() => {
    if (isModalOpen || isInfoModalOpen || isPaymentModalOpen) return; // Pausar slider si algún modal está abierto
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length, isModalOpen, isInfoModalOpen, isPaymentModalOpen]);

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
    // CAMBIO: Fondo azul noche profundo con degradado hacia negro azulado
    <section id="ebook" className="relative bg-gradient-to-b from-[#0c2a4a] to-[#06162a] py-24 lg:py-32 overflow-hidden font-[family-name:var(--font-lexend)]">
      {/* Modal de Información */}
      <InfoModal 
        isOpen={isInfoModalOpen}
        onClose={handleCloseModals}
        onNext={handleGoToPayment}
      />

      {/* Modal de Pago */}
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
              src={images[currentImage]}
              alt={title}
              fill
              className="object-contain"
            />
          </div>
          <button className="absolute top-6 right-6 text-white text-4xl">&times;</button>
        </div>
      )}

      {/* Decoración de fondo... */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[10%] -right-24 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] -left-24 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:items-center">

          {/* Visual: Mockup con iluminación dramática */}
          <div className="flex justify-center lg:justify-start">
            <div 
              className="relative group w-full max-w-[420px] aspect-[3/4] transition-all duration-700 group-hover:scale-[1.03] -rotate-1 group-hover:rotate-0 cursor-zoom-in"
              onClick={() => setIsModalOpen(true)}
            >
              {/* Resplandor suave detrás del libro al hacer hover */}
              <div className="absolute inset-0 bg-sky-500/20 rounded-3xl blur-3xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative h-full w-full overflow-hidden rounded-2xl shadow-[0_50px_100px_-20px_rgba(0,0,0,0.6)] ring-1 ring-white/10 bg-slate-900">
                <div 
                  className="flex h-full transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateX(-${currentImage * 100}%)` }}
                >
                  {images.map((src) => (
                    <div key={src} className="relative h-full w-full flex-shrink-0">
                      <Image
                        src={src}
                        alt={title}
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                  ))}
                </div>

                {/* Slider Dots */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImage(idx);
                      }}
                      className={`w-2 h-2 rounded-full transition-all ${
                        currentImage === idx ? "bg-white w-6" : "bg-white/40 hover:bg-white/60"
                      }`}
                      aria-label={`Ir a imagen ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Floating Badge - Resalta con armonía sobre el fondo oscuro */}
              <div className="absolute -top-6 -right-6 bg-rose-500 text-white px-6 py-3 rounded-full shadow-2xl rotate-12 font-black text-sm uppercase tracking-tighter border-4 border-[#0c2a4a] z-20">
                ¡30% OFF! 🚀
              </div>
            </div>
          </div>

          {/* Contenido: Tipografía en Blanco y Celeste Claro */}
          <div className="flex flex-col space-y-8 lg:max-w-2xl">
            <div className="space-y-4">

              <div className="flex items-center gap-3">
                <span className="bg-sky-500/20 text-sky-300 border border-sky-500/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Recurso Imprescindible
                </span>
                <span className="text-sky-100/40 text-xs font-bold tracking-wide uppercase">Bestseller Docente</span>
              </div>

              <h2 className="text-4xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.05]">
                Domina el caos <br />
                <span className="text-sky-400 italic">sin perder la calma.</span>
              </h2>

              <p className="text-lg lg:text-xl leading-relaxed text-sky-100/70 font-medium max-w-xl">
                ¿Sentís que a veces el aula se te escapa de las manos? Esta guía práctica está diseñada para darte respuestas concretas en segundos.
              </p>
            </div>

            {/* Listado de Beneficios con contraste alto y micro-interacciones */}
            <ul className="grid grid-cols-1 gap-4">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-4 text-sky-50 font-bold group cursor-default">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-sky-400 text-[#0c2a4a] flex items-center justify-center shadow-lg group-hover:bg-white transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </span>
                  <span className="group-hover:translate-x-1 transition-transform">{feature}</span>
                </li>
              ))}
            </ul>

            {/* Price Card: Blanca y Pura para destacar con fuerza */}
            <div className="relative pt-4">
              <div className="bg-white p-8 lg:p-10 rounded-[2.5rem] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.5)] relative overflow-hidden">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-8 relative z-10">
                  <div className="space-y-1">
                    <p className="text-slate-500 text-[13px] font-black uppercase tracking-[0.2em]">Inversión en tu bienestar</p>
                    <div className="flex items-baseline gap-3">
                      <span className="text-slate-400 line-through text-2xl font-semibold">${oldPrice?.toLocaleString()}</span>
                      <span className="text-5xl lg:text-6xl font-black text-[#0c2a4a]">${price.toLocaleString()}</span>
                    </div>
                  </div>

                  <button
                    onClick={handleOpenInfo}
                    className="bg-sky-600 hover:bg-sky-500 text-white font-black py-5 px-10 rounded-2xl shadow-lg shadow-sky-600/20 transition-all active:scale-[0.98] disabled:opacity-50 text-lg flex items-center justify-center gap-3 group"
                  >
                    ¡Quiero el Ebook ahora!
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22" height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="group-hover:translate-x-1 transition-transform"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button>
                </div>
              </div>

              <p className="mt-6 text-center text-xs text-sky-100/30 font-semibold tracking-wide uppercase">
                Acceso inmediato • Formato Digital • Soporte incluido
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
