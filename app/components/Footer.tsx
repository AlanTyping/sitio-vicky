export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-6 py-12 flex flex-col items-center md:flex-row md:justify-between lg:px-8 space-y-6 md:space-y-0">
        <div className="md:order-1 text-center md:text-left">
          <p className="text-xs leading-5 text-slate-400 font-medium italic">
            &copy; {new Date().getFullYear()} Vicky Aphalo - Regulación Emocional para Educadores. Todos los derechos reservados.
          </p>
        </div>

        <div className="md:order-2 flex items-center space-x-2">
          <span className="text-slate-500 text-xs font-medium">Desarrollado por</span>
          <a 
            href="https://huellaonline.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center space-x-1 hover:opacity-80 transition-opacity"
          >
            <img src="/huellaonline.svg" alt="Huella Online" className="h-5 w-auto" />
            <span className="text-sm font-bold text-slate-200">Huella Online</span>
          </a>
        </div>
        
        <div className="md:order-3 flex flex-col items-center md:items-end">
          <span className="text-slate-400 text-sm font-medium">Vicky Aphalo © {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
