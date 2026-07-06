"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

type GiftItem = {
  id: number;
  title: string;
  desc: string;
  price: string;
  image: string;
};

const gifts: GiftItem[] = [
  {
    id: 1,
    title: "پک ویژه زعفران و پسته",
    desc: "هدیه‌ای لوکس برای مناسبت‌های خاص",
    price: "۳,۹۰۰,۰۰۰ تومان",
    image: "/images/screen2.png",
  },
  {
    id: 2,
    title: "پک اقتصادی کادویی",
    desc: "مناسب هدیه‌های سازمانی",
    price: "۲,۴۰۰,۰۰۰ تومان",
    image:
      "/images/luxury_e_commerce_category_image_for_luxury_gift_boxes._a_beautiful_premium.png",
  },
  {
    id: 3,
    title: "پک اقتصادی کادویی",
    desc: "مناسب هدیه",
    price: "۲,۴۰۰,۰۰۰ تومان",
    image: "/images/screen3.png",
  },
];

export default function GiftSlider() {
  return (
    <div className="mx-auto w-full max-w-md">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        className="rounded-3xl"
      >
        {gifts.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="overflow-hidden rounded-3xl bg-white shadow-lg">
              <div className="relative h-64">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-4 text-center">
                <h3 className="text-sm font-bold text-[#0b5b3c]">
                  {item.title}
                </h3>

                <p className="mt-1 text-xs text-gray-500">
                  {item.desc}
                </p>

                <p className="mt-2 font-bold text-[#c69b2c]">
                  {item.price}
                </p>

                <button
                  type="button"
                  className="mt-4 rounded-full bg-[#0b5b3c] px-5 py-2 text-xs text-white transition hover:scale-105"
                >
                  مشاهده جزئیات
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}