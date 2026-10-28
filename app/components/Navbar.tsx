"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type NavbarProps = {
  theme?: "dark" | "light";
  compact?: boolean;
};

const Navbar = ({ theme = "dark", compact = false }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isLight = theme === "light";

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { href: isHome ? "#biografia" : "/#biografia", label: "Sobre mí" },
    { href: isHome ? "#servicios" : "/#servicios", label: "Servicios", highlight: true },
    { href: isHome ? "#guia-gratuita" : "/#guia-gratuita", label: "Guía gratuita" },
    { href: isHome ? "#ebook" : "/#ebook", label: "Ebook" },
    { href: isHome ? "#contacto" : "/#contacto", label: "Contacto" },
  ];

  return (
    <header
      className={`absolute top-0 z-50 w-full border-0 transition-colors lg:bg-transparent ${
        compact ? "lg:py-5" : "lg:py-8"
      } ${
        isOpen
          ? "bg-ink"
          : isLight
            ? "bg-transparent"
            : "bg-gradient-to-b from-black/95 to-transparent"
      }`}
    >
      <nav className="relative z-50 mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link
            href="/"
            className={`rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
              isOpen || !isLight
                ? "text-paper focus-visible:ring-marker focus-visible:ring-offset-ink"
                : "text-ink focus-visible:ring-pencil focus-visible:ring-offset-white"
            }`}
          >
            <span
              className={`block font-[family-name:var(--font-bitter)] font-semibold leading-tight tracking-tight ${
                compact ? "text-xl lg:text-2xl" : "text-2xl lg:text-4xl"
              }`}
            >
              Vicky Aphalo
            </span>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            onClick={toggleMenu}
            className={`rounded-2xl p-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-95 ${
              isOpen || !isLight
                ? "text-paper hover:bg-paper/10 focus-visible:ring-marker focus-visible:ring-offset-ink"
                : "text-ink hover:bg-ink/5 focus-visible:ring-pencil focus-visible:ring-offset-white"
            }`}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            )}
          </button>
        </div>

        <div className={`hidden lg:flex items-center ${compact ? "gap-x-8" : "gap-x-10"}`}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`rounded-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                compact ? "text-sm" : "text-[15px]"
              } ${
                link.highlight && !compact
                  ? isLight
                    ? "border border-slate-200 bg-paper-soft px-5 py-2.5 text-ink shadow-md shadow-slate-900/5 hover:bg-marker/40 focus-visible:ring-pencil focus-visible:ring-offset-white"
                    : "border border-paper/40 bg-paper px-5 py-2.5 text-ink shadow-md shadow-black/30 hover:bg-marker focus-visible:ring-marker focus-visible:ring-offset-ink"
                  : isLight
                    ? "text-ink-soft hover:text-pencil focus-visible:ring-pencil focus-visible:ring-offset-white"
                    : "text-paper/75 hover:text-marker focus-visible:ring-marker focus-visible:ring-offset-ink"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Menú mobile */}
      <div
        id="mobile-menu"
        className={`lg:hidden fixed inset-0 z-40 bg-ink/95 backdrop-blur-xl transition-all duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div
          className={`relative flex h-full flex-col items-center justify-center gap-7 transition-transform duration-300 ${
            isOpen ? "scale-100" : "scale-95"
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`rounded-sm font-[family-name:var(--font-bitter)] text-3xl font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-marker focus-visible:ring-offset-4 focus-visible:ring-offset-ink ${
                link.highlight ? "text-marker" : "text-paper hover:text-marker"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}

          <p className="mt-8 font-[family-name:var(--font-caveat)] text-xl text-paper/50">
            Licenciada en Educación y maestra
          </p>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
