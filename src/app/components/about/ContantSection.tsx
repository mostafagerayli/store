import FeatureCard from "./FeatureCard";

export interface Feature {
  title: string;
  description: string;
  icon: string;
}
const features: Feature[] = [
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

export default function ContentSection() {
  return (
    <section className="bg-slate-100 py-24">
      <div className="container mx-auto px-4">
        <div className="mb-14 text-center">
          <span className="text-green-700">ارزش‌های ما</span>

          <h2 className="mt-3 text-4xl font-bold">
            چرا طلا سبز ؟
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              {...feature}
            />
          ))}
        </div>
      </div>
    </section>
  );
}