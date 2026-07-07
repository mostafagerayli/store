import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function HeroSectioneEnd() {
  return (
    <section className="relative h-[400px] overflow-hidden md:h-[500px]">
      {/* Background Image */}
      <Image
        src="/images/screen3.png"
        alt="Hero"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
        <h1 className="mb-6 text-lg font-bold text-white md:text-3xl">
          همین امروز بخشی از این رویا باشید
        </h1>

        <Link
          href="/products"
          className="rounded-full bg-[#d4aa2a] px-8 py-3 text-sm font-semibold text-black transition-colors hover:bg-[#c39b20] md:px-10 md:text-base"
        >
           بازدید فروشگاه
        </Link>
      </div>
    </section>
  )
}
