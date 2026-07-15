"use client";

import { useState } from "react";
import CategoryItem from "./CategoryItem";
import Modal from "../../modal/Modal";

export default function ProductsSidebar() {
  const [isWholesaleOpen, setIsWholesaleOpen] = useState(false);

  return (
    <>
      <aside className="lg:col-span-3 order-1 lg:order-none">
        <div className="bg-white rounded-2xl md:rounded-3xl p-5 md:p-6">
          <h3 className="font-bold text-[#0b5b3c] mb-4">دسته‌بندی</h3>

          <ul className="space-y-3 text-sm text-gray-600">
            <CategoryItem title="پسته اکبری" value="اکبری" />
            <CategoryItem title="پسته احمدآقایی" value="احمدآقایی" />
            <CategoryItem title="پسته سفید" value="سفید" />
            <CategoryItem title="پسته کله قوچی" value="کله قوچی" />

            <li
              onClick={() => setIsWholesaleOpen(true)}
              className="cursor-pointer hover:text-[#0b5b3c] transition font-medium"
            >
              خرید عمده
            </li>
          </ul>
        </div>

        <div className="bg-[#0b5b3c] text-white rounded-2xl md:rounded-3xl p-5 md:p-6 mt-4 md:mt-6">
          <h4 className="font-bold mb-2">محصولات ویژه</h4>
          <p className="text-sm opacity-90">
            بهترین محصولات صادراتی با کیفیت تضمینی
          </p>
        </div>
      </aside>

      <Modal
        isOpen={isWholesaleOpen}
        onClose={() => setIsWholesaleOpen(false)}
        size="md"
      >
        <div className="text-center">
          {/* Title */}
          <h2 className="text-2xl font-extrabold text-[#0b5b3c] mb-3">
            خرید عمده پسته
          </h2>

          {/* Description */}
          <p className="text-sm leading-7 text-gray-600 mb-6">
            جهت خرید عمده، اطلاع از شرایط فروش، با کارشناسان فروش ما تماس حاصل
            فرمایید.
          </p>


          {/* Contact Box */}
          <div className="rounded-2xl bg-[#0b5b3c] p-5 text-white">
            <p className="text-sm opacity-90 mb-3">
              جهت خرید عمده و دریافت اطلاعات بیشتر
            </p>

            <a
              href="tel:09123456789"
              className="block text-xl font-bold tracking-wide hover:text-green-200 transition"
            >
              09395236615
              <br />
              09156424436
            </a>

            <p className="text-xs mt-3 opacity-80">
              کارشناسان فروش پاسخگوی شما هستند
            </p>
          </div>

          {/* Action */}
          <button
            onClick={() => setIsWholesaleOpen(false)}
            className="mt-6 w-full rounded-xl bg-gray-100 py-3 text-gray-700 font-bold transition hover:bg-gray-200"
          >
            بستن
          </button>
        </div>
      </Modal>
    </>
  );
}
