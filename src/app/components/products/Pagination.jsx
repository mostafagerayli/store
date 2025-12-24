import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export default function Pagination() {
  return (
    <div className="flex flex-col items-center border-t border-gray-200 bg-white px-4 py-3 mb-8 rounded-xl">
      {/* Mobile Buttons */}
      <div className="flex w-full justify-center sm:hidden mb-2 gap-2">
        <button className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
          Previous
        </button>
        <button className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
          Next
        </button>
      </div>

      {/* Desktop Pagination */}
      <div className="hidden sm:flex sm:justify-center w-full">
        <nav
          aria-label="Pagination"
          className="inline-flex -space-x-px rounded-md shadow-sm"
        >
          {/* Previous Arrow */}
          <a
            href="#"
            className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 hover:bg-gray-50 focus:outline-none"
          >
            <span className="sr-only">Previous</span>
            <FaAngleLeft aria-hidden="true" className="w-5 h-5" />
          </a>

          {/* Page Numbers */}
          <a
            href="#"
            aria-current="page"
            className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white"
          >
            1
          </a>
          <a
            href="#"
            className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50"
          >
            2
          </a>
          <a
            href="#"
            className="relative hidden md:inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50"
          >
            3
          </a>
          <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700">
            ...
          </span>
          <a
            href="#"
            className="relative hidden md:inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50"
          >
            8
          </a>
          <a
            href="#"
            className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50"
          >
            9
          </a>
          <a
            href="#"
            className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50"
          >
            10
          </a>

          {/* Next Arrow */}
          <a
            href="#"
            className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 hover:bg-gray-50 focus:outline-none"
          >
            <span className="sr-only">Next</span>
            <FaAngleRight aria-hidden="true" className="w-5 h-5" />
          </a>
        </nav>
      </div>
    </div>
  );
}
