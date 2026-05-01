export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex flex-col items-center md:items-end space-y-3 md:order-2">
          <span className="text-gray-500 text-sm">Vicky Aphalo © {new Date().getFullYear()}</span>
          <a 
            href="https://huella-online.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-[#ffa500] transition-all group bg-white/5 px-3 py-1.5 rounded-full border border-white/10 hover:border-[#ffa500]/30 hover:shadow-sm"
          >
            <span>Desarrollado por <span className="text-white group-hover:text-[#ffa500] font-bold transition-colors">Huella Online</span></span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffa500"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:scale-110 transition-transform"
            >
              <path d="M12 10a2 2 0 0 0-2 2c0 1.02-.64 2.08-1.13 2.54a2 2 0 0 1-2.74 0 1.93 1.93 0 0 1 0-2.74A6 6 0 0 1 15.66 7.41a2 2 0 0 1 1.41 1.41 2 2 0 0 1 0 2.82" />
              <path d="M2 12a10 10 0 0 1 18-6" />
              <path d="M7 21c.5 0 1 0 1.5-.5" />
              <path d="M14 21c-.5 0-1 0-1.5-.5" />
              <path d="M5 14a7 7 0 0 1 14 0" />
              <path d="M22 12a10 10 0 0 0-18-6" />
              <path d="M10 21c-.5 0-1 0-1.5-.5" />
              <path d="M12 17c.5 0 1 0 1.5-.5" />
            </svg>
          </a>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-gray-400">
            &copy; {new Date().getFullYear()} Vicky - Apoyo Emocional para Docentes. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
