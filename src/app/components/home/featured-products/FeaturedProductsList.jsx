import ProductCard from "../../ProductCart"


function FeaturedProductsList({products}) {
  return (
           <div className="no-scrollbar -mx-4 flex gap-6 overflow-x-auto px-4 pb-4 pt-2 md:mx-0 md:px-0">
          {products.map((product, idx) => (
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

export default FeaturedProductsList