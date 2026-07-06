import ResetPasswordForm from "@/app/components/reset-password/ResetPasswordForm";
import Image from "next/image";

function ResetPas() {
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
        <ResetPasswordForm />
      </div>
    </div>
  );
}

export default ResetPas;
