import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-6 font-[family-name:var(--font-lexend)]">
      <div className="relative w-full max-w-lg">
        <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-paper-soft p-8 text-center shadow-[12px_12px_0_rgba(15,23,42,0.08)] sm:p-12">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                'repeating-linear-gradient(to bottom, transparent 0 31px, rgba(15, 23, 42, 0.045) 31px 32px)',
            }}
            aria-hidden="true"
          />

          <div className="relative">
            <p className="font-[family-name:var(--font-bitter)] text-8xl font-semibold leading-none tracking-tight text-pencil/20">
              404
            </p>

            <h1 className="mt-4 font-[family-name:var(--font-bitter)] text-3xl font-medium tracking-tight text-ink">
              Página no encontrada
            </h1>

            <p className="mx-auto mt-3 max-w-sm text-base leading-relaxed text-ink-soft">
              Parece que te perdiste en el aula. No te preocupes, volvamos al camino
              principal.
            </p>

            <Link
              href="/"
              className="group mt-7 inline-flex items-center justify-center gap-2.5 rounded-xl bg-sky-600 px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-sky-600/25 transition-all hover:-translate-y-0.5 hover:bg-sky-700 hover:shadow-xl hover:shadow-sky-600/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600 focus-visible:ring-offset-2 focus-visible:ring-offset-paper-soft active:translate-y-0 active:shadow-md active:shadow-sky-600/20"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 transition-transform group-hover:-translate-x-1"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
              Volver al inicio
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
