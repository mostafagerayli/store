import { getProducts } from "@/app/lib/getProducts";
import Image from "next/image";
import Link from "next/link";

export default async function FeaturesBottom() {
  const {products} = await getProducts()
const featuredProducts = products
  .filter((product) =>
    ["پسته اکبری", "پسته کله قوچی", "پسته احمدآقایی"].includes(product.name)
  )
  .slice(0, 3);
  
  return (
    <section className="overflow-hidden bg-[#f8f7f4] py-20">
      <div className="mx-auto max-w-7xl px-4">
        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-black text-[#0a2d24] md:text-4xl">
            محصولات برگزیده
          </h2>

          <div className="mx-auto mt-4 h-[3px] w-14 rounded-full bg-amber-500" />
        </div>

        {/* Products */}
<div className="grid grid-cols-1 items-start gap-8 md:grid-cols-3 lg:gap-10">
  {featuredProducts.map((product) => (
    <Link
      key={product.id}
      href={`/products/${product.slug}`}
      className="group block md:translate-y-14"
    >
      <article>
        <div className="relative overflow-hidden rounded-[34px] bg-white shadow-[0_20px_50px_rgba(0,0,0,.08)]">
          <div className="absolute top-4 right-4 z-20 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-gray-700 backdrop-blur-md">
            ★ ۴.۹
          </div>

          <div className="relative h-[420px] md:h-[460px] lg:h-[520px]">
            <Image
              src={product.image_url ?? "/images/images1.jpg"}
              alt={product.name}
              fill
              sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
              className="object-cover transition duration-700 group-hover:scale-110"
            />
          </div>
        </div>

        <div className="pt-5 text-center">
          <h3 className="text-lg font-bold text-[#0a2d24]">
            {product.name}
          </h3>

          <p className="mt-2 text-sm font-medium text-amber-600">
            {product.price.toLocaleString()}
          </p>
        </div>
      </article>
    </Link>
  ))}
</div>
      </div>
    </section>
  );
}
