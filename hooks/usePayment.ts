'use client';

import { useState } from 'react';
import { ProductKey } from '@/config/products';

export function usePayment() {
  const [preferenceId, setPreferenceId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const startCheckout = async (productKey: ProductKey) => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productKey }),
      });
      const data = await response.json();
      if (data.init_point) {
        // Redirección directa a Mercado Pago
        window.location.href = data.init_point;
      } else {
        throw new Error(data.error || 'Error al iniciar pago');
      }
    } catch (error) {
      console.error('Error in startCheckout:', error);
      alert('Hubo un error al iniciar el pago. Inténtalo de nuevo.');
    } finally {
      setIsLoading(false);
    }
  };

  const resetPayment = () => {
    setPreferenceId(null);
    setIsLoading(false);
  };

  return {
    preferenceId,
    isLoading,
    startCheckout,
    resetPayment,
  };
}
