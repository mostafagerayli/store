import CategoryItem from "./CategoryItem";

export default function ProductsSidebar() {
  return (
    <aside className="lg:col-span-3 order-1 lg:order-none">
      <div className="bg-white rounded-2xl md:rounded-3xl p-5 md:p-6">
        <h3 className="font-bold text-[#0b5b3c] mb-4">دسته‌بندی</h3>

        <ul className="space-y-3 text-sm text-gray-600">
          <CategoryItem title="پسته اکبری" value="اکبری" />
          <CategoryItem title="پسته احمدآقایی" value="احمدآقایی" />
          <CategoryItem title="پسته سفید" value="سفید" />
          <CategoryItem title="پسته کله قوچی" value="کله قوچی" />
        </ul>
      </div>

      <div className="bg-[#0b5b3c] text-white rounded-2xl md:rounded-3xl p-5 md:p-6 mt-4 md:mt-6">
        <h4 className="font-bold mb-2">محصولات ویژه</h4>
        <p className="text-sm opacity-90">
          بهترین محصولات صادراتی با کیفیت تضمینی
        </p>
      </div>
    </aside>
  );
}