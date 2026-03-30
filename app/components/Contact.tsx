export default function Contact() {
  return (
    <section
      id="contacto"
      className="relative overflow-hidden bg-gradient-to-br from-sky-100 via-blue-100 to-indigo-100 py-28 sm:py-36"
    >
      {/* Glow suave */}
      <div className="absolute -top-40 -left-40 h-96 w-96 bg-sky-200 opacity-40 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-40 -right-40 h-96 w-96 bg-blue-200 opacity-40 blur-3xl rounded-full"></div>

      <div className="mx-auto max-w-6xl px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl sm:text-5xl font-semibold text-gray-800">
            Estoy para escucharte 💙
          </h2>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Si sos docente y estás pasando por un momento difícil,
            podés escribirme con total confianza. Este es un espacio seguro.
          </p>
        </div>

        {/* Card */}
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="rounded-3xl bg-white/90 backdrop-blur-xl shadow-lg p-10 sm:p-12 ring-1 ring-gray-200">

            <form className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6">

              {/* Nombre */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Nombre
                </label>
                <input
                  type="text"
                  className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-800 placeholder-gray-400 focus:border-sky-400 focus:ring-2 focus:ring-sky-300/40 transition-all"
                  placeholder="Tu nombre"
                />
              </div>

              {/* Apellido */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Apellido
                </label>
                <input
                  type="text"
                  className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-800 placeholder-gray-400 focus:border-sky-400 focus:ring-2 focus:ring-sky-300/40 transition-all"
                  placeholder="Tu apellido"
                />
              </div>

              {/* Email */}
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-800 placeholder-gray-400 focus:border-sky-400 focus:ring-2 focus:ring-sky-300/40 transition-all"
                  placeholder="tu@email.com"
                />
              </div>

              {/* Mensaje */}
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">
                  Mensaje
                </label>
                <textarea
                  rows={5}
                  className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-800 placeholder-gray-400 focus:border-sky-400 focus:ring-2 focus:ring-sky-300/40 transition-all resize-none"
                  placeholder="Podés contarme lo que necesites, sin filtros..."
                />
              </div>

              {/* Button */}
              <div className="sm:col-span-2 mt-2">
                <button
                  type="submit"
                  className="w-full rounded-xl bg-sky-400 px-6 py-3.5 text-base font-medium text-white shadow-sm hover:bg-sky-500 hover:shadow-md active:scale-[0.99] transition-all duration-200"
                >
                  Enviar mensaje 🤍
                </button>
              </div>
            </form>

            {/* Footer */}
            <div className="mt-10 border-t border-gray-100 pt-6 text-center">
              <p className="text-sm text-gray-500">
                También podés escribirme por:
              </p>

              <div className="mt-4 flex justify-center gap-6">
                <a
                  href="#"
                  className="text-sky-500 font-medium hover:text-sky-600 transition"
                >
                  WhatsApp
                </a>
                <a
                  href="#"
                  className="text-sky-500 font-medium hover:text-sky-600 transition"
                >
                  Instagram
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}