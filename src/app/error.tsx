"use client";

import { useEffect } from "react";
import { toast } from "react-toastify";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({
  error,
  reset,
}: ErrorPageProps) {
  useEffect(() => {
    toast.error(error.message);
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <h2 className="text-3xl font-bold text-red-600">
        Something went wrong
      </h2>

      <p className="mt-2 text-gray-600">
        خطایی رخ داده، لطفاً دوباره تلاش کنید.
      </p>

      <button
        onClick={reset}
        className="mt-5 rounded-lg bg-black px-5 py-2 text-white transition hover:bg-gray-800"
      >
        Retry
      </button>
    </div>
  );
}