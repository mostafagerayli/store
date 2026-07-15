import Footer from "@/app/layout/Footer";
import Header from "@/app/layout/Header";
// import HeroSectionAboat from "@/app/components/about/HiroSectionAbout";
import CraftsmanshipSection from "@/app/components/about/CraftsmanshipSection";
import TrustSection from "@/app/components/about/TrustSection";

export default function AboutPage() {
  return (
    <div className="bg-[#fdfdf9]">
      <Header />
      <CraftsmanshipSection />
      <TrustSection />
      <Footer />
    </div>
  );
}
