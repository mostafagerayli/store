import ProductCard from "../../cart/ProductCart";
import { ProductTableItem } from "@/types/product";

type ProductsGridProps = {
  products: ProductTableItem[];
};

export default function ProductsGrid({
  products,
}: ProductsGridProps) {
  return (
    <div
      className="
        grid
        grid-cols-2
        gap-3
        md:grid-cols-3
        md:gap-4
        lg:grid-cols-3
        lg:gap-6
        2xl:grid-cols-4
      "
    >
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}