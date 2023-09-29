import './ShopButtons.css'
import { Link } from 'react-router-dom';

export function ShopButtons({ children, onClick, size = '' }) {
    return (
        <button className={`shopbuttons-btn ${size}`} onClick={onClick}>
            <div className='shopbuttons-circle'></div>
            <span className='shopbuttons-text'>{children}</span>
        </button>
    )
}

export function ShopLinks({ children, size = '', toLink }) {
    return (
        <Link className={`shopbuttons-link ${size}`} to={toLink}>
            <div className='shopbuttons-circle'></div>
            <span className='shopbuttons-text'>{children}</span>
        </Link>
    )
}