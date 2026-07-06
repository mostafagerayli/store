import { Feature } from "./ContantSection";

export default function FeatureCard({
  title,
  description,
  icon,
}: Feature) {
  return (
    <div className="rounded-3xl bg-white p-8 text-center">
      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
        {icon}
      </div>

      <h3 className="mb-3 font-bold">{title}</h3>

      <p className="text-sm leading-7 text-gray-500">
        {description}
      </p>
    </div>
  );
}