import ClearFiltersButton from "./ClearFiltersButton";

export default function ProductsHeader() {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 md:mb-8 gap-2">
      <h2 className="text-xl md:text-2xl font-bold text-[#0b5b3c]">
        محصولات منتخب
      </h2>

      <ClearFiltersButton />
    </div>
  );
}