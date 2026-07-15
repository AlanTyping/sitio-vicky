export default function MobileHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-white to-white px-6 pb-14 pt-8 font-[family-name:var(--font-lexend)] lg:hidden">
      <div className="absolute -right-24 -top-28 h-64 w-64 rounded-full bg-sky-200/50 blur-3xl" />
      <div className="absolute -left-20 bottom-0 h-48 w-48 rounded-full bg-amber-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-xl">
        <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-sky-700">
          Habitar el aula · Bienestar docente
        </p>
        <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-sky-700">
          Soy Victoria Aphalo
        </h1>
        <p className="mt-5 text-2xl font-light leading-tight text-slate-700">
          Acompaño a docentes a enseñar con más calma, claridad y presencia.
        </p>
        <p className="mt-5 max-w-md text-base leading-relaxed text-slate-600">
          Un espacio de acompañamiento para docentes que quieren cuidar el vínculo, sin dejar de cuidarse a sí mismos.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#guia-gratuita"
            className="inline-flex min-h-14 items-center justify-center rounded-xl bg-sky-600 px-6 text-base font-bold text-white shadow-lg shadow-sky-600/20 transition-colors hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-2"
          >
            Descargá la guía gratuita
          </a>
          <a
            href="#biografia"
            className="inline-flex min-h-14 items-center justify-center rounded-xl border border-sky-200 bg-white/80 px-6 text-base font-bold text-sky-700 transition-colors hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-2"
          >
            Conocé mi propuesta
          </a>
        </div>
      </div>
    </section>
  );
}
