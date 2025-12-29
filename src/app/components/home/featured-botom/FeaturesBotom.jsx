import { FiHeadphones, FiShield, FiTruck } from "react-icons/fi";
import { IoIosLeaf } from "react-icons/io";

const features = [
  {
    icon: <FiTruck className="w-6 h-6 text-green-500" />,
    title: "Fast & Secure Delivery",
    description: "Protected packaging for plants",
  },
  {
    icon: <FiHeadphones className="w-6 h-6 text-green-500" />,
    title: "Expert Support",
    description: "Free care consultation",
  },
  {
    icon: <FiShield className="w-6 h-6 text-green-500" />,
    title: "Plant Health Guarantee",
    description: "7-day money-back guarantee",
  },
  {
    icon: <IoIosLeaf className="w-6 h-6 text-green-500" />,
    title: "Eco-Friendly",
    description: "Using recycled materials",
  },
];

export default function FeaturesBottom() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {features.map((feature, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-green-900"
        >
          <div className="mb-3 text-3xl">{feature.icon}</div>
          <h3 className="text-lg font-semibold mb-1 text-gray-900 dark:text-white">
            {feature.title}
          </h3>
          <p className="text-gray-500 dark:text-gray-300 text-sm">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  );
}
