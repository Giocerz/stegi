import { useCart } from '../../Hooks/useCart';
import './CartPage.css'

function CartPage() {
    const { cart } = useCart();
    console.log(cart)

    return (
        <section className='cartPage-section'>
            <div className='cartPage-container'>
                <h1>Cart</h1>
                {cart.map((cartItem) => <li key={`cart-prod-${cartItem.id}`}>{cartItem.title}</li>)}
            </div>
        </section>
    )
}

export default CartPage;