"use client";

import { useRouter, useSearchParams } from "next/navigation";

const categories = [
  { title: "همه", value: "all" },
  { title: "خواص پسته", value: "خواص پسته" },
  { title: "راهنمای خرید", value: "راهنمای خرید" },
  { title: "سلامت و تغذیه", value: "سلامت و تغذیه" },
];

export default function CategoryFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const active = searchParams.get("category") ?? "all";

  const handleClick = (value: string): void => {
    const params = new URLSearchParams(searchParams.toString());

    if (value === "all") {
      params.delete("category");
    } else {
      params.set("category", value);
    }

    params.set("page", "1");

    router.push(`/blog?${params.toString()}`, {
      scroll: false,
    });
  };

  return (
    <div className="mt-10 flex flex-wrap justify-center gap-3">
      {categories.map((category) => (
        <button
          key={category.value}
          type="button"
          onClick={() => handleClick(category.value)}
          className={`rounded-full px-5 py-2 transition ${
            active === category.value
              ? "bg-green-500 text-white"
              : "bg-gray-100 hover:bg-gray-200"
          }`}
        >
          {category.title}
        </button>
      ))}
    </div>
  );
}