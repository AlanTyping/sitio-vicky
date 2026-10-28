import type { Metadata } from 'next';
import Image from 'next/image';
import Navbar from '@/app/components/Navbar';
import ServiceContact from '@/app/components/ServiceContact';
import Footer from '@/app/components/Footer';
import { SERVICE_1A1_MESSAGE, whatsappUrl } from '@/config/contact';
import Reveal from '@/app/components/ui/Reveal';
import SectionRail from './SectionRail';

export const metadata: Metadata = {
  metadataBase: new URL('https://vickyaphalo.site'),
  title: 'Sesión 1:1 para docentes | Vicky Aphalo',
  description:
    'Un encuentro individual de 90 minutos para analizar una situación concreta de tu aula y salir con un plan de intervención personalizado.',
  alternates: {
    canonical: 'https://vickyaphalo.site/servicios/sesiones-1a1',
  },
  openGraph: {
    title: 'Sesión 1:1 para docentes | Vicky Aphalo',
    description:
      'De la situación que te desborda a un plan claro para intervenir. Encuentro individual de 90 minutos.',
    url: 'https://vickyaphalo.site/servicios/sesiones-1a1',
    siteName: 'Vicky Aphalo',
    images: [
      {
        url: '/images/vicky-square.jpg',
        width: 1200,
        height: 630,
        alt: 'Vicky Aphalo - Sesión 1:1 para docentes',
      },
    ],
    locale: 'es_AR',
    type: 'website',
  },
};

const PAIN_POINTS = [
  'Un grupo que no escucha.',
  'Un estudiante que desafía.',
  'Peleas que se repiten.',
  'Situaciones que te dejan sin herramientas.',
];

const SESSION = {
  title: 'Sesión 1:1',
  duration: '90 min',
  ideal: 'Ideal si necesitás claridad para empezar.',
  tagline:
    'De una situación que no sabés cómo abordar a un plan concreto para intervenir.',
  description:
    'Analizo una situación de tu aula, identifico qué aspectos es importante considerar y diseño una propuesta de intervención adaptada a vos y a tu contexto.',
  includes: [
    'Encuentro individual de 90 minutos.',
    'Plan inicial de intervención personalizado.',
    'Material digital con propuestas y recursos para tu caso.',
  ],
  outcome:
    'Te llevás claridad sobre lo que sucede y por dónde empezar a intervenir.',
  cta: 'Consultar por el servicio 1:1',
};

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

