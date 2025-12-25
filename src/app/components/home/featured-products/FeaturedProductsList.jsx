import ProductCard from "../../cart/ProductCart";

function FeaturedProductsList({ products }) {
  return (
    <div className="w-full flex gap-4 overflow-x-auto px-2 sm:px-0 pb-4 snap-x snap-mandatory">
      {products.map((product) => (
        <div key={product.id} className="flex-shrink-0 snap-start">
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}

export default FeaturedProductsList;
