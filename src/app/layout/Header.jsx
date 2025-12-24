"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { FiShoppingCart, FiUser, FiSearch, FiMenu, FiX } from "react-icons/fi";
import { GiPlantRoots } from "react-icons/gi";
import { useSelector } from "react-redux";
import ThemeToggle from "../components/darkMode/ThemeToggle";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "About", href: "/about" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

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

        <ThemeToggle />

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

          {/* Hamburger Menu (Mobile & Tablet) */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setOpen(!open)}
          >
            {open ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Menu */}
      {open && (
        <div className="md:hidden bg-white px-4 pt-2 pb-4 shadow-md">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block py-2 text-sm font-bold transition hover:text-green-600 ${
                  active ? "text-green-700" : "text-gray-700"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
