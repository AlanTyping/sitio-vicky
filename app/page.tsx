import Hero from "./components/Hero";
import Description from "./components/Description";
import Payment from "./components/Payment";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Navbar Minimalista */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5 text-xl font-bold text-emerald-900 tracking-tight">
              Sentir Docente
            </a>
          </div>
          <div className="flex gap-x-8">
            <a href="#descripcion" className="text-sm font-semibold leading-6 text-gray-900 hover:text-emerald-600 transition-colors">
              Nosotros
            </a>
            <a href="#pago" className="text-sm font-semibold leading-6 text-gray-900 hover:text-emerald-600 transition-colors">
              Servicios
            </a>
            <a href="#contacto" className="text-sm font-semibold leading-6 text-gray-900 hover:text-emerald-600 transition-colors">
              Contacto
            </a>
          </div>
        </nav>
      </header>

      <main className="flex-1">
        <Hero />
        <Description />
        <Payment />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
