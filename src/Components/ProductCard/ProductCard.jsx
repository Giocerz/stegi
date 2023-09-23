import { useState } from 'react';
import './ProductCard.css'

function ProductCard({ image, title, price }) {
    const [like, setLike] = useState(false);

    return (
        <article className='product'>
            <header className='product-header'>
                <button className='like-btn' onClick={() => setLike(!like)}>
                    {
                        like
                        ?
                        <span className="material-symbols-outlined liked">favorite</span>
                        :
                        <span className="material-symbols-outlined unliked">favorite</span>
                    }
                </button>
                <img className='product-front-image' src={`/src/assets/product_images/${image}`} />
            </header>
            <footer className='product-info'>
                <h4 className='product-name'>{title}</h4>
                <span className='product-price'>${price}</span>
                <button className='buy-btn'>
                    <div className='btn-circle'></div>
                    <span className='btn-text'>Comprar</span>
                </button>
            </footer>
        </article>
    )
}

export default ProductCard;