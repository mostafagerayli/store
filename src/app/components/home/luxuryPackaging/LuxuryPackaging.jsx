
import Image from "next/image";
import { FaHandSparkles } from "react-icons/fa";
import { GiSparkles } from "react-icons/gi";

export default function LuxuryPackaging() {
  return (
    <section className="bg-[#ece9e3] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Content */}
          <div className="order-2 lg:order-1 text-center lg:text-right">

            <h2 className="text-[#0d2b24] font-black text-3xl md:text-4xl mb-6">
              لباسی از جنس شکوه
            </h2>

            <p className="text-gray-600 leading-8 max-w-xl mx-auto lg:mx-0">
              بسته‌بندی ما تنها یک جعبه نیست؛ روایتی از
              اصالت، هنر و احترام به محصولی ارزشمند است.
              طراحی مینیمال و متریال باکیفیت، تجربه‌ای
              ماندگار برای مخاطب خلق می‌کند.
            </p>

            <div className="mt-8 space-y-4">

              <div className="flex items-center justify-center lg:justify-start gap-3">
                <div className="w-7 h-7 rounded-full border border-amber-400 flex items-center justify-center">
                  <GiSparkles size={14} className="text-amber-500" />
                </div>

                <span className="text-[#0d2b24]">
                  کاغذ بافت‌دار چند لایه
                </span>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-3">
                <div className="w-7 h-7 rounded-full border border-amber-400 flex items-center justify-center">
                  <FaHandSparkles size={14} className="text-amber-500" />
                </div>

                <span className="text-[#0d2b24]">
                  محافظت ویژه برابر رطوبت
                </span>
              </div>

            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">

            <div
              className="
              relative
              overflow-hidden
              rounded-[32px]
              shadow-[0_25px_60px_rgba(0,0,0,0.08)]
              "
            >
              <Image
                src="/images/screen2.png"
                alt="Luxury Package"
                width={900}
                height={600}
                className="
                w-full
                h-[260px]
                sm:h-[340px]
                md:h-[420px]
                object-cover
                transition-all
                duration-700
                hover:scale-105
                "
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}