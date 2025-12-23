import data from "@/app/data/db.json";
import FeaturedProductHeader from "./FeaturedProductHeader";
import FeaturedProductsList from "./FeaturedProductsList";

export default function FeaturedProducts() {
  return (
    <section className="px-4 md:px-10 py-10">
      <div className="flex justify-center w-full max-w-[1200px] mx-auto flex-col gap-8">
        <FeaturedProductHeader />
        <FeaturedProductsList products={data.products} />
      </div>
    </section>
  );
}
