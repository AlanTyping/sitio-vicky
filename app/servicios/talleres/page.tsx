import type { Metadata } from 'next';
import Image from 'next/image';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Reveal from '@/app/components/ui/Reveal';
import { whatsappUrl } from '@/config/contact';
import SectionRail from './SectionRail';
import TalleresContact from './TalleresContact';

export const metadata: Metadata = {
  metadataBase: new URL('https://vickyaphalo.site'),
  title: 'Talleres para docentes | Vicky Aphalo',
  description:
    'Encuentros prácticos por Meet para docentes de nivel primario: análisis de situaciones del aula, intercambio entre colegas y criterios de intervención.',
  alternates: {
    canonical: 'https://vickyaphalo.site/servicios/talleres',
  },
  openGraph: {
    title: 'Talleres para docentes | Vicky Aphalo',
    description:
      'Encuentros prácticos por Meet para ampliar la mirada sobre situaciones complejas del aula y decidir cómo intervenir.',
    url: 'https://vickyaphalo.site/servicios/talleres',
    siteName: 'Vicky Aphalo',
    images: [
      {
        url: '/images/vicky-square.jpg',
        width: 1200,
        height: 630,
        alt: 'Vicky Aphalo - Talleres para docentes',
      },
    ],
    locale: 'es_AR',
    type: 'website',
  },
};

const TOPICS = [
  'Conductas que interfieren en el aprendizaje.',
  'Oposición y resistencia.',
  'Límites y respuestas docentes.',
  'Conflictos entre estudiantes.',
  'Violencia y situaciones de agresión.',
  'Desorganización y dinámica grupal.',
  'Dificultades para recuperar la atención y el foco.',
  'Intervenciones frente a situaciones disruptivas.',
  'Vínculo docente-estudiante.',
  'Diseño y ajuste de propuestas pedagógicas frente a grupos que no responden como esperamos.',
];

const APPROACH_STEPS = [
  {
    title: 'Observar',
    description: 'Qué está pasando y qué señales vale la pena mirar.',
  },
  {
    title: 'Interpretar',
    description: 'Qué puede estar sosteniendo esa situación.',
  },
  {
    title: 'Intervenir',
    description: 'Qué posibilidades existen y cómo decidir con criterio.',
  },
];

