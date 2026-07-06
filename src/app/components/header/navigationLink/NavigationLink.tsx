"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/app/context/AuthContext";

type NavLink = {
  name: string;
  href: string;
  adminOnly?: boolean;
};

export default function NavigationLink() {
  const { user } = useAuth();
  const pathname = usePathname();

  const navLinks: NavLink[] = [
    { name: "خانه", href: "/" },
    { name: "محصولات", href: "/products" },
    { name: "درباره ما", href: "/about" },
    { name: "بلاگ", href: "/blog" },
    {
      name: "داشبورد",
      href: "/dashboard",
      adminOnly: true,
    },
  ];

  return (
    <nav className="hidden items-center gap-6 text-sm font-bold text-gray-500 dark:text-gray-300 md:flex">
      {navLinks
        .filter((link) => !link.adminOnly || user?.role === "admin")
        .map((link) => {
          const active = pathname === link.href;

          return (
            <Link
              key={link.href}
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