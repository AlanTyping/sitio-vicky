import { Suspense } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Description from "./components/Description";
import Ebook from "./components/Ebook";
import Payment from "./components/Payment";
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
        <Hero />
        <Description />
        <Ebook />
        <Payment />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
