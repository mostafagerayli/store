import Image from "next/image";

interface CategoryCardProps {
  title: string;
  description?: string;
  image: string;
  onClick?: () => void;
}

export default function CategoryCard({
  title,
  description,
  image,
  onClick,
}: CategoryCardProps) {
  return (
    <div
      onClick={onClick}
      className="group flex cursor-pointer flex-col gap-4 rounded-xl bg-green-900 p-3 transition-all hover:bg-[#12310e] hover:-translate-y-1"
    >
      <div className="aspect-[4/3] w-full overflow-hidden rounded-lg bg-green-900">
        <Image
          src={image || "/placeholder.png"}
          alt={title}
          width={400}
          height={300}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="px-1 pb-2">
        <h3 className="text-white text-lg font-bold">{title}</h3>

        {description && (
          <p className="text-gray-300 text-sm mt-1">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}