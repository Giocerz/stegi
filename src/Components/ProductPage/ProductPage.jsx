import ProductCard from "../ProductCard/ProductCard";
import '../ProductsShowcase/ProductShowcase.css'
import './ProductPage.css'

function ProductPage() {
    return (
        <section className='product-section'>
            <div className='productPage-container'>
                <header className="productPage-header">
                    <img className='productPage-image' src='/src/assets/product_images/collar_snk.jpg' />
                </header>
                <article className='productPage-info'>
                    <aside>
                        <h2 className="productPage-title">Nombre producto</h2>
                        <span className='reviews'></span>
                        <span className='price-span'>$ 5000</span>
                    </aside>
                </article>
            </div>
        </section>
    )
}

export default ProductPage;