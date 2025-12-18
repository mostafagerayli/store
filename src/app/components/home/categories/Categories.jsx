import data from "@/app/data/db.json";
import CategoriesHeader from "./CategoriesHeader";
import CategoriesList from "./CategoriesList";

export default function PopularCategories() {
  return (
    <section className="bg-[#051001] px-4 py-10 md:px-10">
      <div className="mx-auto max-w-[1200px] flex flex-col gap-10">
        <CategoriesHeader />
        <CategoriesList categories={data.categories} />
      </div>
    </section>
  );
}
