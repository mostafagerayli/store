import { FaArrowLeft, FaArrowRight } from "react-icons/fa"

function FeaturedProductHeader() {
  return (
            <div className="flex items-center justify-between">
              <h2 className="text-white text-3xl font-bold">Featured Products</h2>
              <div className="flex gap-2">
                <button className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-600 bg-[#051001] text-white hover:bg-gray-700 transition">
                  <FaArrowLeft />
                </button>
                <button className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-600 bg-[#051001] text-white hover:bg-gray-700 transition">
                  <FaArrowRight />
                </button>
              </div>
            </div>
  )
}

export default FeaturedProductHeader