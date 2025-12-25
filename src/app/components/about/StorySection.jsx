import Image from 'next/image'
import React from 'react'

function StorySection() {
  return (
          <section className="max-w-7xl mx-auto px-4 py-12 sm:py-16 grid gap-8 md:grid-cols-2 items-center">
        <div className="grid grid-cols-2 gap-4">
          <Image src="/images/images2.jpg" alt="Terrarium 1" width={300} height={300} className="rounded-xl object-cover" />
          <Image src="/images/images1.jpg" alt="Terrarium 2" width={300} height={300} className="rounded-xl object-cover" />
          <Image src="/images/images3.jpg" alt="Terrarium 3" width={300} height={300} className="rounded-xl object-cover col-span-2" />
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-green-600 font-bold text-sm uppercase">About Us</h2>
          <h1 className="text-2xl sm:text-3xl font-bold">The Story of Terrarium Shop</h1>
          <p className="text-gray-700 leading-relaxed">
            Since 2019, we started as a small home-based store and through persistent effort and love for nature, we created a unique experience in the world of plants...
          </p>
        </div>
      </section>
  )
}

export default StorySection