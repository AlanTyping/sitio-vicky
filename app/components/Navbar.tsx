"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { href: "#biografia", label: "Sobre mí" },
    { href: "#guia-gratuita", label: "Guía gratuita", highlight: true },
    { href: "#ebook", label: "Ebook" },
    { href: "#contacto", label: "Contacto" },
  ];

  return (
    <header className="absolute top-0 z-50 w-full bg-transparent py-4">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">

        <div className="flex lg:flex-1">
          <Link href="/" className="text-2xl font-black text-white">
            Vicky Aphalo
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button 
            onClick={toggleMenu} 
            className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Menu"
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            )}
          </button>
        </div>

        <div className="hidden lg:flex gap-x-10 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              className={`font-bold transition-all text-sm tracking-wide ${
                link.highlight 
                  ? "bg-amber-500 hover:bg-amber-400 px-5 py-2.5 rounded-full shadow-lg shadow-amber-500/20 text-slate-900" 
                  : "text-white hover:text-sky-300"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Mobile Menu - Improved with blur and animations */}
      {mounted && (
        <div 
          className={`lg:hidden fixed inset-0 z-40 bg-slate-900/60 backdrop-blur-xl transition-all duration-300 ${
            isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setIsOpen(false)}
        >
          <div 
            className={`flex flex-col items-center justify-center h-full gap-8 transition-transform duration-300 ${
              isOpen ? "scale-100" : "scale-95"
            }`}
          >
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                className={`text-2xl font-black transition-colors ${
                  link.highlight 
                    ? "text-amber-400" 
                    : "text-white hover:text-sky-300"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;