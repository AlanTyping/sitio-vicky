import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 font-[family-name:var(--font-lexend)]">
      <div className="text-center space-y-6 max-w-md">
        <h1 className="text-9xl font-black text-sky-100 animate-pulse">404</h1>
        <div className="space-y-2">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Página no encontrada</h2>
          <p className="text-slate-600 text-lg">
            Parece que te has perdido en el aula. No te preocupes, volvamos al camino principal.
          </p>
        </div>
        <Link 
          href="/" 
          className="inline-flex items-center justify-center bg-sky-600 hover:bg-sky-500 text-white font-black py-4 px-8 rounded-2xl shadow-xl shadow-sky-200 transition-all text-lg group"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="3" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="mr-2 group-hover:-translate-x-1 transition-transform"
          >
            <path d="m15 18-6-6 6-6"/>
          </svg>
          Volver al inicio
        </Link>
      </div>
      
      {/* Elementos decorativos sutiles */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[10%] -left-24 w-[500px] h-[500px] bg-sky-50 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] -right-24 w-[500px] h-[500px] bg-slate-50 rounded-full blur-[120px]" />
      </div>
    </div>
  );
}
