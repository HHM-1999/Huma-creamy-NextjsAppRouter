import Footer from "@/components/Footer";
import Header from "@/components/Header";
import IceHeroSection from "@/components/HomeContent/IceHeroSection";
// import Hero from "@/components/HomeContent/HeroSection";


export default function HomePage() {
  return (
    <>
      <Header />
      <main className="container">
        {/* Home content */}
        {/* <Hero /> */}
        <IceHeroSection />
      </main>
      <Footer />
    </>
  );
}
