"use client"
import { ThemeProvider } from "next-themes"

function DarkModeProvider({ children }) {
  return (
      <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
    >
      {children}
    </ThemeProvider>
  )
}

export default DarkModeProvider;