"use client";

import Image from "next/image";
import { useState } from "react";

export default function FeaturedPost() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="grid gap-8 mt-14 lg:grid-cols-2 items-center">

      {/* Image */}
      <div className="relative h-[350px]">
        <Image
          src="/images/screen2.png"
          alt="خواص پسته"
          fill
          className="object-cover rounded-3xl"
        />
      </div>



      {/* Content */}
      <div className="flex flex-col justify-center">

        <span className="mb-3 text-green-700 font-bold">
          مقاله ویژه طلای سبز
        </span>


        <h2 className="mb-4 text-3xl font-black text-[#0A2D24]">
          پسته؛ گنجینه‌ای طبیعی برای سلامتی و انرژی بدن
        </h2>


        <p className="text-gray-600 leading-8">
          پسته یکی از ارزشمندترین مغزهای ایرانی است که علاوه بر
          طعم بی‌نظیر، سرشار از مواد مغذی، ویتامین‌ها و ترکیبات
          مفید برای بدن است. این محصول طبیعی از گذشته تا امروز
          جایگاه ویژه‌ای در تغذیه مردم داشته است.
        </p>



        {showMore && (

          <div className="mt-5 space-y-5 text-gray-600 leading-8">


            <p>
              پسته سرشار از چربی‌های مفید، پروتئین، فیبر و
              آنتی‌اکسیدان‌هاست که می‌تواند نقش مهمی در حفظ سلامت
              بدن داشته باشد. مصرف متعادل پسته به سلامت قلب،
              افزایش انرژی و بهبود عملکرد بدن کمک می‌کند.
            </p>



            <h3 className="text-xl font-bold text-green-700">
              تأثیر پسته بر سلامت قلب
            </h3>


            <p>
              وجود چربی‌های غیراشباع در پسته باعث شده این محصول
              یکی از انتخاب‌های مناسب برای داشتن یک رژیم غذایی سالم
              باشد. همچنین مواد معدنی موجود در پسته به عملکرد بهتر
              بدن کمک می‌کنند.
            </p>



            <h3 className="text-xl font-bold text-green-700">
              چرا پسته ایرانی محبوب است؟
            </h3>


            <p>
              شرایط آب‌وهوایی مناسب، خاک حاصلخیز و تجربه چندین ساله
              کشاورزان ایرانی باعث شده پسته ایران یکی از محصولات
              شناخته‌شده و ارزشمند در بازار جهانی باشد.
            </p>



            <h3 className="text-xl font-bold text-green-700">
              کیفیت متفاوت طلای سبز
            </h3>


            <p>
              در طلای سبز، ما محصول را از باغ‌های اختصاصی و
              کشاورزان منتخب تهیه می‌کنیم. کنترل کیفیت، انتخاب دقیق
              محصول و بسته‌بندی حرفه‌ای باعث می‌شود پسته‌ای تازه،
              سالم و اصیل به دست مشتری برسد.
            </p>


          </div>

        )}



        <button
          onClick={() => setShowMore(!showMore)}
          className="
          mt-6
          w-fit
          rounded-full
          bg-green-700
          px-7
          py-3
          text-white
          font-bold
          transition
          hover:bg-green-800
          "
        >
          {showMore ? "بستن مقاله" : "ادامه مقاله"}
        </button>


      </div>

    </section>
  );
}