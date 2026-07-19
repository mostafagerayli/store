"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FiMenu, FiShoppingCart, FiUser, FiX } from "react-icons/fi";
import { ImExit } from "react-icons/im";

import MobileMenu from "./MobileMenu";

import { useAuth } from "../../../context/AuthContext";
import { useLogout } from "@/app/hooks/auth/useLogout";
import {
  selectCartQuantity,
} from "@/app/store/cart/shoppingCartSlice";
import { useAppSelector } from "@/app/store/hook";


export default function IconsHeader() {
  const router = useRouter();

  const { user } = useAuth();
  const logout = useLogout();

  const [open, setOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [mounted, setMounted] = useState(false);

  const totalQuantity = useAppSelector(selectCartQuantity);

  useEffect(() => {
    setMounted(true);
  }, []);

  const cartQuantity = mounted ? totalQuantity : 0;

  return (
    <>
      <div className="flex items-center gap-4 whitespace-nowrap">
        <button
          type="button"
          className="md:hidden focus:outline-none"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? (
            <FiX className="h-6 w-6 text-gray-800 dark:text-white" />
          ) : (
            <FiMenu className="h-6 w-6 text-gray-800 dark:text-white" />
          )}
        </button>

        <button
          type="button"
          className="relative"
          onClick={() => router.push("/shopingCart")}
        >
          <FiShoppingCart className="h-5 w-5 text-gray-800 dark:text-white" />

          <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
            {cartQuantity}
          </span>
        </button>

        {user ? (
          <button
            type="button"
            onClick={() => setShowLogoutModal(true)}
          >
            <ImExit className="h-5 w-5 text-gray-800 dark:text-white" />
          </button>
        ) : (
          <button
            type="button"
            onClick={() => router.push("/login")}
          >
            <FiUser className="h-5 w-5 text-gray-800 dark:text-white" />
          </button>
        )}
      </div>

      <MobileMenu
        open={open}
        setOpen={setOpen}
        role={user?.role}
      />

      {showLogoutModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowLogoutModal(false)}
          />

          <div className="relative w-[90%] max-w-sm rounded-2xl bg-white p-6 shadow-2xl dark:bg-gray-900">
            <div className="mb-4 flex justify-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-100 dark:bg-red-900">
                <ImExit className="h-6 w-6 text-red-500" />
              </div>
            </div>

            <h2 className="text-center text-lg font-semibold text-gray-800 dark:text-white">
              خروج از حساب کاربری
            </h2>

            <p className="mt-2 text-center text-sm text-gray-500 dark:text-gray-400">
              آیا مطمئن هستید که می‌خواهید خارج شوید؟
            </p>

            <div className="mt-6 flex gap-3">
              <button
                type="button"
                onClick={() => setShowLogoutModal(false)}
                className="flex-1 rounded-xl bg-gray-200 py-2 text-gray-800 transition hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
              >
                انصراف
              </button>

              <button
                type="button"
                onClick={() => {
                  logout();
                  setShowLogoutModal(false);
                }}
                className="flex-1 rounded-xl bg-red-500 py-2 text-white shadow-md transition hover:bg-red-600"
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