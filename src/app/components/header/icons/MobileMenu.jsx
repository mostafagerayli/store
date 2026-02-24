import Link from "next/link";
import { usePathname } from "next/navigation";

function MobileMenu({ open, setOpen}) {
    
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About", href: "/about" },
    { name: "Dashboard", href: "/dashboard" },
  ];
  const isAdmin = true;
  
  const pathname = usePathname();

  if (!open) return null;

  return (
    <div className="md:hidden absolute top-16 left-0 w-full bg-white dark:bg-gray-900 px-4 pt-2 pb-4 shadow-md z-50">
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
  );
}

export default MobileMenu;
