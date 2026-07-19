"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type MobileMenuProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  role?: string;
};

export default function MobileMenu({
  open,
  setOpen,
  role,
}: MobileMenuProps) {
  const pathname = usePathname();

  const navLinks = [
    { name: "خانه", href: "/" },
    { name: "محصولات", href: "/products" },
    { name: "درباره ما", href: "/about" },
    { name: "بلاگ", href: "/blog" },
    { name: "ارتباط با ما", href: "/contant" },
    ...(role ? [{ name: "داشبورد", href: "/dashboard" }] : []),
  ];

  if (!open) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 z-50 h-screen w-[240px] sm:w-64 bg-white shadow-2xl transition-transform duration-300 md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b px-5 py-5">
          <div>
            <h2 className="text-lg font-bold text-green-700">پسته پسته</h2>
            <p className="text-xs text-gray-500">مستقیم از باغ تا سفره شما</p>
          </div>

          <button
            onClick={() => setOpen(false)}
            className="rounded-full p-2 transition hover:bg-gray-100"
          >
            ✕
          </button>
        </div>

        {/* Links */}
        <nav className="mt-4 flex flex-col gap-2 px-3">
          {navLinks.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-all ${
                  active
                    ? "bg-green-700 text-white"
                    : "text-gray-700 hover:bg-green-50 hover:text-green-700"
                }`}
              >
                <span>{link.name}</span>

                {active && <span className="h-2 w-2 rounded-full bg-white" />}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
