import Image from "next/image";
import { FiPhone, FiMapPin } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

import Footer from "@/app/layout/Footer";
import Header from "@/app/layout/Header";

export default function ContactPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#fdfdf9] px-4 py-12">
        {/* Hero */}
        <section className="mx-auto max-w-5xl mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#0b5b3c]">
            ارتباط با ما
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-gray-600 leading-8">
            برای مشاوره خرید و دریافت اطلاعات بیشتر، از طریق راه‌های ارتباطی زیر
            با ما در تماس باشید.
          </p>
        </section>

        {/* Contact Cards */}
        <section className="mx-auto grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-3">
          {/* Phone */}
          <a
            href="tel:09123456789"
            className="group rounded-3xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0b5b3c]/10">
              <FiPhone className="text-2xl text-[#0b5b3c]" />
            </div>

            <h3 className="mb-2 font-bold text-gray-800">تماس با ما</h3>

            <p className="text-sm text-gray-500">09395236615 <br />09156424436</p>

            <p className="mt-3 text-xs text-gray-400">
              پاسخگویی جهت سفارش و مشاوره
            </p>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/peste__peste"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-3xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="mb-5 flex h-14 و-14 w-14 items-center justify-center rounded-2xl bg-[#0b5b3c]/10">
              <FaInstagram className="text-2xl text-[#0b5b3c]" />
            </div>

            <h3 className="mb-2 font-bold text-gray-800">اینستاگرام</h3>

            <p className="text-sm text-gray-500">@pestepeste</p>

            <p className="mt-3 text-xs text-gray-400">
              مشاهده محصولات و جدیدترین اخبار
            </p>
          </a>

          {/* Address */}
          <div className="rounded-3xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0b5b3c]/10">
              <FiMapPin className="text-2xl text-[#0b5b3c]" />
            </div>

            <h3 className="mb-2 font-bold text-gray-800">آدرس</h3>

            <p className="text-sm text-gray-500">خراسان رضوی</p>

            <p className="mt-3 text-xs text-gray-400">مرکز تولید و عرضه پسته</p>
          </div>
        </section>

        {/* Brand Banner */}
        {/* Brand Banner */}
        <section className="mx-auto mt-8 max-w-5xl">
          <div className="relative overflow-hidden rounded-3xl bg-[#0b5b3c] text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center">
              {/* Image Side */}
              <div className="relative h-64 md:h-70 order-1 md:order-2">
                <Image
                  src="/images/logo1.png"
                  alt="پسته پسته"
                  fill
                  className="object-contain md:scale-150"
                />
              </div>

              {/* Text Side */}
              <div className="order-2 md:order-1 px-6 py-8 md:px-10 text-center md:text-right">
                <h2 className="mb-4 text-2xl font-extrabold md:text-3xl">
                  پسته پسته
                </h2>

                <p className="max-w-md text-sm leading-8 text-white/90 md:text-base">
                  جهت دریافت اطلاعات محصولات، مشاوره خرید و پیگیری درخواست‌ها،
                  کارشناسان ما آماده پاسخگویی به شما هستند.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
