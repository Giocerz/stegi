import './ShopButtons.css'
import { Link } from 'react-router-dom';

export function ShopButtons({ children, size = '' }) {
    return (
        <button className={`shopbuttons-btn ${size}`}>
            <div className='shopbuttons-circle'></div>
            <span className='shopbuttons-text'>{children}</span>
        </button>
    )
}

export function ShopLinks({ children, size = '', toLink }) {
    return (
        <Link className={`shopbuttons-btn ${size}`} to={toLink}>
            <div className='shopbuttons-circle'></div>
            <span className='shopbuttons-text'>{children}</span>
        </Link>
    )
}