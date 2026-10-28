import Link from 'next/link';
import { INSTAGRAM_URL, WHATSAPP_URL } from '@/config/contact';

const SECTIONS = [
  { href: '/#biografia', label: 'Sobre mí' },
  { href: '/#servicios', label: 'Servicios' },
  { href: '/#guia-gratuita', label: 'Guía gratuita' },
  { href: '/#ebook', label: 'Ebook' },
  { href: '/#contacto', label: 'Contacto' },
];

const SERVICES = [
  { href: '/servicios/sesiones-1a1', label: 'Sesiones 1:1' },
  { href: '/servicios/acompanamiento-4-semanas', label: 'Acompañamiento 4 semanas' },
  { href: '/servicios/talleres', label: 'Talleres' },
  {
    href: '/servicios/asesoramiento-instituciones',
    label: 'Asesoramiento institucional',
  },
];

const INSTAGRAM_ICON = (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4"
  >
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const WHATSAPP_ICON = (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4"
  >
    <path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 21l2.2-5.5A8.4 8.4 0 1 1 21 11.5Z" />
    <path d="M8.8 8.4c.2-.5.4-.5.7-.5h.5c.2 0 .4 0 .6.4l.7 1.5c.1.3.1.5-.1.7l-.5.6c-.2.2-.2.4 0 .7.4.7 1.1 1.5 2.1 2 .3.2.5.2.7 0l.6-.6c.2-.2.4-.2.7-.1l1.5.7c.3.1.4.3.4.6v.5c0 .3 0 .5-.5.7-.5.2-1.2.4-2.1.1-1-.3-2.4-1-3.6-2.2-1.2-1.2-2-2.6-2.2-3.6-.3-.9-.1-1.6.1-2.1Z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="border-t border-sky-200 bg-sky-100 font-[family-name:var(--font-lexend)] text-slate-900">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-16">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_0.9fr_0.9fr] lg:gap-12">
          {/* Marca */}
          <div className="col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="inline-block rounded-sm font-[family-name:var(--font-bitter)] text-3xl font-semibold tracking-tight text-slate-900 transition-colors hover:text-sky-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-50"
            >
              Vicky Aphalo
            </Link>

            <p className="mt-2 font-[family-name:var(--font-caveat)] text-xl leading-none text-sky-700">
              Licenciada en Educación y maestra
            </p>

            <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate-600">
              Herramientas para enseñar con más calma y claridad.
            </p>
          </div>

          {/* Secciones */}
          <nav aria-label="Secciones del sitio">
            <h2 className="font-[family-name:var(--font-bitter)] text-sm font-semibold text-sky-700">
              Secciones
            </h2>

            <ul className="mt-4 space-y-3">
              {SECTIONS.map((section) => (
                <li key={section.href}>
                  <Link
                    href={section.href}
                    className="rounded-sm text-sm text-slate-600 transition-colors hover:text-sky-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-50"
                  >
                    {section.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Servicios */}
          <nav aria-label="Servicios">
            <h2 className="font-[family-name:var(--font-bitter)] text-sm font-semibold text-sky-700">
              Servicios
            </h2>

            <ul className="mt-4 space-y-3">
              {SERVICES.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="rounded-sm text-sm text-slate-600 transition-colors hover:text-sky-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-50"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Redes */}
          <div className="col-span-2 lg:col-span-1">
            <h2 className="font-[family-name:var(--font-bitter)] text-sm font-semibold text-sky-700">
              Redes
            </h2>

            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Seguir a Vicky Aphalo en Instagram"
                  className="group flex items-center gap-3 rounded-sm text-sm text-slate-600 transition-colors hover:text-sky-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-50"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white shadow-sm shadow-fuchsia-900/20">
                    {INSTAGRAM_ICON}
                  </span>
                  @vicky.aphalo
                </a>
              </li>

              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Escribir a Vicky Aphalo por WhatsApp"
                  className="group flex items-center gap-3 rounded-sm text-sm text-slate-600 transition-colors hover:text-sky-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-50"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white shadow-sm shadow-emerald-600/20">
                    {WHATSAPP_ICON}
                  </span>
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="bg-slate-950">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p className="text-xs leading-5 text-slate-400">
            &copy; {new Date().getFullYear()} Vicky Aphalo. Todos los derechos reservados.
          </p>

          <div className="flex items-center gap-2">
            <span className="text-[10px] font-medium tracking-wide text-slate-500">
              Desarrollado por
            </span>
            <a
              href="https://huellaonline.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-4 focus-visible:ring-offset-slate-950"
            >
              <img src="/huellaonline.svg" alt="Huella Online" className="h-4 w-auto" />
              <span className="text-xs font-bold text-slate-200">Huella Online</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
