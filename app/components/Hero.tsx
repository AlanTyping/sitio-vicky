'use client';

import { useEffect, useRef } from 'react';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const shadeRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Respetamos la preferencia de movimiento reducido
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // El hero queda fijo mientras la sección siguiente lo tapa:
    // medimos ese recorrido en el contenedor padre.
    let range = 0;

    const measure = () => {
      const heroHeight = section.offsetHeight;
      const parentHeight = section.parentElement?.offsetHeight ?? heroHeight;
      range = Math.max(parentHeight - heroHeight, 0);
    };

    let frame = 0;

    const render = () => {
      frame = 0;

      const heroHeight = section.offsetHeight || 1;
      const parent = section.parentElement;
      const scrolled = parent ? -parent.getBoundingClientRect().top : -section.getBoundingClientRect().top;

      const total = range > 0 ? range : heroHeight;
      const progress = Math.min(Math.max(scrolled / total, 0), 1);

      // El video se acerca (zoom) mientras la sección de abajo sube
      if (backdropRef.current) {
        backdropRef.current.style.transform = `translate3d(0, ${progress * 10}%, 0) scale(${1 + progress * 0.2})`;
      }

      // El contenido se mantiene quieto y recién se desvanece cuando lo tapan
      if (contentRef.current) {
        contentRef.current.style.transform = `translate3d(0, ${-progress * 10}%, 0)`;
        contentRef.current.style.opacity = `${1 - Math.max(0, (progress - 0.55) / 0.45)}`;
      }

      // Oscurecemos de a poco para que la sección que sube gane protagonismo
      if (shadeRef.current) {
        shadeRef.current.style.opacity = `${progress * 0.45}`;
      }

      if (arrowRef.current) {
        arrowRef.current.style.opacity = `${Math.max(0, 0.5 - progress * 2)}`;
      }
    };

    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(render);
    };

    const handleResize = () => {
      measure();
      schedule();
    };

    measure();
    render();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', handleResize);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative hidden h-screen flex-col overflow-hidden bg-slate-900 font-[family-name:var(--font-lexend)] lg:sticky lg:top-0 lg:flex"
    >
      {/* Video de fondo (con margen extra para el parallax) */}
      <div
        ref={backdropRef}
        className="absolute -top-[15%] left-0 h-[130%] w-full will-change-transform"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/captura.webp"
          className="w-full h-full object-cover"
        >
          <source
            src="/videos/clases-video.mp4"
            type="video/mp4"
            media="(min-width: 1024px)"
          />
          Tu navegador no soporta videos.
        </video>
        {/* Overlays */}
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
      </div>

      {/* Velo que se intensifica con el scroll */}
      <div
        ref={shadeRef}
        className="pointer-events-none absolute inset-0 z-[5] bg-[#06162a] opacity-0"
        aria-hidden="true"
      />

      {/* Contenido */}
      <div
        ref={contentRef}
        className="relative z-10 flex-1 w-full flex flex-col items-center justify-center pt-28 lg:pt-32 px-6 pb-10 md:pb-20 lg:px-12 will-change-transform"
      >
        {/* Título y subtítulo */}
        <div className="text-center mb-10 lg:mb-16">
          <h1 className="text-[42px] sm:text-[72px] lg:text-[96px] font-bold tracking-tight text-white leading-[0.9] drop-shadow-2xl animate-fade-in-up">
            Vicky Aphalo
          </h1>
          <div className="mt-6 flex items-center justify-center gap-3 lg:gap-4 animate-fade-in [animation-delay:400ms] opacity-0 [animation-fill-mode:forwards]">
            <span className="h-px w-6 lg:w-10 bg-white/40"></span>
            <p className="text-[12px] lg:text-[16px] font-medium uppercase tracking-[0.18em] lg:tracking-[0.28em] text-white/90 text-center">
              Licenciada en Educación y maestra
            </p>
            <span className="h-px w-6 lg:w-10 bg-white/40"></span>
          </div>
        </div>

        {/* Propuestas (sin tarjeta, directo sobre el video) */}
        <div className="flex flex-col items-center text-center animate-fade-in [animation-delay:600ms] opacity-0 [animation-fill-mode:forwards]">
          <p className="text-base lg:text-xl font-semibold tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.65)]">
            Sesiones 1:1
            <span className="mx-2 lg:mx-3 text-white/50" aria-hidden="true">&middot;</span>
            Talleres
            <span className="mx-2 lg:mx-3 text-white/50" aria-hidden="true">&middot;</span>
            Capacitaciones institucionales
          </p>

          <a
            href="#servicios"
            className="group/cta mt-8 inline-flex items-center justify-center gap-3 rounded-2xl bg-white px-8 py-4 text-base lg:text-lg font-bold text-slate-900 shadow-2xl shadow-black/30 transition-all hover:bg-sky-50 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900"
          >
            Conocé mis servicios
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform group-hover/cta:translate-y-1"
            >
              <path d="M12 5v14" />
              <path d="m19 12-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>

      {/* Flecha flotante */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 hidden sm:block">
        <div ref={arrowRef} className="animate-bounce opacity-50">
          <svg
            width="20"
            height="40"
            viewBox="0 0 24 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white"
          >
            <path
              d="M12 0V58M12 58L5 51M12 58L19 51"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
