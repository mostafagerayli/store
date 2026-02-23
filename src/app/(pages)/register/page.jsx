"use client";

import { useForm } from "react-hook-form";
import Button from "@/app/components/button/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Header from "@/app/layout/Header";

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const password = watch("password");
  const router = useRouter();

const onSubmit = async (data) => {
  try {
    // ساخت body مطابق با API
    const body = {
      name: data.name,        // دقت کن همین key ها با API یکی باشه
      phone: data.mobile,
      password: data.password,
    };

    const res = await fetch('http://localhost:3000/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const result = await res.json();

    if (!res.ok) {
      console.error('Register error:', result);
      alert(result.error || 'Registration failed');
      return;
    }

    console.log('Register success:', result);

    // بعد از موفقیت، به صفحه اصلی برو
    router.push('/');
    
    
  } catch (err) {
    console.error('Fetch error:', err);
  }
};
  const inputClass =
    "w-full rounded-lg bg-gray-100 px-4 py-3 text-sm text-gray-900 " +
    "placeholder-gray-500 outline-none focus:ring-2 focus:ring-green-500";

  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
        <div className="w-full max-w-4xl grid md:grid-cols-2 rounded-xl shadow-xl overflow-hidden bg-white min-h-[560px]">
          {/* Left Image */}
          <div className="hidden md:block relative">
            <Image
              src="/images/images2.jpg"
              alt="Terrarium"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-6 left-6 bg-white/80 text-gray-900 px-4 py-2 rounded-lg text-sm font-medium">
              Start your green journey 🌱
            </div>
          </div>

          {/* Right Form */}
          <div className="flex flex-col justify-center px-6 sm:px-10 py-10">
            <h1 className="text-center text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
              Create Account
            </h1>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-5"
            >
              <div>
                <input
                  type="text"
                  placeholder="name"
                  {...register("name", {
                    required: " name is required",
                  })}
                  className={inputClass}
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Mobile Number"
                  inputMode="numeric"
                  maxLength={11}
                  {...register("mobile", {
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
                {errors.mobile && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.mobile.message}
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
                {isSubmitting ? "Registering..." : "Register"}
              </Button>
            </form>

            <p className="mt-8 text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link href="/login" className="text-green-600 hover:underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
