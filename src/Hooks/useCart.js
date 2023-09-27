import { useContext } from "react";
import { CartContext } from "./Const";

export function useCart() {
    return useContext(CartContext);
}