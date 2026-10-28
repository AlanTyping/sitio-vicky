import type { Metadata } from 'next';
import Image from 'next/image';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Reveal from '@/app/components/ui/Reveal';
import { whatsappUrl } from '@/config/contact';
import SectionRail from './SectionRail';
import AsesoramientoContact from './AsesoramientoContact';

export const metadata: Metadata = {
  metadataBase: new URL('https://vickyaphalo.site'),
  title: 'Asesoramiento pedagógico para instituciones | Vicky Aphalo',
  description:
    'Propuestas de asesoramiento y capacitación pedagógica para instituciones educativas de nivel primario: análisis de situaciones, criterios de intervención y acompañamiento a docentes y equipos directivos.',
  alternates: {
    canonical: 'https://vickyaphalo.site/servicios/asesoramiento-instituciones',
  },
  openGraph: {
    title: 'Asesoramiento pedagógico para instituciones | Vicky Aphalo',
    description:
      'Acompañamiento a docentes y equipos directivos frente a desafíos concretos del aula. Propuestas diseñadas a medida para cada institución.',
    url: 'https://vickyaphalo.site/servicios/asesoramiento-instituciones',
    siteName: 'Vicky Aphalo',
    images: [
      {
        url: '/images/vicky-square.jpg',
        width: 1200,
        height: 630,
        alt: 'Vicky Aphalo - Asesoramiento pedagógico para instituciones',
      },
    ],
    locale: 'es_AR',
    type: 'website',
  },
};

const TOPICS = [
  'Situaciones conductuales que interfieren con el aprendizaje.',
  'Límites y criterios de intervención.',
  'Conflictos entre estudiantes.',
  'Situaciones de violencia o agresión.',
  'Dinámicas grupales complejas.',
  'Oposición y resistencia.',
  'Dificultades de convivencia.',
  'Vínculo docente-estudiante.',
  'Estrategias para favorecer el aprendizaje y la participación.',
  'Revisión y ajuste de propuestas pedagógicas.',
];

const MODALITIES = [
  {
    title: 'Capacitaciones para el equipo docente',
    description:
      'Encuentros destinados a profundizar en una problemática determinada y construir herramientas y criterios compartidos.',
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: 'Análisis de situaciones institucionales',
    description:
      'Espacios para revisar situaciones concretas que preocupan al equipo y pensar posibles líneas de intervención.',
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        <path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 21l2.2-5.5A8.4 8.4 0 1 1 21 11.5Z" />
        <path d="M8 12h.01M12 12h.01M16 12h.01" />
      </svg>
    ),
  },
  {
    title: 'Acompañamiento pedagógico',
    description:
      'Un proceso de trabajo que permite analizar una problemática, implementar intervenciones y revisar posteriormente los resultados para realizar los ajustes necesarios.',
    icon: (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
      >
        <circle cx="6" cy="19" r="3" />
        <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" />
        <circle cx="18" cy="5" r="3" />
      </svg>
    ),
  },
];

