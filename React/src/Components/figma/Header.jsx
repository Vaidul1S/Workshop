import './styles/header.css';
import headerLogo from './Images/headerLogo.svg';

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
                <div>
                    <input type='text' placeholder='Search'></input>
                    <a href="#">🔎 🛒</a>
                </div>
            </div>
        </div>
    )
}