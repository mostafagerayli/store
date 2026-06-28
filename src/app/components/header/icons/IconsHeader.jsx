"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FiMenu, FiShoppingCart, FiUser, FiX } from "react-icons/fi";
import { useSelector } from "react-redux";
import MobileMenu from "./MobileMenu";
import { ImExit } from "react-icons/im";
import { useLogout } from "@/app/hooks/useLogout";
import { useAuth } from "../../../context/AuthContext";
import {
  selectCartQuantity
} from "@/app/store/cart/shoppingCartSlice";

function IconsHeader() {
  const router = useRouter();
  const { user } = useAuth();
  const logout = useLogout();
  const [open, setOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const totalQuantity = useSelector(selectCartQuantity);
  return (
    <>
      <div className="flex items-center gap-4 whitespace-nowrap">
        {/* Hamburger Menu */}

        <button
          className="md:hidden focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <FiX className="w-6 h-6 text-gray-800 dark:text-white" />
          ) : (
            <FiMenu className="w-6 h-6 text-gray-800 dark:text-white" />
          )}
        </button>
        <button
          className="relative"
          onClick={() => router.push("/shopingCart")}
        >
          <FiShoppingCart className="w-5 h-5 text-gray-800 dark:text-white" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
            {totalQuantity}
          </span>
        </button>

        {user ? (
          <>
            <button className="relative" onClick={() => setShowLogoutModal(true)}>
              <ImExit className="w-5 h-5 text-gray-800 dark:text-white" />
            </button>
          </>
        ) : (
          <button className="relative" onClick={() => router.push("/login")}>
            <FiUser className="w-5 h-5 text-gray-800 dark:text-white" />
          </button>
        )}
      </div>
      {/* Mobile Menu */}
      <MobileMenu open={open} setOpen={setOpen} />

{showLogoutModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center">
    
    {/* بک‌گراند */}
    <div
      className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      onClick={() => setShowLogoutModal(false)}
    />

    {/* کارت مدال */}
    <div className="relative w-[90%] max-w-sm rounded-2xl bg-white dark:bg-gray-900 shadow-2xl p-6 animate-fadeIn">
      
      {/* آیکون */}
      <div className="flex justify-center mb-4">
        <div className="w-14 h-14 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center">
          <ImExit className="text-red-500 w-6 h-6" />
        </div>
      </div>

      {/* متن */}
      <h2 className="text-center text-lg font-semibold text-gray-800 dark:text-white">
        خروج از حساب کاربری
      </h2>

      <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-2">
        آیا مطمئن هستید که می‌خواهید خارج شوید؟
      </p>

      {/* دکمه‌ها */}
      <div className="flex gap-3 mt-6">
        
        <button
          onClick={() => setShowLogoutModal(false)}
          className="flex-1 py-2 rounded-xl bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white transition"
        >
          انصراف
        </button>

        <button
          onClick={() => {
            logout();
            setShowLogoutModal(false);
          }}
          className="flex-1 py-2 rounded-xl bg-red-500 hover:bg-red-600 text-white transition shadow-md"
        >
          خروج
        </button>

      </div>
    </div>
  </div>
)}
    </>
  );
}

export default IconsHeader;
