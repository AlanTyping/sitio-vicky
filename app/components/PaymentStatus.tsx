'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';

export default function PaymentStatus() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const statusParam = searchParams.get('status');
    const paymentId = searchParams.get('payment_id');

    if (statusParam || paymentId) {
      setStatus(statusParam);
      setIsVisible(true);

      // Si el pago es aprobado, disparamos la celebración 🎉
      if (statusParam === 'approved') {
        confetti({
          particleCount: 150,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#0ea5e9', '#38bdf8', '#7dd3fc', '#ffffff']
        });
      }

      // Limpiamos la URL después de 2 segundos para que se vea elegante
      const timerClean = setTimeout(() => {
        const url = new URL(window.location.href);
        ['status', 'payment_id', 'merchant_order_id', 'payment_type', 'preference_id', 'site_id', 'processing_mode'].forEach(p => {
          url.searchParams.delete(p);
        });
        window.history.replaceState({}, '', url.pathname + url.search);
      }, 3000);

      // Polling suave si es aprobado para confirmar
      if (paymentId && statusParam === 'approved') {
        fetch(`/api/payments/status/${paymentId}`).then(res => res.json()).then(data => {
          console.log('Confirmación servidor:', data.status);
        }).catch(console.error);
      }
      
      const timerHide = setTimeout(() => {
        setIsVisible(false);
      }, 10000);
      
      return () => {
        clearTimeout(timerClean);
        clearTimeout(timerHide);
      };
    }
  }, [searchParams]);

  if (!isVisible || !status) return null;

  const config = {
    approved: {
      bg: 'bg-green-100 ring-green-500 text-green-800',
      icon: '✅',
      title: '¡Pago aprobado!',
      msg: 'Tu lugar en el taller ya está asegurado. Te enviaremos un email con los detalles pronto.',
    },
    rejected: {
      bg: 'bg-red-100 ring-red-500 text-red-800',
      icon: '❌',
      title: 'Pago rechazado',
      msg: 'Hubo un problema con tu pago. Por favor, intenta de nuevo o usa otro medio.',
    },
    pending: {
      bg: 'bg-yellow-100 ring-yellow-500 text-yellow-800',
      icon: '⏳',
      title: 'Pago pendiente',
      msg: 'Estamos procesando tu pago. Te avisaremos apenas se confirme.',
    },
  }[status as 'approved' | 'rejected' | 'pending'] || null;

  if (!config) return null;

  return (
    <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 w-full max-w-md px-4 animate-in fade-in slide-in-from-top-4 duration-500">
      <div className={`${config.bg} p-6 rounded-2xl shadow-xl ring-2 flex gap-4 items-start relative`}>
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-4 text-xl opacity-50 hover:opacity-100"
        >
          ×
        </button>
        <span className="text-3xl">{config.icon}</span>
        <div>
          <h4 className="font-bold text-lg mb-1">{config.title}</h4>
          <p className="text-sm leading-relaxed">{config.msg}</p>
        </div>
      </div>
    </div>
  );
}
