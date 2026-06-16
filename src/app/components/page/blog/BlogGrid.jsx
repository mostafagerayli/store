import BlogCard from "./BlogCard";

export const blogPosts = [
  {
    id: 1,
    title: "خواص پسته برای سلامت قلب",
    slug: "benefits-of-pistachio-for-heart",
    excerpt:
      "پسته سرشار از آنتی‌اکسیدان و چربی‌های مفید برای سلامت قلب است.",
    image: "/images/luxury_vertical_background_for_a_login_screen._close_up_artistic_shot_of.png",
    category: "سلامت و تغذیه",
    createdAt: "1405/03/20",
  },

  {
    id: 2,
    title: "تفاوت پسته اکبری و احمدآقایی",
    slug: "akbari-vs-ahmad-aghaei",
    excerpt:
      "در این مقاله تفاوت‌های مهم این دو نوع پسته را بررسی می‌کنیم.",
    image: "/images/luxury_vertical_background_for_a_login_screen._close_up_artistic_shot_of.png",
    category: "راهنمای خرید",
    createdAt: "1405/03/15",
  },
];

export default function BlogGrid() {
  return (
    <section className="grid gap-8 mt-14 md:grid-cols-2 lg:grid-cols-3">
      {blogPosts.map((post) => (
        <BlogCard
          key={post.id}
          post={post}
        />
      ))}
    </section>
  );
}