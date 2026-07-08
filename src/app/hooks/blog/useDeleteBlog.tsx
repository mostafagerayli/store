"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

import { deleteBlog } from "@/app/lib/actions/blog.actions";

export default function useDeleteBlog(
  onSuccess?: () => void
) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const remove = async (
    id: number
  ): Promise<void> => {
    try {
      setLoading(true);

      const result = await deleteBlog(id);

      if (!result.success) {
        throw new Error(
          result.message ?? "خطا در حذف پست"
        );
      }

      toast.success("پست با موفقیت حذف شد");

      onSuccess?.();

      router.refresh();
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "خطا در حذف پست"
      );
    } finally {
      setLoading(false);
    }
  };

  return {
    remove,
    loading,
  };
}