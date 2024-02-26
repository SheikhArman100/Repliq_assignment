import { create } from "zustand";
import { persist } from "zustand/middleware";

const cartStore = () => {
    cart: [];
  };
  export const useCartStore = create(
    persist(cartStore, {
      name: "cart",
    })
  );

  export const useCart = () => useCartStore((state) => state?.cart);

  export const addToCart = (product) => {
    useCartStore.setState((state) => ({
      cart: !state.cart ? [{quantity:1,totalPrice:product.price,...product}] : [{quantity:1,totalPrice:product.price,...product}, ...state.cart],
    }));
  };

  export const removeFromCart = (cartTitle) => {
    useCartStore.setState((state) => ({
      cart: state.cart.filter((product) => product.title !== cartTitle),
    }));
  };

  export const increaseQuantity = (cartTitle) => {
    useCartStore.setState((state) => ({
      cart: state.cart.map((item) =>
        item.title === cartTitle
          ? {
              ...item,
              quantity: item.quantity + 1,
              totalPrice: parseFloat((item.price * (item.quantity + 1)).toFixed(2))
            }
          : item
      ),
    }));
  };

  export const decreaseQuantity = (cartTitle) => {
    useCartStore.setState((state) => ({
      cart: state.cart.map((item) =>
        item.title === cartTitle
          ? {
              ...item,
              quantity: item.quantity > 1 ? item.quantity - 1 : 1,
              totalPrice:
                item.quantity > 1
                  ? parseFloat((item.price * (item.quantity - 1)).toFixed(2))
                  : parseFloat((item.price * 1).toFixed(2)),
            }
          : item
      ),
    }));
  };