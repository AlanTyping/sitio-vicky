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
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
            </div>
          </div>

          <div className="text-center space-y-4 mb-8">
            <h3 className="text-2xl font-black text-[#0c2a4a]">Información Importante</h3>
            <p className="text-slate-600 font-medium leading-relaxed">
              Al pagar con <span className="text-[#009EE3] font-bold">Mercado Pago</span>, se envía el Ebook en formato PDF al <span className="font-bold">email asociado</span> a tu cuenta de Mercado Pago.
            </p>
          </div>

          <button
            onClick={onNext}
            className="w-full bg-sky-600 hover:bg-sky-500 text-white font-black py-5 px-6 rounded-2xl shadow-xl shadow-sky-600/20 transition-all active:scale-[0.98] flex items-center justify-center gap-3 text-lg"
          >
            Siguiente
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </button>

          <p className="mt-6 text-center text-[10px] text-slate-400 font-bold uppercase tracking-widest">
            ¡Ya casi es tuyo!
          </p>
        </div>
      </div>
    </div>
  );
}
