'use client';

import { useState } from 'react';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initPoint: string | null;
  isLoading: boolean;
}

export default function PaymentModal({
  isOpen,
  onClose,
  initPoint,
  isLoading,
}: PaymentModalProps) {
  const [copied, setCopied] = useState(false);
  const phoneNumber = '+54 9 2204 70-9105';
  const cleanNumber = '5492204709105';

  if (!isOpen) return null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(phoneNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Falló al copiar: ', error);
    }
  };

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
          <h3 className="font-[family-name:var(--font-bitter)] text-3xl font-semibold tracking-tight text-ink">
            Hacé tu compra
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-ink-soft">
            Elegí el método que prefieras para obtener tu Ebook.
          </p>

          <div className="mt-6 space-y-3">
            <a
              href="https://vaphalo.gumroad.com/l/ordenar-el-aula"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-3 rounded-2xl bg-[#7700c1] px-6 py-4 text-base font-bold text-white shadow-[4px_4px_0_rgba(15,23,42,0.2)] transition-colors hover:bg-[#640c9a] focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-2 focus:ring-offset-paper-soft"
            >
              Pagar con Gumroad
            </a>

            <button
              type="button"
              onClick={() => initPoint && (window.location.href = initPoint)}
              disabled={isLoading && !initPoint}
              className="flex w-full items-center justify-center gap-3 rounded-2xl bg-[#007EBF] px-6 py-4 text-base font-bold text-white shadow-[4px_4px_0_rgba(15,23,42,0.2)] transition-colors hover:bg-[#006DA5] focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-2 focus:ring-offset-paper-soft disabled:cursor-wait disabled:opacity-70"
            >
              {isLoading && !initPoint ? 'Preparando pago…' : 'Pagar con Mercado Pago'}
            </button>

            <div className="relative py-2">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200" />
              </div>
              <div className="relative flex justify-center">
                <span className="bg-paper-soft px-3 font-[family-name:var(--font-caveat)] text-base leading-none text-olive">
                  o también
                </span>
              </div>
            </div>

            <a
              href={`https://wa.me/${cleanNumber}?text=Hola!%20Acabo%20de%20ver%20tu%20Ebook%20y%20me%20gustaría%20obtenerlo.%20¿Cómo%20podemos%20hacer?`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-3 rounded-2xl bg-[#128C7E] px-6 py-4 text-base font-bold text-white shadow-[4px_4px_0_rgba(15,23,42,0.2)] transition-colors hover:bg-[#0F7568] focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-2 focus:ring-offset-paper-soft"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 21l2.2-5.5A8.4 8.4 0 1 1 21 11.5Z" />
                <path d="M8.8 8.4c.2-.5.4-.5.7-.5h.5c.2 0 .4 0 .6.4l.7 1.5c.1.3.1.5-.1.7l-.5.6c-.2.2-.2.4 0 .7.4.7 1.1 1.5 2.1 2 .3.2.5.2.7 0l.6-.6c.2-.2.4-.2.7-.1l1.5.7c.3.1.4.3.4.6v.5c0 .3 0 .5-.5.7-.5.2-1.2.4-2.1.1-1-.3-2.4-1-3.6-2.2-1.2-1.2-2-2.6-2.2-3.6-.3-.9-.1-1.6.1-2.1Z" />
              </svg>
              Contactar por WhatsApp
            </a>

            <button
              type="button"
              onClick={handleCopy}
              className="mx-auto flex items-center justify-center gap-2 rounded-sm text-xs font-semibold text-ink-soft underline decoration-pencil/40 underline-offset-4 transition-colors hover:text-pencil focus:outline-none focus:ring-2 focus:ring-pencil focus:ring-offset-2 focus:ring-offset-paper-soft"
            >
              {copied ? '¡Número copiado!' : `Copiar número: ${phoneNumber}`}
            </button>
          </div>

          <p className="mt-6 border-t border-slate-200 pt-4 text-center font-[family-name:var(--font-caveat)] text-base leading-tight text-olive">
            Pago seguro · Acceso inmediato · Soporte incluido
          </p>
        </div>
      </div>
    </div>
  );
}
