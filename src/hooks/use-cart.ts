import { Product } from "@/payload-types";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type CartItem = {
  product: Product;
};

type CartState = {
  items: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
};

export const useCart = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      removeFromCart: (productId) =>
        set((state) => ({
          items: state.items.filter((items) => items.product.id !== productId),
        })),
      clearCart: () => set((state) => ({ items: [] })),
      addToCart: (product) =>
        set((state) => {
          return {
            items: [...state.items, { product }],
          };
        }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
