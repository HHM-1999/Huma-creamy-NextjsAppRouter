import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/HomeContent/HeroSection";


export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* Home content */}
        <Hero />
      </main>
      <Footer />
    </>
  );
}
