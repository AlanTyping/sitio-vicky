'use client';

import { useEffect, useState } from 'react';

const SECTIONS = [
  { id: 'inicio', number: '01', label: 'Inicio' },
  { id: 'incluye', number: '02', label: 'Qué incluye' },
  { id: 'recorrido', number: '03', label: 'El recorrido' },
  { id: 'consulta', number: '04', label: 'Consulta' },
];

export default function SectionRail() {
  const [active, setActive] = useState(SECTIONS[0].id);
  const [atFooter, setAtFooter] = useState(false);

  useEffect(() => {
    const footer = document.querySelector('footer');
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => setAtFooter(entry.isIntersecting),
      { threshold: 0 }
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const marker = window.scrollY + window.innerHeight * 0.35;
      let current = SECTIONS[0].id;

      for (const section of SECTIONS) {
        const element = document.getElementById(section.id);
        if (
          element &&
          element.getBoundingClientRect().top + window.scrollY <= marker
        ) {
          current = section.id;
        }
      }

      setActive(current);
    };

    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);

    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <nav
      aria-label="Índice de la página"
      className={`fixed right-8 top-1/2 z-40 hidden -translate-y-1/2 transition-opacity duration-300 min-[1440px]:block ${
        atFooter ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
    >
      <ol className="relative flex flex-col gap-7">
        <span
          className="absolute bottom-2 left-[3.5px] top-2 w-px bg-ink/15"
          aria-hidden="true"
        />

        {SECTIONS.map((section) => {
          const isActive = active === section.id;

          return (
            <li key={section.id} className="relative pl-4">
              <span
                className={`absolute left-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full transition-all duration-300 ${
                  isActive
                    ? 'scale-125 bg-emerald-600 ring-4 ring-emerald-600/10'
                    : 'bg-ink/20'
                }`}
                aria-hidden="true"
              />

              <a
                href={`#${section.id}`}
                title={section.label}
                aria-current={isActive ? 'true' : undefined}
                className={`group flex items-baseline gap-2.5 rounded-sm text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 ${
                  isActive ? 'text-ink' : 'text-ink/35 hover:text-ink/70'
                }`}
              >
                <span className="font-[family-name:var(--font-bitter)] text-[11px] font-bold italic tabular-nums">
                  {section.number}
                </span>
                <span className="hidden 2xl:inline">{section.label}</span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
