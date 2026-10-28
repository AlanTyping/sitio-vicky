import type { Metadata } from 'next';
import Image from 'next/image';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Reveal from '@/app/components/ui/Reveal';
import { ACCOMPANIMENT_MESSAGE, whatsappUrl } from '@/config/contact';
import SectionRail from './SectionRail';
import AcompanamientoContact from './AcompanamientoContact';

export const metadata: Metadata = {
  metadataBase: new URL('https://vickyaphalo.site'),
  title: 'Acompañamiento pedagógico de 4 semanas | Vicky Aphalo',
  description:
    'Un acompañamiento de 4 semanas para analizar una situación concreta de tu aula, diseñar un plan de intervención, implementarlo y ajustarlo según lo que sucede.',
  alternates: {
    canonical: 'https://vickyaphalo.site/servicios/acompanamiento-4-semanas',
  },
  openGraph: {
    title: 'Acompañamiento pedagógico de 4 semanas | Vicky Aphalo',
    description:
      'De no saber cómo intervenir a tener un plan y acompañamiento para llevarlo a la práctica.',
    url: 'https://vickyaphalo.site/servicios/acompanamiento-4-semanas',
    siteName: 'Vicky Aphalo',
    images: [
      {
        url: '/images/vicky-square.jpg',
        width: 1200,
        height: 630,
        alt: 'Vicky Aphalo - Acompañamiento pedagógico de 4 semanas',
      },
    ],
    locale: 'es_AR',
    type: 'website',
  },
};

const INCLUDES = [
  'Encuentros individuales.',
  'Diseño de un plan de intervención personalizado.',
  'Seguimiento durante la implementación.',
  'Revisión y ajustes de la intervención.',
  'Materiales y recursos adaptados a tu situación.',
];

