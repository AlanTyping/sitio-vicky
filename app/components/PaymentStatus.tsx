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

export default function PaymentStatus() {
  const searchParams = useSearchParams();
  const paymentId = searchParams.get('payment_id');

  const [status, setStatus] = useState<PaymentStatusType>('pending');
  const [isVisible, setIsVisible] = useState(false);

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
            colors: ['#0ea5e9', '#38bdf8', '#7dd3fc', '#ffffff'],
          });
        }
      }
    } catch (error) {
      console.error('Error polling payment status:', error);
    }
  }, []);

  useEffect(() => {
    if (!paymentId) return;

    setIsVisible(true);
    setStatus('pending'); // ❗ Nunca confiar en la URL

    let attempts = 0;
    const MAX_ATTEMPTS = 10;

    // 🔥 Primera ejecución inmediata
    checkPaymentStatus(paymentId);

    // 🔁 Polling controlado
    pollingRef.current = setInterval(() => {
      attempts++;

      if (attempts >= MAX_ATTEMPTS) {
        if (pollingRef.current) {
          clearInterval(pollingRef.current);
          pollingRef.current = null;
        }
        return;
      }

      checkPaymentStatus(paymentId);
    }, 3000);

    // 🧹 Limpieza de URL elegante
    const timerClean = setTimeout(() => {
      const url = new URL(window.location.href);
      url.searchParams.delete('payment_id');
      window.history.replaceState({}, '', url.pathname);
    }, 5000);

    return () => {
      if (pollingRef.current) {
        clearInterval(pollingRef.current);
        pollingRef.current = null;
      }

      if (timerClean) clearTimeout(timerClean);
    };
  }, [paymentId, checkPaymentStatus]);

  // 👁️ Manejo de visibilidad
  useEffect(() => {
    if (status && status !== 'pending') {
      const timerHide = setTimeout(() => {
        setIsVisible(false);
      }, 15000);

      return () => clearTimeout(timerHide);
    }
  }, [status]);

  if (!isVisible || !paymentId) return null;

  const config = {
    approved: {
      bg: 'bg-green-100 ring-green-500 text-green-800',
      icon: '✅',
      title: '¡Pago aprobado!',
      msg: 'Tu acceso está listo. Ya podés continuar.',
    },
    rejected: {
      bg: 'bg-red-100 ring-red-500 text-red-800',
      icon: '❌',
      title: 'Pago rechazado',
      msg: 'Hubo un problema con el pago. Intentá nuevamente.',
    },
    pending: {
      bg: 'bg-yellow-100 ring-yellow-500 text-yellow-800',
      icon: '⏳',
      title: 'Confirmando pago...',
      msg: 'Estamos verificando tu pago. Esto puede tardar unos segundos.',
    },
    in_process: {
      bg: 'bg-blue-100 ring-blue-500 text-blue-800',
      icon: '🔵',
      title: 'Pago en proceso',
      msg: 'Mercado Pago está validando tu pago.',
    },
  }[status as Exclude<PaymentStatusType, null>] || {
    bg: 'bg-gray-100 ring-gray-500 text-gray-800',
    icon: 'ℹ️',
    title: 'Estado del pago',
    msg: `Estado actual: ${status}`,
  };

  return (
    <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 w-full max-w-md px-4 animate-in fade-in slide-in-from-top-4 duration-500">
      <div className={`${config.bg} p-6 rounded-2xl shadow-xl ring-2 flex gap-4 items-start relative`}>

        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-4 text-xl opacity-50 hover:opacity-100"
        >
          ×
        </button>

        <span className="text-3xl animate-pulse">{config.icon}</span>

        <div>
          <h4 className="font-bold text-lg mb-1">{config.title}</h4>
          <p className="text-sm leading-relaxed">{config.msg}</p>
        </div>
      </div>
    </div>
  );
}