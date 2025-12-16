import React from "react";

export default function Button({
  children,
  onClick,
  variant = "primary", // primary / secondary / outline
  size = "md",         // sm / md / lg
  disabled = false,
}) {
  // اندازه دکمه
  let sizeClass = "";
  if (size === "sm") sizeClass = "px-4 py-2 text-sm";
  if (size === "md") sizeClass = "px-6 py-3 text-base";
  if (size === "lg") sizeClass = "px-8 py-4 text-lg";

  // نوع دکمه
  let variantClass = "";
  if (variant === "primary") variantClass =
    "bg-green-500 text-black hover:bg-green-400";
  if (variant === "secondary") variantClass =
    "bg-gray-700 text-white hover:bg-gray-600";
  if (variant === "outline") variantClass =
    "border border-green-500 text-green-500 hover:bg-green-500 hover:text-black";

  // غیر فعال
  if (disabled) variantClass = "opacity-50 cursor-not-allowed";

  return (
    <button
      onClick={onClick}
      className={`rounded-lg font-bold transition-all focus:outline-none flex items-center justify-center ${sizeClass} ${variantClass}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