export default function SesionesUnoAUnoPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-[family-name:var(--font-lexend)]">
      <Navbar theme="light" compact />
      <SectionRail />

      <main className="flex-1">
        {/* 1. Entrada */}
        <section
          id="sesion"
          className="relative scroll-mt-24 overflow-hidden bg-white pb-16 pt-28 lg:pb-20 lg:pt-36"
        >
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-start lg:gap-16">
              <div>
                <Reveal>
                  <h1 className="text-balance text-4xl font-light leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                    Esa situación del aula que se repite{' '}
                    <span className="font-bold text-sky-600">tiene salida.</span>
                  </h1>
                </Reveal>

                <Reveal delay={100}>
                  <p className="mt-6 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-lg font-light text-slate-500">
                    Entender qué pasa
                    <span className="text-sky-600" aria-hidden="true">
                      →
                    </span>
                    Saber cómo intervenir
                  </p>
                </Reveal>

                <Reveal delay={180}>
                  <p className="mt-5 max-w-lg text-pretty text-base leading-relaxed text-slate-600">
                    Analizo con vos una situación concreta de tu aula y diseño un plan de
                    intervención adaptado a tu contexto.
                  </p>
                </Reveal>

                <Reveal delay={260}>
                  <div className="mt-8">
                    <p className="text-sm font-medium text-slate-500">¿Te pasa esto?</p>

                    <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                      {PAIN_POINTS.map((point) => (
                        <li
                          key={point}
                          className="flex items-center gap-2.5 text-sm leading-relaxed text-slate-600"
                        >
                          <span
                            className="h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500"
                            aria-hidden="true"
                          />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>

                <Reveal delay={340}>
                  <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
                    <a
                      href="#consulta"
                      className="group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-xl bg-sky-600 px-6 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-sky-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-2 active:bg-sky-800"
                    >
                      Quiero empezar
                      {ARROW_ICON}
                    </a>
                    <a
                      href="#incluye"
                      className="text-sm font-medium text-slate-600 underline decoration-slate-300 underline-offset-4 transition-colors hover:text-sky-700"
                    >
                      Ver qué incluye
                    </a>
                  </div>
                </Reveal>
              </div>

              {/* Resumen para desktop */}
              <div className="hidden lg:block">
                <Reveal delay={200}>
                  <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-900/5">
                    <div className="flex items-center gap-3 border-b border-slate-200 pb-5">
                      <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-slate-100">
                        <Image
                          src="/images/vicky.webp"
                          alt="Vicky Aphalo"
                          fill
                          sizes="48px"
                          className="object-cover object-[center_28%]"
                        />
                      </span>

                      <div>
                        <p className="text-sm font-semibold text-slate-900">Vicky Aphalo</p>
                      </div>
                    </div>

                    <div className="divide-y divide-slate-100">
                      <div className="flex items-baseline justify-between gap-4 py-4">
                        <p className="text-sm text-slate-600">Duración</p>
                        <span className="text-sm font-semibold text-slate-900">90 min</span>
                      </div>
                      <div className="flex items-baseline justify-between gap-4 py-4">
                        <p className="text-sm text-slate-600">Plan de intervención</p>
                        <span className="text-sm font-semibold text-slate-900">A medida</span>
                      </div>
                      <div className="flex items-baseline justify-between gap-4 py-4">
                        <p className="text-sm text-slate-600">Material digital</p>
                        <span className="text-sm font-semibold text-slate-900">Incluido</span>
                      </div>
                    </div>

                    <p className="border-t border-slate-200 pt-4 text-sm text-slate-500">
                      Si tenés dudas, escribime y lo vemos.
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* 2. La sesión */}
        <section
          id="incluye"
          className="scroll-mt-24 border-y border-slate-100 bg-white py-20 lg:py-28"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-center lg:gap-20">
              <div>
                <Reveal>
                  <h2 className="text-3xl font-light leading-tight tracking-tight text-slate-900 sm:text-4xl">
                    La sesión, en detalle
                  </h2>
                </Reveal>

                <Reveal delay={80}>
                  <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
                    Un encuentro individual para entender qué está pasando y salir con un plan
                    concreto para intervenir en tu aula.
                  </p>
                </Reveal>

                <div className="mt-12 border-t border-slate-200">
                  <Reveal
                    delay={120}
                    className="grid gap-2 border-b border-slate-200 py-6 sm:grid-cols-[180px_1fr] sm:gap-8"
                  >
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                      Sesión
                    </p>
                    <div>
                      <h3 className="text-2xl font-light tracking-tight text-slate-900 sm:text-3xl">
                        {SESSION.title}
                      </h3>
                      <p className="mt-1 text-sm text-slate-500">
                        Encuentro individual · {SESSION.duration}
                      </p>
                    </div>
                  </Reveal>

                  <Reveal
                    delay={180}
                    className="grid gap-2 border-b border-slate-200 py-6 sm:grid-cols-[180px_1fr] sm:gap-8"
                  >
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                      El punto de partida
                    </p>
                    <p className="text-pretty text-lg font-light leading-snug text-slate-800 sm:text-xl">
                      {SESSION.tagline}
                    </p>
                  </Reveal>

                  <Reveal
                    delay={240}
                    className="grid gap-2 border-b border-slate-200 py-6 sm:grid-cols-[180px_1fr] sm:gap-8"
                  >
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                      Qué hacemos
                    </p>
                    <p className="text-base leading-relaxed text-slate-600">
                      {SESSION.description}
                    </p>
                  </Reveal>

                  <Reveal
                    delay={300}
                    className="grid gap-2 border-b border-slate-200 py-6 sm:grid-cols-[180px_1fr] sm:gap-8"
                  >
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                      Incluye
                    </p>
                    <ul className="space-y-3">
                      {SESSION.includes.map((item) => (
                        <li
                          key={item}
                          className="flex gap-3 text-base leading-relaxed text-slate-600"
                        >
                          <span className="mt-1 text-sky-600">{CHECK_ICON}</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </Reveal>

                  <Reveal
                    delay={360}
                    className="grid gap-2 border-b border-slate-200 py-6 sm:grid-cols-[180px_1fr] sm:gap-8"
                  >
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                      Te llevás
                    </p>
                    <p className="text-lg font-light italic leading-relaxed text-slate-800">
                      {SESSION.outcome}
                    </p>
                  </Reveal>

                  <Reveal
                    delay={420}
                    className="grid gap-3 py-6 sm:grid-cols-[180px_1fr] sm:gap-8"
                  >
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                      Siguiente paso
                    </p>
                    <div>
                      <p className="text-sm text-slate-500">{SESSION.ideal}</p>

                      <a
                        href="#consulta"
                        className="group mt-4 inline-flex items-center justify-center gap-2.5 rounded-xl bg-sky-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-sky-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-2 active:bg-sky-800"
                      >
                        {SESSION.cta}
                        {ARROW_ICON}
                      </a>
                    </div>
                  </Reveal>
                </div>
              </div>

              <Reveal
                delay={200}
                className="hidden lg:flex lg:flex-col lg:items-center lg:justify-center"
              >
                <div className="relative w-full max-w-[300px]">
                  <div
                    className="absolute inset-0 -z-10 rounded-full bg-sky-50 blur-3xl"
                    aria-hidden="true"
                  />

                  <svg
                    aria-hidden="true"
                    viewBox="0 0 320 400"
                    fill="none"
                    className="relative w-full"
                  >
                    <circle cx="160" cy="200" r="150" fill="#f0f9ff" />

                    <g transform="rotate(-3 160 200)">
                      <rect
                        x="60"
                        y="50"
                        width="200"
                        height="280"
                        rx="16"
                        fill="white"
                        stroke="#e2e8f0"
                        strokeWidth="1.5"
                      />
                      <rect x="84" y="76" width="100" height="10" rx="5" fill="#e0f2fe" />
                      <rect x="84" y="110" width="150" height="6" rx="3" fill="#e2e8f0" />
                      <rect x="84" y="128" width="120" height="6" rx="3" fill="#e2e8f0" />
                      <rect x="84" y="146" width="140" height="6" rx="3" fill="#e2e8f0" />

                      <circle cx="100" cy="190" r="10" fill="#e0f2fe" />
                      <path
                        d="m95 190 3.5 3.5 6.5-7"
                        stroke="#0284c7"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <rect x="124" y="186" width="110" height="6" rx="3" fill="#e2e8f0" />

                      <circle cx="100" cy="228" r="10" fill="#e0f2fe" />
                      <path
                        d="m95 228 3.5 3.5 6.5-7"
                        stroke="#0284c7"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <rect x="124" y="224" width="130" height="6" rx="3" fill="#e2e8f0" />

                      <circle cx="100" cy="266" r="10" fill="#e0f2fe" />
                      <path
                        d="m95 266 3.5 3.5 6.5-7"
                        stroke="#0284c7"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <rect x="124" y="262" width="95" height="6" rx="3" fill="#e2e8f0" />

                      <rect x="84" y="294" width="80" height="8" rx="4" fill="#bae6fd" />
                    </g>

                    <g transform="rotate(35 255 280)">
                      <rect x="246" y="210" width="18" height="110" rx="4" fill="#0284c7" />
                      <path
                        d="M246 320h18l-9 18-9-18Z"
                        fill="#f8fafc"
                        stroke="#0284c7"
                        strokeWidth="1.5"
                        strokeLinejoin="round"
                      />
                      <rect
                        x="250"
                        y="224"
                        width="10"
                        height="70"
                        rx="2"
                        fill="#38bdf8"
                        opacity="0.5"
                      />
                    </g>

                    <circle cx="42" cy="92" r="6" fill="#bae6fd" />
                    <circle cx="296" cy="120" r="4" fill="#7dd3fc" />
                    <circle cx="286" cy="356" r="8" fill="#e0f2fe" />
                  </svg>
                </div>

                <p className="mt-6 max-w-[220px] text-center text-sm leading-relaxed text-slate-400">
                  Un plan claro para saber por dónde empezar.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* 3. Contacto */}
        <ServiceContact />
      </main>

      <Footer />

      {/* WhatsApp fijo en mobile */}
      <a
        href={whatsappUrl(SERVICE_1A1_MESSAGE)}
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
