'use client';

export default function Contact() {
  return (
    <section id="contacto" className="relative bg-white py-24 lg:py-32 overflow-hidden font-[family-name:var(--font-lexend)]">
      {/* Decoración moderna: círculos sutiles en lugar de manchas orgánicas */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-slate-50 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sky-50/50 rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:items-center">
          
          {/* Lado Izquierdo: Info & Instagram */}
          <div className="space-y-10">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
                Sigamos en <br />
                <span className="text-sky-600">contacto.</span>
              </h2>
              <p className="text-lg lg:text-xl text-slate-600 leading-relaxed max-w-md">
                Si sos docente y buscás un espacio de reflexión o tenés alguna duda, escribime. Estoy acá para escucharte.
              </p>
            </div>

            {/* Instagram Card - Look más moderno/glassy */}
            <a 
              href="https://www.instagram.com/vicky.aphalo/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative block p-1 rounded-3xl bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] transition-all duration-500 hover:scale-[1.02] shadow-2xl shadow-pink-500/10"
            >
              <div className="bg-white rounded-[1.4rem] p-7 flex items-center gap-6">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] flex items-center justify-center text-white shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-0.5">Comunidad</p>
                  <p className="text-2xl font-black text-slate-900">@vicky.aphalo</p>
                </div>
                <div className="ml-auto hidden sm:block">
                  <span className="bg-slate-50 text-slate-600 px-4 py-2 rounded-full text-sm font-bold group-hover:bg-slate-900 group-hover:text-white transition-colors">Seguir</span>
                </div>
              </div>
            </a>
          </div>

          {/* Lado Derecho: Formulario minimalista */}
          <div className="relative">
            {/* Adorno decorativo detrás del formulario */}
            <div className="absolute -inset-4 bg-slate-50 rounded-[3rem] -rotate-2 pointer-events-none" />
            
            <div className="relative bg-white rounded-[2.5rem] p-8 lg:p-10 shadow-[0_30px_70px_rgba(0,0,0,0.04)] border border-slate-100">
              <form className="space-y-5">
                <div className="space-y-1.5">
                  <label className="text-[11px] font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Nombre completo</label>
                  <input 
                    type="text" 
                    placeholder="Tu nombre"
                    className="w-full bg-slate-50 border-2 border-transparent rounded-2xl px-6 py-4 text-slate-900 placeholder:text-slate-400 focus:border-sky-500/10 focus:bg-white focus:ring-4 focus:ring-sky-500/5 transition-all outline-none"
                  />
                </div>
                
                <div className="space-y-1.5">
                  <label className="text-[11px] font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Email</label>
                  <input 
                    type="email" 
                    placeholder="tu@email.com"
                    className="w-full bg-slate-50 border-2 border-transparent rounded-2xl px-6 py-4 text-slate-900 placeholder:text-slate-400 focus:border-sky-500/10 focus:bg-white focus:ring-4 focus:ring-sky-500/5 transition-all outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-black text-slate-500 uppercase tracking-[0.2em] ml-1">Tu mensaje</label>
                  <textarea 
                    rows={4} 
                    placeholder="¿En qué puedo ayudarte?"
                    className="w-full bg-slate-50 border-2 border-transparent rounded-2xl px-6 py-4 text-slate-900 placeholder:text-slate-400 focus:border-sky-500/10 focus:bg-white focus:ring-4 focus:ring-sky-500/5 transition-all outline-none resize-none"
                  />
                </div>

                <button className="w-full bg-sky-600 text-white font-bold py-5 px-8 rounded-2xl shadow-xl shadow-sky-200 hover:bg-sky-700 active:scale-[0.98] transition-all text-lg flex items-center justify-center gap-3 mt-4">
                  Enviar mensaje
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
