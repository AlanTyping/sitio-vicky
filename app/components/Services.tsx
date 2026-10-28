import Link from 'next/link';

const TONES = {
  sky: {
    text: 'text-sky-700',
    dot: 'bg-sky-500',
    soft: 'bg-sky-50',
    section: 'bg-slate-50',
    glow: 'bg-[radial-gradient(circle_at_center,rgba(2,132,199,0.07),transparent_65%)]',
  },
  teal: {
    text: 'text-teal-700',
    dot: 'bg-teal-500',
    soft: 'bg-teal-50',
    section: 'bg-white',
    glow: 'bg-[radial-gradient(circle_at_center,rgba(13,148,136,0.07),transparent_65%)]',
  },
  indigo: {
    text: 'text-indigo-700',
    dot: 'bg-indigo-500',
    soft: 'bg-indigo-50',
    section: 'bg-slate-50',
    glow: 'bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.07),transparent_65%)]',
  },
} as const;

type Tone = keyof typeof TONES;

type Service = {
  id: string;
  titleStrong: string;
  titleRest: string;
  paragraphs: string[];
  tone: Tone;
  section: string;
  label: string;
  items: string[];
  quote?: string;
  cta: string;
  href: string;
  reverse: boolean;
  layout: 'process' | 'tags' | 'quote';
};

