import {
  FaTruckFast,
  FaShieldHeart,
  FaLeaf,
  FaMedal,
} from "react-icons/fa6";

const features = [
  {
    icon: <FaTruckFast />,
    title: "ارسال سریع",
    desc: "ارسال سفارش‌ها در کوتاه‌ترین زمان ممکن به سراسر کشور",
  },
  {
    icon: <FaLeaf />,
    title: "تازه و دست‌چین",
    desc: "پسته مرغوب مستقیم از باغ‌های ایران",
  },
  {
    icon: <FaMedal />,
    title: "تضمین کیفیت",
    desc: "انتخاب شده با استاندارد طلای سبز",
  },
  {
    icon: <FaShieldHeart />,
    title: "خرید امن",
    desc: "پرداخت امن و تجربه خرید مطمئن",
  },
];

export default function LuxuryPackaging() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8">

        <div className="mb-12 text-center">
          <span className="text-sm font-bold text-[#2f7d4a]">
            چرا طلای سبز؟
          </span>

          <h2 className="mt-3 text-3xl font-black text-[#0d2b24] md:text-4xl">
            تجربه‌ای متفاوت از خرید پسته
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-8 text-gray-600">
            از انتخاب محصول تا رسیدن به دست شما، تمام مراحل با دقت و کیفیت بالا انجام می‌شود.
          </p>
        </div>


        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {features.map((item,index)=>(
            <div
              key={index}
              className="
              group
              rounded-3xl
              border
              border-green-100
              bg-white
              p-6
              text-center
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-2
              hover:border-[#2f7d4a]
              hover:shadow-xl
              "
            >

              <div
                className="
                mx-auto
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-full
                bg-green-50
                text-[#2f7d4a]
                text-2xl
                transition
                group-hover:bg-[#0A2D24]
                group-hover:text-white
                "
              >
                {item.icon}
              </div>


              <h3 className="mt-5 text-lg font-black text-[#0A2D24]">
                {item.title}
              </h3>


              <p className="mt-3 text-sm leading-7 text-gray-500">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}