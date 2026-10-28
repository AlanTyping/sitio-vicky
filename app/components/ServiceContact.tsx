import { INSTAGRAM_URL, whatsappUrl } from '@/config/contact';

const INSTAGRAM_ICON = (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-7 w-7"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const WHATSAPP_ICON = (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
);

const STEPS = [
  {
    title: 'Me escribís',
    description: 'Contame brevemente qué está pasando en tu aula.',
  },
  {
    title: 'Coordinamos',
    description: 'Vemos qué opción encaja y reservamos día y horario.',
  },
  {
    title: 'Empezamos',
    description: 'Trabajamos sobre tu situación y armamos el plan.',
  },
];

export default function ServiceContact() {
  return (
    <section
      id="consulta"
      className="relative scroll-mt-24 overflow-hidden bg-white py-24 font-[family-name:var(--font-lexend)] lg:py-32"
    >
      {/* Decoración */}
      <div className="pointer-events-none absolute right-0 top-0 h-[600px] w-[600px] -translate-y-1/2 translate-x-1/2 rounded-full bg-slate-50" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[400px] -translate-x-1/2 translate-y-1/2 rounded-full bg-sky-50/50" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          {/* Lado izquierdo: info + redes */}
          <div className="space-y-10">
            <div className="space-y-6">
              <h2 className="text-4xl font-light leading-[1.1] tracking-tight text-slate-900 lg:text-6xl">
                Contame qué está <br />
                <span className="font-bold text-sky-600">pasando.</span>
              </h2>

              <p className="max-w-md text-lg font-medium leading-relaxed text-slate-600 lg:text-xl">
                Elegí por dónde te resulta más fácil escribirme. Te respondo personalmente y
                coordinamos el encuentro.
              </p>
            </div>

            <div className="space-y-4">
              {/* Instagram */}
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block rounded-3xl bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] p-1 shadow-2xl shadow-pink-500/10 transition-all duration-500 hover:scale-[1.02]"
              >
                <div className="flex items-center gap-6 rounded-[1.4rem] bg-white p-7">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white shadow-lg">
                    {INSTAGRAM_ICON}
                  </div>

                  <div>
                    <p className="mb-0.5 text-xs font-bold uppercase tracking-widest text-slate-400">
                      Comunidad
                    </p>
                    <p className="text-2xl text-slate-900 lg:font-black">@vicky.aphalo</p>
                  </div>

                  <div className="ml-auto hidden sm:block">
                    <span className="rounded-full bg-slate-50 px-4 py-2 text-sm font-bold text-slate-600 transition-colors group-hover:bg-slate-900 group-hover:text-white">
                      Seguir
                    </span>
                  </div>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href={whatsappUrl(
                  'Hola Vicky, quiero consultar por la sesión 1:1.'
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block rounded-3xl bg-gradient-to-tr from-[#25D366] to-[#128C7E] p-1 shadow-2xl shadow-emerald-500/10 transition-all duration-500 hover:scale-[1.02]"
              >
                <div className="flex items-center gap-6 rounded-[1.4rem] bg-white p-7">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-tr from-[#25D366] to-[#128C7E] text-white shadow-lg">
                    {WHATSAPP_ICON}
                  </div>

                  <div>
                    <p className="mb-0.5 text-xs font-bold uppercase tracking-widest text-slate-400">
                      WhatsApp
                    </p>
                    <p className="text-2xl text-slate-900 lg:font-black">Escribime</p>
                  </div>

                  <div className="ml-auto hidden sm:block">
                    <span className="rounded-full bg-slate-50 px-4 py-2 text-sm font-bold text-slate-600 transition-colors group-hover:bg-slate-900 group-hover:text-white">
                      Abrir
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Lado derecho: próximos pasos */}
          <div className="relative hidden lg:block">
            <div className="pointer-events-none absolute -inset-4 -rotate-2 rounded-[3rem] bg-slate-50" />

            <div className="relative rounded-[2.5rem] border border-slate-100 bg-white p-8 shadow-[0_30px_70px_rgba(0,0,0,0.04)] lg:p-10">
              <h3 className="text-3xl font-light tracking-tight text-slate-900">
                Tres pasos, sin vueltas.
              </h3>

              <ol className="mt-7 space-y-5">
                {STEPS.map((step, index) => (
                  <li key={step.title} className="flex gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sky-50 text-sm font-bold text-sky-700">
                      {index + 1}
                    </span>
                    <div>
                      <p className="font-semibold text-slate-900">{step.title}</p>
                      <p className="mt-0.5 text-sm leading-relaxed text-slate-600">
                        {step.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>

              <p className="mt-8 border-t border-slate-100 pt-5 text-sm leading-relaxed text-slate-600">
                Te respondo personalmente. Sin compromiso.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
