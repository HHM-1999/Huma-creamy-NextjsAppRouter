import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/HomeContent/HeroSection";
// import IceHeroSection from "@/components/HomeContent/IceHeroSection";
// import Hero from "@/components/HomeContent/HeroSection";


export default function HomePage() {
  return (
    <>
      <Header />
      <main className="homepage-sections">
        {/* Home content */}
        <Hero />
        {/* <IceHeroSection /> */}
      </main>
      <Footer />
    </>
  );
}
