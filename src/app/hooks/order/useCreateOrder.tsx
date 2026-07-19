"use client";

import { useAppSelector } from "@/app/store/hook";
import { selectCartItems } from "@/app/store/cart/shoppingCartSlice";
import { OrderFormData } from "@/types/order";
import { createOrder } from "@/app/lib/actions/order.actions";

export function useCreateOrder() {
  const items = useAppSelector(selectCartItems);

  const submitOrder = async (data: OrderFormData) => {
    const formData = new FormData();

    formData.append("full_name", data.full_name);
    formData.append("phone", data.phone);
    formData.append("province", data.province);
    formData.append("city", data.city);
    formData.append("address", data.address);
    formData.append("postal_code", data.postal_code ?? "");
    formData.append("description", data.description ?? "");

    formData.append("products", JSON.stringify(items));

    return await createOrder(formData);
  };

  return {
    submitOrder,
  };
}