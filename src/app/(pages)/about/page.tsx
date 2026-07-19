import Footer from "@/app/layout/Footer";
import Header from "@/app/layout/Header";
import CraftsmanshipSection from "@/app/components/about/CraftsmanshipSection";
import TrustSection from "@/app/components/about/TrustSection";

export default async function AboutPage() {
  return (
    <div className="bg-[#fdfdf9]">
      <Header />
      <CraftsmanshipSection />
      <TrustSection />
      <Footer />
    </div>
  );
}
