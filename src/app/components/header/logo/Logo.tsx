import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 font-extrabold text-base text-green-800 dark:text-green-400 whitespace-nowrap"
    >
      <Image
        src="/images/logo.jpg"
        alt="پسته پسته"
        width={60}
        height={60}
        className="object-contain"
      />
    </Link>
  );
}

export default Logo;