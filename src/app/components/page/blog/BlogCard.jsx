import Image from "next/image";

export default function BlogCard({ post }) {
  return (
    <article className="overflow-hidden transition-all bg-white border shadow-sm rounded-3xl hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-56">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-5">
        <span className="text-xs text-primary">
          {post.category}
        </span>

        <h3 className="mt-2 text-lg font-bold">
          {post.title}
        </h3>

        <p className="mt-3 text-sm text-gray-600">
          {post.excerpt}
        </p>

        <div className="mt-4 text-xs text-gray-400">
          {post.createdAt}
        </div>
      </div>
    </article>
  );
}