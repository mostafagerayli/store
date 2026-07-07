"use client";

import { FormEvent } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { FaSearch } from "react-icons/fa";

export default function SearchProducts() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const search = String(formData.get("search") ?? "").trim();

    const params = new URLSearchParams(searchParams.toString());

    if (search) {
      params.set("search", search);
    } else {
      params.delete("search");
    }

    params.set("page", "1");

    router.push(`/products?${params.toString()}`, {
      scroll: false,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="relative flex-1">
      <button
        type="submit"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
      >
        <FaSearch size={16} />
      </button>

      <input
        name="search"
        defaultValue={searchParams.get("search") ?? ""}
        placeholder="جستجوی محصولات"
        className="w-full py-2 pr-10 text-sm outline-none"
      />
    </form>
  );
}
