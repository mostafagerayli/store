import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    title: "Open Terrariums",
    description: "Perfect for succulents and cacti",
    image: "/images/images1.jpg",
  },
  {
    title: "Closed Terrariums",
    description: "Self-sustaining humid ecosystems",
    image: "/images/images2.jpg",
  },
  {
    title: "Moss Walls",
    description: "Preserved moss wall decorations",
    image: "/images/images3.jpg",
  },
  {
    title: "DIY Kits",
    description: "Create nature with your own hands",
    image: "/images/images1.jpg",
  },
];

export default function PopularCategories() {
  return (
    <section className="bg-[#051001] px-4 py-10 md:px-10">
      <div className="mx-auto max-w-[1200px] flex flex-col gap-10">
        
        {/* Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-2">
            <h2 className="text-white text-3xl font-bold leading-tight">
              Popular Categories
            </h2>
            <p className="text-gray-300 text-base">
              Choose your favorite product
            </p>
          </div>

          <Link
            href="/categories"
            className="flex items-center gap-2 text-green-500 font-bold transition-colors hover:text-white"
          >
            <span>View all categories</span>
            <span className="material-symbols-outlined text-sm">
              arrow_forward_ios
            </span>
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((item) => (
            <div
              key={item.title}
              className="group flex cursor-pointer flex-col gap-4 rounded-xl bg-[#0b1d07] p-3 transition-all hover:bg-[#12310e] hover:-translate-y-1"
            >
              <div className="aspect-[4/3] w-full overflow-hidden rounded-lg bg-[#12310e]">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="px-1 pb-2">
                <h3 className="text-white text-lg font-bold">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm mt-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
