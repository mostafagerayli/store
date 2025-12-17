import Image from "next/image";
import Link from "next/link";
import data from "@/app/data/db.json";
import CategoriesHeader from "./CategoriesHeader";
import CategoryCard from "../CategoriesCard";

export default function PopularCategories() {
  return (
    <section className="bg-[#051001] px-4 py-10 md:px-10">
      <div className="mx-auto max-w-[1200px] flex flex-col gap-10">
        <CategoriesHeader />

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.categories.map((item) => (
            <CategoryCard
              key={item.title}
              title={item.title}
              description={item.description}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
