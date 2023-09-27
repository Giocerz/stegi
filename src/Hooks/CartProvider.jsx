import { useState } from "react";
import { CartContext } from "./Const";

function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        if(cart.some((cartItem) => cartItem.id === item.id)) return;
        setCart([...cart, item]);
    }

    const removeToCart = (item) => {
        const updateCart = cart.filter((cartItem) => cartItem.id !== item.id);
        setCart(updateCart);
    }

    return(
        <CartContext.Provider value={{cart, addToCart, removeToCart}} >
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;

