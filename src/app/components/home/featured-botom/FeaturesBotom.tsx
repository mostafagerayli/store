import Link from "next/link";
import { getProducts } from "@/app/lib/getProducts";
import FeaturesBottomSlider from "./FeaturesBottomSlider";

export default async function FeaturesBottom() {
  const { products } = await getProducts();

  const featuredProducts = products;

  return (
    <section className="py-14">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Title */}
          <div>
            <h2 className="text-2xl font-black text-[#0A2D24] sm:text-3xl lg:text-4xl dark:text-white">
              پرفروش‌ترین محصولات
            </h2>

            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              محبوب‌ترین محصولات فروشگاه طلای سبز
            </p>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 self-start sm:self-auto">
            <Link
              href="/products"
              className="rounded-full border border-[#0A2D24] px-4 py-2 text-xs font-bold text-[#0A2D24] transition hover:bg-[#0A2D24] hover:text-white sm:px-5 sm:py-2.5 sm:text-sm dark:border-green-500 dark:text-green-400"
            >
              مشاهده همه
            </Link>
          </div>
        </div>
        <FeaturesBottomSlider products={featuredProducts} />
      </div>
    </section>
  );
}
