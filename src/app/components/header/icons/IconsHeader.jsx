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
            <p>{user.name}</p>
            <button className="relative" onClick={() => logout()}>
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
    </>
  );
}

export default IconsHeader;
