"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import data from "@/app/data/db.json";

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const images = data.images;

  // اسلاید خودکار تصاویر
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="flex justify-center px-4 sm:px-6 md:px-10 py-8 md:py-12 lg:py-16">
      <div className="w-full max-w-7xl">
        <div className="relative overflow-hidden rounded-2xl min-h-[320px] sm:min-h-[480px] md:min-h-[600px] lg:min-h-[700px]">

          {/* Background Images */}
          {images.map((src, index) => (
            <Image
              key={src}
              src={src}
              alt="Lush green terrarium with moss and plants"
              fill
              priority={index === 0}
              className={`object-cover transition-opacity duration-1000 ${
                index === current ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />

          {/* Content */}
          <div className="relative flex flex-col items-center justify-center text-center px-4 sm:px-6 py-6 gap-6 sm:gap-8 min-h-[320px] sm:min-h-[480px] md:min-h-[600px] lg:min-h-[700px]">
            
            <div className="max-w-2xl space-y-4">
              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight drop-shadow-lg">
                Nature at the Heart of Your Home
              </h1>
              <p className="text-white/90 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed drop-shadow">
                Bring beauty, calm, and fresh air into your living space with handcrafted terrariums and unique plants.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/products"
                className="flex min-w-[140px] sm:min-w-[160px] h-12 items-center justify-center rounded-lg bg-green-500 px-4 sm:px-6 text-black text-sm sm:text-base font-bold transition hover:bg-green-400 hover:shadow-[0_0_20px_rgba(34,197,94,0.5)]"
              >
                View Products
              </Link>

              <Link
                href="/custom-order"
                className="flex min-w-[140px] sm:min-w-[160px] h-12 items-center justify-center rounded-lg bg-white/10 backdrop-blur-md px-4 sm:px-6 text-white border border-white/20 text-sm sm:text-base font-bold transition hover:bg-white/20"
              >
                Custom Order
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
