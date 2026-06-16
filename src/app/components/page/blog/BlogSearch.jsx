import { FaSearch } from "react-icons/fa";


export default function BlogSearch() {
  return (
    <div className="relative w-full max-w-md">
      <FaSearch
        className="absolute text-gray-400 -translate-y-1/2 right-3 top-1/2"
        size={18}
      />

      <input
        type="text"
        placeholder="جستجو در مقالات..."
        className="w-full py-3 pr-10 pl-4 text-black bg-white rounded-full"
      />
    </div>
  );
}