"use client";

import Image from "next/image";
import Link from "next/link";
import heroImage from "../../../../../public/images/unnamed (1).jpg";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#032b1f]" />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,.4)_50%,rgba(0,0,0,.9)_100%)] z-10" />

      {/* Floating particles */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-1/4 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-yellow-400/20 blur-[120px]" />
        <div className="absolute top-[30%] left-[48%] h-3 w-3 rounded-full bg-yellow-300 animate-ping" />
        <div className="absolute top-[35%] left-[40%] h-2 w-2 rounded-full bg-yellow-200" />
        <div className="absolute top-[25%] left-[60%] h-2 w-2 rounded-full bg-yellow-200" />
      </div>

      {/* Main Image */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="relative w-[280px] sm:w-[380px] md:w-[500px] lg:w-[650px] aspect-square">
          <div className="absolute inset-0 bg-yellow-300/20 blur-[100px] rounded-full" />

          <Image
            src={heroImage}
            alt="Pistachio"
            fill
            priority
            className="object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.8)] animate-float"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-30 flex h-full flex-col items-center justify-center text-center px-6">
        <h1 className="mb-5 max-w-4xl text-white font-black leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          پسته فقط یک آجیل نیست
        </h1>

        <p className="mb-8 text-yellow-300 text-sm sm:text-base md:text-lg">
          روایت طعم، خاک و زمان
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/products"
            className="px-8 h-14 rounded-full bg-black/80 text-white font-bold flex items-center justify-center backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-black"
          >
            کشف کلکسیون
          </Link>

          <Link
            href="/custom-order"
            className="px-8 h-14 rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:bg-white/20"
          >
            سفارش اختصاصی
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 animate-bounce text-white/60">
          ↓
        </div>
      </div>
    </section>
  );
}