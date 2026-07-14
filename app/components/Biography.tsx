import Image from 'next/image';

export default function Biography() {
  return (
    <section id="biografia" className="relative bg-white pt-12 lg:pt-24 pb-12 lg:pb-16 overflow-hidden font-[family-name:var(--font-lexend)]">
      {/* Elemento decorativo sutil */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 opacity-50 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {/* Título móvil (arriba de la imagen) */}
        <div className="lg:hidden mb-10">
          <h2 className="text-3xl font-light text-slate-900 leading-[1.1] tracking-tight">
            Soy Victoria Aphalo, docente apasionada por la <span className="text-sky-700 italic font-bold">infancia y la pedagogía</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">

          {/* Lado de la Imagen - Animación de entrada */}
          <div className="w-full lg:w-[360px] shrink-0 flex justify-center lg:justify-start animate-slide-in-left">
            <div className="relative aspect-[3/4] w-full max-w-[260px] sm:max-w-[300px] lg:max-w-none overflow-hidden rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.08)] bg-slate-100">
              <Image
                src="/images/vicky.webp"
                alt="Vicky Aphalo - Habitar el Aula"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 260px, 360px"
              />
            </div>
          </div>

          {/* Lado del Texto - Animación de entrada */}
          <div className="flex flex-col justify-center flex-1 animate-slide-in-right">
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

              <div className="space-y-6 text-lg lg:text-xl text-slate-600 leading-relaxed">
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
        <div className="mt-12 lg:mt-16 pt-12 lg:pt-16 relative flex flex-col items-center animate-fade-in-up [animation-delay:400ms] opacity-0 [animation-fill-mode:forwards]">
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
