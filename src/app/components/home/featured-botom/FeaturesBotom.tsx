import Image from "next/image";

type FeaturedProduct = {
  id: number;
  title: string;
  price: string;
  image: string;
  featured?: boolean;
};

const products: FeaturedProduct[] = [
  {
    id: 1,
    title: "پک ویژه پسته",
    price: "از ۸۰۰,۰۰۰ تومان",
    image:
      "/images/luxury_professional_food_photography_of_premium_iranian_pistachios_and_mixed.png",
  },
  {
    id: 2,
    title: "مغز پسته لوکس",
    price: "از ۶۱۰,۰۰۰ تومان",
    image:
      "/images/luxury_e_commerce_category_image_for_luxury_gift_boxes._a_beautiful_premium.png",
    featured: true,
  },
  {
    id: 3,
    title: "پسته اکبری صادراتی",
    price: "از ۷۲۰,۰۰۰ تومان",
    image:
      "/images/luxury_vertical_background_for_a_login_screen._close_up_artistic_shot_of.png",
  },
];

export default function FeaturesBottom() {
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
          {products.map((product) => (
            <article
              key={product.id}
              className={`group ${
                product.featured ? "md:translate-y-14" : ""
              }`}
            >
              <div className="relative overflow-hidden rounded-[34px] bg-white shadow-[0_20px_50px_rgba(0,0,0,.08)]">
                <div className="absolute top-4 right-4 z-20 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-gray-700 backdrop-blur-md">
                  ★ ۴.۹
                </div>

                <div className="relative h-[420px] md:h-[460px] lg:h-[520px]">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>
              </div>

              <div className="pt-5 text-center">
                <h3 className="text-lg font-bold text-[#0a2d24]">
                  {product.title}
                </h3>

                <p className="mt-2 text-sm font-medium text-amber-600">
                  {product.price}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}