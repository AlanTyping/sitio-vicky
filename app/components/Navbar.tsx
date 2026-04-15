"use client";

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
    { href: "#descripcion", label: "Nosotros" },
    { href: "#ebook", label: "Ebook" },
    { href: "#pago", label: "Servicios" },
    { href: "#contacto", label: "Contacto" },
  ];

  return (
    <header className="absolute top-0 z-50 w-full bg-transparent">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">

        <div className="flex lg:flex-1">
          <a href="#" className="text-2xl font-black text-white">
            Vicky Aphalo
          </a>
        </div>

        <div className="flex lg:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? "✖" : "☰"}
          </button>
        </div>

        <div className="hidden lg:flex gap-x-10">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-white font-bold">
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      {/* 👇 FIX */}
      {mounted && isOpen && (
        <div className="lg:hidden bg-sky-500">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="block p-4 text-white">
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;