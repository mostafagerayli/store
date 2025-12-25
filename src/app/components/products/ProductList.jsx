import ProductListItem from "./ProductListItem";

function ProductList() {
  return (
    <div className="min-h-screen px-4 py- sm:py-12 md:py-1 text-black">
      <div className="w-full max-w-7xl mx-auto rounded-xl p-4 sm:p-6 md:p-12">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8">
          Products
        </h1>
        <ProductListItem />
      </div>
    </div>
  );
}

export default ProductList;
