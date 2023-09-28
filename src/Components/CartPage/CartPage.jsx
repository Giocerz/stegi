import { useState } from 'react';
import { useCart } from '../../Hooks/useCart';
import ProductCart from '../ProductCard/ProductCart';
import './CartPage.css'
import { useEffect } from 'react';

function CartPage() {
    const { cart, removeToCart } = useCart();
    const [total, setTotal] = useState(0);

    useEffect(() => {
        let totalPrice = cart.reduce((subtotal, cartItem) => subtotal + cartItem.price * cartItem.quantity,0);
        setTotal(totalPrice);
    },[cart])

    return (
        <section className='cartPage-section'>
            <div className='cartPage-container'>
                <h1>Cart</h1>
                {cart.map((cartItem) => <ProductCart key={`cart-prod-${cartItem.id}`} data={cartItem} removeToCart={removeToCart} />)}
                <div className='cartPage-total'>
                    <h2>{`Total: $ ${total}`}</h2>
                </div>
            </div>
        </section>
    )
}

export default CartPage;