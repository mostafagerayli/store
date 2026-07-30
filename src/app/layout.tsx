import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";

import { Geist, Geist_Mono } from "next/font/google";

import { ThemeProvider } from "./components/darkMode/ThemeProvider";
import ToastProvider from "./components/toast/ToastProvider";
import CartPersistence from "./components/shoppingCart/Persistence";
import AuthProvider from "./context/AuthContext";
import ReduxProvider from "./store/Provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "پسته پسته | فروشگاه آنلاین پسته",
  description:
    "فروشگاه آنلاین پسته پسته، خرید انواع پسته ایرانی با کیفیت بالا، ارسال سریع و تجربه خرید آسان.",
  keywords: [
    "پسته پسته",
    "خرید پسته",
    "فروشگاه پسته",
    "پسته ایرانی",
    "خرید آنلاین پسته",
  ],
  authors: [{ name: "پسته پسته" }],
  creator: "پسته پسته",
  openGraph: {
    title: "پسته پسته | فروشگاه آنلاین پسته",
    description:
      "خرید آنلاین پسته ایرانی با کیفیت بالا از فروشگاه پسته پسته.",
    type: "website",
    locale: "fa_IR",
  },
};
type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html
      lang="fa"
      dir="rtl"
      suppressHydrationWarning
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <ThemeProvider>
            <ReduxProvider>
              <ToastProvider>
                <CartPersistence />
                {children}
              </ToastProvider>
            </ReduxProvider>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}