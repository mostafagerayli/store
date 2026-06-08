import Link from "next/link";
import { usePathname } from "next/navigation";

function MobileMenu({ open, setOpen }) {
  const navLinks = [
    { name: "خانه", href: "/" },
    { name: "محصولات", href: "/products" },
    { name: "درباره ما", href: "/about" },
    { name: "داشبورد", href: "/dashboard" },
  ];

  const isAdmin = true;
  const pathname = usePathname();

  if (!open) return null;

  return (
    <div className="md:hidden absolute top-14 left-0 w-full  z-50">
      {/* کارت اصلی */}
      <div className="bg-white dark:bg-gray-900 rounded-b-2xl shadow-2xl border border-gray-100 dark:border-gray-800 overflow-hidden">
        
        {/* لیست لینک‌ها */}
        <div className="flex flex-col">
          {navLinks.map((link) => {
            if (link.name === "داشبورد" && !isAdmin) return null;

            const active = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`relative px-5 py-4 text-base font-bold transition-all duration-200 flex items-center justify-between ${
                  active
                    ? "bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                }`}
              >
                {/* متن */}
                <span>{link.name}</span>

                {/* نقطه وضعیت */}
                <span
                  className={`w-2 h-2 rounded-full transition-all ${
                    active ? "bg-green-600" : "bg-transparent"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* footer کوچک داخل منو */}
        <div className="px-5 py-3 border-t border-gray-100 dark:border-gray-800 text-xs text-gray-400 text-center">
          پسته‌چی © 1405
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;