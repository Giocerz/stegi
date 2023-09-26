import { useParams } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import '../ProductsShowcase/ProductShowcase.css'
import './ProductPage.css'
import { useEffect, useState } from "react";
import { ShopButtons } from "../Buttons/ShopButtons";

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
                    <span className='reviews'></span>
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