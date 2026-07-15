"use client";

import Header from "@/app/layout/Header";
import Footer from "@/app/layout/Footer";

import CartItem from "@/app/components/shoppingCart/CartItem";
import OrderSummary from "@/app/components/shoppingCart/OrderSummery";

import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
  selectCartItems,
  selectCartQuantity,
  selectCartTotal,
} from "@/app/store/cart/shoppingCartSlice";

import {
  useAppDispatch,
  useAppSelector,
} from "@/app/store/hook";

export default function ShoppingCartPage() {
  const dispatch = useAppDispatch();

  const items = useAppSelector(selectCartItems);
  const totalPrice = useAppSelector(selectCartTotal);
  const totalQuantity = useAppSelector(selectCartQuantity);

  return (
    <>
      <Header />

      <div className="min-h-screen bg-[#f7f5ef] px-4 py-10">
        <div className="max-w-6xl mx-auto">
          <h1 className="mb-8 text-2xl font-bold text-gray-900 md:text-3xl">
            سبد خرید
          </h1>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="space-y-4 lg:col-span-2">
              {items.map((item) => (
                <CartItem
                  key={`${item.id}-${item.selectedWeight}`}
                  item={item}
                  onIncrease={() =>
                    dispatch(
                      increaseQuantity({
                        id: item.id,
                        selectedWeight: item.selectedWeight,
                      })
                    )
                  }
                  onDecrease={() =>
                    dispatch(
                      decreaseQuantity({
                        id: item.id,
                        selectedWeight: item.selectedWeight,
                      })
                    )
                  }
                  onRemove={() =>
                    dispatch(
                      removeFromCart({
                        id: item.id,
                        selectedWeight: item.selectedWeight,
                      })
                    )
                  }
                />
              ))}
            </div>

            <OrderSummary
              totalQuantity={totalQuantity}
              totalPrice={totalPrice}
              onClearCart={() => dispatch(clearCart())}
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}