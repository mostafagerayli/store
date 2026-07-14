import Image from "next/image";
import { FaBoxOpen, FaSeedling, FaTruck } from "react-icons/fa";

function TrustSection() {
  const features = [
    {
      icon: <FaSeedling />,
      title: "محصولات کاملاً ارگانیک",
      desc: "تولید طبیعی با حفظ کیفیت، تازگی و اصالت محصول",
    },
    {
      icon: <FaTruck />,
      title: "خرید مستقیم از کشاورز",
      desc: "بدون واسطه، مستقیم از باغ و تولیدکننده به مشتری",
    },
    {
      icon: <FaBoxOpen />,
      title: "بسته‌بندی حرفه‌ای",
      desc: "بسته‌بندی بهداشتی، شیک و مناسب برای هدیه",
    },
  ];

  return (
    <section className="bg-slate-50">
      <div className="container mx-auto px-4 py-16">


        <div className="grid lg:grid-cols-2 gap-12 items-center">


          {/* Text */}
          <div className="order-2 lg:order-1 text-center lg:text-right">

            <span className="text-green-700 font-semibold">
              چرا طلای سبز؟
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-gray-800">
              طعم واقعی طبیعت، مستقیم از باغ ما
            </h2>


            <p className="leading-8 text-gray-600 text-sm md:text-base text-justify">

              <strong className="text-gray-800">
                طلای سبز 
              </strong>
              با تکیه بر باغ‌های اختصاصی و همکاری مستقیم با کشاورزان 
              محصولاتی اصیل، سالم و باکیفیت را بدون واسطه به دست شما می‌رساند.

              <br />
              <br />

              ما تمام مراحل تولید، برداشت، انتخاب و بسته‌بندی را با دقت
              کنترل می‌کنیم تا محصولی کاملاً طبیعی و ارگانیک با حفظ تازگی
              و ارزش غذایی به مشتری ارائه شود.

              <br />
              <br />

              هدف ما ایجاد یک تجربه متفاوت از خرید است؛ محصولی که از دل
              طبیعت، با زحمت کشاورز و با عشق به کیفیت آماده شده و مستقیم
              به خانه شما می‌رسد.

            </p>

          </div>



          {/* Features */}
          <div className="order-1 lg:order-2 grid grid-cols-1 sm:grid-cols-3 gap-5">

            {features.map((item, index) => (

              <div
                key={index}
                className="
                bg-white
                rounded-2xl
                p-6
                text-center
                shadow-sm
                hover:shadow-xl
                transition-all
                duration-300
                "
              >

                <div
                  className="
                  w-16
                  h-16
                  mx-auto
                  flex
                  items-center
                  justify-center
                  rounded-full
                  bg-green-100
                  text-green-700
                  text-3xl
                  mb-5
                  "
                >
                  {item.icon}
                </div>


                <h4 className="font-bold text-gray-800 text-lg">
                  {item.title}
                </h4>


                <p className="text-sm text-gray-500 mt-3 leading-6">
                  {item.desc}
                </p>

              </div>

            ))}

          </div>

        </div>



        {/* Trust Logos */}
        <div
          className="
          mt-14
          flex
          flex-wrap
          justify-center
          items-center
          gap-6
          "
        >

          <div
            className="
            bg-white
            rounded-xl
            p-4
            shadow-sm
            hover:shadow-md
            transition
            "
          >

            <Image
              src="/images/Enamad1.jpg"
              width={90}
              height={90}
              alt="نماد اعتماد الکترونیکی"
              className="object-contain"
            />

          </div>



          <div
            className="
            bg-white
            rounded-xl
            p-4
            shadow-sm
            hover:shadow-md
            transition
            "
          >

            <Image
              src="/images/Enamad3.jpg"
              width={90}
              height={90}
              alt="مجوز کسب و کار"
              className="object-contain"
            />

          </div>


        </div>


      </div>
    </section>
  );
}

export default TrustSection;