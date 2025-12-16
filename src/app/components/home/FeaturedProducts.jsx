import Image from "next/image";
import { FaShoppingCart, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const products = [
  {
    title: "Royal Geometric Terrarium",
    price: 1200000,
    oldPrice: 1500000,
    badge: "20% Off",
    image: "/images/images1.jpg",
  },
  {
    title: "Forest Globe Terrarium",
    price: 850000,
    oldPrice: null,
    badge: null,
    image: "/images/images2.jpg",
  },
  {
    title: "Hexagonal Moss Frame",
    price: 1500000,
    oldPrice: null,
    badge: null,
    image: "/images/images3.jpg",
  },
  {
    title: "Hanging Kokedama",
    price: 450000,
    oldPrice: null,
    badge: "New",
    image: "/images/images1.jpg",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="px-4 md:px-10 py-10">
      <div className="flex justify-center w-full max-w-[1200px] mx-auto flex-col gap-8">
        
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-white text-3xl font-bold">Featured Products</h2>
          <div className="flex gap-2">
            <button className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-600 bg-[#051001] text-white hover:bg-gray-700 transition">
              <FaArrowLeft />
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-600 bg-[#051001] text-white hover:bg-gray-700 transition">
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll */}
        <div className="no-scrollbar -mx-4 flex gap-6 overflow-x-auto px-4 pb-4 pt-2 md:mx-0 md:px-0">
          {products.map((product, idx) => (
            <div
              key={idx}
              className="min-w-[280px] md:min-w-[300px] flex flex-col rounded-xl bg-[#0b1d07] p-4 shadow-lg transition-transform hover:-translate-y-1"
            >
              <div className="relative mb-4 aspect-[4/5] w-full overflow-hidden rounded-lg">
                {product.badge && (
                  <div className="absolute right-2 top-2 z-10 rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white">
                    {product.badge}
                  </div>
                )}
                <Image
                  src={product.image}
                  alt={product.title}
                  width={300}
                  height={375}
                  className="h-full w-full object-cover"
                />
              </div>

              <h3 className="text-white text-lg font-bold">{product.title}</h3>

              <div className="mt-2 flex items-center justify-between">
                <div className="flex flex-col">
                  {product.oldPrice && (
                    <span className="text-gray-400 text-sm line-through">
                      {product.oldPrice.toLocaleString()} Toman
                    </span>
                  )}
                  <span className="text-green-500 text-lg font-bold">
                    {product.price.toLocaleString()} Toman
                  </span>
                </div>

                <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500 text-black shadow-md transition hover:bg-white hover:text-black">
                  <FaShoppingCart />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
