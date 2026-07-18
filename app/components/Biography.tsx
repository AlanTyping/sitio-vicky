import Image from 'next/image';

export default function Biography() {
  return (
    <section id="biografia" className="relative overflow-hidden bg-white pb-12 font-[family-name:var(--font-lexend)] lg:pt-24 lg:pb-16">
      {/* Elemento decorativo sutil */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 opacity-50 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl lg:px-8">
        <div className="relative isolate flex min-h-[480px] items-end overflow-hidden bg-slate-900 px-6 pb-16 pt-20 lg:hidden">
          <Image
            src="/images/vicky.webp"
            alt=""
            fill
            className="-z-20 object-cover object-[center_30%]"
            sizes="100vw"
            priority
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-slate-950/20 to-slate-950/90"
            aria-hidden="true"
          />

          <div className="mx-auto w-full max-w-xl">
            <h1 className="mx-auto max-w-sm text-left text-2xl font-bold leading-tight text-white drop-shadow-lg">
              Herramientas para enseñar con más calma y claridad.
            </h1>
          </div>
        </div>

        <div className="relative z-10 -mt-14 bg-gradient-to-b from-black/30 via-black/90 to-black px-6 pb-8 pt-6 lg:hidden">
          <div className="mx-auto flex max-w-sm flex-col gap-3">
            <div>
              <a
                href="#ebook"
                className="inline-flex min-h-16 w-full items-center justify-center gap-3 rounded-2xl bg-sky-600 px-5 text-center text-base font-bold leading-tight text-white shadow-lg shadow-sky-600/20 transition-all hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-2 active:scale-[0.98]"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 shrink-0"
                >
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
                </svg>
                Quiero mi Ebook
              </a>
            </div>

            <a
              href="#guia-gratuita"
              className="inline-flex min-h-16 items-center justify-center gap-3 rounded-2xl border border-sky-200 bg-white px-5 text-center text-base font-bold leading-tight text-sky-700 shadow-sm transition-all hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-2 active:scale-[0.98]"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 shrink-0"
              >
                <path d="M12 3v12" />
                <path d="m7 10 5 5 5-5" />
                <path d="M5 21h14" />
              </svg>
              Descargar guía gratis
            </a>
          </div>
        </div>

        <div className="relative z-20 bg-white lg:contents">
          <div className="flex items-center px-6 pb-0 pt-6 lg:hidden">
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-8 rounded-full bg-sky-500" aria-hidden="true" />
              <p className="text-sm font-bold tracking-tight text-sky-700">
                Sobre mí
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center lg:flex-row lg:gap-20">

            {/* Lado de la Imagen - Animación de entrada */}
            <div className="hidden w-full shrink-0 justify-center px-6 animate-slide-in-left lg:flex lg:w-[360px] lg:justify-start lg:px-0">
              <div className="relative aspect-[3/4] w-full max-w-[280px] overflow-hidden rounded-[2rem] bg-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.08)] lg:max-w-none">
                <Image
                  src="/images/vicky.webp"
                  alt="Vicky Aphalo - Habitar el Aula"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1023px) 100vw, 360px"
                  priority
                />
              </div>
            </div>

            {/* Lado del Texto - Animación de entrada */}
            <div className="relative z-20 flex w-full flex-1 flex-col justify-center bg-transparent px-6 pt-3 animate-slide-in-right lg:mt-0 lg:w-auto lg:rounded-none lg:px-0 lg:pt-0">
              <div className="max-w-2xl">
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
        </div>

        <a
          href="https://www.instagram.com/vicky.aphalo/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Seguir a Vicky Aphalo en Instagram"
          className="fixed bottom-5 right-5 z-30 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white shadow-lg shadow-fuchsia-900/30 transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:ring-offset-2 active:scale-95 lg:hidden"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <rect width="18" height="18" x="3" y="3" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" />
            <path d="M17.5 6.5h.01" />
          </svg>
        </a>

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
