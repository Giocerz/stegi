import { useState } from 'react';
import { useCart } from '../../Hooks/useCart';
import ProductCart from '../../Components/ProductCard/ProductCart';
import './CartPage.css'
import { useEffect } from 'react';

function CartPage() {
    const { cart, removeToCart } = useCart();
    const [total, setTotal] = useState(0);

    useEffect(() => {
        let totalPrice = cart.reduce((subtotal, cartItem) => subtotal + cartItem.price * cartItem.quantity, 0);
        setTotal(totalPrice);
    }, [cart])

    return (
        <section className='cartPage-section'>
            {
                cart.length !== 0
                    ?
                    <div className='cartPage-container'>
                        <h1>Cart</h1>
                        {cart.map((cartItem) => <ProductCart key={`cart-prod-${cartItem.id}`} data={cartItem} removeToCart={removeToCart} />)}
                        <div className='cartPage-total'>
                            <h2>{`Total: $ ${total}`}</h2>
                        </div>
                    </div>
                    :
                    <div className='cartPage-container empty'>
                        <h1>There are no products here</h1>
                        <img width={200} src='/src/assets/emptyCart.jpg' />
                    </div>
            }
        </section>
    )
}

export default CartPage;