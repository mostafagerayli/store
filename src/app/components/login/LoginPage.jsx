import Image from "next/image";
import Link from "next/link";
import LoginForm from "./LoginForm";

function LoginPage() {
  return (
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

          <LoginForm/> 
          
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-between text-center text-sm text-gray-600">
            <Link href="/forget-password" className="hover:text-green-600">
              Forgot Password?
            </Link>
            <Link href="/register" className="hover:text-green-600">
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
