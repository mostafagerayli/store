"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // بعد از mount
  useEffect(() => setMounted(true), [])

  if (!mounted) return null // فقط بعد از mount رندر میشه

  const isDark = theme === "dark"

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle Dark Mode"
      className={`
        relative inline-flex h-6 w-12 sm:h-7 sm:w-14 items-center rounded-full
        transition-colors duration-300
        ${isDark ? "bg-zinc-800" : "bg-zinc-300"}
      `}
    >
      <span
        className={`
          inline-block h-5 w-5 sm:h-6 sm:w-6 transform rounded-full bg-white
          transition-transform duration-300
          ${isDark ? "translate-x-5 sm:translate-x-7" : "translate-x-1"}
        `}
      />

      {/* Icons */}
      <span className="absolute left-1 text-xs"></span>
      <span className="absolute right-1 text-xs"></span>
    </button>
  )
}
