import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function FeaturedProductHeader() {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
      <h2 className="text-black dark:text-white text-2xl sm:text-3xl font-bold">
        Featured Products
      </h2>
      <div className="flex gap-2">
        <button className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-600 bg-[#051001] text-white hover:bg-gray-700 dark:hover:bg-gray-700 transition">
          <FaArrowLeft />
        </button>
        <button className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-600 bg-[#051001]  text-white hover:bg-gray-700 dark:hover:bg-gray-700 transition">
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}

export default FeaturedProductHeader;
