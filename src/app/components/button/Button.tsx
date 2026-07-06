import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

export default function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  disabled = false,
  className = "",
  ...props
}: ButtonProps) {
  const sizeClass = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  }[size];

  const variantClass = disabled
    ? "opacity-50 cursor-not-allowed"
    : {
        primary:
          "bg-green-500 text-black hover:bg-green-400",
        secondary:
          "bg-gray-700 text-white hover:bg-gray-600",
        outline:
          "border border-green-500 text-green-500 hover:bg-green-500 hover:text-black",
      }[variant];

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`rounded-lg font-bold transition-all focus:outline-none flex items-center justify-center ${sizeClass} ${variantClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}