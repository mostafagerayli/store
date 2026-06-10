import FeatureCard from "./FeatureCard";

export default function ContantSection() {
  const features = [
    {
      title: "کیفیت ممتاز",
      description: "انتخاب بهترین محصولات",
      icon: "✓",
    },
    {
      title: "ارسال سریع",
      description: "تحویل سریع سفارشات",
      icon: "✓",
    },
    {
      title: "تضمین سلامت",
      description: "محصولات تازه و بهداشتی",
      icon: "✓",
    },
  ];

  return (
    <section className="bg-slate-100 py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-green-700">
            ارزش‌های ما
          </span>

          <h2 className="text-4xl font-bold mt-3">
            چرا پسته‌چی؟
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((item) => (
            <FeatureCard
              key={item.title}
              {...item}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
