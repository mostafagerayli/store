import Image from "next/image";
import LoginForm from "./LoginForm";

function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-4xl grid md:grid-cols-2 rounded-xl shadow-xl overflow-hidden bg-white min-h-[520px]">
        {/* Left Image */}
        <LoginForm />
        {/* Right Form */}

        <div className="hidden md:block relative">
          <Image
            src="/images/luxury_vertical_background_for_a_login_screen._close_up_artistic_shot_of.png"
            alt="Terrarium"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
