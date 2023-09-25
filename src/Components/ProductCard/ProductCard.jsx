import { useState, useEffect } from 'react';
import './ProductCard.css'
import { Link } from 'react-router-dom';

function ProductCard({ id, image, title, price }) {
    const [like, setLike] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.src = `/src/assets/product_images/${image}`;
        img.onload = () => {
            setImageLoaded(true);
        };
    }, [image]);

    return (
        <article className='product-card'>
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
                <div className='product-image-container'>
                    {
                        imageLoaded
                            ?
                            <img className='product-front-image' src={`/src/assets/product_images/${image}`} />
                            :
                            <div className='productCard-image-skeleton'>Cargando...</div>
                    }
                </div>
            </header>
            <footer className='product-info'>
                <h4 className='product-name'>{title}</h4>
                <span className='product-price'>${price}</span>
                <Link className='buy-btn' to={`/product/${id}`}>
                    <div className='btn-circle'></div>
                    <span className='btn-text'>See more</span>
                </Link>
            </footer>
        </article>
    )
}

export default ProductCard;