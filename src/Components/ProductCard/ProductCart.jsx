import { ShopButtons } from '../Buttons/ShopButtons';
import './ProductCart.css'
import { Link } from 'react-router-dom'

function ProductCart({ data, removeToCart }) {
    const handleRemove = () => {
        removeToCart(data);
    }

    return(
        <article className='productCart'>
            <header className='productCart-header'>
                <img className='productCart-image' src={`/src/assets/product_images/${data?.image}`}/>
                <Link style={{color: 'black', textDecoration: 'none'}} to={`/product/${data?.id}`}><h3>{data?.title}</h3></Link>
            </header>
            <aside className='productCart-panel'>
                <ShopButtons size={'large'} onClick={handleRemove}>Delete</ShopButtons>
                <span className='productCart-quantity'>{data?.quantity}</span>
                <span className='productCart-price'>{`$ ${data?.price}`}</span>
            </aside>
        </article>
    )
}

export default ProductCart;