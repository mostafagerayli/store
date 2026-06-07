"use client";
import { useDispatch, useSelector } from "react-redux";
import Header from "@/app/layout/Header";
import { increaseQuantity, decreaseQuantity, removeFromCart, clearCart } from "@/app/store/cart/shoppingCartSlice";
import CartItem from "@/app/components/shoppingCart/CartItem";
import OrderSummary from "@/app/components/shoppingCart/OrderSummery";

export default function ShoppingCartPage() {
  const { items, totalQuantity, totalPrice } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 px-4 py-10">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {items?.map(item => (
                <CartItem
                  key={item.id}
                  item={item}
                  onIncrease={() => dispatch(increaseQuantity(item.id))}
                  onDecrease={() => dispatch(decreaseQuantity(item.id))}
                  onRemove={() => dispatch(removeFromCart(item.id))}
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
    </>
  );
}
