import data from "@/app/data/db.json";
import FeaturedProductHeader from "./FeaturedProductHeader";
import FeaturedProductsList from "./FeaturedProductsList";

export default function FeaturedProducts() {
  return (
    <section className="px-4 sm:px-6 md:px-10 py-8 md:py-12">
      <div className="flex flex-col gap-6 md:gap-8 max-w-[1200px] mx-auto w-full">
        <FeaturedProductHeader />
        <FeaturedProductsList products={data.products} />
      </div>
    </section>
  );
}
