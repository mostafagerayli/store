import SearchProducts from "./SerarchProducts";
import SortProducts from "./SortProducts";

export default function ProductsToolbar() {
  return (
    <section className="-mt-6 relative z-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl md:rounded-full shadow-lg p-3 flex flex-col md:flex-row items-stretch md:items-center gap-3">
          <button className="bg-[#0b5b3c] text-white px-4 md:px-6 py-2 rounded-xl md:rounded-full text-sm">
            دسته‌بندی
          </button>

          <SortProducts />
          <SearchProducts />
        </div>
      </div>
    </section>
  );
}
