import { ShopButtons, ShopModifyButtons } from '../Buttons/ShopButtons';
import './ProductCart.css'
import { Link } from 'react-router-dom'
import { MdDeleteForever } from "react-icons/md";

function ProductCart({ data, removeToCart }) {
    const handleRemove = () => {
        removeToCart(data);
    }

    return (
        <article className='productCart'>
            <header className='productCart-header'>
                <img alt={data?.description} className='productCart-image' src={`/src/assets/product_images/${data?.image}`} />
                <div className='productCart-details'>
                    <Link style={{ color: 'black', textDecoration: 'none' }} to={`/product/${data?.id}`}><h3>{data?.title}</h3></Link>
                    <span className='productCart-quantity'>{`Amount: ${data?.quantity}`}</span>
                    <span className='productCart-price'>{`Price: $${data?.price}`}</span>
                </div>
            </header>
            <aside className='productCart-panel'>
                <ShopModifyButtons type={'delete'} onClick={handleRemove}><MdDeleteForever /></ShopModifyButtons>
            </aside>
        </article>
    )
}

export default ProductCart;