import { useState, useEffect, useRef } from 'react';
import './App.css'
import ProductCard from './Components/ProductCard/ProductCard';
import SliderProducts from './Components/SliderProducts/SliderProducts';
import data from '/src/assets/data.json'

function App() {
  console.log(data)

  return (
    <>
      <header className='header'>
        <img className='logo' src='src/assets/logo.png' />
        <nav className='navigation'>
          <ul>
            <li><a href='#first'>HOT SALE</a><div className='line'></div></li>
            <li><a href='#second'>NEW SALE</a><div className='line'></div></li>
            <li><a href='#third'>EARINGS</a><div className='line'></div></li>
          </ul>
        </nav>
      </header>
      <main>
        <section id='first' className='first' >
          <div className='wrapper'>
            {data && data.map((value) => {
              return <ProductCard key={`first-${value.id}`} image={value.image} title={value.title} price={value.price} />
            })}
          </div>
        </section>
      </main>
    </>
  )
}

export default App
