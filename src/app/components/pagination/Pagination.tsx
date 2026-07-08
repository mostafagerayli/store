import Link from "next/link";

type PaginationProps = {
  page: number;
  totalPages: number;
  basePath: string;
  searchParams?: URLSearchParams ;
};

export default function Pagination({
  page,
  totalPages,
  basePath,
  searchParams,
}: PaginationProps) {
  const createPageUrl = (pageNumber: number): string => {
    const params = new URLSearchParams(
      searchParams?.toString() ?? ""
    );

    params.set("page", pageNumber.toString());

    return `${basePath}?${params.toString()}`;
  };

  return (
    <div className="mt-8 flex items-center justify-center">
      <div className="flex items-center gap-2 rounded-2xl bg-white p-2 shadow-lg">
        <Link
          href={createPageUrl(Math.max(page - 1, 1))}
          scroll={false}
          className={`flex h-10 w-10 items-center justify-center rounded-xl border transition ${
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
              href={createPageUrl(pageNumber)}
              scroll={false}
              className={`flex h-10 w-10 items-center justify-center rounded-xl font-medium transition ${
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
          href={createPageUrl(
            Math.min(page + 1, totalPages)
          )}
          scroll={false}
          className={`flex h-10 w-10 items-center justify-center rounded-xl border transition ${
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