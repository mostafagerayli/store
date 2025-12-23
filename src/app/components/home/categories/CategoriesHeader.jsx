import Link from "next/link"


function CategoriesHeader() {
  return (
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-2">
            <h2 className="text-black text-3xl font-bold leading-tight">
              Popular Categories
            </h2>
            <p className="text-gray-900 text-base">
              Choose your favorite product
            </p>
          </div>

          <Link
            href="/categories"
            className="flex items-center gap-2 text-green-500 font-bold transition-colors hover:text-green-800"
          >
            <span>View all categories</span>
            <span className="material-symbols-outlined text-sm">
              arrow_forward_ios
            </span>
          </Link>
        </div>
  )
}

export default CategoriesHeader