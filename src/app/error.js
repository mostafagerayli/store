"use client";

import { useEffect } from "react";
import { toast } from "react-toastify";

export default function Error({ error, reset }) {
  useEffect(() => {
    toast.error(error)
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h2 className="text-3xl font-bold text-red-600">
        Something went wrong
      </h2>

      <p className="mt-2 text-gray-600">
        خطایی رخ داده، لطفاً دوباره تلاش کن
      </p>

      <button
        onClick={() => reset()}
        className="mt-5 px-5 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
      >
        Retry
      </button>
    </div>
  );
}