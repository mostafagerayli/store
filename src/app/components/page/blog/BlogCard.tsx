import Image from "next/image";
import Link from "next/link";

type BlogCardProps = {
  post: {
    id: bigint;
    title: string;
    slug: string;
    description: string;
    image: string | null;
    category: string;
    created_at: string;
  };
};

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article
      className="
        group
        overflow-hidden
        rounded-3xl
        border
        border-gray-100
        bg-white
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-xl
      "
      dir="rtl"
    >
      {/* Image */}

      <div
        className="
          relative
          h-52
          w-full
          overflow-hidden
          sm:h-60
        "
      >
        {post.image ? (
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="
              (max-width:640px) 100vw,
              (max-width:1024px) 50vw,
              33vw
            "
            className="
              object-cover
              transition-transform
              duration-500
              group-hover:scale-110
            "
          />
        ) : (
          <div
            className="
              flex
              h-full
              items-center
              justify-center
              bg-gray-100
              text-sm
              text-gray-400
            "
          >
            بدون تصویر
          </div>
        )}
      </div>

      {/* Content */}

      <div className="p-5">
        {/* Category */}

        <span
          className="
            inline-block
            rounded-full
            bg-[#0b5b3c]/10
            px-3
            py-1
            text-xs
            font-bold
            text-[#0b5b3c]
          "
        >
          {post.category}
        </span>

        {/* Title */}

        <h3
          className="
            mt-4
            line-clamp-2
            text-lg
            font-black
            leading-8
            text-gray-800
          "
        >
          {post.title}
        </h3>

        {/* Description */}

        <p
          className="
            mt-3
            line-clamp-3
            text-sm
            leading-7
            text-gray-500
          "
        >
          {post.description}
        </p>

        {/* Footer */}

        <div
          className="
            mt-5
            flex
            items-center
            justify-between
            border-t
            pt-4
            text-xs
            text-gray-400
          "
        >
          <span>{new Date(post.created_at).toLocaleDateString("fa-IR")}</span>

          <Link
            href={`/blog/${encodeURIComponent(post.slug)}`}
            className="
    font-bold
    text-[#0b5b3c]
    transition
    hover:opacity-70
  "
          >
            مطالعه مقاله
          </Link>
        </div>
      </div>
    </article>
  );
}
