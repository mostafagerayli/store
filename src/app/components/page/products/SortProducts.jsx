"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function SortProducts() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleChange = (e) => {
    const params = new URLSearchParams(searchParams);

    params.set("sort", e.target.value);
    params.set("page", "1");

    router.push(`/products?${params.toString()}`);
  };

  return (
    <select
      onChange={handleChange}
      defaultValue={searchParams.get("sort") || "newest"}
      className="bg-white text-black px-4 md:px-6 py-2 rounded-xl md:rounded-full text-sm border"
    >
      <option value="newest">جدیدترین</option>
      <option value="price_asc">ارزان‌ترین</option>
      <option value="price_desc">گران‌ترین</option>
    </select>
  );
}