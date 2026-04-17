'use client';

import Image from 'next/image';

export default function Biography() {
  return (
    <section id="biografia" className="relative bg-white py-24 lg:py-32 overflow-hidden font-[family-name:var(--font-lexend)]">
      {/* Elemento decorativo sutil - Una mancha orgánica muy suave en celeste */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 opacity-50 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-stretch gap-16 lg:gap-24">
          
          {/* Lado de la Imagen - Alineado al logo del header */}
          <div className="w-full lg:w-[400px] shrink-0 flex justify-center lg:justify-start">
            <div className="relative aspect-[9/16] w-full max-w-[280px] sm:max-w-[320px] lg:max-w-none overflow-hidden rounded-[2rem] lg:rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] bg-slate-100">
              <Image
                src="/images/vicky.jpg"
                alt="Vicky Aphalo - Habitar el Aula"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 280px, 400px"
                priority
              />
            </div>
          </div>

          {/* Lado del Texto - Estilo editorial limpio */}
          <div className="flex flex-col justify-center flex-1">
            <div className="max-w-2xl">
              <span className="text-sky-600 font-bold uppercase tracking-[0.2em] text-sm mb-6 block">
                Mi Propósito
              </span>
              
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-10 tracking-tight">
                Todo lo que comparto nace de <span className="text-sky-700 italic">mi experiencia</span> en el aula.
              </h2>

              <div className="space-y-8 text-lg lg:text-xl text-slate-600 leading-relaxed">
                <p>
                  Durante años me encontré con grupos que no respondían y mucho desgaste. 
                  Hasta que entendí que <span className="text-slate-900 font-semibold border-b-2 border-sky-100">no era solo qué hacía, sino cómo intervenía</span> en esos momentos.
                </p>

                <p>
                  A partir de ahí empecé a trabajar con estrategias concretas para intervenir mejor. 
                  Una de ellas es el <span className="text-slate-900 font-bold">Método 3C</span>, diseñado para acompañar conflictos sin que todo dependa de tu energía física y emocional.
                </p>

                <p>
                  Hoy acompaño a docentes que quieren enseñar mejor sin gritar ni desgastarse. Lo que propongo va más allá de una técnica: es una forma de pararse frente al aula que integra autoconocimiento, vínculo y estrategias.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* New Quote Container - Horizontal and Centered */}
        <div className="mt-20 lg:mt-24 pt-16 border-t border-slate-100">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 leading-tight italic">
              "Porque no se trata de hacer más. <br className="sm:hidden" />
              <span className="text-sky-600"> Se trata de intervenir mejor.</span>"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
