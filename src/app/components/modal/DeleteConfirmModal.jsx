"use client";

export default function DeleteConfirmModal({
  product,
  onConfirm,
  onClose,
  loading = false,
}) {
  return (
    <div className="space-y-6">
      <p className="text-gray-600">
ایا از حذف محصول {product.name} مطمئن هستید؟
      </p>

      <div className="flex justify-end gap-3">
        <button
          onClick={onClose}
          disabled={loading}
          className="rounded-xl bg-gray-200 px-4 py-2 hover:bg-gray-300"
        >
          انصراف
        </button>

        <button
          onClick={onConfirm}
          disabled={loading}
          className="rounded-xl bg-red-500 px-4 py-2 text-white hover:bg-red-600 disabled:opacity-50"
        >
          {loading ? "در حال حذف..." : "حذف محصول"}
        </button>
      </div>
    </div>
  );
}