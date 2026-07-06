import ContantSection from "@/app/components/about/ContantSection";
import StorySection from "@/app/components/about/StorySection";
import Footer from "@/app/layout/Footer";
import Header from "@/app/layout/Header";
import HeroSectionAboat from "@/app/components/about/HiroSectionAbout";
import CraftsmanshipSection from "@/app/components/about/CraftsmanshipSection";

export default function AboutPage() {
  return (
    <div className="bg-white">
      <Header />
      <HeroSectionAboat/>
      <StorySection />
      <CraftsmanshipSection />
      <ContantSection />
      <Footer />
    </div>
  );
}
