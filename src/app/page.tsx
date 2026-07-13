// import PopularCategories from "./components/home/categories/Categories";
import ClubSection from "./components/home/clubSection/ClubSection";
import FeaturesBotom from "./components/home/featured-botom/FeaturesBotom";
// import FeaturedProducts from "./components/home/featured-products/FeaturedProducts";
import HeroSection from "./components/home/heroSection/HeroSection";
import LatestBlogs from "./components/home/latestBlogs/LatestBlogs";
// import HeroSectioneEnd from "./components/home/heroSectionEnd/HeroSectioneEnd";
import LuxuryPackaging from "./components/home/luxuryPackaging/LuxuryPackaging";
import ClientLayout from "./layout/ClientLayout";

export default function Home() {
  return (
    <ClientLayout>
      <div className="dark:bg-green-950 bg-[#f7f5ef]">
        <HeroSection />
        {/* <PopularCategories /> */}
        {/* <FeaturedProducts /> */}
        <FeaturesBotom />
        <LuxuryPackaging />
        <LatestBlogs/>
        <ClubSection />
        {/* <HeroSectioneEnd /> */}
      </div>
    </ClientLayout>
  );
}
