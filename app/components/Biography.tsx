'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Biography() {
  return (
    <section id="biografia" className="relative bg-white pt-16 lg:pt-24 pb-12 lg:pb-16 overflow-hidden font-[family-name:var(--font-lexend)]">
      {/* Elemento decorativo sutil */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 opacity-50 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">

          {/* Lado de la Imagen - Animación de entrada */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[360px] shrink-0 flex justify-center lg:justify-start"
          >
            <div className="relative aspect-[3/4] w-full max-w-[260px] sm:max-w-[300px] lg:max-w-none overflow-hidden rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.08)] bg-slate-100">
              <Image
                src="/images/vicky.jpg"
                alt="Vicky Aphalo - Habitar el Aula"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 260px, 360px"
                priority
              />
            </div>
          </motion.div>

          {/* Lado del Texto - Animación de entrada */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center flex-1"
          >
            <div className="max-w-2xl">
              <span className="text-sky-600 font-bold uppercase tracking-[0.2em] text-xs mb-5 block">
                Mi Propósito
              </span>

              <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 leading-[1.1] mb-8 tracking-tight">
                Todo lo que comparto nace de <span className="text-sky-700 italic">mi experiencia</span> en el aula.
              </h2>

              <div className="space-y-6 text-lg lg:text-xl text-slate-600 leading-relaxed">
                <p>
                  Durante años me encontré con grupos que no respondían y mucho desgaste.
                  Hasta que entendí que <span className="text-slate-900 font-semibold border-b-2 border-sky-100">no era solo qué hacía, sino cómo intervenía</span> en esos momentos.
                </p>

                <p>
                  A partir de ahí empecé a trabajar con estrategias concretas para intervenir mejor.
                  Una de ellas es el <span className="text-sky-600 font-bold">Método 3C</span>, diseñado para acompañar conflictos sin que todo dependa de tu energía física y emocional.
                </p>

                <p>
                  Hoy acompaño a docentes que quieren enseñar mejor sin gritar ni desgastarse. Lo que propongo va más allá de una técnica: es una forma de pararse frente al aula que integra autoconocimiento, vínculo y estrategias.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* New Quote Container - Con animación como pediste */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 lg:mt-16 pt-12 lg:pt-16 relative flex flex-col items-center"
        >
          <div className="w-24 h-px bg-slate-200 absolute top-0" />

          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 text-sky-100">
            <svg width="40" height="30" viewBox="0 0 40 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 18.25V0H15V18.25C15 24.75 11.25 30 5 30H3.75V25H5C7.75 25 10 21.75 10 18.25H0ZM25 18.25V0H40V18.25C40 24.75 36.25 30 30 30H28.75V25H30C32.75 25 35 21.75 35 18.25H25Z" />
            </svg>
          </div>
          <div className="max-w-4xl mx-auto text-center px-6">
            <p className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 leading-tight italic">
              &quot;Porque no se trata de hacer más. <br className="sm:hidden" />
              <span className="text-sky-600"> Se trata de intervenir mejor.</span>&quot;
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
