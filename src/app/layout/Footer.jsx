import {
  FaEnvelope,
  FaInstagram,
  FaTelegramPlane,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#033220] text-white pt-12 pb-8">

      <div className="max-w-6xl mx-auto px-4">

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* برند */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold">🥜 پسته‌چی</h3>

            <p className="text-white/80 text-sm leading-7">
              فروشگاه تخصصی پسته ایرانی با کیفیت صادراتی.
              بهترین پسته اکبری، احمدآقایی و فندقی را مستقیم از باغ تا خانه شما می‌رسانیم.
            </p>

            <div className="flex gap-4 mt-2">
              <FaInstagram className="hover:text-yellow-300 cursor-pointer transition" />
              <FaTelegramPlane className="hover:text-yellow-300 cursor-pointer transition" />
              <FaEnvelope className="hover:text-yellow-300 cursor-pointer transition" />
            </div>
          </div>

          {/* دسترسی سریع */}
          <div className="flex flex-col gap-3">
            <h4 className="font-bold">دسترسی سریع</h4>

            <Link href="/" className="text-white/80 hover:text-yellow-300 text-sm">
              خانه
            </Link>
            <Link href="/products" className="text-white/80 hover:text-yellow-300 text-sm">
              محصولات
            </Link>
            <Link href="/about" className="text-white/80 hover:text-yellow-300 text-sm">
              درباره ما
            </Link>
            <Link href="/contact" className="text-white/80 hover:text-yellow-300 text-sm">
              تماس با ما
            </Link>
          </div>

          {/* دسته‌بندی */}
          <div className="flex flex-col gap-3">
            <h4 className="font-bold">دسته‌بندی پسته</h4>

            <span className="text-white/80 text-sm">پسته اکبری</span>
            <span className="text-white/80 text-sm">پسته احمدآقایی</span>
            <span className="text-white/80 text-sm">پسته فندقی</span>
            <span className="text-white/80 text-sm">پسته کله‌قوچی</span>
          </div>

          {/* تماس */}
          <div className="flex flex-col gap-3">
            <h4 className="font-bold">تماس با ما</h4>

            <div className="flex items-center gap-2 text-white/80 text-sm">
              <FaMapMarkerAlt />
              <span>تهران، خیابان ولیعصر</span>
            </div>

            <div className="flex items-center gap-2 text-white/80 text-sm">
              <FaPhone />
              <span dir="ltr">021 - 8888 1234</span>
            </div>

            <div className="flex items-center gap-2 text-white/80 text-sm">
              <FaEnvelope />
              <span>info@pestechi.ir</span>
            </div>
          </div>
        </div>

        {/* پایین فوتر */}
        <div className="border-t border-white/20 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70">

          <p>© 1403 پسته‌چی - همه حقوق محفوظ است</p>

        </div>

      </div>
    </footer>
  );
}