import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Description from "./components/Description";
import Payment from "./components/Payment";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        <Hero />
        <Description />
        <Payment />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
