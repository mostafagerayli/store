"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { FiShoppingCart, FiUser, FiSearch, FiMenu, FiX } from "react-icons/fi";
import { GiPlantRoots } from "react-icons/gi";
import { useSelector } from "react-redux";
import ThemeToggle from "../components/darkMode/ThemeToggle";
import { IoMdLogOut } from "react-icons/io";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "About", href: "/about" },
  { name: "Dashboard", href: "/dashboard" },
];

export default function Header() {
  const [open, setOpen] = useState();
  const pathname = usePathname();
  const router = useRouter();
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const isAdmin = false;

async function handleLogout() {
  try {
    const res = await fetch("/api/logout", {
      method: "POST",
      credentials: "include", // مهم برای ارسال cookie
    });

    if (res.ok) {
      router.push("/login"); // بعد از logout هدایت
    } else {
      const result = await res.json();
      console.error("Logout failed:", result);
    }
  } catch (err) {
    console.error("Logout error:", err);
  }
}

  return (
    <header className="bg-white dark:bg-gray-900 border-b">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center gap-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-extrabold text-base text-green-800 dark:text-green-400 whitespace-nowrap"
        >
          <GiPlantRoots className="w-5 h-5" />
          Terrarium Store
        </Link>

        {/* Search */}
        <div className="flex-1 hidden md:flex ml-20">
          <div className="relative w-full max-w-md">
            <FiSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full rounded-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white pr-10 pl-4 py-2 text-sm focus:outline-none placeholder-gray-400 dark:placeholder-gray-500"
            />
          </div>
        </div>

        <ThemeToggle />

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap font-bold">
          {navLinks.map((link) => {
            if (link.name === "Dashboard" && !isAdmin) return null; //شرط برای داشبورد
            const active = pathname === link.href; // اکتیو کردن لینک ها
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`transition hover:text-green-600 dark:hover:text-green-400 ${
                  active ? "text-black dark:text-green-400" : ""
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-4 whitespace-nowrap">
          <button
            className="relative"
            onClick={() => router.push("/shopingCart")}
          >
            <FiShoppingCart className="w-5 h-5 text-gray-800 dark:text-white" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
              {totalQuantity}
            </span>
          </button>
          <button className="relative" onClick={() => router.push("/login")}>
            <FiUser className="w-5 h-5 text-gray-800 dark:text-white" />
          </button>
          <button className="relative" onClick={handleLogout}>
            <IoMdLogOut className="w-5 h-5 text-gray-800 dark:text-white" />
          </button>

          {/* Hamburger Menu */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <FiX className="w-6 h-6 text-gray-800 dark:text-white" />
            ) : (
              <FiMenu className="w-6 h-6 text-gray-800 dark:text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-4 pt-2 pb-4 shadow-md">
          {navLinks.map((link) => {
            if (link.name === "Dashboard" && !isAdmin) return null;
            const active = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block py-2 text-sm font-bold transition hover:text-green-600 dark:hover:text-green-400 ${
                  active
                    ? "text-green-700 dark:text-green-400"
                    : "text-gray-700 dark:text-gray-300"
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
