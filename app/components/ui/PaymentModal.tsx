'use client';

import Image from 'next/image';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initPoint: string | null;
  isLoading: boolean;
}

export default function PaymentModal({ isOpen, onClose, initPoint, isLoading }: PaymentModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-white w-full max-w-md rounded-[2.5rem] overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 transition-colors z-10"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>

        <div className="p-8 lg:p-10">
          <div className="text-center space-y-4 mb-8">
            <h3 className="text-2xl font-black text-[#0c2a4a]">Haz tu compra</h3>
            <p className="text-slate-500 font-medium">Elegí el método que prefieras para obtener tu Ebook</p>
          </div>

          <div className="space-y-4">
            {/* Mercado Pago Button - Instant and Clean */}
            <button
              onClick={() => initPoint && (window.location.href = initPoint)}
              className="w-full bg-[#009EE3] hover:bg-[#0087c1] text-white font-black py-5 px-6 rounded-2xl shadow-xl shadow-sky-600/20 transition-all active:scale-[0.98] flex items-center justify-center gap-3 text-lg"
            >
              <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="brightness-0 invert">
                <path d="M22.5 4.5H9.5C6.73858 4.5 4.5 6.73858 4.5 9.5V22.5C4.5 25.2614 6.73858 27.5 9.5 27.5H22.5C25.2614 27.5 27.5 25.2614 27.5 22.5V9.5C27.5 6.73858 25.2614 4.5 22.5 4.5Z" fill="white" />
                <path d="M12.5 10.5V21.5M19.5 10.5V21.5M12.5 10.5H19.5" stroke="#009EE3" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
              {isLoading && !initPoint ? 'Preparando pago...' : 'Pagar con Mercado Pago'}
            </button>

            <div className="relative py-2">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-slate-400 font-bold">O también</span>
              </div>
            </div>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/5491122334455?text=Hola!%20Acabo%20de%20ver%20tu%20Ebook%20y%20me%20gustaría%20obtenerlo.%20¿Cómo%20podemos%20hacer?"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-black py-4 px-6 rounded-2xl shadow-lg shadow-green-600/20 transition-all active:scale-[0.98] flex items-center justify-center gap-3 text-lg group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24" height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              Contactar por WhatsApp
            </a>
          </div>

          <p className="mt-8 text-center text-[10px] text-slate-400 font-bold uppercase tracking-widest">
            Pago 100% seguro garantizado
          </p>
        </div>
      </div>
    </div>
  );
}
