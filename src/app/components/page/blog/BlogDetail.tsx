import Image from "next/image";


type BlogDetailProps = {
  blog: {
    id: string;
    title: string;
    description: string;
    content: string;
    image: string | null;
    category: string;
    created_at: string;
  };
};


export default function BlogDetail({
  blog,
}: BlogDetailProps) {


  return (
    <article
      dir="rtl"
      className="
        mx-auto
        max-w-5xl
        px-4
        py-8
        sm:px-6
        lg:px-8
        sm:py-12
      "
    >

      {/* Header */}

      <header
        className="
          mx-auto
          max-w-3xl
          text-center
        "
      >

        <span
          className="
            inline-flex
            items-center
            rounded-full
            bg-[#0b5b3c]/10
            px-4
            py-2
            text-xs
            font-bold
            text-[#0b5b3c]
            sm:text-sm
          "
        >
          {blog.category}
        </span>


        <h1
          className="
            mt-5
            text-2xl
            font-black
            leading-[2]
            text-gray-900
            sm:text-4xl
            lg:text-5xl
          "
        >
          {blog.title}
        </h1>


        <time
          className="
            mt-4
            block
            text-xs
            text-gray-400
            sm:text-sm
          "
        >
          {new Date(blog.created_at).toLocaleDateString(
            "fa-IR"
          )}
        </time>

      </header>



      {/* Image */}

      <div
        className="
          relative
          mt-8
          h-56
          overflow-hidden
          rounded-3xl
          shadow-lg
          sm:mt-12
          sm:h-[420px]
          lg:h-[500px]
        "
      >

        {blog.image ? (
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            priority
            sizes="
              (max-width:640px) 100vw,
              (max-width:1024px) 80vw,
              1024px
            "
            className="
              object-cover
              transition
              duration-500
              hover:scale-105
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



      {/* Description */}

      <section
        className="
          mt-8
          rounded-3xl
          border
          border-gray-100
          bg-gray-50
          p-5
          leading-8
          text-gray-600
          shadow-sm
          sm:mt-12
          sm:p-8
          sm:text-lg
          sm:leading-10
        "
      >

        <p>
          {blog.description}
        </p>

      </section>



      {/* Content */}

      <section
        className="
          mt-8
          rounded-3xl
          bg-white
          leading-9
          text-gray-700
          sm:mt-10
          sm:text-lg
          sm:leading-[2.2]
        "
      >

        <p className="whitespace-pre-line">
          {blog.content}
        </p>

      </section>


    </article>
  );
}