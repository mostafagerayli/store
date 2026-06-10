import GiftSlider from "./GiftSlider";
import GiftCategories from "./GiftCategories";

export default function GiftPage() {
  return (
    <main className="bg-[#f7f5ef] min-h-screen px-4 py-10">

      <h1 className="text-center text-2xl font-bold text-[#0b5b3c] mb-6">
        محصولات ویژه و کادویی
      </h1>

      <GiftSlider />

      <GiftCategories />

    </main>
  );
}