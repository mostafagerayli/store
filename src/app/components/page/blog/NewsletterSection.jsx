export default function NewsletterSection() {
  return (
    <section className="p-10 mt-20 text-center rounded-3xl bg-[#033924] mb-4">
      <h2 className="mb-4 text-3xl font-bold text-white">
        عضویت در خبرنامه
      </h2>

      <p className="mb-6 text-white">
        جدیدترین مقالات و آموزش‌ها را دریافت کنید.
      </p>

      <div className="flex flex-col max-w-lg gap-3 mx-auto md:flex-row">
        <input
          type="email"
          placeholder="ایمیل شما"
          className="flex-1 px-4 py-3 border rounded-xl"
        />

        <button className="px-6 py-3 text-white rounded-xl bg-primary">
          عضویت
        </button>
      </div>
    </section>
  );
}