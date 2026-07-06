"use client";

import { ChangeEvent } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function SortProducts() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleChange = (
    e: ChangeEvent<HTMLSelectElement>
  ): void => {
    const params = new URLSearchParams(searchParams.toString());

    params.set("sort", e.target.value);
    params.set("page", "1");

    router.push(`/products?${params.toString()}`);
  };

  return (
    <select
      onChange={handleChange}
      defaultValue={searchParams.get("sort") ?? "newest"}
      className="rounded-xl border bg-white px-4 py-2 text-sm text-black md:rounded-full md:px-6"
    >
      <option value="newest">جدیدترین</option>
      <option value="price_asc">ارزان‌ترین</option>
      <option value="price_desc">گران‌ترین</option>
    </select>
  );
}