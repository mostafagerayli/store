import { FaEnvelope, FaInstagram, FaTelegramPlane, FaPhone, FaMapMarkerAlt, FaMailBulk } from "react-icons/fa";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" bg-white pt-10 pb-8 text-gray-300">
      <div className="flex justify-center px-4 md:px-10">
        <div className="w-full max-w-[1200px] flex flex-col gap-12">
          
          {/* Top Grid */}
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">

            {/* Brand Column */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-2 text-black">
                <FaMapMarkerAlt className="text-green-500 text-2xl" />
                <h3 className="text-xl font-bold">Terrarium Shop</h3>
              </div>
              <p className="text-gray-800 text-sm leading-relaxed">
                Providing the highest quality terrariums, moss walls, and unique decorative plants. Bringing nature beautifully into your home.
              </p>
              <div className="flex gap-4 text-gray-800">
                <a href="#" className="hover:text-green-800 transition-colors">
                  <FaEnvelope size={20} />
                </a>
                <a href="#" className="hover:text-green-800 transition-colors">
                  <FaInstagram size={20} />
                </a>
                <a href="#" className="hover:text-green-800 transition-colors">
                  <FaTelegramPlane size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col gap-4">
              <h4 className="text-white font-bold">Quick Links</h4>
              <Link href="#" className="text-gray-800 text-sm hover:text-green-500 transition-colors">About Us</Link>
              <Link href="#" className="text-gray-800 text-sm hover:text-green-500 transition-colors">Blog</Link>
              <Link href="#" className="text-gray-800 text-sm hover:text-green-500 transition-colors">FAQ</Link>
              <Link href="#" className="text-gray-800 text-sm hover:text-green-500 transition-colors">Terms & Conditions</Link>
            </div>

            {/* Categories */}
            <div className="flex flex-col gap-4">
              <h4 className="text-white font-bold">Products</h4>
              <Link href="#" className="text-gray-800 text-sm hover:text-green-500 transition-colors">Ready Terrariums</Link>
              <Link href="#" className="text-gray-800 text-sm hover:text-green-500 transition-colors">Moss Walls</Link>
              <Link href="#" className="text-gray-800 text-sm hover:text-green-500 transition-colors">DIY Kits</Link>
              <Link href="#" className="text-gray-800 text-sm hover:text-green-500 transition-colors">Indoor Plants</Link>
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-4">
              <h4 className="text-white font-bold">Contact Us</h4>
              <div className="flex items-center gap-3 text-gray-800 text-sm">
                <FaMapMarkerAlt className="text-green-500 text-lg" />
                <span>Tehran, Valiasr St., above Saee Park</span>
              </div>
              <div className="flex items-center gap-3 text-gray-800 text-sm">
                <FaPhone className="text-green-500 text-lg" />
                <span dir="ltr">021 - 8888 1234</span>
              </div>
              <div className="flex items-center gap-3 text-gray-800 text-sm">
                <FaMailBulk className="text-green-500 text-lg" />
                <span>info@terrarium-shop.ir</span>
              </div>
            </div>

          </div>

          {/* Bottom Row */}
          <div className="flex flex-col items-center justify-between gap-4 border-t border-[#12310e] pt-8 md:flex-row text-center">
            <p className="text-gray-800 text-sm">© 1403 All rights reserved.</p>
            <div className="flex gap-4">
              <span className="h-8 w-12 rounded bg-green-500"></span>
              <span className="h-8 w-12 rounded bg-green-500"></span>
              <span className="h-8 w-12 rounded bg-green-500"></span>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
