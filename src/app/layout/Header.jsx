"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { FiSearch, FiMenu, FiX, FiShoppingCart } from "react-icons/fi";
import Button from "../components/Button";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "About", href: "/about" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  return (
    <header className="w-full bg-green-900 text-white shadow-md">
      <div className="mx-auto max-w-7xl px-4">
        {/* Top Row */}
        <div className="flex h-15 items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="text-lg sm:text-xl font-bold tracking-wide">
            Terrarium Shop
          </Link>

          {/* Desktop Search */}
          <div className="hidden md:flex flex-1 max-w-md mx-6">
            <div className="relative w-full">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-green-200" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full rounded-lg bg-green-500 py-2 pl-9 pr-3 text-xs placeholder-green-200 focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button size='sm' onClick={() => router.push('/login')}>
              Login / Register
            </Button>

            <Button size="sm">
              <FiShoppingCart size={17} />
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-2xl"
            >
              {open ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 pb-4 text-sm font-medium">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`transition hover:text-green-200 ${
                  active ? "text-green-300 border-b-2 border-green-300 pb-1" : ""
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden pb-4 space-y-4">
            {/* Mobile Search */}
            <div className="relative">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-green-200" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full rounded-lg bg-green-500 py-2 pl-9 pr-3 text-xs placeholder-green-200 focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>

            <nav className="flex flex-col gap-3 text-sm font-medium">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`transition hover:text-green-200 ${
                      active ? "text-green-300" : ""
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
