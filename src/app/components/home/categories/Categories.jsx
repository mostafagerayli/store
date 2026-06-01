import Image from "next/image";

export default function PopularCategories() {
  return (
<section className="bg-[#F7F5F2] py-16 md:py-24 overflow-hidden">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

      {/* Images */}
      <div className="relative order-2 lg:order-1">

        <div className="relative overflow-hidden rounded-[32px] shadow-2xl">
          <Image
            src="/images/luxury_vertical_background_for_a_login_screen._close_up_artistic_shot_of.png"
            alt="Pistachio Garden"
            width={900}
            height={700}
            className="w-full h-[280px] sm:h-[400px] md:h-[500px] object-cover"
          />
        </div>

        {/* Floating Card */}
        <div
          className="
          relative
          lg:absolute
          mt-6
          lg:mt-0
          lg:-bottom-12
          lg:right-10
          w-[220px]
          sm:w-[260px]
          h-[220px]
          sm:h-[260px]
          mx-auto
          lg:mx-0
          rounded-[28px]
          backdrop-blur-xl
          bg-white/60
          border border-white/30
          shadow-[0_20px_60px_rgba(0,0,0,0.15)]
          flex items-center justify-center
          "
        >
          <div className="text-center px-6">
            <span className="text-4xl font-black text-amber-500">
              ۱۲۰
            </span>

            <p className="mt-3 text-[#0E2F28] font-bold">
              سال قصه در دل خاک
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="order-1 lg:order-2 text-center lg:text-right">

        <span className="text-amber-500 text-sm font-medium">
          فصل اول : ریشه
        </span>

        <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-[#0E2F28] leading-tight">
          از دل خاک رفسنجان
        </h2>

        <p className="mt-6 text-gray-600 leading-8 max-w-xl mx-auto lg:mx-0">
          جایی که آفتاب، سکوت و زمان کنار هم نشسته‌اند تا
          درختانی پدید آیند که نسل‌ها روایتگر طعم،
          اصالت و کیفیت باشند.
        </p>

        <div className="mt-8">
          <button className="px-8 py-4 rounded-full bg-[#0E2F28] text-white font-bold hover:scale-105 transition">
            روایت را بخوان
          </button>
        </div>

      </div>

    </div>
  </div>
</section>
  );
}
