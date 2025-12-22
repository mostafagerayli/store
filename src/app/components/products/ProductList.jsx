import ProductListChild from "./ProductListChild";

function ProductList() {
  return (
    <div className="min-h-screen text-white px-4 py-12">
      <div className="w-full bg-[#0b1d07] rounded-xl shadow-lg p-6 sm:p-12">
        <h1 className="text-2xl md:text-3xl font-bold mb-8 text-stone-100">
          Products
        </h1>
        <ProductListChild />
      </div>
    </div>
  );
}

export default ProductList;
