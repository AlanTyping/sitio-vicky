export default function Payment() {
  return (
    <section id="pago" className="bg-emerald-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-emerald-900 sm:text-4xl">
            Inicia tu camino hoy
          </h2>
          <p className="mt-6 text-lg leading-8 text-emerald-700">
            Puedes contratar las sesiones de apoyo emocional de manera simple y segura a través de los siguientes medios.
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-lg rounded-3xl bg-white p-8 ring-1 ring-emerald-200 sm:p-10 lg:mx-0 lg:max-w-none lg:flex lg:items-center">
          <div className="flex-1 lg:pr-10">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">Sesión Individual</h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600 sm:mt-10">
              {['Atención personalizada', 'Duración de 60 min', 'Soporte vía WhatsApp', 'Material complementario'].map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <span className="text-emerald-500">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-10 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-emerald-50 py-10 text-center ring-1 ring-inset ring-emerald-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600">Valor de la inversión</p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">$XXXX</span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">ARS</span>
                </p>
                <a
                  href="#"
                  className="mt-10 block w-full rounded-md bg-emerald-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
                >
                  Pagar ahora
                </a>
                <p className="mt-6 text-xs leading-5 text-gray-600">
                  Transferencia bancaria o link de pago seguro.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
