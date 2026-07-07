"use client";

import { useRouter, useSearchParams } from "next/navigation";

type CategoryItemProps = {
  title: string;
  value: string;
};

export default function CategoryItem({ title, value }: CategoryItemProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleClick = (): void => {
    const params = new URLSearchParams(searchParams.toString());

    params.set("search", value);
    params.set("page", "1");

    router.push(`/products?${params.toString()}`, {
      scroll: false,
    });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="block w-full text-right transition hover:text-[#0b5b3c]"
    >
      {title}
    </button>
  );
}
