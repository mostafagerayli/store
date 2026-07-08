"use client";

import { createBlog } from "@/app/lib/actions/blog.actions";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

type AddBlogData = {
  title: string;
  description: string;
  content: string;
  image: File | null;
};

export function useAddBlog() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);


  const addBlog = async (data: AddBlogData) => {
    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("title", data.title);
      formData.append(
        "description",
        data.description
      );
      formData.append(
        "content",
        data.content
      );


      // 📦 فایل تصویر
      if (data.image) {
        formData.append("image", data.image);
      }


      await createBlog(formData);

      toast.success(
        "پست با موفقیت اضافه شد"
      );

      router.refresh();

    } catch (err) {
      toast.error(
        err instanceof Error
          ? err.message
          : "خطا در افزودن پست"
      );

    } finally {
      setLoading(false);
    }
  };


  return {
    addBlog,
    loading,
  };
}