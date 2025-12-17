import { FaShoppingCart, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import data from "@/app/data/db.json";
import ProductCard from "../ProductCart";
import FeaturedProductHeader from "./FeaturedProductHeader";

export default function FeaturedProducts() {
  return (
    <section className="px-4 md:px-10 py-10">
      <div className="flex justify-center w-full max-w-[1200px] mx-auto flex-col gap-8">
        {/* Header */}
        <FeaturedProductHeader />

        {/* Horizontal Scroll */}
        <div className="no-scrollbar -mx-4 flex gap-6 overflow-x-auto px-4 pb-4 pt-2 md:mx-0 md:px-0">
          {data.products.map((product, idx) => (
            <ProductCard
              key={idx}
              title={product.title}
              description={product.description}
              price={product.price}
              oldPrice={product.oldPrice}
              badge={product.badge}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
