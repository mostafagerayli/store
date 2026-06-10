"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const gifts = [
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
    image: "/images/luxury_e_commerce_category_image_for_luxury_gift_boxes._a_beautiful_premium.png",
  },
    {
    id: 3,
    title: "پک اقتصادی کادویی",
    desc: "مناسب هدیه ",
    price: "۲,۴۰۰,۰۰۰ تومان",
    image: "/images/screen3.png",
  },
];

export default function GiftSlider() {
  return (
    <div className="w-full max-w-md mx-auto">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        className="rounded-3xl"
      >
        {gifts.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg">

              {/* Image */}
              <div className="relative h-64">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-4 text-center">
                <h3 className="font-bold text-[#0b5b3c] text-sm">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-xs mt-1">
                  {item.desc}
                </p>

                <p className="text-[#c69b2c] font-bold mt-2">
                  {item.price}
                </p>

                <button className="mt-4 bg-[#0b5b3c] text-white px-5 py-2 rounded-full text-xs hover:scale-105 transition">
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