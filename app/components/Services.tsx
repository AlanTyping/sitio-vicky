import Image from 'next/image';
import type { ReactNode } from 'react';

type ServiceTone = 'light' | 'dark';

type Service = {
  id: string;
  number: string;
  titleStrong: string;
  titleRest: string;
  paragraphs: string[];
  /** Etiqueta del listado (tomada del texto original) */
  label: string;
  itemsKind: 'checks' | 'chips';
  items: string[];
  /** Cita destacada dentro de la tarjeta */
  quote?: string;
  /** Foto de contexto: es lo que ancla el servicio en lo educativo */
  photo?: { src: string; alt: string; className?: string };
  cta: string;
  href: string;
  tone: ServiceTone;
  reverse: boolean;
  /** Fondo completo de la sección */
  section: string;
  icon: ReactNode;
};

const CHECK_ICON = (
  <svg
    aria-hidden="true"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="4"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

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
    number: '01',
    titleStrong: 'Sesiones',
    titleRest: '1:1',
    paragraphs: [
      'Un espacio individual para docentes que necesitan pensar una situación concreta de su aula.',
    ],
    label: 'Analizamos',
    itemsKind: 'checks',
    items: [
      'Qué está ocurriendo',
      'Qué factores pueden estar interviniendo',
      'Qué alternativas de intervención pueden resultar adecuadas',
    ],
    photo: {
      src: '/images/vicky.webp',
      alt: 'Vicky Aphalo, Licenciada en Educación y maestra',
      className: 'object-[center_28%]',
    },
    cta: 'Consultar por una sesión',
    href: '#contacto',
    tone: 'light',
    reverse: false,
    section: 'bg-white',
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    id: 'talleres',
    number: '02',
    titleStrong: 'Talleres',
    titleRest: 'para docentes',
    paragraphs: [
      'Encuentros prácticos para trabajar situaciones frecuentes del aula, desarrollar criterios de intervención y llevar herramientas concretas a la práctica.',
    ],
    label: 'Algunos temas',
    itemsKind: 'chips',
    items: [
      'Situaciones conductuales',
      'Límites',
      'Conflictos entre estudiantes',
      'Oposición',
      'Dinámica grupal',
      'Recuperación del foco',
      'Diseño de propuestas pedagógicas',
    ],
    photo: {
      src: '/images/captura.webp',
      alt: 'Docente y estudiantes reunidos en círculo en el aula',
      className: 'object-[center_45%]',
    },
    cta: 'Ver talleres',
    href: '#contacto',
    tone: 'dark',
    reverse: true,
    section: 'bg-gradient-to-b from-[#0c2a4a] to-[#06162a]',
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    id: 'capacitaciones',
    number: '03',
    titleStrong: 'Capacitaciones',
    titleRest: 'institucionales',
    paragraphs: [
      'Propuestas para escuelas y equipos docentes que buscan revisar situaciones concretas de su práctica y construir criterios compartidos de intervención.',
    ],
    label: 'Pueden abordar',
    itemsKind: 'chips',
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
    tone: 'light',
    reverse: false,
    section: 'bg-gradient-to-b from-slate-50 to-white',
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 21h18" />
        <path d="M5 21V8l7-4 7 4v13" />
        <path d="M10 21v-5h4v5" />
        <path d="M10 11h.01" />
        <path d="M14 11h.01" />
      </svg>
    ),
  },
];

