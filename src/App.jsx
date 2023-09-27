import { useEffect, useState } from 'react';
import './App.css'
import { Link, Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';
import ProductPage from './Components/ProductPage/ProductPage';
import SliderProducts from './Components/SliderProducts/SliderProducts';
import Header from './Components/Header/Header';
import CartPage from './Components/CartPage/CartPage';
import CartProvider from './Hooks/CartProvider';

function App() {
  const [productData, setProductsData] = useState();

  useEffect(() => {
    fetch('/src/assets/data.json')
      .then((response) => response.json())
      .then((data) => setProductsData(data))
  }, [])

  return (
    <>
      <Header />
      <main>
        <CartProvider>
          <Routes>
            <Route path='/cart' element={<CartPage />} />
            <Route path='/product/:id' element={<ProductPage />} />
            <Route path='/' element={<HomePage data={productData} />} />
          </Routes>
        </CartProvider>
      </main>
      <footer className='footer'>
        <div className='pay-container'>
          <span>Pay methods: </span>
          <img src='/src/assets/medios-1.png' />
        </div>
        <div className='footer-copy'>
          <p>&copy; 2023. Stegi Store. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default App
