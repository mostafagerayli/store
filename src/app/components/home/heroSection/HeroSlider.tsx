"use client";

import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import hero from "../../../../../public/images/hero.jpg";
import hero1 from "../../../../../public/images/hero1.jpg";
import brandBanner from "../../../../../public/images/unnamed (1).jpg";

const slides = [
  {
    title: "طلای سبز",
    subtitle: "طعم اصالت، هدیه‌ی طبیعت",
    description: "پسته تازه، دست‌چین و درجه یک؛ مستقیم از باغ‌های ایران.",
    image: brandBanner,
    button: "مشاهده محصولات",
    href: "/products",
  },
  {
    title: "جشنواره نوروز",
    subtitle: "تا 20% تخفیف",
    description: "پسته تازه و دست‌چین، مستقیم از باغ‌های ایران تا سفره شما.",
    image: hero1,
    button: "مشاهده محصولات",
    href: "/products",
  },
  {
    title: "جشنواره شب یلدا",
    subtitle: "تا 40% تخفیف",
    description: "طولانی‌ترین شب سال را با طعم اصیل پسته جشن بگیرید.",
    image: hero,
    button: "مشاهده محصولات",
    href: "/products",
  },
];

export default function HeroSlider() {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation, EffectFade]}
      effect="fade"
      speed={1200}
      loop
      navigation
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      className="heroSwiper mx-auto mt-6 mb-8 h-[340px] sm:h-[420px] md:h-[500px] lg:h-[560px] max-w-7xl overflow-hidden rounded-2xl lg:rounded-[25px] shadow-xl"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <section className="relative h-full overflow-hidden rounded-3xl">
            {/* Background */}
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority
              className="object-cover object-center"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-white/5" />

            <div className="absolute inset-0 bg-gradient-to-r from-[#032b1f]/55 via-[#032b1f]/20 to-transparent" />
            {/* Glow */}
            <div className="absolute left-20 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-yellow-300/10 blur-[150px]" />

            {/* Content */}
            <div className="relative z-20 mx-auto flex h-full max-w-7xl items-center px-5 sm:px-8 lg:px-14">
              <div className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl text-white">
                <span className="mb-3 inline-flex items-center rounded-full border border-yellow-400/40 bg-yellow-400/10 px-3 py-1 text-[11px] font-medium text-yellow-300 backdrop-blur sm:px-4 sm:py-2 sm:text-sm">
                  🌿 طلای سبز
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
          </section>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
