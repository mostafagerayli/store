import data from "@/app/data/db.json";
import CategoriesHeader from "./CategoriesHeader";
import CategoriesList from "./CategoriesList";

export default function PopularCategories() {
  return (
    <section className="bg-slate-50 px-4 py-10 md:px-10 shadow rounded-md ">
      <div className="mx-auto max-w-[1100px] flex flex-col gap-10">
        <CategoriesHeader />
        <CategoriesList categories={data.categories} />
      </div>
    </section>
  );
}
