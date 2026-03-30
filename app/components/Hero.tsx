export default function Hero() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-primary-50 px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-primary-900 sm:text-6xl">
          Vicky Aphalo
        </h1>
        <p className="mt-6 text-lg leading-8 text-primary-700">
          Acompañamiento emocional diseñado exclusivamente para educadores. Un espacio para sanar, fortalecerse y reencontrar el propósito en la enseñanza.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="#contacto"
            className="rounded-full bg-primary-600 px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 transition-all duration-300"
          >
            Empezar hoy
          </a>
          <a href="#descripcion" className="text-sm font-semibold leading-6 text-primary-900">
            Saber más <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -z-10 top-0 left-0 w-64 h-64 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute -z-10 bottom-0 right-0 w-80 h-80 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
    </section>
  );
}
