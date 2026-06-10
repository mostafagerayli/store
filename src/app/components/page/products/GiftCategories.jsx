export default function GiftCategories() {
  return (
    <div className="mt-8 grid grid-cols-2 gap-4">

      <div className="bg-[#0b5b3c] text-white rounded-2xl p-5 text-center">
        <div className="text-xl mb-2">🎁</div>
        <h3 className="font-bold text-sm">طراحی اختصاصی</h3>
      </div>

      <div className="bg-white border rounded-2xl p-5 text-center">
        <div className="text-xl mb-2">🥜</div>
        <h3 className="font-bold text-sm text-[#0b5b3c]">
          هدیه پسته‌ای
        </h3>
      </div>

    </div>
  );
}