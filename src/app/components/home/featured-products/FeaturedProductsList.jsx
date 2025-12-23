import ProductCard from "../../ProductCart";

function FeaturedProductsList({ products }) {
  return (
    <div className="w-full mx-4 flex gap-2 overflow-x-auto px-4 pb-4 pt-2 md:mx-0 md:px-0">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default FeaturedProductsList;
