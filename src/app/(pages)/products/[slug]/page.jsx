import ProductDetail from "@/app/components/page/product-details/ProductDetail";
import Footer from "@/app/layout/Footer";
import Header from "@/app/layout/Header";

async function getProduct(slug) {
  const res = await fetch(`http://localhost:3000/api/products/slug/${slug}`, {
    cache: "force-cache",
    next: { revalidate: 60 },
  });

  return res.json();
}

export default async function Page({ params }) {
  const { slug } = await params; // ✅ مهم

  const product = await getProduct(slug);

  return (
    <>
      <Header />
      <ProductDetail product={product} />
      <Footer />
    </>
  );
}
