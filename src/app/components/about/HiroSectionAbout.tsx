import Image from "next/image";
import Link from "next/link";

export default function HeroSectionAboat() {
  return (
    <section className="relative h-[600px]">
      <Image
        src="/images/a_lush_sun_drenched_pistachio_orchard_in_kerman_iran._rows_of_mature_pistachio.png"
        alt="About Hero"
        fill
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            سفری از دل باغ‌های پسته ایران
          </h1>

          <p className="mb-8">
            ارائه بهترین محصولات ارگانیک و دست‌چین شده
          </p>

          <div className="flex gap-4 justify-center">
            <Link href='/products' className="bg-green-700 px-6 py-3 rounded-full">
              محصولات
            </Link>

            <Link href='/blog' className="bg-white text-black px-6 py-3 rounded-full">
              بیشتر
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}