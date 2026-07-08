"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

import { editBlog } from "@/app/lib/actions/blog.actions";

type EditBlogData = {
  title: string;
  description: string;
  content: string;
  category: string;
  image: File | null;
};

export function useEditBlog(
  blogId: number,
  onClose?: () => void
) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const edit = async (data: EditBlogData) => {
    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append("content", data.content);
      formData.append("category", data.category);

      if (data.image) {
        formData.append("image", data.image);
      }

      await editBlog(blogId, formData);

      toast.success("پست با موفقیت ویرایش شد");

      router.refresh();

      onClose?.();

    } catch (err) {
      toast.error(
        err instanceof Error
          ? err.message
          : "خطا در ویرایش پست"
      );
    } finally {
      setLoading(false);
    }
  };

  return {
    edit,
    loading,
  };
}