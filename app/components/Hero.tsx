import Image from 'next/image';
import vickyImg from '@/assets/images/vicky.jpeg';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-start bg-white overflow-hidden px-6 pt-16 pb-20 lg:pt-24 lg:px-12">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[500px] h-[500px] bg-sky-50 rounded-full blur-3xl opacity-60 z-0" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-slate-50 rounded-full blur-3xl opacity-60 z-0" />

      <div className="mx-auto max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-start z-10">

        {/* Left Side: Title & Description */}
        <div className="flex flex-col items-center lg:items-start space-y-10 text-center lg:text-left">
          <div className="max-w-xl flex flex-col items-center lg:items-start">
            <h1 className="text-6xl font-black tracking-tighter text-sky-400 sm:text-7xl lg:text-8xl leading-[0.9]">
              Vicky <br /> Aphalo
            </h1>
            <p className="mt-8 text-xl lg:text-2xl leading-relaxed text-slate-700 font-medium">
              Acompañamiento emocional diseñado exclusivamente para <span className="text-sky-500 font-bold underline decoration-sky-200 decoration-4 underline-offset-4">educadores</span>. Un espacio para sanar, fortalecerse y reencontrar el propósito en la enseñanza.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row items-center gap-8">
              <a
                href="#contacto"
                className="bg-sky-500 px-10 py-4 text-lg font-bold text-white shadow-xl hover:bg-sky-600 hover:scale-105 active:scale-95 transition-all duration-300"
              >
                Empezar hoy
              </a>
              <a href="#descripcion" className="text-lg font-bold leading-6 text-slate-900 hover:text-sky-500 transition-colors flex items-center gap-2 group">
                Saber más <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Media Composition */}
        <div className="relative flex flex-col lg:flex-row justify-center items-center lg:items-start h-auto lg:h-[700px] z-10">
          {/* Base Image: Vicky (9:16) */}
          <div className="relative w-[280px] lg:w-[240px] aspect-[9/16] shadow-2xl z-0 lg:transform lg:-translate-x-24 lg:-translate-y-12 hover:scale-[1.02] transition-transform duration-500 overflow-hidden mb-8 lg:mb-0">
            <Image
              src={vickyImg}
              alt="Vicky Aphalo"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Overlapping Video: (9:16) */}
          <div className="relative lg:absolute w-[280px] lg:w-[240px] aspect-[9/16] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] z-10 bg-slate-900 border-4 border-white lg:transform lg:translate-x-20 lg:translate-y-24 hover:scale-[1.02] transition-transform duration-500">
            <div className="relative w-full h-full group cursor-pointer">
              <video
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                poster="/placeholder-video.jpg"
              >
                <source src="#" type="video/mp4" />
                Tu navegador no soporta videos.
              </video>
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-sky-500/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-sky-500 transition-all">
                  <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1" />
                </div>
              </div>

              <div className="absolute top-4 left-4 bg-sky-500 px-3 py-1 text-[10px] font-bold text-white uppercase tracking-widest">
                Presentación
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
