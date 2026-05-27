export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col items-center md:flex-row md:justify-between lg:px-8 space-y-6 md:space-y-0">
        <div className="text-center md:text-left">
          <p className="text-xs leading-5 text-slate-400 font-medium italic">
            &copy; {new Date().getFullYear()} Vicky Aphalo. Todos los derechos reservados.
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <span className="text-slate-500 text-[10px] font-medium uppercase tracking-wider">Desarrollado por</span>
          <a 
            href="https://huellaonline.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center space-x-1.5 hover:opacity-80 transition-opacity"
          >
            <img src="/huellaonline.svg" alt="Huella Online" className="h-4 w-auto" />
            <span className="text-xs font-bold text-slate-300">Huella Online</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
