import BlogDetail from "@/app/components/page/blog/BlogDetail";
import Footer from "@/app/layout/Footer";
import Header from "@/app/layout/Header";
import { notFound } from "next/navigation";

type BlogPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BlogPage({
  params,
}: BlogPageProps) {

  const { slug } = await params;

  const decodedSlug = decodeURIComponent(slug);

  console.log("BLOG SLUG:", decodedSlug);


  const res = await fetch(
    `http://localhost:3000/api/blogs/${encodeURIComponent(decodedSlug)}`,
    {
      cache: "no-store",
    }
  );


  console.log("BLOG RESPONSE:", res.status);


  if (!res.ok) {
    notFound();
  }


  const blog = await res.json();


  return (
    <>
      <Header />

      <BlogDetail blog={blog} />

      <Footer />
    </>
  );
}