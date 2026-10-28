'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState, useRef, useCallback } from 'react';
import confetti from 'canvas-confetti';

type PaymentStatusType =
  | 'approved'
  | 'rejected'
  | 'pending'
  | 'in_process'
  | null;

const CHECK_ICON = (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const CLOCK_ICON = (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
    <circle cx="12" cy="12" r="9" />
    <polyline points="12 7 12 12 15.5 14" />
  </svg>
);

const X_ICON = (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export default function PaymentStatus() {
  const searchParams = useSearchParams();
  const paymentIdFromUrl = searchParams.get('payment_id');

  const [status, setStatus] = useState<PaymentStatusType>('pending');
  const [isVisible, setIsVisible] = useState(false);
  const [activePaymentId, setActivePaymentId] = useState<string | null>(null);

  const pollingRef = useRef<NodeJS.Timeout | null>(null);

  const checkPaymentStatus = useCallback(async (paymentId: string) => {
    try {
      const res = await fetch(`/api/payments/status/${paymentId}`);
      const data = await res.json();

      if (!data?.status) return;

      setStatus(data.status);

      if (data.status === 'approved' || data.status === 'rejected') {
        if (pollingRef.current) {
          clearInterval(pollingRef.current);
          pollingRef.current = null;
        }

        if (data.status === 'approved') {
          confetti({
            particleCount: 160,
            spread: 80,
            origin: { y: 0.6 },
            colors: ['#0284c7', '#b9dcfb', '#1f6b7a', '#e9f2fb'],
          });
        }
      }
    } catch (error) {
      console.error('Error polling payment status:', error);
    }
  }, []);

  useEffect(() => {
    if (paymentIdFromUrl && !activePaymentId) {
      setActivePaymentId(paymentIdFromUrl);
      setIsVisible(true);
      setStatus('pending');
    }
  }, [paymentIdFromUrl, activePaymentId]);

  useEffect(() => {
    if (!activePaymentId) return;

    let attempts = 0;
    const MAX_ATTEMPTS = 20;

    checkPaymentStatus(activePaymentId);

    pollingRef.current = setInterval(() => {
      attempts++;

      if (attempts >= MAX_ATTEMPTS) {
        if (pollingRef.current) {
          clearInterval(pollingRef.current);
          pollingRef.current = null;
        }
        return;
      }

      checkPaymentStatus(activePaymentId);
    }, 3000);

    const timerClean = setTimeout(() => {
      const url = new URL(window.location.href);
      if (url.searchParams.has('payment_id')) {
        url.searchParams.delete('payment_id');
        window.history.replaceState({}, '', url.pathname);
      }
    }, 5000);

    return () => {
      if (pollingRef.current) {
        clearInterval(pollingRef.current);
        pollingRef.current = null;
      }
      if (timerClean) clearTimeout(timerClean);
    };
  }, [activePaymentId, checkPaymentStatus]);

  if (!isVisible) return null;

  const config = {
    approved: {
      accent: 'border-l-olive',
      icon: CHECK_ICON,
      iconClass: 'bg-olive/15 text-olive',
      title: '¡Pago aprobado!',
      msg: '¡Tu acceso está listo! Revisá tu email (incluyendo spam) para descargar tu Ebook.',
    },
    rejected: {
      accent: 'border-l-pencil',
      icon: X_ICON,
      iconClass: 'bg-pencil/10 text-pencil',
      title: 'Pago rechazado',
      msg: 'Hubo un problema con el pago. Intentá nuevamente.',
    },
    pending: {
      accent: 'border-l-marker',
      icon: CLOCK_ICON,
      iconClass: 'bg-marker/30 text-ink',
      title: 'Confirmando pago…',
      msg: 'Estamos verificando tu pago. Esto puede tardar unos segundos.',
    },
    in_process: {
      accent: 'border-l-ink/30',
      icon: CLOCK_ICON,
      iconClass: 'bg-ink/10 text-ink',
      title: 'Pago en proceso',
      msg: 'Mercado Pago está validando tu pago.',
    },
  }[status as Exclude<PaymentStatusType, null>] || {
    accent: 'border-l-ink/30',
    icon: CLOCK_ICON,
    iconClass: 'bg-ink/10 text-ink',
    title: 'Estado del pago',
    msg: `Estado actual: ${status}`,
  };

  return (
    <div className="fixed left-1/2 top-24 z-50 w-full max-w-md -translate-x-1/2 px-4 animate-in fade-in slide-in-from-top-4 duration-500">
      <div
        className={`relative flex items-start gap-3 rounded-2xl border border-slate-200 border-l-4 ${config.accent} bg-paper-soft p-5 shadow-lg shadow-slate-900/10`}
      >
        <button
          type="button"
          onClick={() => setIsVisible(false)}
          aria-label="Cerrar aviso"
          className="absolute right-3 top-2 text-lg leading-none text-ink/35 transition-colors hover:text-ink focus:outline-none focus:ring-2 focus:ring-pencil"
        >
          ×
        </button>

        <span className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${config.iconClass}`}>
          {config.icon}
        </span>

        <div className="pr-4">
          <h4 className="font-[family-name:var(--font-bitter)] text-lg font-semibold text-ink">
            {config.title}
          </h4>
          <p className="mt-1 text-sm leading-relaxed text-ink-soft">{config.msg}</p>
        </div>
      </div>
    </div>
  );
}
