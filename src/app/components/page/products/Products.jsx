import Image from "next/image";
import { FaChevronDown, FaSearch } from "react-icons/fa";
import ProductCard from "../../cart/ProductCart";
import { getProducts } from "@/app/lib/getProducts";
import Pagination from "../../pagination/Pagination";

export default async function Products({searchParams}) {
    const params = await searchParams;
    const limit = 6;
    const page = Number(params?.page) || 1;
    const { products, total ,error} = await getProducts(page, limit);
    const totalPages = Math.ceil(total / limit);
  
    if (error) {
      return (
        <div className="p-6 bg-red-100 text-red-700 rounded-xl">
          ❌ خطا در دریافت محصولات از سرور
        </div>
      );
    }    

  return (
    <main className="bg-[#f7f5ef] min-h-screen">
      {/* Hero */}
      <section className="relative h-[280px] overflow-hidden">
        <Image
          src="/images/a_lush_sun_drenched_pistachio_orchard_in_kerman_iran._rows_of_mature_pistachio.png"
          alt="پسته"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[#0d4d2c]/70" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl font-bold mb-4">فروشگاه محصولات ممتاز</h1>

          <p className="text-sm opacity-90">
            بهترین پسته‌های ایرانی با کیفیت صادراتی
          </p>
        </div>
      </section>

      {/* Search */}
      <section className="-mt-6 relative z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-full shadow-lg p-3 flex items-center gap-3">
            <button className="bg-[#0b5b3c] text-white px-6 py-2 rounded-full text-sm">
              دسته‌بندی
            </button>

            <button className="flex items-center gap-2 border rounded-full px-4 py-2 text-sm">
              مرتب‌سازی
              <FaChevronDown size={16} />
            </button>

            <div className="flex-1 relative">
              <FaSearch
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />

              <input
                type="text"
                placeholder="جستجوی محصولات"
                className="w-full pr-10 outline-none text-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="max-w-6xl mx-auto px-4 mt-12">
        <div className="grid grid-cols-12 gap-8">
          {/* Sidebar */}
          <aside className="col-span-3">
            <div className="bg-white rounded-3xl p-6">
              <h3 className="font-bold text-[#0b5b3c] mb-4">دسته‌بندی</h3>

              <ul className="space-y-3 text-sm text-gray-600">
                <li>پسته اکبری</li>
                <li>پسته احمدآقایی</li>
                <li>پسته فندقی</li>
                <li>پسته کله قوچی</li>
              </ul>
            </div>

            <div className="bg-[#0b5b3c] text-white rounded-3xl p-6 mt-6">
              <h4 className="font-bold mb-2">محصولات ویژه</h4>

              <p className="text-sm opacity-90">
                بهترین محصولات صادراتی با کیفیت تضمینی
              </p>
            </div>
          </aside>

          {/* Products */}
          <div className="col-span-9">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-[#0b5b3c]">
                محصولات منتخب
              </h2>

              <button className="text-sm text-[#c69b2c]">مشاهده همه</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
        <Pagination page={page} totalPages={totalPages} basePath="/products" />
          </div>
        </div>
      </section>
    </main>
  );
}
