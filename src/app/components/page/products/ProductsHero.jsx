import Image from "next/image";

export default function ProductsHero() {
  return (
    <section className="relative h-[220px] md:h-[280px] overflow-hidden">
      <Image
        src="/images/a_lush_sun_drenched_pistachio_orchard_in_kerman_iran._rows_of_mature_pistachio.png"
        alt="پسته"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[#0d4d2c]/70" />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 text-center">
        <h1 className="text-xl md:text-4xl font-bold mb-2 md:mb-4">
          فروشگاه محصولات ممتاز
        </h1>

        <p className="text-xs md:text-sm opacity-90">
          بهترین پسته‌های ایرانی با کیفیت صادراتی
        </p>
      </div>
    </section>
  );
}