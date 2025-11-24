import './styles/header.css';
import headerLogo from './Images/headerLogo.svg';
import search from './Images/search.svg';
import cart from './Images/shopIcon.svg';

export default function Header() {

    return (
        <div className="header-bg">
            <div className="wrapper header">
                <a href="#">
                    <img src={headerLogo} alt="logo" />
                </a>
                <div className='header-links'>
                    <a href="#">Home</a>
                    <a href="#">Products</a>
                    <a href="#">About us</a>
                    <a href="#">Contact us</a>
                </div>
                <div className='header-right'>
                    <input type='text' placeholder='Search'></input>
                    <img src={search} alt="search" />
                    <a href="#" className='shopcart'><img src={cart} alt="cart" />3</a>
                    
                </div>
            </div>
        </div>
    )
}