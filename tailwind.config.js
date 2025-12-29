/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",  // مسیر فایل‌های App Router
    "./src/components/**/*.{js,ts,jsx,tsx}", // مسیر کامپوننت‌ها
    "./src/layout/**/*.{js,ts,jsx,tsx}" // مسیر لایه‌ها
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
