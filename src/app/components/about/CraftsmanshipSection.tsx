import Image from "next/image";

export default function CraftsmanshipSection() {
  return (
    <div>

    <section className="container mx-auto px-4 py-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="grid grid-cols-2 gap-4">
          <div className="relative h-60 rounded-2xl overflow-hidden">
            <Image
              src="/images/screen3.png"
              alt=""
              fill
              className="object-cover"
            />
          </div>

          <div className="relative h-60 rounded-2xl overflow-hidden">
            <Image
              src="/images/screen2.png"
              alt=""
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div>
          <span className="text-green-700">
            هنر انتخاب
          </span>

          <h2 className="text-4xl font-bold mt-3 mb-6">
            هنر انتخاب و فرآوری
          </h2>

          <p className="text-gray-600 leading-8 mb-6">
            توضیحات بخش فرآوری...
          </p>

          <ul className="space-y-4">
            <li>✓ انتخاب دستی</li>
            <li>✓ کنترل کیفیت</li>
            <li>✓ بسته‌بندی استاندارد</li>
          </ul>
        </div>
      </div>
    </section>
    </div>
  );
}