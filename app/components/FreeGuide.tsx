import Image from 'next/image';

const FEATURES = [
  'Método 3c de mediación escolar',
  'Regulación y desregulación del sistema nervioso docente',
  'Checklist de reconocimiento emocional - para docentes',
];

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

export default function FreeGuide() {
  return (
    <section
      id="guia-gratuita"
      className="relative overflow-hidden bg-white pb-24 pt-4 font-[family-name:var(--font-lexend)] lg:pb-32 lg:pt-6"
    >
      {/* Decoración de fondo */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-full opacity-40">
        <div className="absolute -left-24 top-[10%] h-[500px] w-[500px] rounded-full bg-amber-500/10 blur-[120px]" />
        <div className="absolute -right-24 bottom-[10%] h-[500px] w-[500px] rounded-full bg-sky-500/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          {/* Contenido */}
          <div className="order-2 flex flex-col items-center space-y-8 text-center lg:order-1 lg:max-w-2xl lg:items-start lg:text-left">
            <div className="space-y-4">
              <h2 className="text-4xl font-light leading-[1.1] tracking-tight text-slate-900 lg:text-5xl">
                Botiquín Docente: <br />
                <span className="font-bold text-sky-600">
                  Primeros auxilios para el aula
                </span>
              </h2>

              <p className="max-w-xl text-lg font-medium leading-relaxed text-slate-600 lg:text-xl">
                Una guía práctica con herramientas inmediatas para gestionar situaciones
                complejas y cuidar tu bienestar emocional mientras enseñás.
              </p>
            </div>

            <ul className="grid grid-cols-1 gap-4 text-left">
              {FEATURES.map((feature, index) => (
                <li
                  key={feature}
                  className="group flex cursor-default items-center gap-4 font-normal text-slate-700 opacity-0 animate-fade-in [animation-fill-mode:forwards] lg:font-semibold"
                  style={{ animationDelay: `${index * 100 + 400}ms` }}
                >
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-sky-500 text-white shadow-md transition-all duration-300 group-hover:bg-amber-500">
                    {CHECK_ICON}
                  </span>
                  <span className="transition-transform group-hover:translate-x-1">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col items-center pt-4 lg:items-start">
              <a
                href="/pdf/botiquin-docente.pdf"
                download
                className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-sky-600 px-10 py-5 text-lg font-bold text-white shadow-xl shadow-sky-600/20 transition-all hover:bg-sky-500 active:scale-[0.98]"
              >
                Descargar Guía Gratis
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 transition-transform group-hover:translate-y-1"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </a>

              <p className="mt-4 text-sm font-medium italic text-slate-400">
                PDF gratuito • Descarga instantánea
              </p>
            </div>
          </div>

          {/* Visual */}
          <div className="order-1 flex justify-center animate-fade-in [animation-duration:1s] lg:order-2 lg:justify-end">
            <div className="group relative aspect-[3/4] w-full max-w-[420px] animate-[bounce_4s_infinite_ease-in-out] transition-all duration-700 [animation-name:float]">
              <style
                dangerouslySetInnerHTML={{
                  __html: `
                    @keyframes float {
                      0%, 100% { transform: translateY(0); }
                      50% { transform: translateY(-15px); }
                    }
                  `,
                }}
              />

              <div className="absolute -bottom-10 left-1/2 h-12 w-4/5 -translate-x-1/2 rounded-full bg-slate-900/30 blur-3xl" />

              <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] bg-white p-4 shadow-2xl ring-1 ring-slate-200">
                <div className="relative h-full w-full overflow-hidden rounded-xl bg-slate-50">
                  <Image
                    src="/images/botiquin-docente.webp"
                    alt="Botiquín Docente"
                    fill
                    quality={60}
                    className="object-contain transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 468px) calc(100vw - 3rem), 420px"
                  />
                </div>
              </div>

              <div className="absolute -right-4 -top-4 z-20 rotate-12 rounded-2xl border-4 border-white bg-amber-500 px-6 py-3 text-sm font-black uppercase tracking-tighter text-white shadow-xl">
                ¡GRATIS! ✨
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
