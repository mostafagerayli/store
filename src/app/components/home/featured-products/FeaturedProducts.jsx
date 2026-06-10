import Image from "next/image";
import { FaChartLine, FaShieldAlt } from "react-icons/fa";

export default function FeaturedProducts() {
  return (
    <div className="bg-[#032e1f] min-h-screen py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* نقشه طلایی ایران - با next/image */}

          <div className="space-y-10">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-yellow-300 via-amber-300 to-yellow-400 bg-clip-text text-transparent">
              خاستگاه طلا
            </h1>

            <p className="text-lg leading-relaxed text-gray-200 max-w-lg">
              ایران , مهد پسته جهان , ما در جغرافیایی ریشه داریمکه افتاب و خاکش,
              طعمی بی رقیب را خلق کرده است . هر دانه پسته چی , سفیری از فرهنگ و
              اصالت این مرز و بوم است
            </p>

            {/* دو کارت */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className=" p-6 rounded-2xl transition-all group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 flex items-center justify-center text-yellow-400 group-hover:scale-110 transition-transform">
                    <FaChartLine className="text-2xl" />
                  </div>
                  <h3 className="text-xl font-semibold text-yellow-300">
                    اقلیم کویری
                  </h3>
                </div>
                <p className="text-gray-300 text-[15px] leading-relaxed">
                  تحلیل دمای ایده ال برای رشد مغز.
                </p>
              </div>

              <div className=" p-6 rounded-2xl transition-all group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-2xl flex items-center justify-center text-yellow-400 group-hover:scale-110 transition-transform">
                    <FaShieldAlt className="text-2xl" />
                  </div>
                  <h3 className="text-xl font-semibold text-yellow-300">
                    ابیاری سنتی
                  </h3>
                </div>
                <p className="text-gray-300 text-[15px] leading-relaxed">
                  حفظ مواد معدنی و روغن طبیعی
                </p>
              </div>
            </div>
          </div>
          {/* محتوای سمت راست */}


                    <div className="flex justify-center lg:justify-end">
            <div className="relative map-container">
              <Image
                src="/images/screen.png" // ← عکس را اینجا قرار بده
                alt="نقشه طلایی ایران - خاستگاه طلا"
                width={520}
                height={420}
                className="rounded-2xl"
                priority
                style={{
                  filter:
                    "brightness(1.12) contrast(1.18) sepia(0.35) hue-rotate(-12deg) saturate(1.45)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
