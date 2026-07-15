import Image from "next/image";

export default function CraftsmanshipSection() {
  return (
    <div>
      <section className="container mx-auto px-4 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-60 rounded-2xl overflow-hidden">
              <Image
                src="/images/screen3.png"
                alt=""
                fill
                className="object-cover"
              />
            </div>

            <div className="relative h-60 rounded-2xl overflow-hidden">
              <Image
                src="/images/screen2.png"
                alt=""
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <span className="text-green-700">از باغ اختصاصی تا خانه شما</span>

            <h2 className="text-4xl font-bold mt-3 mb-6 leading-relaxed">
              محصولی اصیل، مستقیم از طبیعت
            </h2>

            <p className="text-gray-600 leading-8 mb-6 text-justify">
              در <strong className="text-gray-800">پسته</strong>، ما فقط یک
              فروشنده نیستیم؛ ما تولیدکننده‌ای هستیم که تمام مراحل تولید محصول
              را از باغ‌های اختصاصی خودمان تا رسیدن به دست شما با دقت و وسواس
              مدیریت می‌کنیم.
              <br />
              <br />
              محصولات ما مستقیماً از باغ‌های خودمان و کشاورزان منتخب تهیه
              می‌شوند؛ بدون واسطه، با حفظ کیفیت و تازگی واقعی محصول. ما باور
              داریم بهترین طعم، از بهترین زمین و مراقبت درست آغاز می‌شود.
              <br />
              <br />
              تمام محصولات پسته پسته با رعایت استانداردهای بهداشتی، به‌صورت
              کاملاً طبیعی و ارگانیک تولید شده و پس از کنترل دقیق کیفیت، در
              بسته‌بندی‌های شیک، تمیز و حرفه‌ای آماده ارسال می‌شوند تا تجربه‌ای
              متفاوت از خرید یک محصول اصیل را برای شما رقم بزنیم.
            </p>

            <ul className="space-y-4 text-gray-700">
              <li>✓ تولید مستقیم از باغ‌های اختصاصی پسته پسته</li>
              <li>✓ خرید بدون واسطه و ارتباط مستقیم با تولیدکننده</li>
              <li>✓ محصولات کاملاً طبیعی و ارگانیک با بالاترین کیفیت</li>
              <li>✓ بسته‌بندی حرفه‌ای، بهداشتی و مناسب هدیه</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
