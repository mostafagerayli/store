import Image from "next/image";

export default function FeaturedPost() {
  return (
    <section className="grid gap-8 mt-14 lg:grid-cols-2">
      <div className="relative h-[350px]">
        <Image
          src="/images/screen2.png"
          alt=""
          fill
          className="object-cover rounded-3xl"
        />
      </div>

      <div className="flex flex-col justify-center">
        <span className="mb-3 text-primary">
          مقاله ویژه
        </span>

        <h2 className="mb-4 text-3xl font-bold">
          خواص شگفت انگیز پسته برای سلامت قلب
        </h2>

        <p className="mb-6 text-gray-600">
          پسته یکی از مغزهای پرخاصیت است که نقش مهمی در سلامت قلب و کاهش کلسترول دارد.
        </p>

        <button className="w-fit rounded-full bg-primary px-6 py-3 text-white">
          مطالعه مقاله
        </button>
      </div>
    </section>
  );
}