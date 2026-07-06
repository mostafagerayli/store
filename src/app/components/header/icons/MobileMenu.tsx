"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type MobileMenuProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isAdmin?: boolean;
};

export default function MobileMenu({
  open,
  setOpen,
  isAdmin = false,
}: MobileMenuProps) {
  const pathname = usePathname();

  const navLinks = [
    { name: "خانه", href: "/" },
    { name: "محصولات", href: "/products" },
    { name: "درباره ما", href: "/about" },
    ...(isAdmin ? [{ name: "داشبورد", href: "/dashboard" }] : []),
  ];

  if (!open) return null;

  return (
    <div className="absolute left-0 top-14 z-50 w-full md:hidden">
      <div className="overflow-hidden rounded-b-2xl border border-gray-100 bg-white shadow-2xl dark:border-gray-800 dark:bg-gray-900">
        <div className="flex flex-col">
          {navLinks.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between px-5 py-4 text-base font-bold transition-all duration-200 ${
                  active
                    ? "bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                    : "text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800"
                }`}
              >
                <span>{link.name}</span>

                <span
                  className={`h-2 w-2 rounded-full ${
                    active ? "bg-green-600" : "bg-transparent"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        <div className="border-t border-gray-100 px-5 py-3 text-center text-xs text-gray-400 dark:border-gray-800">
          پسته‌چی © 1405
        </div>
      </div>
    </div>
  );
}