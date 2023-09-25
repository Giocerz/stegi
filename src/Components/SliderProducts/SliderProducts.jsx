import { useRef } from "react";
import ProductCard from "../ProductCard/ProductCard";
import './SliderProducts.css'

function SliderProducts() {

    const slideshow = useRef(null);

    console.log('hola')

    const siguiente = () => {
        const lenCurrent = slideshow.current.children.length;
        if (lenCurrent > 0) {
            const firstElement = slideshow.current.children[0];

            console.log(firstElement)

            slideshow.current.style.transition = '300ms ease-out all';

            const sizeSlide = slideshow.current.children[0].offsetWidth;
            console.log(sizeSlide)

            slideshow.current.style.transform = `translateX(-${sizeSlide + 20}px)`;

            const transition = () => {
              slideshow.current.style.transition = 'none';
              slideshow.current.style.transform = `translateX(0)`;

              slideshow.current.appendChild(firstElement);
            }
            slideshow.current.addEventListener('transitionend', transition);
        }
    }

    return (
        <div className='slider-main-container'>
            <div className='slideshow' ref={slideshow}>
                <ProductCard title={'Pendientes Hanafuda'} image={'collar_tsunade.jpg'} />
                <ProductCard title={'Pendientes 2'} image={'collar_tsunade.jpg'} />
                <ProductCard title={'Pendientes 3'} image={'collar_tsunade.jpg'} />
                <ProductCard title={'Pendientes 4'} image={'collar_tsunade.jpg'} />
                <ProductCard title={'Pendientes 5'} image={'collar_tsunade.jpg'} />
                <ProductCard title={'Pendientes 6'} image={'collar_tsunade.jpg'} />
                <ProductCard title={'Pendientes 7'} image={'collar_tsunade.jpg'} />
                <ProductCard title={'Pendientes 8'} image={'collar_tsunade.jpg'} />
            </div>
            <div className='container-buttons'>
                <button>{'<'}</button>
                <button onClick={siguiente}>{'>'}</button>
            </div>
        </div>
    )
}

export default SliderProducts;