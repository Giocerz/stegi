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
                <Link to={`/product/${data?.id}`}><h3>{data?.title}</h3></Link>
            </header>
            <aside className='productCart-panel'>
                <button className='productCart-delete' onClick={handleRemove}>Delete</button>
                <span className='productCart-quantity'>{data?.quantity}</span>
                <span className='productCart-price'>{`$ ${data?.price}`}</span>
            </aside>
        </article>
    )
}

export default ProductCart;