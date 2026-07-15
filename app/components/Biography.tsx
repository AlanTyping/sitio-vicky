import Image from 'next/image';

export default function Biography() {
  return (
    <section id="biografia" className="relative overflow-hidden bg-white pb-12 font-[family-name:var(--font-lexend)] lg:pt-24 lg:pb-16">
      {/* Elemento decorativo sutil */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 opacity-50 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl lg:px-8">
        <div className="flex flex-col items-center lg:flex-row lg:gap-20">

          {/* Lado de la Imagen - Animación de entrada */}
          <div className="flex w-full shrink-0 justify-center animate-slide-in-left lg:w-[360px] lg:justify-start">
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-slate-100 lg:max-w-none lg:rounded-[2rem] lg:shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
              <Image
                src="/images/vicky.webp"
                alt="Vicky Aphalo - Habitar el Aula"
                fill
                className="object-cover"
                sizes="(max-width: 1023px) 100vw, 360px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/10 to-black/40 lg:hidden" aria-hidden="true" />
              <div className="absolute bottom-24 left-6 right-6 z-10 grid grid-cols-2 gap-3 lg:hidden">
                <a
                  href="#guia-gratuita"
                  className="inline-flex min-h-16 items-center justify-center rounded-2xl bg-[#315b3a] px-3 text-center text-sm font-bold leading-tight text-white shadow-xl shadow-slate-900/30 transition-all hover:bg-[#25472d] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#315b3a] active:scale-[0.98]"
                >
                  Descargar guía gratis
                </a>
                <a
                  href="#ebook"
                  className="inline-flex min-h-16 items-center justify-center rounded-2xl border border-white/70 bg-[#edf3e8]/95 px-3 text-center text-sm font-bold leading-tight text-[#315b3a] shadow-xl shadow-slate-900/25 backdrop-blur-sm transition-all hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#315b3a] focus:ring-offset-2 focus:ring-offset-[#edf3e8] active:scale-[0.98]"
                >
                  Conocer el ebook
                </a>
              </div>
            </div>
          </div>

          {/* Lado del Texto - Animación de entrada */}
          <div className="relative z-20 -mt-16 flex w-full flex-1 flex-col justify-center rounded-t-[2rem] bg-white px-6 pt-8 animate-slide-in-right lg:mt-0 lg:w-auto lg:rounded-none lg:bg-transparent lg:px-0 lg:pt-0">
            <div className="max-w-2xl">
              <div className="mb-6 flex items-center gap-3 lg:hidden">
                <span className="h-0.5 w-8 rounded-full bg-[#315b3a]" aria-hidden="true" />
                <p className="text-sm font-bold tracking-tight text-[#315b3a]">
                  Sobre mí
                </p>
              </div>

              {/* Título Desktop (se oculta en móvil) */}
              <div className="hidden lg:block">
                <span className="text-sky-600 font-bold uppercase tracking-[0.2em] text-xs mb-5 block">
                  Mi Propósito
                </span>

                <h2 className="text-4xl lg:text-5xl font-light text-slate-900 leading-[1.1] mb-8 tracking-tight">
                  Soy Victoria Aphalo, docente apasionada por la <span className="text-sky-700 italic font-bold">infancia y la pedagogía</span>
                </h2>
              </div>

              <div className="space-y-5 text-base leading-[1.75] text-slate-600 lg:space-y-6 lg:text-xl lg:leading-relaxed">
                <p>
                  Durante años me encontré con grupos que no respondían y con mucho desgaste en el aula. Hasta que entendí que <span className="text-slate-900 font-semibold border-b-2 border-sky-100">no se trataba solo de qué hacía, sino de cómo intervenía</span> en esos momentos.
                </p>

                <p>
                  A partir de ahí, comencé a trabajar con estrategias lúdicas, corporales y vinculares para intervenir sin gritar y habitar el aula de una manera diferente.
                </p>

                <p>
                  Hoy acompaño a docentes que buscan hacer lo mismo. Mi propuesta combina mirada pedagógica, autoconocimiento y herramientas concretas para sostener el aula con más claridad, presencia y sentido, construyendo formas de enseñar más conscientes y humanas.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* New Quote Container - Con animación */}
        <div className="relative mt-12 flex flex-col items-center px-6 pt-12 animate-fade-in-up [animation-delay:400ms] opacity-0 [animation-fill-mode:forwards] lg:mt-16 lg:px-0 lg:pt-16">
          <div className="w-24 h-px bg-slate-200 absolute top-0" />

          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 text-sky-100">
            <svg width="40" height="30" viewBox="0 0 40 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 18.25V0H15V18.25C15 24.75 11.25 30 5 30H3.75V25H5C7.75 25 10 21.75 10 18.25H0ZM25 18.25V0H40V18.25C40 24.75 36.25 30 30 30H28.75V25H30C32.75 25 35 21.75 35 18.25H25Z" />
            </svg>
          </div>
          <div className="max-w-4xl mx-auto text-center px-6">
            <p className="text-2xl sm:text-3xl lg:text-4xl font-light text-slate-600 leading-tight italic">
              Porque no se trata de hacer más, <br className="sm:hidden" />
              <span className="text-sky-600/80"> se trata de intervenir mejor</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