const ARROW_ICON = (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const CHECK_ICON = (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-3 w-3"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default function AsesoramientoInstitucionesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-[family-name:var(--font-lexend)]">
      <Navbar theme="light" compact />
      <SectionRail />

      <main className="flex-1">
        {/* 1. Entrada */}
        <section
          id="inicio"
          className="relative scroll-mt-24 overflow-hidden bg-white pb-16 pt-28 lg:pb-20 lg:pt-36"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-32 top-0 h-[30rem] w-[30rem] animate-blob rounded-full bg-indigo-50/80 blur-3xl motion-reduce:animate-none"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-32 bottom-0 h-[24rem] w-[24rem] animate-blob rounded-full bg-sky-50/70 blur-3xl [animation-delay:3s] motion-reduce:animate-none"
          />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-start lg:gap-16">
              <div>
                <Reveal>
                  <h1 className="text-balance text-4xl font-light leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                    Asesoramiento pedagógico para{' '}
                    <span className="font-bold text-indigo-600">instituciones.</span>
                  </h1>
                </Reveal>

                <Reveal delay={80}>
                  <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-slate-600">
                    Ofrezco propuestas de asesoramiento y capacitación pedagógica para
                    instituciones educativas de nivel primario, orientadas a acompañar a
                    docentes y equipos directivos frente a desafíos concretos del aula,
                    analizar situaciones y construir criterios de intervención compartidos.
                  </p>
                </Reveal>

                <Reveal delay={160}>
                  <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
                    <a
                      href="#consulta"
                      className="group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-xl bg-indigo-600 px-6 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-indigo-700 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 active:translate-y-0 active:bg-indigo-800"
                    >
                      Consultar por una propuesta
                      {ARROW_ICON}
                    </a>

                    <a
                      href="#propuesta"
                      className="text-sm font-medium text-slate-600 underline decoration-slate-300 underline-offset-4 transition-colors hover:text-indigo-700"
                    >
                      Ver cómo trabajamos
                    </a>
                  </div>
                </Reveal>

                <Reveal delay={240}>
                  <div className="mt-8 flex flex-wrap gap-2 lg:hidden">
                    {[
                      'Nivel primario',
                      'Docentes y equipos directivos',
                      'Propuesta a medida',
                    ].map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </Reveal>
              </div>

              {/* Resumen para desktop */}
              <Reveal delay={200} className="hidden lg:block">
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-900/5">
                  <div className="flex items-center gap-3 border-b border-slate-200 pb-5">
                    <Image
                      src="/images/vicky.webp"
                      alt="Vicky Aphalo"
                      width={48}
                      height={48}
                      className="h-12 w-12 shrink-0 rounded-full object-cover object-[center_28%]"
                    />

                    <div>
                      <p className="text-sm font-semibold text-slate-900">Vicky Aphalo</p>
                      <p className="text-xs text-slate-500">Licenciada en Educación y maestra</p>
                    </div>
                  </div>

                  <div className="divide-y divide-slate-100">
                    <div className="flex items-baseline justify-between gap-4 py-4">
                      <p className="text-sm text-slate-600">Dirigido a</p>
                      <span className="text-sm font-semibold text-slate-900">
                        Instituciones de nivel primario
                      </span>
                    </div>
                    <div className="flex items-baseline justify-between gap-4 py-4">
                      <p className="text-sm text-slate-600">Destinatarios</p>
                      <span className="text-sm font-semibold text-slate-900">
                        Docentes y equipos directivos
                      </span>
                    </div>
                    <div className="flex items-baseline justify-between gap-4 py-4">
                      <p className="text-sm text-slate-600">Formato</p>
                      <span className="max-w-[13rem] text-right text-sm font-semibold text-slate-900">
                        Capacitaciones, análisis y acompañamiento
                      </span>
                    </div>
                    <div className="flex items-baseline justify-between gap-4 py-4">
                      <p className="text-sm text-slate-600">Propuesta</p>
                      <span className="text-sm font-semibold text-slate-900">
                        Diseñada a medida
                      </span>
                    </div>
                  </div>

                  <p className="border-t border-slate-200 pt-4 text-sm text-slate-500">
                    Primero conozco la realidad y las necesidades de cada equipo.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* 2. Temas */}
        <section
          id="temas"
          className="scroll-mt-24 border-y border-slate-100 bg-slate-50 py-20 lg:py-28"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-[1fr_0.55fr] lg:items-end lg:gap-16">
              <Reveal>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-700">
                  Áreas de trabajo
                </p>

                <h2 className="mt-4 max-w-2xl text-balance text-3xl font-light leading-tight tracking-tight text-slate-900 sm:text-4xl">
                  ¿En qué{' '}
                  <span className="font-bold text-indigo-600">podemos trabajar?</span>
                </h2>
              </Reveal>

              <Reveal delay={100}>
                <p className="max-w-sm text-sm leading-relaxed text-slate-500 lg:justify-self-end">
                  Las propuestas pueden abordar, entre otros temas, los siguientes focos.
                </p>
              </Reveal>
            </div>

            <Reveal delay={160} className="mt-10">
              <ul className="grid gap-x-12 sm:grid-cols-2">
                {TOPICS.map((topic) => (
                  <li
                    key={topic}
                    className="group flex items-start gap-3 border-b border-slate-200/80 py-4 transition-colors duration-300 hover:border-indigo-200"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 transition-colors duration-300 group-hover:bg-indigo-600 group-hover:text-white">
                      {CHECK_ICON}
                    </span>

                    <span className="text-sm font-medium leading-relaxed text-slate-700">
                      {topic}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* 3. La propuesta */}
        <section
          id="propuesta"
          className="scroll-mt-24 bg-white py-20 lg:py-28"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:gap-20">
              <Reveal>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-700">
                  A medida
                </p>

                <h2 className="mt-4 text-balance text-3xl font-light leading-tight tracking-tight text-slate-900 sm:text-4xl">
                  ¿Cómo se construye{' '}
                  <span className="font-bold text-indigo-600">la propuesta?</span>
                </h2>
              </Reveal>

              <Reveal delay={120}>
                <p className="text-pretty text-base leading-relaxed text-slate-600">
                  Cada escuela tiene desafíos diferentes. Por eso, primero conozco la
                  realidad y las necesidades de cada equipo y luego diseño una propuesta a
                  medida, que puede incluir:
                </p>
              </Reveal>
            </div>

            <div className="mt-12 grid gap-4 lg:grid-cols-3">
              {MODALITIES.map((modality, index) => (
                <Reveal key={modality.title} delay={100 + index * 100} className="h-full">
                  <article className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-[0_24px_60px_rgba(79,70,229,0.08)]">
                    <div className="flex items-center justify-between gap-4">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700 transition-colors duration-300 group-hover:bg-indigo-600 group-hover:text-white">
                        {modality.icon}
                      </span>

                      <span className="font-[family-name:var(--font-bitter)] text-sm font-bold italic tabular-nums text-indigo-600/50">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="mt-6 text-lg font-semibold leading-snug text-slate-900">
                      {modality.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      {modality.description}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal delay={200}>
              <div className="mt-8 flex flex-col gap-2 rounded-2xl border border-indigo-100 bg-indigo-50/50 p-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
                <p className="text-sm font-medium leading-relaxed text-slate-700">
                  Cada propuesta se diseña según las prioridades y los tiempos de la
                  institución.
                </p>

                <a
                  href="#consulta"
                  className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-indigo-700 transition-colors hover:text-indigo-800"
                >
                  Consultar por una propuesta
                  {ARROW_ICON}
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 4. Contacto */}
        <AsesoramientoContact />
      </main>

      <Footer />

      {/* WhatsApp fijo en mobile */}
      <a
        href={whatsappUrl(
          'Hola Vicky, quiero consultar por una propuesta de asesoramiento pedagógico para mi institución.'
        )}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escribir por WhatsApp"
        className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-emerald-600/30 transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 active:scale-95 lg:hidden"
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
        </svg>
      </a>
    </div>
  );
}
