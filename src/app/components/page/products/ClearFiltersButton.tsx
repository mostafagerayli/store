"use client";

import { useRouter } from "next/navigation";

export default function ClearFiltersButton() {
  const router = useRouter();

  const handleClear = () => {
    router.push("/products");
  };

  return (
    <button
      onClick={handleClear}
      className="text-sm text-[#c69b2c] hover:text-[#0b5b3c] transition"
    >
      مشاهده همه
    </button>
  );
}