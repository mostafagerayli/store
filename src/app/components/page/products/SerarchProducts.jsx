"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { FaSearch } from "react-icons/fa";

export default function SearchProducts() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const search = formData.get("search");

    const params = new URLSearchParams(searchParams);

    if (search?.trim()) {
      params.set("search", search);
    } else {
      params.delete("search");
    }

    params.set("page", "1");

    router.push(`/products?${params.toString()}`);
  };

  return (
    <form onSubmit={handleSubmit} className="flex-1 relative">
      <button
        type="submit"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
      >
        <FaSearch size={16} />
      </button>

      <input
        name="search"
        defaultValue={searchParams.get("search") || ""}
        placeholder="جستجوی محصولات"
        className="w-full pr-10 py-2 outline-none text-sm"
      />
    </form>
  );
}
