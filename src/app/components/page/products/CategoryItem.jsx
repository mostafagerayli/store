"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function CategoryItem({ title, value }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleClick = () => {
    const params = new URLSearchParams(searchParams);

    params.set("search", value);
    params.set("page", "1");

    router.push(`/products?${params.toString()}`);
  };

  return (
    <button
      onClick={handleClick}
      className="block w-full text-right hover:text-[#0b5b3c] transition"
    >
      {title}
    </button>
  );
}