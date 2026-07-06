"use client";

import { useState } from "react";

const categories = [
  "همه",
  "خواص پسته",
  "راهنمای خرید",
  "سلامت و تغذیه",
  "دستور غذا",
  "صادرات",
] as const;

type Category = (typeof categories)[number];

export default function CategoryFilter() {
  const [active, setActive] = useState<Category>("همه");

  return (
    <div className="mt-10 flex flex-wrap justify-center gap-3">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActive(category)}
          className={`rounded-full px-5 py-2 transition ${
            active === category
              ? "bg-primary text-white"
              : "bg-gray-100 hover:bg-gray-200"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}