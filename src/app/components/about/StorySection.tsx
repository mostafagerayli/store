import Image from "next/image";
import React from "react";

function StorySection() {
  return (
    <div className="bg-slate-50">
      <section className="container mx-auto px-4 py-24 ">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-green-700">داستان ما</span>

            <h2 className="text-4xl font-bold mt-3 mb-6">
              یک قرن تلاش برای کیفیتی اصیل
            </h2>

            <p className="text-gray-600 leading-8">
              متن درباره برند و تاریخچه...
            </p>
          </div>

          <div className="relative">
            <div className="relative h-[450px] rounded-3xl overflow-hidden">
              <Image
                src="/images/imagesss.png"
                alt="family"
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute -bottom-6 left-6 bg-white rounded-2xl shadow-lg p-5">
              <h4 className="text-2xl font-bold text-green-700">+۳۰</h4>

              <p>سال تجربه</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default StorySection;
