import Link from "next/link";

export default function ClubSection() {
  return (
    <section className="py-12 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        {/* CTA */}
        <div className="mx-auto max-w-5xl">
          <div
            className="
              overflow-hidden
              rounded-3xl
              bg-gradient-to-br
              from-[#013628]
              via-[#01291f]
              to-[#001b14]
              px-5
              py-8
              text-center
              shadow-[0_20px_60px_rgba(0,0,0,.18)]
              sm:px-8
              sm:py-10
              md:px-12
              md:py-14
            "
          >
            <span className="rounded-full bg-white/10 px-4 py-1 text-xs font-bold text-amber-300">
              باشگاه مشتریان
            </span>

            <h2 className="mt-4 text-2xl font-black leading-tight text-amber-400 sm:text-3xl md:text-4xl">
              به خانواده پسته پسته بپیوندید
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">
              با عضویت در باشگاه مشتریان، از تخفیف‌های اختصاصی، اطلاع‌رسانی
              محصولات جدید و پیشنهادهای ویژه بهره‌مند شوید و تجربه‌ای متفاوت از
              خرید محصولات اصیل را داشته باشید.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/register"
                className="
                  flex
                  h-12
                  w-full
                  items-center
                  justify-center
                  rounded-full
                  bg-amber-400
                  px-8
                  font-bold
                  text-[#01291f]
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:bg-amber-300
                  sm:w-auto
                "
              >
                عضویت در باشگاه
              </Link>

              <Link
                href="/about"
                className="
                  flex
                  h-12
                  w-full
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/20
                  px-8
                  font-medium
                  text-white
                  transition-all
                  duration-300
                  hover:bg-white/10
                  sm:w-auto
                "
              >
                درباره پسته پسته
              </Link>
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="mx-auto mt-16 max-w-3xl text-center md:mt-24">
          <div className="text-5xl font-black leading-none text-amber-400 md:text-7xl">
            ”
          </div>

          <blockquote
            className="
              mt-3
              text-lg
              font-black
              leading-9
              text-[#0b2a24]
              sm:text-2xl
              sm:leading-loose
              md:text-3xl
            "
          >
            در پسته پسته، هر دانه پسته حاصل سال‌ها مراقبت، تجربه و عشق به
            طبیعت است؛ محصولی اصیل که از باغ ما با احترام به دست شما می‌رسد.
          </blockquote>

          <div className="mx-auto mt-8 h-px w-20 bg-amber-400" />

          <p className="mt-4 text-sm font-medium text-[#0b2a24]/70">
            خانواده پسته پسته
          </p>
        </div>
      </div>
    </section>
  );
}