const WEEKS = [
  {
    title: 'Analizamos',
    description:
      'Miramos qué sucede en tu aula: la situación, el contexto y los factores que pueden estar interviniendo.',
  },
  {
    title: 'Diseñamos',
    description:
      'Construimos un plan de intervención personalizado, con criterios claros y pasos concretos para tu caso.',
  },
  {
    title: 'Implementamos',
    description:
      'Ponés el plan en práctica y hacemos seguimiento de lo que va apareciendo en el día a día.',
  },
  {
    title: 'Ajustamos',
    description:
      'Revisamos qué funcionó y qué no, y ajustamos la intervención a partir de las respuestas del aula.',
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

export default function AcompanamientoPage() {
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
            className="pointer-events-none absolute -right-32 top-0 h-[30rem] w-[30rem] animate-blob rounded-full bg-emerald-50/80 blur-3xl motion-reduce:animate-none"
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
                    Acompañamiento pedagógico{' '}
                    <span className="font-bold text-emerald-600">de 4 semanas.</span>
                  </h1>
                </Reveal>

                <Reveal delay={80}>
                  <p className="mt-6 max-w-xl text-pretty text-xl font-light leading-relaxed text-slate-700 sm:text-2xl">
                    De no saber cómo intervenir a tener un plan y acompañamiento para llevarlo
                    a la práctica.
                  </p>
                </Reveal>

                <Reveal delay={160}>
                  <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-slate-600">
                    Durante cuatro semanas, trabajo con vos sobre una situación concreta de tu
                    aula. Analizo lo que sucede, diseño un plan de intervención y reviso cómo
                    funciona durante la implementación y lo ajusto según las respuestas que
                    aparecen.
                  </p>
                </Reveal>

                <Reveal delay={240}>
                  <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
                    <a
                      href="#consulta"
                      className="group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-xl bg-emerald-600 px-6 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 active:translate-y-0 active:bg-emerald-800"
                    >
                      Consultar por el acompañamiento
                      {ARROW_ICON}
                    </a>

                    <a
                      href="#incluye"
                      className="text-sm font-medium text-slate-600 underline decoration-slate-300 underline-offset-4 transition-colors hover:text-emerald-700"
                    >
                      Ver qué incluye
                    </a>
                  </div>
                </Reveal>

                <Reveal delay={320}>
                  <div className="mt-8 flex flex-wrap gap-2 lg:hidden">
                    {['4 semanas', 'Encuentros individuales', 'Seguimiento'].map((item) => (
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
                      <p className="text-sm text-slate-600">Duración</p>
                      <span className="text-sm font-semibold text-slate-900">4 semanas</span>
                    </div>
                    <div className="flex items-baseline justify-between gap-4 py-4">
                      <p className="text-sm text-slate-600">Modalidad</p>
                      <span className="text-sm font-semibold text-slate-900">
                        Encuentros individuales
                      </span>
                    </div>
                    <div className="flex items-baseline justify-between gap-4 py-4">
                      <p className="text-sm text-slate-600">Incluye</p>
                      <span className="text-sm font-semibold text-slate-900">
                        Plan y seguimiento
                      </span>
                    </div>
                    <div className="flex items-baseline justify-between gap-4 py-4">
                      <p className="text-sm text-slate-600">Materiales</p>
                      <span className="text-sm font-semibold text-slate-900">
                        Adaptados a tu situación
                      </span>
                    </div>
                  </div>

                  <p className="border-t border-slate-200 pt-4 text-sm text-slate-500">
                    Trabajamos sobre una situación concreta de tu aula.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* 2. Qué incluye */}
        <section
          id="incluye"
          className="scroll-mt-24 border-y border-slate-100 bg-slate-50 py-20 lg:py-28"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start lg:gap-20">
              <div>
                <Reveal>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-700">
                    Qué incluye
                  </p>

                  <h2 className="mt-4 max-w-lg text-balance text-3xl font-light leading-tight tracking-tight text-slate-900 sm:text-4xl">
                    Un plan que no queda{' '}
                    <span className="font-bold text-emerald-600">en el papel.</span>
                  </h2>
                </Reveal>

                <Reveal delay={120}>
                  <blockquote className="relative mt-8 rounded-2xl border-l-2 border-emerald-500 bg-white/80 p-6 pl-7 shadow-sm shadow-slate-900/5">
                    <span
                      aria-hidden="true"
                      className="absolute left-2 top-3 font-[family-name:var(--font-bitter)] text-4xl italic leading-none text-emerald-200"
                    >
                      &ldquo;
                    </span>

                    <p className="text-pretty text-base leading-relaxed text-slate-700">
                      No se trata de probar estrategias al azar, sino de comprender qué está
                      pasando, intervenir con mayor claridad y ajustar a partir de lo que sucede
                      en tu aula.
                    </p>
                  </blockquote>
                </Reveal>
              </div>

              <Reveal delay={180}>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Incluye
                </p>

                <ul className="mt-4 grid gap-px overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-200/70 sm:grid-cols-2">
                  {INCLUDES.map((item, index) => (
                    <li
                      key={item}
                      className={`group flex items-start gap-3 bg-white p-5 transition-colors duration-300 hover:bg-emerald-50/50 ${
                        index === INCLUDES.length - 1 ? 'sm:col-span-2' : ''
                      }`}
                    >
                      <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 transition-transform duration-300 group-hover:scale-110">
                        {CHECK_ICON}
                      </span>

                      <span className="text-sm font-medium leading-relaxed text-slate-700">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        {/* 3. El recorrido */}
        <section
          id="recorrido"
          className="scroll-mt-24 bg-white py-20 lg:py-28"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-[1fr_0.55fr] lg:items-end lg:gap-16">
              <Reveal>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-700">
                  El recorrido
                </p>

                <h2 className="mt-4 max-w-2xl text-balance text-3xl font-light leading-tight tracking-tight text-slate-900 sm:text-4xl">
                  Cuatro semanas,{' '}
                  <span className="font-bold text-emerald-600">cuatro movimientos.</span>
                </h2>
              </Reveal>

              <Reveal delay={100}>
                <p className="max-w-sm text-sm leading-relaxed text-slate-500 lg:justify-self-end">
                  Un proceso de trabajo sostenido, con encuentros y seguimiento entre encuentros.
                </p>
              </Reveal>
            </div>

            <Reveal delay={160} className="mt-12">
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="absolute left-0 right-0 top-[42px] hidden h-px bg-emerald-100 lg:block"
                />

                <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {WEEKS.map((week, index) => (
                    <li
                      key={week.title}
                      className="group relative flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-[0_24px_60px_rgba(5,150,105,0.08)]"
                    >
                      <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-emerald-100 bg-emerald-50 text-[11px] font-bold tabular-nums text-emerald-700 transition-colors duration-300 group-hover:bg-emerald-600 group-hover:text-white">
                        0{index + 1}
                      </span>

                      <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                        Semana {index + 1}
                      </p>

                      <h3 className="mt-1 text-lg font-semibold text-slate-900">
                        {week.title}
                      </h3>

                      <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        {week.description}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>

            <Reveal delay={220}>
              <p className="mt-8 flex items-start gap-2.5 text-sm leading-relaxed text-slate-500">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
                  {CHECK_ICON}
                </span>
                Encuentros individuales, seguimiento entre encuentros y recursos adaptados a tu
                situación.
              </p>
            </Reveal>
          </div>
        </section>

        {/* 4. Contacto */}
        <AcompanamientoContact />
      </main>

      <Footer />

      {/* WhatsApp fijo en mobile */}
      <a
        href={whatsappUrl(ACCOMPANIMENT_MESSAGE)}
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
