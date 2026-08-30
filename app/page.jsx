import Footer from "@/components/Footer";
import Header from "@/components/Header";
import AboutUs from "@/components/HomeContent/AboutUs";
import BackToTop from "@/components/HomeContent/BackToTop";
import BestSellers from "@/components/HomeContent/BestSellers";
import Contact from "@/components/HomeContent/Contact";
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
        {/* About Us  */}
        <AboutUs />
        {/* Best seller */}
        <BestSellers />
        {/* Contact */}
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
