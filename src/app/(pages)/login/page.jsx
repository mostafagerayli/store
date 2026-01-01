"use client";

import { useForm } from "react-hook-form";
import Button from "@/app/components/button/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Header from "@/app/layout/Header";
import API from "@/app/lib/axios";

export default function LoginPage() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

const onSubmit = async (data) => {
  console.log(data);
  
  try {
    // ارسال داده‌ها به سرور
    const res = await API.post("https://lab-displaying-medicines-durable.trycloudflare.com/users/login", {
      phone_number : data.phone_number,
      password: data.password,
    });

    console.log("Login success:", res.data);

    // ذخیره توکن JWT که سرور برمی‌گردونه
    if (res.data.token) {
      localStorage.setItem("token", res.data.token);
    }

    // بعد از لاگین، ریدایرکت به صفحه اصلی
    router.push("/");
  } catch (error) {
    console.error("Login error:", error.response?.data || error.message);
  }
};
  const inputClass =
    "w-full rounded-lg bg-gray-100 px-4 py-3 text-sm text-gray-900 " +
    "placeholder-gray-500 outline-none " +
    "focus:ring-2 focus:ring-green-500";

  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
        <div className="w-full max-w-4xl grid md:grid-cols-2 rounded-xl shadow-xl overflow-hidden bg-white min-h-[520px]">
          {/* Left Image */}
          <div className="hidden md:block relative">
            <Image
              src="/images/images2.jpg"
              alt="Terrarium"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-6 left-6 bg-white/80 text-gray-900 px-4 py-2 rounded-lg text-sm font-medium">
              Bring nature into your home
            </div>
          </div>

          {/* Right Form */}
          <div className="flex flex-col justify-center px-6 sm:px-10 py-10">
            <h1 className="text-center text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
              Login
            </h1>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-5"
            >
              <div>
                <input
                  type="text"
                  placeholder="Mobile Number"
                  inputMode="numeric"
                  maxLength={11}
                  {...register("phone_number", {
                    required: "Mobile number is required",
                    pattern: {
                      value: /^09\d{9}$/,
                      message:
                        "Mobile number must start with 09 and be 11 digits",
                    },
                  })}
                  onChange={(e) =>
                    (e.target.value = e.target.value.replace(/\D/g, ""))
                  }
                  className={inputClass}
                />
                {errors.phone_number && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.phone_number.message}
                  </p>
                )}
              </div>

              <div>
                <input
                  type="password"
                  placeholder="Password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters",
                    },
                  })}
                  className={inputClass}
                />
                {errors.password && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Logging in..." : "Login"}
              </Button>
            </form>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-between text-center text-sm text-gray-600">
              <Link href="/forgot-password" className="hover:text-green-600">
                Forgot Password?
              </Link>
              <Link href="/register" className="hover:text-green-600">
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