function ServiceCard({ service }: { service: Service }) {
  const isDark = service.tone === 'dark';

  return (
    <div className="group relative">
      {/* Lámina girada detrás (recurso de la sección de contacto) */}
      <div
        className={`absolute -inset-4 -rotate-2 rounded-[3rem] transition-colors duration-500 ${
          isDark ? 'bg-white/5 group-hover:bg-white/10' : 'bg-slate-50 group-hover:bg-sky-50'
        }`}
        aria-hidden="true"
      />

      <div
        className={`relative flex h-full flex-col overflow-hidden rounded-[2.5rem] border bg-white shadow-[0_30px_70px_rgba(2,32,71,0.06)] transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_40px_90px_rgba(2,32,71,0.14)] ${
          isDark ? 'border-white/20' : 'border-slate-100 group-hover:border-sky-100'
        }`}
      >
        {/* Foto de contexto */}
        {service.photo && (
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
            <Image
              src={service.photo.src}
              alt={service.photo.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 560px"
              className={`object-cover transition-transform duration-700 group-hover:scale-105 ${
                service.photo.className ?? ''
              }`}
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent"
              aria-hidden="true"
            />
          </div>
        )}

        <div className="relative flex flex-1 flex-col p-7 lg:p-8">
          {/* Marca de agua (solo cuando no hay foto) */}
          {!service.photo && (
            <div
              className="pointer-events-none absolute right-0 top-0 p-4 text-slate-900/[0.06] [&_svg]:h-12 [&_svg]:w-12"
              aria-hidden="true"
            >
              {service.icon}
            </div>
          )}

          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sky-50 text-sky-600 ring-1 ring-sky-100 transition-transform duration-300 group-hover:scale-105 [&_svg]:h-6 [&_svg]:w-6">
              {service.icon}
            </span>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
              {service.label}
            </p>
          </div>

          {service.itemsKind === 'checks' ? (
            <ul className="mt-6 grid grid-cols-1 gap-3.5">
              {service.items.map((item) => (
                <li key={item} className="group/item flex items-start gap-3.5 text-slate-700">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-600 ring-1 ring-sky-200 transition-colors duration-300 group-hover/item:bg-sky-600 group-hover/item:text-white group-hover/item:ring-sky-600">
                    {CHECK_ICON}
                  </span>
                  <span className="text-[15px] font-semibold leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          ) : (
            <ul className="mt-6 flex flex-wrap gap-2">
              {service.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full bg-slate-50 px-3.5 py-1.5 text-[13px] font-bold text-slate-600 ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky-50 hover:text-sky-700 hover:ring-sky-200"
                >
                  {item}
                </li>
              ))}
            </ul>
          )}

          {service.quote && (
            <blockquote className="mt-7 rounded-[1.5rem] bg-gradient-to-br from-sky-50 to-white p-5 ring-1 ring-sky-100">
              <p className="text-[15px] font-light italic leading-relaxed text-slate-700">
                &ldquo;{service.quote}&rdquo;
              </p>
            </blockquote>
          )}
        </div>
      </div>
    </div>
  );
}

function ServiceSection({ service }: { service: Service }) {
  const isDark = service.tone === 'dark';

  return (
    <section
      id={service.id}
      className={`relative scroll-mt-24 overflow-hidden py-24 lg:py-32 font-[family-name:var(--font-lexend)] ${service.section}`}
    >
      {/* Decoración de fondo: azul + ámbar (como en la Guía gratuita) */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {isDark ? (
          <>
            <div className="absolute -right-24 top-[10%] h-[500px] w-[500px] rounded-full bg-sky-500/10 blur-[120px]" />
            <div className="absolute -left-24 bottom-[10%] h-[500px] w-[500px] rounded-full bg-amber-400/10 blur-[120px]" />
          </>
        ) : (
          <>
            <div
              className={`absolute h-[500px] w-[500px] rounded-full bg-sky-100/70 blur-[120px] ${
                service.reverse ? 'right-[-10%] top-[5%]' : 'left-[-10%] bottom-[5%]'
              }`}
            />
            <div
              className={`absolute h-[380px] w-[380px] rounded-full bg-amber-100/60 blur-[120px] ${
                service.reverse ? 'left-[-5%] top-[15%]' : 'right-[-5%] top-[10%]'
              }`}
            />
          </>
        )}
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        {/* Texto */}
        <div
          className={`animate-fade-in-up opacity-0 [animation-fill-mode:forwards] ${
            service.reverse ? 'lg:order-2' : ''
          }`}
        >
          <div className="flex items-center gap-3">
            <span
              className={`h-px w-10 ${isDark ? 'bg-amber-400/50' : 'bg-amber-300'}`}
              aria-hidden="true"
            />
            <span
              className={`text-xs font-bold uppercase tracking-[0.25em] ${
                isDark ? 'text-amber-300' : 'text-amber-600'
              }`}
            >
              {service.number}
            </span>
          </div>

          <h2
            className={`mt-5 text-balance text-4xl font-light leading-[1.1] tracking-tight lg:text-5xl ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            <span className={`font-bold italic ${isDark ? 'text-sky-400' : 'text-sky-700'}`}>
              {service.titleStrong}
            </span>{' '}
            {service.titleRest}
          </h2>

          <div
            className={`mt-6 max-w-xl space-y-5 text-pretty text-lg font-medium leading-relaxed lg:text-xl ${
              isDark ? 'text-sky-100/70' : 'text-slate-600'
            }`}
          >
            {service.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <a
            href={service.href}
            className="group mt-10 inline-flex items-center justify-center gap-3 rounded-2xl bg-sky-600 px-10 py-5 text-lg font-bold text-white shadow-xl shadow-sky-600/20 transition-all hover:bg-sky-500 hover:shadow-2xl hover:shadow-sky-600/30 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
          >
            {service.cta}
            {ARROW_ICON}
          </a>
        </div>

        {/* Tarjeta */}
        <div
          className={`${service.reverse ? 'animate-slide-in-left lg:order-1' : 'animate-slide-in-right'}`}
        >
          <ServiceCard service={service} />
        </div>
      </div>
    </section>
  );
}

export default function Services() {
  return (
    <>
      {SERVICES.map((service) => (
        <ServiceSection key={service.id} service={service} />
      ))}
    </>
  );
}
