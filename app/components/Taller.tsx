'use client';

import { useState, useEffect } from 'react';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';

// Inicializamos Mercado Pago con la clave pública del .env
initMercadoPago(process.env.NEXT_PUBLIC_MP_PUBLIC_KEY || '');

export default function Taller() {
  const [preferenceId, setPreferenceId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 45, seconds: 0 });

  // Contador regresivo para la oferta limitada
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleBuy = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: 'Taller de Gestión Emocional para Docentes',
          quantity: 1,
          price: 5000, // Precio de ejemplo
        }),
      });
      const data = await response.json();
      if (data.id) {
        setPreferenceId(data.id);
      }
    } catch (error) {
      console.error('Error al crear la preferencia:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="taller" className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600 uppercase tracking-wide">Taller Exclusivo</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Transforma tu Aula sin Agotarte
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Sabemos que el estrés docente es real. Este taller está diseñado para darte las herramientas que la formación tradicional olvidó.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-y-12 lg:grid-cols-2 lg:gap-x-12">
          {/* Dolores del Maestro */}
          <div className="bg-red-50 p-8 rounded-2xl ring-1 ring-red-200">
            <h3 className="text-xl font-bold text-red-900 mb-6 flex items-center">
              <span className="mr-2">⚠️</span> ¿Te sientes así?
            </h3>
            <ul className="space-y-4 text-red-800">
              <li className="flex gap-x-3 italic">
                <span>•</span> Agotamiento mental antes de llegar al mediodía.
              </li>
              <li className="flex gap-x-3 italic">
                <span>•</span> Sensación de que el grupo te "desborda" emocionalmente.
              </li>
              <li className="flex gap-x-3 italic">
                <span>•</span> Falta de herramientas prácticas para manejar conflictos.
              </li>
              <li className="flex gap-x-3 italic">
                <span>•</span> Dificultad para desconectar del trabajo al llegar a casa.
              </li>
            </ul>
          </div>

          {/* Métodos de Solución */}
          <div className="bg-primary-50 p-8 rounded-2xl ring-1 ring-primary-200">
            <h3 className="text-xl font-bold text-primary-900 mb-6 flex items-center">
              <span className="mr-2">✨</span> Qué vas a lograr
            </h3>
            <ul className="space-y-4 text-primary-800">
              <li className="flex gap-x-3">
                <span className="font-bold">✓</span> Estrategias de regulación emocional inmediata.
              </li>
              <li className="flex gap-x-3">
                <span className="font-bold">✓</span> Técnicas de comunicación no violenta para el aula.
              </li>
              <li className="flex gap-x-3">
                <span className="font-bold">✓</span> Método de "Reseteo Consciente" post-clase.
              </li>
              <li className="flex gap-x-3">
                <span className="font-bold">✓</span> Plan de autocuidado realista para el calendario escolar.
              </li>
            </ul>
          </div>
        </div>

        {/* Oferta y Checkout */}
        <div className="mt-16 bg-gray-900 rounded-3xl p-8 sm:p-12 text-center text-white relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-400 text-black px-6 py-2 rounded-full font-bold text-sm uppercase tracking-widest shadow-lg">
            Oferta por tiempo limitado
          </div>

          <div className="mb-8">
            <p className="text-gray-400 text-sm uppercase tracking-widest mb-2">La oferta termina en:</p>
            <div className="flex justify-center gap-4 text-3xl font-mono font-bold">
              <div className="bg-gray-800 p-3 rounded-lg w-20">
                {String(timeLeft.hours).padStart(2, '0')}
                <span className="block text-[10px] text-gray-500 uppercase mt-1">Horas</span>
              </div>
              <div className="bg-gray-800 p-3 rounded-lg w-20">
                {String(timeLeft.minutes).padStart(2, '0')}
                <span className="block text-[10px] text-gray-500 uppercase mt-1">Min</span>
              </div>
              <div className="bg-gray-800 p-3 rounded-lg w-20">
                {String(timeLeft.seconds).padStart(2, '0')}
                <span className="block text-[10px] text-gray-500 uppercase mt-1">Seg</span>
              </div>
            </div>
          </div>

          <div className="mb-10">
            <span className="text-gray-400 line-through text-2xl mr-4">$8.500</span>
            <span className="text-5xl font-extrabold">$5.000</span>
            <span className="text-sm text-gray-400 ml-2">ARS</span>
          </div>

          {!preferenceId ? (
            <button
              onClick={handleBuy}
              disabled={isLoading}
              className="w-full sm:w-auto bg-primary-600 px-12 py-4 rounded-xl font-bold text-lg hover:bg-primary-500 transition-all disabled:opacity-50"
            >
              {isLoading ? 'Procesando...' : '¡Quiero mi lugar ahora!'}
            </button>
          ) : (
            <div id="wallet_container" className="max-w-xs mx-auto">
              <Wallet initialization={{ preferenceId }} />
            </div>
          )}

          <p className="mt-6 text-xs text-gray-500">
            Pago seguro procesado por Mercado Pago. Acceso inmediato al material tras la compra.
          </p>
        </div>
      </div>
    </section>
  );
}