const ARROW_ICON = (
  <svg
    aria-hidden="true"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="transition-transform duration-300 group-hover:translate-x-1"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const SERVICES: Service[] = [
  {
    id: 'servicios',
    titleStrong: 'Sesiones',
    titleRest: '1:1',
    paragraphs: [
      'Un encuentro individual de 90 minutos para pensar una situación concreta de tu aula y construir un plan de intervención.',
    ],
    tone: 'sky',
    section: 'bg-slate-50',
    label: 'Analizamos',
    items: [
      'Qué está ocurriendo',
      'Qué factores pueden estar interviniendo',
      'Qué alternativas de intervención pueden resultar adecuadas',
    ],
    cta: 'Ver sesiones 1:1',
    href: '/servicios/sesiones-1a1',
    reverse: false,
    layout: 'process',
  },
  {
    id: 'talleres',
    titleStrong: 'Talleres',
    titleRest: 'para docentes',
    paragraphs: [
      'Encuentros prácticos para trabajar situaciones frecuentes del aula, desarrollar criterios de intervención y llevar herramientas concretas a la práctica.',
    ],
    tone: 'teal',
    section: 'bg-white',
    label: 'Algunos temas',
    items: [
      'Situaciones conductuales',
      'Límites',
      'Conflictos entre estudiantes',
      'Oposición',
      'Dinámica grupal',
      'Recuperación del foco',
      'Diseño de propuestas pedagógicas',
    ],
    cta: 'Ver talleres',
    href: '#contacto',
    reverse: true,
    layout: 'tags',
  },
  {
    id: 'capacitaciones',
    titleStrong: 'Capacitaciones',
    titleRest: 'institucionales',
    paragraphs: [
      'Propuestas para escuelas y equipos docentes que buscan revisar situaciones concretas de su práctica y construir criterios compartidos de intervención.',
    ],
    tone: 'indigo',
    section: 'bg-slate-50',
    label: 'Pueden abordar',
    items: [
      'Convivencia',
      'Límites',
      'Situaciones conductuales',
      'Dinámica grupal',
      'Vínculo pedagógico',
      'Diseño de propuestas',
    ],
    quote:
      'Las capacitaciones se diseñan de acuerdo con las necesidades de cada institución.',
    cta: 'Consultar por una capacitación',
    href: '#contacto',
    reverse: false,
    layout: 'quote',
  },
];

function ServiceCard({ service }: { service: Service }) {
  const tone = TONES[service.tone];

  return (
    <div className="relative">
      <div
        className={`pointer-events-none absolute -inset-3 -rotate-2 rounded-[2.75rem] ${tone.soft} opacity-80`}
        aria-hidden="true"
      />

      <div className="relative rounded-[2rem] border border-slate-100 bg-white p-7 shadow-[0_30px_70px_rgba(0,0,0,0.05)] lg:p-9">
        <div className="flex items-center justify-between gap-4">
          <span
            className={`text-[11px] font-bold uppercase tracking-widest ${tone.text}`}
          >
            {service.label}
          </span>
        </div>

        {service.layout === 'process' && (
          <ol className="mt-6 space-y-4">
            {service.items.map((item, index) => (
              <li key={item} className="flex gap-3.5">
                <span
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${tone.soft} ${tone.text}`}
                >
                  {index + 1}
                </span>

                <p className="pt-1 text-[15px] font-medium leading-snug text-slate-700">
                  {item}
                </p>
              </li>
            ))}
          </ol>
        )}

        {service.layout === 'tags' && (
          <ul className="mt-6 flex flex-wrap gap-2">
            {service.items.map((item) => (
              <li
                key={item}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-[13px] font-semibold text-slate-700"
              >
                {item}
              </li>
            ))}
          </ul>
        )}

        {service.layout === 'quote' && (
          <ul className="mt-6 space-y-3">
            {service.items.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-[15px] font-medium leading-snug text-slate-700"
              >
                <span
                  className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${tone.dot}`}
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
        )}

        {service.layout === 'process' && (
          <div className={`mt-6 rounded-2xl p-4 ${tone.soft}`}>
            <p className="text-sm font-bold leading-snug text-slate-900">
              Salís con un plan de intervención y un camino para implementarlo.
            </p>
          </div>
        )}

        {service.layout === 'tags' && (
          <p className={`mt-6 text-sm font-semibold ${tone.text}`}>
            Cada encuentro se adapta al grupo.
          </p>
        )}

        {service.quote && (
          <blockquote className={`mt-6 rounded-2xl p-4 ${tone.soft}`}>
            <p className="text-sm italic leading-relaxed text-slate-700">
              &ldquo;{service.quote}&rdquo;
            </p>
          </blockquote>
        )}
      </div>
    </div>
  );
}

function ServiceSection({ service }: { service: Service }) {
  const tone = TONES[service.tone];

  return (
    <section
      id={service.id}
      className={`relative scroll-mt-24 overflow-hidden border-t border-slate-200/70 py-16 font-[family-name:var(--font-lexend)] lg:py-24 ${service.section}`}
    >
      <div
        className={`pointer-events-none absolute -right-32 top-1/4 h-[24rem] w-[24rem] rounded-full blur-2xl ${tone.glow}`}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <div
          className={`animate-fade-in-up opacity-0 [animation-fill-mode:forwards] ${
            service.reverse ? 'lg:order-2' : ''
          }`}
        >
          <h2 className="text-balance text-4xl font-light leading-[1.1] tracking-tight text-slate-900 lg:text-5xl">
            {service.titleStrong}{' '}
            <span className={`font-bold ${tone.text}`}>{service.titleRest}</span>
          </h2>

          <p className="mt-5 max-w-xl text-lg font-medium leading-relaxed text-slate-600 lg:text-xl">
            {service.paragraphs[0]}
          </p>

          <Link
            href={service.href}
            className="group mt-8 inline-flex items-center justify-center gap-3 rounded-2xl bg-sky-600 px-8 py-4 text-base font-bold text-white shadow-xl shadow-sky-600/20 transition-all hover:-translate-y-0.5 hover:bg-sky-700 hover:shadow-2xl hover:shadow-sky-600/25 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-2 focus:ring-offset-white active:translate-y-0"
          >
            {service.cta}
            {ARROW_ICON}
          </Link>
        </div>

        <div
          className={`relative ${
            service.reverse ? 'animate-slide-in-left lg:order-1' : 'animate-slide-in-right'
          }`}
        >
          <ServiceCard service={service} />
        </div>
      </div>
    </section>
  );
}

export default function Services() {
  return (
    <div className="relative">
      {SERVICES.map((service) => (
        <ServiceSection key={service.id} service={service} />
      ))}
    </div>
  );
}
