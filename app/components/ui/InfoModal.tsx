'use client';

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
}

export default function InfoModal({ isOpen, onClose, onNext }: InfoModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-ink/80 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-slate-200 bg-paper-soft shadow-[12px_12px_0_rgba(0,0,0,0.3)] animate-in fade-in zoom-in duration-300">
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar"
          className="absolute right-5 top-5 z-10 flex h-8 w-8 items-center justify-center rounded-full text-ink/40 transition-colors hover:bg-ink/5 hover:text-ink focus:outline-none focus:ring-2 focus:ring-pencil"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="p-7 sm:p-9">
          <div className="mt-6 flex h-12 w-12 items-center justify-center rounded-full bg-olive/15 text-olive">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
          </div>

          <h3 className="mt-4 font-[family-name:var(--font-bitter)] text-2xl font-semibold text-ink">
            Información importante
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-ink-soft">
            Al pagar con <span className="font-bold text-[#009EE3]">Mercado Pago</span> o{' '}
            <span className="font-bold text-[#7700c1]">Gumroad</span>, se envía el Ebook en
            formato PDF al <span className="font-bold text-ink">email asociado</span> a tu
            cuenta.
          </p>

          <button
            type="button"
            onClick={onNext}
            className="group mt-6 flex w-full items-center justify-center gap-3 rounded-xl bg-sky-600 px-6 py-4 text-base font-bold text-white shadow-lg shadow-sky-600/25 transition-all hover:-translate-y-0.5 hover:bg-sky-700 hover:shadow-xl hover:shadow-sky-600/30 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-2 focus:ring-offset-paper-soft active:translate-y-0 active:shadow-md active:shadow-sky-600/20"
          >
            Siguiente
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>

          <p className="mt-4 text-center font-[family-name:var(--font-caveat)] text-lg leading-none text-olive">
            ¡Ya casi es tuyo!
          </p>
        </div>
      </div>
    </div>
  );
}
