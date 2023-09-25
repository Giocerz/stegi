import './ProductShowcase.css'
import ProductCard from "../ProductCard/ProductCard"

function ProductShowcase({ data }) {
    return (
        <div className='productShowcase-wrapper'>
            {data && data.map((value) => {
                return <ProductCard key={`first-${value.id}`} id={value.id} image={value.image} title={value.title} price={value.price} />
            })}
        </div>
    )
}

export default ProductShowcase;