"use client";
export const categories = [
  "همه",
  "خواص پسته",
  "راهنمای خرید",
  "سلامت و تغذیه",
  "دستور غذا",
  "صادرات",
];

import { useState } from "react";

export default function CategoryFilter() {
  const [active, setActive] = useState("همه");

  return (
    <div className="flex flex-wrap justify-center gap-3 mt-10">
      {categories.map((item) => (
        <button
          key={item}
          onClick={() => setActive(item)}
          className={`px-5 py-2 rounded-full transition
            ${
              active === item
                ? "bg-primary text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
