'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col bg-slate-900 overflow-hidden font-[family-name:var(--font-lexend)]">
      {/* Background Video Layer (Full Screen) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/captura.jpg"
          className="w-full h-full object-cover"
        >
          <source src="/videos/clases-video.mp4" type="video/mp4" />
          Tu navegador no soporta videos.
        </video>
        {/* Dark Overlay with Gradient */}
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 flex-1 w-full flex flex-col items-center justify-center pt-28 lg:pt-32 px-6 pb-20 lg:px-12">

        {/* Title & Subtitle */}
        <div className="text-center mb-12 lg:mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[42px] sm:text-[72px] lg:text-[96px] font-extrabold tracking-tight text-white leading-[0.9] drop-shadow-2xl"
          >
            Habitar el aula
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 flex items-center justify-center gap-3 lg:gap-4"
          >
            <span className="h-px w-6 lg:w-8 bg-white/40"></span>
            <p className="text-[12px] lg:text-[18px] font-medium text-white/90 tracking-[0.2em] lg:tracking-[0.3em] uppercase">
              Formación docente consciente
            </p>
            <span className="h-px w-6 lg:w-8 bg-white/40"></span>
          </motion.div>
        </div>

        {/* Info Containers Row - Con animaciones escalonadas */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.6
              }
            }
          }}
          className="mx-auto max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >

          {/* Card 1: ¿Qué resuelve? */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
            className="bg-white/95 backdrop-blur-md p-6 lg:p-8 rounded-tr-3xl rounded-bl-3xl shadow-2xl border-l-[6px] border-sky-500 relative overflow-hidden group hover:bg-white transition-all duration-300"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" /><path d="M8 7h6" /><path d="M8 11h8" /><path d="M8 15h6" /></svg>
            </div>
            <div className="flex items-center gap-3 mb-3 lg:mb-4 text-slate-800">
              <div className="p-2 bg-sky-50 text-sky-600 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>
              </div>
              <h3 className="text-lg font-bold tracking-tight">¿Qué resuelve?</h3>
            </div>
            <p className="text-slate-600 leading-relaxed text-[14px] lg:text-[15px]">
              Te ayudo a dejar de sostener el aula desde el cansancio, el grito o la improvisación, dándote herramientas concretas para intervenir con sentido y claridad.
            </p>
          </motion.div>

          {/* Card 2: Mi propuesta */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
            className="bg-white/95 backdrop-blur-md p-6 lg:p-8 rounded-tr-3xl rounded-bl-3xl shadow-2xl border-l-[6px] border-amber-500 relative overflow-hidden group hover:bg-white transition-all duration-300"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.7 1.5-1.7 1.5-3 0-2.2-1.8-4-4-4s-4 1.8-4 4c0 1.3.5 2.3 1.5 3 .8.8 1.3 1.5 1.5 2.5" /><path d="M9 18h6" /><path d="M10 22h4" /></svg>
            </div>
            <div className="flex items-center gap-3 mb-3 lg:mb-4 text-slate-800">
              <div className="p-2 bg-amber-50 text-amber-600 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" /></svg>
              </div>
              <h3 className="text-lg font-bold tracking-tight">Mi propuesta</h3>
            </div>
            <p className="text-slate-600 leading-relaxed text-[14px] lg:text-[15px]">
              Una mirada práctica y consciente para transformar el vínculo en el aula, con dinámicas, estrategias didácticas y pausas activas que podés aplicar desde el primer día.
            </p>
          </motion.div>

          {/* Card 3: ¿Para quién es? */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
            }}
            className="bg-white/95 backdrop-blur-md p-6 lg:p-8 rounded-tr-3xl rounded-bl-3xl shadow-2xl border-l-[6px] border-blue-400 relative overflow-hidden group hover:bg-white transition-all duration-300"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
            </div>
            <div className="flex items-center gap-3 mb-3 lg:mb-4 text-slate-800">
              <div className="p-2 bg-blue-50 text-blue-500 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg>
              </div>
              <h3 className="text-lg font-bold tracking-tight">¿Para quién es?</h3>
            </div>
            <p className="text-slate-600 leading-relaxed text-[14px] lg:text-[15px]">
              Para profesionales de la educación que quieren pararse distinto: con más presencia, menos desgaste y herramientas concretas para acompañar a sus alumnos sin desbordarse.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating White Arrow */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 hidden sm:block">
        <div className="animate-bounce opacity-50">
          <svg
            width="20"
            height="40"
            viewBox="0 0 24 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white"
          >
            <path
              d="M12 0V58M12 58L5 51M12 58L19 51"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
