'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

type ParallaxImageProps = {
  src: string;
  /** Intensidad del desplazamiento, en porcentaje de la altura de la imagen */
  strength?: number;
  /** Clases para la imagen (por ejemplo, el encuadre con object-position) */
  className?: string;
  sizes?: string;
  priority?: boolean;
};

/**
 * Imagen de fondo con parallax: se desplaza más lento que el scroll.
 * Necesita que el contenedor padre tenga `overflow-hidden`.
 */
export default function ParallaxImage({
  src,
  strength = 12,
  className = 'object-cover',
  sizes = '100vw',
  priority = false,
}: ParallaxImageProps) {
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const layer = layerRef.current;
    if (!layer) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let frame = 0;

    const render = () => {
      frame = 0;

      const rect = layer.getBoundingClientRect();
      const viewport = window.innerHeight || 1;

      // -1: entrando desde abajo · 1: saliendo por arriba
      const progress = Math.max(
        Math.min((viewport / 2 - (rect.top + rect.height / 2)) / viewport, 1),
        -1,
      );

      layer.style.transform = `translate3d(0, ${progress * strength}%, 0) scale(1.2)`;
    };

    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(render);
    };

    render();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);

    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [strength]);

  return (
    <div
      ref={layerRef}
      className="absolute inset-0 -z-20 will-change-transform"
      aria-hidden="true"
    >
      <Image src={src} alt="" fill priority={priority} sizes={sizes} className={className} />
    </div>
  );
}
