"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
    <header className="relative top-0 z-50 w-full border-b border-slate-100 bg-white lg:absolute lg:border-0 lg:bg-transparent lg:py-8">
      <nav className="relative z-50 mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:p-6 lg:px-8">

        <div className="flex lg:flex-1">
          <Link href="/" className="text-2xl font-black tracking-tight text-[#315b3a] lg:text-4xl lg:text-white">
            Vicky Aphalo
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            onClick={toggleMenu}
            className="rounded-lg p-2.5 text-[#315b3a] transition-all hover:bg-[#315b3a]/10 active:scale-95"
            aria-label="Menu"
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            )}
          </button>
        </div>

        <div className="hidden lg:flex gap-x-12 items-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-bold transition-all text-base tracking-wide ${link.highlight
                ? "text-white hover:bg-gray-200/5 px-7 py-3 rounded-lg shadow-lg border "
                : "text-white hover:text-sky-300"
                }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Mobile Menu - Improved with blur and animations */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-[#16351f]/85 backdrop-blur-xl transition-all duration-300 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setIsOpen(false)}
      >
        <div
          className={`flex flex-col items-center justify-center h-full gap-8 transition-transform duration-300 ${isOpen ? "scale-100" : "scale-95"
            }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-2xl font-black transition-colors ${link.highlight
                ? "text-[#c9e0bf]"
                : "text-white hover:text-[#c9e0bf]"
                }`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
