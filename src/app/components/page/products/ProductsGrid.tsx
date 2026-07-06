import ProductCard from "../../cart/ProductCart";
import { ProductTableItem } from "@/types/product";

type ProductsGridProps = {
  products: ProductTableItem[];
};

export default function ProductsGrid({
  products,
}: ProductsGridProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 xl:grid-cols-3">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}