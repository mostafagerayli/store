import Image from "next/image";
type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BlogDetail({ params }: Props) {
  const res = await fetch(`/api/blog/${params.slug}`);
  const post = await res.json();

  return (
    <article className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <Image src={post.coverImage} alt={post.title} className="my-4 rounded-xl" />
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
}