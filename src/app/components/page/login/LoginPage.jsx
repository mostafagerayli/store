import Image from "next/image";
import LoginForm from "./LoginForm";

async function LoginPage() {
  return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4 relative">
        {/* MOBILE BACKGROUND ONLY */}
        <div className="md:hidden absolute inset-0">
          <Image
            src="/images/luxury_vertical_background_for_a_login_screen._close_up_artistic_shot_of.png"
            alt="bg"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative w-full max-w-4xl grid md:grid-cols-2 rounded-xl shadow-xl overflow-hidden bg-white min-h-[520px]">
          {/* Left Form */}
          <LoginForm />

          {/* Right Image */}
          <div className="hidden md:block relative">
            <Image
              src="/images/a_lush_sun_drenched_pistachio_orchard_in_kerman_iran._rows_of_mature_pistachio.png"
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
