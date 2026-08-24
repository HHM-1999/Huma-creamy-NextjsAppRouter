import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/HomeContent/HeroSection";
import SignatureFlavors from "@/components/HomeContent/SignatureFlavors";
// import IceHeroSection from "@/components/HomeContent/IceHeroSection";
// import Hero from "@/components/HomeContent/HeroSection";


export default function HomePage() {
  return (
    <>
      <Header />
      <main className="homepage-sections">
        {/* Home content */}
        <Hero />
        {/* SignatureFlavors  */}
        <SignatureFlavors />
        {/* <IceHeroSection /> */}
      </main>
      <Footer />
    </>
  );
}
