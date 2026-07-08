"use client";

interface Props {
  title: string;
  itemName?: string;
  onConfirm: () => void;
  onClose: () => void;
  loading?: boolean;
}

export default function DeleteConfirmModal({
  title,
  itemName,
  onConfirm,
  onClose,
  loading = false,
}: Props) {
  return (
    <div className="space-y-6">
      <p className="text-gray-600">
        {itemName ? (
          <>
            آیا از حذف <b>{title}</b> <b>{itemName}</b> مطمئن هستید؟
          </>
        ) : (
          `آیا از حذف ${title} مطمئن هستید؟`
        )}
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
          {loading ? "در حال حذف..." : "حذف"}
        </button>
      </div>
    </div>
  );
}