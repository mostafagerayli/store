import Link from "next/link";

export default function ClubSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">

        {/* CTA */}
        <div className="max-w-4xl mx-auto">
          <div
            className="
            rounded-[24px]
            bg-[#01291f]
            px-6
            py-10
            md:px-12
            md:py-12
            text-center
            shadow-[0_25px_60px_rgba(0,0,0,.12)]
          "
          >
            <h2 className="text-amber-400 font-black text-2xl md:text-3xl">
              باشگاه طلا سبز
            </h2>

            <p className="mt-4 text-white/80 leading-7 max-w-2xl mx-auto text-sm md:text-base">
              با عضویت در باشگاه مشتریان ما از تخفیف‌های ویژه،
              پیشنهادهای اختصاصی و دسترسی زودتر به محصولات جدید
              بهره‌مند شوید.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">

              <Link
                href="/register"
                className="
                h-12
                px-8
                rounded-full
                bg-amber-400
                text-[#01291f]
                font-bold
                flex
                items-center
                justify-center
                transition
                hover:scale-105
              "
              >
                عضویت در باشگاه
              </Link>

              <Link
                href="/about"
                className="
                h-12
                px-8
                rounded-full
                border
                border-amber-400/30
                text-white
                flex
                items-center
                justify-center
                transition
                hover:bg-white/5
              "
              >
                آشنایی بیشتر با باشگاه
              </Link>

            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="max-w-3xl mx-auto text-center mt-24 md:mt-32">

          <div className="text-amber-400 text-6xl font-black leading-none">
            ”
          </div>

          <blockquote
            className="
            mt-4
            text-[#0b2a24]
            font-black
            leading-loose
            text-xl
            sm:text-2xl
            md:text-3xl
          "
          >
            ما در طلا سبز معتقدیم که هر دانه پسته،
            قطعه‌ای از زمان است که با احترام و
            وقار به جهان عرضه شده.
          </blockquote>

          <p className="mt-8 text-sm text-[#0b2a24]/70">
            باشگاه طلا سبز
          </p>

        </div>

      </div>
    </section>
  );
}