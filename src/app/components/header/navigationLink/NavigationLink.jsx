"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavigationLink() {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About", href: "/about" },
    { name: "Dashboard", href: "/dashboard" },
  ];
  const pathname = usePathname();
  const isAdmin = true;
  return (
    <nav className="hidden md:flex items-center gap-6 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap font-bold">
      {navLinks.map((link) => {
        // شرط برای داشبورد
        if (link.name === "Dashboard" && !isAdmin) return null;

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
