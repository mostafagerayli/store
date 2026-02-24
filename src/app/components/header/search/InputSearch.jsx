import { FiSearch } from 'react-icons/fi'

function InputSearch() {
  return (
            <div className="flex-1 hidden md:flex ml-20">
          <div className="relative w-full max-w-md">
            <FiSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full rounded-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white pr-10 pl-4 py-2 text-sm focus:outline-none placeholder-gray-400 dark:placeholder-gray-500"
            />
          </div>
        </div>
  )
}

export default InputSearch