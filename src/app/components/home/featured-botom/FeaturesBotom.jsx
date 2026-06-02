import Image from "next/image";

const products = [
  {
    id: 1,
    title: "پک ویژه پسته",
    price: "از ۸۰۰,۰۰۰ تومان",
    image: "/images/luxury_professional_food_photography_of_premium_iranian_pistachios_and_mixed.png",
  },
  {
    id: 2,
    title: "مغز پسته لوکس",
    price: "از ۶۱۰,۰۰۰ تومان",
    image: "/images/luxury_e_commerce_category_image_for_luxury_gift_boxes._a_beautiful_premium.png",
    featured: true,
  },
  {
    id: 3,
    title: "پسته اکبری صادراتی",
    price: "از ۷۲۰,۰۰۰ تومان",
    image: "/images/luxury_vertical_background_for_a_login_screen._close_up_artistic_shot_of.png",
  },
];

export default function FeaturesBottom() {
  return (
    <section className="bg-[#f8f7f4] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-[#0a2d24] text-3xl md:text-4xl font-black">
            محصولات برگزیده
          </h2>

          <div className="w-14 h-[3px] bg-amber-500 rounded-full mx-auto mt-4" />
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 items-start">

          {products.map((product) => (
            <article
              key={product.id}
              className={`
                group
                ${product.featured ? "md:translate-y-14" : ""}
              `}
            >
              {/* Card */}
              <div
                className="
                relative
                overflow-hidden
                rounded-[34px]
                shadow-[0_20px_50px_rgba(0,0,0,.08)]
                bg-white
                "
              >
                {/* Badge */}
                <div
                  className="
                  absolute
                  top-4
                  right-4
                  z-20
                  rounded-full
                  bg-white/90
                  backdrop-blur-md
                  px-3
                  py-1
                  text-xs
                  font-bold
                  text-gray-700
                  "
                >
                  ★ ۴.۹
                </div>

                <div className="relative h-[420px] md:h-[460px] lg:h-[520px]">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="
                      object-cover
                      transition
                      duration-700
                      group-hover:scale-110
                    "
                  />
                </div>
              </div>

              {/* Info */}
              <div className="pt-5 text-center">
                <h3 className="text-[#0a2d24] font-bold text-lg">
                  {product.title}
                </h3>

                <p className="mt-2 text-amber-600 font-medium text-sm">
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
