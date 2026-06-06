import Link from "next/link";

export default function Pagination({ page, totalPages, basePath }) {
  return (
    <div className="mt-8 flex items-center justify-center">
      <div className="flex items-center gap-2 rounded-2xl bg-white p-2 shadow-lg">
        <Link
          href={`${basePath}?page=${page - 1}`}
          scroll={false}
          className={`flex h-10 w-10 items-center justify-center rounded-xl border transition
          ${
            page === 1
              ? "pointer-events-none border-gray-200 text-gray-300"
              : "border-gray-300 bg-white hover:bg-gray-100"
          }`}
        >
          ←
        </Link>

        {Array.from({ length: totalPages }, (_, index) => {
          const pageNumber = index + 1;

          return (
            <Link
              key={pageNumber}
              href={`${basePath}?page=${pageNumber}`}
              scroll={false}
              className={`flex h-10 w-10 items-center justify-center rounded-xl font-medium transition
                ${
                  page === pageNumber
                    ? "bg-[#0b5b3c] text-white shadow-md"
                    : "border border-gray-300 bg-white text-gray-700 hover:bg-gray-100"
                }`}
            >
              {pageNumber}
            </Link>
          );
        })}

        <Link
          href={`${basePath}?page=${page + 1}`}
          scroll={false}
          className={`flex h-10 w-10 items-center justify-center rounded-xl border transition
          ${
            page === totalPages
              ? "pointer-events-none border-gray-200 text-gray-300"
              : "border-gray-300 bg-white hover:bg-gray-100"
          }`}
        >
          →
        </Link>
      </div>
    </div>
  );
}
