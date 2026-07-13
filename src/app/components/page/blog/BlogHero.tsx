import BlogSearch from "./BlogSearch";

export default function BlogHero() {
  return (
    <section
      className="relative overflow-hidden rounded-sm h-[400px] w-full"
      style={{
        backgroundImage: "url('/images/a_lush_sun_drenched_pistachio_orchard_in_kerman_iran._rows_of_mature_pistachio.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative flex flex-col items-center justify-center h-full text-white">
        <h1 className="mb-4 text-4xl font-bold">
          مجله تخصصی پسته
        </h1>

        <p className="max-w-xl mb-8 text-center text-gray-200">
          جدیدترین مقالات درباره خواص پسته، راهنمای خرید و تغذیه سالم
        </p>
      </div>
    </section>
  );
}