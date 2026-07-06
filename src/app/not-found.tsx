import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center text-center px-4">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/a_lush_sun_drenched_pistachio_orchard_in_kerman_iran._rows_of_mature_pistachio.png')",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 max-w-md text-white">

        <div className="text-6xl mb-3">🌿</div>

        <h1 className="text-5xl font-bold">404</h1>

        <p className="mt-3 text-white/80">
          صفحه‌ای که دنبالشی پیدا نشد
        </p>

        <Link
          href="/"
          className="inline-block mt-6 px-6 py-2 rounded-lg bg-white text-black font-medium hover:bg-gray-200 transition"
        >
          بازگشت به خانه
        </Link>

      </div>
    </div>
  );
}