const FORMULA = [
  'Análisis de situaciones',
  'Intercambio entre docentes',
  'Criterios pedagógicos',
  'Herramientas concretas para la intervención',
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
    className="h-3.5 w-3.5"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default function TalleresPage() {
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
            className="pointer-events-none absolute -right-32 top-0 h-[30rem] w-[30rem] animate-blob rounded-full bg-teal-50/80 blur-3xl motion-reduce:animate-none"
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
                    Talleres para{' '}
                    <span className="font-bold text-teal-600">docentes.</span>
                  </h1>
                </Reveal>

                <Reveal delay={80}>
                  <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-slate-600">
                    Encuentros prácticos por Meet para docentes de nivel primario que buscan
                    ampliar su mirada sobre situaciones complejas del aula y contar con más
                    recursos para decidir cómo intervenir.
                  </p>
                </Reveal>

                <Reveal delay={160}>
                  <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
                    <a
                      href="#consulta"
                      className="group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-xl bg-teal-600 px-6 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-teal-700 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2 active:translate-y-0 active:bg-teal-800"
                    >
                      Consultar por un taller
                      {ARROW_ICON}
                    </a>

                    <a
                      href="#temas"
                      className="text-sm font-medium text-slate-600 underline decoration-slate-300 underline-offset-4 transition-colors hover:text-teal-700"
                    >
                      Ver los temas
                    </a>
                  </div>
                </Reveal>

                <Reveal delay={240}>
                  <div className="mt-8 flex flex-wrap gap-2 lg:hidden">
                    {['Online por Meet', 'Nivel primario', 'Grupos e instituciones'].map(
                      (item) => (
                        <span
                          key={item}
                          className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600"
                        >
                          {item}
                        </span>
                      )
                    )}
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
                      <p className="text-sm text-slate-600">Modalidad</p>
                      <span className="text-sm font-semibold text-slate-900">
                        Online por Meet
                      </span>
                    </div>
                    <div className="flex items-baseline justify-between gap-4 py-4">
                      <p className="text-sm text-slate-600">Dirigido a</p>
                      <span className="text-sm font-semibold text-slate-900">
                        Docentes de nivel primario
                      </span>
                    </div>
                    <div className="flex items-baseline justify-between gap-4 py-4">
                      <p className="text-sm text-slate-600">Formato</p>
                      <span className="text-sm font-semibold text-slate-900">
                        Grupos de docentes
                      </span>
                    </div>
                    <div className="flex items-baseline justify-between gap-4 py-4">
                      <p className="text-sm text-slate-600">Instituciones</p>
                      <span className="text-sm font-semibold text-slate-900">
                        Propuestas a medida
                      </span>
                    </div>
                  </div>

                  <p className="border-t border-slate-200 pt-4 text-sm text-slate-500">
                    Los temas y el enfoque se ajustan a lo que necesita cada grupo.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* 2. Enfoque */}
        <section
          id="enfoque"
          className="scroll-mt-24 border-y border-slate-100 bg-slate-50 py-20 lg:py-28"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-20">
              <div>
                <Reveal>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-teal-700">
                    El punto de partida
                  </p>

                  <h2 className="mt-4 text-balance text-3xl font-light leading-tight tracking-tight text-slate-900 sm:text-4xl">
                    Partimos de lo que pasa{' '}
                    <span className="font-bold text-teal-600">en el aula.</span>
                  </h2>
                </Reveal>

                <Reveal delay={120}>
                  <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-slate-600">
                    Partimos de situaciones concretas y trabajamos sobre qué observar, cómo
                    interpretar lo que está ocurriendo y qué posibilidades de intervención
                    existen.
                  </p>
                </Reveal>

                <Reveal delay={220}>
                  <p className="mt-8 border-l-2 border-teal-500 pl-5 text-lg font-light italic leading-relaxed text-slate-700">
                    El objetivo es desarrollar criterios de intervención que puedan
                    trasladarse a distintas situaciones.
                  </p>
                </Reveal>
              </div>

              <Reveal delay={150}>
                <ol className="space-y-3">
                  {APPROACH_STEPS.map((step, index) => (
                    <li
                      key={step.title}
                      className="group flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-teal-200 hover:shadow-sm"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-50 text-[11px] font-bold tabular-nums text-teal-700 transition-colors duration-300 group-hover:bg-teal-600 group-hover:text-white">
                        0{index + 1}
                      </span>

                      <div>
                        <p className="font-semibold text-slate-900">{step.title}</p>
                        <p className="mt-1 text-sm leading-relaxed text-slate-600">
                          {step.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </Reveal>
            </div>
          </div>
        </section>

        {/* 3. Temas */}
        <section id="temas" className="scroll-mt-24 bg-white py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-[1fr_0.5fr] lg:items-end lg:gap-16">
              <Reveal>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-teal-700">
                  Temario abierto
                </p>

                <h2 className="mt-4 max-w-2xl text-balance text-3xl font-light leading-tight tracking-tight text-slate-900 sm:text-4xl">
                  Algunos de los temas que{' '}
                  <span className="font-bold text-teal-600">podemos trabajar.</span>
                </h2>
              </Reveal>

              <Reveal delay={100}>
                <p className="max-w-sm text-sm leading-relaxed text-slate-500 lg:justify-self-end">
                  No es un listado cerrado: elegimos juntos los focos que más necesita el
                  grupo.
                </p>
              </Reveal>
            </div>

            <Reveal delay={160} className="mt-12">
              <ul className="grid gap-px overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-200/70 sm:grid-cols-2">
                {TOPICS.map((topic, index) => (
                  <li
                    key={topic}
                    className="group flex items-start gap-4 bg-white p-5 transition-colors duration-300 hover:bg-teal-50/50 sm:p-6"
                  >
                    <span className="font-[family-name:var(--font-bitter)] text-sm font-bold italic tabular-nums text-teal-600/50 transition-colors duration-300 group-hover:text-teal-600">
                      {String(index + 1).padStart(2, '0')}
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

        {/* 4. ¿Cómo son? */}
        <section
          id="como-son"
          className="scroll-mt-24 border-y border-slate-100 bg-slate-50 py-20 lg:py-28"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Reveal>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-teal-700">
                La propuesta
              </p>

              <h2 className="mt-4 text-3xl font-light leading-tight tracking-tight text-slate-900 sm:text-4xl">
                ¿Cómo son?
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
                Encuentros prácticos y participativos, pensados a partir de las situaciones
                reales del grupo.
              </p>
            </Reveal>

            <Reveal delay={120} className="mt-10">
              <div className="relative overflow-hidden rounded-3xl bg-slate-900 p-8 shadow-xl shadow-slate-900/10 lg:p-10">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-teal-500/20 blur-3xl"
                />

                <div className="relative">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-teal-300">
                    Los talleres combinan
                  </p>

                  <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-3">
                    {FORMULA.map((item, index) => (
                      <div key={item} className="flex items-center gap-3">
                        <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/90">
                          {item}
                        </span>

                        {index < FORMULA.length - 1 && (
                          <span aria-hidden="true" className="text-teal-300">
                            +
                          </span>
                        )}
                      </div>
                    ))}
                  </div>

                  <p className="mt-7 max-w-3xl text-sm leading-relaxed text-white/60">
                    La propuesta puede incluir casos, preguntas de análisis, ejemplos y
                    situaciones aportadas por los propios participantes.
                  </p>
                </div>
              </div>
            </Reveal>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <Reveal delay={80} className="h-full">
                <div className="group h-full rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-teal-200 hover:shadow-sm">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-700 transition-colors duration-300 group-hover:bg-teal-600 group-hover:text-white">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 21l2.2-5.5A8.4 8.4 0 1 1 21 11.5Z" />
                      <path d="M8 10h8M8 14h5" />
                    </svg>
                  </span>

                  <h3 className="mt-4 font-semibold text-slate-900">
                    Casos y preguntas de análisis
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    Ejemplos, preguntas y situaciones reales para pensar qué está pasando y
                    cómo intervenir.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={160} className="h-full">
                <div className="group h-full rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-teal-200 hover:shadow-sm">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-700 transition-colors duration-300 group-hover:bg-teal-600 group-hover:text-white">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <rect x="2" y="6" width="14" height="12" rx="2" />
                      <path d="m16 10 6-3v10l-6-3" />
                    </svg>
                  </span>

                  <h3 className="mt-4 font-semibold text-slate-900">Online y en grupo</h3>

                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    Los talleres pueden realizarse online para grupos de docentes, en
                    encuentros por Meet.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={240} className="h-full">
                <div className="group h-full rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-teal-200 hover:shadow-sm">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-700 transition-colors duration-300 group-hover:bg-teal-600 group-hover:text-white">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M3 21h18M5 21V8l7-5 7 5v13" />
                      <path d="M9 21v-6h6v6" />
                    </svg>
                  </span>

                  <h3 className="mt-4 font-semibold text-slate-900">También para instituciones</h3>

                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    Diseñamos propuestas específicas para escuelas y equipos docentes.
                  </p>
                </div>
              </Reveal>
            </div>

            <Reveal delay={200}>
              <p className="mt-8 flex items-start gap-2.5 text-sm leading-relaxed text-slate-500">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-700">
                  {CHECK_ICON}
                </span>
                Los temas y el nivel de profundidad se acuerdan con cada grupo o institución.
              </p>
            </Reveal>
          </div>
        </section>

        {/* 5. Contacto */}
        <TalleresContact />
      </main>

      <Footer />

      {/* WhatsApp fijo en mobile */}
      <a
        href={whatsappUrl('Hola Vicky, quiero consultar por los talleres para docentes.')}
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
