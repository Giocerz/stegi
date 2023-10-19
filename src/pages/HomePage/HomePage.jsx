import ProductShowcase from "../../Components/ProductsShowcase/ProductsShowcase"

function HomePage({data}) {
    return(
        <section id='first' className='first' >
          <ProductShowcase data={data} />
        </section>
    )
}

export default HomePage;