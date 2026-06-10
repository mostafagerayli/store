export default function FeatureCard({
  title,
  description,
  icon,
}) {
  return (
    <div className="bg-white p-8 rounded-3xl text-center">
      <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
        {icon}
      </div>

      <h3 className="font-bold mb-3">
        {title}
      </h3>

      <p className="text-sm text-gray-500 leading-7">
        {description}
      </p>
    </div>
  );
}