export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex flex-col items-center md:items-end space-y-3 md:order-2">
          <span className="text-slate-400 text-sm font-medium">Vicky Aphalo © {new Date().getFullYear()}</span>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-slate-400 font-medium italic">
            &copy; {new Date().getFullYear()} Vicky Aphalo - Regulación Emocional para Educadores. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
