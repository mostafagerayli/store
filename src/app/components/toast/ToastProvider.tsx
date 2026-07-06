import { ReactNode } from "react";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

type ToastProviderProps = {
  children: ReactNode;
};

export default function ToastProvider({
  children,
}: ToastProviderProps) {
  return (
    <>
      {children}

      <ToastContainer
        position="bottom-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="dark"
      />
    </>
  );
}