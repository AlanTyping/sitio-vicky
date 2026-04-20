'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function FreeGuide() {
  return (
    <section id="guia-gratuita" className="relative bg-white pt-4 pb-24 lg:pt-6 lg:pb-32 overflow-hidden font-[family-name:var(--font-lexend)]">
      {/* Decoración de fondo */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
        <div className="absolute top-[10%] -left-24 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] -right-24 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:items-center">
          
          {/* Contenido */}
          <div className="flex flex-col items-center lg:items-start space-y-8 lg:max-w-2xl order-2 lg:order-1 text-center lg:text-left">
            <div className="space-y-4">
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <span className="bg-amber-100 text-amber-700 border border-amber-200 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Recurso Gratuito
                </span>
                <span className="text-slate-400 text-xs font-bold tracking-wide uppercase italic">Exclusivo para docentes</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
                Botiquín Docente: <br />
                <span className="text-sky-600">Primeros auxilios para el aula.</span>
              </h2>

              <p className="text-lg lg:text-xl leading-relaxed text-slate-600 font-medium max-w-xl">
                Una guía práctica con herramientas inmediatas para gestionar situaciones complejas y cuidar tu bienestar emocional mientras enseñas.
              </p>
            </div>

            <ul className="grid grid-cols-1 gap-4 text-left">
              {[
                'Estrategias de regulación emocional',
                'Tips para la gestión de conflictos',
                'Ejercicios breves de autocuidado',
                'Recursos listos para aplicar'
              ].map((feature, index) => (
                <motion.li 
                  key={feature} 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 text-slate-700 font-semibold group cursor-default"
                >
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-sky-500 text-white flex items-center justify-center shadow-md group-hover:bg-amber-500 transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </span>
                  <span className="group-hover:translate-x-1 transition-transform">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <div className="pt-4 flex flex-col items-center lg:items-start">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="/pdf/botiquin-docente.pdf"
                download
                className="inline-flex items-center justify-center gap-3 bg-sky-600 hover:bg-sky-500 text-white font-black py-5 px-10 rounded-2xl shadow-xl shadow-sky-600/20 transition-all text-lg group"
              >
                Descargar Guía Gratis
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22" height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:translate-y-1 transition-transform"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
              </motion.a>
              <p className="mt-4 text-sm text-slate-400 font-medium italic">
                PDF gratuito • Descarga instantánea
              </p>
            </div>
          </div>

          {/* Visual: Mockup con Imagen Real - ESTÁTICO como pediste */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative group w-full max-w-[420px] aspect-[3/4] transition-all duration-700">
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-4/5 h-12 bg-slate-900/30 blur-3xl rounded-full" />
              
              <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] shadow-2xl ring-1 ring-slate-200 bg-white p-4">
                <div className="relative h-full w-full rounded-xl overflow-hidden bg-slate-50">
                  <Image
                    src="/images/botiquin-docente.png"
                    alt="Botiquín Docente"
                    fill
                    className="object-contain transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                </div>
              </div>

              {/* Badge flotante */}
              <div className="absolute -top-4 -right-4 bg-amber-500 text-white px-6 py-3 rounded-2xl shadow-xl font-black text-sm uppercase tracking-tighter rotate-12 border-4 border-white z-20">
                ¡GRATIS! ✨
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
