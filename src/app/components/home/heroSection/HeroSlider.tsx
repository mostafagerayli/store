"use client";

import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

// تصاویر
import hero from "../../../../../public/images/hero.webp";
import hero1 from "../../../../../public/images/hero1.webp";
import brandBannerDesktop from "../../../../../public/images/banerDesktap.webp"; // عکس افقی دسکتاپ
import brandBannerMobile from "../../../../../public/images/banerMobile.webp"; // عکس عمودی موبایل

const slides = [
  {
    id: 1,
    title: "پسته پسته",
    subtitle: "طعم اصالت، هدیه‌ی طبیعت",
    description: "پسته تازه، دست‌چین و درجه یک؛ مستقیم از باغ‌های ایران.",
    imageDesktop: brandBannerDesktop,
    imageMobile: brandBannerMobile,
    button: "مشاهده محصولات",
    href: "/products",
    isBrandBanner: true,
  },
  {
    id: 2,
    title: "جشنواره نوروز",
    subtitle: "تا 20% تخفیف",
    description: "پسته تازه و دست‌چین، مستقیم از باغ‌های ایران تا سفره شما.",
    imageDesktop: hero1,
    imageMobile: hero1,
    button: "مشاهده محصولات",
    href: "/products",
    isBrandBanner: false,
  },
  {
    id: 3,
    title: "جشنواره شب یلدا",
    subtitle: "تا 40% تخفیف",
    description: "طولانی‌ترین شب سال را با طعم اصیل پسته جشن بگیرید.",
    imageDesktop: hero,
    imageMobile: hero,
    button: "مشاهده محصولات",
    href: "/products",
    isBrandBanner: false,
  },
];

export default function HeroSlider() {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation, EffectFade]}
      effect="fade"
      speed={1200}
      loop
      pagination={{ clickable: true }}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      /* تغییرات اصلی برای فول اسکرین شدن در موبایل و حذف rounded در موبایل */
      className="heroSwiper mx-auto mt-0 mb-8 md:mt-6 h-[480px] sm:h-[520px] md:h-[500px] lg:h-[560px] w-full max-w-7xl overflow-hidden rounded-none md:rounded-2xl lg:rounded-[25px] shadow-none md:shadow-xl"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          {/* حذف rounded در موبایل */}
          <section className="relative h-full w-full overflow-hidden rounded-none md:rounded-3xl">
            {/* تصویر دسکتاپ (فقط در نمایشگرهای md به بالا) */}
            <div className="hidden md:block absolute inset-0 w-full h-full">
              <Image
                src={slide.imageDesktop}
                alt={slide.title}
                fill
                priority
                className="object-cover object-center"
              />
            </div>

            {/* تصویر موبایل (فقط در نمایشگرهای کوچک) */}
            <div className="block md:hidden absolute inset-0 w-full h-full">
              <Image
                src={slide.imageMobile}
                alt={slide.title}
                fill
                priority
                className="object-cover object-center"
              />
            </div>

            {/* اورلی تاریک‌کننده فقط برای اسلایدهای غیر برند */}
            {!slide.isBrandBanner && (
              <>
                <div className="absolute inset-0 bg-white/5" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#032b1f]/75 via-[#032b1f]/30 to-transparent z-10" />
              </>
            )}

            {/* محتوای متنی روی اسلاید (فقط برای اسلایدهای غیر برند) */}
            {!slide.isBrandBanner && (
              <div className="relative z-20 mx-auto flex h-full max-w-7xl items-center px-5 sm:px-8 lg:px-14">
                <div className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl text-white">
                  <span className="mb-3 inline-flex items-center rounded-full border border-yellow-400/40 bg-yellow-400/10 px-3 py-1 text-[11px] font-medium text-yellow-300 backdrop-blur sm:px-4 sm:py-2 sm:text-sm">
                    🌿 پسته پسته
                  </span>

                  <h1 className="mb-3 text-2xl font-black leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,.6)] sm:text-3xl md:text-5xl lg:text-6xl">
                    {slide.title}
                  </h1>

                  <h2 className="mb-3 text-sm font-semibold text-yellow-300 drop-shadow sm:text-lg md:text-xl">
                    {slide.subtitle}
                  </h2>

                  <p className="mb-6 max-w-md text-xs leading-6 text-white/95 drop-shadow sm:text-sm sm:leading-7 md:text-base">
                    {slide.description}
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <Link
                      href={slide.href}
                      className="inline-flex h-10 items-center justify-center rounded-full bg-yellow-400 px-5 text-sm font-bold text-black transition duration-300 hover:scale-105 hover:bg-yellow-300 sm:h-11 sm:px-6 md:h-12 md:px-8"
                    >
                      {slide.button}
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </section>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}