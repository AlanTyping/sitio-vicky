import Image from 'next/image';

export default function Biography() {
  return (
    <section
      id="biografia"
      className="relative z-10 overflow-hidden bg-gradient-to-b from-white via-white to-slate-50 pb-20 font-[family-name:var(--font-lexend)] shadow-[0_-20px_50px_-20px_rgba(15,23,42,0.25)] lg:pb-16 lg:pt-24"
    >
      <div
        className="pointer-events-none absolute -right-24 top-0 h-[32rem] w-[32rem] -translate-y-1/3 rounded-full bg-sky-50 opacity-70 blur-[120px]"
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto max-w-7xl lg:px-8">
        {/* Hero mobile */}
        <div className="bg-slate-950 lg:hidden">
          <div className="relative isolate flex min-h-[480px] items-end overflow-hidden bg-slate-950 px-6 pb-16 pt-20 sm:min-h-[520px]">
            <Image
              src="/images/vicky.webp"
              alt=""
              fill
              priority
              sizes="100vw"
              aria-hidden="true"
              className="-z-20 object-cover object-[center_30%]"
            />

            <div
              className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-slate-950/20 to-slate-950"
              aria-hidden="true"
            />

            <div className="relative z-10 mx-auto w-full max-w-xl animate-fade-in-up opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards]">
              <h1 className="max-w-md text-3xl font-normal leading-tight text-white sm:text-4xl">
                Herramientas para enseñar con más{' '}
                <span className="font-semibold">calma</span> y{' '}
                <span className="font-semibold">claridad</span>.
              </h1>
            </div>
          </div>

          {/* Botones mobile */}
          <div className="relative z-10 -mt-14 bg-gradient-to-b from-transparent via-slate-950/90 to-slate-950 px-6 pb-8 pt-6">
            <div className="mx-auto flex max-w-sm flex-col gap-3 animate-fade-in-up opacity-0 [animation-delay:400ms] [animation-fill-mode:forwards]">
              <a
                href="#servicios"
                className="inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-xl bg-sky-600 px-5 text-center text-base font-bold leading-tight text-white shadow-lg shadow-sky-600/25 transition-all hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-slate-950 active:scale-[0.98]"
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
                  <path d="M12 5v14" />
                  <path d="m19 12-7 7-7-7" />
                </svg>

                Ver servicios
              </a>

              <a
                href="#guia-gratuita"
                className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-xl border border-white/40 px-5 py-3 text-center text-sm font-semibold text-white/90 transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/70 focus:ring-offset-2 focus:ring-offset-slate-950 active:scale-[0.98]"
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
        </div>

        {/* Contenido de biografía */}
        <div className="relative z-20 bg-transparent lg:contents">
          <div className="flex flex-col items-center lg:flex-row lg:gap-20">
            {/* Imagen desktop: polaroid */}
            <div className="hidden w-full shrink-0 animate-slide-in-left justify-center px-6 lg:flex lg:w-[360px] lg:justify-start lg:px-0">
              <div className="relative w-full max-w-[320px] -rotate-2 bg-paper-soft p-3 pb-11 shadow-xl shadow-slate-900/10 ring-1 ring-slate-200">
                <span
                  className="absolute -top-3 left-1/2 h-5 w-20 -translate-x-1/2 -rotate-1 bg-marker/70"
                  aria-hidden="true"
                />

                <div className="relative aspect-[3/4] overflow-hidden bg-paper">
                  <Image
                    src="/images/vicky.webp"
                    alt="Vicky Aphalo - Habitar el Aula"
                    fill
                    className="object-cover object-[center_30%]"
                    sizes="320px"
                    priority
                  />
                </div>

                <span className="absolute inset-x-0 bottom-3 text-center font-[family-name:var(--font-caveat)] text-lg leading-none text-ink/60">
                  Vicky
                </span>
              </div>
            </div>

            {/* Texto */}
            <div className="relative z-20 flex w-full flex-1 lg:animate-slide-in-right flex-col justify-center bg-transparent px-6 pt-3 lg:mt-0 lg:w-auto lg:rounded-none lg:px-0 lg:pt-0">
              <div className="max-w-2xl">
                {/* Título */}
                <div>
                  <h2 className="mb-8 mt-10 text-balance font-[family-name:var(--font-bitter)] text-4xl font-medium leading-[1.12] tracking-tight text-ink lg:mt-0 lg:text-5xl">
                    Soy Victoria Aphalo, docente apasionada por la{' '}
                    <span className="font-semibold italic text-sky-700">
                      infancia y la pedagogía
                    </span>
                  </h2>
                </div>

                <div className="space-y-5 text-base leading-[1.75] text-ink-soft lg:space-y-6 lg:text-xl lg:leading-relaxed">
                  <p>
                    Durante años me encontré con grupos que no respondían y con
                    mucho desgaste en el aula. Hasta que entendí que{' '}
                    <span className="border-b-2 border-sky-100 font-semibold text-ink">
                      no se trataba solo de qué hacía, sino de cómo intervenía
                    </span>{' '}
                    en esos momentos.
                  </p>

                  <p>
                    A partir de ahí, comencé a trabajar con estrategias lúdicas,
                    corporales y vinculares para intervenir sin gritar y habitar
                    el aula de una manera diferente.
                  </p>

                  <p>
                    Hoy acompaño a docentes que buscan hacer lo mismo. Mi
                    propuesta combina mirada pedagógica, autoconocimiento y
                    herramientas concretas para sostener el aula con más
                    claridad, presencia y sentido, construyendo formas de
                    enseñar más conscientes y humanas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Instagram mobile */}
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
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <rect width="18" height="18" x="3" y="3" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" />
            <path d="M17.5 6.5h.01" />
          </svg>
        </a>

        {/* Frase final */}
        <div className="relative mt-20 flex lg:animate-fade-in-up flex-col items-center px-6 pt-12 lg:opacity-0 lg:[animation-delay:400ms] lg:[animation-fill-mode:forwards] lg:mt-16 lg:px-0 lg:pt-16">
          <div className="absolute top-0 h-px w-24 bg-slate-200" />

          <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 bg-white px-4 text-pencil/25">
            <svg
              width="40"
              height="30"
              viewBox="0 0 40 30"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 18.25V0H15V18.25C15 24.75 11.25 30 5 30H3.75V25H5C7.75 25 10 21.75 10 18.25H0ZM25 18.25V0H40V18.25C40 24.75 36.25 30 30 30H28.75V25H30C32.75 25 35 21.75 35 18.25H25Z" />
            </svg>
          </div>

          <div className="mx-auto max-w-4xl px-6 text-center">
            <p className="font-[family-name:var(--font-bitter)] text-2xl font-light italic leading-tight text-ink-soft sm:text-3xl lg:text-4xl">
              Porque no se trata de hacer más,
              <br className="sm:hidden" />{' '}
              <span className="text-sky-700">
                se trata de intervenir mejor
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
