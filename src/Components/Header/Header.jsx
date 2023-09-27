import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Header.css'

function Header() {
    const [searchBar, setSearchBar] = useState(false);
    const [actText, setActText] = useState(0);

    const topAdTexts = [
        'YOU RECEIVE YOUR ORDERS THE NEXT DAY',
        'YOU CAN MAKE PAYMENT WHEN YOU RECEIVE YOUR ORDER',
    ];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setActText((prevActText) => (prevActText + 1) % topAdTexts.length);
        }, 6000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <header className='header'>
            <div className='header-ad-top'>
                <span key={actText}>{topAdTexts[actText]}</span>
            </div>
            <Link to='/'>
                <img className='logo' src='/src/assets/logo.png' />
            </Link>
            <nav className='navigation'>
                <ul>
                    <li><a href='#first'>HOT SALE</a><div className='line'></div></li>
                    <li><a href='#second'>NEW SALE</a><div className='line'></div></li>
                    <li><Link to='/cart'>EARRINGS</Link><div className='line'></div></li>
                </ul>
            </nav>
            {searchBar && <section className='search-bar'></section>}
        </header>
    )
}

export default Header;