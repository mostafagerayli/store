"use client";

import { useAuth } from "@/app/context/AuthContext";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavigationLink() {
  const { user } = useAuth();
  const pathname = usePathname();

  const navLinks = [
    { name: "خانه", href: "/" },
    { name: "محصولات", href: "/products" },
    { name: "درباره ما", href: "/about" },
    { name: "بلاگ", href: "/blog" },
    { name: "داشبورد", href: "/dashboard", adminOnly: true }, // فقط ادمین
  ];

  return (
    <nav className="hidden md:flex items-center gap-6 text-sm text-gray-500 dark:text-gray-300 font-bold">
      {navLinks.map((link) => {
        // فقط ادمین‌ها لینک داشبورد رو ببینند
        if (link.adminOnly && user?.role !== "admin") return null;

        const active = pathname === link.href;

        return (
          <Link
            key={link.name}
            href={link.href}
            className={`transition hover:text-green-600 dark:hover:text-green-400 ${
              active ? "text-black dark:text-green-400" : ""
            }`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}