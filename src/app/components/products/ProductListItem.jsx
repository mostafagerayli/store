import { pool } from "@/app/lib/db";
import ProductCard from "../cart/ProductCart";

async function ProductListItem() {
    //get products from database With query
    const result = await pool.query(
      "SELECT * FROM products ORDER BY created_at DESC",
    );
    const products = result.rows;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductListItem;
