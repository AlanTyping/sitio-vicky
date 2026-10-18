import { Suspense } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Biography from "./components/Biography";
import Services from "./components/Services";
import FreeGuide from "./components/FreeGuide";
import Ebook from "./components/Ebook";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import PaymentStatus from "./components/PaymentStatus";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Suspense fallback={null}>
        <PaymentStatus />
      </Suspense>
      <Navbar />

      <main className="flex-1">
        {/* El hero queda fijo y "Sobre mí" sube por encima */}
        <div className="relative">
          <Hero />
          <Biography />
        </div>
        <Services />
        <FreeGuide />
        <Ebook />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
