import ProductCard from "../ProductCart"
import data from "@/app/data/db.json";


function ProductListChild() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10">
    {data.products.map((product,idx) => (
                <ProductCard
                  key={idx}
                  title={product.title}
                  description={product.description}
                  price={product.price}
                  oldPrice={product.oldPrice}
                  badge={product.badge}
                  image={product.image}
                />
                ))}
    </div>
  )
}

export default ProductListChild