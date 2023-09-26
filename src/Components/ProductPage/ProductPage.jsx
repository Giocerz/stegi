import { useParams } from "react-router-dom";
import '../ProductsShowcase/ProductShowcase.css'
import './ProductPage.css'
import { useEffect, useState } from "react";
import { ShopButtons } from "../Buttons/ShopButtons";
import { MdStar, MdStarHalf, MdStarBorder } from "react-icons/md";

const ReviewBox = ({ rate, numberReviews }) => {
    const [stars, setStars] = useState([]);

    useEffect(() => {
        let typeStars = [
            <MdStarBorder key='rev-star-1'/>,
            <MdStarBorder key='rev-star-2'/>,
            <MdStarBorder key='rev-star-3'/>,
            <MdStarBorder key='rev-star-4'/>,
            <MdStarBorder key='rev-star-5'/>
        ];
        const decimal = ((rate * 10) % 10) / 10;
        const entero = rate - decimal;
        let i = 0;
        for(i; i < entero; i++) {
            typeStars[i] = <MdStar key={`rev-star-${i + 1}`} />;
        }
        if(decimal > 0) {
            typeStars[i] = <MdStarHalf key={`rev-star-${i + 1}`} />;
        }
        setStars(typeStars);
    }, [rate])
    return(
        <section className='reviewsBox'>
             <span>{rate}</span> 
             <span className='reviewsBox-stars'>{stars && stars.map((value) => value)}</span>
             <span>{`(${numberReviews})`}</span>
        </section>
    )
}

function ProductPage() {
    const params = useParams();
    const [productData, setProductData] = useState();

    useEffect(() => {
        fetch('/src/assets/data.json')
            .then((response) => response.json())
            .then((data) => {
                setProductData(data.filter((value) => value.id === parseInt(params.id))[0]);
            })
    }, [])

    return (
        <section className='product-section'>
            <div className='productPage-container'>
                <header className="productPage-header">
                    <img className='productPage-image' src={`/src/assets/product_images/${productData?.image}`} />
                </header>
                <article className='productPage-info'>
                    <h1 className="productPage-title">{productData?.title}</h1>
                    <ReviewBox rate={productData?.reviews.rating} numberReviews={productData?.reviews.number}/>
                    <span className='productPage-price'>{`$ ${productData?.price}`}</span>
                    <section className='productPage-ship'>
                        <span>Arrives tomorrow</span>
                        <a href=''>More delivery methods</a>
                    </section>
                    <p className='productPage-description'>{productData?.description}</p>
                    <section className='productPage-quantity'>
                        <label htmlFor="quantity">Quantity: </label>
                        <select id="quantity" className='productPage-quantity'>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                        </select>
                    </section>
                    <section className='productPageInfo-btnContainer'>
                        <ShopButtons>Buy</ShopButtons>
                        <ShopButtons>Add to cart</ShopButtons>
                    </section>
                </article>
            </div>
        </section>
    )
}

export default ProductPage;