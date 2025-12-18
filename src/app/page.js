import PopularCategories from "./components/home/categories/Categories";
import FeaturedProducts from "./components/home/featured-products/FeaturedProducts";
import HeroSection from "./components/home/HeroSection";
import ClientLayout from "./layout/ClientLayout";

export default function Home() {
  return (
    <ClientLayout>
      <div>
        <HeroSection />
        <PopularCategories />
        <FeaturedProducts />
      </div>
    </ClientLayout>
  );
}
