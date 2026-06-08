import Image from "next/image";
import FormRegister from "./FormRegister";

function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4 relative">

      {/* MOBILE BACKGROUND ONLY */}
      <div className="md:hidden absolute inset-0">
        <Image
          src="/images/luxury_e_commerce_category_image_for_pistachios._close_up_of_premium_salted.png"
          alt="bg"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative w-full max-w-4xl grid md:grid-cols-2 rounded-xl shadow-xl overflow-hidden bg-white min-h-[560px]">

        {/* Left Form */}
        <FormRegister />

        {/* Right Image */}
        <div className="hidden md:block relative">
          <Image
            src="/images/luxury_e_commerce_category_image_for_pistachios._close_up_of_premium_salted.png"
            alt="Terrarium"
            fill
            className="object-cover"
          />

          <div className="absolute bottom-6 left-6 bg-white/80 text-gray-900 px-4 py-2 rounded-lg text-sm font-medium">
            اصالت ایرانی ، کشاورزی مدرن ، طعم لوکس
          </div>
        </div>

      </div>
    </div>
  );
}

export default RegisterPage;