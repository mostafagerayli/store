import BlogGrid from "@/app/components/page/blog/BlogGrid";
import BlogHero from "@/app/components/page/blog/BlogHero";
import CategoryFilter from "@/app/components/page/blog/CategoryFilter";
import FeaturedPost from "@/app/components/page/blog/FeaturedPost";
import Footer from "@/app/layout/Footer";
import Header from "@/app/layout/Header";

type SearchParams = {
  page?: string;
};

type BlogPageProps = {
  searchParams: Promise<SearchParams>;
};

export default async function BlogPage({ searchParams }: BlogPageProps) {
  return (
    <>
      <Header />

      <section className="w-full">
        <BlogHero />
      </section>

      <section className="container mx-auto px-4">
        <FeaturedPost />

        <CategoryFilter />

        <BlogGrid searchParams={searchParams} />

      </section>

      <Footer />
    </>
  );
}
