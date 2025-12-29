import PopularCategories from "./components/home/categories/Categories";
import FeaturesBotom from "./components/home/featured-botom/FeaturesBotom";
import FeaturedProducts from "./components/home/featured-products/FeaturedProducts";
import HeroSection from "./components/home/heroSection/HeroSection";
import ClientLayout from "./layout/ClientLayout";

export default function Home() {
  return (
    <ClientLayout>
      <div className="dark:bg-green-950 bg-white">
        <HeroSection />
        <PopularCategories />
        <FeaturedProducts />
        <FeaturesBotom/>
      </div>
    </ClientLayout>
  );
}
