import {
  FaTruckFast,
  FaShieldHeart,
  FaLeaf,
  FaMedal,
} from "react-icons/fa6";

const features = [
  {
    icon: <FaLeaf />,
    title: "تولید مستقیم از باغ",
    desc: "پسته تازه و مرغوب، مستقیم از باغ و بدون واسطه به دست شما می‌رسد.",
  },
  {
    icon: <FaMedal />,
    title: "تضمین کیفیت",
    desc: "انتخاب دقیق و کنترل کیفیت برای ارائه محصولی ممتاز.",
  },
  {
    icon: <FaShieldHeart />,
    title: "خرید امن",
    desc: "پرداخت امن و تجربه خریدی مطمئن و آسان.",
  },
  {
    icon: <FaTruckFast />,
    title: "ارسال سریع",
    desc: "بسته‌بندی حرفه‌ای و ارسال سریع به سراسر کشور.",
  },
];

export default function LuxuryPackaging() {
  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Heading */}
        <div className="mb-10 text-center md:mb-14">
          <span className="text-xs font-bold tracking-wide text-[#2f7d4a] uppercase sm:text-sm">
            چرا طلای سبز؟
          </span>

          <h2 className="mt-2 text-2xl font-black leading-tight text-[#0d2b24] sm:text-3xl md:mt-3 md:text-4xl">
            تجربه‌ای متفاوت از خرید پسته اصیل
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base md:mt-4">
            از باغ اختصاصی تا بسته‌بندی نهایی، تمام مراحل با دقت و استاندارد
            بالا انجام می‌شود تا بهترین کیفیت را تجربه کنید.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {features.map((item, index) => (
            <div
              key={index}
              className="
                group
                rounded-2xl
                border
                border-green-100
                bg-white
                p-4
                text-center
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#2f7d4a]
                hover:shadow-xl
                sm:rounded-3xl
                sm:p-6
              "
            >
              <div
                className="
                  mx-auto
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  bg-green-50
                  text-xl
                  text-[#2f7d4a]
                  transition-all
                  duration-300
                  group-hover:bg-[#0A2D24]
                  group-hover:text-white
                  sm:h-14
                  sm:w-14
                  sm:text-2xl
                "
              >
                {item.icon}
              </div>

              <h3 className="mt-3 text-sm font-black leading-6 text-[#0A2D24] sm:mt-5 sm:text-lg">
                {item.title}
              </h3>

              <p className="mt-2 text-xs leading-6 text-gray-500 sm:mt-3 sm:text-sm sm:leading-7">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}