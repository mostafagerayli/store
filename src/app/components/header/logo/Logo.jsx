import Link from "next/link";
import { GiPlantRoots } from "react-icons/gi";

function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 font-extrabold text-base text-green-800 dark:text-green-400 whitespace-nowrap"
    >
      <GiPlantRoots className="w-5 h-5" />
      Terrarium Store
    </Link>
  );
}

export default Logo;
