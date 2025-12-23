"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { FiShoppingCart, FiUser, FiSearch, FiMenu } from "react-icons/fi";
import { GiPlantRoots } from "react-icons/gi";
import { useSelector } from "react-redux";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "About", href: "/about" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const  totalQuantity  = useSelector((state) => state.cart.totalQuantity);
  

  return (
    <header className="bg-white">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center gap-6">
        {/* Right: Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-extrabold text-base text-green-800 whitespace-nowrap"
        >
          <GiPlantRoots className="w-5 h-5" />
          Terrarium Store
        </Link>

        {/* Search */}
        <div className="flex-1 hidden md:flex ml-20">
          <div className="relative w-full max-w-md">
            <FiSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full rounded-full bg-gray-100 pr-10 pl-4 py-2 text-sm focus:outline-none"
            />
          </div>
        </div>
        {/* Center: Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-500 whitespace-nowrap font-bold">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`transition hover:text-black ${
                  active ? "text-black" : ""
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Left: Icons */}
        <div className="flex items-center gap-4 whitespace-nowrap hover:">
          <button
            className="relative"
            onClick={() => router.push("./shopingCart")}
          >
            <FiShoppingCart className="w-5 h-5" />
            
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                {totalQuantity}
              </span>
            
          </button>
          <FiUser className="w-5 h-5" />
        </div>
      </div>
    </header>
  );
}
