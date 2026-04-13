export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-start bg-slate-900 overflow-hidden px-6 pt-16 pb-20 lg:pt-24 lg:px-12">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/clases-video.mp4" type="video/mp4" />
          Tu navegador no soporta videos.
        </video>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
      </div>

      <div className="mx-auto max-w-7xl w-full flex flex-col items-center justify-center text-center z-10 min-h-[60vh] -translate-y-12 lg:-translate-y-20">

        {/* Title & Subtitle */}
        <div className="flex flex-col items-center space-y-6 font-[family-name:var(--font-lexend)]">
          <div className="max-w-7xl flex flex-col items-center">
            <h1 className="text-[42px] sm:text-[64px] lg:text-[81px] font-bold tracking-tight text-white leading-none drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)] whitespace-nowrap">
              Habitar el aula
            </h1>
            <p className="mt-4 text-[18px] lg:text-[26px] font-normal text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] tracking-wide">
              con más claridad, vínculo y criterio
            </p>
            <div className="mt-10">
              <a
                href="#contacto"
                className="bg-[#005724] px-12 py-4 text-lg font-bold text-white shadow-2xl hover:bg-[#00461d] hover:scale-105 active:scale-95 transition-all duration-300 rounded-xl border border-white/20"
              >
                Quiero info
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
