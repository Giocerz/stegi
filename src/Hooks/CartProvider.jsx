import { useState } from "react";
import { CartContext } from "./Const";

function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        const existingItemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);

        if (existingItemIndex !== -1) {
            const newCart = [...cart];
            newCart[existingItemIndex].quantity += item.quantity;
            setCart(newCart);
        } else {
            setCart([...cart, item]);
        }
    }

    const removeToCart = (item) => {
        const updateCart = cart.filter((cartItem) => cartItem.id !== item.id);
        setCart(updateCart);
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, removeToCart }} >
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;

